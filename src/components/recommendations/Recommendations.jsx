import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  Sparkles,
  Award,
  TrendingUp,
  Shield,
  DollarSign,
  ArrowRight,
  Target,
  BookOpen,
  Layers,
  ChevronRight,
  ExternalLink,
  Info,
  CheckCircle,
  Building2,
  Clock,
  ThumbsUp,
  ThumbsDown,
  X
} from "lucide-react";

export default function Recommendations() {
  const {
    recommendations,
    targetCareerId,
    setTargetCareerId,
    setActiveTab,
    quizCompleted
  } = useApp();

  const [selectedCareerModal, setSelectedCareerModal] = useState(null);

  const top3 = recommendations.slice(0, 3);
  const otherCareers = recommendations.slice(3);

  const handleSetTarget = (careerId) => {
    setTargetCareerId(careerId);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Calibrated via Multidimensional AI Scoring</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Your Top 3 AI Career Matches
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Ranked based on your interests, cognitive work style, technical foundations, and market resilience.
          Choose your primary target to personalize your learning roadmap and skill gap audit.
        </p>

        {!quizCompleted && (
          <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-800 dark:text-amber-300 flex items-center justify-center gap-2">
            <Info className="w-4 h-4 shrink-0" />
            <span>Showing default recommended pathways. Take the 2-minute Career Quiz to personalize these results!</span>
            <button
              onClick={() => setActiveTab("quiz")}
              className="font-bold underline hover:text-amber-900 ml-1"
            >
              Take Quiz →
            </button>
          </div>
        )}
      </div>

      {/* Top 3 Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {top3.map((rec, index) => {
          const { career, overallMatch, technicalFit, cultureFit, growthFit, personalityFit, personalizedReasons } = rec;
          const isTarget = targetCareerId === career.id;
          const rankLabels = ["#1 Top Match", "#2 Strong Alternative", "#3 High Growth Potential"];
          const rankColors = [
            "bg-blue-600 text-white shadow-blue-500/30",
            "bg-indigo-600 text-white shadow-indigo-500/30",
            "bg-purple-600 text-white shadow-purple-500/30"
          ];

          return (
            <div
              key={career.id}
              className={`glass-card rounded-2xl flex flex-col justify-between overflow-hidden border-2 transition-all duration-300 hover:shadow-xl relative ${
                isTarget
                  ? "border-blue-600 ring-2 ring-blue-500/20 shadow-blue-500/10"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {/* Card Header & Rank */}
              <div>
                <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shadow-sm ${rankColors[index]}`}>
                      {rankLabels[index]}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-extrabold text-sm border border-emerald-200 dark:border-emerald-800">
                      <span>{overallMatch}%</span>
                      <span className="text-[10px] font-medium uppercase">Match</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {career.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {career.shortDescription}
                  </p>
                </div>

                {/* Score Breakdown Bars */}
                <div className="p-6 py-4 bg-slate-50/60 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800/80 space-y-2.5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    AI Match Dimensions
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Technical Fit</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{technicalFit}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${technicalFit}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Work Style / Culture</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{cultureFit}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${cultureFit}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Market Demand & Growth</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{growthFit}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${growthFit}%` }} />
                    </div>
                  </div>
                </div>

                {/* Key Career Metrics */}
                <div className="p-6 py-4 grid grid-cols-2 gap-3 border-b border-slate-100 dark:border-slate-800/80 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/60">
                    <span className="text-slate-400 block mb-0.5">Median Salary</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {career.salary.medianFormatted}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/60">
                    <span className="text-slate-400 block mb-0.5">AI Resilience</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                      {career.aiResilience.score}% ({career.aiResilience.rating})
                    </span>
                  </div>
                </div>

                {/* Why It Fits You (AI Reasoning) */}
                <div className="p-6 py-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    Why PathAI Recommends This:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {personalizedReasons.map((reason, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => handleSetTarget(career.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    isTarget
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 cursor-default"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>{isTarget ? "Active Target Role" : "Set as Target Career"}</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      handleSetTarget(career.id);
                      setActiveTab("roadmap");
                    }}
                    className="py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span>Roadmap</span>
                  </button>

                  <button
                    onClick={() => setSelectedCareerModal(career)}
                    className="py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-purple-500" />
                    <span>Deep Dive</span>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Other High-Demand Career Paths */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Explore Other High-Demand Pathways
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              You can also switch your target role to any of these high-trajectory disciplines.
            </p>
          </div>
          <button
            onClick={() => setActiveTab("comparison")}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 rounded-xl hover:bg-blue-100 transition-colors shrink-0"
          >
            <span>Compare Side-by-Side</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherCareers.map((rec) => {
            const { career, overallMatch } = rec;
            const isTarget = targetCareerId === career.id;

            return (
              <div
                key={career.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium text-slate-400">
                      {career.category}
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                      {overallMatch}% Fit
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                    {career.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                    {career.shortDescription}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    onClick={() => handleSetTarget(career.id)}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-colors ${
                      isTarget
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    {isTarget ? "Current Target" : "Select Role"}
                  </button>
                  <button
                    onClick={() => setSelectedCareerModal(career)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    title="View details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Dive Modal */}
      {selectedCareerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCareerModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {selectedCareerModal.category}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {selectedCareerModal.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedCareerModal.overview}
              </p>
            </div>

            {/* Key Numbers */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Entry to Senior</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {selectedCareerModal.salary.entryFormatted} - {selectedCareerModal.salary.seniorFormatted}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Growth Outlook</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {selectedCareerModal.growthRate}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Remote Friendly</span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {selectedCareerModal.remoteFeasibility}
                </span>
              </div>
            </div>

            {/* Day in the Life */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                A Typical Day in the Life
              </h4>
              <div className="space-y-2 border-l-2 border-blue-500/30 pl-4 ml-1">
                {selectedCareerModal.dayInLife.map((slot, idx) => (
                  <div key={idx} className="relative text-xs">
                    <span className="font-bold text-blue-600 dark:text-blue-400">{slot.time}: </span>
                    <span className="text-slate-600 dark:text-slate-300">{slot.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
              <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                  <ThumbsUp className="w-3.5 h-3.5" /> Advantages
                </div>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                  {selectedCareerModal.pros.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50">
                <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300 mb-2">
                  <ThumbsDown className="w-3.5 h-3.5" /> Considerations
                </div>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                  {selectedCareerModal.cons.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Top Companies */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-indigo-500" /> Top Hiring Companies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCareerModal.topCompanies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCareerModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleSetTarget(selectedCareerModal.id);
                  setSelectedCareerModal(null);
                  setActiveTab("roadmap");
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20"
              >
                Set as Target & Open Roadmap
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
