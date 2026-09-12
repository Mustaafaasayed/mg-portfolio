import { Container } from "@/components/global/Container";
import { ContactCTA } from "@/components/ui/ContactCTA";
import type { SiteConfigContent } from "@/lib/content";

type FooterProps = {
  site: SiteConfigContent;
};

export function Footer({ site }: FooterProps) {
  return (
    <footer className="border-t border-border bg-bg-base text-small text-text-secondary">
      <Container
        size="row"
        className="flex flex-col gap-4 py-6 md:flex-row md:flex-wrap md:items-center"
      >
        <p>
          © 2026 {site.name}
        </p>
        <ul className="flex flex-wrap items-center gap-4 md:ml-auto">
          <li>
            <ContactCTA email={site.email} label={site.email} variant="text" />
          </li>
          {site.socialLinks?.map((link) => (
            <li key={link.url}>
              <a
                className="underline decoration-transparent underline-offset-4 transition-colors duration-fast hover:decoration-current"
                href={link.url}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
