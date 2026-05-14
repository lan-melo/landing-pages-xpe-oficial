import type { CategorySlug, LandingPage } from "./types";

export const landingPages: LandingPage[] = [
  {
    slug: "engenharia-de-software",
    category: "graduacao",
    title: "Graduação em Engenharia de Software",
    description: "Forme-se em uma das áreas mais valorizadas do mercado.",
    bars: [
      {
        type: "hero",
        props: {
          eyebrow: "Graduação",
          title: "Engenharia de Software",
          subtitle:
            "Bacharelado 100% online, reconhecido pelo MEC, com foco em prática e mercado.",
          ctaLabel: "Inscreva-se agora",
          ctaHref: "#inscricao",
        },
      },
      {
        type: "certificacoes",
        props: {
          titulo: "Certificações de mercado inclusas",
          descricao:
            "Conclua a graduação já com certificações reconhecidas pelas maiores empresas.",
          certificacoes: [
            { nome: "AWS Cloud Practitioner" },
            { nome: "Scrum Foundation" },
            { nome: "Google Data Analytics" },
            { nome: "Microsoft Azure" },
          ],
        },
      },
      {
        type: "curso",
        props: {
          nome: "Curso intensivo de programação",
          descricao:
            "Comece do zero e domine lógica de programação, JavaScript e fundamentos de back-end.",
          cargaHoraria: "120h",
          modalidade: "Online",
          preco: "Incluso na graduação",
        },
      },
      {
        type: "certificacoes",
        props: {
          titulo: "E mais certificações no decorrer do curso",
          certificacoes: [
            { nome: "Kubernetes (CKAD)" },
            { nome: "TOGAF Foundation" },
            { nome: "ITIL 4" },
            { nome: "PMI-ACP" },
          ],
        },
      },
      {
        type: "curso",
        props: {
          nome: "Projeto de conclusão aplicado",
          descricao:
            "Desenvolva um produto real em time, com mentoria de profissionais do mercado.",
          cargaHoraria: "80h",
          modalidade: "Híbrido",
        },
      },
      {
        type: "cta",
        props: {
          titulo: "Pronto para começar?",
          descricao: "Vagas limitadas para a próxima turma.",
          ctaLabel: "Garantir minha vaga",
          ctaHref: "#inscricao",
        },
      },
      {
        type: "faq",
        props: {
          perguntas: [
            {
              pergunta: "O diploma é reconhecido pelo MEC?",
              resposta: "Sim, a graduação é totalmente reconhecida pelo MEC.",
            },
            {
              pergunta: "Posso estudar no meu ritmo?",
              resposta:
                "Sim, as aulas são gravadas e você organiza sua agenda semanal.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "mba-em-gestao",
    category: "pos-graduacao",
    title: "MBA em Gestão de Negócios",
    bars: [
      {
        type: "hero",
        props: {
          eyebrow: "Pós-Graduação",
          title: "MBA em Gestão de Negócios",
          subtitle:
            "Acelere sua carreira de liderança com um MBA conectado ao mercado.",
          ctaLabel: "Quero saber mais",
          ctaHref: "#inscricao",
        },
      },
      {
        type: "curso",
        props: {
          nome: "Módulo de Finanças Corporativas",
          descricao: "Aprenda a tomar decisões financeiras estratégicas.",
          cargaHoraria: "60h",
          modalidade: "Online",
        },
      },
      {
        type: "cta",
        props: {
          titulo: "Comece sua pós hoje",
          ctaLabel: "Inscrever-se",
          ctaHref: "#inscricao",
        },
      },
    ],
  },
  {
    slug: "excel-avancado",
    category: "cursos",
    title: "Curso de Excel Avançado",
    bars: [
      {
        type: "hero",
        props: {
          eyebrow: "Curso livre",
          title: "Excel Avançado para o mercado",
          subtitle: "Domine fórmulas, dashboards e automações com VBA.",
          ctaLabel: "Quero me inscrever",
          ctaHref: "#inscricao",
        },
      },
      {
        type: "curso",
        props: {
          nome: "Excel Avançado",
          descricao: "Do básico ao avançado em 40 horas.",
          cargaHoraria: "40h",
          modalidade: "Online",
          preco: "R$ 297",
          ctaHref: "#inscricao",
        },
      },
    ],
  },
  {
    slug: "aws-cloud-practitioner",
    category: "certificacoes",
    title: "Certificação AWS Cloud Practitioner",
    bars: [
      {
        type: "hero",
        props: {
          eyebrow: "Certificação oficial",
          title: "AWS Certified Cloud Practitioner",
          subtitle: "Preparatório completo para a prova oficial da AWS.",
          ctaLabel: "Começar preparatório",
          ctaHref: "#inscricao",
        },
      },
      {
        type: "certificacoes",
        props: {
          titulo: "Certificações relacionadas",
          certificacoes: [
            { nome: "AWS Solutions Architect" },
            { nome: "AWS Developer" },
            { nome: "AWS SysOps" },
          ],
        },
      },
    ],
  },
];

export function getLandingPagesByCategory(
  category: CategorySlug
): LandingPage[] {
  return landingPages.filter((lp) => lp.category === category);
}

export function getLandingPage(
  category: CategorySlug,
  slug: string
): LandingPage | undefined {
  return landingPages.find(
    (lp) => lp.category === category && lp.slug === slug
  );
}
