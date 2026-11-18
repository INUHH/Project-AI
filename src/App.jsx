import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import CareerQuiz from "./components/quiz/CareerQuiz";
import Recommendations from "./components/recommendations/Recommendations";
import SkillGapAnalyzer from "./components/skillgap/SkillGapAnalyzer";
import LearningRoadmap from "./components/roadmap/LearningRoadmap";
import CareerComparison from "./components/comparison/CareerComparison";
import ResumeChecker from "./components/resume/ResumeChecker";
import JobFinder from "./components/jobs/JobFinder";

function AppContent() {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Header & Navigation */}
      <Navbar />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "quiz" && <CareerQuiz />}
        {activeTab === "recommendations" && <Recommendations />}
        {activeTab === "skillgap" && <SkillGapAnalyzer />}
        {activeTab === "roadmap" && <LearningRoadmap />}
        {activeTab === "comparison" && <CareerComparison />}
        {activeTab === "resume" && <ResumeChecker />}
        {activeTab === "jobs" && <JobFinder />}
      </main>

      {/* Global Modern Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
