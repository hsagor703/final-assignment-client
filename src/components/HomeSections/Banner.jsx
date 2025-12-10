import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const itemVariantUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floating = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const HeroBanner = ({
  headline = "Professional asset management for modern teams",
  subhead = "Track assets, approvals, and lifecycle with one secure dashboard.",
  primaryCta = { label: "Get Started", href: "#" },
  secondaryCta = { label: "Request Demo", href: "#" },
  image = "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f0b3c2b2f7f36f1a4d1b6a9f2f3d5d6",
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background shapes */}
      <svg
        className="hidden md:block absolute right-0 top-0 h-[520px] w-[520px] transform translate-x-1/4 -translate-y-1/4 opacity-10"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="300" fill="url(#g1)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {/* Content */}
          <div className="md:col-span-7 lg:col-span-6">
            <motion.div variants={itemVariantUp}>
              <p className="inline-block text-sm font-medium uppercase text-sky-600/50 bg-sky-50/10 px-3 py-1 rounded-full mb-4">
                For Enterprise
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariantUp}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight md:leading-tight text-[#9435E7]"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={itemVariantUp}
              className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl"
            >
              {subhead}
            </motion.p>

            <motion.div
              variants={itemVariantUp}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-[#9435E7] hover:bg-[#9435E730] text-white font-semibold px-5 py-3 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                aria-label={primaryCta.label}
              >
                {primaryCta.label}
              </a>

              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-[#9435E7] bg-white/10 text-[#9435E7] px-5 py-3 text-sm hover:bg-[#9435E7] hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9435E7]"
                aria-label={secondaryCta.label}
              >
                {secondaryCta.label}
              </a>
            </motion.div>

            {/* Trust indicators / subtle stats */}
            <motion.div
              variants={itemVariantUp}
              className="mt-8 flex gap-6 items-center text-sm text-slate-500"
            >
              <div>
                <div className="font-semibold text-gray-300">2,000+</div>
                <div>Managed companies</div>
              </div>
              <div className="border-l h-6"></div>
              <div>
                <div className="font-semibold text-gray-300">98%+</div>
                <div>SLA Uptime</div>
              </div>
            </motion.div>
          </div>

          {/* Image / Visual */}
          <div className="md:col-span-5 lg:col-span-6 flex justify-center md:justify-end">
            <motion.div
              variants={itemVariantUp}
              className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
              initial="hidden"
              animate="show"
            >
              <motion.img
                src={image}
                alt="Corporate team and devices - Asset management"
                className="w-full object-cover md:h-[420px] h-80"
                {...floating}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
