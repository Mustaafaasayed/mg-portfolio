import {
  caseStudies,
  contact,
  decisionCases,
  hero,
  philosophy,
  resume,
  siteConfig,
} from "#velite";

export type HeroContent = typeof hero;
export type PhilosophyContent = typeof philosophy;
export type DecisionCaseContent = (typeof decisionCases)[number];
export type CaseStudyContent = (typeof caseStudies)[number];
export type ResumeContent = typeof resume;
export type ContactContent = typeof contact;
export type SiteConfigContent = typeof siteConfig;

export function getHeroContent(): HeroContent {
  return hero;
}

export function getPhilosophyContent(): PhilosophyContent {
  return philosophy;
}

export function getDecisionCasesContent(): readonly DecisionCaseContent[] {
  return decisionCases;
}

export function getCaseStudiesContent(): readonly CaseStudyContent[] {
  return caseStudies;
}

export function getResumeContent(): ResumeContent {
  return resume;
}

export function getContactContent(): ContactContent {
  return contact;
}

export function getSiteConfigContent(): SiteConfigContent {
  return siteConfig;
}

export function requireContentById<T extends { id: string }>(
  items: readonly T[],
  id: string
): T {
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    throw new Error(`Missing content with id "${id}"`);
  }

  return item;
}
