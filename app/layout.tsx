import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: `${site.name} | ${site.tagline}`,
  description:
    "Maintenance multi-technique (électricité, CVC, plomberie, incendie) et installations électriques BT. Basé à Tanger, intervention partout au Maroc.",
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "Maintenance industrielle & installations électriques au Maroc. Préventif, correctif, multi-technique.",
    url: site.domain,
    siteName: site.name,
    locale: "fr_MA",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-zinc-900">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
