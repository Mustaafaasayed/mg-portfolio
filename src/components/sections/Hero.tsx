import type { HeroContent } from "@/lib/content";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-hero text-text-primary">{content.headline}</h1>
      <div className="flex flex-col items-center gap-4 text-body-lg">
        <a
          className="text-accent underline decoration-transparent underline-offset-4 transition-colors duration-fast hover:decoration-current"
          href={content.teaseThinkingLink}
        >
          {content.teaseThinking}
        </a>
        <a
          className="text-accent underline decoration-transparent underline-offset-4 transition-colors duration-fast hover:decoration-current"
          href={content.teaseBuildingLink}
        >
          {content.teaseBuilding}
        </a>
      </div>
      <a
        className="text-small text-text-secondary underline decoration-transparent underline-offset-4 transition-colors duration-fast hover:decoration-current"
        href="#philosophy"
      >
        Scroll to see how
      </a>
    </div>
  );
}
