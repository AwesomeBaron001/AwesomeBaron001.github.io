import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "赵红利 / YOLO｜Robotics, AI Agent, RAG",
  description:
    "赵红利的工程作品集：Robotics Software、ROS 2 控制链路、AI Agent、RAG、企业知识库与智能检索系统。",
};

export default function Page() {
  return <PortfolioPage />;
}
