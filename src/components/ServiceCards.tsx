"use client";

import { motion } from "framer-motion";
import { companyData } from "@/config/company";

const categoryIcons: Record<string, string> = {
  Development: "💻",
  QA: "✓",
  Outsourcing: "🤝",
};

const categoryColors: Record<string, string> = {
  Development: "from-cyan-500/20 to-blue-500/20 border-cyan-400/30",
  QA: "from-orange-500/20 to-yellow-500/20 border-orange-400/30",
  Outsourcing: "from-purple-500/20 to-pink-500/20 border-purple-400/30",
};

export default function ServiceCards() {
  const revealContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const revealItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const groupedServices = {
    Development: companyData.services.filter((s) => s.category === "Development"),
    QA: companyData.services.filter((s) => s.category === "QA"),
    Outsourcing: companyData.services.filter((s) => s.category === "Outsourcing"),
  };

  return (
    <div className="space-y-16">
      {Object.entries(groupedServices).map(([category, services]) => (
        <motion.section
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{categoryIcons[category]}</span>
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--ink)]">
                {category}
              </h3>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={revealItem}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${
                  categoryColors[service.category]
                }`}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-3">
                  <h4 className="font-semibold text-[var(--ink)] text-base leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Category Badge */}
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-[var(--ink-soft)] border border-white/20">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}