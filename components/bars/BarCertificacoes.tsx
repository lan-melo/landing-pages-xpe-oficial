import type { BarCertificacoesProps } from "@/lib/types";

export function BarCertificacoes({
  titulo,
  descricao,
  certificacoes,
}: BarCertificacoesProps) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-3">{titulo}</h2>
        {descricao ? (
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{descricao}</p>
        ) : null}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certificacoes.map((cert) => (
            <li
              key={cert.nome}
              className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center min-h-24"
            >
              <span className="font-semibold text-brand-dark">{cert.nome}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
