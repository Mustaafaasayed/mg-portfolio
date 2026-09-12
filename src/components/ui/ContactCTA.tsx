import { buildMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

type ContactCTAProps = {
  email: string;
  label: string;
  variant?: "button" | "text";
  className?: string;
};

export function ContactCTA({
  email,
  label,
  variant = "button",
  className,
}: ContactCTAProps) {
  const href = buildMailto(email);

  if (variant === "text") {
    return (
      <a
        className={cn(
          "underline decoration-transparent underline-offset-4 transition-colors duration-fast hover:decoration-current",
          className
        )}
        href={href}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-sm bg-accent px-4 py-2 text-small font-semibold text-bg-raised transition-colors duration-base hover:bg-accent-hover",
        className
      )}
      href={href}
    >
      {label}
    </a>
  );
}
