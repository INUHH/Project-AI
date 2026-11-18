import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { CAREERS_DATA } from "../../data/careersData";
import {
  GitCompare,
  TrendingUp,
  Shield,
  DollarSign,
  Star,
  Building2,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Target
} from "lucide-react";

export default function CareerComparison() {
  const { targetCareerId, setTargetCareerId, setActiveTab } = useApp();

  // Selected careers to compare (defaults to active target + 2 others)
  const [selectedIds, setSelectedIds] = useState(() => {
    const list = [targetCareerId, "ai-engineer", "fullstack-developer", "cloud-devops"];
    const unique = [...new Set(list)];
    return unique.slice(0, 3);
  });

  const handleSelectCareer = (index, newId) => {
    setSelectedIds(prev => {
      const next = [...prev];
      next[index] = newId;
      return next;
    });
  };

  const careersToCompare = selectedIds.map(id => 
    CAREERS_DATA.find(c => c.id === id) || CAREERS_DATA[0]
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <GitCompare className="w-3.5 h-3.5" />
          <span>Multi-Dimensional Career Matrix</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Career Path Comparison Matrix
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Evaluate compensation, AI automation resilience, work-life balance, and learning curves side-by-side.
        </p>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {selectedIds.map((careerId, idx) => (
          <div key={idx} className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Comparison Role {idx + 1}
            </span>
            <select
              value={careerId}
              onChange={(e) => handleSelectCareer(idx, e.target.value)}
              className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
            >
              {CAREERS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Side-by-Side Comparison Table/Grid */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-12 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/4">
                  Dimension / Metric
                </th>
                {careersToCompare.map((c) => (
                  <th key={c.id} className="p-4 text-sm font-bold text-slate-900 dark:text-white w-1/4">
                    <div className="flex items-center justify-between">
                      <span>{c.title}</span>
                      {targetCareerId === c.id && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-[10px] font-bold">
                          Active Target
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              
              {/* Category */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  Domain Category
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4 font-medium text-slate-700 dark:text-slate-300">
                    {c.category}
                  </td>
                ))}
              </tr>

              {/* Median Salary */}
              <tr className="bg-slate-50/30 dark:bg-slate-900/30">
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  Median Salary (US)
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4">
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {c.salary.medianFormatted}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Range: {c.salary.entryFormatted} - {c.salary.seniorFormatted}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Growth Outlook */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  10-Year Growth Rate
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {c.growthRate}
                  </td>
                ))}
              </tr>

              {/* AI Automation Resilience */}
              <tr className="bg-slate-50/30 dark:bg-slate-900/30">
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  AI Resilience Index
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                      <Shield className="w-3.5 h-3.5 text-blue-500" />
                      <span>{c.aiResilience.score}% ({c.aiResilience.rating})</span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-snug">
                      {c.aiResilience.description}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Work-Life Balance & Stress */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  Work-Life Balance & Stress
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4">
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < c.workLifeBalance ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Stress Level: <strong>{c.stressLevel}</strong>
                    </span>
                  </td>
                ))}
              </tr>

              {/* Remote Feasibility */}
              <tr className="bg-slate-50/30 dark:bg-slate-900/30">
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  Remote Work Feasibility
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4 font-medium text-slate-700 dark:text-slate-300">
                    {c.remoteFeasibility}
                  </td>
                ))}
              </tr>

              {/* Required Education */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  Barrier to Entry / Education
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4 text-slate-600 dark:text-slate-300">
                    {c.requiredEducation}
                  </td>
                ))}
              </tr>

              {/* Core Skills */}
              <tr className="bg-slate-50/30 dark:bg-slate-900/30">
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  Core Essential Skills
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {c.skills.slice(0, 4).map((s) => (
                        <span
                          key={s.id}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-medium"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Top Hiring Companies */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400">
                  Top Employers
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4">
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {c.topCompanies.slice(0, 4).join(", ")}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Action Buttons */}
              <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                <td className="p-4 font-semibold text-slate-400">
                  Select As Primary Target
                </td>
                {careersToCompare.map((c) => (
                  <td key={c.id} className="p-4">
                    <button
                      onClick={() => {
                        setTargetCareerId(c.id);
                        setActiveTab("skillgap");
                      }}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        targetCareerId === c.id
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20"
                      }`}
                    >
                      {targetCareerId === c.id ? "Active Target ✓" : "Choose & Audit Gap"}
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* AI Comparison Verdict */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <h3 className="text-lg font-bold">PathAI Strategic Verdict</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-blue-100 leading-relaxed">
          {careersToCompare.map((c) => (
            <div key={c.id} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-white text-sm mb-1.5">{c.title}</h4>
              <p className="text-blue-200 mb-2">
                <strong>Best For:</strong> People who value {c.matchTags.slice(0, 3).join(", ")} and prefer an environment with {c.stressLevel.toLowerCase()} stress and {c.remoteFeasibility.toLowerCase()}.
              </p>
              <div className="text-[11px] text-amber-200">
                <strong>Comp Upside:</strong> Reaches {c.salary.seniorFormatted} at senior tier.
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
