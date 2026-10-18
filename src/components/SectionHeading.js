export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F58220]">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}
