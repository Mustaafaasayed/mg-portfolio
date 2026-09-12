import { ContactCTA } from "@/components/ui/ContactCTA";
import type { ContactContent, SiteConfigContent } from "@/lib/content";

type ContactProps = {
  content: ContactContent;
  site: SiteConfigContent;
};

export function Contact({ content, site }: ContactProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h2 className="text-h2 text-text-primary">Contact</h2>
      <p className="max-w-[65ch] text-body-lg text-text-primary">
        {content.statement}
      </p>
      <ContactCTA email={site.email} label="Let's talk" />
      {site.socialLinks?.length ? (
        <ul className="flex flex-wrap items-center justify-center gap-4 text-small text-text-secondary">
          {site.socialLinks.map((link) => (
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
      ) : null}
    </div>
  );
}
