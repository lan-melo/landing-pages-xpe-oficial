import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XPE — Landing Pages",
  description: "Landing pages oficiais XPE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
