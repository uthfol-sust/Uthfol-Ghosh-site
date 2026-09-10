import type { Metadata } from "next";
import type { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Uthfol Ghosh | Software Engineer",
    template: "%s | Uthfol Ghosh",
  },
  description:
    "Uthfol Ghosh is a software engineer focused on backend systems, distributed architecture, AI infrastructure, and competitive programming.",
  applicationName: "Uthfol Ghosh Portfolio",
  authors: [{ name: "Uthfol Ghosh" }],
  creator: "Uthfol Ghosh",
  publisher: "Uthfol Ghosh",
  category: "technology",
  keywords: [
    "Uthfol Ghosh",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "AI Infrastructure",
    "Go",
    "C++",
    "Python",
    "Next.js",
    "React",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Competitive Programming",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Uthfol Ghosh | Software Engineer",
    description:
      "Portfolio of Uthfol Ghosh, a backend-focused software engineer exploring distributed systems, AI infrastructure, and competitive programming.",
    url: "/",
    siteName: "Uthfol Ghosh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uthfol Ghosh | Software Engineer",
    description:
      "Backend-focused software engineer building systems for scale, AI, and competitive programming excellence.",
  },
  alternates: {
    canonical: "/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uthfol Ghosh",
  jobTitle: "Software Engineer",
  email: "uthfolghosh9038@gmail.com",
  alumniOf: "Shahjalal University of Science and Technology",
  url: "/",
  sameAs: [
    "https://github.com/uthfol-sust",
    "https://linkedin.com/in/uthfol-ghosh",
  ],
  knowsAbout: [
    "Distributed Systems",
    "AI Infrastructure",
    "LLMs",
    "Bangla NLP",
    "Go",
    "Python",
    "C++",
    "Next.js",
    "Docker",
    "Kubernetes",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Uthfol Ghosh Portfolio",
  url: "/",
  description:
    "Personal portfolio website for Uthfol Ghosh, software engineer and backend specialist.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="portfolio-shell relative isolate min-h-screen overflow-x-hidden text-zinc-100 selection:bg-cyan-400/30 selection:text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
            />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
