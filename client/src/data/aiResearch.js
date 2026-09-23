export const researchConcept = {
  title:
    "A Multi-Agent Generative AI Framework for Personalized Placement Readiness Assessment and Career Recommendation",
  subtitle:
    "Autonomous agent orchestration, RAG-grounded evaluation, and explainable career trajectory synthesis",
  overview:
    "Transitioning from university to competitive technical roles requires candidates to understand nuanced industry demands. This framework orchestrates specialized autonomous agents that dissect candidate profile artifacts, compute objective delta metrics against real-time market requirements, and generate deterministic, milestone-driven learning roadmaps.",
  domains: [
    {
      name: "Generative AI & LLMs",
      description: "Structured prompt workflows, few-shot reasoning, and grounded generative output synthesis.",
    },
    {
      name: "Multi-Agent Systems",
      description: "Decentralized task delegation, agent state graphs, and cooperative inter-agent communication.",
    },
    {
      name: "Retrieval-Augmented Gen (RAG)",
      description: "Embedding-driven context retrieval over dynamic technical question banks and syllabus documents.",
    },
    {
      name: "Explainable AI (XAI)",
      description: "SHAP and Grad-CAM interpretability methods transforming black-box neural decisions into visual evidence.",
    },
  ],
  agents: [
    {
      id: "resume-agent",
      name: "Resume Agent",
      role: "Semantic Artifact Parsing",
      color: "from-cyan-500 to-blue-500",
      description:
        "Parses candidate resumes into structured knowledge graphs, identifying core stack competencies, project complexity, and engineering impact metrics.",
      output: "Structured Candidate Vector & Skill Ledger",
    },
    {
      id: "skill-gap-agent",
      name: "Skill Gap Agent",
      role: "Delta & Prerequisite Analysis",
      color: "from-blue-500 to-indigo-500",
      description:
        "Cross-references applicant capability vectors against curated job specifications, isolating prerequisites, missing technologies, and domain deficits.",
      output: "Prioritized Skill Delta Matrix",
    },
    {
      id: "interview-agent",
      name: "Interview Agent",
      role: "Adaptive Evaluation Engine",
      color: "from-purple-500 to-pink-500",
      description:
        "Synthesizes role-tailored technical, behavioral, and system design mock scenarios, grading answers with contextual feedback and rubric benchmarks.",
      output: "Mock Performance Diagnostics",
    },
    {
      id: "career-agent",
      name: "Career Agent",
      role: "Strategic Trajectory Planner",
      color: "from-emerald-500 to-teal-500",
      description:
        "Synthesizes candidate affinity, market hiring trends, and diagnostic telemetry to map customized, milestone-driven career roadmaps.",
      output: "Target Role Recommendations & Milestones",
    },
  ],
  architectureSteps: [
    {
      step: 1,
      title: "User Profile & Artifact Intake",
      desc: "User submits resume, target job roles, preferred tech stacks, and learning timeline preferences.",
    },
    {
      step: 2,
      title: "AI Career Assistant (Orchestration Engine)",
      desc: "Central coordinator validates inputs, initializes context state, and dispatches parallel tasks to the agent ensemble.",
    },
    {
      step: 3,
      title: "Specialized Multi-Agent Execution",
      desc: "Resume, Skill Gap, Interview, and Career agents concurrently process data via RAG search and domain-specific LLM prompts.",
    },
    {
      step: 4,
      title: "Personalized Recommendations Engine",
      desc: "Aggregates multi-agent telemetry into an actionable scorecard, pinpointing exact areas for immediate improvement.",
    },
    {
      step: 5,
      title: "Adaptive Learning Roadmap & Readiness Score",
      desc: "Generates week-by-week learning syllabus, curated resources, and an objective placement readiness percentage.",
    },
  ],
};
