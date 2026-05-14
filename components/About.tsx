"use client";

import { motion } from "framer-motion";
import { aboutText, focuses, siteConfig } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
          >
            <h2 className="text-2xl font-serif font-semibold text-text-primary">
              关于我
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              {aboutText}
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
          >
            <h3 className="text-sm font-sans tracking-widest text-text-secondary uppercase">
              Current Focus
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {focuses.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-text-primary/10 px-3 py-1 text-sm text-text-secondary"
                >
                  {focus}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center md:justify-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
        >
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full bg-text-secondary/10 text-sm text-text-secondary"
            aria-label={`${siteConfig.name} 的头像`}
          >
            头像
          </div>
        </motion.div>
      </div>
    </section>
  );
}
