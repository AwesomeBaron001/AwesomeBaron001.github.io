"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CSDNPost } from "@/lib/csdn";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export function BlogPosts({ posts }: { posts: CSDNPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <motion.h2
          className="text-2xl font-serif font-semibold text-text-primary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          博客
        </motion.h2>

        <ul className="mt-10 divide-y divide-text-primary/5">
          {posts.map((post, i) => (
            <motion.li
              key={post.link}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i + 1}
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-5"
              >
                <span className="font-serif font-medium text-text-primary transition-colors duration-300 group-hover:text-accent line-clamp-1">
                  {post.title}
                </span>
                <div className="flex shrink-0 items-center gap-3">
                  {post.pubDate && (
                    <time className="hidden text-sm text-text-secondary sm:inline">
                      {post.pubDate}
                    </time>
                  )}
                  <ArrowUpRight
                    size={16}
                    className="text-text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={posts.length + 1}
        >
          <a
            href="https://blog.csdn.net/m0_46464899"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            查看全部 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
