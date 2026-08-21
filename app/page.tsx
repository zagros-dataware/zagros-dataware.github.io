import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Approach from "@/components/Approach";
import ResourcesTeaser from "@/components/ResourcesTeaser";
import BlogTeaser from "@/components/BlogTeaser";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <Approach />
      <ResourcesTeaser />
      <BlogTeaser />
      <Contact />
    </>
  );
}
