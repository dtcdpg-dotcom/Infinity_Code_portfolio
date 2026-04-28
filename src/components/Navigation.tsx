"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { companyData } from "@/config/company";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--glass-bg)] backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-bold text-[var(--ink)]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-orange-400 font-display text-sm font-bold text-white shadow-lg">
            {companyData.shortName}
          </div>
          <span className="hidden sm:inline">{companyData.name}</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="nav-link hidden text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] sm:inline"
          >
            Home
          </a>
          <a
            href="#work"
            className="nav-link text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
          >
            Work
          </a>
          <a
            href="#contact"
            className="button-sun px-4 py-2 text-sm font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
