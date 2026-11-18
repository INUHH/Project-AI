import React from "react";
import { Compass, Heart, Sparkles, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                PathAI Career Copilot
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed mb-4">
              An intelligent, end-to-end career guidance platform designed to help engineers, designers, and students discover high-impact career trajectories, close skill gaps, and accelerate learning.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Real-time LocalStorage persistence active</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Core Modules
            </h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-blue-500 transition-colors cursor-pointer">AI Career Assessment</span></li>
              <li><span className="hover:text-blue-500 transition-colors cursor-pointer">Skill Gap Matrix</span></li>
              <li><span className="hover:text-blue-500 transition-colors cursor-pointer">Personalized Roadmaps</span></li>
              <li><span className="hover:text-blue-500 transition-colors cursor-pointer">Career Comparison</span></li>
              <li><span className="hover:text-blue-500 transition-colors cursor-pointer">ATS Resume Auditor</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-blue-500" /> Private & Local First</li>
              <li className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-purple-500" /> AI-Calibrated Scoring</li>
              <li><span>Responsive Web Application</span></li>
              <li><span>Exportable Career Blueprint</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} PathAI Career Navigator. Built with React, Tailwind CSS & Vite.</p>
          <div className="flex items-center gap-1">
            <span>Empowering modern tech careers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
