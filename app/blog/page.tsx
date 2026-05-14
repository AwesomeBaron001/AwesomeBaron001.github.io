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

export default function BuildLogPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content">
        <motion.h1
          className="text-3xl font-serif font-semibold text-text-primary"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Build Log
        </motion.h1>

        <motion.p
          className="mt-4 text-text-secondary"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          持续构建中 — 记录每一个实验与里程碑。
        </motion.p>

        <ul className="mt-12 divide-y divide-text-primary/5">
          {buildLog.map((entry, i) => (
            <motion.li
              key={entry.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 2}
              className="py-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
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
    </div>
  );
}
