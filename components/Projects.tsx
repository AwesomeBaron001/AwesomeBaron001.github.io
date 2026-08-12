"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen, Github, Image, Play } from "lucide-react";
import { projects, siteConfig } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const linkIcons = {
  video: Play,
  article: BookOpen,
  repo: Github,
};

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          <h2 className="text-2xl font-serif font-semibold text-text-primary">
            项目
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            展示我在机器人控制、Physical AI 与阅读工具方向完成的黑客松作品。每个项目都包含原型成果、外部报道或演示证据。
          </p>
        </motion.div>

        <motion.article
          className="mt-10 grid gap-6 rounded border border-accent/30 bg-accent/[0.04] p-5 md:grid-cols-[minmax(0,1fr)_220px] md:items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={1}
        >
          <div>
            <p className="text-xs font-sans tracking-widest text-accent uppercase">
              Robotics Portfolio
            </p>
            <h3 className="mt-2 text-xl font-serif font-semibold text-text-primary">
              面试官入口：机器人与 AI 系统作品集
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              如果你想快速了解我的机器人方向能力，可以从这里查看 Scout Dog Walk、6gogo MVP、
              联想实习项目、AI 系统工程经验、演示视频和简历下载。
            </p>
            <a
              href={siteConfig.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded border border-accent/40 px-3 py-2 text-sm text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              打开作品集
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <a
            href={siteConfig.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded border border-text-primary/10 bg-white/60"
            aria-label="打开机器人与 AI 系统作品集"
          >
            <img
              src="/scout.png"
              alt="Scout Mini 机器人项目图片"
              className="h-44 w-full object-cover md:h-36"
            />
          </a>
        </motion.article>

        <div className="mt-10 space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className="grid gap-6 border-t border-text-primary/10 pt-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] md:gap-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i + 2}
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-serif text-2xl font-semibold text-text-primary">
                    {project.shortName}
                  </span>
                  {project.status[0]?.includes("冠军") && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1 text-xs font-semibold text-accent">
                      <Award size={13} aria-hidden="true" />
                      {project.status[0]}
                    </span>
                  )}
                  <span className="rounded-full border border-text-primary/10 px-2.5 py-1 text-xs font-sans text-text-secondary">
                    {project.year}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded px-1.5 py-0.5 text-xs text-text-secondary bg-text-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-2">
                  {project.status.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-text-secondary"
                    >
                      <Award
                        size={15}
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => {
                    const Icon = linkIcons[link.kind];

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex max-w-full items-center gap-2 rounded border border-text-primary/10 px-3 py-2 text-sm text-text-primary transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                      >
                        <Icon size={15} className="shrink-0" aria-hidden="true" />
                        <span className="truncate">{link.label}</span>
                        <ArrowUpRight
                          size={14}
                          className="shrink-0"
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="min-w-0">
                {project.visual.image ? (
                  <figure>
                    <div className="max-h-[520px] overflow-auto rounded border border-text-primary/10 bg-white/60">
                      <img
                        src={project.visual.image}
                        alt={project.visual.title}
                        className="w-full object-contain"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs text-text-secondary">
                      {project.visual.caption}
                    </figcaption>
                  </figure>
                ) : (
                  <div className="flex aspect-[4/3] w-full flex-col justify-between rounded border border-dashed border-text-primary/20 bg-text-primary/[0.02] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-serif text-lg font-medium text-text-primary">
                        {project.visual.title}
                      </span>
                      <Image
                        size={22}
                        className="shrink-0 text-text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {project.visual.caption}
                    </p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
