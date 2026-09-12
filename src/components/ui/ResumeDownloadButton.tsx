import { cn } from "@/lib/utils";

type ResumeDownloadButtonProps = {
  href: string;
  className?: string;
};

export function ResumeDownloadButton({
  href,
  className,
}: ResumeDownloadButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-sm bg-accent px-4 py-2 text-small font-semibold text-bg-raised transition-colors duration-base hover:bg-accent-hover",
        className
      )}
      download
      href={href}
    >
      Download resume
    </a>
  );
}
