export const QUIZ_QUESTIONS = [
  {
    id: "interests",
    step: 1,
    category: "Interests & Passions",
    title: "What type of technical or creative problems excite you most?",
    subtitle: "Select the area that genuinely makes you curious to learn more.",
    type: "single",
    options: [
      {
        id: "ai_ml",
        label: "AI, Machine Learning & Intelligent Agents",
        description: "Training neural networks, prompting LLMs, building autonomous AI systems and algorithms.",
        icon: "BrainCircuit",
        careerWeights: { "ai-engineer": 30, "data-scientist": 15, "fullstack-developer": 5 }
      },
      {
        id: "web_fullstack",
        label: "Building End-to-End Web Applications",
        description: "Creating responsive frontends, interactive SaaS products, APIs, and databases.",
        icon: "Layers",
        careerWeights: { "fullstack-developer": 30, "mobile-developer": 15, "ai-engineer": 5 }
      },
      {
        id: "cloud_infra",
        label: "Cloud Architecture, DevOps & Automation",
        description: "Orchestrating Kubernetes, cloud networks (AWS/GCP), CI/CD pipelines, and scalability.",
        icon: "CloudLightning",
        careerWeights: { "cloud-devops": 30, "cybersecurity-specialist": 15, "fullstack-developer": 5 }
      },
      {
        id: "data_insights",
        label: "Data Science, Analytics & Statistical Insights",
        description: "Uncovering business patterns, predictive modeling, data visualization, and experimentation.",
        icon: "BarChart3",
        careerWeights: { "data-scientist": 30, "ai-engineer": 15, "product-manager": 10 }
      },
      {
        id: "security_defense",
        label: "Cybersecurity, Ethical Hacking & Defense",
        description: "Securing networks, ethical penetration testing, hunting vulnerabilities, and defense.",
        icon: "ShieldCheck",
        careerWeights: { "cybersecurity-specialist": 30, "cloud-devops": 15 }
      },
      {
        id: "product_ux",
        label: "Product Strategy & UI/UX Design",
        description: "Designing beautiful digital interfaces, customer research, feature prioritization, and roadmaps.",
        icon: "Palette",
        careerWeights: { "uiux-designer": 25, "product-manager": 25, "fullstack-developer": 5 }
      }
    ]
  },
  {
    id: "work_style",
    step: 2,
    category: "Work Style & Personality",
    title: "How do you prefer spending your ideal working day?",
    subtitle: "Think about what kind of workflow energizes you rather than drains you.",
    type: "single",
    options: [
      {
        id: "deep_focused_code",
        label: "Deep Focused Coding & Problem Solving",
        description: "Hours of uninterrupted flow state designing code architectures and solving algorithmic logic.",
        careerWeights: { "fullstack-developer": 20, "ai-engineer": 20, "mobile-developer": 15 }
      },
      {
        id: "cross_functional",
        label: "Collaborative Leadership & Cross-Functional Sync",
        description: "Facilitating teams, speaking with clients, aligning business strategy with engineering.",
        careerWeights: { "product-manager": 25, "uiux-designer": 10 }
      },
      {
        id: "investigative",
        label: "Investigative Analysis & Pattern Detection",
        description: "Analyzing system telemetry, tracking down elusive bugs, security breaches, or data anomalies.",
        careerWeights: { "cybersecurity-specialist": 25, "data-scientist": 20, "cloud-devops": 15 }
      },
      {
        id: "visual_creative",
        label: "Visual Prototyping & Empathy-Driven Design",
        description: "Crafting aesthetics, typography, micro-interactions, and observing real user behavior.",
        careerWeights: { "uiux-designer": 25, "product-manager": 10, "fullstack-developer": 5 }
      }
    ]
  },
  {
    id: "skills_strengths",
    step: 3,
    category: "Current Skill Foundations",
    title: "Which skills or tools have you had exposure to or enjoy?",
    subtitle: "Select all that apply. Don't worry if you're a beginner — this calibrates your roadmap.",
    type: "multi",
    options: [
      { id: "s_python", label: "Python, Math or Data Analysis", careerWeights: { "ai-engineer": 10, "data-scientist": 10 } },
      { id: "s_js_react", label: "JavaScript, TypeScript, React or HTML/CSS", careerWeights: { "fullstack-developer": 10, "mobile-developer": 8, "uiux-designer": 4 } },
      { id: "s_linux_cloud", label: "Linux, Terminal commands, Git or AWS", careerWeights: { "cloud-devops": 10, "cybersecurity-specialist": 8, "fullstack-developer": 4 } },
      { id: "s_figma_design", label: "Figma, Visual Design, or Wireframing", careerWeights: { "uiux-designer": 12, "product-manager": 6 } },
      { id: "s_sql_databases", label: "SQL, Databases or Excel spreadsheets", careerWeights: { "data-scientist": 10, "fullstack-developer": 6, "product-manager": 4 } },
      { id: "s_communication", label: "Writing, Public Speaking, or Project Management", careerWeights: { "product-manager": 12, "uiux-designer": 6 } }
    ]
  },
  {
    id: "career_priorities",
    step: 4,
    category: "Career Values & Goals",
    title: "What is your highest priority for your next career move?",
    subtitle: "What matters most to your personal life and career trajectory right now?",
    type: "single",
    options: [
      {
        id: "v_cutting_edge",
        label: "Working on Cutting-Edge AI & Maximizing Income",
        description: "Aiming for top compensation, working at frontier AI labs or rapid high-growth startups.",
        careerWeights: { "ai-engineer": 20, "cloud-devops": 10, "product-manager": 10 }
      },
      {
        id: "v_flexibility",
        label: "Work-Life Balance & Remote Nomad Freedom",
        description: "High flexibility, calm work environment, low unnecessary meetings, location independence.",
        careerWeights: { "data-scientist": 15, "fullstack-developer": 15, "uiux-designer": 15 }
      },
      {
        id: "v_stability",
        label: "Mission-Critical Stability & Zero Unemployment Risk",
        description: "Recession-proof, high organizational indispensability, protecting vital systems.",
        careerWeights: { "cybersecurity-specialist": 20, "cloud-devops": 15 }
      },
      {
        id: "v_creativity",
        label: "Tangible Creative Ownership & Shipping Products",
        description: "Building products users love, designing consumer experiences, feeling personal pride in output.",
        careerWeights: { "uiux-designer": 15, "mobile-developer": 15, "product-manager": 15, "fullstack-developer": 10 }
      }
    ]
  },
  {
    id: "math_code_balance",
    step: 5,
    category: "Technical Preference",
    title: "How do you feel about heavy mathematics vs coding vs visual work?",
    subtitle: "Every role balances logic, visual arts, and communication differently.",
    type: "single",
    options: [
      {
        id: "p_love_code_build",
        label: "I love building software systems, interfaces, and architecture.",
        careerWeights: { "fullstack-developer": 15, "mobile-developer": 15, "cloud-devops": 10 }
      },
      {
        id: "p_love_math_stats",
        label: "I enjoy statistics, linear algebra, formulas, and deep logic puzzles.",
        careerWeights: { "ai-engineer": 15, "data-scientist": 15 }
      },
      {
        id: "p_love_visual_human",
        label: "I care most about visual beauty, typography, and human psychology.",
        careerWeights: { "uiux-designer": 20, "product-manager": 10 }
      },
      {
        id: "p_love_systems_security",
        label: "I like low-level systems, networks, defense, and automation scripts.",
        careerWeights: { "cybersecurity-specialist": 15, "cloud-devops": 15 }
      }
    ]
  }
];
