const STORAGE_KEYS = {
  USER_PROFILE: "pathai_user_profile",
  QUIZ_ANSWERS: "pathai_quiz_answers",
  TARGET_CAREER_ID: "pathai_target_career_id",
  SKILL_STATES: "pathai_skill_states",
  ROADMAP_PROGRESS: "pathai_roadmap_progress",
  SAVED_JOBS: "pathai_saved_jobs",
  RESUME_STATE: "pathai_resume_state",
  THEME: "pathai_theme",
  ACHIEVEMENTS: "pathai_achievements"
};

export const DEFAULT_PROFILE = {
  name: "Alex Rivera",
  headline: "Aspiring Tech Professional",
  experienceLevel: "Entry-Level / Student",
  location: "San Francisco, CA",
  targetSalary: "$120,000",
  bio: "Passionate about building scalable modern software and harnessing artificial intelligence to solve real-world problems."
};

export function loadFromStorage(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null || raw === undefined) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`Error loading ${key} from localStorage:`, e);
    return defaultValue;
  }
}

export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
}

export function clearAllStorage() {
  try {
    Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
  } catch (e) {
    console.error("Error clearing storage:", e);
  }
}

export { STORAGE_KEYS };
