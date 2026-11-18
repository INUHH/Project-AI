import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { CAREERS_DATA } from "../../data/careersData";
import {
  Layers,
  CheckCircle2,
  Clock,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  RotateCcw,
  BookOpen
} from "lucide-react";

export default function SkillGapAnalyzer() {
  const {
    targetCareer,
    targetCareerId,
    setTargetCareerId,
    skillStates,
    setSkillStatus,
    setActiveTab
  } = useApp();

  const [filterCategory, setFilterCategory] = useState("all");

  // Get current status of a skill (checking custom overrides first, then career default)
  const getSkillEffectiveStatus = (skill) => {
    if (skillStates[skill.id]) {
      return skillStates[skill.id];
    }
    return skill.status || "Missing";
  };

  const currentSkills = targetCareer.skills;

  // Categorize skills
  const proficientSkills = currentSkills.filter(s => getSkillEffectiveStatus(s) === "Proficient");
  const inProgressSkills = currentSkills.filter(s => getSkillEffectiveStatus(s) === "In Progress");
  const missingSkills = currentSkills.filter(s => getSkillEffectiveStatus(s) === "Missing");

  // Readiness Score calculation
  // Proficient: 100%, In Progress: 50%, Missing: 0%
  const totalWeight = currentSkills.length;
  const currentPoints = (proficientSkills.length * 1.0) + (inProgressSkills.length * 0.5);
  const readinessPercent = totalWeight > 0 ? Math.round((currentPoints / totalWeight) * 100) : 0;

  // Estimated hours to close gap
  const hoursToCloseGap = missingSkills.reduce((acc, s) => acc + (s.hours || 40), 0) +
    inProgressSkills.reduce((acc, s) => acc + Math.round((s.hours || 40) * 0.5), 0);

  // Filter skills
  const filterList = (list) => {
    if (filterCategory === "all") return list;
    if (filterCategory === "must-have") return list.filter(s => s.importance === "Must-Have");
    return list.filter(s => s.category.toLowerCase() === filterCategory.toLowerCase());
  };

  const categories = ["all", "must-have", ...new Set(currentSkills.map(s => s.category.toLowerCase()))];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Header & Target Role Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Competency Audit</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skill Gap Analyzer
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Evaluate your skill competencies against the core requirements for your target role.
          </p>
        </div>

        {/* Target Career Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Target Role:</label>
          <select
            value={targetCareerId}
            onChange={(e) => setTargetCareerId(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
          >
            {CAREERS_DATA.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Readiness Summary Banner */}
      <div className="glass-panel rounded-2xl p-6 mb-8 border border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          
          {/* Readiness Gauge */}
          <div className="flex items-center gap-4 md:border-r md:border-slate-200 dark:md:border-slate-800 pr-4">
            <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-200 dark:text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-600 transition-all duration-700 ease-out"
                  strokeDasharray={`${readinessPercent}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-xl font-extrabold text-slate-900 dark:text-white leading-none">
                  {readinessPercent}%
                </span>
                <span className="text-[9px] font-semibold text-slate-400 uppercase">Ready</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Role Readiness</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {readinessPercent >= 75
                  ? "Competitive candidate! Ready to apply for junior roles."
                  : readinessPercent >= 45
                  ? "Solid foundation. Focus on bridging critical gaps."
                  : "Beginning stage. Follow the structured roadmap."}
              </p>
            </div>
          </div>

          {/* Metric 1 */}
          <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50">
            <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              Proficient Skills
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-emerald-800 dark:text-emerald-300">
                {proficientSkills.length}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                of {currentSkills.length} mastered
              </span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50">
            <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider block mb-1">
              In Development
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-amber-800 dark:text-amber-300">
                {inProgressSkills.length}
              </span>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                skills in progress
              </span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/50">
            <span className="text-[11px] font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider block mb-1">
              Estimated Study Time
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-rose-800 dark:text-rose-300">
                ~{hoursToCloseGap}h
              </span>
              <span className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                to role readiness
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1">Filter:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
              filterCategory === cat
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3 Column Skill Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Column 1: Proficient / Mastered */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-3.5 rounded-t-2xl bg-emerald-100/70 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                Proficient / Mastered
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
              {proficientSkills.length}
            </span>
          </div>

          <div className="flex-1 p-4 rounded-b-2xl border-x border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-3 min-h-[300px]">
            {filterList(proficientSkills).length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No mastered skills in this category yet.
              </div>
            ) : (
              filterList(proficientSkills).map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  currentStatus="Proficient"
                  onSetStatus={(status) => setSkillStatus(skill.id, status)}
                />
              ))
            )}
          </div>
        </div>

        {/* Column 2: In Progress */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-3.5 rounded-t-2xl bg-amber-100/70 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <h3 className="font-bold text-sm text-amber-900 dark:text-amber-200">
                In Progress / Learning
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 text-xs font-bold">
              {inProgressSkills.length}
            </span>
          </div>

          <div className="flex-1 p-4 rounded-b-2xl border-x border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-3 min-h-[300px]">
            {filterList(inProgressSkills).length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No skills actively in progress.
              </div>
            ) : (
              filterList(inProgressSkills).map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  currentStatus="In Progress"
                  onSetStatus={(status) => setSkillStatus(skill.id, status)}
                />
              ))
            )}
          </div>
        </div>

        {/* Column 3: Missing / Critical Gap */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-3.5 rounded-t-2xl bg-rose-100/70 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <h3 className="font-bold text-sm text-rose-900 dark:text-rose-200">
                Missing / Gaps to Learn
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200 text-xs font-bold">
              {missingSkills.length}
            </span>
          </div>

          <div className="flex-1 p-4 rounded-b-2xl border-x border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-3 min-h-[300px]">
            {filterList(missingSkills).length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                All skills accounted for!
              </div>
            ) : (
              filterList(missingSkills).map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  currentStatus="Missing"
                  onSetStatus={(status) => setSkillStatus(skill.id, status)}
                />
              ))
            )}
          </div>
        </div>

      </div>

      {/* Call to action */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-blue-500/15">
        <div>
          <h3 className="text-lg font-bold">Ready to bridge your missing skills?</h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
            We have generated an actionable 4-phase learning roadmap specifically mapped to {targetCareer.title}.
          </p>
        </div>
        <button
          onClick={() => setActiveTab("roadmap")}
          className="px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-xs sm:text-sm hover:bg-blue-50 transition-colors shrink-0 flex items-center gap-2 shadow-md"
        >
          <BookOpen className="w-4 h-4" />
          <span>Open Learning Roadmap</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

// Subcomponent: Individual interactive Skill Card
function SkillCard({ skill, currentStatus, onSetStatus }) {
  const isMustHave = skill.importance === "Must-Have";

  return (
    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-sm group">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <h4 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">
          {skill.name}
        </h4>
        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${
          isMustHave
            ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
        }`}>
          {skill.importance}
        </span>
      </div>

      <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 mb-3">
        <span>{skill.category}</span>
        <span>•</span>
        <span>{skill.difficulty}</span>
        <span>•</span>
        <span className="flex items-center gap-0.5">
          <Clock className="w-3 h-3 text-slate-400" /> ~{skill.hours}h
        </span>
      </div>

      {/* Quick Status Buttons */}
      <div className="flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <button
          onClick={() => onSetStatus("Proficient")}
          title="Mark as Proficient"
          className={`flex-1 py-1 rounded text-[10px] font-semibold transition-colors flex items-center justify-center gap-1 ${
            currentStatus === "Proficient"
              ? "bg-emerald-600 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 hover:text-emerald-700"
          }`}
        >
          <Check className="w-3 h-3" />
          <span>Mastered</span>
        </button>

        <button
          onClick={() => onSetStatus("In Progress")}
          title="Mark as In Progress"
          className={`flex-1 py-1 rounded text-[10px] font-semibold transition-colors flex items-center justify-center gap-1 ${
            currentStatus === "In Progress"
              ? "bg-amber-500 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-amber-100 dark:hover:bg-amber-950/60 hover:text-amber-700"
          }`}
        >
          <span>Learning</span>
        </button>

        <button
          onClick={() => onSetStatus("Missing")}
          title="Mark as Gap"
          className={`flex-1 py-1 rounded text-[10px] font-semibold transition-colors flex items-center justify-center gap-1 ${
            currentStatus === "Missing"
              ? "bg-rose-600 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-rose-100 dark:hover:bg-rose-950/60 hover:text-rose-700"
          }`}
        >
          <span>Gap</span>
        </button>
      </div>
    </div>
  );
}
