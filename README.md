# landing-pages-xpe-oficial

Projeto Next.js para construir landing pages segmentadas pelas 4 categorias de produto da XPE:

- **Graduação** (`/graduacao`)
- **Pós-Graduação** (`/pos-graduacao`)
- **Cursos** (`/cursos`)
- **Certificações** (`/certificacoes`)

## Como funciona

Cada landing page é uma sequência de **barras** (sections reutilizáveis). Você monta uma LP combinando barras em qualquer ordem:

```
LP de Engenharia de Software
├── BarHero
├── BarCertificacoes
├── BarCurso (curso 1)
├── BarCertificacoes
├── BarCurso (curso 2)
├── BarCTA
└── BarFAQ
```

## Estrutura

```
app/
  page.tsx                    # Home: lista as 4 categorias
  [category]/page.tsx         # Lista LPs de uma categoria
  [category]/[slug]/page.tsx  # Renderiza uma LP a partir das barras
components/
  bars/                       # Biblioteca de barras reutilizáveis
    BarHero.tsx
    BarCurso.tsx
    BarCertificacoes.tsx
    BarCTA.tsx
    BarFAQ.tsx
  BarRenderer.tsx             # Renderiza um array de barras em ordem
lib/
  types.ts                    # Tipos: Category, Bar, LandingPage
  categories.ts               # As 4 categorias
  landing-pages.ts            # Catálogo de LPs (1 por categoria como exemplo)
```

## Adicionando uma nova landing page

Edite `lib/landing-pages.ts` e adicione um objeto ao array:

```ts
{
  slug: "minha-nova-lp",
  category: "cursos",
  title: "Título da LP",
  bars: [
    { type: "hero", props: { title: "...", ctaLabel: "...", ctaHref: "..." } },
    { type: "certificacoes", props: { titulo: "...", certificacoes: [...] } },
    { type: "curso", props: { nome: "...", descricao: "..." } },
    // ...
  ],
}
```

A rota `/cursos/minha-nova-lp` passa a existir automaticamente.

## Adicionando uma nova barra

1. Crie o componente em `components/bars/MinhaBar.tsx`.
2. Exporte em `components/bars/index.ts`.
3. Adicione o tipo em `lib/types.ts` (na union `Bar` e props correspondentes).
4. Adicione o case em `components/BarRenderer.tsx`.

## Scripts

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run typecheck
```
