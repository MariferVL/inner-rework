"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavigationMenu({ dictionary, lang }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setTimeout(() => {
        document.querySelector("#mobile-menu-panel a")?.focus();
      }, 100);
    } else {
      menuButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: `#home`, text: dictionary.nav.home },
    { href: `#about`, text: dictionary.nav.about },
    { href: `#projects`, text: dictionary.nav.projects },
    { href: `#contact`, text: dictionary.nav.contact },
  ];

  return (
    <>
      <div className="lg:hidden">
        <button
          ref={menuButtonRef}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 text-white focus:outline-none"
          aria-label={
            isMobileMenuOpen
              ? dictionary.nav.menu_close_aria_label
              : dictionary.nav.menu_open_aria_label
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-panel"
        >
          <svg
            className="h-8 w-8 text-cyan-400 [--glow-color:theme(colors.cyan.400)] [filter:drop-shadow(0_0_3px_var(--glow-color))] hover:[filter:drop-shadow(0_0_6px_var(--glow-color))] transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`[transform-origin:12px_6px] transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
              d="M4 6h16"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
              d="M4 12h10"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`[transform-origin:12px_18px] transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
              d="M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu-panel"
        className={`fixed top-0 left-0 h-full w-full bg-[#0a0a0a]/80 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="text-center">
            {navLinks.map((link, index) => (
              <li key={index} className="my-4">
                <Link
                  href={`/${lang}${link.href}`}
                  className="block py-2 text-2xl nav-link inline-block"
                  onClick={closeAllMenus}
                  aria-label={link.text}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex flex-grow justify-center">
        <ul className="flex px-8 items-center bg-[#02020754] rounded-md shadow-lg">
          <li className="nav-item p-4">
            <Link href={`/${lang}#home`} className="nav-link inline-block">
              {dictionary.nav.home}
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link href={`/${lang}#about`} className="nav-link inline-block">
              {dictionary.nav.about}
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link href={`/${lang}#projects`} className="nav-link inline-block">
              {dictionary.nav.projects}
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link href={`/${lang}#contact`} className="nav-link inline-block">
              {dictionary.nav.contact}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
