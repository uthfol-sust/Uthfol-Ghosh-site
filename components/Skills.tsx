"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { skillGroups } from "@/data/portfolio";

const skillIconColors: Record<string, string> = {
  Go: "text-sky-400",
  "C++": "text-blue-400",
  Python: "text-yellow-300",
  Java: "text-orange-400",
  JavaScript: "text-yellow-300",
  React: "text-cyan-300",
  "Next.js": "text-white",
  "Tailwind CSS": "text-sky-300",
  "Framer Motion": "text-pink-400",
  Gin: "text-cyan-300",
  "Node.js": "text-green-400",
  PostgreSQL: "text-blue-300",
  MySQL: "text-sky-300",
  MongoDB: "text-emerald-400",
  Redis: "text-red-400",
  Docker: "text-blue-400",
  Git: "text-orange-500",
  GitHub: "text-zinc-100",
  Linux: "text-yellow-200",
  TensorFlow: "text-orange-400",
};

export default function Skills() {
  return (
    <section id="skills" className="mt-0 pt-0">
      <div className="mx-auto max-w-7xl pt-0">
        <SectionTitle
          eyebrow="Skills"
          title="My Technical Stack"  
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="min-h-64 rounded-4xl border border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.40)] backdrop-blur-2xl sm:p-5 "
            >
              <div className="flex items-center gap-3 text-base font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                <ShieldCheck className="h-6 w-6" />
                {group.category}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4 *:sm:grid-cols-4 sm:gap-6 lg:grid-cols-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex min-h-36 cursor-pointer flex-col items-center justify-center gap-4 rounded-4xl  py-5 text-center text-base font-semibold text-zinc-200 transition"
                  >
                    <item.icon
                      className={`h-20 w-25 shrink-0 transition-transform group-hover:scale-110 ${
                        skillIconColors[item.name] ?? "text-cyan-300"
                      }`}
                    />
                    <span className="min-w-0 leading-tight">{item.name}</span>
                  </div>
                ))}
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
