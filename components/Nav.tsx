"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/data/content";

const portfolioNavLinks = [
  { label: "关于", href: "#intro" },
  { label: "机器人项目", href: "#robotics" },
  { label: "AI / RAG", href: "#ai-rag" },
  { label: "能力", href: "#skills" },
  { label: "联系", href: "#contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isPortfolio = pathname.startsWith("/portfolio");
  const links = isPortfolio ? portfolioNavLinks : navLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-text-primary/5 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href={isPortfolio ? "/portfolio/" : "/"} className="text-lg font-serif font-semibold text-text-primary">
          {siteConfig.name}
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent"
                {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-text-primary/5 md:hidden"
          >
            <ul className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                    {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
