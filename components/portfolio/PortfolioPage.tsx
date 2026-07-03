import {
  ArrowUpRight,
  Download,
  Github,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

type EvidenceLink = {
  label: string;
  href: string;
};

type DetailRow = {
  label: string;
  value: string | string[];
};

type Project = {
  title: string;
  subtitle: string;
  intro: string;
  rows: DetailRow[];
  evidence?: EvidenceLink[];
  featured?: boolean;
};

const scoutProject: Project = {
  title: "Scout Dog Walk",
  subtitle: "可监督的遛狗机器人原型",
  intro:
    "38 小时黑客松项目，基于松灵 Scout Mini 实机完成 Web 到机器人底盘的控制链路，并在现场完成真实底盘演示。",
  rows: [
    {
      label: "项目简介",
      value:
        "系统支持固定路线执行、速度控制、暂停恢复、急停和状态显示，重点验证真实机器人控制链路是否可以在短周期内跑通。",
    },
    {
      label: "我的职责",
      value:
        "队长；负责系统设计、ROS 2 控制链路、路线状态机、Web 到机器人端通信、部署与演示。",
    },
    {
      label: "技术栈",
      value:
        "ROS 2 Jazzy, Python rclpy, rosbridge, ROSLIB.js, /cmd_vel, Scout Mini, SocketCAN, Web UI。",
    },
    {
      label: "控制链路",
      value:
        "Web UI -> rosbridge -> ROS 2 节点 -> /cmd_vel -> 底盘控制。",
    },
    {
      label: "结果",
      value: "松灵机器人赛道二等奖；完成真实底盘演示。",
    },
  ],
  evidence: [
    { label: "演示视频", href: "https://www.bilibili.com/video/BV1m1Gj6fEQR" },
    { label: "项目代码", href: "https://github.com/AwesomeBaron001/scout_dog" },
  ],
  featured: true,
};

const gogoProject: Project = {
  title: "6gogo",
  subtitle: "智能遛狗机器人 MVP",
  intro:
    "面向固定路线自主巡航的机器人产品原型，当前重点是硬件数据流、导航链路和安全策略的工程验证。",
  rows: [
    {
      label: "当前状态",
      value:
        "已确认 Insight 9 ROS native 基础数据流；Nav2 所需 TF / odom / 点云链路仍在桥接验证中。",
    },
    {
      label: "三层架构",
      value: [
        "Insight 9：VIO / Depth / RGB",
        "x86 主控：Nav2 / TF bridge / 状态机",
        "STM32：电机闭环 / 里程计 / 急停",
      ],
    },
    {
      label: "系统设计",
      value:
        "FollowWaypoints、狗检测安全监控、牵引张力监测、safety_controller 停车策略。",
    },
    {
      label: "技术栈",
      value:
        "ROS 2 Humble, Nav2, VSLAM, YOLO, Depth Image Processing, STM32, Web UI。",
    },
  ],
  evidence: [
    {
      label: "GitHub 仓库",
      href: "https://github.com/AwesomeBaron001/6gogo_scout_mini",
    },
  ],
};

const lenovoProject: Project = {
  title: "Lenovo FIFA AI Pro",
  subtitle: "数据分析项目",
  intro:
    "联想实习期间参与的企业级 AI 项目，方向包括足球赛事数据问答、数据分析链路、AI Agent、Text-to-SQL 和模型效果评估。",
  rows: [
    {
      label: "我的工作",
      value: [
        "负责 prompt optimization pipeline。",
        "优化 data agent 执行链路。",
        "参与 Text-to-SQL 语义解析与数据查询流程。",
        "整理离线评测数据集。",
        "使用可复现指标评估问答、查询和报告生成效果。",
      ],
    },
    {
      label: "工程重点",
      value:
        "围绕企业数据问答系统做链路优化、评测流程和工程落地，而不是停留在概念 Demo。",
    },
  ],
  evidence: [
    {
      label: "联想官方介绍",
      href: "https://mp.weixin.qq.com/s/lqnvTUSzjc7A_vy0UK_s5A",
    },
  ],
  featured: true,
};

const secondaryAiProjects: Project[] = [
  {
    title: "无人机技术文档智能检索",
    subtitle: "Enterprise RAG",
    intro:
      "面向技术文档问答的智能检索系统，关注企业知识库里的召回质量、多模态索引和可复现评测。",
    rows: [
      {
        label: "关键工作",
        value:
          "BM25 + 向量语义混合检索，OCR，CLIP 多模态索引，基于真实问答集做召回、覆盖度、BLEU / ROUGE 评测。",
      },
    ],
  },
  {
    title: "Deep Research Agent",
    subtitle: "Agent Product",
    intro:
      "自动化研究报告生成系统，用多角色状态机组织检索、规划、研究和报告生成流程。",
    rows: [
      {
        label: "关键工作",
        value:
          "LangGraph 多角色状态机；Coordinator / Planner / Researcher / Reporter；集成 Tavily、RAGFlow、MCP、React、FastAPI。",
      },
    ],
  },
];

const skillGroups = [
  {
    title: "Robotics / Embodied AI",
    body:
      "ROS 2、Nav2、rclpy、机器人控制链路、状态机、传感器数据流、真实机器人部署。",
  },
  {
    title: "AI Agent / RAG",
    body:
      "LangGraph、RAGFlow、Text-to-SQL、企业知识库、智能问答、检索增强生成、Agent workflow。",
  },
  {
    title: "Evaluation / Data Workflow",
    body:
      "离线评测集、召回评估、BLEU / ROUGE、prompt optimization、可复现评测流程。",
  },
  {
    title: "Product & MVP",
    body:
      "从问题定义到 MVP，机器人产品原型，用户场景拆解，系统架构设计。",
  },
  {
    title: "Frontend / Full-stack",
    body:
      "React、FastAPI、Web UI、rosbridge、工程部署、项目可视化展示。",
  },
];

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#47695a]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-[#171717] sm:text-3xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 font-sans text-sm leading-7 text-[#5f6662]">
          {intro}
        </p>
      )}
    </div>
  );
}

function ExternalButton({ label, href }: EvidenceLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-2 border border-[#c8d0ca] bg-white px-3 py-2 font-sans text-sm text-[#171717] hover:border-[#47695a] hover:text-[#2f5f48]"
    >
      {label}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function DetailValue({ value }: { value: string | string[] }) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-2">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{value}</p>;
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="border-t border-[#d8ddd8] py-8">
      <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-[#6b736f]">
            {project.subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#171717]">
            {project.title}
          </h3>
          {project.featured && (
            <p className="mt-3 font-sans text-xs text-[#47695a]">
              重点项目
            </p>
          )}
        </div>

        <div>
          <p className="font-sans text-base leading-8 text-[#303532]">
            {project.intro}
          </p>

          <dl className="mt-6 divide-y divide-[#e3e7e3] border-y border-[#e3e7e3]">
            {project.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 py-4 font-sans text-sm leading-7 sm:grid-cols-[116px_minmax(0,1fr)]"
              >
                <dt className="font-medium text-[#171717]">{row.label}</dt>
                <dd className="text-[#5f6662]">
                  <DetailValue value={row.value} />
                </dd>
              </div>
            ))}
          </dl>

          {project.evidence && project.evidence.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {project.evidence.map((link) => (
                <ExternalButton key={link.href} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function HeroSection() {
  return (
    <section
      id="intro"
      className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-5xl items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-[minmax(0,1fr)_280px]"
    >
      <div>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#47695a]">
          Robotics Software / AI Agent / RAG / ROS 2
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#171717] sm:text-5xl">
          赵红利 / YOLO
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-[#4d5651]">
          我关注机器人系统、ROS 2 控制链路、AI Agent、企业知识库与智能检索系统，
          目标是把 AI / 机器人想法做成可运行、可演示、可评估的工程原型。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/zhao-hongli-resume.pdf"
            className="inline-flex min-h-11 items-center gap-2 bg-[#171717] px-4 py-2 font-sans text-sm text-white hover:bg-[#2f5f48]"
          >
            <Download size={15} aria-hidden="true" />
            下载简历
          </a>
          <a
            href="#robotics"
            className="inline-flex min-h-11 items-center border border-[#c8d0ca] bg-white px-4 py-2 font-sans text-sm text-[#171717] hover:border-[#47695a] hover:text-[#2f5f48]"
          >
            查看项目
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[260px]">
        <div className="aspect-[4/5] border border-[#c8d0ca] bg-[#f2f4f1] p-4">
          <div className="flex h-full items-center justify-center border border-dashed border-[#b9c2bb]">
            <div className="text-center font-sans">
              <p className="text-sm font-medium text-[#171717]">头像占位</p>
              <p className="mt-2 text-xs leading-5 text-[#6b736f]">
                之后替换为真实头像
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoboticsSection() {
  return (
    <section id="robotics" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow="Robotics Projects"
        title="机器人项目"
        intro="优先展示真实机器人和正在推进的机器人产品原型。这里保留项目状态边界，避免把工程验证夸大成完整产品。"
      />

      <div className="mt-8">
        <ProjectBlock project={scoutProject} />
        <ProjectBlock project={gogoProject} />
      </div>
    </section>
  );
}

function AiRagSection() {
  return (
    <section id="ai-rag" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow="AI Agent And RAG"
        title="AI Agent 与 RAG 项目"
        intro="这部分突出企业级 AI 系统、Agent 链路、知识库检索、智能问答和评测流程。"
      />

      <div className="mt-8">
        <ProjectBlock project={lenovoProject} />

        <div className="grid gap-8 border-t border-[#d8ddd8] pt-8 md:grid-cols-2">
          {secondaryAiProjects.map((project) => (
            <article key={project.title}>
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-[#6b736f]">
                {project.subtitle}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#171717]">
                {project.title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-7 text-[#4d5651]">
                {project.intro}
              </p>
              <dl className="mt-5 border-t border-[#e3e7e3] pt-4">
                {project.rows.map((row) => (
                  <div key={row.label} className="font-sans text-sm leading-7">
                    <dt className="font-medium text-[#171717]">{row.label}</dt>
                    <dd className="mt-1 text-[#5f6662]">
                      <DetailValue value={row.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow="Capability Stack"
        title="我的能力组合"
        intro="不按技术名词堆标签，而是按能交付的工程能力组织。"
      />

      <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="border-t border-[#d8ddd8] pt-5">
            <h3 className="font-sans text-base font-semibold text-[#171717]">
              {group.title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-7 text-[#5f6662]">
              {group.body}
            </p>
          </section>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="border-t border-[#d8ddd8] pt-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect."
          intro="如果你对 Robotics、AI Agent 或 RAG 项目感兴趣，欢迎联系我。"
        />

        <div className="mt-8 grid gap-3 font-sans text-sm sm:grid-cols-2">
          <a
            href="mailto:hollyzhao001@163.com"
            className="inline-flex min-h-11 items-center gap-2 border border-[#d8ddd8] bg-white px-3 text-[#171717] hover:border-[#47695a] hover:text-[#2f5f48]"
          >
            <Mail size={15} aria-hidden="true" />
            hollyzhao001@163.com
          </a>
          <a
            href="tel:+8613219400519"
            className="inline-flex min-h-11 items-center gap-2 border border-[#d8ddd8] bg-white px-3 text-[#171717] hover:border-[#47695a] hover:text-[#2f5f48]"
          >
            <Phone size={15} aria-hidden="true" />
            13219400519
          </a>
          <a
            href="/zhao-hongli-resume.pdf"
            className="inline-flex min-h-11 items-center gap-2 border border-[#d8ddd8] bg-white px-3 text-[#171717] hover:border-[#47695a] hover:text-[#2f5f48]"
          >
            <Download size={15} aria-hidden="true" />
            简历 PDF
          </a>
          <a
            href="https://github.com/AwesomeBaron001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border border-[#d8ddd8] bg-white px-3 text-[#171717] hover:border-[#47695a] hover:text-[#2f5f48]"
          >
            <Github size={15} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://blog.csdn.net/m0_46464899"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border border-[#d8ddd8] bg-white px-3 text-[#171717] hover:border-[#47695a] hover:text-[#2f5f48]"
          >
            <Globe size={15} aria-hidden="true" />
            CSDN
          </a>
        </div>
      </div>
    </section>
  );
}

export function PortfolioPage() {
  return (
    <div className="bg-[#f7f8f7] text-[#171717]">
      <HeroSection />
      <RoboticsSection />
      <AiRagSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
