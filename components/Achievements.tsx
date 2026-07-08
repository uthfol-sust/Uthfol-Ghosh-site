"use client";

import { motion } from "framer-motion";
import { Award, Medal, Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Achievements"
          title="Recognition that reflects execution, leadership, and competitive consistency."
          description="A compact timeline of accomplishments that matter to my engineering story and community involvement."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/55 text-cyan-300">
                {index === 0 ? <Medal className="h-5 w-5" /> : index === 1 ? <Trophy className="h-5 w-5" /> : <Award className="h-5 w-5" />}
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.32em] text-cyan-200/70">
                {item.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-300">{item.result}</p>
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