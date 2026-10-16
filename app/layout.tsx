import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#040914",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.advpatriciaferreira.com.br"),
  title:
    "Patrícia Ferreira Advocacia & Consultoria | Família, Cível e Criminal em Ribeirão das Neves - MG",
  description:
    "Proteção jurídica para mulheres e homens em momentos críticos. Decisões jurídicas exigem estratégia, não impulso. Defesa acolhedora e combativa com a Dra. Patrícia Pinto Ferreira. Atendimento 24h em Ribeirão das Neves e Grande BH. Avaliação 4,9 ★ no Google.",
  keywords: [
    "Patrícia Ferreira Advogada",
    "Patrícia Pinto Ferreira",
    "Patrícia Ferreira Advocacia & Consultoria",
    "Patrícia Ferreira Advogados",
    "Advogado de Família Ribeirão das Neves",
    "Advogado Ribeirão das Neves",
    "Guarda de Filhos e Pensão Alimentícia",
    "Divórcio Consensual e Litigioso",
    "Defesa dos Direitos das Crianças",
    "Alienação Parental e Medidas Protetivas",
    "Advogada Criminalista Ribeirão das Neves",
    "Plantão Jurídico 24 Horas",
    "Escritório de Advocacia Ribeirão das Neves MG",
  ],
  authors: [{ name: "Dra. Patrícia Pinto Ferreira" }],
  creator: "Patrícia Ferreira — Advocacia & Consultoria",
  publisher: "Patrícia Ferreira — Advocacia & Consultoria",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.advpatriciaferreira.com.br",
    title:
      "Patrícia Ferreira Advocacia & Consultoria | Família, Cível e Criminal",
    description:
      "Proteção jurídica para mulheres e homens em momentos críticos. Decisões jurídicas exigem estratégia, não impulso. Atendimento humanizado 24 horas. Nota 4,9 ★ no Google.",
    siteName: "Patrícia Ferreira — Advocacia & Consultoria",
    images: [
      {
        url: "/logo-seal.png",
        width: 600,
        height: 600,
        alt: "Patrícia Ferreira — Advocacia & Consultoria",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Patrícia Ferreira — Advocacia & Consultoria",
    alternateName: "Patrícia Ferreira Advogados",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Patrícia Pinto Ferreira",
        jobTitle:
          "Advogada Especialista em Direito de Família, Cível e Criminal",
      },
    ],
    telephone: "+55-31-98819-9907",
    url: "https://www.advpatriciaferreira.com.br",
    image: "https://www.advpatriciaferreira.com.br/logo-seal.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ribeirão das Neves",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "33",
    },
    areaServed: [
      "Ribeirão das Neves",
      "Justinópolis",
      "Belo Horizonte",
      "Contagem",
      "Betim",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/advpatriciaferreira/",
      "https://wa.me/5531988199907",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#040914] font-sans text-stone-100 antialiased selection:bg-[#cb902b] selection:text-[#040914]">
        {children}
      </body>
    </html>
  );
}
