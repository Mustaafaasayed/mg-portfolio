import { defineCollection, defineConfig, s } from "velite";

const contentTemplateSchema = s.object({
  id: s.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: s.string().max(80),
  weight: s.enum(["flagship", "condensed"]),
  problem: s.string().min(40),
  hypothesis: s.string().min(40),
  alternativesConsidered: s
    .array(
      s.object({
        option: s.string(),
        whyNot: s.string(),
      })
    )
    .min(2),
  tradeoff: s.string().min(60),
  decision: s.string().min(40),
  result: s.string().min(40),
  lesson: s.string().min(40),
});

const hero = defineCollection({
  name: "Hero",
  pattern: "hero.mdx",
  single: true,
  schema: s.object({
    id: s.literal("hero"),
    headline: s.string().max(120),
    teaseThinking: s.string().max(160),
    teaseThinkingLink: s.literal("#decision-case-a"),
    teaseBuilding: s.string().max(160),
    teaseBuildingLink: s.literal("#fintrack"),
    future_route: s.literal("/"),
  }),
});

const philosophy = defineCollection({
  name: "Philosophy",
  pattern: "philosophy.mdx",
  single: true,
  schema: s.object({
    id: s.literal("philosophy"),
    sourceStatement: s.enum(["features-vs-systems", "not-changing-choosing"]),
    transitionLine: s.string().max(200),
    future_route: s.null(),
  }),
});

const decisionCases = defineCollection({
  name: "DecisionCase",
  pattern: "decision-cases/*.mdx",
  schema: contentTemplateSchema.extend({
    future_route: s.literal("/thinking"),
    technicalReviewerValidated: s.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  name: "CaseStudy",
  pattern: "case-studies/*.mdx",
  schema: contentTemplateSchema.extend({
    future_route: s.literal("/building"),
    isKilledProject: s.boolean(),
    namedEngineeringTradeoff: s.string().min(60),
  }),
});

const resumeLayerSchema = s.object({
  whatItAdded: s.string().max(140),
  roleTitles: s
    .array(
      s.object({
        title: s.string(),
        company: s.string(),
        period: s.string(),
      })
    )
    .min(1),
  engineeringNote: s.string().optional(),
});

const resume = defineCollection({
  name: "Resume",
  pattern: "resume/timeline.mdx",
  single: true,
  schema: s.object({
    id: s.literal("resume"),
    future_route: s.literal("/resume"),
    resumeFileUrl: s.literal("/resume.pdf"),
    layers: s.tuple([
      resumeLayerSchema.extend({ layerName: s.literal("Customer Excellence") }),
      resumeLayerSchema.extend({ layerName: s.literal("Operations") }),
      resumeLayerSchema.extend({ layerName: s.literal("Marketing") }),
      resumeLayerSchema.extend({ layerName: s.literal("Business Analysis") }),
      resumeLayerSchema.extend({ layerName: s.literal("Product Management") }),
      resumeLayerSchema.extend({ layerName: s.literal("AI Adoption") }),
    ]),
  }),
});

const contact = defineCollection({
  name: "Contact",
  pattern: "contact.mdx",
  single: true,
  schema: s.object({
    id: s.literal("contact"),
    future_route: s.literal("/contact"),
    statement: s.string().max(200),
  }),
});

const siteConfig = defineCollection({
  name: "SiteConfig",
  pattern: "site.config.mdx",
  single: true,
  schema: s.object({
    name: s.string(),
    role: s.string(),
    email: s.string().email(),
    canonicalUrl: s.string().url(),
    socialLinks: s
      .array(
        s.object({
          label: s.string(),
          url: s.string().url(),
        })
      )
      .max(3)
      .optional(),
    positioningStatement: s.enum([
      "Building products through systems thinking.",
      "Connecting business strategy with engineering execution.",
      "Reducing complexity through product thinking.",
    ]),
  }),
});

export default defineConfig({
  root: "content",
  strict: true,
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    clean: true,
  },
  collections: {
    hero,
    philosophy,
    decisionCases,
    caseStudies,
    resume,
    contact,
    siteConfig,
  },
});
