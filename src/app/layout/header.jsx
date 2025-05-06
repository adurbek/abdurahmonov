"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Set active link based on scroll position
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = navLinks.map((link) => link.sectionId);
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < 100) {
        setActiveLink("Home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(navLinks.find((link) => link.sectionId === section)?.name || "Home");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }
      setActiveLink(navLinks.find((link) => link.sectionId === sectionId)?.name || "Home");
    }
  }, [pathname]);

  const handleLinkClick = (link, sectionId) => {
    setActiveLink(link);
    setIsOpen(false);

    if (pathname === "/") {
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/#hero", sectionId: "hero" },
    { name: "About", path: "/#about", sectionId: "about" },
    { name: "Services", path: "/#services", sectionId: "services" },
    { name: "Contact", path: "/#contact", sectionId: "contact" },
  ];

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link
          href="/#hero"
          className="flex items-center space-x-3"
          onClick={() => {
            setActiveLink("Home");
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="text-2xl font-bold text-white tracking-tight hover:text-indigo-400 transition-colors duration-300">
            Abdurahmonov
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="tel:+998883339607"
            className="text-lg hidden sm:flex items-center gap-1 text-gray-400 hover:text-white transition-all duration-300"
          >
            <span className="text-indigo-400 font-semibold">+998</span> 88 333 96 07
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center absolute md:static top-full left-0 bg-gray-900 md:bg-transparent`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 font-medium text-white">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block py-2 px-4 rounded-md transition-all duration-300 ${
                    activeLink === item.name
                      ? "bg-indigo-600 text-white md:bg-transparent md:text-indigo-400 md:border-b-2 md:border-indigo-400"
                      : "text-gray-300 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-indigo-400"
                  }`}
                  onClick={() => handleLinkClick(item.name, item.sectionId)}
                  scroll={false}
                  aria-current={activeLink === item.name ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;