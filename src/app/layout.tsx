import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caderninho Inteligente",
  description: "Controle simples de vendas, estoque e clientes pelo celular.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Caderninho"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#166534"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
