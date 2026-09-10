"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  ExternalLink,
  FlaskConical,
  GitBranch,
  Orbit,
} from "lucide-react";
import { researchTopics } from "@/data/portfolio";

export default function Research() {
  return (
    <section
      id="research"
      className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Research & Exploration"
          title="Diving into the Unknown"
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {/* ---------------------------------------------------------------- */}
          {/* Current Research                                                */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/5">
                <FlaskConical className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/60">
                  Active Work
                </p>

                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Current Research
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {researchTopics.currentResearch.map((research, index) => (
                <motion.article
                  key={research.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group rounded-3xl border border-white/10 bg-slate-950/55 p-5 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-950/75 sm:p-6"
                >
                  {/* Status + Title */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)]" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-200/60">
                          {research.status}
                        </span>
                      </div>

                      <h4 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-white">
                        {research.title}
                      </h4>
                    </div>

                    {research.publicationStatus && (
                      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">
                        {research.publicationStatus}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {research.description}
                  </p>

                  {/* Research Areas */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {research.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Research Links */}
                  {(research.paperUrl ||
                    research.githubUrl ||
                    research.datasetUrl) && (
                    <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                      {research.paperUrl && (
                        <a
                          href={research.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Paper
                        </a>
                      )}

                      {research.githubUrl && (
                        <a
                          href={research.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                        >
                          <GitBranch className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      )}

                      {research.datasetUrl && (
                        <a
                          href={research.datasetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                        >
                          <Database className="h-3.5 w-3.5" />
                          Dataset
                        </a>
                      )}
                    </div>
                  )}

                  {/* Hover arrow */}
                  <div className="mt-4 flex justify-end opacity-0 transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* Research Interests                                               */}
          {/* ---------------------------------------------------------------- */}

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-4xl border border-white/10 bg-linear-to-br from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/5">
                <Orbit className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/60">
                  Exploring
                </p>

                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Research Interests
                </h3>
              </div>
            </div>

            {/* Interest Grid */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {researchTopics.researchInterests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.035,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-zinc-200 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/5"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <BrainCircuit className="h-3.5 w-3.5 text-cyan-300" />
                  </div>

                  <span>{interest}</span>
                </motion.div>
              ))}
            </div>

          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section Title                                                              */
/* -------------------------------------------------------------------------- */

function SectionTitle({
  eyebrow,
  title
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
        <span className="flex h-1.5 w-1.5 items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-cyan-300/30" />
        </span>
        {eyebrow}
      </div>
      <h2 className="mt-5 text-nowrap text-2xl font-semibold tracking-[-0.04em] text-white/75 sm:text-4xl lg:text-3xl">
        {title}
      </h2>
      
    </div>
  );
}
