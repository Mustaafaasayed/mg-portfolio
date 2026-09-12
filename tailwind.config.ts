import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: {
          base: "var(--color-bg-base)",
          raised: "var(--color-bg-raised)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        border: "var(--color-border)",
        focus: "var(--color-focus-ring)",
      },

      maxWidth: {
        flagship: "var(--container-flagship)",
        condensed: "var(--container-condensed)",
        resume: "var(--container-resume)",
        row: "var(--container-row)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
      },

      boxShadow: {
        header: "var(--shadow-sticky-header)",
      },

      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },

      fontSize: {
        hero: [
          "var(--text-hero)",
          {
            lineHeight: "var(--leading-hero)",
            fontWeight: "var(--weight-semibold)",
          },
        ],
        h2: [
          "var(--text-h2)",
          {
            lineHeight: "var(--leading-h2)",
            fontWeight: "var(--weight-semibold)",
          },
        ],
        h3: [
          "var(--text-h3)",
          {
            lineHeight: "var(--leading-h3)",
            fontWeight: "var(--weight-semibold)",
          },
        ],
        "body-lg": [
          "var(--text-body-lg)",
          { lineHeight: "var(--leading-body)" },
        ],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        small: ["var(--text-small)", { lineHeight: "var(--leading-small)" }],
      },

      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        4: "var(--space-4)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        16: "var(--space-16)",
        24: "var(--space-24)",
      },

      transitionDuration: {
        fast: "var(--motion-fast)",
        base: "var(--motion-base)",
      },
    },
  },

  plugins: [],
};

export default config;
