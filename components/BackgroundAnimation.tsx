// components/BackgroundAnimation.tsx
"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

// Seeded PRNG so server & client produce identical positions (no hydration mismatch)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rng = seededRandom(137);

const STAR_COLORS = [
  "255,255,255",
  "255,255,255",
  "255,255,255",
  "255,248,240",
  "255,248,240",
  "200,220,255",
  "180,210,255",
  "160,200,255",
  "255,230,200",
  "220,190,255",
] as const;

const particles = Array.from({ length: 90 }, () => {
  const size = 0.6 + rng() * 2.8;
  const isAccent = size > 2.2;
  const color = isAccent
    ? STAR_COLORS[Math.floor(rng() * STAR_COLORS.length)]
    : "255,255,255";
  const blur = isAccent ? Math.floor(2 + rng() * 8) : size > 1.5 ? Math.floor(rng() * 3) : 0;

  return {
    left: `${rng() * 96 + 2}%`,
    top: `${rng() * 96 + 2}%`,
    size: Math.round(size * 10) / 10,
    blur,
    duration: 2.5 + rng() * 5,
    delay: rng() * 6,
    color,
    group: rng() > 0.85 ? "drift" : rng() > 0.5 ? "pulse" : "twinkle",
    driftX: (rng() - 0.5) * 40,
    driftY: (rng() - 0.5) * 30,
  };
});

export default function BackgroundAnimation() {
  const prefersReducedMotion = useReducedMotion();

  // Normalized -1..1 pointer position, used to gently parallax the orbs
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);
  const springNormX = useSpring(normX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springNormY = useSpring(normY, { stiffness: 40, damping: 20, mass: 0.6 });

  // Raw pixel pointer position, used for the cursor-following spotlight
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springRawX = useSpring(rawX, { stiffness: 55, damping: 22, mass: 0.5 });
  const springRawY = useSpring(rawY, { stiffness: 55, damping: 22, mass: 0.5 });

  const orbOneX = useTransform(springNormX, [-1, 1], [-24, 24]);
  const orbOneY = useTransform(springNormY, [-1, 1], [-18, 18]);
  const orbTwoX = useTransform(springNormX, [-1, 1], [18, -18]);
  const orbTwoY = useTransform(springNormY, [-1, 1], [14, -14]);
  const orbThreeX = useTransform(springNormX, [-1, 1], [-12, 12]);
  const orbThreeY = useTransform(springNormY, [-1, 1], [10, -10]);
  const orbFourX = useTransform(springNormX, [-1, 1], [10, -10]);
  const orbFourY = useTransform(springNormY, [-1, 1], [-8, 8]);

  const spotlightTransform = useTransform([springRawX, springRawY], ([x, y]) =>
    `translate3d(${(x as number) - 300}px, ${(y as number) - 300}px, 0)`,
  );

  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        rawX.set(event.clientX);
        rawY.set(event.clientY);
        normX.set((event.clientX / window.innerWidth) * 2 - 1);
        normY.set((event.clientY / window.innerHeight) * 2 - 1);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [prefersReducedMotion, rawX, rawY, normX, normY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-slate-950">
      {/* subtle grid, fades out toward the edges, gentle breathing opacity */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,black_35%,transparent_100%)]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* aurora sweep — a soft diagonal band of color drifting across */}
      <motion.div
        className="absolute -inset-x-1/4 top-[-30%] h-[120%] rotate-[18deg] bg-[linear-gradient(90deg,transparent_0%,rgba(34,211,238,0.10)_20%,rgba(217,70,239,0.08)_45%,rgba(56,189,248,0.09)_70%,transparent_100%)] blur-[90px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: ["-15%", "10%", "-15%"], opacity: [0.55, 1, 0.55] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* cursor-reactive spotlight */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.12)_0%,transparent_70%)] mix-blend-screen"
          style={{ transform: spotlightTransform }}
        />
      )}

      {/* slow-drifting gradient orbs, gently parallaxed by the cursor */}
      <motion.div style={{ x: orbOneX, y: orbOneY }} className="absolute -left-40 top-[-12%]">
        <motion.div
          className="h-[38rem] w-[38rem] rounded-full bg-cyan-500/20 blur-[130px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 70, -40, 0], y: [0, 50, -30, 0], scale: [1, 1.1, 0.94, 1] }
          }
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={{ x: orbTwoX, y: orbTwoY }} className="absolute right-[-18%] top-[18%]">
        <motion.div
          className="h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/14 blur-[140px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, -60, 30, 0], y: [0, -30, 40, 0], scale: [1, 0.92, 1.08, 1] }
          }
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </motion.div>

      <motion.div style={{ x: orbThreeX, y: orbThreeY }} className="absolute bottom-[-18%] left-[22%]">
        <motion.div
          className="h-[32rem] w-[32rem] rounded-full bg-sky-500/12 blur-[130px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 45, -35, 0], y: [0, -40, 25, 0], scale: [1, 1.06, 0.96, 1] }
          }
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </motion.div>

      <motion.div style={{ x: orbFourX, y: orbFourY }} className="absolute right-[8%] bottom-[6%]">
        <motion.div
          className="h-[24rem] w-[24rem] rounded-full bg-emerald-500/10 blur-[120px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, -30, 20, 0], y: [0, 25, -20, 0], scale: [1, 1.08, 0.95, 1] }
          }
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      {/* layered star field — twinkle, pulse, and drift groups for depth */}
      {particles.map((p, i) => {
        const isDrift = p.group === "drift" && !prefersReducedMotion;
        const isPulse = p.group === "pulse" && !prefersReducedMotion;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              backgroundColor: `rgba(${p.color},1)`,
              boxShadow: p.blur
                ? `0 0 ${p.blur}px ${p.blur / 2}px rgba(${p.color},0.55)`
                : undefined,
            }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.3 }
                : isDrift
                  ? {
                      x: [0, p.driftX, 0],
                      y: [0, p.driftY, 0],
                      opacity: [0.08, 0.8, 0.08],
                      scale: [0.7, 1.3, 0.7],
                    }
                  : isPulse
                    ? {
                        opacity: [0.1, 0.85, 0.1],
                        scale: [0.8, 1.5, 0.8],
                      }
                    : {
                        opacity: [0.05, 0.9, 0.05],
                        scale: [0.5, 1.3, 0.5],
                      }
            }
            transition={{
              duration: p.duration * (isDrift ? 1.6 : 1),
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* shooting star — rare, fast, elegant */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-0 top-0 h-px w-24"
          style={{
            left: "70%",
            top: "10%",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)",
            transform: "rotate(-35deg)",
          }}
          animate={{
            x: [-300, 900],
            y: [-100, 400],
            opacity: [0, 0.9, 0.9, 0],
            scaleX: [0.2, 1, 1, 0.2],
          }}
          transition={{
            duration: 2,
            delay: 10,
            repeat: Infinity,
            repeatDelay: 18,
            ease: "easeOut",
          }}
        />
      )}

      {/* fine grain to kill flat-gradient banding */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+\")",
        }}
      />

      {/* vignette to keep edges dark and content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.65)_100%)]" />
    </div>
  );
}