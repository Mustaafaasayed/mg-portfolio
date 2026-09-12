import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Alternative = {
  option: string;
  whyNot: string;
};

type CaseTemplateProps = {
  title: string;
  weight: "flagship" | "condensed";
  problem: string;
  hypothesis: string;
  alternativesConsidered: readonly Alternative[];
  tradeoff: string;
  decision: string;
  result: string;
  lesson: string;
  eyebrow?: string;
  extra?: ReactNode;
};

function Step({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-h3 text-text-primary">{title}</h3>
      <div className="max-w-[65ch] text-body-lg text-text-primary">{children}</div>
    </div>
  );
}

export function CaseTemplate({
  title,
  weight,
  problem,
  hypothesis,
  alternativesConsidered,
  tradeoff,
  decision,
  result,
  lesson,
  eyebrow,
  extra,
}: CaseTemplateProps) {
  return (
    <article
      className={cn("flex flex-col", weight === "flagship" ? "gap-8" : "gap-6")}
    >
      {eyebrow ? (
        <p className="text-small text-text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="text-h2 text-text-primary">{title}</h2>
      <Step title="Problem">{problem}</Step>
      <Step title="Hypothesis">{hypothesis}</Step>
      <Step title="Alternatives considered">
        <ul className="flex flex-col gap-4">
          {alternativesConsidered.map((alternative) => (
            <li key={alternative.option}>
              <p className="font-semibold">{alternative.option}</p>
              <p className="text-text-secondary">{alternative.whyNot}</p>
            </li>
          ))}
        </ul>
      </Step>
      <Step title="Trade-offs">{tradeoff}</Step>
      <Step title="Decision">{decision}</Step>
      <Step title="Result">{result}</Step>
      <Step title="Lesson">{lesson}</Step>
      {extra}
    </article>
  );
}
