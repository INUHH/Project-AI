import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { CAREERS_DATA } from "../../data/careersData";
import { SAMPLE_RESUMES } from "../../data/sampleResumes";
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Copy,
  Check,
  RotateCcw,
  Zap,
  Target,
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function ResumeChecker() {
  const {
    resumeText,
    updateResumeText,
    resumeTargetId,
    setResumeTargetCareer,
    resumeAnalysis,
    setActiveTab
  } = useApp();

  const [copiedKeyword, setCopiedKeyword] = useState(null);

  const handleSampleLoad = (sampleId) => {
    const sample = SAMPLE_RESUMES.find(s => s.id === sampleId);
    if (sample) {
      updateResumeText(sample.text);
      if (sample.targetCareer) {
        setResumeTargetCareer(sample.targetCareer);
      }
    }
  };

  const copyKeywordToClipboard = (keyword) => {
    navigator.clipboard.writeText(keyword);
    setCopiedKeyword(keyword);
    setTimeout(() => setCopiedKeyword(null), 1800);
  };

  const score = resumeAnalysis?.atsScore || 65;
  const targetCareer = resumeAnalysis?.targetCareer || CAREERS_DATA[0];

  const getScoreColor = (s) => {
    if (s >= 85) return "text-emerald-600 dark:text-emerald-400";
    if (s >= 70) return "text-blue-600 dark:text-blue-400";
    if (s >= 55) return "text-amber-500";
    return "text-rose-500";
  };

  const getScoreBadge = (s) => {
    if (s >= 85) return "High ATS Match (Interview Ready)";
    if (s >= 70) return "Competitive ATS Match";
    if (s >= 55) return "Moderate Match (Gaps Detected)";
    return "Low Match (Needs Optimization)";
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <FileText className="w-3.5 h-3.5" />
          <span>Automated Recruiter & ATS Scanner</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          AI Resume Skill Checker & ATS Audit
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Scan your resume text against real recruiter filtering algorithms. Detect missing keywords, weak verbs, and quantify your impact.
        </p>
      </div>

      {/* Target Role & Sample Switcher */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 mb-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Role Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Target Role:</label>
          <select
            value={resumeTargetId}
            onChange={(e) => setResumeTargetCareer(e.target.value)}
            className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
          >
            {CAREERS_DATA.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Load Sample Resumes */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-slate-400">Quick Test Samples:</span>
          {SAMPLE_RESUMES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSampleLoad(sample.id)}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 transition-colors"
            >
              {sample.title.split("/")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Input on Left, Audit Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Text Area */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Resume Content (Paste Text Below)
              </span>
              <span className="text-xs text-slate-400">
                {resumeText.length} characters • {resumeText.trim().split(/\s+/).filter(Boolean).length} words
              </span>
            </div>

            <textarea
              value={resumeText}
              onChange={(e) => updateResumeText(e.target.value)}
              placeholder="Paste your resume markdown, plain text, or experience bullet points here to scan..."
              rows={22}
              className="w-full flex-1 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />

            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={() => updateResumeText("")}
                className="text-xs font-medium text-slate-400 hover:text-rose-500 transition-colors"
              >
                Clear Text
              </button>
              <span className="text-[11px] text-slate-400">
                Auto-saved & evaluated in real-time
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: AI Audit Results */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* ATS Score Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Overall ATS Match Rating
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Target: {targetCareer.title}
                </h3>
              </div>
              <div className="text-right">
                <span className={`text-4xl font-extrabold ${getScoreColor(score)}`}>
                  {score}
                </span>
                <span className="text-xs text-slate-400 font-bold block">/ 100</span>
              </div>
            </div>

            {/* Score pill */}
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-5 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Evaluation Verdict:</span>
              <span className="font-bold text-slate-900 dark:text-white">{getScoreBadge(score)}</span>
            </div>

            {/* Dimension Progress */}
            {resumeAnalysis && (
              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                    <span>Skill Keywords Match</span>
                    <span className="font-bold">{resumeAnalysis.scoreBreakdown.skillKeywords.score} / {resumeAnalysis.scoreBreakdown.skillKeywords.max} pts</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${(resumeAnalysis.scoreBreakdown.skillKeywords.score / 45) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                    <span>Action Verbs & Impact</span>
                    <span className="font-bold">{resumeAnalysis.scoreBreakdown.actionVerbs.score} / {resumeAnalysis.scoreBreakdown.actionVerbs.max} pts</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${(resumeAnalysis.scoreBreakdown.actionVerbs.score / 15) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                    <span>Quantifiable Metrics (% / $ / Scale)</span>
                    <span className="font-bold">{resumeAnalysis.scoreBreakdown.metricsImpact.score} / {resumeAnalysis.scoreBreakdown.metricsImpact.max} pts</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${(resumeAnalysis.scoreBreakdown.metricsImpact.score / 15) * 100}%` }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Matched vs Missing Keywords */}
          {resumeAnalysis && (
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-5">
              
              {/* Matched Skills */}
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    Detected Target Skills ({resumeAnalysis.matchedSkills.length})
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeAnalysis.matchedSkills.length === 0 ? (
                    <span className="text-xs text-slate-400 italic">No exact target skills detected yet.</span>
                  ) : (
                    resumeAnalysis.matchedSkills.map((s) => (
                      <span
                        key={s.id}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold"
                      >
                        ✓ {s.name}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Missing Skills */}
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    Missing Target Skills ({resumeAnalysis.missingSkills.length})
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeAnalysis.missingSkills.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => copyKeywordToClipboard(s.name)}
                      title="Click to copy keyword"
                      className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-semibold hover:bg-rose-100 transition-colors flex items-center gap-1 group"
                    >
                      <span>+ {s.name}</span>
                      {copiedKeyword === s.name ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Verbs Analysis */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Action Verbs & Vocabulary Strength
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {resumeAnalysis.foundPowerVerbs.map((verb, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-[11px] font-semibold"
                    >
                      ⚡ {verb}
                    </span>
                  ))}
                  {resumeAnalysis.foundPowerVerbs.length === 0 && (
                    <span className="text-xs text-slate-400 italic">No strong action verbs identified.</span>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* AI Tailored Recommendations */}
          {resumeAnalysis && resumeAnalysis.recommendations.length > 0 && (
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Actionable Resume Optimization Advice
                </h4>
              </div>
              <div className="space-y-3">
                {resumeAnalysis.recommendations.map((rec, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs"
                  >
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      {rec.title}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
