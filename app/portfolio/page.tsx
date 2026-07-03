import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "机器人与 AI 系统作品集｜赵红利",
  description: "赵红利的机器人与 AI 系统作品集：ROS 2 实机机器人、智能遛狗机器人 MVP、联想实习与 AI 系统项目。",
};

const roboticsProjects = [
  {
    label: "Real Robot · ROS 2 Jazzy · Hackathon",
    title: "Scout Dog Walk：可监督的遛狗机器人原型",
    description:
      "在 38 小时黑客松中，带队将松灵 Scout Mini 底盘改造成可通过网页控制的机器人 Demo。系统支持固定路线执行、速度控制、暂停恢复、急停和状态显示，并完成现场实机演示。",
    facts: [
      "我的职责：队长；负责系统设计、ROS 2 控制链路、路线状态机、Web 到机器人端通信、部署与演示。",
      "技术栈：ROS 2 Jazzy, Python rclpy, rosbridge, ROSLIB.js, Scout Mini, SocketCAN, Web UI。",
      "结果：松灵机器人赛道二等奖；完成真实底盘演示。",
    ],
    links: [
      { label: "演示视频", href: "https://www.bilibili.com/video/BV1m1Gj6fEQR" },
      { label: "项目代码", href: "https://github.com/AwesomeBaron001/scout_dog" },
    ],
  },
  {
    label: "Ongoing MVP · ROS 2 Humble · Nav2",
    title: "6gogo：智能遛狗机器人 MVP",
    description:
      "面向固定路线自主巡航的机器人 MVP。当前重点是三层架构设计和关键硬件验收：Insight 9 负责 VIO / 深度感知，x86 主控运行 Nav2 与状态机，STM32 负责底盘闭环和硬急停。",
    facts: [
      "当前状态：已确认 Insight 9 ROS native 基础数据流；Nav2 所需 TF/odom 与点云链路仍在桥接验证中。",
      "系统设计：固定路线 FollowWaypoints、狗检测安全监控、牵引张力监测、safety_controller 停车策略。",
      "技术栈：ROS 2 Humble, Nav2, VSLAM, YOLO, depth image processing, STM32, Web UI。",
    ],
    links: [],
  },
];

const aiProjects = [
  {
    label: "Internship · Lenovo",
    title: "联想 FIFA AI Pro 数据分析项目",
    description:
      "在联想实习期间参与 FIFA AI Pro 相关数据分析系统建设，围绕足球赛事数据问答、分析链路和模型效果评估做工程落地。",
    facts: [
      "负责 prompt optimization pipeline，提升复杂问题下的回答稳定性和可控性。",
      "优化 data agent 执行链路，参与 Text-to-SQL 语义解析与数据查询流程。",
      "整理离线评测数据集，用可复现指标评估问答、查询和报告生成效果。",
    ],
    links: [
      {
        label: "联想官方介绍",
        href: "https://mp.weixin.qq.com/s/lqnvTUSzjc7A_vy0UK_s5A",
      },
    ],
  },
  {
    label: "Enterprise RAG",
    title: "无人机技术文档智能检索",
    description:
      "参与 BM25 + 向量语义混合检索，独立搭建 OCR 与 CLIP 多模态索引。基于真实问答集做召回、覆盖度、BLEU / ROUGE 评测。",
    facts: [],
    links: [],
  },
  {
    label: "Agent Product",
    title: "Deep Research Agent",
    description:
      "使用 LangGraph 设计协调器、规划器、研究员、报告员多角色状态机，集成 Tavily、RAGFlow、MCP、React 与 FastAPI 完成研究报告自动化。",
    facts: [],
    links: [],
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <section className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
            Robotics Software · AI Agents · ROS 2
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-serif font-semibold leading-tight text-text-primary sm:text-6xl">
            机器人与 AI 系统作品集
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            我是赵红利，计算机硕士，方向聚焦机器人软件、ROS 2 控制链路、企业 AI 系统与智能检索工程。
            这个页面给面试官快速查看可运行项目、系统架构、我的职责和演示证据。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#robotics"
              className="rounded border border-text-primary px-4 py-2 text-sm font-medium text-text-primary hover:border-accent hover:text-accent"
            >
              查看机器人项目
            </a>
            <a
              href="/zhao-hongli-resume.pdf"
              className="inline-flex items-center gap-2 rounded border border-text-primary/10 px-4 py-2 text-sm text-text-secondary hover:border-accent/50 hover:text-accent"
            >
              <Download size={15} />
              下载简历
            </a>
          </div>
        </div>

        <div className="rounded border border-text-primary/10 bg-white/60 p-5">
          <p className="text-xs font-sans tracking-widest text-text-secondary uppercase">
            Portfolio focus
          </p>
          <div className="mt-5 grid gap-3">
            {["ROS 2 / rclpy / Nav2", "Web UI -> rosbridge -> /cmd_vel", "AI data workflow / evaluation", "React / FastAPI / Linux deployment"].map((item) => (
              <div key={item} className="rounded border border-text-primary/10 bg-bg px-4 py-3 text-sm text-text-secondary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px px-6 pb-20 md:grid-cols-3">
        {[
          ["38h", "黑客松周期内完成 Scout Mini 实机控制链路和现场演示。"],
          ["ROS 2", "从 Web UI 到 rosbridge，再到节点、/cmd_vel、CAN 与底盘控制。"],
          ["2nd", "深圳神笔码良黑客松松灵机器人赛道二等奖。"],
        ].map(([metric, text]) => (
          <div key={metric} className="border border-text-primary/10 bg-white/60 p-6">
            <span className="font-serif text-4xl text-accent">{metric}</span>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">{text}</p>
          </div>
        ))}
      </section>

      <section id="robotics" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
          Featured Robotics Work
        </p>
        <h2 className="mt-3 text-3xl font-serif font-semibold text-text-primary sm:text-5xl">
          机器人项目
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-secondary">
          这里优先展示真实机器人和机器人系统架构。每个项目都说明“我做了什么”和“证据在哪里”。
        </p>

        <div className="mt-10 space-y-8">
          {roboticsProjects.map((project) => (
            <article key={project.title} className="grid gap-8 rounded border border-text-primary/10 bg-white/60 p-6 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
                  {project.label}
                </p>
                <h3 className="mt-3 text-2xl font-serif font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-text-primary/10 pt-5">
                  {project.facts.map((fact) => (
                    <li key={fact} className="text-sm leading-relaxed text-text-secondary">
                      {fact}
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded border border-text-primary/10 px-3 py-2 text-sm text-text-primary hover:border-accent/50 hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {project.title.startsWith("Scout") ? (
                <iframe
                  title="Scout Dog Walk 演示视频"
                  src="https://player.bilibili.com/player.html?bvid=BV1m1Gj6fEQR&page=1"
                  allowFullScreen
                  className="min-h-64 w-full rounded border border-text-primary/10 bg-text-primary/5"
                />
              ) : (
                <div className="grid content-center gap-3 rounded border border-text-primary/10 bg-bg p-5">
                  {["Insight 9: VIO / Depth / RGB", "x86 主控: Nav2 / TF bridge / 状态机", "STM32: 电机闭环 / 里程计 / 急停"].map((item) => (
                    <div key={item} className="rounded border border-text-primary/10 bg-white/70 px-4 py-3 text-sm text-text-secondary">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
          Internship And AI Systems
        </p>
        <h2 className="mt-3 text-3xl font-serif font-semibold text-text-primary sm:text-5xl">
          企业实习与 AI 系统项目
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-secondary">
          这部分重点展示我在企业实习和工程项目中做过的 AI 系统工作，强调职责、可验证项目背景和工程产出。
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {aiProjects.map((project, index) => (
            <article
              key={project.title}
              className={`rounded border border-text-primary/10 bg-white/60 p-5 ${
                index === 0 ? "md:col-span-3" : ""
              }`}
            >
              <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
                {project.label}
              </p>
              <h3 className="mt-3 text-xl font-serif font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
              {project.facts.length > 0 && (
                <ul className="mt-6 grid gap-3 border-t border-text-primary/10 pt-5 md:grid-cols-3">
                  {project.facts.map((fact) => (
                    <li key={fact} className="text-sm leading-relaxed text-text-secondary">
                      {fact}
                    </li>
                  ))}
                </ul>
              )}
              {project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-text-primary/10 px-3 py-2 text-sm text-text-primary hover:border-accent/50 hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-text-primary/10 px-6 py-20">
        <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-serif font-semibold text-text-primary">
          联系我
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:hollyzhao001@163.com" className="inline-flex items-center gap-2 rounded border border-text-primary/10 px-3 py-2 text-sm text-text-primary hover:border-accent/50 hover:text-accent">
            <Mail size={15} />
            hollyzhao001@163.com
          </a>
          <a href="tel:+8613219400519" className="inline-flex items-center gap-2 rounded border border-text-primary/10 px-3 py-2 text-sm text-text-primary hover:border-accent/50 hover:text-accent">
            <Phone size={15} />
            13219400519
          </a>
          <a href="/zhao-hongli-resume.pdf" className="inline-flex items-center gap-2 rounded border border-text-primary/10 px-3 py-2 text-sm text-text-primary hover:border-accent/50 hover:text-accent">
            <Download size={15} />
            简历 PDF
          </a>
        </div>
        <div className="mt-10">
          <Link href="/" className="text-sm text-text-secondary hover:text-accent">
            返回主页
          </Link>
        </div>
      </section>
    </div>
  );
}
