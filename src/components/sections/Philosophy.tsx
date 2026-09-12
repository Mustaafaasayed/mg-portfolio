import type { PhilosophyContent } from "@/lib/content";

const sourceStatements = {
  "features-vs-systems":
    "Features are how a product shows up today. Systems are what let it keep showing up well a year from now. I care about the second one — not instead of shipping, but underneath it.",
  "not-changing-choosing":
    "What you are not changing, you're choosing.",
} as const;

type PhilosophyProps = {
  content: PhilosophyContent;
};

export function Philosophy({ content }: PhilosophyProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-h2 text-text-primary">Philosophy</h2>
      <p className="max-w-[65ch] text-body-lg text-text-primary">
        {sourceStatements[content.sourceStatement]}
      </p>
      <p className="max-w-[65ch] text-body text-text-secondary">
        {content.transitionLine}
      </p>
    </div>
  );
}
