import { Container } from "@/components/global/Container";
import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { Section } from "@/components/global/Section";
import { CaseStudyBlock } from "@/components/proof/CaseStudyBlock";
import { DecisionCaseBlock } from "@/components/proof/DecisionCaseBlock";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Resume } from "@/components/sections/Resume";
import {
  getCaseStudiesContent,
  getContactContent,
  getDecisionCasesContent,
  getHeroContent,
  getPhilosophyContent,
  getResumeContent,
  getSiteConfigContent,
  requireContentById,
} from "@/lib/content";

export default function Home() {
  const site = getSiteConfigContent();
  const heroContent = getHeroContent();
  const philosophyContent = getPhilosophyContent();
  const decisionCaseA = requireContentById(
    getDecisionCasesContent(),
    "decision-case-a"
  );
  const decisionCaseB = requireContentById(
    getDecisionCasesContent(),
    "decision-case-b"
  );
  const fintrack = requireContentById(getCaseStudiesContent(), "fintrack");
  const caseStudyB = requireContentById(getCaseStudiesContent(), "case-b");
  const resumeContent = getResumeContent();
  const contactContent = getContactContent();

  return (
    <>
      <Header site={site} />
      <main id="main">
        <Section id="hero" background="base" weight="flagship">
          <Container size="flagship" className="text-center">
            <Hero content={heroContent} />
          </Container>
        </Section>

        <Section
          id="philosophy"
          background="raised"
          className="border-t border-border"
          weight="flagship"
        >
          <Container size="condensed">
            <Philosophy content={philosophyContent} />
          </Container>
        </Section>

        <Section id="decision-case-a" background="base" weight="flagship">
          <Container size="flagship">
            <DecisionCaseBlock content={decisionCaseA} />
          </Container>
        </Section>

        <Section id="fintrack" background="raised" weight="flagship">
          <Container size="flagship">
            <CaseStudyBlock content={fintrack} />
          </Container>
        </Section>

        <Section id="decision-case-b" background="base" weight="condensed">
          <Container size="condensed">
            <DecisionCaseBlock content={decisionCaseB} />
          </Container>
        </Section>

        <Section id="case-b" background="raised" weight="condensed">
          <Container size="condensed">
            <CaseStudyBlock content={caseStudyB} />
          </Container>
        </Section>

        <Section id="resume" background="base" weight="flagship">
          <Container size="resume">
            <Resume content={resumeContent} />
          </Container>
        </Section>

        <Section id="contact" background="raised" weight="flagship">
          <Container size="flagship">
            <Contact content={contactContent} site={site} />
          </Container>
        </Section>
      </main>
      <Footer site={site} />
    </>
  );
}
