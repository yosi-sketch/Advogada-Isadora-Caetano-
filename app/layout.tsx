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
  metadataBase: new URL("https://www.liviatorres.adv.br"),
  title:
    "Lívia Torres — Advogada | Criminal & Família · Três Pontas - MG",
  description:
    "Lívia Torres — Advogada. Atuação especializada em Direito Criminal (Flagrantes 24h, Audiências de Custódia, Habeas Corpus) e Direito de Família (Divórcios, Guarda, Pensão Alimentícia e Partilha). Nota máxima 5,0 ★ com 12 avaliações no Google. Atendimento acolhedor, transparente e combativo na sede no Edifício Paquetá, Centro de Três Pontas - MG, e online.",
  keywords: [
    "Lívia Torres Advogada",
    "Dra. Lívia Torres",
    "Advogado Criminal Três Pontas MG",
    "Advocacia Criminal Três Pontas",
    "Flagrantes 24h Três Pontas",
    "Audiência de Custódia Três Pontas",
    "Habeas Corpus MG",
    "Advogado Criminalista Sul de Minas",
    "Advogado de Família Três Pontas",
    "Divórcio Três Pontas MG",
    "Pensão Alimentícia Três Pontas",
    "Guarda de Filhos Três Pontas",
    "Edifício Paquetá Três Pontas",
    "Advogada Lívia Torres",
  ],
  authors: [{ name: "Lívia Torres — Advogada" }],
  creator: "Lívia Torres — Advogada",
  publisher: "Lívia Torres — Advogada",
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
    url: "https://www.liviatorres.adv.br",
    title:
      "Lívia Torres — Advogada | Criminal & Família · Três Pontas - MG",
    description:
      "Protegendo sua liberdade e sua família com combate técnico e acolhimento humano. Nota máxima 5,0 ★ no Google. Flagrantes 24h. Edifício Paquetá - Centro, Três Pontas - MG.",
    siteName: "Lívia Torres — Advogada",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 409,
        alt: "Lívia Torres — Advogada - Logotipo Oficial",
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
    name: "Lívia Torres — Advogada",
    alternateName: "Dra. Lívia Torres Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Lívia Torres",
        jobTitle: "Advogada Titular · Especialista em Criminal e Família",
      },
    ],
    telephone: "+55-35-99983-6587",
    url: "https://www.liviatorres.adv.br",
    image: "https://www.liviatorres.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Edifício Paquetá - R. Américo Miari, 27 - Sl 201 - Centro",
      addressLocality: "Três Pontas",
      addressRegion: "MG",
      postalCode: "37185-068",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "12",
    },
    areaServed: [
      "Três Pontas",
      "Varginha",
      "Santana da Vargem",
      "Boa Esperança",
      "Campos Gerais",
      "Elói Mendes",
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
      "https://wa.me/5535999836587",
      "https://www.instagram.com/liviatorres.adv/",
      "https://www.google.com/search?q=L%C3%ADvia+Torres+%E2%80%94+Advogada%0ATr%C3%AAs+Pontas+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
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
      <body className="min-h-screen overflow-x-clip bg-[#090b10] font-sans text-[#e1e7f0] antialiased selection:bg-[#c6922c] selection:text-[#090b10]">
        {children}
      </body>
    </html>
  );
}
