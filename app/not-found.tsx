import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="not-found-box">
        <p className="eyebrow">404</p>
        <h1>Conteudo nao encontrado</h1>
        <p className="excerpt">Confira se o slug do artigo esta correto.</p>
        <p className="not-found-link-wrap">
          <Link href="/" className="read-more">
            Voltar para a home
          </Link>
        </p>
      </section>
    </main>
  );
}
