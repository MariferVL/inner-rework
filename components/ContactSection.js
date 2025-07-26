"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCheck,
  FaCopy,
} from "react-icons/fa";
import Headline from "./ui/Headline";

export default function ContactSection({ dictionary }) {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(dictionary.contact.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Headline text={dictionary.contact.title} />

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.03)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.03)_75%,rgba(255,255,255,0.03)_76%,transparent_77%)] bg-[length:20px_20px]"></div>
        </div>

        {/* Main content container with improved backdrop */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Content backdrop for better readability */}
          <div className="absolute inset-0 -m-8 bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl"></div>

          <div className="relative z-10 p-8">
            {/* Enhanced subtitle with better visibility */}
            <div className="relative mb-8">
              <h3 className="text-xl md:text-2xl text-gray-100 font-cabin relative z-10 drop-shadow-md">
                {dictionary.contact.subtitle}
              </h3>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-md"></div>
            </div>

            {/* Invitation text with enhanced readability */}
            <p className="text-lg md:text-xl mb-12 text-gray-200 font-cabin max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {dictionary.contact.invitation}
            </p>

            {/* CTA with enhanced visibility */}
            <div className="mb-12">
              <p className="text-2xl md:text-3xl font-bold text-cyan-300 mb-8 font-orbitron drop-shadow-lg">
                {dictionary.contact.cta}
              </p>
            </div>
          </div>

          {/* Premium contact methods grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email card - Premium glassmorphism design */}
            <div className="group relative transform hover:scale-105 transition-all duration-500 h-full">
              {/* Multi-layered glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-2xl border border-pink-500/30 rounded-2xl p-8 group-hover:border-pink-400/60 transition-all duration-500 shadow-2xl h-full flex flex-col">
                {/* Icon with floating animation */}
                <div className="flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-pink-500/20 to-rose-500/20 p-4 rounded-2xl border border-pink-400/30 group-hover:border-pink-300/50 transition-all duration-300">
                    <FaEnvelope className="text-3xl text-pink-300 drop-shadow-lg" />
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-4 font-orbitron drop-shadow-md">
                  Email
                </h4>

                <div className="flex-1 flex flex-col">
                  <p className="text-gray-300 text-sm mb-4 font-cabin bg-black/20 rounded-lg p-3 border border-pink-500/10">
                    {dictionary.contact.email}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30 text-pink-300 hover:text-pink-200 text-sm font-medium px-4 py-2 rounded-xl border border-pink-400/30 hover:border-pink-300/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black backdrop-blur-sm"
                      aria-label={dictionary.contact.social.copy_email}
                    >
                      {emailCopied ? (
                        <>
                          <FaCheck className="w-4 h-4 animate-pulse" />
                          <span className="text-green-300 font-semibold">
                            {dictionary.contact.social.copied_email}
                          </span>
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4" />
                          <span>{dictionary.contact.social.copy_email}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn card - Premium glassmorphism design */}
            <div className="group relative transform hover:scale-105 transition-all duration-500 h-full">
              {/* Multi-layered glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-2xl border border-blue-500/30 rounded-2xl p-8 group-hover:border-blue-400/60 transition-all duration-500 shadow-2xl h-full flex flex-col">
                {/* Icon with floating animation */}
                <div className="flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl border border-blue-400/30 group-hover:border-blue-300/50 transition-all duration-300">
                    <FaLinkedin className="text-3xl text-blue-300 drop-shadow-lg" />
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-4 font-orbitron drop-shadow-md">
                  LinkedIn
                </h4>

                <div className="flex-1 flex flex-col">
                  <p className="text-gray-300 text-sm mb-4 font-cabin bg-black/20 rounded-lg p-3 border border-blue-500/10">
                    {dictionary.contact.linkedin}
                  </p>
                  <Link
                    href="https://linkedin.com/in/mariafernandavillalobos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-300 hover:text-blue-200 text-sm font-medium px-4 py-2 rounded-xl border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black backdrop-blur-sm"
                    aria-label={dictionary.contact.social.linkedin}
                  >
                    {dictionary.contact.social.linkedin}
                  </Link>
                </div>
              </div>
            </div>

            {/* GitHub card - Premium glassmorphism design */}
            <div className="group relative transform hover:scale-105 transition-all duration-500 h-full">
              {/* Multi-layered glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-2xl border border-purple-500/30 rounded-2xl p-8 group-hover:border-purple-400/60 transition-all duration-500 shadow-2xl h-full flex flex-col">
                {/* Icon with floating animation */}
                <div className="flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-purple-500/20 to-violet-500/20 p-4 rounded-2xl border border-purple-400/30 group-hover:border-purple-300/50 transition-all duration-300">
                    <FaGithub className="text-3xl text-purple-300 drop-shadow-lg" />
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-4 font-orbitron drop-shadow-md">
                  GitHub
                </h4>

                <div className="flex-1 flex flex-col">
                  <p className="text-gray-300 text-sm mb-4 font-cabin bg-black/20 rounded-lg p-3 border border-purple-500/10">
                    {dictionary.contact.github}
                  </p>
                  <Link
                    href="https://github.com/MariferVL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-violet-500/20 hover:from-purple-500/30 hover:to-violet-500/30 text-purple-300 hover:text-purple-200 text-sm font-medium px-4 py-2 rounded-xl border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black backdrop-blur-sm"
                    aria-label={dictionary.contact.social.github}
                  >
                    {dictionary.contact.social.github}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced decorative elements */}
          <div className="relative pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        {/* Enhanced floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse opacity-40 blur-sm"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-40 animation-delay-500 blur-sm"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-pulse opacity-40 animation-delay-1000 blur-sm"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse opacity-40 animation-delay-1500 blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
