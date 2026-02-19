"use client";
import { useEffect, useRef } from "react";
import { skills } from "../data/resume";

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-green-500 to-emerald-500",
  "Databases": "from-orange-500 to-amber-500",
  "Cloud & DevOps": "from-purple-500 to-violet-500",
  "AI & ML": "from-pink-500 to-rose-500",
  Tools: "from-gray-400 to-gray-600",
};

const badgeColors = {
  Frontend: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400/50",
  Backend: "bg-green-500/10 text-green-300 border-green-500/20 hover:border-green-400/50",
  Databases: "bg-orange-500/10 text-orange-300 border-orange-500/20 hover:border-orange-400/50",
  "Cloud & DevOps": "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/50",
  "AI & ML": "bg-pink-500/10 text-pink-300 border-pink-500/20 hover:border-pink-400/50",
  Tools: "bg-gray-500/10 text-gray-300 border-gray-500/20 hover:border-gray-400/50",
};

export default function Skills() {
  const sectionRef = useRef(null);

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
    <section id="skills" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">What I Work With</p>
          <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="section-fade card-hover bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`w-1 h-8 rounded-full bg-gradient-to-b ${categoryColors[group.category] ?? "from-indigo-500 to-purple-500"}`}
                />
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
                      badgeColors[group.category] ?? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
