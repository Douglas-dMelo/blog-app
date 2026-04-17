import Link from "next/link";
import { getArtigos } from "@/lib/artigos";

export const dynamic = "force-static";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
});

export default async function HomePage() {
  const artigos = await getArtigos();

  return (
    <main className="page-shell">
      <header className="hero">
        <p className="eyebrow">Conteudo editorial</p>
        <h1 className="hero-title">Blog com App Router</h1>
        <p className="hero-subtitle">
          Artigos carregados dinamicamente com performance de SSG e SEO por pagina.
        </p>
      </header>

      <section className="article-list" aria-label="Lista de artigos publicados">
        {artigos.map((artigo) => (
          <article key={artigo.slug} className="card">
            <p className="card-kicker">Artigo</p>
            <h2 className="card-title">
              <Link href={`/artigos/${artigo.slug}`} className="card-link">
                {artigo.title}
              </Link>
            </h2>
            <p className="meta">
              Por {artigo.author} em{" "}
              <time dateTime={artigo.publishedAt}>
                {dateFormatter.format(new Date(artigo.publishedAt))}
              </time>
            </p>
            <p className="excerpt">{artigo.description}</p>
            <div className="card-footer">
              <Link href={`/artigos/${artigo.slug}`} className="read-more">
                Ler artigo completo
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
