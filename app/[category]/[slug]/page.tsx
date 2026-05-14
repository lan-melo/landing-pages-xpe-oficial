import { notFound } from "next/navigation";
import { BarRenderer } from "@/components/BarRenderer";
import { categories } from "@/lib/categories";
import { getLandingPage, landingPages } from "@/lib/landing-pages";
import type { CategorySlug } from "@/lib/types";

export function generateStaticParams() {
  return landingPages.map((lp) => ({
    category: lp.category,
    slug: lp.slug,
  }));
}

export default async function LandingPageRoute({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const cat = categories[category as CategorySlug];
  if (!cat) notFound();

  const lp = getLandingPage(cat.slug, slug);
  if (!lp) notFound();

  return (
    <main>
      <BarRenderer bars={lp.bars} />
    </main>
  );
}
