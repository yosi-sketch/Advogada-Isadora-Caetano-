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
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fbf9f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.haynhandramartins.adv.br"),
  title:
    "Haynhandra Martins Advocacia — Previdenciário (INSS) e Cível · Igarapé - MG",
  description:
    "Haynhandra Martins Advocacia - Previdenciário (INSS) e Cível. Nota máxima 5,0 ★ com 26 avaliações no Google. Atuação jurídica combativa e humanizada em Aposentadorias, BPC/LOAS, Auxílio-Doença, Auxílio-Acidente, Revisões do INSS, Direito Cível e Família no Centro de Igarapé - MG e atendimento online para todo o Brasil.",
  keywords: [
    "Haynhandra Martins Advocacia",
    "Dra. Haynhandra Martins",
    "Advogado Previdenciário Igarapé MG",
    "Advocacia Previdenciária Igarapé",
    "Advogado INSS Igarapé",
    "Aposentadoria Igarapé MG",
    "Auxílio Doença INSS Igarapé",
    "Auxílio Acidente Igarapé",
    "BPC LOAS Igarapé",
    "Advogado Cível Igarapé",
    "Direito de Família Igarapé",
    "Inventário Igarapé MG",
    "Advogada Haynhandra Martins",
    "Advogado Previdenciário Betim e Região",
    "Consultoria Previdenciária Online Brasil",
  ],
  authors: [{ name: "Haynhandra Martins Advocacia - Previdenciário (INSS) e Cível" }],
  creator: "Haynhandra Martins Advocacia",
  publisher: "Haynhandra Martins Advocacia",
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
    url: "https://www.haynhandramartins.adv.br",
    title:
      "Haynhandra Martins Advocacia — Previdenciário (INSS) e Cível · Igarapé - MG",
    description:
      "Advocacia de excelência com nota máxima 5,0 ★ e 26 avaliações no Google. Sede no Centro de Igarapé - MG e atendimento jurídico online em todo o Brasil.",
    siteName: "Haynhandra Martins Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Haynhandra Martins Advocacia - Previdenciário (INSS) e Cível",
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
    name: "Haynhandra Martins Advocacia - Previdenciário (INSS) e Cível",
    alternateName: "Dra. Haynhandra Martins Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Haynhandra Martins",
        jobTitle: "Advogada Titular · Haynhandra Martins Advocacia",
      },
    ],
    telephone: "+55-31-99787-8257",
    url: "https://www.haynhandramartins.adv.br",
    image: "https://www.haynhandramartins.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Alexandre Nunes, 157 - Centro",
      addressLocality: "Igarapé",
      addressRegion: "MG",
      postalCode: "32900-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "26",
    },
    areaServed: [
      "Igarapé",
      "Betim",
      "São Joaquim de Bicas",
      "Brumadinho",
      "Mateus Leme",
      "Juatuba",
      "Belo Horizonte",
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
      "https://wa.me/5531997878257",
      "https://www.instagram.com/haymartinsadvocacia/",
      "https://www.google.com/search?q=Haynhandra+Martins+Advocacia%0AIgarap%C3%A9+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
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
      <body className="min-h-screen overflow-x-clip bg-[#fbf9f5] font-sans text-[#2b1a1d] antialiased selection:bg-[#681724] selection:text-white">
        {children}
      </body>
    </html>
  );
}
