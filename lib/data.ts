import {
  Server, Cloud, Database, Terminal, Boxes, ShieldCheck,
  Code2, GitBranch, Cpu, Layers,
} from "lucide-react";

export const profile = {
  name: "Uday",
  role: "Backend & Infrastructure Engineer",
  roles: [
    "Backend & Infrastructure Engineer",
    "Java 17 + Spring Boot Specialist",
    "Microservices Architect",
    "Docker & Cloud Practitioner",
  ],
  location: "Bangalore, India",
  email: "guptauday594@gmail.com",
  phone: "+91 99185 14781",
  resumeUrl: "/Uday-Resume.pdf",
  github: "https://github.com/Uday5629",
  linkedin: "https://www.linkedin.com/in/uday-profile",
  siteUrl: "https://uday.dev",
  tagline:
    "I design and ship production-grade Java 17 & Spring Boot microservices for high-concurrency, distributed systems — with a backend engineer's instinct for performance, resilience, and clean architecture.",
  summary:
    "Backend-focused Software Engineer with 2+ years building distributed microservices that run reliably under load. At Unisys I shipped 20+ REST APIs powering a Warehouse Execution System handling 5,000+ daily transactions, cutting API latency 25% and failure rates 15%. Comfortable from JVM internals up to Docker, AWS, and Linux production environments.",
};

export const stats = [
  { label: "Years of experience", value: 2, suffix: "+" },
  { label: "Production REST APIs", value: 20, suffix: "+" },
  { label: "Daily transactions handled", value: 5000, suffix: "+" },
  { label: "Microservices shipped", value: 8, suffix: "+" },
];

export type SkillGroup = { title: string; icon: typeof Server; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Languages", icon: Code2, items: ["Java 17", "SQL", "TypeScript", "JavaScript", "C++", "Bash"] },
  { title: "Backend & Frameworks", icon: Layers, items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring Cloud", "Hibernate", "REST APIs", "RabbitMQ"] },
  { title: "Microservices & Architecture", icon: Boxes, items: ["Microservices", "Eureka", "API Gateway", "Service Discovery", "Resilience", "Event-Driven"] },
  { title: "Databases", icon: Database, items: ["MySQL", "PostgreSQL", "Query Optimization", "Schema Design", "JPA / ORM"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["Docker", "AWS", "Azure", "Maven", "Git", "SonarQube", "CI/CD"] },
  { title: "Linux & Tooling", icon: Terminal, items: ["Linux", "Shell", "Postman", "Swagger / OpenAPI", "IntelliJ IDEA"] },
  { title: "Security", icon: ShieldCheck, items: ["JWT", "OAuth2", "Spring Security", "RBAC", "API Gateway Auth"] },
  { title: "Testing & Practice", icon: Cpu, items: ["JUnit", "Mockito", "Agile / Scrum", "SDLC", "OOP", "Design Patterns"] },
];

export type Project = {
  title: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  accent: "azure" | "terminal";
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "UrbanFlow — Smart Parking Platform",
    blurb: "A distributed parking-management system that allocates spots in real time across a fleet of microservices.",
    highlights: [
      "8 Spring Boot microservices coordinated via Spring Cloud Gateway routing and Netflix Eureka discovery.",
      "Containerized every service with Docker; cut inter-service latency through optimized communication and caching.",
      "Stateless JWT auth and role-based authorization enforced centrally at the gateway via Spring Security.",
    ],
    stack: ["Java", "Spring Boot", "Spring Cloud", "Docker", "Spring Security", "Eureka"],
    accent: "terminal",
    links: [{ label: "Source", href: "https://github.com/Uday5629" }],
  },
  {
    title: "Warehouse Execution System",
    blurb: "Backend for a high-concurrency warehouse platform orchestrating tasks for autonomous mobile robots (AMR).",
    highlights: [
      "Real-time task orchestration processing 5,000+ daily transactions across distributed services.",
      "20+ production REST APIs spanning inventory, order, and task-management modules.",
      "Reduced API latency 25% and failure rates 15% via schema/query optimization and centralized error handling.",
    ],
    stack: ["Java 17", "Spring Boot", "Microservices", "MySQL", "SonarQube", "AMR"],
    accent: "azure",
  },
  {
    title: "React Micro-Frontend Console",
    blurb: "A responsive operations console front-end for a Java backend platform serving 10,000+ active users.",
    highlights: [
      "Built a modular React micro-frontend with Redux and TypeScript for a shared design system.",
      "Integrated 20+ RESTful APIs; tuned rendering with SCSS and Material UI.",
      "Improved perceived performance and reduced bounce rate by 15%.",
    ],
    stack: ["React", "Redux", "TypeScript", "Material UI", "SCSS", "Micro-Frontends"],
    accent: "azure",
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Unisys India",
    location: "Bangalore, KA",
    period: "Jul 2024 — Present",
    points: [
      "Designed backend services for a Warehouse Execution System (Java 17, Spring Boot) on a high-concurrency, distributed microservices architecture processing 5,000+ daily transactions.",
      "Built and deployed 20+ production REST APIs integrating with autonomous mobile robot (AMR) systems.",
      "Cut API latency 25% and failure rates 15% via schema/query optimization, centralized exception handling, structured logging, and SonarQube quality gates.",
    ],
  },
  {
    role: "Associate Software Engineer (Intern)",
    company: "Unisys India",
    location: "Bangalore, KA",
    period: "Feb 2024 — Jul 2024",
    points: [
      "Developed a responsive React micro-frontend (React, Redux, TypeScript) for a Java backend platform serving 10,000+ active users.",
      "Integrated 20+ RESTful APIs and improved UI performance with SCSS and Material UI, reducing bounce rate 15%.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering (IoT)",
  school: "SRM Institute of Science & Technology, Chennai",
  period: "2020 — 2024",
  detail: "GPA 9.45 / 10",
};

export const certifications = [
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "NPTEL: Database Management Systems",
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const terminalLines = [
  { cmd: "whoami", out: "uday — backend & infrastructure engineer" },
  { cmd: "uname -a", out: "Linux jvm-prod 6.8 #microservices x86_64 GNU/Linux" },
  { cmd: "az account show --query name", out: '"Azure-Fundamentals (AZ-900) verified"' },
  { cmd: "docker ps --format '{{.Names}}'", out: "gateway  eureka  inventory  orders  tasks" },
  { cmd: "echo $STATUS", out: "shipping resilient APIs @ 5k+ tx/day" },
];
