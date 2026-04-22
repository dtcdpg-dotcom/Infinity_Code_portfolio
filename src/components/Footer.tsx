"use client";

import { motion } from "framer-motion";
import { companyData } from "@/config/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="relative mx-auto mt-16 w-full max-w-6xl px-5 pb-8 sm:px-8 lg:px-10"
    >
      <div className="glass-panel rounded-[1.8rem] p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-orange-400 font-display text-sm font-bold text-white shadow-lg">
                {companyData.shortName}
              </div>
              <span className="text-xl font-bold text-[var(--ink)]">
                {companyData.name}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
              {companyData.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={companyData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-[var(--ink-soft)] transition-all hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={companyData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-[var(--ink-soft)] transition-all hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={companyData.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-[var(--ink-soft)] transition-all hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                aria-label="Website"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--ink)]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[var(--ink-soft)] transition-colors hover:text-cyan-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-[var(--ink-soft)] transition-colors hover:text-cyan-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[var(--ink-soft)] transition-colors hover:text-cyan-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--ink)]">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              <li>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="transition-colors hover:text-cyan-300"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyData.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-cyan-300"
                >
                  {companyData.contact.phone}
                </a>
              </li>
              <li>{companyData.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-[var(--ink-soft)]">
          <p>
            © {currentYear} {companyData.name}. Crafted with ambition.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
