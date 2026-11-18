import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { QUIZ_QUESTIONS } from "../../data/quizQuestions";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  BrainCircuit,
  Layers,
  CloudLightning,
  BarChart3,
  ShieldCheck,
  Palette,
  Check,
  RefreshCw
} from "lucide-react";

// Icon lookup helper
const ICON_MAP = {
  BrainCircuit,
  Layers,
  CloudLightning,
  BarChart3,
  ShieldCheck,
  Palette
};

export default function CareerQuiz() {
  const { quizAnswers, saveQuizAnswers, setActiveTab } = useApp();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(() => ({ ...quizAnswers }));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = QUIZ_QUESTIONS[currentStep];
  const totalSteps = QUIZ_QUESTIONS.length;
  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  const currentAnswer = answers[question.id];

  // Selection handler
  const handleSingleSelect = (optionId) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: optionId
    }));
  };

  const handleMultiSelect = (optionId) => {
    setAnswers(prev => {
      const currentList = prev[question.id] || [];
      const exists = currentList.includes(optionId);
      const updated = exists
        ? currentList.filter(id => id !== optionId)
        : [...currentList, optionId];
      return {
        ...prev,
        [question.id]: updated
      };
    });
  };

  const isCurrentStepValid = () => {
    if (!currentAnswer) return false;
    if (question.type === "multi") {
      return Array.isArray(currentAnswer) && currentAnswer.length > 0;
    }
    return Boolean(currentAnswer);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Final submit
      saveQuizAnswers(answers);
      setIsSubmitted(true);
      setTimeout(() => {
        setActiveTab("recommendations");
      }, 1200);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="w-20 h-20 mx-auto rounded-3xl gradient-bg flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/20 animate-bounce">
          <Sparkles className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
          Analyzing Your Career Dimensions...
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
          Our AI engine is matching your cognitive preferences, skill strengths, and career values with top-tier tech roles.
        </p>
        <div className="w-48 h-2 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{ width: "100%" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Quiz Header & Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
              {currentStep + 1}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
              {question.category}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
            Step {currentStep + 1} of {totalSteps} ({progressPercent}%)
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8 border border-slate-200/80 dark:border-slate-800">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
            {question.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {question.subtitle}
          </p>
        </div>

        {/* Options Grid */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const Icon = option.icon ? ICON_MAP[option.icon] || Compass : null;
            const isSelected = question.type === "single"
              ? currentAnswer === option.id
              : Array.isArray(currentAnswer) && currentAnswer.includes(option.id);

            return (
              <div
                key={option.id}
                onClick={() => {
                  if (question.type === "single") {
                    handleSingleSelect(option.id);
                  } else {
                    handleMultiSelect(option.id);
                  }
                }}
                className={`group relative flex items-start gap-4 p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 shadow-md shadow-blue-500/10"
                    : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60"
                }`}
              >
                {/* Icon or Check Indicator */}
                {Icon ? (
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                ) : (
                  <div className={`w-6 h-6 mt-0.5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-slate-300 dark:border-slate-700"
                  }`}>
                    {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                )}

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm sm:text-base font-semibold ${
                      isSelected ? "text-blue-900 dark:text-blue-200" : "text-slate-900 dark:text-white"
                    }`}>
                      {option.label}
                    </h3>
                    {Icon && (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        isSelected ? "text-blue-600 dark:text-blue-400" : "opacity-0"
                      }`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  {option.description && (
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            currentStep === 0
              ? "opacity-0 pointer-events-none"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRestart}
            title="Start Over"
            className="p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={!isCurrentStepValid()}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md ${
              isCurrentStepValid()
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25 hover:shadow-lg hover:scale-[1.02]"
                : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed shadow-none"
            }`}
          >
            <span>{currentStep === totalSteps - 1 ? "Complete & View Matches" : "Continue"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
