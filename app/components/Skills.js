"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "../data/resume";

const categoryMeta = {
  Frontend: {
    icon: "🎨",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.25)",
    border: "hover:border-blue-500/50",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/25 hover:bg-blue-500/20 hover:border-blue-400",
    pill: "bg-blue-500/15 text-blue-200",
  },
  Backend: {
    icon: "⚙️",
    gradient: "from-emerald-500 to-green-400",
    glow: "rgba(16,185,129,0.25)",
    border: "hover:border-emerald-500/50",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400",
    pill: "bg-emerald-500/15 text-emerald-200",
  },
  Databases: {
    icon: "🗄️",
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.25)",
    border: "hover:border-orange-500/50",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/25 hover:bg-orange-500/20 hover:border-orange-400",
    pill: "bg-orange-500/15 text-orange-200",
  },
  "Cloud & DevOps": {
    icon: "☁️",
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.25)",
    border: "hover:border-violet-500/50",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/25 hover:bg-violet-500/20 hover:border-violet-400",
    pill: "bg-violet-500/15 text-violet-200",
  },
  "AI & ML": {
    icon: "🤖",
    gradient: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.25)",
    border: "hover:border-pink-500/50",
    badge: "bg-pink-500/10 text-pink-300 border-pink-500/25 hover:bg-pink-500/20 hover:border-pink-400",
    pill: "bg-pink-500/15 text-pink-200",
  },
  Tools: {
    icon: "🛠️",
    gradient: "from-slate-400 to-gray-500",
    glow: "rgba(148,163,184,0.2)",
    border: "hover:border-slate-400/50",
    badge: "bg-slate-500/10 text-slate-300 border-slate-500/25 hover:bg-slate-500/20 hover:border-slate-400",
    pill: "bg-slate-500/15 text-slate-200",
  },
};

const fallbackMeta = {
  icon: "💡",
  gradient: "from-indigo-500 to-purple-400",
  glow: "rgba(99,102,241,0.25)",
  border: "hover:border-indigo-500/50",
  badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25 hover:bg-indigo-500/20 hover:border-indigo-400",
  pill: "bg-indigo-500/15 text-indigo-200",
};

export default function Skills() {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-fade");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="section-fade text-center mb-20">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            What I Work With
          </p>
          <h2 className="text-5xl font-extrabold text-white">Technical Skills</h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            A toolkit built over years of shipping production-grade software.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {skills.map((group, i) => {
            const meta = categoryMeta[group.category] ?? fallbackMeta;
            const isHovered = hoveredCard === group.category;

            return (
              <div
                key={group.category}
                className={`section-fade relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 cursor-default transition-all duration-300 overflow-hidden ${meta.border}`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  boxShadow: isHovered ? `0 0 40px ${meta.glow}` : "none",
                }}
                onMouseEnter={() => setHoveredCard(group.category)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${meta.gradient} rounded-t-2xl`} />

                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${meta.glow}, transparent 70%)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-xl shadow-lg shrink-0`}
                  >
                    {meta.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{group.category}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${meta.pill}`}>
                      {group.items.length} skills
                    </span>
                  </div>
                </div>

                {/* Skill badges */}
                <div className="relative flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${meta.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
