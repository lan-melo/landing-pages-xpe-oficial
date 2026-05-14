import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, categoryList } from "@/lib/categories";
import { getLandingPagesByCategory } from "@/lib/landing-pages";
import type { CategorySlug } from "@/lib/types";

export function generateStaticParams() {
  return categoryList.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories[category as CategorySlug];
  if (!cat) notFound();

  const pages = getLandingPagesByCategory(cat.slug);

  return (
    <main className="min-h-screen">
      <section
        className="text-white py-16 px-6"
        style={{ background: cat.color }}
      >
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-white/80 text-sm hover:underline">
            ← Voltar
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3">
            {cat.name}
          </h1>
          <p className="text-white/90 text-lg">{cat.description}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            Landing pages disponíveis
          </h2>
          {pages.length === 0 ? (
            <p className="text-gray-600">
              Nenhuma landing page cadastrada nesta categoria ainda.
            </p>
          ) : (
            <ul className="grid sm:grid-cols-2 gap-4">
              {pages.map((lp) => (
                <li key={lp.slug}>
                  <Link
                    href={`/${cat.slug}/${lp.slug}`}
                    className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-brand-dark text-lg mb-1">
                      {lp.title}
                    </h3>
                    {lp.description ? (
                      <p className="text-gray-600 text-sm">{lp.description}</p>
                    ) : null}
                    <p className="text-xs text-gray-400 mt-3">
                      {lp.bars.length} barras
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
