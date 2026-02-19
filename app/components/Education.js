"use client";
import { useEffect, useRef } from "react";
import { education } from "../data/resume";

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Academic Background</p>
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="section-fade card-hover bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-wrap justify-between items-center gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl shrink-0">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-snug">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{edu.period}</p>
                </div>
              </div>
              <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold px-4 py-2 rounded-full text-sm">
                {edu.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
