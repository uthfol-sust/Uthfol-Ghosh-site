"use client";

import { motion } from "framer-motion";
import { Atom, Binary, Boxes, Cpu, DatabaseZap, Orbit } from "lucide-react";
import { researchTopics } from "@/data/portfolio";

const researchIcons = [Atom, Binary, Boxes];

export default function Research() {
  return (
    <section id="research" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Research & Exploration"
          title="An engineer's research dashboard focused on language, infrastructure, and scale."
          description="I am actively exploring the topics that shape modern AI systems and resilient platforms, from low-resource NLP to distributed infrastructure."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-5 md:grid-cols-3">
              {researchTopics.map((group, index) => {
                const Icon = researchIcons[index] ?? Cpu;

                return (
                  <div key={group.title} className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                    <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
                      <Icon className="h-4 w-4 text-cyan-300" />
                      {group.title}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-4xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-zinc-300">
              <Orbit className="h-4 w-4 text-cyan-300" />
              Research mode
            </div>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              I like building a mental map of systems that matter: model behavior,
              retrieval pipelines, message queues, storage internals, and the design
              choices that help software survive growth.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Large Language Models",
                "Bangla NLP",
                "Hallucination Detection",
                "RAG and Vector Databases",
                "Kafka and RabbitMQ",
                "Docker, Kubernetes, gRPC",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-zinc-200">
                  <DatabaseZap className="h-4 w-4 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
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
