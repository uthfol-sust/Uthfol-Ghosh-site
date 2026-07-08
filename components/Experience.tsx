"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CircleDot } from "lucide-react";
import { experienceTimeline } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Experience"
          title="A timeline of technical growth, discipline, and systems thinking."
          description="This section emphasizes the milestones that shaped my engineering approach, from study to projects and disciplined problem solving."
        />

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-white/15 to-transparent sm:left-8" />

          <div className="space-y-6">
            {experienceTimeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="relative pl-14 sm:pl-20"
              >
                <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 shadow-[0_0_0_6px_rgba(255,255,255,0.02)] sm:h-12 sm:w-12">
                  <CircleDot className="h-4 w-4 text-cyan-300" />
                </div>

                <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm text-zinc-300">
                      <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
                      {item.organization}
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
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