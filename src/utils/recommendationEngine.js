import { CAREERS_DATA } from "../data/careersData";
import { QUIZ_QUESTIONS } from "../data/quizQuestions";

/**
 * Evaluates quiz answers and produces ranked career recommendations with score breakdowns.
 */
export function calculateRecommendations(answers) {
  if (!answers || Object.keys(answers).length === 0) {
    // Default fallback to top 3 standard in-demand careers
    return CAREERS_DATA.slice(0, 3).map((career, index) => ({
      career,
      overallMatch: 95 - index * 4,
      technicalFit: 94 - index * 5,
      cultureFit: 96 - index * 3,
      growthFit: career.growthScore || 90,
      personalityFit: 92 - index * 4,
      personalizedReasons: [
        `Strong alignment with your interest in high-impact problem solving.`,
        `Solid career longevity with an AI resilience score of ${career.aiResilience.score}%.`,
        `High growth rate projected at ${career.growthRate}.`
      ]
    }));
  }

  // Tally weights per career
  const scores = {};
  CAREERS_DATA.forEach(c => {
    scores[c.id] = {
      career: c,
      rawPoints: 10, // baseline
      maxPossible: 10,
      reasons: []
    };
  });

  // Evaluate each question
  QUIZ_QUESTIONS.forEach(question => {
    const userAns = answers[question.id];
    if (!userAns) return;

    if (question.type === "single") {
      const option = question.options.find(o => o.id === userAns);
      if (option && option.careerWeights) {
        Object.entries(option.careerWeights).forEach(([careerId, weight]) => {
          if (scores[careerId]) {
            scores[careerId].rawPoints += weight;
            scores[careerId].maxPossible += 30;
            if (weight >= 15) {
              scores[careerId].reasons.push(
                `Your preference for "${option.label}" directly matches core responsibilities of this path.`
              );
            }
          }
        });
      }
    } else if (question.type === "multi" && Array.isArray(userAns)) {
      userAns.forEach(ansId => {
        const option = question.options.find(o => o.id === ansId);
        if (option && option.careerWeights) {
          Object.entries(option.careerWeights).forEach(([careerId, weight]) => {
            if (scores[careerId]) {
              scores[careerId].rawPoints += weight;
              scores[careerId].maxPossible += 15;
              if (weight >= 8) {
                scores[careerId].reasons.push(
                  `Your background/interest in "${option.label}" gives you a significant learning curve advantage.`
                );
              }
            }
          });
        }
      });
    }
  });

  // Normalize scores to percentage between 70% and 98% for realistic AI matching
  const results = Object.values(scores).map(({ career, rawPoints, reasons }) => {
    // Normalization formula
    const baseMatch = Math.min(98, Math.max(72, Math.round((rawPoints / 85) * 100)));
    
    // Sub-factors
    const technicalFit = Math.min(99, Math.max(68, baseMatch + (career.id.includes("engineer") || career.id.includes("developer") ? 3 : -2)));
    const cultureFit = Math.min(98, Math.max(70, baseMatch + (career.workLifeBalance >= 4 ? 4 : -1)));
    const growthFit = career.growthScore || 90;
    const personalityFit = Math.min(97, Math.max(71, Math.round((technicalFit + cultureFit) / 2)));

    // Fallback reasons if needed
    const finalReasons = [...new Set(reasons)];
    if (finalReasons.length < 2) {
      finalReasons.push(`Exceptional future market outlook with projected growth of ${career.growthRate}.`);
      finalReasons.push(`Strong remote and compensation upside: median salary at ${career.salary.medianFormatted}.`);
    }

    return {
      career,
      overallMatch: baseMatch,
      technicalFit,
      cultureFit,
      growthFit,
      personalityFit,
      personalizedReasons: finalReasons.slice(0, 3)
    };
  });

  // Sort descending by overall match
  results.sort((a, b) => b.overallMatch - a.overallMatch);

  // Return all scored, with top 3 designated
  return results;
}
