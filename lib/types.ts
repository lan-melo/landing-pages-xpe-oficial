export type CategorySlug =
  | "graduacao"
  | "pos-graduacao"
  | "cursos"
  | "certificacoes";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  color: string;
};

export type BarHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
};

export type BarCursoProps = {
  nome: string;
  descricao: string;
  cargaHoraria?: string;
  modalidade?: "Online" | "Presencial" | "Híbrido";
  preco?: string;
  ctaHref?: string;
};

export type BarCertificacoesProps = {
  titulo: string;
  descricao?: string;
  certificacoes: Array<{ nome: string; logo?: string }>;
};

export type BarCTAProps = {
  titulo: string;
  descricao?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type BarFAQProps = {
  titulo?: string;
  perguntas: Array<{ pergunta: string; resposta: string }>;
};

export type Bar =
  | { type: "hero"; props: BarHeroProps }
  | { type: "curso"; props: BarCursoProps }
  | { type: "certificacoes"; props: BarCertificacoesProps }
  | { type: "cta"; props: BarCTAProps }
  | { type: "faq"; props: BarFAQProps };

export type LandingPage = {
  slug: string;
  category: CategorySlug;
  title: string;
  description?: string;
  bars: Bar[];
};
