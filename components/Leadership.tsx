"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Users } from "lucide-react";
import { leadershipItems } from "@/data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Leadership"
          title="Community work that sharpened communication, ownership, and judgment."
          description="Leadership for me means showing up consistently, carrying responsibility, and helping a team move with clarity."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {leadershipItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/70">
                <Users className="h-4 w-4 text-cyan-300" />
                Community
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-zinc-400">
                {item.organization}
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-300">{item.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
                <BadgeCheck className="h-4 w-4 text-emerald-300" />
                Leadership in action
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