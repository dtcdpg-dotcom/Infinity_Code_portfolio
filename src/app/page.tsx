"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyData } from "@/config/company";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ServiceCards from "@/components/ServiceCards";

const revealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Home() {
  return (
    <div className="portfolio-shell relative overflow-hidden pb-16">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 pt-24 sm:px-8 md:pt-28 lg:px-10">
        <motion.section
          initial="hidden"
          animate="show"
          variants={revealContainer}
          className="glass-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10"
        >
          <div className="space-y-6">
            <motion.p variants={revealItem} className="eyebrow">
              {companyData.tagline}
            </motion.p>
            <motion.h1
              variants={revealItem}
              className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
            >
              {companyData.headline}
            </motion.h1>
            <motion.p
              variants={revealItem}
              className="max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg"
            >
              {companyData.description}
            </motion.p>
            <motion.div
              variants={revealItem}
              className="flex flex-wrap gap-3 pt-1 text-sm font-semibold"
            >
              <a className="button-sun" href="#work">
                Explore Our Work
              </a>
              <a className="button-glass" href="#contact">
                Talk With Us
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={revealItem}
            className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[1.4rem] border border-white/20 bg-[linear-gradient(140deg,rgba(34,211,238,0.2),rgba(234,179,8,0.3),rgba(251,146,60,0.18))] p-5"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
              Infinity Code Studio
            </div>
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-200/30 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-orange-300/30 blur-2xl" />
            <div className="desktop-preview mt-8">
              <div className="desktop-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-2xl">
                <Image
                  src={companyData.projects[0].image}
                  alt={`${companyData.projects[0].title} preview`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-3 sm:grid-cols-3"
        >
          {companyData.stats.map((stat) => (
            <article key={stat.label} className="glass-panel rounded-[1.25rem] p-5">
              <p className="text-3xl font-bold text-[var(--ink)]">{stat.value}</p>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{stat.label}</p>
            </article>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="eyebrow">What We Do</p>
            <h2 className="font-display text-3xl sm:text-4xl">Our Services</h2>
          </div>
          <ServiceCards />
        </motion.section>

        <section id="work" className="space-y-4 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2"
          >
            <p className="eyebrow">Featured Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl">Inside the build lab</h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {companyData.projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel group rounded-[1.6rem] p-4"
              >
                <div className="desktop-preview shadow-[0_16px_40px_-24px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="desktop-topbar">
                    <span />
                    <span />
                    <span />
                    <p className="ml-2 truncate text-[11px] text-zinc-400">{project.title}</p>
                  </div>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[16/10] overflow-hidden rounded-b-2xl"
                    aria-label={`Open source for ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--ink)]">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{project.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-zinc-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 text-sm font-semibold">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-glass px-3 py-2"
                    >
                      Live Preview
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-sun px-3 py-2"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel grid gap-6 rounded-[1.8rem] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8"
        >
          <div className="space-y-4">
            <p className="eyebrow">Contact Us</p>
            <h2 className="font-display text-3xl sm:text-4xl">Build something unforgettable with us.</h2>
            <p className="text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
              We are available for startup launches, redesigns, product growth sprints, and full web builds.
              Send your details and we will reach out quickly.
            </p>
            <ul className="space-y-2 text-sm text-[var(--ink)]">
              <li>Email: {companyData.contact.email}</li>
              <li>Phone: {companyData.contact.phone}</li>
              <li>Location: {companyData.contact.location}</li>
            </ul>
            <div className="flex gap-3 text-sm font-semibold text-cyan-200">
              <a href={companyData.contact.website} target="_blank" rel="noopener noreferrer">
                Website
              </a>
              <a href={companyData.contact.linkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={companyData.contact.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <ContactForm />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
