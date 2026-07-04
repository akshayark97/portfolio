import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StackSection } from "@/components/StackSection";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <StackSection index={1} card={false}>
          <Hero />
          <Marquee />
        </StackSection>
        <StackSection index={2}>
          <Projects />
        </StackSection>
        <StackSection index={3}>
          <Skills />
        </StackSection>
        <StackSection index={4}>
          <Experience />
        </StackSection>
        <StackSection index={5}>
          <About />
        </StackSection>
        <StackSection index={6}>
          <Contact />
        </StackSection>
      </main>
    </>
  );
}
