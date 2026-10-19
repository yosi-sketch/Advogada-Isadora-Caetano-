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
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marquesiniadvocacia.com.br"),
  title:
    "Dr. Chaiane Marquesini — Advogado · Marquesini Advocacia em Mantena - MG",
  description:
    "Dr. Chaiane Marquesini — Advogado (Marquesini Advocacia). Nota máxima 5,0 ★ com 56 avaliações no Google. Atuação jurídica combativa e de excelência em Direito Civil, Família, Sucessões, Previdenciário, Trabalhista e do Consumidor em Mantena - MG e online para todo o Brasil.",
  keywords: [
    "Dr. Chaiane Marquesini",
    "Dr. Chaiane Marquesini Advogado",
    "Marquesini Advocacia",
    "Chaiane Marquesini",
    "Advogado em Mantena",
    "Advogado Mantena MG",
    "Escritório de Advocacia Mantena",
    "Advocacia Mantena Centro",
    "Advogado Barra de São Francisco",
    "Direito de Família Mantena",
    "Divórcio e Inventário Mantena",
    "Advogado Previdenciário Mantena",
    "Advogado Trabalhista Mantena",
    "Ações Cíveis e Indenizações",
    "Consultoria Jurídica Mantena MG",
  ],
  authors: [{ name: "Dr. Chaiane Marquesini — Advogado" }],
  creator: "Dr. Chaiane Marquesini — Advogado",
  publisher: "Marquesini Advocacia",
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
    url: "https://www.marquesiniadvocacia.com.br",
    title:
      "Dr. Chaiane Marquesini — Advogado · Marquesini Advocacia",
    description:
      "Advocacia de excelência com nota máxima 5,0 ★ e 56 avaliações no Google. Sede no Centro de Mantena - MG e atendimento jurídico em todo o Brasil.",
    siteName: "Marquesini Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Marquesini Advocacia — Dr. Chaiane Marquesini",
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
    name: "Dr. Chaiane Marquesini — Advogado",
    alternateName: "Marquesini Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dr. Chaiane Marquesini",
        jobTitle: "Advogado Titular · Marquesini Advocacia",
      },
    ],
    telephone: "+55-33-98884-5617",
    url: "https://www.marquesiniadvocacia.com.br",
    image: "https://www.marquesiniadvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Pres. Tancredo Neves, 494 - Centro",
      addressLocality: "Mantena",
      addressRegion: "MG",
      postalCode: "35290-065",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "56",
    },
    areaServed: [
      "Mantena",
      "Barra de São Francisco",
      "Nova Belém",
      "Mendes Pimentel",
      "Itabirinha",
      "São João do Manteninha",
      "Minas Gerais",
      "Espírito Santo",
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
      "https://www.instagram.com/chmarquesini/",
      "https://wa.me/5533988845617",
      "https://www.google.com/search?q=Dr.+Chaiane+Marquesini+%E2%80%94+Advogado%0AMantena+%C2%B7+MG",
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
      <body className="min-h-screen overflow-x-clip bg-[#09090b] font-sans text-white antialiased selection:bg-[#deb26a] selection:text-[#09090b]">
        {children}
      </body>
    </html>
  );
}
