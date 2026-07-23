import { Container } from "@/components/global/Container";
import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { Section } from "@/components/global/Section";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section id="hero" background="base" weight="flagship">
          <Container size="flagship" className="text-center">
            <Hero />
          </Container>
        </Section>

        <Section id="philosophy" background="raised" weight="flagship">
          <Container size="condensed">
            <h2 className="text-h2">Philosophy Placeholder</h2>
          </Container>
        </Section>

        <Section id="decision-case-a" background="base" weight="flagship">
          <Container size="flagship">
            <h2 className="text-h2">Decision Case A Placeholder</h2>
          </Container>
        </Section>

        <Section id="fintrack" background="raised" weight="flagship">
          <Container size="flagship">
            <h2 className="text-h2">FinTrack Placeholder</h2>
          </Container>
        </Section>

        <Section id="decision-case-b" background="base" weight="condensed">
          <Container size="condensed">
            <h2 className="text-h2">Decision Case B Placeholder</h2>
          </Container>
        </Section>

        <Section id="case-study-b" background="raised" weight="condensed">
          <Container size="condensed">
            <h2 className="text-h2">Case Study B Placeholder</h2>
          </Container>
        </Section>

        <Section id="resume" background="base" weight="flagship">
          <Container size="resume">
            <h2 className="text-h2">Resume Placeholder</h2>
          </Container>
        </Section>

        <Section id="contact" background="raised" weight="flagship">
          <Container size="flagship" className="text-center">
            <h2 className="text-h2">Contact Placeholder</h2>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
