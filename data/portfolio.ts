export const portfolio = {
  name: "Uthfol Ghosh",
  role: "Software Engineer",
  title: "Backend Engineer",
  university: "Shahjalal University of Science and Technology",
  email: "uthfolghosh9038@gmail.com",
  github: "https://github.com/uthfol-sust",
  linkedin: "https://linkedin.com/in/uthfol-ghosh",
  location: "Sylhet, Bangladesh",
  cgpa: "3.57",
  intro:
    "Backend-focused software engineer building reliable systems, product-minded tools, and AI infrastructure with a strong interest in distributed systems, databases, and competitive programming.",
  goal:
    "Become a Backend Engineer specializing in Distributed Systems and AI Infrastructure.",
  headline:
    "I design and ship backend systems that are fast, observable, and easy to scale.",
  aboutSummary:
    "I am a final-year undergraduate Software Engineering student at SUST, focused on backend engineering, distributed systems, and applied AI. With experience in software development, machine learning research, and competitive programming, I enjoy building scalable systems and solving real-world problems with a strong technical and product-oriented mindset.",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Competitive Programming", href: "#competitive-programming" },
  { name: "Achievements", href: "#achievements" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: portfolio.github },
  { label: "LinkedIn", href: portfolio.linkedin },
  { label: "Email", href: `mailto:${portfolio.email}` },
  { label: "Codeforces", href: "https://codeforces.com/" },
  { label: "LeetCode", href: "https://leetcode.com/" },
];

export const aboutHighlights = [
  "Backend engineering with a strong emphasis on clean architecture and reliability.",
  "Competitive programming shaped my speed, precision, and problem decomposition.",
  "I enjoy building systems that are observable, testable, and pleasant to maintain.",
];

export const education = {
  institution: "Shahjalal University of Science and Technology",
  degree: "Software Engineering",
  status: "Undergraduate",
  cgpa: "3.57 / 4.00",
  focus: ["Data structures", "Algorithms", "Systems design", "AI/ML foundations"],
};

export const skillGroups = [
  {
    category: "Languages",
    items: ["Go", "C++", "Python", "Java", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Accessibility"],
  },
  {
    category: "Backend",
    items: ["Gin", "Node.js", "REST API", "JWT", "Caching"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Linux"],
  },
  {
    category: "AI & Research",
    items: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "RAG"],
  },
];

export const experienceTimeline = [
  {
    period: "2024 - Present",
    title: "Backend Engineering Focus",
    organization: "Independent projects and systems work",
    description:
      "Designing and building backend systems, APIs, and data-driven applications with an emphasis on reliability, performance, and maintainability.",
    highlights: ["Go services", "PostgreSQL design", "Redis caching", "Dockerized deployments"],
  },
  {
    period: "2023 - Present",
    title: "Competitive Programming Practice",
    organization: "Codeforces, CodeChef, LeetCode",
    description:
      "Regular problem solving and contest participation strengthened algorithmic thinking, implementation speed, and debugging discipline.",
    highlights: ["800+ problems solved", "60+ contests", "Data structure mastery"],
  },
  {
    period: "University Years",
    title: "Software Engineering Study",
    organization: "Shahjalal University of Science and Technology",
    description:
      "Built a strong foundation in software engineering, algorithms, and systems thinking while staying focused on practical project work.",
    highlights: ["CGPA 3.57", "Systems foundation", "Applied project work"],
  },
];

export const projects = [
  {
    title: "Online Voting System",
    description:
      "A secure voting platform with role-based access, Redis-backed sessions, and PostgreSQL persistence built for reliable election workflows.",
    stack: ["Go", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/uthfol-sust",
    live: "#contact",
    caseStudy: "#contact",
    accent: "from-cyan-400/30 via-blue-400/10 to-transparent",
  },
  {
    title: "Restaurant Management System",
    description:
      "A structured management dashboard for handling menus, orders, inventory, and daily operations with clean separation of concerns.",
    stack: ["Next.js", "TypeScript", "REST API", "PostgreSQL"],
    github: "https://github.com/uthfol-sust",
    live: "#contact",
    caseStudy: "#contact",
    accent: "from-emerald-400/30 via-teal-400/10 to-transparent",
  },
  {
    title: "Task Manager Backend",
    description:
      "A task management backend focused on authentication, CRUD workflows, and maintainable API design.",
    stack: ["Go", "JWT", "REST API", "MySQL"],
    github: "https://github.com/uthfol-sust",
    live: "#contact",
    caseStudy: "#contact",
    accent: "from-fuchsia-400/30 via-pink-400/10 to-transparent",
  },
  {
    title: "Dot and Box Game",
    description:
      "A polished logic game that demonstrates state handling, game rules, and responsive interaction design.",
    stack: ["JavaScript", "Canvas", "UI Logic"],
    github: "https://github.com/uthfol-sust",
    live: "#contact",
    caseStudy: "#contact",
    accent: "from-amber-400/30 via-orange-400/10 to-transparent",
  },
];

export const researchTopics = [
  {
    title: "Language Models",
    items: ["LLMs", "Low Resource NLP", "Bangla NLP", "Hallucination Detection", "Machine Translation", "RAG"],
  },
  {
    title: "Infrastructure",
    items: ["Vector Databases", "AI Agents", "Kafka", "RabbitMQ", "Redis Internals", "Distributed Systems"],
  },
  {
    title: "Platform Engineering",
    items: ["System Design", "Kubernetes", "Docker", "gRPC", "Microservices"],
  },
];

export const competitiveProgrammingStats = [
  { label: "Problems Solved", value: "800+" },
  { label: "Contests", value: "60+" },
  { label: "Primary Languages", value: "C++, Go" },
  { label: "Online Judges", value: "Codeforces, CodeChef, LeetCode" },
];

export const achievements = [
  {
    title: "NASA Space Apps Challenge Bangladesh 2024",
    result: "Second Runner-up",
    category: "Achievement",
  },
  {
    title: "Competitive Programming",
    result: "800+ solved problems",
    category: "Discipline",
  },
  {
    title: "Leadership",
    result: "Executive committee and volunteering work",
    category: "Community",
  },
];

export const leadershipItems = [
  {
    title: "Executive Committee",
    organization: "SWE Society",
    description:
      "Contributing to student engineering culture, technical coordination, and community growth.",
  },
  {
    title: "Information & Technology Secretary",
    organization: "SWE Society",
    description:
      "Supporting communication, digital systems, and event operations with a technology-first mindset.",
  },
  {
    title: "Volunteer",
    organization: "WordCamp Sylhet",
    description:
      "Helping deliver community-first technical events and collaborating with organizers and attendees.",
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
  },
  {
    label: "GitHub",
    value: "uthfol-sust",
    href: portfolio.github,
  },
  {
    label: "LinkedIn",
    value: "uthfol-ghosh",
    href: portfolio.linkedin,
  },
  {
    label: "Location",
    value: portfolio.location,
    href: "#home",
  },
];

export const footerTechStack = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];