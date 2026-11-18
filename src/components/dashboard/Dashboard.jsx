import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { CAREERS_DATA } from "../../data/careersData";
import { JOBS_DATA } from "../../data/jobsData";
import ExportBlueprintModal from "./ExportBlueprintModal";
import {
  Compass,
  Sparkles,
  Award,
  Layers,
  BookOpen,
  Briefcase,
  TrendingUp,
  Shield,
  DollarSign,
  CheckCircle2,
  Circle,
  ArrowRight,
  Printer,
  Edit3,
  Check,
  X,
  Target,
  ExternalLink,
  Flame,
  Zap
} from "lucide-react";

export default function Dashboard() {
  const {
    userProfile,
    updateProfile,
    targetCareer,
    targetCareerId,
    setTargetCareerId,
    quizCompleted,
    recommendations,
    skillStates,
    roadmapProgress,
    toggleRoadmapItem,
    getRoadmapStats,
    savedJobs,
    updateJobStatus,
    achievements,
    setActiveTab
  } = useApp();

  const [showExportModal, setShowExportModal] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({ ...userProfile });

  // Calculate skills stats
  const currentSkills = targetCareer.skills;
  const proficientSkills = currentSkills.filter(s => (skillStates[s.id] || s.status) === "Proficient");
  const inProgressSkills = currentSkills.filter(s => (skillStates[s.id] || s.status) === "In Progress");
  const missingSkills = currentSkills.filter(s => (skillStates[s.id] || s.status) === "Missing");

  const totalPoints = (proficientSkills.length * 1.0) + (inProgressSkills.length * 0.5);
  const skillReadiness = currentSkills.length > 0 ? Math.round((totalPoints / currentSkills.length) * 100) : 0;

  // Roadmap stats
  const { totalItems, completedItems, percent: roadmapPercent } = getRoadmapStats(targetCareer.id);

  // Overall Career Readiness Score
  // Weighted: Skills (50%) + Roadmap (35%) + Quiz Assessment (15%)
  const quizFactor = quizCompleted ? 15 : 5;
  const overallReadinessScore = Math.min(
    99,
    Math.round((skillReadiness * 0.5) + (roadmapPercent * 0.35) + quizFactor)
  );

  // Application Pipeline counts
  const savedCount = savedJobs.filter(j => j.status === "saved").length;
  const appliedCount = savedJobs.filter(j => j.status === "applied").length;
  const interviewingCount = savedJobs.filter(j => j.status === "interviewing").length;
  const offeredCount = savedJobs.filter(j => j.status === "offered").length;

  // Next 3 uncompleted topics from active roadmap
  const nextMilestones = [];
  targetCareer.roadmap.forEach((phase, pIdx) => {
    phase.topics.forEach((topic, tIdx) => {
      const isDone = !!roadmapProgress[`${targetCareer.id}_p${pIdx}_item${tIdx}`];
      if (!isDone && nextMilestones.length < 3) {
        nextMilestones.push({ phaseIdx: pIdx, topicIdx: tIdx, topic, phaseNum: phase.phase });
      }
    });
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
    setIsEditingProfile(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* User Welcome & Banner */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/20 shrink-0">
              {userProfile.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Welcome back, {userProfile.name}
                </h1>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="p-1 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"
                  title="Edit Profile"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {userProfile.headline} • {userProfile.location} • Target: <span className="font-semibold text-blue-600 dark:text-blue-400">{targetCareer.title}</span>
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setShowExportModal(true)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 transition-all shadow-sm"
            >
              <Printer className="w-4 h-4 text-blue-500" />
              <span>Export Career Blueprint</span>
            </button>

            {!quizCompleted ? (
              <button
                onClick={() => setActiveTab("quiz")}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-blue-500/25 transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>Take Career Assessment</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab("recommendations")}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-blue-500/25 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>View AI Recommendations</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4 Core Metric Gauges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        
        {/* Metric 1: Career Readiness */}
        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Role Readiness
            </span>
            <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600">
              <Zap className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {overallReadinessScore}%
            </span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Active Tracking
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${overallReadinessScore}%` }} />
          </div>
        </div>

        {/* Metric 2: Skills Competency */}
        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Skills Mastered
            </span>
            <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600">
              <Layers className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {proficientSkills.length} / {currentSkills.length}
            </span>
            <span className="text-xs text-slate-400">Skills</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {inProgressSkills.length} in development • {missingSkills.length} gaps
          </p>
        </div>

        {/* Metric 3: Roadmap Progress */}
        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Roadmap Progress
            </span>
            <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600">
              <BookOpen className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {roadmapPercent}%
            </span>
            <span className="text-xs text-slate-400">Curriculum</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${roadmapPercent}%` }} />
          </div>
        </div>

        {/* Metric 4: Application Pipeline */}
        <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Applications
            </span>
            <span className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600">
              <Briefcase className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {savedJobs.length}
            </span>
            <span className="text-xs text-slate-400">Tracked</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {appliedCount} Applied • {interviewingCount} Interviewing
          </p>
        </div>

      </div>

      {/* Main Grid: Target Role Spotlight & Next Roadmap Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        
        {/* Left Column: Target Role Spotlight */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                Primary Target Pathway
              </span>
              <button
                onClick={() => setActiveTab("recommendations")}
                className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Change Target</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
              {targetCareer.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              {targetCareer.overview}
            </p>

            {/* Quick Economics */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-6 text-center">
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Median Pay</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {targetCareer.salary.medianFormatted}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Growth</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {targetCareer.growthRate.split(" ")[0]}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">AI Resilience</span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {targetCareer.aiResilience.score}%
                </span>
              </div>
            </div>
          </div>

          {/* Quick Nav Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActiveTab("skillgap")}
              className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              <span>Skill Gap</span>
            </button>

            <button
              onClick={() => setActiveTab("roadmap")}
              className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>Roadmap</span>
            </button>

            <button
              onClick={() => setActiveTab("jobs")}
              className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>View Jobs</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Next Roadmap Tasks */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Next Milestone Priorities</span>
              </h3>
              <button
                onClick={() => setActiveTab("roadmap")}
                className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Full Roadmap ({roadmapPercent}%)
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Check off items directly as you learn to update your global readiness score:
            </p>

            <div className="space-y-2.5">
              {nextMilestones.length === 0 ? (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold text-center">
                  All roadmap topics marked complete! Excellent work.
                </div>
              ) : (
                nextMilestones.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleRoadmapItem(targetCareer.id, item.phaseIdx, item.topicIdx)}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-500 cursor-pointer transition-all flex items-start gap-3 group"
                  >
                    <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 mt-0.5 shrink-0 group-hover:text-blue-500" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400 block mb-0.5">
                        Phase 0{item.phaseNum}
                      </span>
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                        {item.topic}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>{completedItems} completed of {totalItems} total</span>
            <span>{totalItems - completedItems} remaining</span>
          </div>
        </div>

      </div>

      {/* Application Pipeline Kanban Tracker */}
      <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-500" />
              <span>Career Opportunity & Application Tracker</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Manage your job search pipeline across roles and statuses.
            </p>
          </div>
          <button
            onClick={() => setActiveTab("jobs")}
            className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 hover:bg-blue-100 text-xs font-bold transition-colors shrink-0"
          >
            + Browse & Add More Jobs
          </button>
        </div>

        {/* Status Counter Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-center">
            <span className="text-xl font-extrabold text-slate-900 dark:text-white block">{savedCount}</span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Saved</span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-center">
            <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400 block">{appliedCount}</span>
            <span className="text-[11px] font-semibold text-blue-500 uppercase">Applied</span>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-center">
            <span className="text-xl font-extrabold text-amber-600 dark:text-amber-400 block">{interviewingCount}</span>
            <span className="text-[11px] font-semibold text-amber-500 uppercase">Interviewing</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-center">
            <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 block">{offeredCount}</span>
            <span className="text-[11px] font-semibold text-emerald-500 uppercase">Offers</span>
          </div>
        </div>

        {/* Tracked Jobs List */}
        {savedJobs.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400">
            No saved jobs in your pipeline yet. Visit the Jobs tab to save matching roles!
          </div>
        ) : (
          <div className="space-y-2.5">
            {savedJobs.map((item) => {
              const job = JOBS_DATA.find(j => j.id === item.id);
              if (!job) return null;

              return (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${job.logoColor} flex items-center justify-center text-white font-extrabold text-[11px] shrink-0`}>
                      {job.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                        {job.title}
                      </h4>
                      <span className="text-slate-500 dark:text-slate-400">
                        {job.company} • {job.location} • {job.salaryDisplay}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-[11px] text-slate-400">Status:</label>
                    <select
                      value={item.status}
                      onChange={(e) => updateJobStatus(item.id, e.target.value)}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                    >
                      <option value="saved">Saved</option>
                      <option value="applied">Applied</option>
                      <option value="interviewing">Interviewing</option>
                      <option value="offered">Offered</option>
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Gamified Achievements Shelf */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Career Achievements & Badges ({achievements.length})
            </h3>
          </div>
          <span className="text-xs text-slate-400">Keep learning to unlock more</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {achievements.map((badge) => (
            <div
              key={badge.id}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white mx-auto mb-2 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                {badge.title}
              </h5>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Edit Candidate Profile
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                  Headline / Current Role
                </label>
                <input
                  type="text"
                  value={profileForm.headline}
                  onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={profileForm.location}
                  onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                  Experience Tier
                </label>
                <select
                  value={profileForm.experienceLevel}
                  onChange={(e) => setProfileForm({ ...profileForm, experienceLevel: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="Entry-Level / Student">Entry-Level / Student</option>
                  <option value="Career Switcher">Career Switcher</option>
                  <option value="Junior Engineer (1-2 yrs)">Junior Engineer (1-2 yrs)</option>
                  <option value="Mid-Level Engineer (3-5 yrs)">Mid-Level Engineer (3-5 yrs)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Export Blueprint Modal */}
      {showExportModal && (
        <ExportBlueprintModal onClose={() => setShowExportModal(false)} />
      )}

    </div>
  );
}
