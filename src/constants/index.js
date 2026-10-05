import {
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  oracleSQL,
  oracleLogo,
  express,
  mui,
  git,
  memories,
  quiz,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Backend & Platform Engineering",
    icon: creator,
  },
  {
    title: "AI Engineering",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Oracle Database 26ai",
    icon: oracleSQL,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "Oracle",
    icon: oracleLogo,
    iconBg: "#ffffff",
    date: "Aug 2024 - Present · Hybrid",
    points: [
      "Drove backend delivery across two next-generation applications for Oracle Communications, spanning APIs, validation, data processing, import/export, search, and Kafka-based microservice integrations.",
      "Tackled complex data-design and migration work, including foreign-key-based POCs, a MySQL-to-Oracle Database 26ai migration, and research into an NDB-to-InnoDB migration while preserving existing application data.",
      "Received the Best SDE Fresher SPOT Award for Q3 FY25, recognizing contributions at Oracle Communications.",
      "Improved validation performance by up to 90% in selected scenarios and import/export throughput by approximately 20%; reduced duplicate data-transfer code by around 30% and debugging effort by about 20% through refactoring, logging improvements, and OpenSearch observability.",
      "Strengthened quality and operations through near-complete automated coverage for applicable features, resolution of around 15 critical bugs, proactive reporting of around 20 issues, and integrations with SonarQube, Grafana, Prometheus, and Fluentd.",
      "Contributed to an AI agent governance framework for controlled, efficient agent use, integrating multiple MCP servers; also built reusable AI workflows for data-model design and documentation, reducing effort by approximately 40%.",
      "Integrated SpecKit to support spec-driven development and more structured implementation planning.",
      "Supported cross-team delivery through technical documentation, design discussions, demos, and peer support across engineering, architecture, QA, UI, and DevOps.",
    ],
  },
  {
    title: "Project Intern",
    company_name: "Oracle",
    icon: oracleLogo,
    iconBg: "#ffffff",
    date: "Jan 2024 - Jul 2024 · Remote",
    points: [
      "Implemented Java REST endpoints and business-rule validations for core workflows, including data import/export and lifecycle-summary APIs.",
      "Supported DevOps and performance testing by deploying Grafana/Prometheus monitoring on OKE and preparing JMeter test plans.",
    ],
  },
];

const projects = [
  {
    name: "Memories",
    description:
      "A Full Stack MERN Application for sharing memories with others with features like Google Auth, Likes, Comments, Pagination, Search Functionality,etc. Users can also update and delete their memories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/pandeysushmit/memories",
  },
  {
    name: "Quiz Wizards",
    description:
      "An interactive Quiz App made for Primary School Student particularly for Mathematics of Standard I. This enable adaptive learning for students and also provides a platform for teachers to track their progress.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/pandeysushmit/quiz_app",
  },
];

export { services, technologies, experiences, projects };
