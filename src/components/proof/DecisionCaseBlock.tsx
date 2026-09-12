import { CaseTemplate } from "@/components/proof/CaseTemplate";
import type { DecisionCaseContent } from "@/lib/content";

type DecisionCaseBlockProps = {
  content: DecisionCaseContent;
};

export function DecisionCaseBlock({ content }: DecisionCaseBlockProps) {
  return (
    <CaseTemplate
      alternativesConsidered={content.alternativesConsidered}
      decision={content.decision}
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
