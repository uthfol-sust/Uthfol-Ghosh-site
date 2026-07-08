"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, LayoutGrid, NotebookPen } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected builds across backend systems, product interfaces, and game logic."
          description="These projects show how I think about architecture, tradeoffs, and user-facing quality across different problem spaces."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            >
              <div className={`relative h-56 bg-linear-to-br ${project.accent} p-6`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.75),rgba(2,6,23,0.95))]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
                    <span>Featured work</span>
                    <LayoutGrid className="h-4 w-4" />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                    <div className="flex items-center gap-3 text-white">
                      <NotebookPen className="h-4 w-4 text-cyan-300" />
                      Case study ready
                    </div>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-200/90">
                      Designed for maintainability, clear domain boundaries, and smooth scaling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-zinc-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-sm text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ProjectLink href={project.github} icon={FaGithub} label="GitHub" />
                  <ProjectLink href={project.live} icon={ExternalLink} label="Live Demo" />
                  <ProjectLink href={project.caseStudy} icon={ArrowUpRight} label="Case Study" />
                </div>
              </div>
            </motion.article>
          ))}
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
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/70">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-zinc-300 sm:text-lg">{description}</p>
    </div>
  );
}

function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}