import React, { useState, useMemo } from "react";
import { useApp } from "../../context/AppContext";
import { JOBS_DATA } from "../../data/jobsData";
import { CAREERS_DATA } from "../../data/careersData";
import {
  Briefcase,
  Search,
  MapPin,
  DollarSign,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Filter,
  ExternalLink,
  Building2,
  Send,
  X,
  Target
} from "lucide-react";

export default function JobFinder() {
  const {
    targetCareerId,
    skillStates,
    savedJobs,
    toggleSaveJob,
    updateJobStatus,
    isJobSaved
  } = useApp();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCareerFilter, setSelectedCareerFilter] = useState("all");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("all");
  const [selectedWorkplaceFilter, setSelectedWorkplaceFilter] = useState("all");
  const [selectedJobModal, setSelectedJobModal] = useState(null);
  const [appliedFeedback, setAppliedFeedback] = useState(false);

  // Calculate skill match percentage for each job against user's skills
  const getJobMatchScore = (job) => {
    if (!job.skills || job.skills.length === 0) return 85;
    let matchPoints = 0;
    job.skills.forEach(skillName => {
      // Find if this skill is proficient or in progress in user's state
      // Normalize comparison
      const isProficient = Object.entries(skillStates).some(([key, status]) => {
        return (key.toLowerCase().includes(skillName.toLowerCase().slice(0, 4)) || 
                skillName.toLowerCase().includes(key.toLowerCase().slice(0, 4))) && status === "Proficient";
      });
      const isInProgress = Object.entries(skillStates).some(([key, status]) => {
        return (key.toLowerCase().includes(skillName.toLowerCase().slice(0, 4)) || 
                skillName.toLowerCase().includes(key.toLowerCase().slice(0, 4))) && status === "In Progress";
      });

      if (isProficient) matchPoints += 1.0;
      else if (isInProgress) matchPoints += 0.5;
      else matchPoints += 0.2; // base exposure
    });

    const score = Math.round((matchPoints / job.skills.length) * 100);
    return Math.min(98, Math.max(65, score));
  };

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCareer = selectedCareerFilter === "all" || job.careerId === selectedCareerFilter;
      const matchesType = selectedTypeFilter === "all" || job.type === selectedTypeFilter;
      const matchesWorkplace = selectedWorkplaceFilter === "all" || job.workplace === selectedWorkplaceFilter;

      return matchesSearch && matchesCareer && matchesType && matchesWorkplace;
    });
  }, [searchQuery, selectedCareerFilter, selectedTypeFilter, selectedWorkplaceFilter]);

  const handleApply = (jobId) => {
    updateJobStatus(jobId, "applied");
    setAppliedFeedback(true);
    setTimeout(() => {
      setAppliedFeedback(false);
      setSelectedJobModal(null);
    }, 1500);
  };

  const getSavedJobStatus = (jobId) => {
    const item = savedJobs.find(j => j.id === jobId);
    return item ? item.status : null;
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Verified Tech Openings & Fellowships</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Job & Internship Match Board
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          High-match career opportunities calibrated against your current skill profile and roadmap goals.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 mb-8 border border-slate-200 dark:border-slate-800 space-y-4">
        
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by job title, company (e.g. Stripe, Anthropic), or skill..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Career Path */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Career Track
            </label>
            <select
              value={selectedCareerFilter}
              onChange={(e) => setSelectedCareerFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Tech Tracks</option>
              {CAREERS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Job Type */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Role Type
            </label>
            <select
              value={selectedTypeFilter}
              onChange={(e) => setSelectedTypeFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Types (Internships & Full-Time)</option>
              <option value="Internship">Internship / Fellowship</option>
              <option value="Full-Time">Full-Time / Entry-Level</option>
            </select>
          </div>

          {/* Workplace Mode */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Work Location Mode
            </label>
            <select
              value={selectedWorkplaceFilter}
              onChange={(e) => setSelectedWorkplaceFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <option value="all">Any Workplace Mode</option>
              <option value="Remote">100% Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

        </div>
      </div>

      {/* Jobs Count & Quick Target Filter */}
      <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-slate-400">
        <span>Showing <strong>{filteredJobs.length}</strong> matching opportunities</span>
        <button
          onClick={() => setSelectedCareerFilter(targetCareerId)}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          Filter by my Target Role ({CAREERS_DATA.find(c => c.id === targetCareerId)?.title})
        </button>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => {
          const matchScore = getJobMatchScore(job);
          const isSaved = isJobSaved(job.id);
          const applicationStatus = getSavedJobStatus(job.id);

          return (
            <div
              key={job.id}
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Card Top: Logo, Company & Bookmark */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.logoColor} flex items-center justify-center text-white font-extrabold text-xs shadow-sm`}>
                      {job.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400">
                        {job.company}
                      </h4>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleSaveJob(job.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"
                    title={isSaved ? "Saved in Dashboard" : "Save job"}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Match Score Badge & Type */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-extrabold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{matchScore}% Match</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold">
                    {job.type}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[11px] font-semibold">
                    {job.workplace}
                  </span>
                </div>

                {/* Details (Location & Salary) */}
                <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {job.salaryDisplay}
                    </span>
                  </div>
                </div>

                {/* Required Skills Chips */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {job.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-[10px] font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Status & View Details */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                {applicationStatus ? (
                  <span className="text-[11px] font-bold uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Status: {applicationStatus}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400">
                    Posted {job.postedDaysAgo}d ago
                  </span>
                )}

                <button
                  onClick={() => setSelectedJobModal(job)}
                  className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-xs font-bold transition-all"
                >
                  View Details
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Job Details Modal */}
      {selectedJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
            
            <button
              onClick={() => setSelectedJobModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selectedJobModal.logoColor} flex items-center justify-center text-white font-extrabold text-sm shadow-md`}>
                {selectedJobModal.company.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedJobModal.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {selectedJobModal.company} • {selectedJobModal.location}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 mb-6">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                {getJobMatchScore(selectedJobModal)}% Profile Match
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                {selectedJobModal.salaryDisplay}
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Role Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedJobModal.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Key Responsibilities
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {selectedJobModal.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Perks & Benefits
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedJobModal.benefits.map((b, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => toggleSaveJob(selectedJobModal.id)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isJobSaved(selectedJobModal.id) ? "Saved in Tracker" : "Save Job"}
              </button>

              <button
                onClick={() => handleApply(selectedJobModal.id)}
                disabled={appliedFeedback}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                {appliedFeedback ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Application Logged in Dashboard!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Quick Apply & Track</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
