# Blog com App Router, Rotas Dinamicas e SEO (Next.js)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Aplicacao de blog com **Next.js App Router**, usando rotas dinamicas por `slug`, data fetching no servidor e SEO dinamico por pagina.

## Demo

- URL de producao: `https://seu-projeto.vercel.app`
- URL local: `http://localhost:3000`

## Funcionalidades

- Listagem de artigos na home (`app/page.tsx`)
- Rota dinamica por artigo (`app/artigos/[slug]/page.tsx`)
- Data fetching em Server Components com `async`
- Suporte a API externa e fallback para JSON local
- SSG com `force-static` e `generateStaticParams`
- SEO dinamico por artigo com `generateMetadata`
- 404 customizado (`app/not-found.tsx`)
- Layout responsivo com visual moderno

## Stack

- Next.js 16
- React 19
- TypeScript
- ESLint

## Estrutura do Projeto

```txt
app/
  layout.tsx
  page.tsx
  not-found.tsx
  artigos/
    [slug]/
      page.tsx
data/
  artigos.json
lib/
  artigos.ts
Pre-requisitos
Node.js 20+
npm 10+
Como Rodar Localmente
npm install
npm run dev
Acesse http://localhost:3000.

Scripts
npm run dev
npm run build
npm run start
npm run lint
Fonte de Dados
A aplicacao tenta buscar dados nesta ordem:

API externa (ARTIGOS_API_URL)
JSON local (data/artigos.json)
Variavel de ambiente (opcional)
Crie .env.local na raiz:

ARTIGOS_API_URL=https://sua-api.exemplo.com/artigos
Contrato de Dados
Cada artigo deve seguir este formato:

{
  "slug": "string-unico",
  "title": "Titulo do artigo",
  "description": "Descricao curta para SEO",
  "author": "Nome do autor",
  "publishedAt": "YYYY-MM-DD",
  "content": ["Paragrafo 1", "Paragrafo 2"]
}
SEO e Renderizacao
app/page.tsx
dynamic = "force-static"
renderizacao estatica
app/artigos/[slug]/page.tsx
generateStaticParams() para SSG por slug
generateMetadata() com title e description dinamicos
canonical por artigo

Checklist de Qualidade
 Rotas no App Router funcionando
 Rotas dinamicas por slug
 Data fetching no servidor com async
 SSG com generateStaticParams
 SEO dinamico com generateMetadata
 title e description por pagina
 Build de producao sem erros
 Lint sem erros
 Layout responsivo (desktop e mobile)
 Fallback para JSON local
Melhorias Futuras
Adicionar Open Graph e Twitter Cards completos
Adicionar sitemap.xml e robots.txt
Implementar busca e filtros por categoria
Adicionar pagina de autor e tags
Licenca
MIT