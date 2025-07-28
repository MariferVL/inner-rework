"use client";

import { useState } from "react";
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
import Button from "./ui/Button";

export default function ContactSection({ dictionary }) {
  const [activeMethod, setActiveMethod] = useState("email");
  const [emailCopied, setEmailCopied] = useState(false);
  const [liveRegionMessage, setLiveRegionMessage] = useState("");

  const contactData = {
    email: {
      icon: FaEnvelope,
      title: dictionary.contact.emailLabel || "EMAIL ADDRESS",
      value: dictionary.contact.email,
      actionLabel: dictionary.contact.social.copy_email,
      action: "copy",
      aria: dictionary.contact.social.icon_button_aria_label_email,
    },
    linkedin: {
      icon: FaLinkedin,
      title: dictionary.contact.linkedinLabel || "LINKEDIN PROFILE",
      value: "linkedin.com/in/marifervl",
      actionLabel: dictionary.contact.social.linkedin,
      action: "link",
      href: "https://linkedin.com/in/marifervl",
      aria: dictionary.contact.social.icon_button_aria_label_linkedin,
    },
    github: {
      icon: FaGithub,
      title: dictionary.contact.githubLabel || "GITHUB REPOSITORY",
      value: "github.com/MariferVL",
      actionLabel: dictionary.contact.social.github,
      action: "link",
      href: "https://github.com/MariferVL",
      aria: dictionary.contact.social.icon_button_aria_label_github,
    },
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(dictionary.contact.email);
    setEmailCopied(true);
    setLiveRegionMessage(dictionary.contact.social.copy_success_message);
    setTimeout(() => {
      setEmailCopied(false);
      setLiveRegionMessage("");
    }, 3000);
  };

  const currentData = contactData[activeMethod];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div aria-live="polite" className="sr-only">
        {liveRegionMessage}
      </div>

      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-grid-pattern-contact opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto">
        <Headline text={dictionary.contact.title} />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          <div className="text-left md:ml-22">
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
                    <Button
                      onClick={handleCopyEmail}
                      unstyled={true}
                      className="data-panel-action-btn"
                    >
                      {emailCopied ? (
                        <>
                          <FaCheck className="inline-flex md:hidden text-black" />
                          <span className="hidden md:inline-flex text-black">
                            {dictionary.contact.social.copied_email}
                          </span>
                        </>
                      ) : (
                        <>
                          <FaCopy className="inline-flex md:hidden" />
                          <span className="hidden md:inline-flex">
                            {currentData.actionLabel}
                          </span>
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      href={currentData.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      unstyled={true}
                      className="data-panel-action-btn"
                    >
                      <FaExternalLinkAlt className="inline-flex md:hidden" />
                      <span className="hidden md:inline-flex">
                        {currentData.actionLabel}
                      </span>
                    </Button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {Object.keys(contactData).map((key, index) => {
              const Icon = contactData[key].icon;
              const isActive = activeMethod === key;
              return (
                <button
                  key={key}
                  className={`orbiting-icon icon-pos-${index + 1} ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setActiveMethod(key)}
                  aria-label={contactData[key].aria}
                  aria-pressed={isActive}
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
