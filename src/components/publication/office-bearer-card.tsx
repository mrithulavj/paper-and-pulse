import { useState } from "react";
import { Quote } from "lucide-react";
import type { OfficeBearer } from "@/data/publication";

interface OfficeBearerCardProps {
  bearer: OfficeBearer;
  index: number;
}

export function OfficeBearerCard({ bearer, index }: OfficeBearerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  const paddedIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="group mx-auto w-full max-w-[20rem] sm:max-w-none">
      {/* 3D Flip Container - clicking anywhere on the card automatically flips it */}
      <div
        className="perspective-1000 relative aspect-[3/4] w-full cursor-pointer select-none transition-transform duration-300 active:scale-[0.98]"
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${bearer.name}, ${bearer.designation}. Click or tap to view details.`}
        aria-expanded={isFlipped}
      >
        <div
          className={`transform-style-3d relative h-full w-full transition-transform duration-500 ease-out ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* ================= FRONT SIDE (Portrait / Details) ================= */}
          <div className="backface-hidden absolute inset-0 flex flex-col justify-between border border-accent-foreground/25 bg-background/40 p-5 shadow-xs transition-colors hover:border-accent-foreground/45 hover:bg-background/55">
            {/* Top row: Number and Status */}
            <div className="flex items-center justify-between border-b border-accent-foreground/15 pb-2.5">
              <span className="font-mono text-xs font-semibold tracking-widest text-accent-foreground/60">
                {paddedIndex}
              </span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-accent-foreground/60">
                Editorial Board
              </span>
            </div>

            {/* Middle: Editorial Portrait Placeholder */}
            <div className="relative my-auto flex flex-col items-center justify-center py-2">
              <div className="relative flex size-24 items-center justify-center border border-accent-foreground/20 bg-background/60 shadow-inner sm:size-28">
                <span className="font-display text-4xl text-accent-foreground/20 sm:text-5xl">
                  {paddedIndex}
                </span>
                <div className="pointer-events-none absolute inset-1 border border-dashed border-accent-foreground/15" />
              </div>
              <span className="mt-3 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-accent-foreground/50">
                Official Portrait Forthcoming
              </span>
            </div>

            {/* Bottom: Name & Role */}
            <div className="border-t border-accent-foreground/15 pt-3">
              <h3 className="font-display text-xl leading-tight text-accent-foreground sm:text-2xl">
                {bearer.name}
              </h3>
              <p className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-accent-foreground/75">
                {bearer.designation}
              </p>
            </div>
          </div>

          {/* ================= BACK SIDE (Bio Write-up) ================= */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between border border-accent-foreground/35 bg-primary p-5 text-primary-foreground shadow-md">
            {/* Top row */}
            <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-2.5">
              <span className="font-mono text-xs font-bold tracking-widest text-accent">
                {paddedIndex} • PROFILE
              </span>
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">
                Paper &amp; Pulse
              </span>
            </div>

            {/* Content Body */}
            <div className="my-auto space-y-2.5 overflow-y-auto py-2 pr-1">
              <div>
                <h4 className="font-display text-2xl leading-none text-primary-foreground">
                  {bearer.name}
                </h4>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-accent">
                  {bearer.designation}
                </p>
                {bearer.focus ? (
                  <p className="mt-1 text-[0.6rem] font-medium italic text-primary-foreground/75">
                    {bearer.focus}
                  </p>
                ) : null}
              </div>

              <div className="relative border-l-2 border-accent/60 pl-3 pt-0.5">
                <Quote className="size-3 text-accent/50" />
                <p className="mt-1 text-xs leading-relaxed text-primary-foreground/90">
                  {bearer.bio}
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-primary-foreground/20 pt-2 text-center">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                Department of English
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
