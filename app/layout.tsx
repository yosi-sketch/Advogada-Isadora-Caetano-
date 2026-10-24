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
  themeColor: "#090b10",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oliveiraemegda.adv.br"),
  title:
    "Jeisiele Oliveira — Advogada | Direito Previdenciário · Campos Gerais - MG",
  description:
    "Dra. Jeisiele Oliveira — Advogada Especialista em Direito Previdenciário (Aposentadorias, Benefício Cessado ou Negado pelo INSS, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Planejamento). Membro da Comissão de Direito Previdenciário da 21ª Subseção OAB/MG. Nota máxima 5,0 ★ com 11 avaliações no Google. Atendimento presencial em Campos Gerais - MG e online para todo o Brasil.",
  keywords: [
    "Jeisiele Oliveira Advogada",
    "Dra. Jeisiele Oliveira",
    "Oliveira e Megda Advocacia",
    "Oliveira e Megda Advocacia e Consultoria Previdenciária",
    "Advogado Previdenciário Campos Gerais MG",
    "Advogado INSS Campos Gerais",
    "Benefício Cessado INSS",
    "Benefício Negado INSS",
    "Aposentadoria por Idade Campos Gerais",
    "Aposentadoria Especial Sul de Minas",
    "BPC LOAS Campos Gerais",
    "Auxílio Doença INSS",
    "Planejamento Previdenciário MG",
    "Advogada Jeisiele Oliveira",
  ],
  authors: [{ name: "Jeisiele Oliveira — Advogada" }],
  creator: "Jeisiele Oliveira — Advogada",
  publisher: "Oliveira e Megda Advocacia e Consultoria Previdenciária",
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
    url: "https://www.oliveiraemegda.adv.br",
    title:
      "Jeisiele Oliveira — Advogada | Direito Previdenciário · Campos Gerais - MG",
    description:
      "Ajudo você a conquistar aposentadorias e benefícios do INSS sem complicação. Atuação combativa contra benefícios cessados e negados. Nota máxima 5,0 ★ no Google. Campos Gerais - MG e atendimento online.",
    siteName: "Jeisiele Oliveira — Advogada | Oliveira e Megda",
    images: [
      {
        url: "/logo.png",
        width: 968,
        height: 472,
        alt: "Oliveira e Megda Advocacia e Consultoria Previdenciária - Logotipo Oficial",
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
    name: "Jeisiele Oliveira — Advogada",
    alternateName: "Oliveira e Megda Advocacia e Consultoria Previdenciária",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Jeisiele Oliveira",
        jobTitle:
          "Advogada Associada · Especialista em Direito Previdenciário · Membro da Comissão da 21ª Subseção OAB/MG",
      },
    ],
    telephone: "+55-35-98467-0985",
    url: "https://www.oliveiraemegda.adv.br",
    image: "https://www.oliveiraemegda.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Tomé Soares de Oliveira",
      addressLocality: "Campos Gerais",
      addressRegion: "MG",
      postalCode: "37160-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "11",
    },
    areaServed: [
      "Campos Gerais",
      "Alfenas",
      "Boa Esperança",
      "Campo do Meio",
      "Três Pontas",
      "Varginha",
      "Sul de Minas",
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
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5535984670985",
      "https://www.instagram.com/jeisiele.advogada/",
      "https://www.google.com/search?q=Jeisiele+Oliveira+%E2%80%94+Advogada%0ACampos+Gerais+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
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
      <body className="min-h-screen overflow-x-clip bg-[#090a0f] font-sans text-[#e1e7f0] antialiased selection:bg-[#d09040] selection:text-[#090a0f]">
        {children}
      </body>
    </html>
  );
}
