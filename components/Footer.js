"use client";

import { FaHeart, FaCode, FaLocationArrow } from "react-icons/fa";

export default function Footer({ dictionary }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/80 backdrop-blur-sm border-t border-gray-800 py-8 mt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-pink-900/10"></div>

      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-1 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Main footer text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300">
            <span className="flex items-center gap-2 font-cabin">
              <FaCode className="text-cyan-400 text-sm" />
              {dictionary.footer.text}
            </span>
          </div>

          {/* Year and love indicator */}
          <div className="flex items-center gap-2 text-gray-400 text-sm font-cabin">
            <span>© {currentYear}</span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              {dictionary.footer.madeWith_part1}
              <FaHeart className="text-pink-400" />
              {dictionary.footer.madeWith_part2}
            </span>
          </div>

          {/* Tech stack indicator */}
          <div className="flex items-center gap-4 text-xs text-gray-500 font-orbitron">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Next.js 15
            </span>
            <span className="text-gray-600">•</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              React
            </span>
            <span className="text-gray-600">•</span>
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-500/30"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-pink-500/30"></div>
    </footer>
  );
}
