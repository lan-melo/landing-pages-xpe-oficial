import type { BarCursoProps } from "@/lib/types";

export function BarCurso({
  nome,
  descricao,
  cargaHoraria,
  modalidade,
  preco,
  ctaHref,
}: BarCursoProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-brand-dark mb-4">{nome}</h2>
          <p className="text-gray-700 mb-6">{descricao}</p>
          <dl className="grid grid-cols-2 gap-4 mb-6">
            {cargaHoraria ? (
              <div>
                <dt className="text-xs uppercase text-gray-500">
                  Carga horária
                </dt>
                <dd className="font-semibold">{cargaHoraria}</dd>
              </div>
            ) : null}
            {modalidade ? (
              <div>
                <dt className="text-xs uppercase text-gray-500">Modalidade</dt>
                <dd className="font-semibold">{modalidade}</dd>
              </div>
            ) : null}
            {preco ? (
              <div>
                <dt className="text-xs uppercase text-gray-500">
                  Investimento
                </dt>
                <dd className="font-semibold">{preco}</dd>
              </div>
            ) : null}
          </dl>
          {ctaHref ? (
            <a
              href={ctaHref}
              className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-dark transition"
            >
              Quero me inscrever
            </a>
          ) : null}
        </div>
        <div className="aspect-video bg-gradient-to-br from-brand to-brand-light rounded-2xl" />
      </div>
    </section>
  );
}
