"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resume";

const roles = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "Microservices Architect",
  "AI/ML Integrations Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#121218] to-[#0a0a0f]"
    >
      {/* Premium gradient orbs with enhanced blur */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary orb */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/25 rounded-full blur-3xl"
          variants={orbVariants}
          animate="animate"
        />
        {/* Secondary orb */}
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl"
          variants={orbVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        {/* Accent orb */}
        <motion.div
          className="absolute top-1/2 -left-20 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,10,15,0.3)] pointer-events-none" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Premium status badge */}
        <motion.div
          className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-indigo-300 text-sm px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.08, borderColor: "rgba(99, 102, 241, 0.6)" }}
        >
          <motion.span
            className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-medium tracking-wider">Open for Opportunities</span>
        </motion.div>

        {/* Premium name with gradient */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
            {profile.name}
          </span>
        </motion.h1>

        {/* Enhanced typewriter role with gradient */}
        <motion.div
          className="text-xl sm:text-3xl font-bold mb-8 h-12 flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {displayed}
          </span>
          <span className="cursor-blink ml-1" />
        </motion.div>

        {/* Enhanced tagline */}
        <motion.p
          className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light tracking-wide"
          variants={itemVariants}
        >
          {profile.tagline}
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          variants={itemVariants}
        >
          <motion.a
            href={profile.resume}
            download
            className="btn btn-primary"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Download Resume</span>
          </motion.a>
          <motion.a
            href="#experience"
            className="btn btn-secondary"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-7 py-3 rounded-lg border border-indigo-500/50 text-indigo-300 hover:text-white font-semibold transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-400"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
        </motion.div>

        {/* Social links section */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-16"
          variants={itemVariants}
        >
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-gray-400 hover:text-white transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/20"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-gray-400 hover:text-white transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/20"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-gray-400 hover:text-white transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/20"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Premium scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase font-semibold">Scroll to explore</span>
        <motion.svg
          className="w-5 h-5 text-indigo-500/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
