export const personal = {
  firstName: "Ojaswi",
  lastName: "Bhardwaj",
  title: "Full-Stack Developer",
  location: "Agra, Uttar Pradesh, India",
  email: "bhardwajojaswi445@gmail.com",
  phone: "(+91) 8979859781",
  linkedin: "https://www.linkedin.com/in/ojaswi-bhardwaj/",
  github: "https://github.com/ojaswi-bhar45",
  summary:
    "Full-stack developer  building scalable web applications using modern JavaScript frameworks and cloud-native technologies. Passionate about developer tooling, open source, and crafting intuitive user interfaces.",
};

export const stats = [
  { target: 40, suffix: "%", label: "Checkout error reduction" },
  { target: 60, suffix: "%", label: "Faster Deployment" },
  { target: 30, suffix: "+", label: "API endpoints secured" },
  { target: 100, suffix: "+", label: "LeetCode problems" },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "JWT",
      "RBAC",
      "OOP",
    ],
  },
  {
    label: "Database & Cloud",
    skills: ["MongoDB", "MySQL", "AWS EC2/S3", "Firebase", "Cloudinary"],
  },
  {
    label: "Languages",
    skills: ["JavaScript", "Java", "Python"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "GitHub Actions CI/CD", "Nginx", "Render", "Postman"],
  },

  {
    label: "Practices",
    skills: ["System Design", "Scalability", "DSA", "Code Review"],
  },
];

export const experience = [
  {
    company: "FutureDesk Services",
    role: "Full Stack developer Intern",
    duration: "March 2026 to May 2026",
    location: "Agra, Uttar Pradesh",
    bullets: [
      "Implemented Razorpay payment gateway end-to-end on the Rentalwise platform; reduced checkout transaction errors by 40% in production, enabling seamless digital payments for 200+ monthly users.",
      "Architected a 3-tier RBAC system (Farmer/User/Admin) with Node.js + Firebase Auth; enforced role-based middleware across 30+ REST API endpoints, eliminating unauthorized access incidents.",
      "Engineered scalable Express.js backend modules across 2 platforms; authored Swagger/OpenAPI docs and collaborated with a 4-person team in 2-week Agile sprints.",
    ],
  },
];

export const projects = [
  {
    name: "Sync-Board",
    subtitle: "Real-time collaborative workspace",
    accent: "var(--cyan)",
    stack: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Docker",
      "GitHub Actions",
    ],
    bullets: [
      "Real-time engine for 50+ concurrent users with sub-50ms latency via Socket.io; eliminated race conditions through event-driven state sync.",
      "Reduced deployment time by 60% with Docker Compose + GitHub Actions CI/CD; shipped 25+ RESTful endpoints with JWT RBAC and MongoDB query optimization, cutting latency by 35%.",
    ],
  },
  {
    name: "Dev-Pulse",
    subtitle: "DevOps CI/CD Monitoring Dashboard",
    accent: "var(--purple)",
    stack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "GitHub Actions",
      "Docker",
      "AWS ECS/ECR",
    ],
    bullets: [
      "Built dashboard tracking 8+ CI/CD pipeline stages via GitHub Actions webhooks; reduced manual build-status checks by 70% for a 5-person team.",
      "Containerized with Docker and deployed to AWS ECS; built reusable components for ECR registry, ECS health, code coverage, and release approval workflows.",
    ],
  },
  {
    name: "Wanderlust",
    subtitle: "Full Stack Accommodation Platform",
    accent: "var(--green)",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Mapbox",
      "Render",
    ],
    bullets: [
      "Shipped production-deployed platform with 50+ listings, Cloudinary CDN, Mapbox geo-search, and review system; achieved sub-200ms REST responses on Render.",
      "Designed indexed MongoDB schemas and session-based JWT auth with server-side validation, reducing invalid form submissions by 35%.",
    ],
  },
];

export const education = {
  degree: "Integrated, Master of Computer Applications",
  university: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
  duration: "Sep 2021 – May 2026",
  gpa: " 7.82 / 10",
};

export const achievements = [
  {
    icon: "\uD83C\uDFC6",
    text: "<strong>Academic Excellence Award(Third year)</strong> <br>\u2014 Recognized as the top-performing student in the third year of MCA(Integrated)",
  },
  {
    icon: "📜",
    text: "<strong>Full Stack Web Development (MERN STACK) \u2014 Apna College, 2024</strong> \u2014 Developed the projects like Wanderlust and Movie Search Web App",
  },
  {
    icon: "🚀",
    text: "<strong>TechSymposium Hackathon  \u2014 C</strong> \u2014 Built FitnessFreaker fitness tracking app; end-to-end delivery in 24 hours",
  },
  {
    icon: "\u26A1",
    text: "<strong>LeetCode </strong> \u2014 100+ problems solved",
  },
];
