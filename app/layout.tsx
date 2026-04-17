import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://exemplo.com"),
  title: {
    default: "Blog com App Router",
    template: "%s | Blog com App Router",
  },
  description: "Blog de exemplo com rotas dinamicas, SSG e SEO no App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
