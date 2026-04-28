"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";

const links = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-indigo-500/20 shadow-2xl shadow-indigo-950/20"
          : "bg-gradient-to-b from-[#0a0a0f]/60 to-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-pink-300 transition-all"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          DN
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l, idx) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <motion.a
                href={l.href}
                className="text-sm font-medium text-gray-400 hover:text-indigo-300 transition-colors duration-200 relative group"
                whileHover={{ x: 2 }}
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: links.length * 0.05 }}
          >
            <motion.a
              href={profile.resume}
              download
              className="text-sm font-medium text-gray-400 hover:text-indigo-300 transition-colors duration-200 relative group"
              whileHover={{ x: 2 }}
            >
              Resume
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (links.length + 1) * 0.05 }}
          >
            <motion.a
              href="#contact"
              className="text-sm btn btn-primary"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </motion.li>
        </ul>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-indigo-500/20 px-6 py-6 shadow-2xl shadow-indigo-950/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-4">
              {links.map((l, idx) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <motion.a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-gray-400 hover:text-indigo-300 transition-colors relative block group"
                    whileHover={{ x: 5 }}
                  >
                    {l.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
              >
                <motion.a
                  href={profile.resume}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-400 hover:text-indigo-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Resume
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (links.length + 1) * 0.05 }}
              >
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm btn btn-primary block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
