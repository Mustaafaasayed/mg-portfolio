export function Hero() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-hero">Hero Headline Placeholder</h1>
      <p className="text-body-lg text-text-secondary">
        Hero supporting paragraph placeholder.
      </p>
      <div className="flex flex-col items-center gap-4">
        <a className="text-accent underline" href="#decision-case-a">
          Decision Case A proof tease placeholder
        </a>
        <a className="text-accent underline" href="#fintrack">
          FinTrack proof tease placeholder
        </a>
      </div>
      <a className="text-small text-text-secondary underline" href="#philosophy">
        Scroll to see how
      </a>
    </div>
  );
}
