import { CaseTemplate } from "@/components/proof/CaseTemplate";
import type { CaseStudyContent } from "@/lib/content";

type CaseStudyBlockProps = {
  content: CaseStudyContent;
};

export function CaseStudyBlock({ content }: CaseStudyBlockProps) {
  return (
    <CaseTemplate
      alternativesConsidered={content.alternativesConsidered}
      decision={content.decision}
      extra={
        <div className="flex flex-col gap-2">
          <h3 className="text-h3 text-text-primary">Engineering trade-off</h3>
          <p className="max-w-[65ch] text-body-lg text-text-primary">
            {content.namedEngineeringTradeoff}
          </p>
        </div>
      }
      eyebrow={content.isKilledProject ? "Killed project" : undefined}
      hypothesis={content.hypothesis}
      lesson={content.lesson}
      problem={content.problem}
      result={content.result}
      title={content.title}
      tradeoff={content.tradeoff}
      weight={content.weight}
    />
  );
}
