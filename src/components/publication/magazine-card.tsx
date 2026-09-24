import { ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MagazineEdition } from "@/data/publication";

const coverThemes: Record<MagazineEdition["theme"], string> = {
  maroon: "bg-primary text-primary-foreground",
  sage: "bg-accent text-accent-foreground",
  ink: "bg-foreground text-background",
};

export function MagazineCard({ edition }: { edition: MagazineEdition }) {
  return (
    <article className="group">
      <div
        className={`relative aspect-[3/4] overflow-hidden border border-foreground/15 p-6 transition-transform duration-500 group-hover:-translate-y-1 ${coverThemes[edition.theme]}`}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between border-b border-current/30 pb-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em]">
            <span>Paper &amp; Pulse</span>
            <span>{edition.label}</span>
          </div>
          <div>
            <p className="mb-4 max-w-24 text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] opacity-70">
              Stories from across campus
            </p>
            <h3 className="max-w-[8ch] font-display text-5xl leading-[0.86] sm:text-6xl">
              {edition.title}
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <BookOpen aria-hidden="true" className="size-5 opacity-70" strokeWidth={1.4} />
            <span className="font-mono text-xs">{edition.published}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-foreground/20 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em]">{edition.label}</p>
          <p className="mt-1 text-sm text-muted-foreground">Published {edition.published}</p>
        </div>
        {edition.pdfUrl ? (
          <Button asChild variant="editorial" size="sm">
            <a href={edition.pdfUrl} aria-label={`View ${edition.title}`}>
              View <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        ) : (
          <Button variant="editorial" size="sm" disabled title="Magazine PDF coming soon">
            Soon <ArrowUpRight aria-hidden="true" />
          </Button>
        )}
      </div>
    </article>
  );
}
