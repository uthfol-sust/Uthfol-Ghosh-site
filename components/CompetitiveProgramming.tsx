"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Trophy } from "lucide-react";
import { competitiveProgrammingStats } from "@/data/portfolio";

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Competitive Programming"
          title="A problem-solving dashboard built on speed, consistency, and pattern recognition."
          description="My competitive programming routine sharpened my ability to think under pressure and translate algorithmic ideas into correct, efficient implementations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {competitiveProgrammingStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-5">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-zinc-300">
                <Code2 className="h-4 w-4 text-cyan-300" />
                Languages and platforms
              </div>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                C++ and Go are my primary contest languages, with practice spanning
                Codeforces, CodeChef, and LeetCode.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-4xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-white/5 to-cyan-400/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-zinc-300">
              <Trophy className="h-4 w-4 text-emerald-300" />
              Contest profile
            </div>

            <div className="mt-6 space-y-4">
              {[
                { label: "800+", text: "Problems solved" },
                { label: "60+", text: "Contests participated" },
                { label: "C++", text: "Primary speed language" },
                { label: "Go", text: "Systems-friendly contest tool" },
              ].map((item) => (
                <div key={item.text} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3">
                  <div>
                    <div className="text-xl font-semibold text-white">{item.label}</div>
                    <div className="text-sm text-zinc-400">{item.text}</div>
                  </div>
                  <Cpu className="h-5 w-5 text-cyan-300" />
                </div>
              ))}
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