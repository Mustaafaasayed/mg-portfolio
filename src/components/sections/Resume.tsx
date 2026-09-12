import { ResumeDownloadButton } from "@/components/ui/ResumeDownloadButton";
import type { ResumeContent } from "@/lib/content";

type ResumeProps = {
  content: ResumeContent;
};

export function Resume({ content }: ResumeProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-h2 text-text-primary">Resume</h2>
        <ResumeDownloadButton href={content.resumeFileUrl} />
      </div>

      <ol className="flex flex-col gap-8">
        {content.layers.map((layer) => (
          <li
            className="grid gap-4 border-t border-border pt-6 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
            key={layer.layerName}
          >
            <div>
              <h3 className="text-h3 text-text-primary">{layer.layerName}</h3>
              <p className="mt-2 text-small text-text-secondary">
                {layer.whatItAdded}
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {layer.roleTitles.map((role) => (
                <li
                  className="text-body text-text-primary"
                  key={`${role.title}-${role.company}-${role.period}`}
                >
                  <p className="font-semibold">{role.title}</p>
                  <p className="text-small text-text-secondary">
                    {role.company} · {role.period}
                  </p>
                </li>
              ))}
              {layer.engineeringNote ? (
                <li className="text-small text-text-muted">
                  {layer.engineeringNote}
                </li>
              ) : null}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
