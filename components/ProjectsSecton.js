"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTypeText } from "@/lib/hooks/useTypeText";
import Button from "./ui/Button";

// Component to animate text typing effect
const AnimatedText = ({ content }) => {
  const displayedText = useTypeText(content, 20);
  return (
    <p className="font-cabin text-gray-300 mb-4 md:h-20 md:text-justify">
      {displayedText}
    </p>
  );
};

export default function ProjectsSection({ dictionary }) {

  if (!dictionary || !dictionary.projects || !dictionary.projects.info) {
    return null; 
  }

  const projectsData = dictionary.projects;

  const projectsList = Object.keys(projectsData.info).map((key) => {
    const localData = {
      project_1: {
        image: "/images/projects/pyday.jpg",
        demo: "https://pyday.cl",
        code: "https://github.com/python-chile/pydaydotcl",
      },
      project_2: {
        image: "/images/projects/valeria.jpg",
        demo: "https://valeriadelreal.web.app/",
        code: "https://github.com/MariferVL/valeDelRealWebsite",
      },
      project_3: {
        image: "/images/projects/hites.jpg",
        demo: "https://marifervl.github.io/Hites-Website/",
        code: "https://github.com/MariferVL/Hites-Website",
      },
    };

    return {
      ...projectsData.info[key],
      ...localData[key],
    };
  });

  const [activeIndex, setActiveIndex] = useState(0);

  if (projectsList.length === 0) {
    return null; 
  }

  const activeProject = projectsList[activeIndex];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-orbitron glitch"
          data-text={projectsData.title}
        >
          {projectsData.title}
        </h2>

        <div className="w-full max-w-4xl p-2 md:p-4 rounded-lg glass-effect border-2 border-cyan-500/30 relative animate-glow">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="absolute inset-0 animate-scan-line bg-scan-line-gradient"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 p-4"
            >
              <div className="md:col-span-2">
                <div className="relative w-full h-48 md:h-full rounded-md overflow-hidden border border-pink-500/50">
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.name} project screenshot`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-80"
                  />
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col">
                <h3 className="font-orbitron text-2xl text-pink-400 mb-4">
                  {activeProject.name}
                </h3>

                <div>
                  <h4 className="font-orbitron text-lg text-cyan-300 mb-1">
                    {projectsData.challengeLabel}
                  </h4>
                  <AnimatedText content={activeProject.challenge} />
                </div>
                <div>
                  <h4 className="font-orbitron text-lg text-cyan-300 mb-1">
                    {projectsData.contributionLabel}
                  </h4>
                  <AnimatedText content={activeProject.contribution} />
                </div>
                <div>
                  <h4 className="font-orbitron text-lg text-cyan-300 mb-1">
                    {projectsData.resultLabel}
                  </h4>
                  <AnimatedText content={activeProject.result} />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                  <Button
                    href={activeProject.demo}
                    color="#06b6d4"
                    className="!px-6 !py-2.5"
                  >
                    <FaExternalLinkAlt />
                    {projectsData.demoLabel}
                  </Button>

                  <Button
                    href={activeProject.code}
                    color="#ffffff"
                    className="!px-6 !py-2.5"
                  >
                    <FaGithub />
                    {projectsData.codeLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Selection console --- */}
        <div className="flex justify-center gap-4 mt-8">
          {projectsList.map((project, index) => (
            <button
              key={project.name}
              onClick={() => setActiveIndex(index)}
              className={`font-orbitron px-4 py-2 rounded-md transition-all duration-300 border-2
                ${
                  activeIndex === index
                    ? "bg-pink-500/40 border-pink-500 text-white animate-pulse"
                    : "bg-gray-500/20 border-transparent text-gray-400 hover:border-pink-500/50"
                }
              `}
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}