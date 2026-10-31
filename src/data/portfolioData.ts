export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  role: string;
  timeline: string;
  status: "Live Production" | "Preview Deployment" | "Under Maintenance" | "Open Source" | "In Development";
  statusColor: string;
  liveUrl?: string;
  previewUrl?: string;
  githubUrl?: string;
  technologies: string[];
  highlights: string[];
  architecture?: {
    frontend: string;
    backend: string;
    database?: string;
    hosting: string;
  };
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  status: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  verifiedNote: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface JournalArticle {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  isDraft: boolean;
}

export const PERSONAL_INFO = {
  name: "Chetan Palta",
  title: "AI + Full-Stack Developer",
  headline: "I build digital experiences and explore intelligent systems.",
  heroHeadlineLine1: "Building digital products.",
  heroHeadlineLine2: "Exploring intelligent systems.",
  subtitle:
    "I'm Chetan Palta — an AI + Full-Stack developer interested in engineering useful products and exploring intelligent technologies.",
  aboutBio: [
    "I am an early-career software developer based in India with practical commercial development experience and a passion for modern web architecture and artificial intelligence.",
    "Currently pursuing my Bachelor of Computer Applications at Guru Nanak Dev Engineering College, Ludhiana (CGPA: 8.7, graduating June 2026). Concurrently, I serve as a Software Development Intern at Shiva Glass Group, where I engineered the company's complete commercial web presence from the ground up.",
    "My technical trajectory combines rigorous software engineering fundamentals with applied machine learning and intuitive user experience design. I believe in writing clean, modular code, deploying real-world solutions, and continuously learning emerging paradigms.",
  ],
  location: "Ludhiana, Punjab, India",
  email: "itzchetan0007@gmail.com",
  currentRole: "Software Development Intern",
  currentCompany: "Shiva Glass Group",
  educationDegree: "Bachelor of Computer Applications (BCA)",
  college: "Guru Nanak Dev Engineering College, Ludhiana",
  cgpa: "8.7 / 10.0",
  graduationDate: "June 2026",
  resumePath: "/resume/chetan-palta-resume.pdf",
  profileImagePath: "/images/chetan-palta-profile.png",
  socials: {
    github: "https://github.com/chetan-palta",
    leetcode: "https://leetcode.com/u/chetanx0007/",
    linkedin: "https://www.linkedin.com/in/chetan-palta/",
    x: "https://x.com/chetanx0007",
  },
};

export const THREE_PILLARS = [
  {
    number: "01",
    title: "Production Engineering",
    subtitle: "Commercial-grade full-stack systems built for performance and scale.",
    description:
      "Designing responsive frontend interfaces, structuring robust API backends, and configuring production deployments. Focused on type-safety, semantic accessibility, search engine visibility, and reliable infrastructure.",
    tags: ["Next.js", "TypeScript", "Node.js", "SEO & Performance", "CI/CD"],
  },
  {
    number: "02",
    title: "Product Development",
    subtitle: "Transforming practical ideas into refined, user-centric software.",
    description:
      "Crafting intuitive digital experiences that solve concrete problems — from client-facing enterprise websites and digital catalogs to placement tooling and interactive event applications.",
    tags: ["React", "State Management", "Tailwind CSS", "UX Engineering", "Design Systems"],
  },
  {
    number: "03",
    title: "Intelligent Systems",
    subtitle: "Exploring applied machine learning, computer vision, and AI workflows.",
    description:
      "Investigating predictive models, algorithmic problem solving, and modern generative AI integration. Applying data analytics and vision pipelines to build practical intelligent utilities.",
    tags: ["Python", "scikit-learn", "OpenCV", "NLP", "Data Structures"],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "shiva-glass",
    title: "Shiva Glass Group",
    category: "Commercial Production Web Platform",
    tagline: "Complete commercial web architecture engineered from scratch.",
    description:
      "Engineered the official enterprise web platform for Shiva Glass Group, a major architectural glass distributor. Built custom frontend showcases, backend services, administrative tools, SEO optimization, and analytics.",
    longDescription:
      "As a Software Development Intern at Shiva Glass Group, Chetan spearheaded the creation of the enterprise's digital footprint from zero. The objective was to replace fragmented manual inquiries with a modern digital product catalog featuring detailed glass specifications, architectural hardware, clear inquiries routing, and comprehensive search engine optimization.",
    role: "Software Development Intern",
    timeline: "2025 – 2026",
    status: "Live Production",
    statusColor: "#22C55E",
    liveUrl: "https://shivaglassgroup.com/",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "REST APIs", "SEO Architecture", "Google Analytics", "Vercel"],
    highlights: [
      "Designed and implemented clean, responsive UI with structured product catalog for architectural glass & hardware",
      "Engineered backend endpoints handling customer inquiries and quote generation workflows",
      "Implemented comprehensive on-page SEO with JSON-LD schema, canonical routing, and meta optimizations",
      "Integrated Google Analytics 4 for user behavior tracking and conversion instrumentation",
      "Maintained 100% production uptime and zero layout shift performance across mobile and desktop viewports",
    ],
    architecture: {
      frontend: "React / Modern TypeScript component library",
      backend: "Node.js / Express API services",
      database: "Structured JSON / Document store",
      hosting: "Vercel Cloud with automated CI/CD pipeline",
    },
    featured: true,
  },
  {
    slug: "aluminio",
    title: "ALUMINIO",
    category: "Architectural Showcase & Catalog",
    tagline: "Modern digital catalog and design showcase for architectural systems.",
    description:
      "Independently designed and developed the modern web interface for ALUMINIO, translating manufacturer product brochures into an interactive, high-fidelity responsive catalog.",
    longDescription:
      "Chetan independently handled the entire design and development of the ALUMINIO web platform. The business supplied product documentation and architectural brochures, which were translated into an elegant digital catalog. Note: Domain integration with the primary corporate domain remains pending; the site is currently hosted as a live preview deployment.",
    role: "Independent Website Designer & Developer",
    timeline: "2025",
    status: "Preview Deployment",
    statusColor: "#38BDF8",
    previewUrl: "https://aluminio-website.pages.dev/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive UI", "Cloudflare Pages"],
    highlights: [
      "Translated raw technical brochures into structured responsive digital product showcases",
      "Created sleek aesthetic fitting premium architectural aluminum profiles",
      "Optimized assets and layout for lightning-fast mobile loading on cellular connections",
      "Deployed to Cloudflare Pages edge network as a staged preview environment",
    ],
    architecture: {
      frontend: "React + TypeScript single-page architecture",
      backend: "Static Edge Distribution",
      hosting: "Cloudflare Pages (Preview Deployment)",
    },
    featured: true,
  },
  {
    slug: "resuone",
    title: "Resuone",
    category: "Campus Placement Platform (Major Academic Project)",
    tagline: "ATS-compliant resume standardization and validation system.",
    description:
      "A web-based standardized resume generation and parsing engine built for college placement drives, enforcing ATS-compliant formatting to eliminate evaluation inconsistencies.",
    longDescription:
      "Resuone was developed as a college major project to tackle campus placement challenges. Different resume formats frequently cause automated parsing failures in company Applicant Tracking Systems (ATS). Resuone enforces a single, standardized, high-scoring template with automated NLP checks. Note: The external backend cloud service has reached hosting limits and is currently undergoing restoration.",
    role: "Lead Full-Stack Developer",
    timeline: "March 2026",
    status: "Under Maintenance",
    statusColor: "#F59E0B",
    liveUrl: "https://resuone.vercel.app/",
    githubUrl: "https://github.com/chetan-palta",
    technologies: ["React", "Node.js", "PostgreSQL", "NLP", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Standardized multi-section student resume layout aligned with industry ATS rules",
      "Backend REST API designed with PostgreSQL relational schema for student profiles",
      "NLP-assisted validation checking for key academic and skill indicators",
      "Active restoration plan: migrating backend to scalable containerized instance",
    ],
    architecture: {
      frontend: "React SPA on Vercel",
      backend: "Node.js REST service (undergoing infrastructure upgrade)",
      database: "PostgreSQL",
      hosting: "Vercel / Cloud Container",
    },
    featured: true,
  },
  {
    slug: "research-copilot",
    title: "Research Copilot",
    category: "AI & Developer Tooling",
    tagline: "Intelligent literature exploration and synthesis assistant.",
    description:
      "An AI-powered research assistant engineered to help developers and researchers query, summarize, and extract actionable insights from technical documentation and research papers.",
    longDescription:
      "Engineered to accelerate technical discovery, Research Copilot leverages modern language models and prompt pipelines to ingest technical documents, generate concise summaries, and answer contextual queries with grounded citations.",
    role: "Developer & Architect",
    timeline: "2025 – 2026",
    status: "Open Source",
    statusColor: "#818CF8",
    githubUrl: "https://github.com/chetan-palta/research-copilot",
    technologies: ["Python", "FastAPI", "LLM APIs", "Vector Embeddings", "Prompt Engineering"],
    highlights: [
      "Built document processing pipeline parsing complex academic PDFs and technical markdown",
      "Structured contextual retrieval ensuring model responses remain strictly factual",
      "Designed clean API interface allowing seamless integration with client applications",
    ],
    architecture: {
      frontend: "FastAPI interactive docs / Web client",
      backend: "Python Async API",
      hosting: "Local / Cloud API",
    },
    featured: true,
  },
  {
    slug: "student-performance-predictor",
    title: "Student Performance Predictor",
    category: "Machine Learning & Predictive Modeling",
    tagline: "Supervised regression model predicting student academic outcomes.",
    description:
      "A machine learning pipeline that analyzes study habits, attendance, and historical scores to forecast student marks, featuring correlation analysis and interactive visualization.",
    longDescription:
      "Built with Python and scikit-learn, this project models the statistical relationship between study habits, sleep hours, practice test performance, and final marks. The project includes data cleaning, feature correlation heatmaps, regression training, error metric validation (MSE, R2 score), and an interactive Streamlit dashboard.",
    role: "Machine Learning Developer",
    timeline: "October 2025",
    status: "Open Source",
    statusColor: "#34D399",
    githubUrl: "https://github.com/chetan-palta/student-performance-predictor",
    technologies: ["Python", "pandas", "scikit-learn", "matplotlib", "seaborn", "Streamlit"],
    highlights: [
      "Implemented full ML pipeline: EDA, missing value handling, feature scaling, and train-test splits",
      "Trained and evaluated regression models with statistical performance metrics",
      "Interactive Streamlit interface enabling users to input custom parameters and receive instant predictions",
    ],
    featured: true,
  },
  {
    slug: "qrhythm",
    title: "QRhythm",
    category: "Real-Time Event Interaction",
    tagline: "Audience crowd-sourced DJ voting and song request platform.",
    description:
      "A real-time web application where attendees scan a dynamic QR code to request and upvote songs in a live event queue, removing friction at DJ booths.",
    longDescription:
      "QRhythm eliminates chaotic song requests at campus events and parties. By scanning a venue QR code, attendees enter a room-specific queue where they can search for tracks and vote. The DJ interface displays a live sorted leaderboard. Currently staged in active development.",
    role: "Full-Stack Developer",
    timeline: "December 2025",
    status: "In Development",
    statusColor: "#C084FC",
    githubUrl: "https://github.com/chetan-palta/QRhythm",
    technologies: ["React", "Node.js", "MongoDB", "Real-Time Sockets", "QR Code Generation API"],
    highlights: [
      "QR-code based room routing requiring zero client application installation",
      "Live voting queue with real-time leaderboard sorting",
      "Staged in active repository development with upcoming test deployment",
    ],
    featured: false,
  },
  {
    slug: "face-recognition",
    title: "Face Recognition System",
    category: "Computer Vision & Biometrics",
    tagline: "Real-time webcam biometric detection and batch image matching.",
    description:
      "Computer vision application capable of detecting, identifying, and verifying human faces in live webcam streams and static photo archives.",
    longDescription:
      "Built with OpenCV and deep learning face encodings, this system extracts facial landmarks, computes 128-dimensional facial embeddings, and compares vectors for rapid matching against known identity databases in real time.",
    role: "Computer Vision Developer",
    timeline: "August 2025",
    status: "Open Source",
    statusColor: "#F472B6",
    githubUrl: "https://github.com/chetan-palta/Face-Recognition",
    technologies: ["Python", "OpenCV", "face_recognition", "NumPy", "Deep Metric Encodings"],
    highlights: [
      "Live webcam detection pipeline with bounded bounding boxes and identity tagging",
      "Batch dataset ingestion script generating vector matrices for known individuals",
      "Benchmarked recognition confidence and false acceptance thresholds",
    ],
    featured: false,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Shiva Glass Group",
    role: "Software Development Intern",
    location: "Ludhiana, India",
    period: "2025 – Present",
    type: "Commercial Internship",
    status: "Current Role",
    summary:
      "Spearheaded the complete ground-up design, development, and production rollout of the company's enterprise web application and digital product showcase.",
    responsibilities: [
      "Single-handedly architected and coded the entire company website (https://shivaglassgroup.com/) from zero to live production.",
      "Developed modular React and TypeScript components for dynamic glass product catalogs, hardware accessories, and customer inquiry forms.",
      "Built backend service endpoints using Node.js to streamline incoming client quotes and inquiry routing.",
      "Engineered comprehensive SEO architecture, including structured schema.org markup, semantic metadata, OpenGraph tags, and sitemap generation.",
      "Integrated Google Analytics 4 to track organic traffic, device demographics, and user engagement pathways.",
      "Configured production deployment pipelines with automated previews and performance monitoring.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "SEO", "Google Analytics 4", "Vercel"],
    verifiedNote: "Authentic commercial development experience; all implementations live in production.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Guru Nanak Dev Engineering College (GNDEC)",
    location: "Ludhiana, Punjab, India",
    period: "August 2023 – June 2026",
    grade: "CGPA: 8.7 / 10.0",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++), Operating Systems, DBMS, Software Engineering, Web Technologies.",
      "Technical Head at Computonics Club, GNDEC — organized technical workshops and coding sessions.",
      "Student Co-ordinator at Training & Placement Cell, GNDEC — assisted placement drives and student resume standardization initiatives.",
      "Secured podium positions in 5+ institute-level tech quiz competitions.",
    ],
  },
  {
    degree: "Senior Secondary (12th Grade)",
    institution: "BCM Senior Secondary School",
    location: "Ludhiana, Punjab, India",
    period: "2022 – 2023",
    grade: "Percentage: 92.2%",
    highlights: [
      "Rigorous academic focus with strong foundation in mathematics and computational sciences.",
    ],
  },
  {
    degree: "Secondary School (10th Grade)",
    institution: "BCM Senior Secondary School",
    location: "Ludhiana, Punjab, India",
    period: "2020 – 2021",
    grade: "Percentage: 97.38%",
    highlights: [
      "Top-tier academic excellence across all STEM and foundational subjects.",
    ],
  },
];

export const TECH_STACK = [
  {
    category: "Programming Languages",
    description: "Core languages for systems, algorithms, and application logic.",
    skills: [
      { name: "Python", level: "Proficient", icon: "Code2" },
      { name: "C++", level: "Data Structures & Algorithms", icon: "Cpu" },
      { name: "JavaScript", level: "Modern ES6+", icon: "FileCode" },
      { name: "TypeScript", level: "Strict Type Safety", icon: "FileCheck" },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Modern UI engineering, responsive systems, and component architecture.",
    skills: [
      { name: "React", level: "Hooks, Context, State", icon: "Atom" },
      { name: "Next.js", level: "App Router, SSR, SSG", icon: "Layers" },
      { name: "Tailwind CSS", level: "Design Systems & Utility CSS", icon: "Palette" },
      { name: "HTML5 / CSS3", level: "Semantic Markup & Animations", icon: "Layout" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Server architecture, API design, and asynchronous services.",
    skills: [
      { name: "Node.js", level: "REST Services & Tooling", icon: "Server" },
      { name: "Express", level: "Middleware & Routing", icon: "Network" },
      { name: "REST APIs", level: "Endpoint Design & Testing", icon: "Send" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and cloud-native databases.",
    skills: [
      { name: "PostgreSQL", level: "Relational Schemas & Queries", icon: "Database" },
      { name: "MongoDB", level: "Document Storage & Mongoose", icon: "Boxes" },
      { name: "Supabase", level: "Auth & PostgreSQL Engine", icon: "Flame" },
      { name: "Firebase", level: "Real-time DB & Cloud Functions", icon: "Zap" },
    ],
  },
  {
    category: "AI, ML & Computer Vision",
    description: "Data analysis, machine learning pipelines, and vision algorithms.",
    skills: [
      { name: "scikit-learn", level: "Classification & Regression", icon: "Brain" },
      { name: "pandas & NumPy", level: "Data Wrangling & Tensors", icon: "Table" },
      { name: "OpenCV", level: "Image Processing & Video Feeds", icon: "Eye" },
      { name: "Jupyter Notebook", level: "Exploratory Data Analysis", icon: "BookOpen" },
    ],
  },
  {
    category: "Developer Tools & Cloud",
    description: "Version control, hosting, CI/CD, and productivity tools.",
    skills: [
      { name: "Git & GitHub", level: "Version Control & Branching", icon: "GitBranch" },
      { name: "Vercel", level: "Edge Hosting & Previews", icon: "Globe" },
      { name: "Railway", level: "Backend & DB Deployment", icon: "Cloud" },
      { name: "VS Code & Copilot", level: "Development Environment", icon: "Terminal" },
    ],
  },
];

export const CURRENT_FOCUS = [
  {
    topic: "AI-Powered Full-Stack Architectures",
    description:
      "Experimenting with integrating Large Language Model APIs, vector retrieval, and background agents into practical production web workflows.",
    status: "Active Exploration",
  },
  {
    topic: "Advanced Data Structures & Algorithms",
    description:
      "Consistent problem-solving on LeetCode covering dynamic programming, graph traversal, and trees to deepen computational problem-solving.",
    status: "Ongoing Practice",
    link: "https://leetcode.com/u/chetanx0007/",
    linkText: "View LeetCode Profile",
  },
  {
    topic: "Distributed Systems & Scalable Backends",
    description:
      "Studying relational database indexing, message queues, containerization with Docker, and cloud-native microservices architecture.",
    status: "Architecture Studies",
  },
  {
    topic: "Postgraduate Engineering Preparation",
    description:
      "Preparing for Master of Computer Applications (MCA) admissions and high-impact software engineering roles.",
    status: "Academic Roadmap",
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "building-commercial-website-from-scratch",
    title: "Architecting a Commercial Enterprise Website from Scratch",
    date: "October 2025",
    readTime: "6 min read",
    summary:
      "Reflections on single-handedly designing, coding, and deploying the complete web platform for Shiva Glass Group, from component modularity to client approvals.",
    tags: ["Engineering", "React", "Production", "Case Study"],
    isDraft: false,
  },
  {
    slug: "implementing-seo-for-business-website",
    title: "Engineering Search Engine Optimization for Business Applications",
    date: "November 2025",
    readTime: "5 min read",
    summary:
      "Beyond meta tags: Implementing Schema.org JSON-LD structured data, dynamic OpenGraph generation, semantic HTML, and core web vitals optimization.",
    tags: ["SEO", "Performance", "Web Architecture"],
    isDraft: false,
  },
  {
    slug: "reviving-college-major-project-resuone",
    title: "Architecture & Post-Mortem: Reviving College Major Project Resuone",
    date: "December 2025",
    readTime: "7 min read",
    summary:
      "Lessons learned when free cloud tiers exhaust resource limits, and the architectural blueprint for migrating our ATS resume platform to scalable containerized infrastructure.",
    tags: ["PostgreSQL", "Full-Stack", "Architecture", "DevOps"],
    isDraft: false,
  },
  {
    slug: "practical-ml-student-performance",
    title: "From Raw Data to Prediction: Engineering a Clean ML Pipeline",
    date: "January 2026",
    readTime: "5 min read",
    summary:
      "Step-by-step methodology behind the Student Performance Predictor: feature scaling, dealing with multicollinearity, evaluating MSE, and creating interactive dashboards.",
    tags: ["Machine Learning", "Python", "scikit-learn"],
    isDraft: false,
  },
];

