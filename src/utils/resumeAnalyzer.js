import { CAREERS_DATA } from "../data/careersData";

// High-impact action verbs valued by ATS & technical recruiters
const POWER_ACTION_VERBS = [
  "architected", "engineered", "spearheaded", "orchestrated", "optimized",
  "automated", "deployed", "scaled", "streamlined", "accelerated",
  "designed", "developed", "implemented", "refactored", "formulated",
  "mentored", "published", "pioneered", "integrated", "benchmarked"
];

const PASSIVE_WEAK_VERBS = [
  "worked on", "helped", "assisted", "responsible for", "participated in",
  "did", "tried to", "handled", "was involved in"
];

export function analyzeResume(resumeText, targetCareerId) {
  if (!resumeText || resumeText.trim().length === 0) {
    return null;
  }

  const textLower = resumeText.toLowerCase();
  const career = CAREERS_DATA.find(c => c.id === targetCareerId) || CAREERS_DATA[0];

  // 1. Skill keyword matching
  const matchedSkills = [];
  const missingSkills = [];

  career.skills.forEach(skill => {
    // Generate simple aliases from skill name
    // e.g. "Python Programming" -> ["python", "python programming"]
    const cleaned = skill.name.toLowerCase();
    const tokens = cleaned.split(/[\s,()\/+]+/).filter(t => t.length > 2);
    
    let isMatched = false;
    if (textLower.includes(cleaned)) {
      isMatched = true;
    } else {
      // Check if any significant token is in text (e.g. "python", "pytorch", "docker")
      for (const token of tokens) {
        if (textLower.includes(token)) {
          isMatched = true;
          break;
        }
      }
    }

    if (isMatched) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  // Additional industry keywords for this career
  const extraKeywords = {
    "ai-engineer": ["gpu", "transformers", "embeddings", "latency", "evaluation", "cuda", "fine-tuning", "rag", "inference"],
    "fullstack-developer": ["api", "rest", "responsive", "components", "async", "schema", "state", "hydration", "ssr"],
    "cloud-devops": ["ci/cd", "pipeline", "cluster", "uptime", "iac", "autoscaling", "yaml", "monitoring", "metrics"],
    "data-scientist": ["eda", "cohort", "hypothesis", "regression", "metrics", "a/b test", "dashboard", "insights", "queries"],
    "cybersecurity-specialist": ["vulnerability", "audit", "owasp", "incident", "threat", "patch", "encryption", "firewall"],
    "product-manager": ["roadmap", "kpi", "okr", "user stories", "backlog", "discovery", "experiments", "conversion", "retention"],
    "uiux-designer": ["wireframe", "prototype", "heuristic", "usability", "persona", "design system", "tokens", "accessibility"],
    "mobile-developer": ["app store", "offline", "animations", "gestures", "caching", "permissions", "testflight", "device"]
  };

  const domainKeywords = extraKeywords[career.id] || [];
  const matchedDomainKeywords = domainKeywords.filter(kw => textLower.includes(kw));
  const missingDomainKeywords = domainKeywords.filter(kw => !textLower.includes(kw));

  // 2. Action verbs analysis
  const foundPowerVerbs = [];
  POWER_ACTION_VERBS.forEach(verb => {
    // word boundary regex
    const regex = new RegExp(`\\b${verb}\\b`, 'i');
    if (regex.test(textLower)) {
      foundPowerVerbs.push(verb.charAt(0).toUpperCase() + verb.slice(1));
    }
  });

  const foundWeakVerbs = [];
  PASSIVE_WEAK_VERBS.forEach(phrase => {
    if (textLower.includes(phrase)) {
      foundWeakVerbs.push(phrase);
    }
  });

  // 3. Detect Quantifiable Metrics (numbers, %, $, x times)
  const metricMatches = resumeText.match(/\b\d+(\.\d+)?%|\$\d+(,\d+)?|\b\d+x\b|\b\d+\s+(ms|seconds|minutes|hours|users|clients|records|models)\b/gi) || [];
  const metricsCount = metricMatches.length;

  // 4. Section detection
  const detectedSections = {
    summary: /summary|objective|about me/i.test(resumeText),
    skills: /skills|technical skills|proficiencies/i.test(resumeText),
    experience: /experience|work history|employment/i.test(resumeText),
    projects: /projects|portfolio|personal projects/i.test(resumeText),
    education: /education|degree|university|coursework/i.test(resumeText)
  };

  const sectionScore = Object.values(detectedSections).filter(Boolean).length * 4; // up to 20 pts

  // 5. Score calculation (0 - 100)
  // Keywords match weight: 45 pts
  const totalSkills = career.skills.length;
  const skillMatchRatio = totalSkills > 0 ? (matchedSkills.length / totalSkills) : 0.5;
  const keywordPts = Math.round(skillMatchRatio * 45);

  // Action verbs weight: 15 pts
  const actionVerbPts = Math.min(15, foundPowerVerbs.length * 3);

  // Quantifiable metrics weight: 15 pts
  const metricPts = Math.min(15, metricsCount * 3);

  // Formatting / length: 5 pts
  const lengthPts = resumeText.length > 500 && resumeText.length < 5000 ? 5 : 2;

  const atsScore = Math.min(99, Math.max(30, keywordPts + actionVerbPts + metricPts + sectionScore + lengthPts));

  // 6. Actionable recommendations & insights
  const recommendations = [];

  if (missingSkills.length > 0) {
    const topMissing = missingSkills.filter(s => s.importance === "Must-Have").slice(0, 3).map(s => s.name);
    if (topMissing.length > 0) {
      recommendations.push({
        type: "critical",
        title: "Incorporate Essential Missing Skills",
        description: `Your target role (${career.title}) heavily filters for: ${topMissing.join(", ")}. Add completed projects or coursework mentioning these technologies.`
      });
    }
  }

  if (metricsCount < 3) {
    recommendations.push({
      type: "warning",
      title: "Add Quantifiable Impact Metrics",
      description: `Recruiters look for numbers! We detected only ${metricsCount} metrics. Frame achievements as: 'Accomplished [X], as measured by [Y], by doing [Z]' (e.g. 'Reduced latency by 35%', 'Scaled API to 10k daily users').`
    });
  }

  if (foundWeakVerbs.length > 0) {
    recommendations.push({
      type: "suggestion",
      title: "Replace Passive Phrasing with Action Verbs",
      description: `Avoid phrases like "${foundWeakVerbs.slice(0, 2).join('", "')}". Upgrade to dynamic verbs like "Architected", "Engineered", "Orchestrated", or "Optimized".`
    });
  }

  if (!detectedSections.projects) {
    recommendations.push({
      type: "tip",
      title: "Add a Dedicated 'Projects' Section",
      description: "For modern tech and AI roles, proof-of-work in a Projects section with live GitHub or demo links outweighs generic course lists."
    });
  }

  return {
    targetCareer: career,
    atsScore,
    scoreBreakdown: {
      skillKeywords: { score: keywordPts, max: 45 },
      actionVerbs: { score: actionVerbPts, max: 15 },
      metricsImpact: { score: metricPts, max: 15 },
      sectionStructure: { score: sectionScore, max: 20 },
      formattingLength: { score: lengthPts, max: 5 }
    },
    matchedSkills,
    missingSkills,
    matchedDomainKeywords,
    missingDomainKeywords,
    foundPowerVerbs,
    foundWeakVerbs,
    metricsFound: metricMatches.slice(0, 6),
    detectedSections,
    recommendations
  };
}
