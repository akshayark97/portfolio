import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { SectionHeading } from "@/components/SectionHeading";
import { Skills } from "@/components/Skills";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StackSection } from "@/components/StackSection";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <div id="top" />
        <StackSection index={1} card={false} next="Selected Work">
          <Hero />
          <Marquee />
        </StackSection>
        <div id="work" />
        <StackSection
          index={2}
          heading={<SectionHeading index="01" title="Selected Work" />}
          next="The Stack"
        >
          <Projects />
        </StackSection>
        <div id="stack" />
        <StackSection
          index={3}
          heading={
            <SectionHeading
              index="02"
              title="The Stack"
              hint="Tools I reach for when it matters"
            />
          }
          next="Experience"
        >
          <Skills />
        </StackSection>
        <div id="experience" />
        <StackSection
          index={4}
          heading={<SectionHeading index="03" title="Experience" />}
          next="About"
        >
          <Experience />
        </StackSection>
        <div id="about" />
        <StackSection
          index={5}
          heading={<SectionHeading index="04" title="About" />}
          next="Contact"
        >
          <About />
        </StackSection>
        <div id="contact" />
        <StackSection index={6}>
          <Contact />
        </StackSection>
      </main>
    </>
  );
}
