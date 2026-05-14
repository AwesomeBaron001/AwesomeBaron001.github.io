"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { buildLog } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export function Writing() {
  return (
    <section id="buildlog" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          <h2 className="text-2xl font-serif font-semibold text-text-primary">
            Build Log
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            持续构建中 — 每一步都是公开的。
          </p>
        </motion.div>

        <ul className="mt-10 space-y-0 divide-y divide-text-primary/5">
          {buildLog.map((entry, i) => (
            <motion.li
              key={entry.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i + 1}
              className="py-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-secondary font-sans shrink-0">
                      {entry.date}
                    </span>
                    <span className="font-serif font-medium text-text-primary">
                      {entry.title}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {entry.description}
                  </p>
                </div>
                {entry.link && (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-text-secondary transition-colors duration-300 hover:text-accent pt-0.5"
                    aria-label="查看详情"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
