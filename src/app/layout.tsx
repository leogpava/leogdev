import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "leonardoOS",
  description: "Portfólio gamificado em formato de sistema operacional web.",
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
