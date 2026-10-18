"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  FileCheck2,
  Gavel,
  Zap,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537998118053";
const PHONE_DISPLAY = "(37) 99811-8053";
const EMAIL_CONTACT = "contato@rafaelasouza.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/rafaela_souza_adv/";
const INSTAGRAM_HANDLE = "@rafaela_souza_adv";

const ADDRESS_TEXT =
  "R. Benedito Valadares, 224 - Centro, Piumhi - MG, 37925-000 · Atendimento Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Rafaela+Souza+%E2%80%94+Advogada+Piumhi+%C2%B7+MG";

const LOGO_SRC = "/logo.png";
const LOGO_WHITE_SRC = "/logo-white.png";
const LOGO_GOLD_SRC = "/logo-gold.png";
const LOGO_SEAL_SRC = "/logo-seal.png";
const LOGO_MONOGRAM_SRC = "/logo-monogram-gold.png";
const FOTO_HERO_SRC = "/rafaela-souza-hero.png";
const FOTO_SOBRE_SRC = "/rafaela-souza-sobre.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Rafaela Souza! Gostaria de consultar sobre meus direitos e agendar um atendimento.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-de-familia-filhos",
    title: "Direito de Família & Proteção dos Filhos",
    icon: Users,
    tag: "Guarda · Pensão Alimentícia · Convivência · Proteção Integral",
    summary:
      "Defesa intransigente do melhor interesse das crianças, fixação justa e execução de alimentos, guarda compartilhada ou unilateral e convivência familiar equilibrada.",
    details:
      "A Dra. Rafaela Souza é referência em Piumhi e região por sua atuação dedicada e sensível no amparo às relações familiares. Atuamos com acolhimento humanizado e firmeza processual em pedidos de guarda unilateral ou compartilhada, regulamentação de convivência, fixação, revisão e execução de pensão alimentícia com requerimento de medidas legais eficientes para assegurar a subsistência e a dignidade dos filhos.",
    topics: [
      "Fixação, revisão e execução de pensão alimentícia com pedidos de bloqueios e cobrança judicial",
      "Ações de Guarda Compartilhada ou Unilateral com foco na proteção integral e bem-estar da criança",
      "Regulamentação de visitas e planos de convivência paterna e materna sem desgastes emocionais",
      "Defesa dos direitos de crianças e adolescentes em situação de vulnerabilidade ou conflito familiar",
      "Investigação e reconhecimento de paternidade com exames de DNA e alimentos gravídicos",
      "Medidas cautelares de busca e apreensão de menores e garantia de retorno seguro ao lar",
    ],
    whatsAppText:
      "Olá, Dra. Rafaela Souza! Gostaria de uma consulta jurídica sobre Guarda e Pensão Alimentícia dos meus filhos.",
  },
  {
    id: "alienacao-parental-urgencia",
    title: "Combate à Alienação Parental & Urgências",
    icon: ShieldCheck,
    tag: "Alienação Parental · Preservação do Vínculo · Proteção Emocional",
    summary:
      "Atuação jurídica imediata e enérgica contra atos de alienação parental, manipulações psicológicas, reversão de guarda e preservação do afeto familiar.",
    details:
      "A alienação parental prejudica profundamente os filhos e fere direitos fundamentais de mães e pais. Com estudo técnico aprofundado na matéria, a Dra. Rafaela Souza atua com requerimentos liminares urgentes, perícias psicossociais céleres, aplicação de multas por descumprimento e reversão de guarda para cessar abusos e restabelecer o convívio saudável.",
    topics: [
      "Ação declaratória de Alienação Parental com pedido liminar e perícia psicossocial célere",
      "Reversão de guarda em casos graves de alienação parental e obstrução deliberada de contato",
      "Defesa técnica contra falsas acusações forjadas em disputas litigiosas de família",
      "Aplicação de multas diárias e medidas coercitivas por descumprimento do regime de convivência",
      "Acompanhamento assistido e restabelecimento seguro da convivência familiar",
      "Medidas protetivas e cautelares para resguardar a integridade emocional dos filhos",
    ],
    whatsAppText:
      "Olá, Dra. Rafaela Souza! Estou enfrentando Alienação Parental e preciso de orientação jurídica urgente.",
  },
  {
    id: "divorcio-partilha-de-bens",
    title: "Divórcio Estratégico & Partilha de Bens",
    icon: Scale,
    tag: "Divórcio Consensual & Litigioso · Partilha · União Estável",
    summary:
      "Dissolução de casamento e união estável com segurança financeira, agilidade extrajudicial em cartório e investigação patrimonial contra fraudes.",
    details:
      "Decisões jurídicas em divórcios demandam planejamento estratégico, clareza e racionalidade. Conduzimos divórcios consensuais em cartório com rapidez, discrição e menor custo, assim como ações litigiosas complexas na Justiça, garantindo apuração minuciosa de bens comuns, blindagem de patrimônio, alimentos transitórios e partilhas justas.",
    topics: [
      "Divórcio extrajudicial em cartório rápido, econômico e sem burocracias",
      "Divórcio judicial litigioso com investigação patrimonial e combate à ocultação de bens",
      "Reconhecimento e dissolução de união estável com divisão correta do patrimônio comum",
      "Fixação de pensão alimentícia entre cônjuges (alimentos transitórios ou compensatórios)",
      "Bloqueio cautelar de contas bancárias, empresas e veículos para evitar dilapidação patrimonial",
      "Alteração de regime de bens, pactos antenupciais e acordos preventivos de convivência",
    ],
    whatsAppText:
      "Olá, Dra. Rafaela Souza! Gostaria de consultar sobre Divórcio e Partilha de Bens.",
  },
  {
    id: "inventario-heranca-sucessoes",
    title: "Inventário, Herança & Sucessões",
    icon: FileCheck2,
    tag: "Inventário em Cartório & Judicial · Herança · Testamentos",
    summary:
      "Regularização célere de patrimônio herdado, inventário amigável em cartório sem desgaste entre familiares e planejamento sucessório preventivo.",
    details:
      "Perder um ente querido é doloroso e exige serenidade. Assessoramos herdeiros na condução de inventários em cartório (com conclusão rápida e economia tributária) e em inventários judiciais litigiosos, além de testamentos, doações em vida e planejamento sucessório para preservar a harmonia da família.",
    topics: [
      "Inventário extrajudicial em cartório rápido, seguro e com máxima economia fiscal",
      "Inventário judicial litigioso com defesa contundente de herdeiros prejudicados",
      "Colação de bens e anulação de doações fraudulentas que violaram a legítima",
      "Elaboração, registro e cumprimento de testamentos públicos e diretivas sucessórias",
      "Regularização e desembaraço registral de imóveis e empresas deixados por herança",
      "Planejamento sucessório patrimonial para evitar conflitos futuros entre parentes",
    ],
    whatsAppText:
      "Olá, Dra. Rafaela Souza! Gostaria de orientações sobre Inventário e Partilha de Herança.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Contratos & Indenizações",
    icon: Gavel,
    tag: "Danos Morais · Contratos · Relações de Consumo · Imóveis",
    summary:
      "Defesa dos seus direitos patrimoniais e reparação por prejuízos, ações indenizatórias, cobranças indevidas e blindagem contratual.",
    details:
      "No âmbito cível, defendemos clientes e famílias contra violações de seus direitos patrimoniais e morais. Atuamos com rigor em ações indenizatórias por negativações indevidas, golpes bancários, litígios imobiliários, rescisões e assessoria preventiva em contratos civis e comerciais.",
    topics: [
      "Indenização por danos morais e materiais decorrentes de condutas lesivas e negativações indevidas",
      "Ações judiciais contra fraudes bancárias, golpes do consignado e cobranças ilegais",
      "Elaboração, revisão minuciosa e rescisão de contratos civis, comerciais e de locação",
      "Ações possessórias, usucapião e regularização fundiária de imóveis urbanos e rurais",
      "Defesa dos direitos do consumidor em face de fornecedores, concessionárias e seguradoras",
      "Execuções judiciais de títulos e recuperação estratégica de créditos",
    ],
    whatsAppText:
      "Olá, Dra. Rafaela Souza! Preciso de assessoria jurídica na área Cível / Contratos / Indenizações.",
  },
  {
    id: "consultoria-preventiva-acordos",
    title: "Consultoria Preventiva & Mediação de Acordos",
    icon: HeartHandshake,
    tag: "Pactos Antenupciais · Soluções Consensuais · Mediação",
    summary:
      "Prevenção de litígios, elaboração de pactos antenupciais, mediação amigável e formalização de acordos com total segurança jurídica.",
    details:
      "A melhor vitória jurídica muitas vezes é aquela que evita o processo desgastante. Prestamos consultoria preventiva especializada para casais, famílias e indivíduos, estruturando acordos de convivência, pactos antenupciais detalhados e mediação de conflitos para que as decisões sejam tomadas com equilíbrio, transparência e proteção futura.",
    topics: [
      "Elaboração e análise de pactos antenupciais personalizados e escolha de regime de bens",
      "Contratos de convivência e união estável com cláusulas patrimoniais protetivas",
      "Mediação extrajudicial de conflitos familiares com foco no consenso amigável",
      "Homologação judicial rápida de acordos consensuais de divórcio, guarda e alimentos",
      "Pareceres jurídicos preventivos para tomada de decisões financeiras e patrimoniais",
      "Assessoria continuada para esclarecimento de direitos civis e familiares",
    ],
    whatsAppText:
      "Olá, Dra. Rafaela Souza! Gostaria de agendar uma Consultoria Preventiva / Elaboração de Acordo.",
  },
];

const clientReviews = [
  {
    name: "Cyntia Teixeira",
    reviewsCount: "5 avaliações · 2 fotos no Google",
    date: "Google Meu Negócio",
    badge: "melhor advogada que conheci",
    content:
      "Um excelente profissional, competente, inteligente e atenta a todos os detalhes. Além disso tem um caráter e ética impressionantes. Me ajudou diversas vezes de forma rápida e eficaz. Certamente a melhor advogada que eu já conheci!",
  },
  {
    name: "Renata Goulart",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "sério e confiável",
    content:
      "Excelente profissional, comprometida com o trabalho. Atendimento sempre com extrema seriedade e competência. Seu trabalho é Sério e Confiavel.",
  },
  {
    name: "Jaqueline Ferreira",
    reviewsCount: "Local Guide · 15 avaliações",
    date: "Google Meu Negócio",
    badge: "trabalho com excelência",
    content:
      "Considero a melhor. Sempre disponível para explicações, educada e apresenta seu trabalho com excelência. Super Indico 😘",
  },
  {
    name: "Juliana Rosa",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "caráter e integridade",
    content:
      "A melhor profissional que já conheci!! Pessoa de muito caráter e integridade!!",
  },
  {
    name: "Camila Rodrigues Silva Garcia",
    reviewsCount: "Local Guide · 13 avaliações · 19 fotos",
    date: "Google Meu Negócio",
    badge: "ética e muito humana",
    content:
      "Profissional ética e muito humana. Sempre que tenho dúvidas sobre o processo, ela explica e me traz muita segurança!",
  },
  {
    name: "Kesiah Almeida",
    reviewsCount: "Local Guide · 10 avaliações · 9 fotos",
    date: "Google Meu Negócio",
    badge: "agilidade e clareza",
    content:
      "Profissional excelente!! Competente, trabalha com agilidade e clareza. Recomendo veementemente.",
  },
  {
    name: "Luan Moreira",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "prestativa e humana",
    content:
      "Ótima pessoa e ótima profissional, atenciosa, prestativa e humana. Ajuda quem precisa.",
  },
  {
    name: "Joelma Araujo",
    reviewsCount: "4 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "atenciosa e competente",
    content:
      "Excelente profissional, muito atenciosa e competente! Super recomendo!",
  },
  {
    name: "Josué Teodoroh",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "exímia profissional",
    content:
      "Exímia profissional! Conhece muito de sua área, entramos em seu escritório como clientes e saímos como amigos! 👏🏽👏🏽👏🏽",
  },
  {
    name: "Fellipe Goulart",
    reviewsCount: "2 avaliações · 1 foto no Google",
    date: "Google Meu Negócio",
    badge: "super profissional",
    content:
      "Ótima! Muito boa no que faz, super profissional!",
  },
  {
    name: "Stella Eduarda",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "nos orienta com amor",
    content:
      "Profissional com principios e valores, leva a sério a nossa dor e nos orienta com Amor.",
  },
  {
    name: "Marilda Teixeira",
    reviewsCount: "6 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "esclarecedora e eficiente",
    content:
      "Muito atenciosa, esclarecedora e eficiente.super recomendo",
  },
  {
    name: "João Paulo",
    reviewsCount: "2 avaliações · 5 fotos no Google",
    date: "Google Meu Negócio",
    badge: "rápida e super atenciosa",
    content:
      "Ótimo atendimento, rápida e super atenciosa",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  dark = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={
          dark
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#070a1c] sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            dark
              ? "mt-4 text-[15px] leading-7 text-[#c8d6e8]"
              : "mt-4 text-[15px] leading-7 text-[#4a586d]"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#f8f6f2] text-[#070a1c] selection:bg-[#c59d64] selection:text-white">
        {/* Navigation Bar - Warm Alabaster Studio with Dark Prussian Navy Logo */}
        <header className="sticky top-0 z-40 border-b border-[#e6dfd5] bg-[#f8f6f2]/95 backdrop-blur-xl transition-colors">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Rafaela Souza | Advogada"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative h-[62px] w-[190px] sm:h-[74px] sm:w-[230px]">
                <Image
                  src={LOGO_SRC}
                  alt="Rafaela Souza Advogada - Logo Oficial"
                  fill
                  priority
                  sizes="(max-width: 640px) 190px, 230px"
                  className="object-contain object-left"
                />
              </div>
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                Dra. Rafaela
              </a>
              <a className="nav-link" href="#atuacao">
                Especialidades
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Rafaela Souza"
                className="grid size-10 place-items-center rounded-lg border border-[#e6dfd5] bg-white text-[#070a1c] shadow-xs transition-all hover:border-[#c59d64] hover:bg-[#fbf6ee]"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Dra. Rafaela Souza"
                className="grid size-10 place-items-center rounded-lg border border-[#e6dfd5] bg-white text-[#070a1c] shadow-xs transition-all hover:border-[#c59d64] hover:bg-[#fbf6ee]"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Rafaela Souza"
                className="grid size-10 place-items-center rounded-lg border border-[#e6dfd5] bg-white text-[#070a1c] shadow-xs transition-all hover:border-[#c59d64] hover:bg-[#fbf6ee]"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Rafaela Souza! Gostaria de agendar uma consulta jurídica com seu escritório."
                )}
                target="_blank"
                size="sm"
                variant="navy"
                className="rounded-lg shadow-sm"
              >
                Consultar Direitos <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#e6dfd5] bg-white text-[#070a1c] shadow-xs lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-[#e6dfd5] bg-[#f8f6f2] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Rafaela Souza", "#sobre"],
                    ["Especialidades Jurídicas", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold text-[#070a1c] hover:text-[#c59d64]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#070a1c] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#f5e6cf] shadow-md transition-all hover:bg-[#0f1c38]"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Rafaela Souza! Gostaria de consultar sobre o meu caso."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e6dfd5] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#070a1c] transition-all hover:border-[#c59d64]"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> Instagram: {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Warm Alabaster Studio Aesthetic with Deep Navy Accents */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e6dfd5] bg-gradient-to-b from-[#f8f6f2] via-[#f3efea] to-[#f8f6f2]"
        >
          {/* Subtle warm champagne & honey glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-[#dab280]/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-[#c59d64]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              {/* Dark tag inspired by the post's dark block */}
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#dab280]/40 bg-[#070a1c] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5e6cf] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#dab280]" />
                <span>DRA. RAFAELA SOUZA · OAB/MG 165340 · PIUMHI - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-[#070a1c] sm:text-5xl lg:text-[3.85rem]"
              >
                Defesa jurídica estratégica, humana e resolutiva para{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#070a1c] via-[#8c673b] to-[#c59d64]">
                  você e sua família.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#4a586d] sm:text-base sm:leading-8"
              >
                ⚖️ <strong className="font-semibold text-[#070a1c]">11 anos de atuação dedicada na advocacia.</strong> Protegemos seus filhos, seu patrimônio e seus direitos com especialização em <span className="text-[#070a1c] font-semibold">Famílias, Alienação Parental, Divórcio e Sucessões</span>, combinando precisão técnica e acolhimento humano.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Rafaela Souza! Gostaria de consultar sobre meus direitos e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="navy"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Rafaela
                </GlowingButton>
                <GlowingButton
                  href="#atuacao"
                  size="lg"
                  variant="white"
                  className="rounded-lg shadow-xs"
                >
                  Especialidades Jurídicas{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </GlowingButton>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#e6dfd5] pt-6 text-xs text-[#4a586d]"
              >
                <span className="inline-flex items-center gap-2 font-semibold text-[#070a1c]">
                  <Star size={15} className="fill-[#c59d64] text-[#c59d64]" />{" "}
                  5,0 estrelas no Google (14 avaliações unânimes e verificadas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-[#8c673b]" /> 11 Anos de Atuação na Advocacia
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#8c673b]" /> Sede em Piumhi - MG & Online para Todo o Brasil
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Rafaela Souza */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-[4/5.2] overflow-hidden rounded-2xl border-2 border-[#e6dfd5] bg-white shadow-2xl ring-1 ring-[#dab280]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Rafaela Souza — Advogada Especialista em Família e Sucessões em Piumhi"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070a1c] via-[#070a1c]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Rafaela Souza
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dab280]">
                      Advogada · OAB/MG 165340
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#dab280]/40 bg-[#070a1c]/90 text-[#f5e6cf] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Authority badge - Positioned safely at waist level on the side, completely away from face and head */}
              <div className="absolute -left-3 bottom-28 z-10 rounded-lg border border-[#e6dfd5] bg-white px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#070a1c] shadow-card sm:-left-5">
                <span className="text-[#8c673b]">●</span> 11 ANOS DE ATUAÇÃO · PIUMHI - MG
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#e6dfd5] bg-white p-3.5 shadow-card sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#c59d64] text-[#c59d64]" />
                    <span className="font-serif text-base font-bold text-[#070a1c]">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#4a586d]">
                  14 Avaliações no Google (100% 5★)
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - High Contrast Deep Navy Authority Band */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-y border-[#dab280]/20 bg-[#070a1c] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima de excelência no Google com 14 avaliações unânimes",
              ],
              [
                "11 Anos",
                "de atuação sólida, ética e dedicada na advocacia",
              ],
              [
                "Famílias & Sucessões",
                "especialista em divórcio, partilha, alienação parental e inventários",
              ],
              [
                "Piumhi & Online",
                "sede no Centro de Piumhi e assessoria para todo o Brasil",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#dab280]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#dab280] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#c8d6e8]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Rafaela Souza - Editorial Warm Studio Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#e6dfd5] bg-white py-20 text-[#070a1c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Rafaela presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#e6dfd5] bg-white shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Rafaela Souza — Especialista em Direito das Famílias e Sucessões"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070a1c]/90 via-[#070a1c]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Navy Gold Contrast */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#dab280]/40 bg-[#070a1c] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#dab280]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dab280]">
                    Advocacia Humanizada & Especializada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Rafaela Souza
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#dab280]">
                  OAB/MG 165340 · Famílias & Sucessões
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#c8d6e8]">
                  Piumhi - MG · R. Benedito Valadares, 224
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c59d64]/50 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography - Editorial Warm Light Typography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#8c673b]/30 bg-[#f8f6f2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c673b] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c59d64]" />
                <span>CONHEÇA A DRA. RAFAELA SOUZA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#070a1c] sm:text-4xl lg:text-[3.25rem]"
              >
                Muito além do processo: uma{" "}
                <span className="italic text-[#8c673b]">
                  defensora leal, humana e incansável ao seu lado.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a586d]"
              >
                Com mais de{" "}
                <strong className="font-bold text-[#070a1c]">
                  11 anos de atuação destacada em Piumhi e em Minas Gerais
                </strong>
                , a Dra. Rafaela Souza (OAB/MG 165340) construiu sua trajetória na advocacia alicerçada na seriedade, no rigor técnico e no atendimento profundamente humanizado.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a586d]"
              >
                Especialista em Direito das Famílias e Sucessões, compreende que momentos que envolvem divórcio, alienação parental, partilha patrimonial ou a guarda dos filhos geram grande impacto emocional. Por isso, une <strong className="font-bold text-[#070a1c]">sensibilidade para acolher e firmeza técnica para defender</strong>, orientando cada cliente com clareza, ética e foco na resolução justa.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e6dfd5] bg-[#f8f6f2] p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#070a1c]">
                  &ldquo;Um excelente profissional, competente, inteligente e atenta a todos os detalhes. Além disso tem um caráter e ética impressionantes. Me ajudou diversas vezes de forma rápida e eficaz. Certamente a melhor advogada que eu já conheci!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8c673b]">
                  — Cyntia Teixeira · Avaliação Verificada no Google Meu Negócio
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#070a1c] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#c59d64]" />
                  <span>11 anos de experiência e solidez comprovada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#c59d64]" />
                  <span>Especialista em Direito de Famílias e Sucessões</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#c59d64]" />
                  <span>Combate enérgico e preventivo à alienação parental</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#c59d64]" />
                  <span>Nota máxima 5,0 ★ com 14 avaliações unânimes no Google</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Rafaela Souza! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="navy"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Rafaela
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#070a1c] transition-colors hover:text-[#8c673b]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Especialidades Jurídicas Dra. Rafaela Souza - Warm Studio Tint with Crisp White Cards */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#e6dfd5] bg-[#f3efea] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="SERVIÇOS JURÍDICOS & PILARES DE ATUAÇÃO"
                description="Especialização técnica, sensibilidade humana e combatividade firme para resguardar seus filhos, sua família e seu patrimônio."
              >
                Atuação jurídica especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#070a1c] via-[#8c673b] to-[#c59d64]">
                  Família, Sucessões e Cível.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#4a586d]">
                Selecione uma especialidade abaixo para conferir as demandas atendidas e iniciar seu atendimento diretamente pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e6dfd5] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c59d64] hover:shadow-card-hover sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#e6dfd5] bg-[#f8f6f2] text-[#070a1c] shadow-xs transition-colors group-hover:border-[#c59d64] group-hover:bg-[#070a1c] group-hover:text-[#f5e6cf]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl font-semibold text-[#c59d64]/60">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#e6dfd5] bg-[#f8f6f2] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#070a1c]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#070a1c]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#4a586d]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c673b] hover:text-[#070a1c]"
                    >
                      Ver detalhes e demandas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher Dra. Rafaela Souza - Os 4 Pilares de Excelência (Navy Authority Section) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#dab280]/20 bg-[#070a1c] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="REPUTAÇÃO COMPROVADA NO GOOGLE"
                description="Os pilares de Rapidez, Ética, Eficiência e Humanidade reconhecidos por clientes reais em Piumhi."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbf6ee] via-[#f5e6cf] to-[#dab280]">
                  Dra. Rafaela Souza?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Rafaela Souza! Gostaria de consultar sobre a minha situação jurídica."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            {/* Grid 4 Pilares da Avaliação Google */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pilar 1: Rápida */}
              <div className="flex flex-col rounded-xl border border-[#dab280]/20 bg-[#0d162a] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dab280]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dab280]/30 bg-[#070a1c] text-[#dab280]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Rápida (Speed)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d6e8]">
                  Agilidade e presteza no andamento processual, elaboração célere de peças e respostas rápidas às dúvidas do cliente.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dab280]">
                  &ldquo;Rápida e super atenciosa&rdquo;
                </span>
              </div>

              {/* Pilar 2: Ética */}
              <div className="flex flex-col rounded-xl border border-[#dab280]/20 bg-[#0d162a] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dab280]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dab280]/30 bg-[#070a1c] text-[#dab280]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Ética (Ethics)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d6e8]">
                  Conduta profissional ilibada, respeito estrito ao sigilo das informações e honestidade inegociável em cada orientação.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dab280]">
                  &ldquo;Caráter e integridade admiráveis&rdquo;
                </span>
              </div>

              {/* Pilar 3: Eficiente */}
              <div className="flex flex-col rounded-xl border border-[#dab280]/20 bg-[#0d162a] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dab280]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dab280]/30 bg-[#070a1c] text-[#dab280]">
                  <Scale size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Eficiente (Efficient)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d6e8]">
                  Estratégias jurídicas afiadas e fundamentadas, evitando desgastes desnecessários e focando na máxima eficácia.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dab280]">
                  &ldquo;Competente e muito bem qualificada&rdquo;
                </span>
              </div>

              {/* Pilar 4: Humana */}
              <div className="flex flex-col rounded-xl border border-[#dab280]/20 bg-[#0d162a] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dab280]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dab280]/30 bg-[#070a1c] text-[#dab280]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Humana (Humanity)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d6e8]">
                  Sensibilidade para acolher momentos difíceis, escuta empática e compromisso de levar a sério a dor de cada pessoa.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dab280]">
                  &ldquo;Leva a sério a nossa dor e orienta com amor&rdquo;
                </span>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Acolhimento Humanizado & Paciência */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dab280]/25 bg-[#0d162a] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#dab280]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dab280]/30 bg-[#070a1c] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f5e6cf]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#dab280]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Paciência, Escuta Ativa & Verdade Acima de Tudo
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#c8d6e8]">
                    Sabemos que momentos de conflito familiar, divórcio ou disputa de guarda trazem apreensão e insegurança. Na advocacia da Dra. Rafaela Souza, você é ouvido com empatia profunda, respeito e atenção aos mínimos detalhes.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dab280]" />
                      <span>Contato direto pelo WhatsApp e acompanhamento próximo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dab280]" />
                      <span>Prioridade absoluta aos direitos e à integridade dos filhos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dab280]" />
                      <span>Explicações claras em cada etapa, sem juridiquês indecifrável</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dab280]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Rafaela Souza! Gostaria de conversar diretamente com você sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dab280]/30 bg-[#070a1c] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5e6cf] transition-all hover:border-[#dab280] hover:bg-[#12203d] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Estratégia Jurídica & Combate Firme */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dab280]/25 bg-[#0d162a] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#dab280]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dab280]/30 bg-[#070a1c] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f5e6cf]">
                      <Scale size={14} /> Estratégia & Combate
                    </span>
                    <span className="text-xs font-semibold text-[#dab280]">
                      Postura Firme
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Decisões Jurídicas Exigem Estratégia, Não Impulso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#c8d6e8]">
                    Agir por impulso pode custar a convivência com um filho ou a perda de um patrimônio conquistado com esforço. Traçamos planos de ação jurídicos consistentes, reunindo provas e fundamentação robusta para salvaguardar seus direitos.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dab280]" />
                      <span>Especialização técnica profunda em Famílias e Sucessões</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dab280]" />
                      <span>Postura combativa e leal em audiências e negociações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dab280]" />
                      <span>Proteção patrimonial preventiva e combate à ocultação de bens</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dab280]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Rafaela Souza! Preciso de ajuda jurídica para analisar meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dab280]/30 bg-[#070a1c] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5e6cf] transition-all hover:border-[#dab280] hover:bg-[#12203d] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Analisar Meu Caso no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso com Você - Warm Alabaster Canvas */}
        <section className="relative overflow-hidden bg-[#f8f6f2] py-20 text-[#070a1c] sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#dab280]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#c59d64]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota máxima de 5,0 ★ no Google reflete a dedicação e o respeito incondicional a cada cliente que busca amparo em nosso escritório."
              >
                Cuidamos da sua causa com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#070a1c] via-[#8c673b] to-[#c59d64]">
                  ética, transparência e acolhimento total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e6dfd5] bg-white p-6 font-serif text-base italic leading-7 text-[#070a1c] shadow-card">
                &ldquo;Exímia profissional! Conhece muito de sua área, entramos em seu escritório como clientes e saímos como amigos! 👏🏽👏🏽👏🏽&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#8c673b]">
                  — Josué Teodoroh · Avaliação no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e6dfd5]"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Empatia",
                  "Você é ouvido com atenção e sem julgamentos. Analisamos cada detalhe da sua história familiar para traçar a melhor rota jurídica.",
                ],
                [
                  "02",
                  "Transparência & Comunicação Clara",
                  "Você nunca fica sem respostas. Mantemos você informado de cada passo do seu processo em linguagem acessível e transparente.",
                ],
                [
                  "03",
                  "Segurança Técnica & Combatividade",
                  "Lutamos incansavelmente pelo melhor resultado possível, garantindo a proteção dos seus filhos, seus direitos e seu patrimônio.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-bold text-[#c59d64]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#070a1c]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4a586d]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 14 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#e6dfd5] bg-[#f3efea] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram suas causas à Dra. Rafaela Souza em Piumhi."
              >
                Avaliada com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#070a1c] via-[#8c673b] to-[#c59d64]">
                  competência, empatia e ética comprovada.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e6dfd5] bg-white p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#e6dfd5] bg-[#f8f6f2] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#070a1c]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c59d64]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c59d64] text-[#c59d64]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#070a1c]">
                    Rafaela Souza | Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#8c673b] transition-colors hover:text-[#070a1c]"
                  >
                    14 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e6dfd5] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c59d64] hover:shadow-card-hover sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c59d64]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c59d64] text-[#c59d64]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#4a586d]">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#e6dfd5] bg-[#f8f6f2] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#070a1c]">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#070a1c]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e6dfd5] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#e6dfd5] bg-[#f8f6f2] font-serif text-sm font-semibold text-[#070a1c]">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#070a1c]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#6b7a90]">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e6dfd5] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Piumhi - MG",
                  "Especialista em Direito de Famílias",
                  "Guarda e Pensão Alimentícia",
                  "Divórcio Consensual e Litigioso",
                  "Alienação Parental e Sucessões",
                  "Nota 5,0 no Google com 14 Avaliações",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e6dfd5] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#070a1c] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#c59d64]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8c673b] transition-colors hover:text-[#070a1c]"
              >
                Ver avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Piumhi (Deep Navy Section) */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#dab280]/20 bg-[#070a1c] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                dark
                eyebrow="CONTATO & ATENDIMENTO"
                description="Inicie seu atendimento diretamente pelo WhatsApp. Prestamos assistência com agilidade para clientes de Piumhi, Passos, Capitólio, Formiga e assessoria jurídica online para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbf6ee] via-[#f5e6cf] to-[#dab280]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Rafaela Souza! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#c8d6e8]">
                  WhatsApp e Telefone do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#c8d6e8]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dab280]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira · das 09:00 às 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial no escritório sob agendamento e consultoria online
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#dab280]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#dab280]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#dab280]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#dab280] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#dab280]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#dab280] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dab280]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#dab280]/25 bg-[#0d162a] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#dab280] to-[#f5e6cf]" />

              <div className="flex items-center gap-4">
                <div className="relative h-[85px] w-[235px] shrink-0 sm:h-[94px] sm:w-[275px]">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Rafaela Souza Advogada"
                    fill
                    sizes="(max-width: 640px) 235px, 275px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#c8d6e8]">
                <strong className="font-semibold text-white">
                  Dra. Rafaela Souza
                </strong>
                <br />
                Advogada Especialista em Famílias e Sucessões · OAB/MG 165340
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#dab280]/20 bg-[#070a1c] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#dab280]">
                  Atendimento & Disponibilidade
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Horário Comercial</span>
                  <span className="text-right font-semibold text-white">
                    09:00 às 18:00 (Seg a Sex)
                  </span>
                  <span>Modalidade</span>
                  <span className="text-right text-[#f5e6cf]">
                    Presencial & Online
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-stone-200">Centro, Piumhi - MG</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#dab280]/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Atendimento humanizado, ético e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Rafaela Souza! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dab280]/30 bg-[#070a1c] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f5e6cf] transition-colors hover:border-[#dab280] hover:bg-[#12203d] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar com a Advogada <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#dab280]/20 bg-gradient-to-r from-[#070a1c] via-[#0d162a] to-[#070a1c] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dab280]">
                <Sparkles size={13} /> RAFAELA SOUZA | ADVOGADA · OAB/MG 165340
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Decisões jurídicas exigem estratégia, não impulso.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Rafaela Souza! Gostaria de consultar sobre meus direitos com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#a67c42] via-[#c59d64] to-[#a67c42] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#dab280]/20 bg-[#030712] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Rafaela Souza | Advogada"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[72px] w-[235px]">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Rafaela Souza Advogada - Logo Oficial"
                    fill
                    sizes="235px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#c8d6e8]">
                ⚖️ Defesa jurídica humanizada e estratégica para você e sua família. Mais de 11 anos de experiência consolidada em Direito de Família, Sucessões e Cível com nota máxima 5,0 ★ no Google.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#dab280]">
                Dra. Rafaela Souza · Advogada OAB/MG 165340
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dab280]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#c8d6e8]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Rafaela Souza
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades Jurídicas
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dab280]">
                Contato & Sede
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#c8d6e8]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Rafaela Souza! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f5e6cf]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#dab280]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · 09:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#dab280]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} RAFAELA SOUZA | ADVOGADA · DRA. RAFAELA SOUZA (OAB/MG 165340). Todos os direitos reservados.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Rafaela Souza! Gostaria de consultar sobre meus direitos com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Rafaela Souza"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#070a1c] border border-[#dab280]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Rafaela
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#e6dfd5] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10 text-[#070a1c]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e6dfd5] bg-[#f8f6f2] text-[#070a1c] transition-colors hover:border-[#c59d64] hover:bg-[#fbf6ee]"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#070a1c] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#4a586d]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e6dfd5] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c673b]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#070a1c]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c59d64]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="navy"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#6b7a90] transition-colors hover:text-[#070a1c]"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
