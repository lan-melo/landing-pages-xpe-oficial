import type { BarFAQProps } from "@/lib/types";

export function BarFAQ({ titulo = "Perguntas frequentes", perguntas }: BarFAQProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
          {titulo}
        </h2>
        <ul className="space-y-4">
          {perguntas.map((item) => (
            <li
              key={item.pergunta}
              className="border border-gray-200 rounded-xl p-5"
            >
              <details>
                <summary className="cursor-pointer font-semibold text-brand-dark">
                  {item.pergunta}
                </summary>
                <p className="mt-3 text-gray-700">{item.resposta}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
