import Link from "next/link";
import {
  Mail,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6"

import { portfolio } from "@/data/portfolio";

const quickLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Research",
    href: "#research",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-14 md:grid-cols-3">

          {/* Left */}

          <div>

            <h2 className="text-2xl font-bold tracking-tight">
              {portfolio.name}
            </h2>

            <p className="mt-3 text-blue-400">
              Backend Engineer • AI Research
            </p>


            <div className="mt-25 flex gap-4">

              <Link
                href={portfolio.github}
                target="_blank"
                className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-white/5"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href={portfolio.linkedin}
                target="_blank"
                className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-white/5"
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href={`mailto:${portfolio.email}`}
                className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-white/5"
              >
                <Mail size={18} />
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-white/5"
              >
                <FileText size={18} />
              </Link>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold">
              Navigation
            </h3>

            <div className="mt-6 space-y-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-blue-400"
                >
                  {item.name}

                  <ArrowUpRight size={14} />
                </Link>

              ))}

            </div>
            <div className="mt-6 space-y-4">
              <p className="mt-10 md:mt-0 items-center text-sm text-zinc-500">
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
            </div>
          </div>
              
        </div>
      </div>
    </footer>
  );
}
