"use client";

import { motion } from "framer-motion";
import { Github, Mail, Twitter, Globe } from "lucide-react";
import { socials } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const iconMap = {
  Github,
  Mail,
  Twitter,
  Globe,
} as const;

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <motion.h2
          className="text-2xl font-serif font-semibold text-text-primary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          联系
        </motion.h2>

        <motion.p
          className="mt-4 leading-relaxed text-text-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
        >
          如果你对 AI 工具、Python 开发或 vibe coding 有想法，欢迎聊聊。
        </motion.p>

        <motion.div
          className="mt-8 flex gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
        >
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="text-text-secondary transition-colors duration-300 hover:text-accent"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
