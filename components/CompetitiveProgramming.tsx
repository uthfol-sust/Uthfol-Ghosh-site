"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, ExternalLink, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import type { PlatformStats } from "@/lib/cpStats";

type CpStatsResponse = {
  stats: PlatformStats[];
};

const PLATFORM_META: Record<
  PlatformStats["platform"],
  { label: string; accent: string }
> = {
  codeforces: {
    label: "Codeforces",
    accent: "from-cyan-400/10 via-white/5 to-fuchsia-400/10",
  },
  leetcode: {
    label: "LeetCode",
    accent: "from-amber-400/10 via-white/5 to-orange-400/10",
  },
  codechef: {
    label: "CodeChef",
    accent: "from-emerald-400/10 via-white/5 to-cyan-400/10",
  },
};

export default function CompetitiveProgramming() {
  const [data, setData] = useState<CpStatsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      try {
        const res = await fetch("/api/cp-stats");

        if (!res.ok) {
          throw new Error("Failed to load CP stats");
        }

        const json = (await res.json()) as CpStatsResponse;

        if (isMounted) {
          setData(json);
        }
      } catch {
        if (isMounted) {
          setData({ stats: [] });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const stats = data?.stats ?? [];

  const totalSolved =
    stats.reduce((sum, s) => sum + s.problemsSolved, 0) + 50;

  const totalContests = stats.reduce(
    (sum, s) => sum + s.contestsParticipated,
    0
  );

  return (
    <section
      id="competitive-programming"
      className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Competitive Programming"
        />

        {/* Summary */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <SummaryTile
            icon={<Code2 className="h-4 w-4 text-cyan-300" />}
            value={isLoading ? "—" : totalSolved}
            label="Total problems solved"
          />

          <SummaryTile
            icon={<Trophy className="h-4 w-4 text-emerald-300" />}
            value={isLoading ? "—" : totalContests}
            label="Total contests participated"
          />
        </div>

        {/* Platform Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading &&
            [0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded-4xl border border-white/10 bg-white/5"
              />
            ))}

          {!isLoading &&
            stats.map((stat, i) => (
              <PlatformCard
                key={stat.platform}
                stat={stat}
                delay={i * 0.08}
              />
            ))}

          {!isLoading && <OtherOJCard delay={0.24} />}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Online Judge Card
--------------------------------------------- */

function PlatformCard({
  stat,
  delay,
}: {
  stat: PlatformStats;
  delay: number;
}) {
  const meta = PLATFORM_META[stat.platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      className={`rounded-4xl border border-white/10 bg-gradient-to-br ${meta.accent} p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-zinc-300">
          <Cpu className="h-4 w-4 text-cyan-300" />
          {meta.label}
        </div>

        <a
          href={stat.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-2 text-sm text-zinc-400">
        @{stat.handle}
      </div>

      {stat.error ? (
        <p className="mt-6 text-sm text-rose-300/80">
          Couldn&apos;t load live stats right now.
        </p>
      ) : (
        <div className="mt-8">
          <StatRow
            label="Problems solved"
            value={stat.problemsSolved}
          />
        </div>
      )}
    </motion.div>
  );
}

/* ---------------------------------------------
   Other Online Judges
--------------------------------------------- */

function OtherOJCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      className="rounded-4xl border border-white/10 bg-gradient-to-br from-violet-400/10 via-white/5 to-pink-400/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
    >
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-zinc-300">
        <Cpu className="h-4 w-4 text-violet-300" />
        Other OJ
      </div>

      <div className="mt-2 text-sm text-zinc-400">
        Multiple online judges
      </div>

      <div className="mt-8">
        <StatRow
          label="Problems solved"
          value={50}
        />
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------
   Stat Row
--------------------------------------------- */

function StatRow({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-4">
      <div className="text-sm text-zinc-400">{label}</div>

      <div className="text-2xl font-semibold text-white">
        {value}
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Summary Tile
--------------------------------------------- */

function SummaryTile({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
      {icon}

      <div>
        <div className="text-2xl font-semibold text-white">
          {value}
        </div>

        <div className="text-sm text-zinc-400">
          {label}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Section Title
--------------------------------------------- */

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