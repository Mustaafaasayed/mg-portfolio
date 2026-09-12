import type { Metadata } from "next";

import { getSiteConfigContent } from "@/lib/content";

import "./globals.css";

const site = getSiteConfigContent();

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalUrl),
  title: `${site.name} — ${site.role}`,
  description: site.positioningStatement,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg-base font-sans text-text-primary">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
