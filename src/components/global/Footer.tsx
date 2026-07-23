import { Container } from "@/components/global/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base text-small text-text-secondary">
      <Container
        size="row"
        className="flex flex-wrap items-center gap-4 px-6 py-6 md:px-8"
      >
        <p>© 2026 MG Portfolio</p>
        <ul className="flex items-center gap-4 md:ml-auto">
          <li>
            <a href="mailto:hello@example.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/">GitHub</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
