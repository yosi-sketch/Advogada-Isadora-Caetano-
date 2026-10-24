import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
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

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a09",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.isadoracaetano.adv.br"),
  title:
    "Isadora Caetano — Escritório de Advocacia | Família, Sucessões e Regularização de Imóveis · Conselheiro Pena - MG",
  description:
    "Dra. Isadora Caetano — Escritório de Advocacia e Consultoria. Especialistas em Direito de Família (Divórcio, Guarda, Pensão), Sucessões (Inventários, Herança, Partilha) e Regularização de Imóveis (Usucapião, Escrituras, Contratos). Nota 4,9 ★ com mais de 166 avaliações no Google. Atendimento presencial em Conselheiro Pena - MG e digital para todo o Brasil e exterior.",
  keywords: [
    "Isadora Caetano Advocacia",
    "Dra. Isadora Caetano",
    "Isadora Caetano Escritório de Advocacia",
    "Advogado Conselheiro Pena MG",
    "Advocacia Conselheiro Pena",
    "Direito de Família Conselheiro Pena",
    "Advogado Divórcio Conselheiro Pena",
    "Inventário Conselheiro Pena",
    "Partilha de Bens MG",
    "Herança e Sucessões MG",
    "Regularização de Imóveis Conselheiro Pena",
    "Usucapião Judicial e Extrajudicial MG",
    "Escritura de Imóveis Conselheiro Pena",
    "Bernardo Haussmann Advogado",
    "Advogado Leste de Minas Gerais",
  ],
  authors: [{ name: "Isadora Caetano — Escritório de Advocacia" }],
  creator: "Isadora Caetano — Escritório de Advocacia",
  publisher: "Isadora Caetano — Advocacia e Consultoria",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.isadoracaetano.adv.br",
    title:
      "Isadora Caetano — Escritório de Advocacia | Família, Sucessões e Imóveis · Conselheiro Pena - MG",
    description:
      "Segurança jurídica, ética e atendimento acolhedor. Especialistas em Direito de Família, Inventários, Sucessões e Regularização Imobiliária. Avaliação 4,9 ★ com mais de 166 avaliações reais no Google. Conselheiro Pena - MG e atendimento online.",
    siteName: "Isadora Caetano — Escritório de Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 971,
        height: 242,
        alt: "Isadora Caetano Advocacia e Consultoria - Logotipo Oficial",
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
    name: "Isadora Caetano — Escritório de Advocacia",
    alternateName: "Isadora Caetano Advocacia e Consultoria",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Isadora Caetano",
        jobTitle: "Advogada Fundadora · Especialista em Família, Sucessões e Imóveis",
      },
      {
        "@type": "Person",
        name: "Dr. Bernardo Haussmann",
        jobTitle: "Advogado Associado",
      },
    ],
    telephone: "+55-33-98763-4386",
    url: "https://www.isadoracaetano.adv.br",
    image: "https://www.isadoracaetano.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Feliciano Ferraz, 272 - Lj 2 - Centro",
      addressLocality: "Conselheiro Pena",
      addressRegion: "MG",
      postalCode: "35240-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "166",
    },
    areaServed: [
      "Conselheiro Pena",
      "Resplendor",
      "Aimorés",
      "Governador Valadares",
      "Vale do Rio Doce",
      "Leste de Minas",
      "Minas Gerais",
      "Brasil",
      "Exterior (EUA e Europa)",
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
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5533987634386",
      "https://wa.me/message/TGX7Q5QBI25JI1",
      "https://www.instagram.com/isadoracaetano.adv/",
      "https://www.instagram.com/caetanoisadora/",
      "https://www.google.com/search?q=Isadora+Caetano+%E2%80%94+Escrit%C3%B3rio+de+Advocacia%0AConselheiro+Pena+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
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
      <body className="min-h-screen overflow-x-clip bg-[#0c0a09] font-sans text-[#ede5dc] antialiased selection:bg-[#ba7852] selection:text-white">
        {children}
      </body>
    </html>
  );
}
