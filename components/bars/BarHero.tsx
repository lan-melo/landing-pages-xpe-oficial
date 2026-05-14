import type { BarHeroProps } from "@/lib/types";

export function BarHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: BarHeroProps) {
  return (
    <section className="bg-brand text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow ? (
          <p className="uppercase tracking-widest text-accent text-sm mb-4">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle ? (
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        ) : null}
        {ctaLabel && ctaHref ? (
          <a
            href={ctaHref}
            className="inline-block bg-accent text-brand-dark font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            {ctaLabel}
          </a>
        ) : null}
      </div>
    </section>
  );
}
