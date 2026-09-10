import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "机器人软件与具身智能工程作品集｜赵红利",
  description: "赵红利的机器人软件与具身智能工程作品集：ROS 2、机器人 SDK、传感器集成、Web Cockpit 与真实机器人项目。",
};

const roboticsProjects = [
  {
    label: "2026.09 · Core Developer · Award-winning Hardware Project",
    title: "基于智元远征 A3 的乐园跟拍机器人",
    description:
      "面向主题乐园游客与 NPC 互动场景，基于智元远征 A3 人形机器人开发自主运镜系统。通过灵巧手稳定握持 Insta360 X4 全景相机，控制机械臂完成多方向移动与腕部姿态调整，实现对话过程中的动态跟拍和视频录制。",
    tech: ["Python", "ROS 2", "rclpy", "Pinocchio", "Inverse Kinematics", "URDF", "智元远征 A3", "Insta360 X4"],
    facts: [
      "机械臂运动控制与逆运动学：基于 ROS 2 搭建 A3 双臂关节状态订阅与指令发布链路，使用 Pinocchio 和 URDF 构建 7 自由度机械臂模型；实现分阶段阻尼最小二乘 IK、零空间参考姿态优化、关节限位及 Cartesian Waypoint 连续求解，支持相机前后、左右、升降和定点移动。",
      "平滑运镜与实机误差修正：采用五次多项式插值生成 100 Hz 平滑关节轨迹，支持末端位置与腕部 Roll / Pitch / Yaw 独立控制；结合安全工作空间校验、重力位置前馈和最多两轮闭环到位修正，提升大范围运镜过程的平顺性与末端定位稳定性。",
      "灵巧手相机抓持与控制保活：针对 Insta360 X4 握持需求标定双手多关节 PWM 开合参数，开发张手、闭合、抓握和持续保持动作；设计机械臂与灵巧手并行 Keepalive 机制，以手部 30 Hz、机械臂 10 Hz 持续发布控制指令，避免拍摄过程中手指回弹和手臂下垂。",
    ],
    links: [
      { label: "项目视频 · 小红书", href: "https://xhslink.cn/o/5Fp1EchC8XP" },
    ],
    image: undefined,
    imageAlt: undefined,
  },
  {
    label: "2026.08 · Core Developer · Alloop Track Winner",
    title: "四自由度主动式下肢外骨骼机器人",
    description:
      "香港 Physical AI 黑客松团队项目。基于 K3 CoM260 RISC-V 边缘计算平台、Bianbu Linux 与 ROS 2 Humble 搭建四自由度主动式下肢外骨骼，获得 Alloop 赛道冠军。",
    tech: ["K3 CoM260", "RISC-V", "Bianbu Linux", "ROS 2 Humble", "4× sensor_msgs/Imu", "BLE GATT", "FastAPI", "WebSocket", "Web Cockpit"],
    facts: [
      "我的职责：核心开发；负责可穿戴传感器数据接入、K3 / ROS 2 遥测集成及机器人 Web 交互系统开发。",
      "K3 / ROS 2 集成：订阅四路 sensor_msgs/Imu Topic，聚合姿态、角速度、线加速度、频率、延迟和在线状态，并实时推送至 Web Cockpit。",
      "BLE 数据链路：基于 AlloopCore Android SDK 接入智能戒指，采集 SpO₂ / PPG / ACC，并搭建 Android → WebSocket → PC 数据桥接。",
      "异常工况联调：以 Mock Controller 和 ROS 2 Mock Node 验证急停、CAN 离线、过热、超时与执行失败等状态链路。",
      "技术栈：RISC-V, K3 CoM260, Bianbu Linux, ROS 2 Humble, BLE GATT, Python, WebSocket, FastAPI, Android / Flutter。",
    ],
    links: [
      { label: "Demo · Bilibili", href: "https://b23.tv/wL4oHEi" },
      { label: "Demo · Xiaohongshu", href: "https://xhslink.cn/o/1n0vdnV1D1i" },
    ],
    image: "/physical-ai-hackathon.jpg",
    imageAlt: "香港 Physical AI 黑客松外骨骼机器人团队获得 Alloop 赛道冠军",
  },
  {
    label: "2026.07 · Team Lead · 38h Hackathon",
    title: "银河通用 G1 拥抱机器人",
    description:
      "基于 G1 人形机器人开发多模态陪伴交互系统，融合头部双目深度感知、实时语音交互和预设姿态控制，实现从靠近检测、柔性回抱到安全复位的完整交互闭环。",
    tech: ["G1 SDK", "Stereo Depth", "State Machine", "VAD", "ASR / TTS", "Python"],
    facts: [
      "我的职责：队长；负责 G1 SDK 二次开发、动作状态机、双目深度感知与实时语音交互链路。",
      "动作控制：实现靠近检测、拥抱触发、张臂、轻微回抱、松开及安全复位，在 38 小时内完成可演示流程。",
      "深度感知：基于头部双目深度图完成 ROI 有效深度筛选、中位距离统计、连续帧确认与进入 / 退出滞回。",
      "语音交互：串联音频流采集、VAD 分段、GLM ASR、对话生成、TTS 与异步播放，并以 Provider 抽象外部模型服务。",
      "项目成果：获得中国青年报视频采访；探月官方小红书专题报道。",
    ],
    links: [
      { label: "Interview · 中国青年报", href: "https://wap.cyol.com/videoDetail/1415118?from=QRCODE" },
      { label: "Demo · Xiaohongshu", href: "https://xhslink.cn/o/5X2eXwvNsAy" },
    ],
    image: "/moonshot-hackathon.jpg",
    imageAlt: "北京探月 Physical AI 黑客松拥抱机器人团队与银河通用 G1 合影",
  },
  {
    label: "Real Robot · ROS 2 Jazzy · Hackathon",
    title: "Scout Dog Walk：可监督的遛狗机器人原型",
    description:
      "在 38 小时黑客松中，带队将松灵 Scout Mini 底盘改造成可通过网页控制的机器人 Demo。系统支持固定路线执行、速度控制、暂停恢复、急停和状态显示，并完成现场实机演示。",
    tech: ["ROS 2 Jazzy", "Python rclpy", "rosbridge", "ROSLIB.js", "Scout Mini", "SocketCAN", "Web UI"],
    facts: [
      "我的职责：队长；负责系统设计、ROS 2 控制链路、路线状态机、Web 到机器人端通信、部署与演示。",
      "技术栈：ROS 2 Jazzy, Python rclpy, rosbridge, ROSLIB.js, Scout Mini, SocketCAN, Web UI。",
      "结果：松灵机器人赛道二等奖；完成真实底盘演示。",
    ],
    links: [
      { label: "Demo", href: "https://www.bilibili.com/video/BV1m1Gj6fEQR" },
      { label: "GitHub", href: "https://github.com/AwesomeBaron001/scout_dog" },
    ],
    image: undefined,
    imageAlt: undefined,
  },
];

const currentlyBuilding = {
  title: "6gogo Autonomous Dog Walking Robot",
  description:
    "面向固定路线自主巡航的机器人 MVP。当前重点是三层架构设计和关键硬件验收：Insight 9 负责 VIO / 深度感知，x86 主控运行 Nav2 与状态机，STM32 负责底盘闭环和硬急停。",
  facts: [
    "当前状态：已确认 Insight 9 ROS native 基础数据流；Nav2 所需 TF/odom 与点云链路仍在桥接验证中。",
    "系统设计：固定路线 FollowWaypoints、狗检测安全监控、牵引张力监测、safety_controller 停车策略。",
    "技术栈：ROS 2 Humble, Nav2, VSLAM, YOLO, depth image processing, STM32, Web UI。",
  ],
  tech: ["Insight+ VIO / Depth / RGB", "Nav2", "STM32", "Web UI"],
};

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
  const [flagshipProject, ...supportingProjects] = roboticsProjects;

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-14 pt-32 md:grid-cols-[minmax(0,1fr)_360px] md:pb-16 md:pt-40">
        <div>
          <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
            Robotics Software · ROS 2 · Embodied AI
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-serif font-semibold leading-[1.18] text-text-primary sm:text-6xl">
            机器人软件与具身智能工程作品集
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534e]">
            计算机硕士，专注 Robotics Software、ROS 2 系统集成与机器人智能交互。
            从传感器、SDK、ROS 2 Topic 到 Web Cockpit，持续构建真实机器人端到端系统。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#robotics"
              className="inline-flex items-center gap-2 rounded border border-text-primary px-4 py-2.5 text-sm font-medium text-text-primary hover:border-accent hover:text-accent"
            >
              View Robotics Work
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="rounded border border-text-primary/10 bg-white/60 p-5">
          <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
            Core Stack
          </p>
          <div className="mt-5 grid gap-3">
            {[
              "ROS 2 · rclpy · Topic / Node / Launch",
              "Pinocchio · IK · URDF · Trajectory Planning",
              "Robot SDK · Sensor Integration · BLE",
              "Linux · Edge Deployment · Web Cockpit",
            ].map((item) => (
              <div key={item} className="rounded border border-text-primary/10 bg-bg px-4 py-3 text-sm leading-6 text-[#57534e]">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section aria-label="Portfolio statistics" className="mx-auto grid max-w-6xl gap-px px-6 pb-14 md:grid-cols-3">
        {[
          { metric: "5", label: "Real Robot Projects", detail: "A3 / Exoskeleton / G1 / Scout / 6gogo" },
          { metric: "4", label: "Hardware Platforms", detail: "A3 / K3 / G1 / Scout Mini" },
          { metric: "3", label: "Awarded Builds", detail: "SHENICEST / Alloop / Scout" },
        ].map(({ metric, label, detail }) => (
          <div key={metric} className="border border-text-primary/10 bg-white/60 p-6">
            <span className="font-serif text-4xl text-accent">{metric}</span>
            <p className="mt-3 text-sm font-sans font-semibold text-text-primary">{label}</p>
            <p className="mt-1 text-xs leading-5 text-[#57534e]">{detail}</p>
          </div>
        ))}
      </section>

      <section id="robotics" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
          Featured Robotics Work
        </p>
        <h2 className="mt-3 text-3xl font-serif font-semibold text-text-primary sm:text-5xl">
          机器人项目
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#57534e]">
          真实硬件、ROS 2 系统集成与机器人端到端交互是本页主轴。项目按工程相关性与个人贡献呈现。
        </p>

        <article className="mt-10 rounded border border-accent/45 bg-white/80 p-6 shadow-[0_18px_50px_rgba(26,26,26,0.06)] md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex rounded-full border border-accent/45 bg-accent/[0.09] px-3 py-1.5 text-xs font-sans font-semibold text-accent">
              SHENICEST Hackathon · Hardware Track 3rd
            </span>
            <span className="text-xs font-sans tracking-widest text-[#57534e] uppercase">2026.09 · Core Developer</span>
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
            <div>
              <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">Flagship Project</p>
              <h3 className="mt-3 text-3xl font-serif font-semibold leading-tight text-text-primary sm:text-4xl">
                {flagshipProject.title}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#57534e]">{flagshipProject.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {flagshipProject.tech.map((item) => (
                  <span key={item} className="rounded-full border border-text-primary/10 bg-bg px-2.5 py-1 text-xs font-sans text-[#57534e]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded border border-text-primary/10 bg-[#181816] p-6 text-white shadow-inner sm:p-7">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-accent/20" />
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-accent/30" />
              <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">Camera Motion System</p>
              <div className="mt-8 grid grid-cols-3 gap-2 text-center font-sans">
                {["±X", "±Y", "±Z"].map((axis) => (
                  <div key={axis} className="rounded border border-white/15 bg-white/[0.04] py-4">
                    <span className="text-xl font-medium">{axis}</span>
                    <p className="mt-1 text-[10px] tracking-wider text-white/50 uppercase">Cartesian</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center font-sans">
                {["Roll", "Pitch", "Yaw"].map((axis) => (
                  <div key={axis} className="rounded border border-white/10 py-3 text-xs text-white/70">{axis}</div>
                ))}
              </div>
              <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-5 font-sans">
                <div><strong className="text-2xl font-medium text-accent">100 Hz</strong><p className="mt-1 text-[10px] tracking-wider text-white/45 uppercase">Joint trajectory</p></div>
                <div className="text-right"><strong className="text-2xl font-medium text-accent">7-DoF</strong><p className="mt-1 text-[10px] tracking-wider text-white/45 uppercase">Arm model</p></div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded border border-text-primary/10 bg-text-primary/10 md:grid-cols-3">
            {[
              {
                title: "Motion Control",
                items: ["Damped Least-Squares IK", "Null-space posture optimization", "Cartesian waypoint solving"],
              },
              {
                title: "Smooth & Safe",
                items: ["100 Hz quintic trajectories", "Workspace & joint-limit checks", "Gravity feedforward + closed-loop correction"],
              },
              {
                title: "Reliable Grasp",
                items: ["Insta360 X4 PWM calibration", "Hand keepalive · 30 Hz", "Arm keepalive · 10 Hz"],
              },
            ].map((block) => (
              <div key={block.title} className="bg-bg p-5">
                <h4 className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">{block.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-[#57534e]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-text-primary/10 pt-7">
            <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">Engineering Details</p>
            <ul className="mt-5 grid gap-5 lg:grid-cols-3">
              {flagshipProject.facts.map((fact, index) => {
                const [heading, detail] = fact.split("：");
                return (
                  <li key={fact} className="text-sm leading-7 text-[#57534e]">
                    <span className="mb-2 block font-sans text-xs font-semibold text-text-primary">
                      {String(index + 1).padStart(2, "0")} · {heading}
                    </span>
                    {detail}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-6 rounded border border-accent/30 bg-accent/[0.07] px-5 py-4">
            <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">Project Results</p>
            <p className="mt-2 text-sm leading-7 text-text-primary">北京 SHENICEST 千人黑客松硬件赛道三等奖 · 智元赛题第一名 · 影石 Insta360 赛题第二名</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {flagshipProject.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded border border-text-primary/15 px-3 py-2 text-sm text-text-primary hover:border-accent/60 hover:text-accent">
                {link.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>

        <div className="mt-8 space-y-6">
          {supportingProjects.map((project) => (
            <article key={project.title} className="grid gap-8 rounded border border-text-primary/10 bg-white/60 p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(26,26,26,0.06)] lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
                  {project.label}
                </p>
                <h3 className="mt-3 text-2xl font-serif font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#57534e]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-text-primary/10 bg-bg px-2.5 py-1 text-xs font-sans text-[#57534e]">{item}</span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 border-t border-text-primary/10 pt-5">
                  {project.facts.map((fact) => (
                    <li key={fact} className="text-sm leading-7 text-[#57534e]">
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
                        className="inline-flex items-center gap-2 rounded border border-text-primary/15 px-3 py-2 text-sm text-text-primary hover:border-accent/60 hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {project.image ? (
                <figure>
                  <div className="overflow-hidden rounded border border-text-primary/10 bg-text-primary/5">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-[#57534e]">
                    {project.imageAlt}
                  </figcaption>
                </figure>
              ) : (
                <iframe
                  title="Scout Dog Walk 演示视频"
                  src="https://player.bilibili.com/player.html?bvid=BV1m1Gj6fEQR&page=1"
                  allowFullScreen
                  className="aspect-[4/3] w-full rounded border border-text-primary/10 bg-text-primary/5"
                />
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-y border-text-primary/10 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">Currently Building</p>
              <h2 className="mt-3 text-3xl font-serif font-semibold text-text-primary">{currentlyBuilding.title}</h2>
            </div>
            <span className="rounded-full border border-accent/45 bg-accent/[0.08] px-3 py-1.5 text-xs font-sans font-semibold text-accent">Status: In Development</span>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#57534e]">{currentlyBuilding.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {currentlyBuilding.tech.map((item) => (
              <span key={item} className="rounded-full border border-text-primary/10 bg-white/60 px-2.5 py-1 text-xs font-sans text-[#57534e]">{item}</span>
            ))}
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {currentlyBuilding.facts.slice(0, 2).map((fact) => (
              <li key={fact} className="text-sm leading-7 text-[#57534e]">{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="ai-systems" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
          Selected AI Engineering
        </p>
        <h2 className="mt-3 text-3xl font-serif font-semibold text-text-primary sm:text-4xl">
          AI 系统工程
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#57534e]">
          作为机器人软件能力的补充：企业数据系统、智能检索与 Agent 工程经验。
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {aiProjects.map((project, index) => (
            <article
              key={project.title}
              className={`rounded border border-text-primary/10 bg-white/50 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_10px_24px_rgba(26,26,26,0.05)] ${
                index === 0 ? "p-6 md:col-span-2" : "p-5"
              }`}
            >
              <p className="text-xs font-sans font-semibold tracking-widest text-accent uppercase">
                {project.label}
              </p>
              <h3 className="mt-3 text-xl font-serif font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#57534e]">
                {project.description}
              </p>
              {project.facts.length > 0 && (
                <ul className="mt-6 grid gap-3 border-t border-text-primary/10 pt-5 md:grid-cols-3">
                  {project.facts.map((fact) => (
                    <li key={fact} className="text-sm leading-7 text-[#57534e]">
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
                      className="inline-flex items-center gap-2 rounded border border-text-primary/15 px-3 py-2 text-sm text-text-primary hover:border-accent/60 hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl border-t border-text-primary/10 px-6 py-16">
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
