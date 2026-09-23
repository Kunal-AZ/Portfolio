const projects = [
  {
    id: "price-drop-watcher",
    title: "Price Drop Watcher (BargainIt)",
    tagline: "Production full-stack e-commerce price surveillance & automated drop alerts",
    status: "Completed",
    featured: true,
    category: "Full-Stack (MERN)",
    shortDescription:
      "A deployed full-stack price tracking application that monitors product prices across e-commerce platforms and dispatches automated email alerts when prices drop.",
    problemStatement:
      "Online shoppers routinely miss time-sensitive discounts and historical price lows due to volatile e-commerce pricing and tedious manual price checking.",
    solution:
      "Developed a robust full-stack solution featuring automated price checking via background workers, price history snapshots, custom threshold alerts, and instant email dispatching.",
    architecture:
      "MERN Architecture: React.js frontend communicating with Node.js/Express REST APIs, MongoDB managing user watchlists and historical price logs, and automated background workers for price updates.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RESTful APIs",
      "Email Automation",
      "Tailwind CSS",
      "Git & GitHub"
    ],
    features: [
      "Real-time product price tracking with user threshold alerts",
      "Automated email notifications to alert users on price drops",
      "Secure JWT-based user authentication & authorization",
      "RESTful APIs for product management and watchlist sync",
      "MongoDB document modeling for product and user information",
      "Deployed live on Vercel with responsive cross-device UI"
    ],
    challenges: [
      "Structuring resilient API endpoints for product watchlist ingestion",
      "Optimizing MongoDB schema for rapid price snapshot lookups",
      "Automating background email notifications without delivery bottlenecks"
    ],
    futureImprovements: [
      "Browser extension for 1-click price tracking directly from shopping sites",
      "Interactive multi-month price trend analytics graphs",
      "Predictive price forecast models using machine learning"
    ],
    githubUrl: "https://github.com/Kunal-AZ/price-drop-watcher.git",
    liveUrl: "https://price-drop-watcher.vercel.app/",
    badge: "Deployed on Vercel",
    stats: {
      type: "Full-Stack MERN",
      deployment: "Live on Vercel",
      automation: "Email Alerts",
    }
  },
  {
    id: "ai-human-detector-video-call",
    title: "AI Generated Human Detector on Video Call",
    tagline: "Computer vision application detecting AI-generated faces during live video calls",
    status: "Completed",
    featured: true,
    category: "Computer Vision & ML",
    shortDescription:
      "An AI-powered computer vision application engineered to detect AI-generated synthetic faces during live video calls by analyzing facial dynamics, blinking patterns, and visual inconsistencies.",
    problemStatement:
      "The rapid rise of synthetic deepfakes and AI avatars creates critical identity impersonation risks in remote video calls and interviews.",
    solution:
      "Engineered an application applying OpenCV computer vision techniques to examine real-time facial micro-movements, eye blink frequencies, and synthetic visual artifacts, feeding trained ML classifiers for live authenticity verification.",
    architecture:
      "Real-Time Video Stream -> Frame Extraction -> Facial Landmark & Motion Vector Analysis -> Blink & Inconsistency Feature Extraction -> Machine Learning Classifier -> Authenticity Scoring UI.",
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Machine Learning",
      "Facial Analysis",
      "Video Processing"
    ],
    features: [
      "Real-time video feed ingestion and face detection",
      "Analysis of natural facial movements and blinking patterns",
      "Visual inconsistency and artifact detection on synthetic edges",
      "Machine learning classification model for authenticity scoring",
      "Real-time user interface designed for live call authentication"
    ],
    challenges: [
      "Processing live video frames with minimal latency",
      "Distinguishing natural camera motion from synthetic artifacts",
      "Balancing detection speed and accuracy on consumer hardware"
    ],
    futureImprovements: [
      "Browser extension integration for Google Meet and Zoom",
      "Multi-modal audio-visual synchronization analysis (lip sync verification)",
      "Lightweight model optimization for mobile environments"
    ],
    githubUrl: "https://github.com/Kunal-AZ",
    liveUrl: "",
    badge: "Computer Vision",
    stats: {
      type: "Computer Vision & ML",
      capability: "Live Video Analysis",
      target: "Synthetic Face Detection",
    }
  },
  {
    id: "farmer-loan-subsidy-management",
    title: "Cloud-Based Farmer Loan & Subsidy Management System",
    tagline: "Digital agricultural financing platform automating loan applications & subsidy disbursals",
    status: "🚧 In Progress",
    featured: true,
    category: "Full-Stack (MERN)",
    shortDescription:
      "A cloud-based agricultural finance and subsidy management platform engineered to streamline government subsidy disbursements, digitize farmer loan applications, and accelerate institutional verification.",
    problemStatement:
      "Farmers frequently encounter bureaucratic delays, fragmented paperwork, and opaque approval processes when applying for agricultural loans and government subsidies.",
    solution:
      "Developing a unified cloud platform with role-based portals for farmers, financial officers, and administrative auditors, automating document ingestion, eligibility validation, and transparent real-time status tracking.",
    architecture:
      "React.js Cloud Frontend -> Express/Node.js REST Services -> MongoDB Cloud Database -> Role-Based Access Control (RBAC) -> Automated Eligibility Engine -> Audit & Disbursement Pipeline.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloud Architecture",
      "RESTful APIs",
      "JWT & RBAC",
      "Tailwind CSS"
    ],
    features: [
      "Dedicated portals for Farmers, Bank Verification Officers, and Government Scheme Administrators",
      "Digitized loan and subsidy application submission with document upload",
      "Automated eligibility calculation based on land holding and crop category criteria",
      "End-to-end transparent status tracking from application to fund disbursement",
      "Secure JWT authentication with role-based access control (RBAC)",
      "Audit logs and reporting dashboard for financial compliance"
    ],
    challenges: [
      "Designing an intuitive, accessible user interface suitable for rural users and diverse digital literacy levels",
      "Ensuring strict security and data privacy for sensitive land and identity records",
      "Managing complex multi-stage approval workflows between banking officers and auditors"
    ],
    futureImprovements: [
      "Multilingual regional language support (Hindi, Marathi, etc.)",
      "SMS-based status alerts and application inquiry bot",
      "Satellite crop-yield data integration for automated risk assessment"
    ],
    githubUrl: "https://github.com/Kunal-AZ",
    liveUrl: "",
    badge: "🚧 In Progress",
    stats: {
      type: "Cloud Management System",
      architecture: "MERN Stack + Cloud",
      workflow: "Multi-Role RBAC",
    }
  },
  {
    id: "ai-career-placement-assistant",
    title: "AI Career & Placement Assistant",
    tagline: "Exploring career guidance workflows using LLMs & multi-agent concepts",
    status: "🚧 In Progress",
    featured: true,
    category: "Exploring AI & ML",
    shortDescription:
      "A student learning project exploring how Large Language Models and specialized agent roles can provide personalized career guidance, resume analysis, and interview practice.",
    problemStatement:
      "College students often struggle to evaluate their readiness for specific industry roles and identify exact technical skill gaps.",
    solution:
      "Designing an experimental multi-agent workflow where specialized prompts evaluate resumes, highlight missing prerequisites against job descriptions, and generate mock interview questions.",
    architecture:
      "User Input -> Central Coordinator -> Specialized Prompts (Resume Parsing, Skill Gap Detection, Mock Interview Questions) -> Actionable Learning Summary.",
    technologies: [
      "MERN Stack",
      "Python",
      "LLM Prompts",
      "NLP Basics",
      "Express.js",
      "React.js"
    ],
    plannedAgents: [
      {
        name: "Resume Analysis Role",
        role: "Extracts technical competencies and project details from uploaded resumes."
      },
      {
        name: "Skill Gap Role",
        role: "Compares applicant profiles against target job requirements to highlight missing prerequisites."
      },
      {
        name: "Interview Prep Role",
        role: "Generates role-tailored technical questions for practice."
      },
      {
        name: "Roadmap Role",
        role: "Suggests learning topics and roadmaps for skill improvement."
      }
    ],
    features: [
      "Resume parsing and skill extraction experiments",
      "Target job-role matching and skill gap identification",
      "Mock interview question generation",
      "Milestone-based learning roadmap recommendations",
      "Active learning prototype in progress"
    ],
    challenges: [
      "Understanding prompt engineering techniques and context handling",
      "Integrating Python ML/LLM services with Node.js/Express backend",
      "Evaluating output consistency and preventing irrelevant responses"
    ],
    futureImprovements: [
      "Integration with student coding test platforms",
      "Interactive mock interview chat interface"
    ],
    githubUrl: "https://github.com/Kunal-AZ",
    liveUrl: "",
    badge: "🚧 Learning Project",
    stats: {
      type: "AI Learning Project",
      focus: "Career Guidance",
      status: "In Progress",
    }
  },
  {
    id: "cancer-detection-cnn-xai",
    title: "Cancer Detection using CNN + Explainable AI",
    tagline: "Exploratory student research on CNN classification with Grad-CAM and SHAP interpretability",
    status: "Academic Research",
    featured: true,
    category: "Academic Research",
    shortDescription:
      "An exploratory student machine learning project studying CNN-based image classification alongside Explainable AI techniques to understand model decisions.",
    problemStatement:
      "Deep learning neural networks act as 'black boxes', making it difficult for students and practitioners to understand which image features drive classifications.",
    solution:
      "Implemented a Convolutional Neural Network (CNN) pipeline on public benchmark datasets, applying Grad-CAM heatmaps and SHAP feature attributions to visually inspect network activations.",
    architecture:
      "Public Dataset -> Preprocessing -> CNN Classification Pipeline -> Grad-CAM Heatmap & SHAP Attribution Generation -> Visual Inspection.",
    technologies: [
      "Python",
      "CNN",
      "Machine Learning",
      "SHAP",
      "Grad-CAM",
      "OpenCV"
    ],
    features: [
      "CNN image classification pipeline implementation",
      "Grad-CAM gradient-weighted class activation mapping",
      "SHAP feature attribution visualization",
      "Exploratory analysis focused on understanding machine learning interpretability"
    ],
    challenges: [
      "Understanding gradient backpropagation for activation maps",
      "Managing computational requirements of SHAP sampling"
    ],
    futureImprovements: [
      "Comparative analysis across different CNN architectures",
      "Interactive notebook visualization"
    ],
    githubUrl: "https://github.com/Kunal-AZ",
    liveUrl: "",
    badge: "Student Research",
    stats: {
      type: "Academic Exploration",
      methods: "Grad-CAM + SHAP",
      nature: "Student Learning Project",
    }
  }
];

module.exports = projects;