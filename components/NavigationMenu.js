"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavigationMenu({ dictionary, lang }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAllMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: `#home`, text: dictionary.nav.home },
    {
      isDropdown: true,
      text: dictionary.nav.aboutMe,
      dropdownLinks: [
        { href: `#about`, text: dictionary.nav.aboutMe },
        { href: `#tech`, text: "Tech Stack" },
        { href: `#projects`, text: dictionary.nav.projects },
        { isSeparator: true },
        { href: `#resume`, text: dictionary.nav.curriculum },
      ],
    },
    { href: `#life`, text: dictionary.nav.life },
    { href: `#contact`, text: dictionary.nav.contact },
  ];

  return (
    <>
      {/* ===== MENÚ MÓVIL ===== */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 text-white focus:outline-none"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
        className={`fixed top-0 left-0 h-full w-full bg-[#0a0a0a]/80 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="text-center">
            {navLinks.map((link, index) => (
              <li key={index} className="my-4">
                {link.isDropdown ? (
                  <>
                    {link.dropdownLinks.map((subLink, subIndex) =>
                      subLink.isSeparator ? (
                        <hr
                          key={`sep-${subIndex}`}
                          className="border-gray-600 my-4 w-40 mx-auto"
                        />
                      ) : (
                        <Link
                          key={subLink.href}
                          href={`/${lang}${subLink.href}`}
                          className="block py-2 text-2xl nav-link"
                          onClick={closeAllMenus}
                        >
                          {subLink.text}
                        </Link>
                      )
                    )}
                  </>
                ) : (
                  <Link
                    href={`/${lang}${link.href}`}
                    className="block py-2 text-2xl nav-link"
                    onClick={closeAllMenus}
                  >
                    {link.text}
                  </Link>
                )}
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
          <li
            className="nav-item p-4 relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-link flex items-center gap-1 whitespace-nowrap">
              {dictionary.nav.aboutMe}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 w-max bg-[#040310b1] list-none p-2 rounded-md animate-fade-in-down">
                <li>
                  <Link
                    href={`/${lang}#about`}
                    className="dropdown-link"
                    onClick={closeAllMenus}
                  >
                    {dictionary.nav.aboutMe}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}#tech`}
                    className="dropdown-link"
                    onClick={closeAllMenus}
                  >
                    Tech Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}#projects`}
                    className="dropdown-link"
                    onClick={closeAllMenus}
                  >
                    {dictionary.nav.projects}
                  </Link>
                </li>
                <li>
                  <hr className="border-gray-600 my-1" />
                </li>
                <li>
                  <Link
                    href={`/${lang}#resume`}
                    className="dropdown-link"
                    onClick={closeAllMenus}
                  >
                    {dictionary.nav.curriculum}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item p-4">
            <Link href={`/${lang}#life`} className="nav-link inline-block">
              {dictionary.nav.life}
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
