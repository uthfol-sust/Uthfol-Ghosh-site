"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { navLinks } from "@/data/portfolio";

const compactLinks = navLinks;

// id -> nav label, built directly from navLinks so it can never drift
// out of sync with the actual nav structure.
// e.g. "skills" -> "About", "competitive-programming" -> "Experience"
const sectionNameById = navLinks.reduce((map, link) => {
  map[link.href.replace("#", "")] = link.name;
  link.children?.forEach((child) => {
    map[child.href.replace("#", "")] = link.name;
  });
  return map;
}, {} as Record<string, string>);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const visibleRatios = useRef<Record<string, number>>({});

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ids = Object.keys(sectionNameById);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.current[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        // whichever tracked section currently has the most area inside
        // the "active band" (top strip of the viewport) wins
        const topId = Object.entries(visibleRatios.current)
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1])[0]?.[0];

        if (topId && sectionNameById[topId]) {
          setActive(sectionNameById[topId]);
        }
      },
      {
        // thin horizontal band near the top of the viewport counts as "active"
        rootMargin: "-15% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}`}
                >
                  <span className="inline-flex items-center gap-2">
                    {isActive ? <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> : null}
                    {item.name}
                    {item.children ? <ChevronDown className="h-3.5 w-3.5" /> : null}
                  </span>
                </a>

                {item.children ? (
                  <div className="invisible absolute left-1/2 top-full z-10 mt-2 min-w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/95 p-2 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-200 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        onClick={() => setActive(item.name)}
                        className="block rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
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
        className="absolute inset-x-0 bottom-0 h-0.75 origin-left bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-400"
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
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      setMobileOpen(false);
                    }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                  >
                    {item.name}
                    {item.children ? <ChevronDown className="h-4 w-4" /> : null}
                  </a>
                  {item.children ? (
                    <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => {
                            setActive(item.name);
                            setMobileOpen(false);
                          }}
                          className="block rounded-xl px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
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
