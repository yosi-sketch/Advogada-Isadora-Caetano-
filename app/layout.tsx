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
  themeColor: "#0a110c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ingridmarquesadvocacia.com.br"),
  title:
    "Dra. Ingrid Marques — Advocacia Previdenciária · Nova Lima - MG",
  description:
    "Dra. Ingrid Marques — Advocacia Previdenciária. Nota máxima 5,0 ★ com 39 avaliações no Google. Atuação jurídica especializada e combativa em Aposentadorias, Auxílio-Acidente, Auxílio-Doença, BPC/LOAS, Planejamento e Reversão de Negativas do INSS em Nova Lima - MG e online para todo o Brasil.",
  keywords: [
    "Dra. Ingrid Marques",
    "Ingrid Marques Advocacia Previdenciária",
    "Dra. Ingrid Marques Advogada",
    "Advocacia Previdenciária Nova Lima",
    "Advogado INSS Nova Lima MG",
    "Aposentadoria Especial Nova Lima",
    "Aposentadoria por Invalidez INSS",
    "Auxílio Acidente Nova Lima MG",
    "Auxílio Doença INSS Indeferido",
    "BPC LOAS Nova Lima",
    "Planejamento Previdenciário MG",
    "Reversão Negativa INSS",
    "Advogada Previdenciária Belo Horizonte e Região",
    "Consultoria Previdenciária Nova Lima",
  ],
  authors: [{ name: "Dra. Ingrid Marques — Advocacia Previdenciária" }],
  creator: "Dra. Ingrid Marques — Advocacia Previdenciária",
  publisher: "Ingrid Marques Advocacia Previdenciária",
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
    url: "https://www.ingridmarquesadvocacia.com.br",
    title:
      "Dra. Ingrid Marques — Advocacia Previdenciária · Nova Lima - MG",
    description:
      "Advocacia Previdenciária de excelência com nota máxima 5,0 ★ e 39 avaliações no Google. Sede no Alta de Gaya, Nova Lima - MG e atendimento jurídico em todo o Brasil.",
    siteName: "Ingrid Marques Advocacia Previdenciária",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Ingrid Marques Advocacia Previdenciária — Dra. Ingrid Marques",
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
    name: "Ingrid Marques Advocacia Previdenciária",
    alternateName: "Dra. Ingrid Marques — Advogada Previdenciária",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Ingrid Marques",
        jobTitle: "Advogada Titular · Ingrid Marques Advocacia Previdenciária",
      },
    ],
    telephone: "+55-31-99293-8746",
    url: "https://www.ingridmarquesadvocacia.com.br",
    image: "https://www.ingridmarquesadvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Seis, 147 - Alta de Gaya",
      addressLocality: "Nova Lima",
      addressRegion: "MG",
      postalCode: "34012-856",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "39",
    },
    areaServed: [
      "Nova Lima",
      "Belo Horizonte",
      "Contagem",
      "Betim",
      "Ribeirão das Neves",
      "Sabará",
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
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5531992938746",
      "https://www.google.com/search?q=Ingrid+Marques+Advocacia+Previdenci%C3%A1ria%0ANova+Lima+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
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
      <body className="min-h-screen overflow-x-clip bg-[#0a110c] font-sans text-white antialiased selection:bg-[#222f25] selection:text-[#f5dfad]">
        {children}
      </body>
    </html>
  );
}
