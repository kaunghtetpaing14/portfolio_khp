type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">{label}</p>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
