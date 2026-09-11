"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Mail,
  PlayCircle,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { portfolio } from "@/data/portfolio";

const typingPhrases = [
  "Golang Backend Developer",
  "Problem Solver",
  "AI/ML Researcher",
  "Competitive programmer",
];

const socialLinks = [
  { label: "GitHub", href: portfolio.github, icon: FaGithub },
  { label: "LinkedIn", href: portfolio.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${portfolio.email}`, icon: Mail },
  { label: "Instagram", href: "https://www.instagram.com/uthpolghosh/", icon: FaInstagram },
];

const profileImages = [
  { src: "/profile.jpeg", alt: "Portrait of Uthfol Ghosh" },
  { src: "/dp3.jpeg", alt: "Uthfol Ghosh profile photo" },
];

const foldVariants: Variants = {
  enter: {
    opacity: 0,
    rotateY: 130,
    scale: 0.85,
    x: "-18%",
    transformPerspective: 1400,
  },
  center: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    rotateY: -120,
    scale: 0.85,
    x: "14%",
    transformPerspective: 1400,
    transition: { duration: 1.0, ease: [0.4, 0, 1, 1] },
  },
};

export default function Hero() {
  const mountedRef = useRef(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (mountedRef.current) {
        setProfileIndex((current) => (current + 1) % profileImages.length);
      }
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const currentProfileImage = profileImages[profileIndex];

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    let charIndex = 0;
    let timeoutId: number | undefined;

    const interval = window.setInterval(() => {
      charIndex += 1;
      if (mountedRef.current) {
        setTypedText(currentPhrase.slice(0, charIndex));
      }

      if (charIndex >= currentPhrase.length) {
        window.clearInterval(interval);
        timeoutId = window.setTimeout(() => {
          if (mountedRef.current) {
            setPhraseIndex((current) => (current + 1) % typingPhrases.length);
          }
        }, 1400);
      }
    }, 42);

    return () => {
      window.clearInterval(interval);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [phraseIndex]);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-2 pt-3 sm:px-8 sm:pb-2 sm:pt-8 lg:px-10 lg:pb-2 lg:pt-3"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1
            id="hero-heading"
            className="max-w-4xl text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            {portfolio.name}
            <span className="mt-10 block text-5xl bg-clip-text text-transparent [background-size:220%_220%] [animation:gradient-shift_7s_ease-in-out_infinite] bg-[linear-gradient(90deg,_#8b5cf6_0%,_#d946ef_50%,_#d946ef_100%)] bg-[linear-gradient(90deg,_#8b5cf6_0%,_#c026d3_50%)]">
              {portfolio.role}
            </span>
          </h1>

          <div className="mt-3 flex min-h-10 items-center gap-3 text-base text-zinc-300 sm:text-lg">
            <PlayCircle className="h-5 w-5 shrink-0 text-cyan-300" />
            <span className="inline-flex min-h-7 items-center border-l border-cyan-400/40 pl-3">
              {typedText}
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-cyan-300" />
            </span>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-1xl">
            Software Engineering student passionate about building scalable systems, distributed architectures, and AI-driven solutions that emphasize reliability, performance, and exceptional developer experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.12)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  aria-label={item.label}
                  className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-zinc-200 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <Icon className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-cyan-300" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          className="relative mx-auto flex w-full max-w-xl flex-col items-center justify-center"
        >
          <div className="absolute inset-0 -z-10 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.26),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_34%)] blur-2xl" />

          <div className="relative w-full max-w-120 overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))] p-4 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl sm:p-5">
            <div
              className="relative aspect-4/5 overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.1),rgba(168,85,247,0.14))] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              style={{ perspective: "1200px" }}
            >
              <AnimatePresence>
                <motion.div
                  key={currentProfileImage.src}
                  variants={foldVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={currentProfileImage.src}
                    alt={currentProfileImage.alt}
                    fill
                    priority={profileIndex === 0}
                    sizes="(max-width: 1024px) 340px, 480px"
                    className="object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%)]" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.7)]" />
            Available for Software engineer/intern
          </div>
        </motion.div>
      </div>
    </section>
  );
}
