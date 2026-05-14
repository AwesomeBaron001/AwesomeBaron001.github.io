import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { BlogPosts } from "@/components/BlogPosts";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { fetchCSDNPosts } from "@/lib/csdn";

export default async function Home() {
  const posts = await fetchCSDNPosts(5);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BlogPosts posts={posts} />
      <Writing />
      <Contact />
    </>
  );
}
