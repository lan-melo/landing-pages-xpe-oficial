import Link from "next/link";
import { categoryList } from "@/lib/categories";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-brand text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Landing Pages XPE
          </h1>
          <p className="text-white/80 text-lg">
            Selecione uma categoria para ver as landing pages disponíveis.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {categoryList.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <span
                className="inline-block w-12 h-12 rounded-full mb-4"
                style={{ background: cat.color }}
              />
              <h2 className="text-2xl font-bold text-brand-dark mb-2">
                {cat.name}
              </h2>
              <p className="text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
