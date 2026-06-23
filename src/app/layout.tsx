import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Les Clés du Charmaix - Conciergerie Premium Valfréjus",
  description: "Conciergerie premium à Valfréjus - Gestion des clés, ménage, travaux d'appoint, locations, blanchisserie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}