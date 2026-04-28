"use client";
import { motion } from "framer-motion";
import { education } from "../data/resume";

export default function Education() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-[0.3em] mb-3">Academic Background</p>
          <h2 className="text-5xl font-extrabold text-white">Education</h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">Continuous learning and academic excellence</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="card group relative p-7 flex flex-wrap justify-between items-center gap-4"
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.6)" }}
            >
              <div className="flex items-start gap-5">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600/30 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center text-2xl shrink-0 group-hover:border-indigo-400/60 transition-colors"
                  whileHover={{ rotate: 20, scale: 1.15 }}
                >
                  {edu.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-snug">{edu.degree}</h3>
                  <p className="text-indigo-300 text-sm mt-1 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                </div>
              </div>
              <motion.span
                className="bg-gradient-to-r from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 text-indigo-300 font-semibold px-5 py-2 rounded-lg text-sm group-hover:border-indigo-400/60 group-hover:bg-indigo-500/20 transition-all"
                whileHover={{ scale: 1.08 }}
              >
                {edu.score}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
