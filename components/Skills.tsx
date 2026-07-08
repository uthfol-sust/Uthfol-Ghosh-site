"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Engineering depth across backend systems, frontend polish, and applied AI."
          description="A carefully selected stack that reflects what I actually use to build production-ready applications, services, and experiments."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
                <ShieldCheck className="h-4 w-4" />
                {group.category}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-4xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-zinc-300">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            What this stack enables
          </div>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">
            Clean APIs, secure authentication, scalable data flows, elegant interfaces,
            fast iteration, and infrastructure that stays manageable as products grow.
          </p>
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
