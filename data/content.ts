export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  portfolioUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  shortName: string;
  description: string;
  year: string;
  url: string;
  tech: string[];
  status: string[];
  links: {
    label: string;
    href: string;
    kind: "video" | "article" | "repo";
  }[];
  visual: {
    title: string;
    caption: string;
    image?: string;
  };
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
  portfolioUrl: "https://awesomebaron001.github.io/zuopinji/",
};

export const navLinks: NavLink[] = [
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "作品集", href: "https://awesomebaron001.github.io/zuopinji/" },
  { label: "博客", href: "https://blog.csdn.net/m0_46464899" },
  { label: "Build Log", href: "#buildlog" },
  { label: "联系", href: "#contact" },
];

export const aboutText: string =
  "计算机研究生，喜欢把模糊想法快速做成可运行的原型，再继续打磨成能讲清楚、能演示、能交付的作品。";

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
    shortName: "6gogo",
    description:
      "黑客松获奖项目：基于松灵底盘机器人 Scout Mini 做无人遛狗原型，用 ROS 2 串联路线预设、状态回传和浏览器控制界面。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001/6gogo_scout_mini",
    tech: ["ROS 2 Jazzy", "Python", "rosbridge", "Web UI"],
    status: [
      "黑客松获奖项目",
      "入围通往 AGI 之路 x 红杉中国 AGI HOUSE 线上孵化营",
      "深圳科创学院夏令营已通过一面，二面进行中",
    ],
    links: [
      {
        label: "B站视频：《我做了一个“遛宝宝”的机器人》",
        href: "https://b23.tv/a9krkLz",
        kind: "video",
      },
      {
        label: "AGI HOUSE 线上孵化营入围信息",
        href: "https://mp.weixin.qq.com/s/2Knca6GSu-PsHtMc3gMLiwW",
        kind: "article",
      },
      {
        label: "GitHub 仓库",
        href: "https://github.com/AwesomeBaron001/6gogo_scout_mini",
        kind: "repo",
      },
    ],
    visual: {
      title: "获奖证书",
      caption: "6gogo_scout_mini 黑客松获奖证书。",
      image: "/scout.png",
    },
  },
  {
    name: "Knowater / Weread Memory",
    shortName: "Knowater",
    description:
      "黑客松作品：面向 Obsidian 的微信读书理解续航插件，生成阅读驾驶舱、续读回顾卡和 session 快照，让中断后的阅读更容易恢复上下文。",
    year: "2026",
    url: "https://github.com/AwesomeBaron001/Knowater",
    tech: ["TypeScript", "Obsidian API", "Markdown"],
    status: [
      "Obsidian 插件 MVP",
      "围绕微信读书划线和笔记做理解加工",
      "支持 dashboard、recovery card、reading session 三条核心命令",
    ],
    links: [
      {
        label: "GitHub 仓库",
        href: "https://github.com/AwesomeBaron001/Knowater",
        kind: "repo",
      },
    ],
    visual: {
      title: "项目介绍图",
      caption: "Knowater 项目介绍图。",
      image: "/knowater.png",
    },
  },
];

export const buildLog: BuildLogEntry[] = [
  {
    date: "2026-06",
    title: "6gogo_scout_mini 黑客松获奖",
    description: "完成基于松灵 Scout Mini 底盘机器人的无人遛狗 demo：ROS 2 控制节点、rosbridge 通信、Web 控制台和真实机器人运行边界。",
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
