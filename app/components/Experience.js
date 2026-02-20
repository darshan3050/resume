"use client";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/resume";

const projectMeta = [
  { icon: "🤖", gradient: "from-violet-500 to-indigo-500", glow: "rgba(139,92,246,0.2)", badge: "bg-violet-500/10 text-violet-300 border-violet-500/25 hover:bg-violet-500/20" },
  { icon: "🔄", gradient: "from-cyan-500 to-blue-500",   glow: "rgba(6,182,212,0.2)",   badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25 hover:bg-cyan-500/20" },
  { icon: "📣", gradient: "from-rose-500 to-pink-500",   glow: "rgba(244,63,94,0.2)",   badge: "bg-rose-500/10 text-rose-300 border-rose-500/25 hover:bg-rose-500/20" },
  { icon: "📊", gradient: "from-amber-500 to-orange-500", glow: "rgba(245,158,11,0.2)", badge: "bg-amber-500/10 text-amber-300 border-amber-500/25 hover:bg-amber-500/20" },
  { icon: "🎓", gradient: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.2)", badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25 hover:bg-emerald-500/20" },
  { icon: "👥", gradient: "from-sky-500 to-indigo-400",  glow: "rgba(14,165,233,0.2)",  badge: "bg-sky-500/10 text-sky-300 border-sky-500/25 hover:bg-sky-500/20" },
];

const stackPalette = [
  "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
  "bg-purple-500/10 text-purple-300 border-purple-500/25",
  "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
  "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  "bg-rose-500/10 text-rose-300 border-rose-500/25",
  "bg-amber-500/10 text-amber-300 border-amber-500/25",
  "bg-sky-500/10 text-sky-300 border-sky-500/25",
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-fade");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="section-fade text-center mb-20">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-[0.3em] mb-3">Where I&apos;ve Worked</p>
          <h2 className="text-5xl font-extrabold text-white">Work Experience</h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Real-world products built end-to-end, from architecture to delivery.
          </p>
        </div>

        {experiences.map((job) => (
          <div key={job.company} className="section-fade">

            {/* Company banner card */}
            <div className="relative rounded-3xl overflow-hidden mb-10 border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8">
              {/* decorative gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl" />
              <div className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative flex flex-wrap justify-between items-center gap-6">
                <div className="flex items-center gap-5">
                  {/* Company logo placeholder */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-indigo-500/30 shrink-0">
                    {job.company[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                    <p className="text-indigo-400 font-semibold text-lg mt-0.5">{job.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {job.period}
                  </span>
                  <span className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] text-gray-400 text-sm px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-sm font-medium px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    {job.projects.length} Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-start">
              {job.projects.map((project, i) => {
                const meta = projectMeta[i % projectMeta.length];
                const key = `${job.company}-${project.name}`;
                const isActive = activeProject === key;
                const isHovered = hoveredCard === key;

                return (
                  <div
                    key={project.name}
                    className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "border-white/20 bg-white/[0.05]"
                        : "border-white/[0.07] bg-white/[0.03] hover:border-white/[0.15]"
                    }`}
                    style={{
                      transitionDelay: `${i * 60}ms`,
                      boxShadow: isHovered || isActive ? `0 0 35px ${meta.glow}` : "none",
                    }}
                    onMouseEnter={() => setHoveredCard(key)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Color top bar */}
                    <div className={`h-[3px] w-full bg-gradient-to-r ${meta.gradient}`} />

                    <div className="p-7">
                      {/* Card header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-xl shadow-lg shrink-0`}>
                            {meta.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-xl leading-tight">{project.name}</h4>
                            <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">{project.description}</p>
                          </div>
                        </div>
                        {/* Expand toggle */}
                        <button
                          type="button"
                          aria-label={isActive ? `Collapse ${project.name}` : `Expand ${project.name}`}
                          onClick={() => setActiveProject((prev) => (prev === key ? null : key))}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all duration-300 ${
                            isActive ? "bg-white/10 border-white/20 rotate-180" : "border-white/10 bg-white/[0.03]"
                          }`}
                        >
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.stack.map((tech, idx) => (
                          <span
                            key={tech}
                            className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${stackPalette[idx % stackPalette.length]}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable bullet points */}
                      {isActive && (
                        <div className="mt-5 pt-5 border-t border-white/[0.07] space-y-3">
                          {project.points.map((point, idx) => (
                            <div key={idx} className="flex gap-3">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${meta.gradient} shrink-0`} />
                              <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
