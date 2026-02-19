"use client";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/resume";

const stackColors = [
  "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "bg-rose-500/10 text-rose-300 border-rose-500/20",
  "bg-amber-500/10 text-amber-300 border-amber-500/20",
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

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
    <section id="experience" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Where I've Worked</p>
          <h2 className="text-4xl font-bold text-white">Work Experience</h2>
        </div>

        {experiences.map((job) => (
          <div key={job.company} className="section-fade">
            {/* Company header */}
            <div className="flex flex-wrap justify-between items-start mb-10 pb-6 border-b border-white/[0.07]">
              <div>
                <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                <p className="text-indigo-400 font-semibold mt-1">{job.title}</p>
              </div>
              <div className="text-right mt-2">
                <span className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm px-3 py-1 rounded-full">
                  {job.period}
                </span>
                <p className="text-gray-500 text-sm mt-1">{job.location}</p>
              </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {job.projects.map((project, i) => (
                <div
                  key={project.name}
                  className={`section-fade card-hover bg-white/[0.03] border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    activeProject === `${job.company}-${project.name}`
                      ? "border-indigo-500/50 bg-indigo-500/5"
                      : "border-white/[0.07] hover:border-white/[0.15]"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                  onClick={() =>
                    setActiveProject((prev) =>
                      prev === `${job.company}-${project.name}` ? null : `${job.company}-${project.name}`
                    )
                  }
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="font-bold text-white text-lg">{project.name}</h4>
                    <span className="text-gray-500 text-xs mt-1 shrink-0">
                      {activeProject === `${job.company}-${project.name}` ? "▲" : "▼"}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={tech}
                        className={`text-xs px-2.5 py-0.5 rounded-full border ${stackColors[idx % stackColors.length]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable bullet points */}
                  {activeProject === `${job.company}-${project.name}` && (
                    <ul className="mt-2 space-y-2 border-t border-white/[0.07] pt-4">
                      {project.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                          <span className="text-indigo-400 mt-1 shrink-0">›</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
