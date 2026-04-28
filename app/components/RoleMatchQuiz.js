"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";

const questions = [
  {
    id: "team-type",
    prompt: "What type of team are you hiring for today?",
    options: [
      {
        label: "Fast-moving startup team",
        scores: { ownership: 2, delivery: 2, product: 1 },
      },
      {
        label: "Scaling team balancing speed and process",
        scores: { ownership: 2, collaboration: 2, impact: 1 },
      },
      {
        label: "Structured enterprise team",
        scores: { quality: 2, collaboration: 2, reliability: 1 },
      },
      {
        label: "A mix of all of the above",
        scores: { adaptability: 2, collaboration: 1, delivery: 1 },
      },
    ],
  },
  {
    id: "work-style",
    prompt: "Which work style is most important for this hire?",
    options: [
      {
        label: "Own features end-to-end",
        scores: { ownership: 3, delivery: 1 },
      },
      {
        label: "Cross-team collaboration and communication",
        scores: { collaboration: 3, impact: 1 },
      },
      {
        label: "Strong execution under timelines",
        scores: { delivery: 3, reliability: 1 },
      },
      {
        label: "Mentoring and raising team quality",
        scores: { quality: 2, collaboration: 2 },
      },
    ],
  },
  {
    id: "priority",
    prompt: "What is your highest hiring priority this quarter?",
    options: [
      {
        label: "Shipping user-facing impact quickly",
        scores: { impact: 3, product: 1 },
      },
      {
        label: "Improving reliability and scalability",
        scores: { reliability: 3, quality: 1 },
      },
      {
        label: "Building better internal processes",
        scores: { quality: 2, collaboration: 2 },
      },
      {
        label: "Balancing all three",
        scores: { adaptability: 2, impact: 1, reliability: 1 },
      },
    ],
  },
  {
    id: "focus",
    prompt: "Where should this person create the strongest impact?",
    options: [
      {
        label: "Customer-facing product development",
        scores: { product: 3, impact: 1 },
      },
      {
        label: "Full-stack execution across frontend + backend",
        scores: { ownership: 2, delivery: 2 },
      },
      {
        label: "Platform and architecture improvements",
        scores: { reliability: 2, quality: 2 },
      },
      {
        label: "Data or AI-enabled product features",
        scores: { impact: 2, adaptability: 2 },
      },
    ],
  },
];

const signalCopy = {
  ownership: "End-to-end ownership from planning to delivery",
  collaboration: "Strong collaboration across engineering and business teams",
  delivery: "Consistent execution with clear timelines and momentum",
  product: "Product-minded decisions focused on user outcomes",
  quality: "High engineering quality and maintainable systems",
  reliability: "Scalable, reliable systems thinking",
  impact: "Business impact through practical technical decisions",
  adaptability: "Flexibility across team styles, tools, and priorities",
};

function buildResult(answers) {
  const totals = {};

  for (const answer of answers) {
    for (const [key, value] of Object.entries(answer.scores)) {
      totals[key] = (totals[key] || 0) + value;
    }
  }

  const topSignals = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key]) => key);

  const hasOwnership = topSignals.includes("ownership");
  const hasDelivery = topSignals.includes("delivery");
  const hasReliability = topSignals.includes("reliability");
  const hasCollaboration = topSignals.includes("collaboration");
  const hasImpact = topSignals.includes("impact");
  const hasProduct = topSignals.includes("product");

  let fitTitle = "Strong fit for product-driven engineering teams";
  let roleProfile = "Best aligned role profile: Senior Full-Stack Engineer";
  let recruiterSummary =
    "Delivers measurable outcomes while balancing product thinking, execution speed, and code quality.";

  if (hasReliability && hasCollaboration) {
    fitTitle = "Strong fit for scaling and enterprise delivery teams";
    roleProfile = "Best aligned role profile: Senior Engineer for Scaling Teams";
    recruiterSummary =
      "Brings structure, reliable delivery, and cross-team communication needed in larger organizations.";
  }

  if (hasOwnership && hasDelivery) {
    fitTitle = "Strong fit for high-ownership full-stack roles";
    roleProfile = "Best aligned role profile: High-Ownership Product Engineer";
    recruiterSummary =
      "Operates independently, ships quickly, and turns business needs into production-ready features.";
  }

  if (hasImpact && hasProduct) {
    roleProfile = "Best aligned role profile: Product-Focused Senior Engineer";
    recruiterSummary =
      "Prioritizes user value and business impact, with strong judgment on what to build and why.";
  }

  return {
    fitTitle,
    roleProfile,
    recruiterSummary,
    strengths: topSignals.map((signal) => signalCopy[signal]),
  };
}

export default function RoleMatchQuiz() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const completed = answers.length === questions.length;

  const result = useMemo(() => buildResult(answers), [answers]);

  const selectOption = (option) => {
    const updated = [...answers, option];
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setStarted(true);
  };

  const progress = Math.round(((answers.length + (completed ? 0 : 1)) / questions.length) * 100);

  return (
    <section id="role-match" className="relative py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl border border-indigo-500/20 bg-linear-to-b from-indigo-500/10 to-transparent p-6 sm:p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <p className="text-xs uppercase tracking-[0.24em] text-indigo-300">Recruiter Quick View</p>
          <span className="text-xs text-gray-400">Optional and under 45 seconds</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Hiring Fit Snapshot</h2>
        <p className="text-gray-300 mb-8 max-w-2xl">
          A 30-second check to quickly map your hiring priorities to my role fit.
        </p>

        <AnimatePresence mode="wait">
          {!started && (
            <motion.div
              key="start"
              className="rounded-2xl border border-white/10 bg-black/20 p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-200 mb-6">Answer 4 short prompts and get a recruiter-friendly fit summary.</p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  type="button"
                  onClick={() => setStarted(true)}
                  className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Quiz
                </motion.button>
                <motion.a
                  href="#experience"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-gray-200 hover:text-white hover:border-white/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Skip to Experience
                </motion.a>
              </div>
            </motion.div>
          )}

          {started && !completed && (
            <motion.div
              key="question"
              className="rounded-2xl border border-white/10 bg-black/20 p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <span>
                  Question {step + 1} of {questions.length}
                </span>
                <span>{progress}%</span>
              </div>

              <div className="w-full h-2 rounded-full bg-white/10 mb-6 overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-indigo-500 to-cyan-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <motion.h3
                className="text-lg sm:text-xl text-white font-semibold mb-5"
                key={`question-${step}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {questions[step].prompt}
              </motion.h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {questions[step].options.map((option, idx) => (
                  <motion.button
                    key={option.label}
                    type="button"
                    onClick={() => selectOption(option)}
                    className="text-left px-4 py-3 rounded-xl border border-white/15 bg-white/3 hover:bg-white/8 hover:border-indigo-400/50 text-gray-100 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {started && completed && (
            <motion.div
              key="result"
              className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-emerald-300 text-sm font-semibold mb-2">Result</p>
              <h3 className="text-xl sm:text-2xl text-white font-bold mb-4">{result.fitTitle}</h3>
              <p className="text-gray-100 mb-2 font-medium">{result.roleProfile}</p>
              <p className="text-gray-200 mb-5">{result.recruiterSummary}</p>
              <p className="text-gray-200 mb-4">Top strengths aligned to your answers:</p>

              <ul className="space-y-2 mb-7">
                {result.strengths.map((strength, idx) => (
                  <motion.li
                    key={strength}
                    className="text-gray-100"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    - {strength}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={profile.resume}
                  download
                  className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-gray-100 hover:border-white/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-gray-100 hover:border-white/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
                <motion.button
                  type="button"
                  onClick={restart}
                  className="px-5 py-2.5 rounded-full border border-indigo-300/40 text-indigo-200 hover:text-white hover:border-indigo-200/70 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Retake Quiz
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
