import { defineConfig } from "velite";

/**
 * Future content types (Content Schema Spec §1+):
 *
 * - Hero              → content/hero.mdx
 * - Philosophy        → content/philosophy.mdx
 * - Decision Case     → content/decision-cases/*.mdx
 * - Case Study        → content/case-studies/*.mdx
 * - Resume Timeline   → content/resume/timeline.mdx
 * - Contact           → content/contact.mdx
 * - Site Config       → content/site.config.mdx
 */
export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    clean: true,
  },
  collections: {},
});
