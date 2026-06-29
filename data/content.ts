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
    "Building hackathon prototypes across robot control and reading tools.",
  description: "YOLO's personal site — focused notes on 6gogo_scout_mini and Knowater.",
};

export const navLinks: NavLink[] = [
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "博客", href: "https://blog.csdn.net/m0_46464899" },
  { label: "Build Log", href: "#buildlog" },
  { label: "联系", href: "#contact" },
];

export const aboutText: string =
  "计算机研究生，喜欢把模糊想法快速做成可运行的原型，再继续打磨成能讲清楚、能演示、能交付的作品。这里主要记录两个黑客松项目：Scout Mini 机器狗控制 demo，以及 Obsidian 阅读续航插件 Knowater。";

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
