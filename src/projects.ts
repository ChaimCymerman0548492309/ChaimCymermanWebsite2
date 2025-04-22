import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiAngular,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGraphql,
  SiPostman,
  SiCypress,
  SiJest,
  SiFirebase,
  SiExpress,
  SiMysql,
  SiLinux
} from 'react-icons/si';

// ייבוא אייקונים חלופיים מספריות אחרות
import { 
  FaAws,
  FaWindows,
  FaCode,
  FaServer
} from 'react-icons/fa';
import { 
  BsBraces 
} from 'react-icons/bs';
import { 
  MdDataArray 
} from 'react-icons/md';

export const TechIcons = {
  // שפות
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: SiCss3,
  
  // פרונטאנד
  React: SiReact,
  Redux: SiRedux,
  Angular: SiAngular,
  'Material UI': MdDataArray, // אלטרנטיבה
  Jotai: BsBraces, // אלטרנטיבה
  
  // באקאנד
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  
  // מסדי נתונים
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Firebase: SiFirebase,
  
  // DevOps וענן
  Docker: SiDocker,
  OpenShift: FaServer, // אלטרנטיבה
  AWS: FaAws,
  
  // כלים
  Git: SiGit,
  VSCode: FaCode, // אלטרנטיבה
  
  // בדיקות
  Jest: SiJest,
  Cypress: SiCypress,
  
  // APIs
  GraphQL: SiGraphql,
  'REST API': SiPostman,
  
  // מערכות הפעלה
  Windows: FaWindows,
  Linux: SiLinux
};


export const projects = [
  {
    title: "Student Management System",
    desc: "Full-stack application for managing student data with admin dashboard and reporting tools",
    link: "https://github.com/ChaimCymerman0548492309",
    tech: ["React", "Node.js", "MongoDB", "Jotai"],
    image: "https://source.unsplash.com/random/600x400/?education"
  },
  {
    title: "Task Management App",
    desc: "Kanban-style task board with drag-and-drop functionality and team collaboration",
    link: "https://github.com/ChaimCymerman0548492309",
    tech: ["React", "Firebase", "Material UI", "DnD"],
    image: "https://source.unsplash.com/random/600x400/?tasks"
  },
  {
    title: "E-commerce Platform",
    desc: "Online store with product catalog, cart functionality and checkout process",
    link: "https://github.com/ChaimCymerman0548492309",
    tech: ["Angular", "NestJS", "PostgreSQL", "Stripe"],
    image: "https://source.unsplash.com/random/600x400/?ecommerce"
  },
  {
    title: "Military Operations Dashboard",
    desc: "Secure system for operational tracking with real-time data visualization",
    link: "https://github.com/ChaimCymerman0548492309",
    tech: ["React", "Redux", "Node.js", "Docker"],
    image: "https://source.unsplash.com/random/600x400/?military"
  },
  {
    title: "Health & Fitness Tracker",
    desc: "Mobile-responsive app for tracking workouts, nutrition and health metrics",
    link: "https://github.com/ChaimCymerman0548492309",
    tech: ["React Native", "GraphQL", "Firebase", "Chart.js"],
    image: "https://source.unsplash.com/random/600x400/?fitness"
  },
  {
    title: "Real Estate Listings",
    desc: "Property search platform with filters, favorites and agent contact",
    link: "https://github.com/ChaimCymerman0548492309",
    tech: ["Vue.js", "Express", "MongoDB", "Mapbox"],
    image: "https://source.unsplash.com/random/600x400/?realestate"
  },
  {
    title: "Social Media Analytics",
    desc: "Dashboard for analyzing engagement across multiple social platforms",
    link: "https://github.com/ChaimCymerman054849230export 9",
    tech: ["TypeScript", "Next.js", "Python", "AWS"],
    image: "https://source.unsplash.com/random/600x400/?analytics"
  },
  {
    title: "Chat Application",
    desc: "Real-time messaging app with rooms, emojis and file sharing",
    link: "https://github.com/ChaimCymerman0548492309",
    tech: ["Socket.io", "React", "Node.js", "Redis"],
    image: "https://source.unsplash.com/random/600x400/?chat"
  }
];


export const skills = [
  {
    name: "Languages & Frameworks",
    items: [
      "JavaScript", 
      "TypeScript", 
      "Python",
      "HTML/CSS",
      "React",
      "Redux",
      "Material UI",
      "Angular",
      "Node.js",
      "Nest.js"
    ],
  },
  { 
    name: "Databases", 
    items: [
      "MongoDB",
      "PostgreSQL",
      "MSSQL",
      "Redis",
      "Elasticsearch",
      "S3"
    ] 
  },
  { 
    name: "Tools & Technologies", 
    items: [
      "Docker",
      "OpenShift",
      "Git",
      "VSCode",
      "CI/CD Pipelines"
    ] 
  },
  { 
    name: "APIs & Testing", 
    items: [
      "REST APIs",
      "GraphQL",
      "Postman",
      "Cypress",
      "Jest"
    ] 
  },
  { 
    name: "Operating Systems", 
    items: [
      "Windows",
      "Linux"
    ] 
  },
  {
    name: "DevOps & Cloud",
    items: [
      "AWS S3",
      "Containerization",
      "Microservices",
      "Serverless"
    ]
  }
];