# Blog com App Router + SEO dinamico

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura principal

- `app/page.tsx`: listagem de artigos
- `app/artigos/[slug]/page.tsx`: detalhe do artigo com rota dinamica
- `data/artigos.json`: fonte local de dados
- `lib/artigos.ts`: camada de acesso aos dados (API ou JSON)

## API opcional

Se quiser usar API, defina a variavel de ambiente:

```bash
ARTIGOS_API_URL=https://sua-api.exemplo.com/artigos
```

Quando a API nao estiver disponivel, o projeto usa automaticamente `data/artigos.json`.
