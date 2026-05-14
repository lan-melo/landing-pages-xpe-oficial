import type { BarCTAProps } from "@/lib/types";

export function BarCTA({ titulo, descricao, ctaLabel, ctaHref }: BarCTAProps) {
  return (
    <section className="py-20 px-6 bg-brand-dark text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{titulo}</h2>
        {descricao ? (
          <p className="text-white/80 mb-8 text-lg">{descricao}</p>
        ) : null}
        <a
          href={ctaHref}
          className="inline-block bg-accent text-brand-dark font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
