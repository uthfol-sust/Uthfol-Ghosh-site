import {
  SiGo,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiTensorflow,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";



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
  {
    name: "About",
    href: "#about",
    children: [{ name: "Skills", href: "#skills" }],
  },
  { name: "Projects", href: "#projects" },
  {
    name: "Experience",
    href: "#research",
    children: [
      { name: "Research", href: "#research" },
      { name: "Competitive Programming", href: "#competitive-programming" },
      { name: "Achievements", href: "#achievements" },
    ],
  },
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
  cgpa: "3.54 / 4.00",
  focus: ["Data structures", "Algorithms", "Systems design", "AI/ML foundations"],
};

export const skillGroups = [
  {
    category: "Languages",
    items: [
      { name: "Go", icon: SiGo },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },

  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Gin", icon: SiGo },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },

  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },

  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
    ],
  },

  {
    category: "AI & Research",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
    ],
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

export const researchTopics = {
  currentResearch: [
    {
      title: "Bangla Chart-to-Text Generation",
      status: "Ongoing Research",
      description:
        "Developing a Bangla chart-to-text dataset and exploring vision-language models for generating meaningful Bangla descriptions from charts.",
      areas: [
        "Bangla NLP",
        "Vision-Language Models",
        "Chart-to-Text",
        "Knowledge Distillation",
      ],

      publicationStatus: "Ongoing",
      paperUrl: "",
      githubUrl: "",
      datasetUrl: "",
    },


    {
      title: "PoWoBD: A Bangla Dataset and Ensemble Transformer Framework for Political Barriers Classification Against Women in Bangladesh",
      status: "Submitted Research",
      description:
        "Analyzing barriers and perceptions surrounding women's participation in political leadership in Bangladesh using social media and survey-based datasets and analysis.",
      areas: [
        "Social Media Comments Analysis",
        "NLP",
        "Dataset Development",
        "Bangla Text Analysis",
      ],

      publicationStatus: "waiting for review",
      paperUrl: "#contact",
      githubUrl: "#contact",
      datasetUrl: "#contact",
    },
  ],

  researchInterests: [
    "Large Language Models",
    "Vision-Language Models",
    "Natural Language Processing",
    "Multimodal AI",
    "Bangla NLP",
    "Knowledge Distillation",
    "Deep Learning",
    "Machine Learning",
    "Retrieval-Augmented Generation",
  ],
};

export const achievements = [
  {
    type: "achievement",
    category: "Special Achievement",
    title: "2nd Runner-up",
    organization: "NASA International Space Apps Challenge Bangladesh 2024",
    link: "https://drive.google.com/file/d/1qLP7VC4avqZ4gcEaEKUEbvzntfyQTpvp/view?usp=drive_link",
  },
  {
    type: "achievement",
    category: "Special Achievement",
    title: "Champion",
    organization: "Cricket Tournament, IICT Sports Week 2024",
  },
  {
    type: "leadership",
    category: "Volunteerism",
    title: "Executive Member",
    organization: "SWE Society, SUST",
  },
  {
    type: "leadership",
    category: "Leadership",
    title: "Information & Technology Secretary",
    organization: "Mymensingh Student Association, SUST",
  },
  {
    type: "volunteer",
    category: "Volunteerism",
    title: "Volunteer — Food Management Team",
    organization: "WordPress Camp Sylhet 2023",
  },
  {
    type: "volunteer",
    category: "Volunteerism",
    title: "Volunteer — Registration Management Team",
    organization: "WordPress Camp Sylhet 2024",
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
