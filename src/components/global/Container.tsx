import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerSize = "flagship" | "condensed" | "resume" | "row";

type ContainerProps = {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
};

const sizeClasses = {
  flagship: "max-w-flagship",
  condensed: "max-w-condensed",
  resume: "max-w-resume",
  row: "max-w-row",
} as const;

export function Container({
  children,
  size = "flagship",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto box-border w-full px-6 md:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
