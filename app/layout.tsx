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
  themeColor: "#060d18",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.paixaoadvocacia.com.br"),
  title:
    "Paixão Advocacia e Advogados Associados · Consultoria Jurídica em Sarzedo - MG",
  description:
    "Paixão Advocacia e Advogados Associados (AR Paixão). Nota máxima 5,0 ★ com 147 avaliações no Google. Atuação especializada em Direito de Família, Divórcio, Guarda, Pensão Alimentícia, Inventários, Cível e Trabalhista em Sarzedo - MG e online para todo o Brasil.",
  keywords: [
    "Paixão Advocacia",
    "Paixão Advocacia e Advogados Associados",
    "AR Paixão Advocacia e Consultoria Jurídica",
    "Advocacia em Sarzedo",
    "Advogado em Sarzedo MG",
    "Advogada Sarzedo",
    "Advocacia Sarzedo Centro",
    "Direito de Família Sarzedo",
    "Divórcio Consensual e Litigioso Sarzedo",
    "Guarda de Filhos e Pensão Alimentícia",
    "Inventário e Sucessões Sarzedo",
    "Escritório de Advocacia Sarzedo MG",
    "Advogado Betim Contagem Ibirité Grande BH",
    "Consultoria Jurídica Sarzedo",
  ],
  authors: [{ name: "Paixão Advocacia e Advogados Associados" }],
  creator: "Paixão Advocacia e Advogados Associados",
  publisher: "Paixão Advocacia e Advogados Associados",
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
    url: "https://www.paixaoadvocacia.com.br",
    title:
      "Paixão Advocacia e Advogados Associados · Consultoria Jurídica",
    description:
      "Advocacia de alto padrão com nota máxima 5,0 ★ e 147 avaliações no Google. Sede no Centro de Sarzedo - MG e assessoria jurídica em todo o Brasil.",
    siteName: "Paixão Advocacia e Advogados Associados",
    images: [
      {
        url: "/logo-seal.png",
        width: 600,
        height: 600,
        alt: "Paixão Advocacia e Advogados Associados",
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
    name: "Paixão Advocacia e Advogados Associados",
    alternateName: "AR Paixão — Advocacia e Consultoria Jurídica",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Paixão",
        jobTitle:
          "Advogada e Sócia Titular · Paixão Advocacia",
      },
    ],
    telephone: "+55-31-99676-9370",
    url: "https://www.paixaoadvocacia.com.br",
    image: "https://www.paixaoadvocacia.com.br/logo-seal.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. dos Rodoviários, 103 - LOJA 205 - Centro",
      addressLocality: "Sarzedo",
      addressRegion: "MG",
      postalCode: "32450-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "147",
    },
    areaServed: [
      "Sarzedo",
      "Betim",
      "Ibirité",
      "Contagem",
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
      "https://www.instagram.com/paixao_advocacia/",
      "https://wa.me/5531996769370",
      "https://www.google.com/search?q=Paix%C3%A3o+Advocacia+e+Advogados+Associados%0ASarzedo+%C2%B7+MG",
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
      <body className="min-h-screen overflow-x-clip bg-[#f9f7f4] font-sans text-[#080f1d] antialiased selection:bg-[#d4a862] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
