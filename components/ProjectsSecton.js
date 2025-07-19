"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTypeText } from "@/lib/hooks/useTypeText";
import Button from "./ui/Button";

const AnimatedText = ({ content }) => {
  const displayedText = useTypeText(content, 20);
  return (
    <p className="font-cabin text-gray-300 mb-4 h-24 md:h-20">
      {displayedText}
    </p>
  );
};

export default function ProjectsSection({ dictionary }) {
  const projectsData = dictionary.projects;
  const projects = [
    projectsData.project_1,
    projectsData.project_2,
    projectsData.project_3,
  ];
  const projectImages = [
    "/images/projects/pyday.png",
    "/images/projects/valeria.png",
    "/images/projects/hites.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-orbitron glitch"
          data-text={projectsData.title}
        >
          {projectsData.title}
        </h2>

        {/* --- El Terminal de Análisis --- */}
        <div className="w-full max-w-4xl p-2 md:p-4 rounded-lg glass-effect border-2 border-cyan-500/30 relative animate-glow">
          {/* Fondo con grid y scanlines para la estética */}
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
              {/* Columna de la Imagen */}
              <div className="md:col-span-2">
                <div className="relative w-full h-48 md:h-full rounded-md overflow-hidden border border-pink-500/50">
                  <Image
                    src={projectImages[activeIndex]}
                    alt={`${activeProject.name} project screenshot`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-80"
                  />
                </div>
              </div>

              {/* Columna de la Información */}
              <div className="md:col-span-3 flex flex-col">
                <h3 className="font-orbitron text-2xl text-pink-400 mb-4">
                  {activeProject.name}
                </h3>

                {/* Usamos nuestro componente de texto animado */}
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
                    href="#"
                    color="#06b6d4" // Cian de Tailwind
                    className="!px-6 !py-2.5" // Anulamos el padding para que sea un poco más pequeño
                  >
                    <FaExternalLinkAlt />
                    {projectsData.demoLabel}
                  </Button>

                  <Button
                    href="#"
                    color="#6b7280" // Gris de Tailwind
                    className="!px-6 !py-2.5" // Hacemos lo mismo aquí
                  >
                    <FaGithub />
                    {projectsData.codeLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Consola de Selección --- */}
        <div className="flex justify-center gap-4 mt-8">
          {projects.map((project, index) => (
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
