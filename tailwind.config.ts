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

      fontSize: {
        hero: "var(--text-hero)",
        h2: "var(--text-h2)",
        h3: "var(--text-h3)",
        "body-lg": "var(--text-body-lg)",
        body: "var(--text-body)",
        small: "var(--text-small)",
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
    },
  },

  plugins: [],
};

export default config;