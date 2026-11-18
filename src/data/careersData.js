export const CAREERS_DATA = [
  {
    id: "ai-engineer",
    title: "AI & Machine Learning Engineer",
    category: "Artificial Intelligence",
    icon: "BrainCircuit",
    shortDescription: "Design, train, and deploy generative AI models, LLM pipelines, neural networks, and scalable machine learning systems.",
    matchTags: ["coding", "math", "algorithms", "ai", "deep-learning", "problem-solving", "innovation"],
    overview: "AI & Machine Learning Engineers bridge the gap between theoretical data science and production-grade software. You build autonomous agents, train foundation models, fine-tune LLMs using techniques like LoRA and RAG, and optimize inference latency on GPUs.",
    salary: {
      entry: 95000,
      entryFormatted: "$95,000",
      median: 155000,
      medianFormatted: "$155,000",
      senior: 230000,
      seniorFormatted: "$230,000+"
    },
    growthRate: "+42% (Exceptional Growth 2024-2034)",
    growthScore: 98,
    aiResilience: {
      score: 95,
      rating: "Very High",
      description: "AI Engineers are creators and steerers of AI; demand outpaces automation."
    },
    workLifeBalance: 4,
    stressLevel: "Moderate",
    remoteFeasibility: "92% Remote / Hybrid Friendly",
    requiredEducation: "Computer Science, Data Science, or verified Portfolio & Certifications",
    topCompanies: ["OpenAI", "Anthropic", "Google DeepMind", "Microsoft", "Meta", "NVIDIA", "Hugging Face"],
    sampleTitles: ["Machine Learning Engineer", "Generative AI Architect", "LLM Research Engineer", "AI Systems Specialist"],
    dayInLife: [
      { time: "09:30 AM", activity: "Review overnight distributed training runs and GPU cluster utilization metrics." },
      { time: "11:00 AM", activity: "Team sync on retrieval-augmented generation (RAG) vector database chunking strategy." },
      { time: "01:30 PM", activity: "Fine-tuning an open-source model using PyTorch and vLLM for high-throughput deployment." },
      { time: "03:45 PM", activity: "Designing guardrails, prompt evaluation benchmarks, and latency optimization." },
      { time: "05:00 PM", activity: "Reviewing pull requests and reading latest arXiv paper on transformer attention." }
    ],
    pros: [
      "Top-tier compensation and equity opportunities",
      "Pioneering technology defining the next era of computing",
      "High autonomy and intellectually stimulating challenges",
      "Huge global demand with severe talent shortage"
    ],
    cons: [
      "Extremely fast-paced ecosystem requiring continuous unlearning and relearning",
      "High infrastructure costs and hardware debugging complexity",
      "Uncertainty around model hallucinations and safety evaluations"
    ],
    skills: [
      { id: "python", name: "Python Programming", category: "Language", importance: "Must-Have", difficulty: "Intermediate", hours: 60, status: "Proficient" },
      { id: "pytorch", name: "PyTorch / TensorFlow", category: "Framework", importance: "Must-Have", difficulty: "Advanced", hours: 90, status: "Missing" },
      { id: "llm-rag", name: "LLMs, Prompt Engineering & RAG", category: "AI Core", importance: "Must-Have", difficulty: "Intermediate", hours: 50, status: "In Progress" },
      { id: "math-stats", name: "Linear Algebra & Statistics", category: "Foundations", importance: "Must-Have", difficulty: "Advanced", hours: 75, status: "Missing" },
      { id: "langchain-llamaindex", name: "LangChain / LlamaIndex", category: "Framework", importance: "Must-Have", difficulty: "Intermediate", hours: 40, status: "In Progress" },
      { id: "vectordb", name: "Vector Databases (Pinecone, Chroma)", category: "Data", importance: "Must-Have", difficulty: "Beginner", hours: 25, status: "Missing" },
      { id: "docker-kubernetes", name: "Docker & GPU Cloud Infra", category: "DevOps", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 45, status: "Missing" },
      { id: "model-deploy", name: "Model Deployment (vLLM, FastAPI, BentoML)", category: "Deployment", importance: "Must-Have", difficulty: "Intermediate", hours: 45, status: "Missing" },
      { id: "mlops", name: "MLOps & CI/CD Pipelines (MLflow, WandB)", category: "Tooling", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 35, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Foundations: Python, Math & Data Manipulation",
        estimatedWeeks: "Weeks 1-6",
        description: "Master modern Python, NumPy, Pandas, linear algebra for tensors, and basic machine learning concepts.",
        topics: [
          "Python 3.12+ advanced syntax, async, type hints, and OOP",
          "Vector and matrix mathematics, dot products, eigenvalues",
          "Data cleaning and exploratory analysis with Pandas and Polars",
          "Classical ML algorithms: Linear/Logistic Regression, Decision Trees, Random Forests"
        ],
        project: "Predictive Housing & Salary Intelligence Engine using Scikit-Learn with data validation pipeline.",
        resources: [
          { name: "Fast.ai Practical Deep Learning for Coders", type: "Free Course", url: "https://course.fast.ai/" },
          { name: "3Blue1Brown Essence of Linear Algebra", type: "Video Series", url: "https://www.3blue1brown.com/topics/linear-algebra" },
          { name: "Python for Data Analysis (Book)", type: "Book / Reference", url: "https://wesmckinney.com/book/" }
        ]
      },
      {
        phase: 2,
        title: "Deep Learning & Neural Architectures",
        estimatedWeeks: "Weeks 7-14",
        description: "Build deep neural nets, CNNs, RNNs, and master modern PyTorch training loops with GPU acceleration.",
        topics: [
          "PyTorch tensors, autograd, custom Datasets and DataLoaders",
          "Convolutional networks for computer vision",
          "Sequence models and attention mechanisms",
          "Backpropagation, loss functions, learning rate schedulers, and AdamW optimizer"
        ],
        project: "Multi-modal Image & Text Classifier built with PyTorch and trained on AWS/Colab GPU.",
        resources: [
          { name: "DeepLearning.AI Deep Learning Specialization", type: "Certification Course", url: "https://www.deeplearning.ai/" },
          { name: "PyTorch Official Tutorials & Deep Dive", type: "Documentation", url: "https://pytorch.org/tutorials/" }
        ]
      },
      {
        phase: 3,
        title: "Transformers, LLMs & Retrieval Augmented Generation (RAG)",
        estimatedWeeks: "Weeks 15-22",
        description: "Dive deep into Transformer attention, Hugging Face ecosystem, embeddings, and enterprise RAG architectures.",
        topics: [
          "Self-Attention, Multi-Head Attention, and positional encoding internals",
          "Hugging Face Transformers library: tokenizers, pipelines, and PEFT/LoRA fine-tuning",
          "Vector embeddings and similarity search with Pinecone and FAISS",
          "Hybrid RAG: semantic search, keyword re-ranking, and context window optimization"
        ],
        project: "Enterprise Knowledge Base AI Assistant with semantic document chunking, hybrid search, and latency benchmark.",
        resources: [
          { name: "Hugging Face NLP Course", type: "Free Interactive Course", url: "https://huggingface.co/learn/nlp-course" },
          { name: "LlamaIndex / LangChain Official Docs & Blueprints", type: "Documentation", url: "https://docs.llamaindex.ai/" }
        ]
      },
      {
        phase: 4,
        title: "Production MLOps, Autonomous Agents & System Design",
        estimatedWeeks: "Weeks 23-30",
        description: "Package, serve, and monitor AI services in production with streaming APIs and evaluation guardrails.",
        topics: [
          "Model serving via vLLM, TensorRT-LLM, and FastAPI with async streaming",
          "Multi-agent orchestration systems (CrewAI, LangGraph, AutoGen)",
          "LLM evaluation frameworks (Ragas, TruLens) & automated synthetic testing",
          "GPU cost management, containerization with Docker, and CI/CD"
        ],
        project: "Production Autonomous Coding & Research Agent deployed on Kubernetes with streaming chat interface.",
        resources: [
          { name: "Full Stack Deep Learning Course", type: "Free Course", url: "https://fullstackdeeplearning.com/" },
          { name: "Designing Machine Learning Systems (Chip Huyen)", type: "Book", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" }
        ]
      }
    ]
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Web Architect",
    category: "Software Engineering",
    icon: "Layers",
    shortDescription: "Architect resilient end-to-end web apps, rich interactive interfaces, scalable backend microservices, and databases.",
    matchTags: ["coding", "frontend", "backend", "web", "design", "databases", "product-building"],
    overview: "Full Stack Developers create modern, responsive, high-performance web products. From slick React/Next.js interfaces to bulletproof Node.js/Go backends, distributed SQL/NoSQL databases, and cloud deployments, you own the entire product delivery lifecycle.",
    salary: {
      entry: 82000,
      entryFormatted: "$82,000",
      median: 135000,
      medianFormatted: "$135,000",
      senior: 195000,
      seniorFormatted: "$195,000+"
    },
    growthRate: "+26% (High Demand)",
    growthScore: 90,
    aiResilience: {
      score: 84,
      rating: "High",
      description: "AI assists with boilerplate, but full stack system design, product decisions, and complex state management require human architects."
    },
    workLifeBalance: 4,
    stressLevel: "Moderate",
    remoteFeasibility: "96% Remote / Worldwide",
    requiredEducation: "CS Degree, Bootcamp, or Strong Open Source Portfolio",
    topCompanies: ["Stripe", "Vercel", "Airbnb", "Shopify", "Netflix", "Atlassian", "GitHub"],
    sampleTitles: ["Full Stack Engineer", "Senior Web Application Architect", "Frontend & Backend Lead", "Product Engineer"],
    dayInLife: [
      { time: "09:00 AM", activity: "Daily standup and review of CI/CD build pipelines and error trackers (Sentry)." },
      { time: "10:30 AM", activity: "Collaborating with UX designers on responsive design tokens and component library." },
      { time: "01:00 PM", activity: "Building an authenticated REST & GraphQL API endpoint with PostgreSQL transactions." },
      { time: "03:30 PM", activity: "Optimizing React server component hydration and reducing web vitals bundle size." },
      { time: "05:00 PM", activity: "Writing automated Vitest and Playwright end-to-end test suites." }
    ],
    pros: [
      "Versatility: ability to build an entire startup product independently",
      "Enormous number of job openings across all company stages",
      "Immediate visual and functional feedback on everything you code",
      "High remote and digital nomad work flexibility"
    ],
    cons: [
      "Rapidly evolving frontend ecosystem with frequent framework fatigue",
      "Must balance knowledge breadth with specialized depth",
      "Cross-browser and mobile device compatibility quirks"
    ],
    skills: [
      { id: "javascript-ts", name: "JavaScript (ES2024+) & TypeScript", category: "Language", importance: "Must-Have", difficulty: "Intermediate", hours: 65, status: "Proficient" },
      { id: "react-nextjs", name: "React 19 & Next.js App Router", category: "Frontend", importance: "Must-Have", difficulty: "Intermediate", hours: 60, status: "Proficient" },
      { id: "tailwindcss", name: "Tailwind CSS & Responsive UI", category: "Frontend", importance: "Must-Have", difficulty: "Beginner", hours: 25, status: "Proficient" },
      { id: "nodejs-express", name: "Node.js / Express or NestJS", category: "Backend", importance: "Must-Have", difficulty: "Intermediate", hours: 50, status: "In Progress" },
      { id: "sql-postgres", name: "PostgreSQL & Prisma / Drizzle ORM", category: "Database", importance: "Must-Have", difficulty: "Intermediate", hours: 45, status: "In Progress" },
      { id: "rest-graphql", name: "REST APIs & GraphQL / tRPC", category: "API", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "Missing" },
      { id: "auth-security", name: "Auth (OAuth, JWT, NextAuth, Clerk)", category: "Security", importance: "Must-Have", difficulty: "Intermediate", hours: 30, status: "Missing" },
      { id: "docker-deploy", name: "Docker & Cloud Deployments (Vercel, AWS)", category: "DevOps", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 35, status: "Missing" },
      { id: "testing-e2e", name: "Testing (Vitest, Playwright, RTL)", category: "Quality", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 30, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Modern Frontend Mastery & TypeScript",
        estimatedWeeks: "Weeks 1-6",
        description: "Master modern semantic HTML5, CSS Grid/Flexbox, Tailwind CSS, TypeScript, and clean code principles.",
        topics: [
          "Semantic HTML5, ARIA accessibility, responsive viewport design",
          "Advanced TypeScript: Generics, utility types, discriminating unions, Zod validation",
          "Modern DOM manipulation, async JavaScript, event loop, Fetch API",
          "Component architectures and responsive design patterns"
        ],
        project: "Responsive Interactive Dashboard with customizable theme switcher and live mock API data.",
        resources: [
          { name: "Full Stack Open (University of Helsinki)", type: "Free Course", url: "https://fullstackopen.com/en/" },
          { name: "Total TypeScript by Matt Pocock", type: "Interactive Guide", url: "https://www.totaltypescript.com/" }
        ]
      },
      {
        phase: 2,
        title: "React 19, State Management & Modern Frameworks",
        estimatedWeeks: "Weeks 7-14",
        description: "Deep dive into React hooks, context, server components, Next.js, and client state.",
        topics: [
          "React Core: useEffect, useMemo, useCallback, custom hooks, and concurrent features",
          "Next.js App Router: Server vs Client components, Server Actions, streaming SSR",
          "State management: Zustand, TanStack Query (React Query) for server caching",
          "Form handling and schema validation with React Hook Form + Zod"
        ],
        project: "Full-Featured SaaS Collaborative Workspace with real-time updates and optimistic UI.",
        resources: [
          { name: "React Official Documentation", type: "Documentation", url: "https://react.dev/" },
          { name: "Next.js Learn Interactive Course", type: "Free Course", url: "https://nextjs.org/learn" }
        ]
      },
      {
        phase: 3,
        title: "Scalable Backends, Databases & APIs",
        estimatedWeeks: "Weeks 15-22",
        description: "Design relational schema, ORM data access layers, secure authentication, and microservices.",
        topics: [
          "Node.js runtime internals, Event Loop, streams, and cluster scaling",
          "PostgreSQL relational modeling, indexes, foreign keys, and transactions",
          "Prisma & Drizzle ORM migrations, query optimization, and Redis caching",
          "Session vs JWT authentication, RBAC, OAuth 2.0, and rate limiting"
        ],
        project: "E-Commerce Multi-Vendor Marketplace API with Stripe Payments, inventory locking, and webhook handlers.",
        resources: [
          { name: "Prisma Data Guide", type: "Reference Guide", url: "https://www.prisma.io/dataguide" },
          { name: "Node.js Best Practices GitHub", type: "Open Source Guide", url: "https://github.com/goldbergyoni/nodebestpractices" }
        ]
      },
      {
        phase: 4,
        title: "DevOps, Testing, Security & Cloud Deployment",
        estimatedWeeks: "Weeks 23-28",
        description: "Containerize apps, configure CI/CD pipelines, write comprehensive tests, and deploy to AWS/Vercel.",
        topics: [
          "Docker containerization, multi-stage builds, and Docker Compose",
          "Unit & Integration testing with Vitest; End-to-end testing with Playwright",
          "Web security essentials: CSRF, XSS, CORS, Content Security Policy",
          "CI/CD with GitHub Actions, AWS S3/CloudFront, and production monitoring"
        ],
        project: "Enterprise Micro-SaaS Capstone with CI/CD, database backups, monitoring, and automated test coverage.",
        resources: [
          { name: "Playwright Testing Guide", type: "Documentation", url: "https://playwright.dev/" },
          { name: "Docker Official Get Started", type: "Documentation", url: "https://docs.docker.com/get-started/" }
        ]
      }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Architect",
    category: "Infrastructure & Cloud",
    icon: "CloudLightning",
    shortDescription: "Architect bulletproof cloud infrastructure, Kubernetes clusters, CI/CD pipelines, and infrastructure-as-code.",
    matchTags: ["cloud", "linux", "automation", "kubernetes", "security", "infrastructure", "systems"],
    overview: "Cloud & DevOps Architects build the invisible backbone of modern software. You automate deployments, orchestrate Kubernetes clusters on AWS/GCP/Azure, write Infrastructure-as-Code (Terraform), and ensure 99.99% uptime with zero-downtime rollouts.",
    salary: {
      entry: 88000,
      entryFormatted: "$88,000",
      median: 148000,
      medianFormatted: "$148,000",
      senior: 215000,
      seniorFormatted: "$215,000+"
    },
    growthRate: "+32% (Critical Shortage)",
    growthScore: 94,
    aiResilience: {
      score: 91,
      rating: "Very High",
      description: "Managing live cloud clusters, security compliance, real-time incident resolution, and disaster recovery requires deep human accountability."
    },
    workLifeBalance: 4,
    stressLevel: "Moderate to High",
    remoteFeasibility: "94% Remote Friendly",
    requiredEducation: "CS / IT background or AWS/Kubernetes Certifications (CKA, Solutions Architect)",
    topCompanies: ["Amazon Web Services", "Google Cloud", "Microsoft", "Datadog", "HashiCorp", "Cloudflare", "Red Hat"],
    sampleTitles: ["DevOps Engineer", "Cloud Infrastructure Architect", "Site Reliability Engineer (SRE)", "Platform Engineer"],
    dayInLife: [
      { time: "09:00 AM", activity: "Check Datadog dashboards for abnormal latency spikes and cluster node autoscaling." },
      { time: "10:30 AM", activity: "Write Terraform modules to provision multi-region AWS RDS and VPC peering." },
      { time: "01:30 PM", activity: "Refactor GitHub Actions CI/CD pipeline to speed up container build times by 40%." },
      { time: "03:30 PM", activity: "Debug an ingress controller and TLS certificate renewal issue on a production Kubernetes cluster." },
      { time: "05:00 PM", activity: "Conduct chaos engineering simulation to verify automated database failover." }
    ],
    pros: [
      "Exceptional job security and high compensation",
      "Platform engineers are vital for every scaling engineering org",
      "Work with cutting-edge distributed computing and cloud technologies",
      "High level of automation allows focus on architectural improvements"
    ],
    cons: [
      "Occasional on-call rotations for critical production outages",
      "Steep initial learning curve across Linux, networking, and cloud services",
      "High stakes: mistakes can cause expensive cloud bills or downtime"
    ],
    skills: [
      { id: "linux-bash", name: "Linux Administration & Bash Scripting", category: "OS", importance: "Must-Have", difficulty: "Intermediate", hours: 45, status: "Proficient" },
      { id: "docker", name: "Docker & Container Internals", category: "Containers", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "Proficient" },
      { id: "kubernetes", name: "Kubernetes (K8s) & Helm", category: "Orchestration", importance: "Must-Have", difficulty: "Advanced", hours: 80, status: "Missing" },
      { id: "aws-gcp", name: "AWS / Google Cloud Services", category: "Cloud", importance: "Must-Have", difficulty: "Intermediate", hours: 65, status: "In Progress" },
      { id: "terraform", name: "Terraform (Infrastructure as Code)", category: "IaC", importance: "Must-Have", difficulty: "Intermediate", hours: 45, status: "Missing" },
      { id: "cicd", name: "CI/CD (GitHub Actions, GitLab CI)", category: "Automation", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "In Progress" },
      { id: "monitoring", name: "Monitoring & Observability (Prometheus, Grafana)", category: "Observability", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 30, status: "Missing" },
      { id: "security-compliance", name: "Cloud Security, IAM & Zero Trust", category: "Security", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 40, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Linux, Networking & Shell Automation",
        estimatedWeeks: "Weeks 1-5",
        description: "Master Linux file systems, process management, TCP/IP, DNS, SSL/TLS, and bash scripting.",
        topics: [
          "Linux command line, permissions, systemd services, SSH hardening",
          "Networking fundamentals: CIDR subnets, DNS, HTTP/HTTPS, load balancers, firewalls",
          "Git version control, branching strategies, and Bash automation scripts"
        ],
        project: "Automated Linux Server Provisioning & Security Hardening Script with log rotation.",
        resources: [
          { name: "Linux Journey (Interactive Tutorial)", type: "Free Interactive", url: "https://linuxjourney.com/" },
          { name: "OverTheWire Bandit Wargame", type: "Hands-on Practice", url: "https://overthewire.org/wargames/bandit/" }
        ]
      },
      {
        phase: 2,
        title: "Containers, Docker & CI/CD Pipelines",
        estimatedWeeks: "Weeks 6-12",
        description: "Master containerizing microservices and building automated testing/deployment pipelines.",
        topics: [
          "Docker container architecture, Dockerfile best practices, multi-stage builds",
          "Container networking, persistent volumes, and Docker Compose orchestration",
          "GitHub Actions pipelines: linting, unit tests, Docker builds, and automated semantic releases"
        ],
        project: "Automated CI/CD Pipeline deploying containerized microservices to cloud registry on every git push.",
        resources: [
          { name: "Docker Mastery by Bret Fisher", type: "Course", url: "https://www.docker.com/" },
          { name: "GitHub Actions Documentation", type: "Documentation", url: "https://docs.github.com/actions" }
        ]
      },
      {
        phase: 3,
        title: "Cloud Architecture (AWS) & Terraform IaC",
        estimatedWeeks: "Weeks 13-20",
        description: "Provision resilient cloud networks, compute, and databases declaratively using Terraform.",
        topics: [
          "AWS Core: VPC, EC2, ECS, S3, RDS, IAM roles, Security Groups, Route 53",
          "Terraform HCL syntax, state management, remote backends (S3/DynamoDB), and reusable modules",
          "Cloud cost estimation and security best practices (least privilege IAM)"
        ],
        project: "Multi-Tier High-Availability AWS Architecture provisioned entirely via modular Terraform code.",
        resources: [
          { name: "AWS Skill Builder (Free Tier)", type: "Official Courses", url: "https://explore.skillbuilder.aws/" },
          { name: "Terraform Associate Certification Prep", type: "Documentation", url: "https://developer.hashicorp.com/terraform" }
        ]
      },
      {
        phase: 4,
        title: "Kubernetes, GitOps & Production Observability",
        estimatedWeeks: "Weeks 21-28",
        description: "Deploy and manage production Kubernetes clusters with Helm, ArgoCD, Prometheus, and Grafana.",
        topics: [
          "Kubernetes architecture: Pods, Deployments, Services, Ingress, ConfigMaps, Secrets",
          "Helm charts packaging and templating",
          "GitOps continuous deployment using ArgoCD or Flux",
          "Observability: Prometheus metrics scraping, custom Grafana dashboards, alert manager rules"
        ],
        project: "Production-ready Kubernetes cluster running microservices with automated autoscaling and Grafana alerts.",
        resources: [
          { name: "Certified Kubernetes Administrator (CKA) Curriculum", type: "Industry Standard", url: "https://kubernetes.io/docs/home/" },
          { name: "Prometheus & Grafana Setup Lab", type: "Hands-on Lab", url: "https://grafana.com/tutorials/" }
        ]
      }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist & Analytics Lead",
    category: "Data & Analytics",
    icon: "BarChart3",
    shortDescription: "Extract strategic business value from massive datasets using statistical modeling, machine learning, and visualization.",
    matchTags: ["data", "statistics", "python", "analytics", "sql", "insights", "strategy"],
    overview: "Data Scientists transform raw, messy data into high-stakes strategic intelligence. You formulate hypotheses, run A/B experiments, build predictive models, design executive dashboards, and guide multi-million dollar product and financial decisions.",
    salary: {
      entry: 85000,
      entryFormatted: "$85,000",
      median: 140000,
      medianFormatted: "$140,000",
      senior: 205000,
      seniorFormatted: "$205,000+"
    },
    growthRate: "+35% (Very High Demand)",
    growthScore: 92,
    aiResilience: {
      score: 87,
      rating: "High",
      description: "Interpreting complex business context, designing scientific experiments, and presenting to executives requires human intuition."
    },
    workLifeBalance: 5,
    stressLevel: "Low to Moderate",
    remoteFeasibility: "95% Remote Friendly",
    requiredEducation: "Mathematics, Statistics, Economics, CS, or strong analytical portfolio",
    topCompanies: ["Netflix", "Spotify", "Uber", "Apple", "McKinsey & Co", "Palantir", "Airbnb"],
    sampleTitles: ["Data Scientist", "Lead Quantitative Analyst", "Machine Learning Data Scientist", "Senior Analytics Engineer"],
    dayInLife: [
      { time: "09:15 AM", activity: "Analyze results of an A/B test on user onboarding conversion rates using statistical hypothesis testing." },
      { time: "11:00 AM", activity: "Write complex Snowflake SQL queries joining user event streams with transactional sales tables." },
      { time: "01:30 PM", activity: "Train an XGBoost customer churn prediction model and evaluate ROC-AUC and feature importance." },
      { time: "03:45 PM", activity: "Build an interactive Tableau/Streamlit dashboard for the Chief Product Officer." },
      { time: "05:00 PM", activity: "Document analytical methodology and present recommendations at the weekly product review." }
    ],
    pros: [
      "Outstanding work-life balance and flexible schedule",
      "Direct influence on executive business and product strategies",
      "Deep intellectual satisfaction from solving statistical puzzles",
      "Applicable across virtually every industry: healthcare, finance, tech, gaming"
    ],
    cons: [
      "80% of time often spent on data cleaning, wrangling, and pipeline fixes",
      "Need to translate complex statistical concepts to non-technical stakeholders",
      "Ambiguity in problem definitions from business teams"
    ],
    skills: [
      { id: "python-datasci", name: "Python (Pandas, NumPy, Scipy)", category: "Language", importance: "Must-Have", difficulty: "Intermediate", hours: 55, status: "Proficient" },
      { id: "sql-advanced", name: "Advanced SQL (Window Functions, CTEs)", category: "Database", importance: "Must-Have", difficulty: "Intermediate", hours: 45, status: "Proficient" },
      { id: "stats-prob", name: "Statistics, Probability & Hypothesis Testing", category: "Math", importance: "Must-Have", difficulty: "Advanced", hours: 60, status: "In Progress" },
      { id: "ml-scikit", name: "Machine Learning (Scikit-Learn, XGBoost)", category: "ML", importance: "Must-Have", difficulty: "Intermediate", hours: 50, status: "Missing" },
      { id: "data-viz", name: "Data Visualization (Tableau, PowerBI, Plotly)", category: "Viz", importance: "Must-Have", difficulty: "Beginner", hours: 30, status: "In Progress" },
      { id: "experimentation", name: "A/B Testing & Causal Inference", category: "Experimentation", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "Missing" },
      { id: "bigdata", name: "Big Data (Spark, Databricks, Snowflake)", category: "Data Tools", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 40, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Data Manipulation, Advanced SQL & Statistics",
        estimatedWeeks: "Weeks 1-6",
        description: "Master SQL queries, exploratory data analysis, and core inferential statistics.",
        topics: [
          "SQL window functions, self-joins, CTEs, indexing, query execution plans",
          "Python data manipulation with Pandas 2.0 and Polars",
          "Descriptive and inferential statistics: p-values, confidence intervals, Bayes theorem"
        ],
        project: "E-Commerce Customer Lifetime Value & Cohort Retention Analysis in SQL & Python.",
        resources: [
          { name: "Mode Analytics SQL Tutorial", type: "Free Interactive", url: "https://mode.com/sql-tutorial/" },
          { name: "Khan Academy Statistics and Probability", type: "Free Course", url: "https://www.khanacademy.org/math/statistics-probability" }
        ]
      },
      {
        phase: 2,
        title: "Predictive Modeling & Applied Machine Learning",
        estimatedWeeks: "Weeks 7-14",
        description: "Train, tune, and evaluate supervised and unsupervised machine learning models.",
        topics: [
          "Feature engineering, scaling, missing value imputation, one-hot encoding",
          "Regression, Classification, Cross-validation, Regularization (Lasso/Ridge)",
          "Ensemble methods: Random Forest, XGBoost, LightGBM, CatBoost",
          "Clustering (K-Means, DBSCAN) and Dimensionality Reduction (PCA, t-SNE)"
        ],
        project: "Customer Churn & Default Risk Engine with feature importance visualization using SHAP.",
        resources: [
          { name: "Kaggle Learn Micro-Courses", type: "Interactive Practice", url: "https://www.kaggle.com/learn" },
          { name: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", type: "Book", url: "https://www.oreilly.com/" }
        ]
      },
      {
        phase: 3,
        title: "A/B Testing, Experimentation & Data Storytelling",
        estimatedWeeks: "Weeks 15-20",
        description: "Design rigorous scientific experiments, measure sample sizes, and communicate insights.",
        topics: [
          "A/B test design: sample size calculation, power analysis, minimum detectable effect",
          "Common pitfalls: p-hacking, early stopping, network effects, Twyman's Law",
          "Storytelling with data: building executive-ready interactive dashboards with Streamlit and Plotly"
        ],
        project: "End-to-end A/B Experiment Analysis Simulator with executive pitch deck and interactive dashboard.",
        resources: [
          { name: "Trustworthy Online Controlled Experiments (Kohavi, Tang, Xu)", type: "Book / Gold Standard", url: "https://experimentguide.com/" },
          { name: "Streamlit Documentation & Gallery", type: "Docs", url: "https://streamlit.io/" }
        ]
      },
      {
        phase: 4,
        title: "Big Data Ecosystem & Modern Data Stack",
        estimatedWeeks: "Weeks 21-26",
        description: "Scale data science pipelines using cloud data warehouses, Spark, and dbt.",
        topics: [
          "Cloud data warehouses: Snowflake, BigQuery, Amazon Redshift",
          "Distributed compute with Apache Spark and PySpark",
          "Modern analytics engineering with dbt (data build tool)",
          "Deploying machine learning models as lightweight microservices"
        ],
        project: "Production Analytics Pipeline on Snowflake + dbt with automated data quality assertions.",
        resources: [
          { name: "dbt Learn Free Courses", type: "Interactive Course", url: "https://courses.getdbt.com/" },
          { name: "Databricks Academy Free Modules", type: "Cloud Lab", url: "https://academy.databricks.com/" }
        ]
      }
    ]
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity & Ethical Hacker",
    category: "Security & Defense",
    icon: "ShieldCheck",
    shortDescription: "Protect critical digital infrastructure, perform penetration testing, analyze threats, and secure enterprise assets.",
    matchTags: ["security", "networking", "linux", "defense", "hacking", "investigation", "cryptography"],
    overview: "Cybersecurity Specialists and Ethical Hackers safeguard systems from adversarial attacks, ransomware, and data breaches. You simulate cyber attacks (red teaming), harden perimeter defenses (blue teaming), audit smart contracts, and conduct forensic incident investigations.",
    salary: {
      entry: 85000,
      entryFormatted: "$85,000",
      median: 142000,
      medianFormatted: "$142,000",
      senior: 210000,
      seniorFormatted: "$210,000+"
    },
    growthRate: "+33% (Zero Unemployment)",
    growthScore: 93,
    aiResilience: {
      score: 93,
      rating: "Very High",
      description: "Adversaries use AI to attack, creating an arms race that makes human defensive vigilance and threat hunting essential."
    },
    workLifeBalance: 4,
    stressLevel: "Moderate to High",
    remoteFeasibility: "88% Remote / Hybrid",
    requiredEducation: "CS / IT / Cyber degree or CompTIA Security+, CEH, OSCP Certifications",
    topCompanies: ["CrowdStrike", "Palo Alto Networks", "Cloudflare", "Mandiant (Google)", "Cisco", "Fortinet", "Department of Defense"],
    sampleTitles: ["Security Engineer", "Penetration Tester / Ethical Hacker", "SOC Analyst Tier 2/3", "Cloud Security Architect"],
    dayInLife: [
      { time: "08:45 AM", activity: "Triage zero-day vulnerability disclosures (CVEs) affecting production software stack." },
      { time: "10:30 AM", activity: "Conduct authorized penetration testing on an internal API endpoint to identify SQL injection." },
      { time: "01:15 PM", activity: "Investigate suspicious login anomalies flagged by SIEM (Splunk / Elastic) using threat intelligence." },
      { time: "03:30 PM", activity: "Conduct threat modeling session with software architects for a new payment gateway." },
      { time: "04:45 PM", activity: "Write a security audit report with concrete remediation recommendations." }
    ],
    pros: [
      "Extremely high job security: virtually negative unemployment rate",
      "Exciting cat-and-mouse dynamic against real-world adversaries",
      "Opportunity for lucrative bug bounties and independent consulting",
      "Meaningful mission protecting privacy, financial systems, and infrastructure"
    ],
    cons: [
      "High stress during active security breaches or zero-day crises",
      "Continuous regulatory compliance paperwork (SOC2, ISO 27001, HIPAA)",
      "Must adhere strictly to legal and ethical authorization boundaries"
    ],
    skills: [
      { id: "network-protocols", name: "Network Security & Protocols (TCP/IP, Wireshark)", category: "Networking", importance: "Must-Have", difficulty: "Intermediate", hours: 50, status: "In Progress" },
      { id: "linux-sec", name: "Linux Security & Command Line", category: "OS", importance: "Must-Have", difficulty: "Intermediate", hours: 40, status: "Proficient" },
      { id: "web-pentest", name: "Web App Penetration Testing (Burp Suite, OWASP Top 10)", category: "Offensive", importance: "Must-Have", difficulty: "Advanced", hours: 75, status: "Missing" },
      { id: "siem-soc", name: "SIEM & Log Analysis (Splunk, Elastic)", category: "Defensive", importance: "Must-Have", difficulty: "Intermediate", hours: 40, status: "Missing" },
      { id: "python-sec", name: "Python for Security Automation & Scripting", category: "Scripting", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "In Progress" },
      { id: "cloud-sec", name: "Cloud Security & IAM (AWS/Azure)", category: "Cloud", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 45, status: "Missing" },
      { id: "cryptography", name: "Applied Cryptography & PKI", category: "Theory", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 30, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Networking, Linux & Systems Security Foundations",
        estimatedWeeks: "Weeks 1-6",
        description: "Master networking architecture, packet analysis, Linux internals, and security fundamentals.",
        topics: [
          "OSI model, TCP three-way handshake, DNS, ARP poisoning, SSL/TLS handshakes",
          "Wireshark packet capture and traffic analysis",
          "Linux file permissions, sudoers, iptables, ufw firewall, and security auditing"
        ],
        project: "Network Packet Sniffer & Malicious Traffic Analyzer built with Python and Scapy.",
        resources: [
          { name: "Professor Messer CompTIA Security+ Course", type: "Free Video Series", url: "https://www.professormesser.com/" },
          { name: "TryHackMe Pre-Security & Complete Beginner Paths", type: "Interactive Lab", url: "https://tryhackme.com/" }
        ]
      },
      {
        phase: 2,
        title: "Web Application Security & OWASP Top 10",
        estimatedWeeks: "Weeks 7-14",
        description: "Find and exploit web vulnerabilities safely using Burp Suite and defensive code practices.",
        topics: [
          "OWASP Top 10: SQL Injection, Cross-Site Scripting (XSS), CSRF, SSRF, IDOR",
          "Burp Suite proxy: intercepting requests, repeater, intruder, and extensions",
          "Authentication vulnerabilities, JWT token flaws, and privilege escalation"
        ],
        project: "Vulnerability Assessment & Remediation Report for an intentional vulnerable web app (Juice Shop / DVWA).",
        resources: [
          { name: "PortSwigger Web Security Academy (Burp Suite)", type: "Gold Standard Free Lab", url: "https://portswigger.net/web-security" },
          { name: "OWASP Official Guides", type: "Documentation", url: "https://owasp.org/" }
        ]
      },
      {
        phase: 3,
        title: "SOC Operations, Threat Hunting & Incident Response",
        estimatedWeeks: "Weeks 15-20",
        description: "Analyze security alerts, investigate breaches, and automate security playbooks.",
        topics: [
          "SIEM tools (Splunk, Elastic Security) search queries and detection rules",
          "MITRE ATT&CK framework mapping for adversary tactics and techniques",
          "Incident response phases: Preparation, Detection, Containment, Eradication, Recovery"
        ],
        project: "Simulated SOC Incident Investigation & Digital Forensics Walkthrough with timeline analysis.",
        resources: [
          { name: "Splunk Free Training & Sandbox", type: "Labs", url: "https://www.splunk.com/en_us/training.html" },
          { name: "Blue Team Labs Online", type: "Interactive Challenges", url: "https://blueteamlabs.online/" }
        ]
      },
      {
        phase: 4,
        title: "Penetration Testing, Cloud Security & OSCP Prep",
        estimatedWeeks: "Weeks 21-28",
        description: "Practice red teaming, privilege escalation on Windows/Linux, and cloud posture management.",
        topics: [
          "Network scanning with Nmap, vulnerability scanning with Nessus",
          "Linux and Windows privilege escalation vectors",
          "Cloud security posture management (CSPM) and AWS IAM security",
          "Professional penetration test report writing"
        ],
        project: "Full End-to-End Penetration Test on HackTheBox machine with complete executive and technical report.",
        resources: [
          { name: "Hack The Box Academy", type: "Hands-on Practice", url: "https://academy.hackthebox.com/" },
          { name: "The Cyber Mentor Ethical Hacking Course", type: "Course", url: "https://tcm-sec.com/" }
        ]
      }
    ]
  },
  {
    id: "product-manager",
    title: "AI & Tech Product Manager",
    category: "Product & Strategy",
    icon: "Target",
    shortDescription: "Lead cross-functional teams, define product vision, conduct market research, and drive high-impact roadmaps.",
    matchTags: ["product", "strategy", "communication", "leadership", "ux", "analytics", "business"],
    overview: "Product Managers sit at the intersection of business, design, and engineering. You discover customer pain points, write user stories and PRDs, prioritize feature backlogs, set key performance metrics (KPIs/OKRs), and guide products from zero to one.",
    salary: {
      entry: 88000,
      entryFormatted: "$88,000",
      median: 145000,
      medianFormatted: "$145,000",
      senior: 220000,
      seniorFormatted: "$220,000+"
    },
    growthRate: "+24% (Steady High Demand)",
    growthScore: 88,
    aiResilience: {
      score: 94,
      rating: "Very High",
      description: "Leadership, stakeholder negotiation, empathy for user psychology, and executive alignment cannot be replaced by AI."
    },
    workLifeBalance: 4,
    stressLevel: "Moderate to High",
    remoteFeasibility: "90% Remote / Hybrid",
    requiredEducation: "Business, Engineering, Design or proven track record of shipping products",
    topCompanies: ["Google", "Apple", "Notion", "Linear", "Figma", "Spotify", "Amazon"],
    sampleTitles: ["Product Manager", "AI Product Lead", "Senior Growth PM", "Group Product Manager"],
    dayInLife: [
      { time: "09:00 AM", activity: "Review product telemetry: user signups, retention cohorts, and funnel dropoffs in Mixpanel." },
      { time: "10:30 AM", activity: "Sprint planning and backlog grooming with engineering leads and designers." },
      { time: "01:30 PM", activity: "Conduct customer discovery interviews with 3 enterprise clients to test a new feature concept." },
      { time: "03:30 PM", activity: "Write a comprehensive Product Requirements Document (PRD) for an upcoming AI assistant." },
      { time: "05:00 PM", activity: "Present quarterly roadmap prioritization and business case to executive stakeholders." }
    ],
    pros: [
      "High leverage and direct ownership of the product's ultimate success",
      "Diverse day-to-day work spanning psychology, business, and tech",
      "Great stepping stone to becoming a founder or Chief Product Officer (CPO)",
      "High executive visibility and collaborative team leadership"
    ],
    cons: [
      "Responsibility for product failure without direct authority over engineers or designers",
      "Heavy meeting schedule with frequent context switching",
      "Constant need to say 'no' to competing stakeholder requests"
    ],
    skills: [
      { id: "prd-writing", name: "Product Requirements Docs (PRD) & User Stories", category: "Product", importance: "Must-Have", difficulty: "Intermediate", hours: 40, status: "Proficient" },
      { id: "product-analytics", name: "Product Analytics (Mixpanel, Amplitude, SQL)", category: "Analytics", importance: "Must-Have", difficulty: "Intermediate", hours: 45, status: "In Progress" },
      { id: "user-research", name: "Customer Discovery & User Research", category: "UX", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "Proficient" },
      { id: "agile-scrum", name: "Agile, Scrum & Backlog Prioritization (RICE/MoSCoW)", category: "Methodology", importance: "Must-Have", difficulty: "Beginner", hours: 25, status: "Proficient" },
      { id: "tech-fluency", name: "Technical Fluency & System Architecture", category: "Tech", importance: "Must-Have", difficulty: "Intermediate", hours: 40, status: "In Progress" },
      { id: "go-to-market", name: "Go-To-Market (GTM) Strategy & Pricing", category: "Business", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 30, status: "Missing" },
      { id: "ai-product", name: "AI Product Design & Prompt Evaluation", category: "AI", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 30, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Product Thinking, Customer Discovery & Problem Validation",
        estimatedWeeks: "Weeks 1-5",
        description: "Learn how to validate user pain points, conduct non-leading user interviews, and define problem statements.",
        topics: [
          "The Mom Test methodology: uncovering truthful customer feedback",
          "Customer journey mapping and jobs-to-be-done (JTBD) framework",
          "Competitive market analysis and value proposition canvas"
        ],
        project: "Comprehensive User Research Report & Pain Point Discovery for a real-world SaaS problem.",
        resources: [
          { name: "The Mom Test by Rob Fitzpatrick", type: "Book / Essential", url: "https://www.momtestbook.com/" },
          { name: "Lenny's Newsletter & Podcast", type: "Resource", url: "https://www.lennysnewsletter.com/" }
        ]
      },
      {
        phase: 2,
        title: "Product Execution, PRDs & Agile Leadership",
        estimatedWeeks: "Weeks 6-12",
        description: "Write crystal-clear specifications, prioritize ruthlessly, and collaborate smoothly with developers.",
        topics: [
          "Writing world-class PRDs: problem, goals, non-goals, user stories, edge cases",
          "Prioritization frameworks: RICE (Reach, Impact, Confidence, Effort), Kano model",
          "Working effectively with engineers: estimation, technical trade-offs, and tech debt"
        ],
        project: "Complete Production-Ready PRD with wireframes, user stories, and acceptance criteria.",
        resources: [
          { name: "Reforge Product Management Guides", type: "Guides", url: "https://www.reforge.com/" },
          { name: "Atlassian Agile Coach", type: "Free Interactive Guide", url: "https://www.atlassian.com/agile" }
        ]
      },
      {
        phase: 3,
        title: "Product Analytics, Metrics & Experimentation",
        estimatedWeeks: "Weeks 13-18",
        description: "Define North Star metrics, retention curves, conversion funnels, and test hypotheses.",
        topics: [
          "North Star metric definition and metric trees (input vs output metrics)",
          "Retention cohorts, churn analysis, and funnel drop-off diagnostics",
          "Setting up product analytics in Amplitude / Mixpanel and basic SQL queries"
        ],
        project: "Product Telemetry & Metrics Dashboard Specification with funnel optimization strategy.",
        resources: [
          { name: "Amplitude Product Analytics Certification", type: "Free Certification", url: "https://academy.amplitude.com/" },
          { name: "Product School Free Resources", type: "Community", url: "https://productschool.com/" }
        ]
      },
      {
        phase: 4,
        title: "Go-to-Market, Growth & AI Product Strategy",
        estimatedWeeks: "Weeks 19-24",
        description: "Launch features, master pricing, and build AI-native products with prompt engineering and evaluation.",
        topics: [
          "GTM planning: internal enablement, beta programs, release communications",
          "Product-Led Growth (PLG) mechanics: onboarding, viral loops, freemium conversion",
          "Designing AI features: managing latency, fallback states, and human-in-the-loop UX"
        ],
        project: "Zero-to-One Product Launch Strategy & AI Feature Blueprint with complete monetization model.",
        resources: [
          { name: "Inspired: How to Create Tech Products Customers Love (Marty Cagan)", type: "Book", url: "https://svpg.com/books/inspired/" },
          { name: "First Round Review (Management & Product)", type: "Articles", url: "https://review.firstround.com/" }
        ]
      }
    ]
  },
  {
    id: "uiux-designer",
    title: "UI/UX & Product Design Specialist",
    category: "Design & Creative",
    icon: "Palette",
    shortDescription: "Craft intuitive user journeys, high-fidelity Figma prototypes, design systems, and delightful digital experiences.",
    matchTags: ["design", "creativity", "ux", "ui", "figma", "empathy", "prototyping", "visual"],
    overview: "UI/UX Designers define how humans interact with technology. You conduct user testing, build scalable design systems in Figma, create wireframes and high-fidelity interactive prototypes, and collaborate with engineers to ensure pixel-perfect implementation.",
    salary: {
      entry: 78000,
      entryFormatted: "$78,000",
      median: 125000,
      medianFormatted: "$125,000",
      senior: 185000,
      seniorFormatted: "$185,000+"
    },
    growthRate: "+22% (Strong Demand)",
    growthScore: 86,
    aiResilience: {
      score: 88,
      rating: "High",
      description: "Human taste, emotional resonance, empathy for edge cases, and brand identity design remain distinctively human strengths."
    },
    workLifeBalance: 5,
    stressLevel: "Low to Moderate",
    remoteFeasibility: "96% Remote Friendly",
    requiredEducation: "Design, Fine Arts, HCI, or strong Figma/Web Portfolio",
    topCompanies: ["Figma", "Apple", "Airbnb", "Spotify", "Canva", "Stripe", "Linear"],
    sampleTitles: ["Product Designer", "UI/UX Specialist", "Design Systems Engineer", "User Experience Researcher"],
    dayInLife: [
      { time: "09:30 AM", activity: "Review usability testing recordings in Maze to observe where users stumble during checkout." },
      { time: "11:00 AM", activity: "Design system critique: refining dark mode color tokens and accessible contrast ratios." },
      { time: "01:30 PM", activity: "Creating micro-interactions and animated prototypes in Figma for a new mobile onboarding flow." },
      { time: "03:30 PM", activity: "Design handoff meeting with frontend developers to inspect spacing and CSS export." },
      { time: "04:45 PM", activity: "Iterating on user journey wireframes based on feedback from the product manager." }
    ],
    pros: [
      "Direct creative expression with immediate tangible results",
      "High empathy and user-centric problem solving",
      "Great remote work culture and flexible freelance options",
      "Strong demand for designers who understand design systems and frontend code"
    ],
    cons: [
      "Design feedback can sometimes feel subjective and opinion-driven",
      "Must constantly educate stakeholders on UX research value",
      "Maintaining extensive design systems across platforms takes diligence"
    ],
    skills: [
      { id: "figma-prototyping", name: "Figma (Auto Layout, Components, Variables)", category: "Design Tool", importance: "Must-Have", difficulty: "Intermediate", hours: 50, status: "Proficient" },
      { id: "ux-research", name: "UX Research & Usability Testing (Maze, UserTesting)", category: "Research", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "Proficient" },
      { id: "design-systems", name: "Design Systems & Token Architecture", category: "Systems", importance: "Must-Have", difficulty: "Intermediate", hours: 40, status: "In Progress" },
      { id: "wireframing", name: "Information Architecture & Wireframing", category: "UX", importance: "Must-Have", difficulty: "Beginner", hours: 25, status: "Proficient" },
      { id: "html-css-basics", name: "HTML5/CSS3 & Responsive Principles", category: "Code", importance: "Nice-to-Have", difficulty: "Beginner", hours: 30, status: "In Progress" },
      { id: "interaction-design", name: "Micro-interactions & Motion (Framer / Protopie)", category: "Motion", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 35, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "UX Fundamentals & Design Thinking",
        estimatedWeeks: "Weeks 1-5",
        description: "Master user-centered design, cognitive psychology, heuristics, and user research.",
        topics: [
          "Nielsen Norman 10 Usability Heuristics",
          "User interviews, persona creation, and empathy mapping",
          "Information architecture, card sorting, and user flow diagrams"
        ],
        project: "End-to-End User Research & Wireframe Case Study solving a local community service problem.",
        resources: [
          { name: "Nielsen Norman Group Articles & Videos", type: "Gold Standard UX", url: "https://www.nngroup.com/" },
          { name: "Law of UX (Interactive Rules)", type: "Reference", url: "https://lawsofux.com/" }
        ]
      },
      {
        phase: 2,
        title: "Figma Mastery & Visual Interface Design",
        estimatedWeeks: "Weeks 6-12",
        description: "Master modern Figma: Auto-layout, components, variants, variables, typography, and color theory.",
        topics: [
          "Typography hierarchies, 8pt grid systems, color harmonies, WCAG 2.1 accessibility",
          "Figma Auto Layout 5.0, responsive constraints, nested component properties",
          "High-fidelity visual design and interactive prototyping with smart animate"
        ],
        project: "Pixel-Perfect Mobile Banking App with 15+ screens, dark mode variant, and interactive prototype.",
        resources: [
          { name: "Figma Official YouTube & Tutorials", type: "Free Interactive", url: "https://help.figma.com/hc/en-us" },
          { name: "Refactoring UI by Adam Wathan & Steve Schoger", type: "Book", url: "https://www.refactoringui.com/" }
        ]
      },
      {
        phase: 3,
        title: "Scalable Design Systems & Developer Handoff",
        estimatedWeeks: "Weeks 13-18",
        description: "Build robust design systems with design tokens, documentation, and seamless developer collaboration.",
        topics: [
          "Design token architecture (color, spacing, typography, elevation)",
          "Component documentation and governance in Figma",
          "Developer handoff: inspecting styles, exporting assets, and understanding CSS Flexbox/Grid"
        ],
        project: "Enterprise Design System with 30+ reusable accessible components and complete documentation.",
        resources: [
          { name: "Design Systems Repo", type: "Curated Showcase", url: "https://designsystemsrepo.com/" },
          { name: "Figma Variables & Token Masterclass", type: "Guide", url: "https://www.figma.com/best-practices/" }
        ]
      },
      {
        phase: 4,
        title: "Portfolio Building, Motion & Case Study Storytelling",
        estimatedWeeks: "Weeks 19-24",
        description: "Craft 3 bulletproof case studies demonstrating end-to-end impact, and publish your design portfolio.",
        topics: [
          "Structuring case studies: Problem -> Hypothesis -> Discovery -> Iteration -> Metrics",
          "Adding micro-interactions and motion using Framer or Protopie",
          "Preparing for whiteboard challenges and design portfolio interviews"
        ],
        project: "Live Personal Portfolio Website featuring 3 deep-dive case studies with measurable outcomes.",
        resources: [
          { name: "Cofolios (Design Portfolios of Top Tech Interns)", type: "Inspiration", url: "https://cofolios.com/" },
          { name: "Framer Academy", type: "Interactive Builder", url: "https://www.framer.com/academy/" }
        ]
      }
    ]
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer (iOS & Android)",
    category: "Mobile Engineering",
    icon: "Smartphone",
    shortDescription: "Build lightning-fast, beautiful native and cross-platform mobile apps using Flutter, React Native, or Swift.",
    matchTags: ["mobile", "coding", "react-native", "flutter", "swift", "ios", "android"],
    overview: "Mobile Developers create applications used by billions on smartphones and tablets. You engineer smooth 60fps animations, optimize offline data caching, integrate biometric auth and push notifications, and publish to the Apple App Store and Google Play.",
    salary: {
      entry: 80000,
      entryFormatted: "$80,000",
      median: 132000,
      medianFormatted: "$132,000",
      senior: 190000,
      seniorFormatted: "$190,000+"
    },
    growthRate: "+21% (Consistent Demand)",
    growthScore: 85,
    aiResilience: {
      score: 85,
      rating: "High",
      description: "Hardware sensors, complex touch gestures, offline sync architectures, and app store compliance require skilled mobile specialists."
    },
    workLifeBalance: 4,
    stressLevel: "Moderate",
    remoteFeasibility: "93% Remote Friendly",
    requiredEducation: "CS Degree, Bootcamp, or Published Apps on App Store / Play Store",
    topCompanies: ["Uber", "Duolingo", "Instagram", "Snapchat", "DoorDash", "Square", "WhatsApp"],
    sampleTitles: ["Mobile Engineer", "iOS / Swift Specialist", "Cross-Platform React Native Architect", "Flutter Developer"],
    dayInLife: [
      { time: "09:15 AM", activity: "Profile app memory consumption and GPU frame rendering drops using Xcode Instruments." },
      { time: "11:00 AM", activity: "Implement biometrics login (FaceID / Fingerprint) and secure keychain storage." },
      { time: "01:30 PM", activity: "Refactor offline SQLite sync engine to handle intermittent network connectivity." },
      { time: "03:45 PM", activity: "Build animated gesture-driven swipe cards for new social feed." },
      { time: "05:00 PM", activity: "Submit build to TestFlight and Google Play Internal Beta track for QA testing." }
    ],
    pros: [
      "Can publish your own consumer apps directly to global app stores",
      "Immediate satisfaction seeing people use your app on their personal phones",
      "Cross-platform tools (React Native / Flutter) allow high leverage",
      "High compensation in both startups and Fortune 500 mobile teams"
    ],
    cons: [
      "Rigorous Apple and Google app store review approval guidelines",
      "Must test across hundreds of different Android device screen sizes and OS versions",
      "App updates take time to be downloaded by end users (unlike web deploys)"
    ],
    skills: [
      { id: "react-native-flutter", name: "React Native / Expo or Flutter", category: "Framework", importance: "Must-Have", difficulty: "Intermediate", hours: 60, status: "Proficient" },
      { id: "typescript-mobile", name: "TypeScript / Dart", category: "Language", importance: "Must-Have", difficulty: "Intermediate", hours: 45, status: "Proficient" },
      { id: "mobile-storage", name: "Offline Storage (SQLite, WatermelonDB, MMKV)", category: "Storage", importance: "Must-Have", difficulty: "Intermediate", hours: 35, status: "In Progress" },
      { id: "mobile-animations", name: "Gestures & Animations (React Native Reanimated)", category: "UI", importance: "Must-Have", difficulty: "Advanced", hours: 40, status: "Missing" },
      { id: "push-notifications", name: "Push Notifications (FCM, OneSignal) & Deep Links", category: "Services", importance: "Must-Have", difficulty: "Intermediate", hours: 30, status: "In Progress" },
      { id: "app-store-deploy", name: "App Store & Play Store Deployment (Fastlane)", category: "Deployment", importance: "Nice-to-Have", difficulty: "Intermediate", hours: 25, status: "Missing" }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Mobile Architecture & React Native / Flutter Basics",
        estimatedWeeks: "Weeks 1-5",
        description: "Master mobile component lifecycles, navigation patterns, and native style flexbox.",
        topics: [
          "React Native with Expo or Flutter with Dart fundamentals",
          "Mobile navigation: stack, tab, and drawer navigators",
          "Adapting to safe areas, status bars, and keyboard avoidance"
        ],
        project: "Habit Tracker Mobile App with local state and sleek tab navigation.",
        resources: [
          { name: "React Native Official Docs", type: "Docs", url: "https://reactnative.dev/" },
          { name: "Expo Guides & Templates", type: "Interactive Docs", url: "https://docs.expo.dev/" }
        ]
      },
      {
        phase: 2,
        title: "Offline Sync, SQLite & REST/GraphQL Integration",
        estimatedWeeks: "Weeks 6-11",
        description: "Build robust offline-first mobile applications with local relational databases and background sync.",
        topics: [
          "Local storage with SQLite, MMKV, and Zustand/Redux persistence",
          "Optimistic mutations and network status listeners",
          "Secure credential storage using OS Keychain / KeyStore"
        ],
        project: "Offline-First Note & Task Manager with automatic cloud sync when network resumes.",
        resources: [
          { name: "WatermelonDB Documentation", type: "Docs", url: "https://watermelondb.dev/" },
          { name: "TanStack Query for Mobile", type: "Guide", url: "https://tanstack.com/query" }
        ]
      },
      {
        phase: 3,
        title: "Advanced Gestures, 60fps Animations & Device Hardware",
        estimatedWeeks: "Weeks 12-18",
        description: "Create buttery-smooth fluid gestures, camera integration, and geolocation tracking.",
        topics: [
          "React Native Reanimated 3 and Gesture Handler worklets",
          "Camera, audio recording, accelerometer, and GPS location permissions",
          "Push notifications setup with Firebase Cloud Messaging (FCM)"
        ],
        project: "Fitness Tracker Mobile App with live GPS route mapping and fluid swipe animations.",
        resources: [
          { name: "Software Mansion Reanimated Guides", type: "Tutorials", url: "https://docs.swmansion.com/react-native-reanimated/" }
        ]
      },
      {
        phase: 4,
        title: "Automated CI/CD with Fastlane & Store Publishing",
        estimatedWeeks: "Weeks 19-24",
        description: "Automate code signing, certificates, screenshots, and release builds to Apple and Google stores.",
        topics: [
          "Fastlane automation for iOS certificates and Android Keystores",
          "Crashlytics and performance telemetry monitoring",
          "Preparing app screenshots, privacy disclosures, and App Store submission"
        ],
        project: "Published Production Mobile App available on TestFlight and Google Play Internal track.",
        resources: [
          { name: "Fastlane Documentation", type: "Automation Tool", url: "https://fastlane.tools/" }
        ]
      }
    ]
  }
];
