type SectionHeadingProps = {
  index: string;
  title: string;
  intro?: string;
  inverse?: boolean;
};

export function SectionHeading({ index, title, intro, inverse = false }: SectionHeadingProps) {
  return (
    <div className="grid gap-6 border-t border-current/20 pt-5 md:grid-cols-[1fr_2fr] md:gap-10">
      <div className="flex items-start gap-3">
        <span className="font-mono text-[0.68rem] uppercase text-current/55">{index}</span>
        <p className="text-xs font-semibold uppercase tracking-[0.18em]">{title}</p>
      </div>
      {intro ? (
        <p
          className={`max-w-2xl font-display text-3xl leading-[1.05] md:text-5xl ${
            inverse ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
