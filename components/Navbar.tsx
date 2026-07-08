"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { navLinks } from "@/data/portfolio";

const compactLinks = navLinks.filter(({ name }) =>
  ["Home", "About", "Skills", "Projects", "Research", "Contact"].includes(name),
);

export default function Navbar() {
  const mountedRef = useRef(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    mountedRef.current = true;

    const sections = compactLinks
      .map((link) => {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);

        return element ? { ...link, id, element } : null;
      })
      .filter((section): section is { id: string; name: string; href: string; element: HTMLElement } => Boolean(section));

    let animationFrame = 0;

    const syncActiveFromScroll = () => {
      const markerPosition = window.scrollY + window.innerHeight * 0.38;
      const currentSection = sections.reduce((current, section) => {
        return section.element.offsetTop <= markerPosition ? section : current;
      }, sections[0]);

      if (currentSection) {
        setActive((current) => (current === currentSection.name ? current : currentSection.name));
      }
    };

    const handleScroll = () => {
      if (!mountedRef.current) {
        return;
      }

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(syncActiveFromScroll);
    };

    const syncActiveFromHash = () => {
      const currentHash = window.location.hash.replace("#", "");
      const matched = sections.find((section) => section.id === currentHash);
      if (matched) {
        setActive((current) => (current === matched.name ? current : matched.name));
        return;
      }

      handleScroll();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", syncActiveFromHash);

    return () => {
      mountedRef.current = false;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", syncActiveFromHash);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3 text-lg font-semibold tracking-[-0.04em] text-white">
          <span>
            Uthfol Ghosh
          </span>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 lg:flex">
          {compactLinks.map((item) => {
            const isActive = active === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}`}
              >
                <span className="inline-flex items-center gap-2">
                  {isActive ? <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> : null}
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/resume.pdf"
            className="hidden h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 lg:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Scroll progress line */}
      <motion.div
        style={{ scaleX: scrollProgress }}
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400"
      />

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-slate-950/95 px-4 pb-5 pt-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {compactLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setMobileOpen(false);
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
