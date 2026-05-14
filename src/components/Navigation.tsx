"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { companyData } from "@/config/company";

import Magnetic from "@/components/Magnetic";

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
        <Magnetic>
          <a
            href="#"
            className="group flex items-center text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter drop-shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-[#3b82f6]">NT</span>
            <span 
              className="text-[#f7931e] ml-1.5 flex items-start"
              style={{ animation: 'scaryFlicker 4s infinite' }}
            >
              GO 360
              <span className="text-xl sm:text-2xl md:text-3xl leading-none mt-1 ml-0.5">&deg;</span>
            </span>
          </a>
        </Magnetic>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Magnetic>
            <a
              href="#"
              className="nav-link hidden text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] sm:inline"
            >
              Home
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#work"
              className="nav-link text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              Work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="button-sun px-4 py-2 text-sm font-semibold inline-block"
            >
              Contact
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.nav>
  );
}
