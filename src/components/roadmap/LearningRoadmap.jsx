import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { CAREERS_DATA } from "../../data/careersData";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  ExternalLink,
  Clock,
  Layers,
  Award,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FolderGit2,
  Check,
  Compass
} from "lucide-react";

export default function LearningRoadmap() {
  const {
    targetCareer,
    targetCareerId,
    setTargetCareerId,
    roadmapProgress,
    toggleRoadmapItem,
    getRoadmapStats
  } = useApp();

  const [expandedPhases, setExpandedPhases] = useState({ 0: true, 1: true, 2: false, 3: false });

  const togglePhaseExpand = (phaseIdx) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseIdx]: !prev[phaseIdx]
    }));
  };

  const { totalItems, completedItems, percent } = getRoadmapStats(targetCareer.id);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Header & Career Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Step-by-Step Curriculum</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Personalized Learning Roadmap
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Structured 4-phase curriculum tailored to {targetCareer.title}. Complete topics, build portfolio projects, and track milestones.
          </p>
        </div>

        {/* Career Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Roadmap For:</label>
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

      {/* Progress & Milestone Overview */}
      <div className="glass-panel rounded-2xl p-6 mb-10 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {targetCareer.title} Roadmap Progress
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {completedItems} of {totalItems} milestone topics verified
              </p>
            </div>
          </div>
          <div className="text-right sm:text-left flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              {percent}%
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase">Completed</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        {percent === 100 && (
          <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Incredible work! You have completed the entire roadmap. You are ready for technical interviews and applications!</span>
          </div>
        )}
      </div>

      {/* Timeline Phases */}
      <div className="space-y-6">
        {targetCareer.roadmap.map((phase, pIdx) => {
          const isExpanded = expandedPhases[pIdx] ?? false;
          const phaseCompletedCount = phase.topics.filter((_, tIdx) => 
            roadmapProgress[`${targetCareer.id}_p${pIdx}_item${tIdx}`]
          ).length;
          const isPhaseDone = phaseCompletedCount === phase.topics.length;

          return (
            <div
              key={phase.phase}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-200"
            >
              {/* Phase Header */}
              <div
                onClick={() => togglePhaseExpand(pIdx)}
                className={`p-5 sm:p-6 cursor-pointer flex items-center justify-between transition-colors ${
                  isPhaseDone
                    ? "bg-emerald-50/50 dark:bg-emerald-950/20"
                    : "hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-sm ${
                    isPhaseDone
                      ? "bg-emerald-600 text-white"
                      : "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                  }`}>
                    {isPhaseDone ? <Check className="w-5 h-5 stroke-[3]" /> : `0${phase.phase}`}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Phase {phase.phase}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3" /> {phase.estimatedWeeks}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:block text-right">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {phaseCompletedCount} / {phase.topics.length}
                    </span>
                    <span className="text-[11px] text-slate-400 block">Topics Done</span>
                  </div>
                  <div className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Phase Collapsible Body */}
              {isExpanded && (
                <div className="p-5 sm:p-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/30 space-y-6">
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Checklist of Topics */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Learning Objectives & Checklist
                    </h4>
                    <div className="space-y-2">
                      {phase.topics.map((topic, tIdx) => {
                        const isChecked = !!roadmapProgress[`${targetCareer.id}_p${pIdx}_item${tIdx}`];
                        return (
                          <div
                            key={tIdx}
                            onClick={() => toggleRoadmapItem(targetCareer.id, pIdx, tIdx)}
                            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              isChecked
                                ? "bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60"
                                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                            }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              {isChecked ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                              )}
                            </div>
                            <span className={`text-xs sm:text-sm font-medium ${
                              isChecked
                                ? "line-through text-slate-500 dark:text-slate-400"
                                : "text-slate-800 dark:text-slate-200"
                            }`}>
                              {topic}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hands-on Portfolio Project */}
                  <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                    <div className="flex items-center gap-2 mb-1.5">
                      <FolderGit2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300">
                        Phase Milestone Project
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {phase.project}
                    </p>
                  </div>

                  {/* Curated Resources */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Curated Free & Industry Standard Learning Resources
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {phase.resources.map((res, rIdx) => (
                        <a
                          key={rIdx}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-500 transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                              {res.type}
                            </span>
                            <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                              {res.name}
                            </h5>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-2">
                            <span>Open Resource</span>
                            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
