"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Quote,
  Code2,
  Cpu,
  Target,
  GraduationCap,
  Star,
  Users,
  Lightbulb,
  MessageCircle,
  GitMerge,
  Wrench,
  Server,
  Layout,
  Brain,
  Trophy,
} from "lucide-react";
import { aboutHighlights, education, portfolio } from "@/data/portfolio";

const stats = [
  { value: "800+", label: "Problems Solved" },
  { value: "10+", label: "Projects Shipped" },
  { value: "4+", label: "ML / NLP Research" },
];

const techStack = [
  "Go", "C++", "Python", "Next.js", "React", "PostgreSQL", "Redis", "Docker", "Kubernetes",
];

const highlights = [
  { icon: Cpu, label: "Backend Focus", desc: "Clean architecture, reliable APIs" },
  { icon: Code2, label: "Competitive", desc: "800+ problems solved" },
  { icon: Target, label: "Systems Mindset", desc: "Observable & testable design" },
];

const skillGroups = [
  { category: "Backend Development", icon: Server },
  { category: "Frontend Development", icon: Layout },
  { category: "Competitive Programmer", icon: Trophy },
  { category: "AI / ML", icon: Brain },
];

const softSkills = [
  { icon: Users, label: "Team Collaboration" },
  { icon: MessageCircle, label: "Technical Communication" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Star, label: "Continuous & Fast Learner" },
  { icon: GitMerge, label: "Leadership" },
];

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Tech Skills", icon: Wrench },
  { id: "soft", label: "Soft Skills", icon: Users },
] as const;

const currentFocus = [
  "Competing in a Kaggle hallucination-detection challenge for Bengali text",
  "Training a Bangla vision-language distillation model",
  "Building this portfolio with Next.js and Framer Motion",
];

type TabId = (typeof tabs)[number]["id"];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabId>("education");

  const contentRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
      const id = window.setInterval(() => {
        setFocusIndex((i) => (i + 1) % currentFocus.length);
      }, 4500);
      return () => window.clearInterval(id);
    }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setTrackHeight(entry.contentRect.height);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden px-6 pb-20 pt-0 sm:px-8 lg:px-10 lg:pb-28 lg:-mt-4">
      <style>{`
        @keyframes bright-move {
          0% { background-position-y: 0%; }
          50% { background-position-y: 100%; }
          100% { background-position-y: 0%; }
        }
      `}</style>
      <div className="absolute right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Who I'm"
          title="Undergraduate Software Engineering Student"
          description={portfolio.aboutSummary}
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* quick-glance stats */}
<div className="mt-6 grid grid-cols-3 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] py-4">
  {stats.map((stat) => (
    <div key={stat.label} className="text-center">
      <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
        {stat.value}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500">
        {stat.label}
      </p>
    </div>
  ))}
</div>

{/* core stack */}
<div className="mt-6">
  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
    Core Stack
  </p>
  <div className="mt-2.5 flex flex-wrap gap-2">
    {techStack.map((tech) => (
      <span
        key={tech}
        className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

            <div className="relative mt-6">
              <Quote className="absolute -left-1 -top-1 h-8 w-8 text-cyan-300/15" />
              <p className="pl-6 text-lg leading-9 text-zinc-200 sm:text-xl">
                <span className="font-medium text-white">{"Working On"}</span>
              </p>
            </div>

            <div className="mt-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                Currently
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={focusIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="truncate text-xs text-zinc-300"
                >
                  {currentFocus[focusIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-colors hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                  >
                    <Icon className="h-4 w-4 text-cyan-300/70 transition-colors group-hover:text-cyan-300" />
                    <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div>
              <div className="flex border-b border-white/10 px-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-3 text-xs font-medium transition-colors ${
                        isActive
                          ? "text-cyan-300"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="relative px-6 py-5 pl-6">
                <div
                  className="absolute left-[17px] top-0 w-px"
                  style={{
                    height: trackHeight || "100%",
                    background: "linear-gradient(to bottom, transparent 0%, rgba(34,211,238,1) 48%, rgba(34,211,238,1) 52%, transparent 100%)",
                    backgroundSize: "100% 400%",
                    animation: trackHeight ? "bright-move 4s ease-in-out infinite" : "none",
                  }}
                />

                <div ref={contentRef}>
                  <AnimatePresence mode="wait">
                    {activeTab === "education" && (
                      <motion.div
                        key="education"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="pl-3"
                      >
                        <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-white sm:text-base">
                                {education.degree}
                              </p>
                              <p className="mt-1 text-sm text-zinc-400">{education.institution}</p>
                            </div>
                            <div className="shrink-0 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5 text-center">
                              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-cyan-300/70">
                                CGPA
                              </p>
                              <p className="mt-0.5 text-sm font-semibold text-cyan-200">
                                {education.cgpa}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-zinc-400">
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {education.status}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {education.focus.map((item) => (
                              <span
                                key={item}
                                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-400"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "skills" && (
                      <motion.div
                        key="skills"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="pl-3"
                      >
                        <div className="space-y-2">
                          {skillGroups.map((group) => {
                            const Icon = group.icon;
                            return (
                              <div
                                key={group.category}
                                className="flex items-center gap-3 rounded-[10px] border border-white/[0.04] bg-white/[0.01] px-3 py-3"
                              >
                                <Icon className="h-4 w-4 shrink-0 text-cyan-300/60" />
                                <span className="text-sm text-zinc-300">{group.category}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "soft" && (
                      <motion.div
                        key="soft"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="pl-3"
                      >
                        <div className="divide-y divide-white/[0.03] rounded-[10px] border border-white/[0.04] bg-white/[0.01]">
                          {softSkills.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.label}
                                className="flex items-center gap-3 px-3 py-3"
                              >
                                <Icon className="h-4 w-4 shrink-0 text-cyan-300/60" />
                                <span className="text-sm text-zinc-300">{item.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <span className="flex h-1.5 w-1.5 items-center justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-cyan-300/30" />
        </span>
        {eyebrow}
      </div>
      <h2 className="mt-5 text-nowrap text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400 sm:text-1xl">{description}</p>
    </div>
  );
}