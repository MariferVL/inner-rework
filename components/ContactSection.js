"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCheck,
  FaCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Headline from "./ui/Headline";

export default function ContactSection({ dictionary }) {
  const [activeMethod, setActiveMethod] = useState("email");
  const [emailCopied, setEmailCopied] = useState(false);

  const contactData = {
    email: {
      icon: FaEnvelope,
      title: "EMAIL ADDRESS", // Título para el panel
      value: dictionary.contact.email,
      actionLabel: dictionary.contact.social.copy_email,
      action: "copy",
    },
    linkedin: {
      icon: FaLinkedin,
      title: "LINKEDIN PROFILE", // Título para el panel
      value: "linkedin.com/in/mariafernandavillalobos",
      actionLabel: dictionary.contact.social.linkedin,
      action: "link",
      href: "https://linkedin.com/in/mariafernandavillalobos",
    },
    github: {
      icon: FaGithub,
      title: "GITHUB REPOSITORY", // Título para el panel
      value: "github.com/MariferVL",
      actionLabel: dictionary.contact.social.github,
      action: "link",
      href: "https://github.com/MariferVL",
    },
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(dictionary.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  const currentData = contactData[activeMethod];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Fondo decorativo con partículas */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-grid-pattern-contact opacity-10"></div>
        {/* Aquí podrías añadir un componente de partículas si lo deseas */}
      </div>

      <div className="relative z-10 container mx-auto">
        <Headline text={dictionary.contact.title} />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          {/* Columna Izquierda: Texto y CTA */}
          <div className="text-left">
            <h3 className="font-orbitron text-2xl md:text-3xl text-pink-400 mb-4 animate-pink-pulse-glow">
              {dictionary.contact.subtitle}
            </h3>
            <p className="font-cabin text-lg text-gray-300 mb-6 leading-relaxed">
              {dictionary.contact.invitation}
            </p>
            <p className="font-orbitron text-xl text-cyan-300 animate-cyan-pulse-glow">
              {dictionary.contact.cta}
            </p>
          </div>

          {/* Columna Derecha: Nodo de Datos Holográfico */}
          <div className="holographic-node-container">
            <div className="holographic-node-core">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMethod}
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="data-panel"
                >
                  <h4 className="data-panel-title">{currentData.title}</h4>
                  <p className="data-panel-value">{currentData.value}</p>
                  <div className="data-panel-divider"></div>

                  {currentData.action === "copy" ? (
                    <button
                      onClick={handleCopyEmail}
                      className="data-panel-action-btn"
                    >
                      {emailCopied ? (
                        <>
                          <FaCheck className="text-green-400" />
                          <span className="text-green-300">
                            {dictionary.contact.social.copied_email}
                          </span>
                        </>
                      ) : (
                        <>
                          <FaCopy /> <span>{currentData.actionLabel}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={currentData.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="data-panel-action-btn"
                    >
                      <span>{currentData.actionLabel}</span>
                    </Link>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Íconos Orbitantes */}
            {Object.keys(contactData).map((key, index) => {
              const Icon = contactData[key].icon;
              return (
                <button
                  key={key}
                  className={`orbiting-icon icon-pos-${index + 1} ${
                    activeMethod === key ? "active" : ""
                  }`}
                  onClick={() => setActiveMethod(key)}
                >
                  <Icon className="w-8 h-8" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
