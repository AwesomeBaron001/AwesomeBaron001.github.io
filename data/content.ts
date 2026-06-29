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
  title: "CS Grad Student · AI Builder · Hackathon Prototyper",
  subtitle:
    "Building fast, useful prototypes across AI tools, Obsidian plugins, and robot demos.",
  description: "YOLO's personal site — hackathon projects, experiments, and build notes.",
};

export const navLinks: NavLink[] = [
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "博客", href: "https://blog.csdn.net/m0_46464899" },
  { label: "Build Log", href: "#buildlog" },
  { label: "联系", href: "#contact" },
];

export const aboutText: string =
  "计算机研究生，喜欢把模糊想法快速做成可运行的原型，再继续打磨成能讲清楚、能演示、能交付的作品。最近的项目集中在 AI 工具、Obsidian 阅读工作流和机器人控制 demo。";

export const focuses: string[] = [
  "Hackathon Prototypes",
  "AI-assisted Product Building",
  "ROS 2 / Robot Interfaces",
  "Obsidian Plugin Development",
  "Reading & Knowledge Tools",
];

export const projects: Project[] = [
  {
    name: "6gogo_scout_mini",
    description: "黑客松获奖项目：用 ROS 2 控制 Scout Mini 机器狗，提供路线预设、状态回传和浏览器控制界面。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001/6gogo_scout_mini",
    tech: ["ROS 2 Jazzy", "Python", "rosbridge", "Web UI"],
  },
  {
    name: "Knowater / Weread Memory",
    description: "黑客松作品：面向 Obsidian 的微信读书理解续航插件，生成阅读驾驶舱、续读回顾卡和 session 快照。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001/Knowater",
    tech: ["TypeScript", "Obsidian API", "Markdown"],
  },
  {
    name: "Personal Site",
    description: "基于 Next.js 的个人作品集和 Build Log，用来持续展示项目进展与技术实验。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001/AwesomeBaron001.github.io",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const buildLog: BuildLogEntry[] = [
  {
    date: "2026-06",
    title: "6gogo_scout_mini 黑客松获奖",
    description: "完成 Scout Mini 机器狗遛狗 demo：ROS 2 控制节点、rosbridge 通信、Web 控制台和真实机器人运行边界。",
    link: "https://github.com/AwesomeBaron001/6gogo_scout_mini",
  },
  {
    date: "2026-06",
    title: "Knowater 阅读续航插件",
    description: "在黑客松中做出 Obsidian 插件 MVP，把微信读书划线转成 dashboard、recovery card 和阅读 session 快照。",
    link: "https://github.com/AwesomeBaron001/Knowater",
  },
  {
    date: "2026-05",
    title: "个人网站上线",
    description: "搭建基于 Next.js 的作品集主页，配置 GitHub Pages 部署，并开始把项目进展集中展示出来。",
    link: "https://github.com/AwesomeBaron001/AwesomeBaron001.github.io",
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
