import React from "react";
import { useApp } from "../../context/AppContext";
import { CAREERS_DATA } from "../../data/careersData";
import {
  Printer,
  Download,
  X,
  Compass,
  CheckCircle2,
  Award,
  Shield,
  Layers,
  BookOpen,
  Briefcase
} from "lucide-react";

export default function ExportBlueprintModal({ onClose }) {
  const {
    userProfile,
    targetCareer,
    recommendations,
    skillStates,
    getRoadmapStats,
    savedJobs,
    resumeAnalysis
  } = useApp();

  const { completedItems, totalItems, percent } = getRoadmapStats(targetCareer.id);

  // Group skills
  const proficientSkills = targetCareer.skills.filter(s => (skillStates[s.id] || s.status) === "Proficient");
  const inProgressSkills = targetCareer.skills.filter(s => (skillStates[s.id] || s.status) === "In Progress");
  const missingSkills = targetCareer.skills.filter(s => (skillStates[s.id] || s.status) === "Missing");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
        
        {/* Modal Controls (No Print) */}
        <div className="no-print flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
              Printable Career Blueprint Report
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Content */}
        <div className="printable-report text-slate-900 dark:text-slate-100 font-sans space-y-6">
          
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-4 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Compass className="w-6 h-6 text-blue-600" />
                <span className="font-extrabold text-xl tracking-tight">PathAI Career Navigator</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Career Trajectory Blueprint
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Generated for {userProfile.name} • {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 uppercase block">Target Pathway</span>
              <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
                {targetCareer.title}
              </span>
            </div>
          </div>

          {/* Section 1: Executive Profile & Target Role */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
            <div>
              <h3 className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                Candidate Profile
              </h3>
              <p className="font-bold text-slate-900 dark:text-white">{userProfile.name}</p>
              <p className="text-slate-600 dark:text-slate-400">{userProfile.headline}</p>
              <p className="text-slate-600 dark:text-slate-400">{userProfile.location} • {userProfile.experienceLevel}</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                Market Economics & AI Resilience
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Median Compensation:</strong> {targetCareer.salary.medianFormatted}
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>10-Year Growth Rate:</strong> {targetCareer.growthRate}
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>AI Automation Resilience:</strong> {targetCareer.aiResilience.score}% ({targetCareer.aiResilience.rating})
              </p>
            </div>
          </div>

          {/* Section 2: Top 3 Recommendations */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" /> AI Career Match Calibration
            </h2>
            <div className="grid grid-cols-3 gap-3 text-xs">
              {recommendations.slice(0, 3).map((r, i) => (
                <div key={r.career.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">#{i + 1} {r.career.title}</span>
                  </div>
                  <span className="text-blue-600 font-extrabold">{r.overallMatch}% Match</span>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{r.career.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Skill Competency Matrix */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-600" /> Skill Competency Breakdown
            </h2>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                  ✓ Mastered ({proficientSkills.length})
                </span>
                <ul className="space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                  {proficientSkills.map(s => <li key={s.id}>• {s.name}</li>)}
                  {proficientSkills.length === 0 && <li className="text-slate-400 italic">None logged</li>}
                </ul>
              </div>

              <div>
                <span className="font-bold text-amber-700 dark:text-amber-400 block mb-1">
                  ⏳ In Progress ({inProgressSkills.length})
                </span>
                <ul className="space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                  {inProgressSkills.map(s => <li key={s.id}>• {s.name}</li>)}
                  {inProgressSkills.length === 0 && <li className="text-slate-400 italic">None logged</li>}
                </ul>
              </div>

              <div>
                <span className="font-bold text-rose-700 dark:text-rose-400 block mb-1">
                  ⚠️ Priority Gaps ({missingSkills.length})
                </span>
                <ul className="space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                  {missingSkills.map(s => <li key={s.id}>• {s.name}</li>)}
                  {missingSkills.length === 0 && <li className="text-slate-400 italic">All skills mastered!</li>}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Learning Roadmap Status */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" /> Learning Roadmap Execution
            </h2>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-medium text-slate-600 dark:text-slate-300">
                Curriculum Milestone Completion: <strong>{completedItems} of {totalItems} topics</strong>
              </span>
              <span className="font-bold text-blue-600">{percent}% Completed</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-3">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: `${percent}%` }} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {targetCareer.roadmap.map(phase => (
                <div key={phase.phase} className="p-2 rounded bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                  <span className="font-bold block text-slate-900 dark:text-white">Phase {phase.phase}: {phase.title}</span>
                  <span className="text-slate-500">Project: {phase.project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Applications Pipeline */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-purple-600" /> Opportunity & Application Pipeline ({savedJobs.length})
            </h2>
            <div className="space-y-1 text-xs">
              {savedJobs.map(job => (
                <div key={job.id} className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{job.id}</span>
                  <span className="uppercase text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    Status: {job.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 text-center">
            PathAI Career Copilot • Personalized Autonomous Career Navigation System • Confidential
          </div>

        </div>

      </div>
    </div>
  );
}
