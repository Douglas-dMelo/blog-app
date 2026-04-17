import { readFile } from "node:fs/promises";
import path from "node:path";

export type Artigo = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  content: string[];
};

const dataPath = path.join(process.cwd(), "data", "artigos.json");

function sortByDateDesc(artigos: Artigo[]) {
  return [...artigos].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

async function getArtigosFromApi(): Promise<Artigo[] | null> {
  const apiUrl = process.env.ARTIGOS_API_URL;

  if (!apiUrl) {
    return null;
  }

  const response = await fetch(apiUrl, { cache: "force-cache" });

  if (!response.ok) {
    throw new Error(`Falha ao buscar API de artigos: ${response.status}`);
  }

  const data = (await response.json()) as Artigo[];
  return sortByDateDesc(data);
}

async function getArtigosFromJson(): Promise<Artigo[]> {
  const file = await readFile(dataPath, "utf-8");
  const artigos = JSON.parse(file) as Artigo[];

  return sortByDateDesc(artigos);
}

export async function getArtigos(): Promise<Artigo[]> {
  try {
    const artigosFromApi = await getArtigosFromApi();

    if (artigosFromApi && artigosFromApi.length > 0) {
      return artigosFromApi;
    }
  } catch {
    // Falls back to local JSON if API is unavailable.
  }

  return getArtigosFromJson();
}

export async function getArtigoBySlug(slug: string): Promise<Artigo | null> {
  const artigos = await getArtigos();
  return artigos.find((artigo) => artigo.slug === slug) ?? null;
}
