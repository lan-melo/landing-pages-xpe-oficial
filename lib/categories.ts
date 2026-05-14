import type { Category, CategorySlug } from "./types";

export const categories: Record<CategorySlug, Category> = {
  graduacao: {
    slug: "graduacao",
    name: "Graduação",
    description: "Cursos de graduação reconhecidos pelo MEC.",
    color: "#0033A0",
  },
  "pos-graduacao": {
    slug: "pos-graduacao",
    name: "Pós-Graduação",
    description: "Especializações e MBAs para impulsionar sua carreira.",
    color: "#001F66",
  },
  cursos: {
    slug: "cursos",
    name: "Cursos",
    description: "Cursos livres e de curta duração.",
    color: "#3D6BD1",
  },
  certificacoes: {
    slug: "certificacoes",
    name: "Certificações",
    description: "Certificações oficiais reconhecidas pelo mercado.",
    color: "#FFB81C",
  },
};

export const categoryList: Category[] = Object.values(categories);

export function getCategory(slug: CategorySlug): Category {
  return categories[slug];
}
