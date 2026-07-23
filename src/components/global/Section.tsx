import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBackground = "base" | "raised";
type SectionWeight = "flagship" | "condensed";

type SectionProps = {
  children: ReactNode;
  background?: SectionBackground;
  weight?: SectionWeight;
  id?: string;
  className?: string;
};

const backgroundClasses = {
  base: "bg-bg-base",
  raised: "bg-bg-raised",
} as const;

const weightClasses = {
  flagship: "py-24",
  condensed: "py-16",
} as const;

export function Section({
  children,
  background = "base",
  weight = "flagship",
  id,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-6 md:px-8",
        backgroundClasses[background],
        weightClasses[weight],
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
}
