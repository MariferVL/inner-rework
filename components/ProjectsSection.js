"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Button from "./ui/Button";
import Headline from "./ui/Headline";

// Component to display the year in a decorative way
const YearDisplay = ({ year }) => (
  <div className="absolute top-4 right-4 z-20 font-orbitron text-xl">
    <div className="relative p-2 text-cyan-300 animate-cyan-pulse-glow">
      <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-cyan-500/50"></div>
      <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-pink-500/50"></div>
      {year}
    </div>
  </div>
);

export default function ProjectsSection({ dictionary }) {
  const projectCardRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!dictionary || !dictionary.projects || !dictionary.projects.info) {
    return null;
  }

  const projectsData = dictionary.projects;

  const projectsList = Object.keys(projectsData.info).map((key) => {
    const localData = {
      project_1: {
        year: "2025",
        image: "/images/projects/pyday.jpg",
        demo: "https://pyday.cl",
        code: "https://github.com/python-chile/pydaydotcl",
        technologies: "Javascript, Next.js, Tailwind CSS, Git, Framer Motion",
      },
      project_2: {
        year: "2024",
        image: "/images/projects/valeria.jpg",
        demo: "https://valeriadelreal.web.app/",
        code: "https://github.com/MariferVL/valeDelRealWebsite",
        technologies: "Javascript, Next.js, Tailwind CSS, Firebase, Vercel",
      },
      project_3: {
        year: "2023",
        image: "/images/projects/hites.jpg",
        demo: "https://marifervl.github.io/Hites-Website/",
        code: "https://github.com/MariferVL/Hites-Website",
        technologies: "HTML5, CSS3, JavaScript, Bootstrap, GitHub Pages",
      },
    }
    return { ...projectsData.info[key], ...localData[key] };
  });

  if (projectsList.length === 0) {
    return null;
  }

  const activeProject = projectsList[activeIndex];

  const handleProjectChange = (index) => {
    setActiveIndex(index);
    projectCardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const TechMarquee = ({ technologies }) => {
    const techArray = technologies.split(", ").map((t) => t.trim());
    const doubledTechs = [...techArray, ...techArray];

    return (
      <div className="w-full overflow-hidden whitespace-nowrap py-4 border-t border-b border-cyan-500/20 my-6">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {doubledTechs.map((tech, index) => (
            <span
              key={index}
              className="font-mono text-cyan-300/80 text-sm px-6"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="w-full p-2 md:p-13 rounded-lg glass-effect border-2 border-cyan-500/30 relative animate-glow overflow-hidden">
        <div
          className="container mx-auto px-4 flex flex-col items-center"
          ref={projectCardRef}
        >
          <Headline text={projectsData.title} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative z-10 p-4" 
            >
              <YearDisplay year={activeProject.year} />

              <h3 className="font-orbitron text-2xl text-pink-400 mb-11 text-center animate-pink-pulse-glow pink-glow">
                {activeProject.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-2 flex justify-center md:justify-end">
                  <div className="overflow-hidden">
                    <Image
                      src={activeProject.image}
                      alt={`${activeProject.name} project screenshot`}
                      width={300}
                      height={206}
                      className="rounded-md opacity-70"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col md:ml-22">
                  <div>
                    <h4 className="font-orbitron text-lg text-cyan-300 md:mt-8 mb-1 animate-cyan-pulse-glow cyan-glow ">
                      {projectsData.challengeLabel}
                    </h4>
                    <p className="font-cabin text-gray-300 mb-4 md:mt-4 md:px-11 md:text-justify">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-lg text-cyan-300 md:mt-8 mb-1 animate-cyan-pulse-glow cyan-glow ">
                      {projectsData.contributionLabel}
                    </h4>
                    <p className="font-cabin text-gray-300 mb-4 md:mt-4 md:px-11 md:text-justify">
                      {activeProject.contribution}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-lg text-cyan-300 md:mt-8 mb-1 animate-cyan-pulse-glow cyan-glow ">
                      {projectsData.resultLabel}
                    </h4>
                    <p className="font-cabin text-gray-300 mb-4 md:mt-4 md:px-11 md:text-justify">
                      {activeProject.result}
                    </p>
                  </div>

                  <TechMarquee technologies={activeProject.technologies} />

                  <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-auto pt-4">
                    <Button
                      href={activeProject.demo}
                      color="#06b6d4"
                      className="!px-6 !py-2.5"
                    >
                      <FaExternalLinkAlt /> {projectsData.demoLabel}
                    </Button>
                    <Button
                      href={activeProject.code}
                      color="#ffffff"
                      className="!px-6 !py-2.5"
                    >
                      <FaGithub /> {projectsData.codeLabel}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {projectsList.map((project, index) => (
            <button
              key={project.name}
              onClick={() => handleProjectChange(index)}
              className={`font-orbitron px-4 py-2 rounded-md transition-all duration-300 border-2 ${
                activeIndex === index
                  ? "bg-pink-500/40 border-pink-500 text-white animate-pulse"
                  : "bg-gray-500/20 border-transparent text-gray-400 hover:border-pink-500/50"
              }`}
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}