import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const skillGroups = [
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Java",
      "C++",
      "JavaScript",
      "Helidon",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    id: "data",
    label: "Data & Messaging",
    skills: ["MySQL", "Oracle Database 26ai", "MongoDB", "Kafka"],
  },
  {
    id: "platform",
    label: "Platform & Quality",
    skills: [
      "OpenSearch",
      "Fluentd",
      "Grafana",
      "Prometheus",
      "SonarQube",
      "Kubernetes",
      "Helm",
      "Podman",
      "OKE",
      "CI/CD",
      "Git",
      "Postman",
      "JMeter",
    ],
  },
  {
    id: "ai",
    label: "AI Engineering",
    skills: [
      "Agent governance",
      "MCP integrations",
      "Reusable AI workflows",
      "SpecKit",
      "Spec-driven development",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Redux", "Material UI", "HTML", "CSS"],
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [activeSkillGroup, setActiveSkillGroup] = useState(skillGroups[0]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Backend-focused software engineer building APIs, microservices, data
        workflows, and operational tooling. I care about reliable systems,
        performance, developer productivity, and practical, well-governed AI
        adoption.
      </p>

      <div className='mt-8 max-w-4xl'>
        <h3 className='text-white text-[18px] font-semibold'>Core skills</h3>
        <div className='mt-4 flex flex-wrap gap-2' aria-label='Skill categories'>
          {skillGroups.map((group) => {
            const isActive = activeSkillGroup.id === group.id;

            return (
              <button
                key={group.id}
                type='button'
                aria-pressed={isActive}
                onClick={() => setActiveSkillGroup(group)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#915EFF] ${
                  isActive
                    ? "border-[#915EFF] bg-[#915EFF] text-white"
                    : "border-white/10 bg-tertiary text-secondary hover:border-[#915EFF]/60 hover:text-white"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeSkillGroup.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          role='region'
          aria-label={`${activeSkillGroup.label} skills`}
          aria-live='polite'
          className='mt-4 flex flex-wrap gap-2'
        >
          {activeSkillGroup.skills.map((skill) => (
            <span
              key={skill}
              className='rounded-lg bg-black-200 px-3 py-2 text-sm text-white-100'
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
