export const profile = {
  name: "Darshan Naik",
  title: "Senior Software Engineer",
  tagline: "Full-Stack Engineer building scalable web platforms, AI-driven tools, and microservices.",
  email: "darshannaik376@gmail.com",
  phone: "+91 9822331094",
  linkedin: "https://linkedin.com/in/darshan-naik",
  github: "https://github.com/darshan3050",
  location: "Mumbai, India",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript (ES6)", "HTML", "CSS", "Tailwind CSS", "Redux", "Shadcn UI", "MUI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "GoLang", "Python", "REST APIs", "Microservices", "Socket.IO"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Sequelize", "Mongoose"],
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS", "Docker", "CI/CD Pipeline", "GitHub Workflows", "Cloud Storage", "Pub/Sub", "Cloud Tasks"],
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "SHAP (Explainable AI)", "Machine Learning", "Binary Classification"],
  },
  {
    category: "Tools",
    items: ["Git", "Postman", "JIRA", "Figma", "PowerBI", "Chai", "Mocha", "OWASP ZAP", "Trivy", "Grype"],
  },
];

export const experiences = [
  {
    company: "Swabhav Venturelabs Solution Pvt Ltd.",
    title: "Senior Software Engineer",
    period: "Aug 2022 – Present",
    location: "Mumbai, India",
    projects: [
      {
        name: "AiPredict",
        stack: ["Next.js", "Node.js", "Python", "TensorFlow", "SHAP", "GCP", "Microservices"],
        description: "AI-powered sales intelligence platform predicting account-to-opportunity conversion probability.",
        points: [
          "Designed ML models (binary classification & multi-class) to predict conversion probability and opportunity stage depth.",
          "Implemented SHAP (Explainable AI) for visual explanations of prediction factors for sales teams.",
          "Leveraged GCP services: Cloud Storage, Pub/Sub, Cloud Tasks, Eventarc, and Cloud Load Balancer.",
        ],
      },
      {
        name: "ETL Tool",
        stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Sequelize", "Microservices"],
        description: "Scalable file-based ETL service processing 15+ data sources with deduplication.",
        points: [
          "Built ETL import service supporting Salesforce CRM, Outreach, 6Sense, Madison Logic with concurrent batch processing.",
          "Engineered a Unified Account deduplication system using domain parsing, fuzzy matching, and hash-key generation.",
          "Implemented data sanitization pipelines with company name cleaning, domain validation, and priority-based matching.",
        ],
      },
      {
        name: "Campaign Execution Platform",
        stack: ["Node.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Twilio", "Socket.IO", "Docker"],
        description: "Microservices-based campaign execution platform that reduced execution time by 40%.",
        points: [
          "Architected 8+ microservices reducing campaign execution time by 40%.",
          "Integrated real-time chat (Socket.IO) and voice calling (Twilio) with WebSocket-powered notifications.",
          "Led a team of 3 developers through the full SDLC, ensuring code quality and timely delivery.",
        ],
      },
      {
        name: "Market Sizing",
        stack: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "MUI", "PowerBI", "PostgreSQL"],
        description: "Dashboard sharing platform with Power BI integration for data visualization.",
        points: [
          "Developed robust APIs in Node.js using Sequelize ORM for dashboard sharing across multiple clients.",
          "Integrated Power BI dashboards into React.js with dynamic interaction and filter persistence.",
          "Implemented secure dashboard sharing enabling teams to share insights and data visualizations.",
        ],
      },
      {
        name: "Proctoring Tool",
        stack: ["GoLang", "Python", "Angular", "MySQL", "Machine Learning", "Microservices"],
        description: "ML-powered online exam proctoring system with real-time candidate monitoring.",
        points: [
          "Designed APIs in Python and GoLang for interview/exam delivery with ML-based candidate monitoring.",
          "Built event-capturing system to detect cheating via eye tracking, person detection, and tab-switch monitoring.",
          "Integrated proctoring tool with TSM portal to assign tests and display results.",
        ],
      },
      {
        name: "TSM (Talent & Skills Management)",
        stack: ["GoLang", "Angular", "MySQL"],
        description: "End-to-end hiring management system for tracking candidate journeys.",
        points: [
          "Developed a hiring management system to track candidates from sourcing to placement.",
          "Built sourcing module for HR and training module for Faculty.",
          "Implemented tracking and rating system for students and faculty.",
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: "Master of Engineering (Computer Science)",
    institution: "University of Mumbai",
    period: "July 2024 – Ongoing",
    score: "SGPA: 9.1",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Engineering (Computer Science)",
    institution: "University of Mumbai",
    period: "June 2018 – May 2022",
    score: "CGPA: 7.85",
    icon: "🎓",
  },
];
