import { Container } from "@/components/global/Container";

const navigationItems = [
  { href: "#hero", label: "Hero" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#decision-case-a", label: "Decision Case A" },
  { href: "#fintrack", label: "FinTrack" },
  { href: "#decision-case-b", label: "Decision Case B" },
  { href: "#case-study-b", label: "Case Study B" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-bg-base">
      <Container size="row" className="flex items-center gap-6 px-6 py-4 md:px-8">
        <a className="font-semibold text-text-primary" href="#hero">
          MG Portfolio
        </a>
        <nav>
          <ul className="flex items-center gap-4 text-small text-text-secondary">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="ml-auto bg-accent px-4 py-2 text-small font-semibold text-bg-raised"
          href="#contact"
        >
          Get in touch
        </a>
      </Container>
    </header>
  );
}
