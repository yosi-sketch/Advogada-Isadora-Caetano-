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
  themeColor: "#f8f6f2",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rafaelasouza.adv.br"),
  title:
    "Rafaela Souza | Advogada · Especialista em Família e Sucessões em Piumhi - MG",
  description:
    "Dra. Rafaela Souza (OAB/MG 165340). Mais de 11 anos de atuação na advocacia com nota máxima 5,0 ★ no Google. Defesa especializada em Direito de Família, Divórcio, Guarda, Pensão Alimentícia, Alienação Parental e Inventários em Piumhi e todo o Brasil.",
  keywords: [
    "Rafaela Souza Advogada",
    "Dra. Rafaela Souza",
    "Rafaela Souza Piumhi",
    "OAB MG 165340",
    "Advogada em Piumhi",
    "Advogada Piumhi MG",
    "Advogada de Família Piumhi",
    "Divórcio Consensual e Litigioso Piumhi",
    "Guarda de Filhos e Pensão Alimentícia",
    "Combate à Alienação Parental",
    "Inventário e Sucessões Piumhi",
    "Escritório de Advocacia Piumhi",
    "Direito de Família Minas Gerais",
  ],
  authors: [{ name: "Dra. Rafaela Souza" }],
  creator: "Rafaela Souza | Advogada",
  publisher: "Rafaela Souza | Advogada",
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
    url: "https://www.rafaelasouza.adv.br",
    title:
      "Rafaela Souza | Advogada · Especialista em Família e Sucessões",
    description:
      "Advocacia de excelência com mais de 11 anos de experiência e nota máxima 5,0 ★ no Google. Sede no Centro de Piumhi - MG e consultoria online em todo o Brasil.",
    siteName: "Rafaela Souza | Advogada",
    images: [
      {
        url: "/logo-seal.png",
        width: 600,
        height: 600,
        alt: "Rafaela Souza | Advogada",
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
    name: "Rafaela Souza | Advogada",
    alternateName: "Dra. Rafaela Souza Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Rafaela Souza",
        jobTitle:
          "Advogada Especialista em Direito de Famílias e Sucessões (OAB/MG 165340)",
      },
    ],
    telephone: "+55-37-99811-8053",
    url: "https://www.rafaelasouza.adv.br",
    image: "https://www.rafaelasouza.adv.br/logo-seal.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Benedito Valadares, 224 - Centro",
      addressLocality: "Piumhi",
      addressRegion: "MG",
      postalCode: "37925-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "14",
    },
    areaServed: [
      "Piumhi",
      "Capitólio",
      "Passos",
      "Formiga",
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
      "https://www.instagram.com/rafaela_souza_adv/",
      "https://wa.me/5537998118053",
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
      <body className="min-h-screen overflow-x-clip bg-[#f8f6f2] font-sans text-[#070a1c] antialiased selection:bg-[#c59d64] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
