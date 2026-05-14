"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <motion.h2
          className="text-2xl font-serif font-semibold text-text-primary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          项目
        </motion.h2>

        <ul className="mt-10 divide-y divide-text-primary/5">
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i + 1}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 py-5 transition-transform duration-300"
              >
                <div className="min-w-0">
                  <span className="font-serif font-medium text-text-primary transition-all duration-300 group-hover:-translate-x-1 group-hover:text-accent inline-block">
                    {project.name}
                  </span>
                  <p className="mt-1 text-sm text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded px-1.5 py-0.5 text-xs text-text-secondary bg-text-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-sm text-text-secondary pt-0.5">
                  <span className="hidden sm:inline">{project.year}</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
