"use client";

import { motion } from "framer-motion";
import {
  Medal,
  Trophy,
  HeartHandshake,
} from "lucide-react";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  const achievementItems = achievements.filter((item) => item.type === "achievement");
  const communityItems = achievements.filter((item) => item.type !== "achievement");

  return (
    <section
      id="achievements"
      className="px-6 py-2 sm:px-6 lg:px-8 lg:py-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Achievements & Leadership"
        />

        <Subsection title="Achievements" items={achievementItems} />
        <Subsection title="Leadership Activities" items={communityItems} />
      </div>
    </section>
  );
}

function Subsection({
  title,
  items,
}: {
  title: string;
  items: typeof achievements;
}) {
  return (
    <div className="mt-5 first:mt-12">
      <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-white/75 sm:text-xl">
        {title}
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.organization}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="group rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/20 hover:bg-white/[0.07]"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/55 text-cyan-300">
                {item.type === "achievement" ? (
                  index === 0 ? (
                    <Medal className="h-5 w-5" />
                  ) : (
                    <Trophy className="h-5 w-5" />
                  )
                ) : (
                  <HeartHandshake className="h-5 w-5" />
                )}
              </div>

              <div className="min-w-0">
                <p className="text-2xl font-semibold tracking-[0.02em] text-cyan-200/80 sm:text-2xl">
                  {item.category}
                </p>
                <h4 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white/70 sm:text-xl">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm font-medium text-zinc-400/80 sm:text-sm">
                  {item.organization}
                </p>
              </div>
            </div>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
              >
                view
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
}: {
  eyebrow: string;
 
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-cyan-300/30" />
        </span>
        {eyebrow}
      </div>
    </div>
  );
}