"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6">
      <div className="max-w-content text-center">
        <motion.p
          className="text-sm font-sans tracking-widest text-text-secondary uppercase"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {siteConfig.title}
        </motion.p>

        <motion.h1
          className="mt-4 text-5xl font-serif font-semibold leading-tight tracking-tight text-text-primary sm:text-6xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg leading-relaxed text-text-secondary"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {siteConfig.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href={siteConfig.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-primary underline decoration-accent underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            Robotics Portfolio
          </a>
          <a
            href="#projects"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            View Projects
          </a>
          <a
            href="https://github.com/AwesomeBaron001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://blog.csdn.net/m0_46464899"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
