import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtigoBySlug, getArtigos } from "@/lib/artigos";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export const dynamic = "force-static";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
});

export async function generateStaticParams() {
  const artigos = await getArtigos();

  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    return {
      title: "Artigo nao encontrado",
      description: "O artigo solicitado nao foi localizado.",
    };
  }

  return {
    title: artigo.title,
    description: artigo.description,
    alternates: {
      canonical: `/artigos/${artigo.slug}`,
    },
  };
}

export default async function ArtigoPage({ params }: PageProps) {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className="page-shell">
      <Link href="/" className="back-link">
        Voltar para a home
      </Link>

      <article className="article-view">
        <header className="article-header">
          <p className="eyebrow">Artigo tecnico</p>
          <h1 className="article-title">{artigo.title}</h1>
          <p className="article-description">{artigo.description}</p>
        </header>
        <p className="meta">
          Por {artigo.author} em{" "}
          <time dateTime={artigo.publishedAt}>
            {dateFormatter.format(new Date(artigo.publishedAt))}
          </time>
        </p>
        <section className="article-body">
          {artigo.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </article>
    </main>
  );
}
