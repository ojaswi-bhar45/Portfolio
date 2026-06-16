export const PERSONAL = {
  firstName: 'Ojaswi', lastName: 'Bhardwaj', title: 'Full-Stack Developer',
  location: 'Agra, Uttar Pradesh, India', email: 'bhardwajojaswi445@gmail.com',
  phone: '(+91) 8979859781',
  linkedin: 'https://www.linkedin.com/in/ojaswi-bhardwaj/',
  github: 'https://github.com/ojaswi-bhar45',
  summary: 'Full-stack developer building scalable web applications using modern JavaScript frameworks and cloud-native technologies. Passionate about developer tooling, open source, and crafting intuitive user interfaces.',
};

export const STATS = [
  { target: 40, suffix: '%', label: 'Checkout error reduction' },
  { target: 60, suffix: '%', label: 'Faster Deployment' },
  { target: 30, suffix: '+', label: 'API endpoints secured' },
  { target: 100, suffix: '+', label: 'LeetCode problems' },
];

export const SKILL_GROUPS = [
  { label: 'Frontend', skills: [
    { name: 'React', pct: 90 }, { name: 'HTML5', pct: 92 }, { name: 'CSS3', pct: 88 },
    { name: 'Tailwind CSS', pct: 85 }, { name: 'Framer Motion', pct: 70 },
  ]},
  { label: 'Backend', skills: [
    { name: 'Node.js', pct: 85 }, { name: 'Express.js', pct: 85 }, { name: 'REST APIs', pct: 88 },
    { name: 'WebSockets', pct: 75 }, { name: 'JWT', pct: 82 }, { name: 'RBAC', pct: 80 }, { name: 'OOP', pct: 85 },
  ]},
  { label: 'Database & Cloud', skills: [
    { name: 'MongoDB', pct: 82 }, { name: 'MySQL', pct: 78 }, { name: 'AWS EC2/S3', pct: 72 },
    { name: 'Firebase', pct: 80 }, { name: 'Cloudinary', pct: 75 },
  ]},
  { label: 'Languages', skills: [
    { name: 'JavaScript', pct: 90 }, { name: 'Java', pct: 70 }, { name: 'Python', pct: 68 },
  ]},
  { label: 'DevOps & Tools', skills: [
    { name: 'Docker', pct: 75 }, { name: 'GitHub Actions CI/CD', pct: 78 }, { name: 'Nginx', pct: 65 },
    { name: 'Render', pct: 72 }, { name: 'Postman', pct: 85 },
  ]},
  { label: 'Practices', skills: [
    { name: 'System Design', pct: 72 }, { name: 'Scalability', pct: 68 },
    { name: 'DSA', pct: 75 }, { name: 'Code Review', pct: 80 },
  ]},
];

export const EXPERIENCE = [
  { company: 'FutureDesk Services', role: 'Full Stack Developer Intern',
    duration: 'March 2026 \u2013 May 2026', location: 'Agra, Uttar Pradesh',
    bullets: [
      'Implemented Razorpay payment gateway end-to-end on the Rentalwise platform; reduced checkout transaction errors by 40% in production, enabling seamless digital payments for 200+ monthly users.',
      'Architected a 3-tier RBAC system (Farmer/User/Admin) with Node.js + Firebase Auth; enforced role-based middleware across 30+ REST API endpoints, eliminating unauthorized access incidents.',
      'Engineered scalable Express.js backend modules across 2 platforms; authored Swagger/OpenAPI docs and collaborated with a 4-person team in 2-week Agile sprints.',
    ],
  },
];

export const PROJECTS = [
  { name: 'Sync-Board', subtitle: 'Real-time collaborative workspace',
    stack: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Docker', 'GitHub Actions'],
    bullets: [
      'Real-time engine for 50+ concurrent users with sub-50ms latency via Socket.io; eliminated race conditions through event-driven state sync.',
      'Reduced deployment time by 60% with Docker Compose + GitHub Actions CI/CD; shipped 25+ RESTful endpoints with JWT RBAC and MongoDB query optimization, cutting latency by 35%.',
    ],
  },
  { name: 'Dev-Pulse', subtitle: 'DevOps CI/CD Monitoring Dashboard',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'GitHub Actions', 'Docker', 'AWS ECS/ECR'],
    bullets: [
      'Built dashboard tracking 8+ CI/CD pipeline stages via GitHub Actions webhooks; reduced manual build-status checks by 70% for a 5-person team.',
      'Containerized with Docker and deployed to AWS ECS; built reusable components for ECR registry, ECS health, code coverage, and release approval workflows.',
    ],
  },
  { name: 'Wanderlust', subtitle: 'Full Stack Accommodation Platform',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Mapbox', 'Render'],
    bullets: [
      'Shipped production-deployed platform with 50+ listings, Cloudinary CDN, Mapbox geo-search, and review system; achieved sub-200ms REST responses on Render.',
      'Designed indexed MongoDB schemas and session-based JWT auth with server-side validation, reducing invalid form submissions by 35%.',
    ],
  },
];

export const EDUCATION = { degree: 'Integrated, Master of Computer Applications',
  university: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
  duration: 'Sep 2021 \u2013 May 2026', gpa: '7.82 / 10' };

export const ACHIEVEMENTS = [
  { icon: '\uD83C\uDFC6', text: '<strong>Academic Excellence Award (Third year)</strong> \u2014 Top-performing student in MCA (Integrated)' },
  { icon: '\uD83D\uDCDC', text: '<strong>Full Stack Web Development (MERN) \u2014 Apna College, 2024</strong>' },
  { icon: '\uD83D\uDE80', text: '<strong>TechSymposium Hackathon</strong> \u2014 Built FitnessFreaker app in 24 hours' },
  { icon: '\u26A1', text: '<strong>LeetCode</strong> \u2014 100+ problems solved' },
];

export const TYPEWRITER_PHRASES = ['Full-Stack Developer', 'Open Source Enthusiast', 'UI/UX Thinker', 'Problem Solver'];
