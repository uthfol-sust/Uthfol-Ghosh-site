import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const iconLinkClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-blue-500 hover:bg-white/5 hover:text-white";

  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white">
            {portfolio.name}
          </h2>
          <p className="mt-1 text-sm text-blue-400">
            Backend Engineer
          </p>
        </div>

        <p className="text-sm text-zinc-500">
          © {currentYear} {portfolio.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <Link
            href={portfolio.github}
            target="_blank"
            aria-label="GitHub"
            className={iconLinkClass}
          >
            <FaGithub size={18} />
          </Link>

          <Link
            href={portfolio.linkedin}
            target="_blank"
            aria-label="LinkedIn"
            className={iconLinkClass}
          >
            <FaLinkedin size={18} />
          </Link>

          <Link
            href={`mailto:${portfolio.email}`}
            aria-label="Email"
            className={iconLinkClass}
          >
            <Mail size={18} />
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            aria-label="Resume"
            className={iconLinkClass}
          >
            <FileText size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
