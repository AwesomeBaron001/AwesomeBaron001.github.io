export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  year: string;
  url: string;
  tech: string[];
}

export interface BuildLogEntry {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: "Github" | "Mail" | "Twitter" | "Globe";
}

export const siteConfig: SiteConfig = {
  name: "YOLO",
  title: "Builder · AI Explorer · Vibe Coder",
  subtitle:
    "Vibe coding in public. Building AI-powered tools and small products with Python, LangGraph, and curiosity.",
  description: "YOLO's personal site — experiments, projects, and building in public.",
};

export const navLinks: NavLink[] = [
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "博客", href: "#blog" },
  { label: "Build Log", href: "#buildlog" },
  { label: "联系", href: "#contact" },
];

export const aboutText: string =
  "计算机研究生，正在通过 vibe coding 把想法快速变成可用原型。不追求完美，追求持续交付。每个实验都是一次学习，每个原型都是下一个项目的起点。";

export const focuses: string[] = [
  "AI Agents & Multi-step Workflows",
  "LangGraph / LangChain",
  "Python Tooling",
  "Rapid Prototyping",
  "Building in Public",
];

export const projects: Project[] = [
  {
    name: "LangGraph Agent Experiment",
    description: "探索多步骤 AI 工作流，用 LangGraph 构建可复用的 Agent 节点与条件分支。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001",
    tech: ["Python", "LangGraph", "LangChain"],
  },
  {
    name: "Personal Site",
    description: "基于 Next.js 构建的作品集主页，部署到 GitHub Pages，持续迭代中。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001/AwesomeBaron001.github.io",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Coming Soon",
    description: "正在构建新的实验。关注 GitHub 以获取最新进展。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001",
    tech: ["Python", "AI"],
  },
];

export const buildLog: BuildLogEntry[] = [
  {
    date: "2026-05",
    title: "个人网站上线",
    description: "搭建基于 Next.js 的作品集主页，配置 GitHub Actions 自动部署到 GitHub Pages。",
    link: "https://github.com/AwesomeBaron001/AwesomeBaron001.github.io",
  },
  {
    date: "2026-04",
    title: "LangGraph 工作流实验",
    description: "探索多 Agent 协作模式，研究如何用 LangGraph 构建条件分支和循环流程。",
  },
  {
    date: "2026-03",
    title: "开始 Vibe Coding",
    description: "确立构建方式：想法 → 原型 → 迭代。开始用 AI 工具加速从零到可运行的速度。",
  },
];

export const socials: Social[] = [
  {
    platform: "GitHub",
    url: "https://github.com/AwesomeBaron001",
    icon: "Github",
  },
  {
    platform: "CSDN",
    url: "https://blog.csdn.net/m0_46464899",
    icon: "Globe",
  },
  {
    platform: "Email",
    url: "mailto:hollyzhao001@gmail.com",
    icon: "Mail",
  },
];

export const footer = {
  text: "© 2026 YOLO · Building in public",
};
