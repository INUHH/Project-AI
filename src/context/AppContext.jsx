import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { CAREERS_DATA } from "../data/careersData";
import { calculateRecommendations } from "../utils/recommendationEngine";
import { analyzeResume } from "../utils/resumeAnalyzer";
import { SAMPLE_RESUMES } from "../data/sampleResumes";
import {
  STORAGE_KEYS,
  DEFAULT_PROFILE,
  loadFromStorage,
  saveToStorage,
  clearAllStorage
} from "../utils/storage";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Theme state
  const [theme, setTheme] = useState(() => loadFromStorage(STORAGE_KEYS.THEME, "light"));

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.THEME, theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("dashboard");

  // User Profile
  const [userProfile, setUserProfile] = useState(() => 
    loadFromStorage(STORAGE_KEYS.USER_PROFILE, DEFAULT_PROFILE)
  );
  const updateProfile = (updates) => {
    setUserProfile(prev => {
      const next = { ...prev, ...updates };
      saveToStorage(STORAGE_KEYS.USER_PROFILE, next);
      return next;
    });
  };

  // Quiz Answers
  const [quizAnswers, setQuizAnswers] = useState(() => 
    loadFromStorage(STORAGE_KEYS.QUIZ_ANSWERS, {})
  );

  const saveQuizAnswers = (answers) => {
    setQuizAnswers(answers);
    saveToStorage(STORAGE_KEYS.QUIZ_ANSWERS, answers);
    unlockAchievement("quiz_champion");
  };

  const quizCompleted = Object.keys(quizAnswers).length >= 3;

  // Recommendations calculated dynamically from quiz answers
  const recommendations = useMemo(() => {
    return calculateRecommendations(quizAnswers);
  }, [quizAnswers]);

  // Selected Target Career (defaults to #1 recommendation)
  const [targetCareerId, setTargetCareerIdState] = useState(() => {
    const saved = loadFromStorage(STORAGE_KEYS.TARGET_CAREER_ID, null);
    if (saved) return saved;
    return recommendations[0]?.career?.id || "ai-engineer";
  });

  const setTargetCareerId = (id) => {
    setTargetCareerIdState(id);
    saveToStorage(STORAGE_KEYS.TARGET_CAREER_ID, id);
  };

  // Active target career object
  const targetCareer = useMemo(() => {
    return CAREERS_DATA.find(c => c.id === targetCareerId) || recommendations[0]?.career || CAREERS_DATA[0];
  }, [targetCareerId, recommendations]);

  // Custom Skill Status Overrides: { [skillId]: 'Proficient' | 'In Progress' | 'Missing' }
  const [skillStates, setSkillStates] = useState(() => 
    loadFromStorage(STORAGE_KEYS.SKILL_STATES, {})
  );

  const setSkillStatus = (skillId, status) => {
    setSkillStates(prev => {
      const next = { ...prev, [skillId]: status };
      saveToStorage(STORAGE_KEYS.SKILL_STATES, next);
      unlockAchievement("skill_strategist");
      return next;
    });
  };

  // Roadmap Progress Checklist: { [`${careerId}_p${phase}_item${idx}`]: boolean }
  const [roadmapProgress, setRoadmapProgress] = useState(() => 
    loadFromStorage(STORAGE_KEYS.ROADMAP_PROGRESS, {})
  );

  const toggleRoadmapItem = (careerId, phaseIdx, itemIdx) => {
    const key = `${careerId}_p${phaseIdx}_item${itemIdx}`;
    setRoadmapProgress(prev => {
      const next = { ...prev, [key]: !prev[key] };
      saveToStorage(STORAGE_KEYS.ROADMAP_PROGRESS, next);
      unlockAchievement("roadmap_trailblazer");
      return next;
    });
  };

  const getRoadmapStats = (careerId) => {
    const career = CAREERS_DATA.find(c => c.id === careerId) || targetCareer;
    let totalItems = 0;
    let completedItems = 0;

    career.roadmap.forEach((phase, pIdx) => {
      phase.topics.forEach((_, tIdx) => {
        totalItems++;
        if (roadmapProgress[`${career.id}_p${pIdx}_item${tIdx}`]) {
          completedItems++;
        }
      });
    });

    const percent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    return { totalItems, completedItems, percent };
  };

  // Saved Jobs & Application tracker: Array of { id, status: 'saved' | 'applied' | 'interviewing' | 'offered', savedAt }
  const [savedJobs, setSavedJobs] = useState(() => 
    loadFromStorage(STORAGE_KEYS.SAVED_JOBS, [
      { id: "job-1", status: "saved", savedAt: new Date().toISOString() },
      { id: "job-3", status: "applied", savedAt: new Date().toISOString() }
    ])
  );

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => {
      const exists = prev.find(j => j.id === jobId);
      let next;
      if (exists) {
        next = prev.filter(j => j.id !== jobId);
      } else {
        next = [...prev, { id: jobId, status: "saved", savedAt: new Date().toISOString() }];
        unlockAchievement("job_hunter");
      }
      saveToStorage(STORAGE_KEYS.SAVED_JOBS, next);
      return next;
    });
  };

  const updateJobStatus = (jobId, status) => {
    setSavedJobs(prev => {
      const exists = prev.find(j => j.id === jobId);
      let next;
      if (exists) {
        next = prev.map(j => (j.id === jobId ? { ...j, status } : j));
      } else {
        next = [...prev, { id: jobId, status, savedAt: new Date().toISOString() }];
      }
      saveToStorage(STORAGE_KEYS.SAVED_JOBS, next);
      return next;
    });
  };

  const isJobSaved = (jobId) => savedJobs.some(j => j.id === jobId);

  // Resume State
  const [resumeText, setResumeText] = useState(() => {
    const saved = loadFromStorage(STORAGE_KEYS.RESUME_STATE, null);
    return saved?.text || SAMPLE_RESUMES[0].text;
  });

  const [resumeTargetId, setResumeTargetId] = useState(() => {
    const saved = loadFromStorage(STORAGE_KEYS.RESUME_STATE, null);
    return saved?.targetCareerId || targetCareerId;
  });

  const resumeAnalysis = useMemo(() => {
    return analyzeResume(resumeText, resumeTargetId);
  }, [resumeText, resumeTargetId]);

  const updateResumeText = (text) => {
    setResumeText(text);
    saveToStorage(STORAGE_KEYS.RESUME_STATE, { text, targetCareerId: resumeTargetId });
    unlockAchievement("resume_polisher");
  };

  const setResumeTargetCareer = (id) => {
    setResumeTargetId(id);
    saveToStorage(STORAGE_KEYS.RESUME_STATE, { text: resumeText, targetCareerId: id });
  };

  // Achievements
  const [achievements, setAchievements] = useState(() => 
    loadFromStorage(STORAGE_KEYS.ACHIEVEMENTS, [
      { id: "welcome", title: "Explorer", desc: "Welcome to PathAI Career Copilot", date: new Date().toLocaleDateString() }
    ])
  );

  const unlockAchievement = (badgeId) => {
    const catalog = {
      quiz_champion: { id: "quiz_champion", title: "Career Clarity", desc: "Completed the AI Career Assessment" },
      skill_strategist: { id: "skill_strategist", title: "Skill Strategist", desc: "Customized your Skill Gap Analysis" },
      roadmap_trailblazer: { id: "roadmap_trailblazer", title: "Roadmap Pioneer", desc: "Completed your first learning milestone" },
      job_hunter: { id: "job_hunter", title: "Opportunity Scout", desc: "Saved your first high-match career job" },
      resume_polisher: { id: "resume_polisher", title: "ATS Master", desc: "Audited and optimized your resume keywords" }
    };

    const badge = catalog[badgeId];
    if (!badge) return;

    setAchievements(prev => {
      if (prev.some(b => b.id === badgeId)) return prev;
      const next = [...prev, { ...badge, date: new Date().toLocaleDateString() }];
      saveToStorage(STORAGE_KEYS.ACHIEVEMENTS, next);
      return next;
    });
  };

  // Load Demo Data for instant presentation
  const loadDemoData = () => {
    const demoAnswers = {
      interests: "ai_ml",
      work_style: "deep_focused_code",
      skills_strengths: ["s_python", "s_sql_databases", "s_linux_cloud"],
      career_priorities: "v_cutting_edge",
      math_code_balance: "p_love_math_stats"
    };
    saveQuizAnswers(demoAnswers);
    setTargetCareerId("ai-engineer");
    
    // Set some skills as proficient
    const demoSkills = {
      python: "Proficient",
      "math-stats": "In Progress",
      pytorch: "In Progress",
      "llm-rag": "Proficient",
      vectordb: "Proficient"
    };
    setSkillStates(demoSkills);
    saveToStorage(STORAGE_KEYS.SKILL_STATES, demoSkills);

    // Set some roadmap milestones
    const demoRoadmap = {
      "ai-engineer_p0_item0": true,
      "ai-engineer_p0_item1": true,
      "ai-engineer_p0_item2": true,
      "ai-engineer_p1_item0": true
    };
    setRoadmapProgress(demoRoadmap);
    saveToStorage(STORAGE_KEYS.ROADMAP_PROGRESS, demoRoadmap);

    setSavedJobs([
      { id: "job-1", status: "interviewing", savedAt: new Date().toISOString() },
      { id: "job-2", status: "saved", savedAt: new Date().toISOString() },
      { id: "job-3", status: "applied", savedAt: new Date().toISOString() }
    ]);

    setResumeText(SAMPLE_RESUMES[1].text);
    setResumeTargetId("ai-engineer");

    unlockAchievement("quiz_champion");
    unlockAchievement("skill_strategist");
    unlockAchievement("roadmap_trailblazer");
    unlockAchievement("job_hunter");
    unlockAchievement("resume_polisher");
  };

  // Reset all user data
  const resetAllData = () => {
    clearAllStorage();
    setQuizAnswers({});
    setTargetCareerId("ai-engineer");
    setSkillStates({});
    setRoadmapProgress({});
    setSavedJobs([]);
    setUserProfile(DEFAULT_PROFILE);
    setResumeText(SAMPLE_RESUMES[0].text);
    setAchievements([{ id: "welcome", title: "Explorer", desc: "Welcome to PathAI Career Copilot", date: new Date().toLocaleDateString() }]);
    setActiveTab("quiz");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        activeTab,
        setActiveTab,
        userProfile,
        updateProfile,
        quizAnswers,
        saveQuizAnswers,
        quizCompleted,
        recommendations,
        targetCareerId,
        setTargetCareerId,
        targetCareer,
        skillStates,
        setSkillStatus,
        roadmapProgress,
        toggleRoadmapItem,
        getRoadmapStats,
        savedJobs,
        toggleSaveJob,
        updateJobStatus,
        isJobSaved,
        resumeText,
        updateResumeText,
        resumeTargetId,
        setResumeTargetCareer,
        resumeAnalysis,
        achievements,
        unlockAchievement,
        loadDemoData,
        resetAllData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
