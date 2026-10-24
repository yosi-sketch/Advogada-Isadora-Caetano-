"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, MotionConfig } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Award,
  Shield,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  Sparkles,
  Gavel,
  Users,
  Compass,
  FileCheck2,
  CalendarCheck2,
  Home as HomeIcon,
  Globe2,
  Building2,
  CheckCircle2,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533987634386";
const PHONE_DISPLAY = "(33) 98763-4386";
const EMAIL_CONTACT = "contato@isadoracaetano.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/isadoracaetano.adv/";
const INSTAGRAM_HANDLE = "@isadoracaetano.adv";
const INSTAGRAM_PERSONAL_URL = "https://www.instagram.com/caetanoisadora/";
const INSTAGRAM_PERSONAL_HANDLE = "@caetanoisadora";

const ADDRESS_TEXT =
  "R. Feliciano Ferraz, 272 - Lj 2 - Centro, Conselheiro Pena - MG, 35240-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Isadora+Caetano+%E2%80%94+Escrit%C3%B3rio+de+Advocacia%0AConselheiro+Pena+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const WA_DIRECT_URL = "https://wa.me/message/TGX7Q5QBI25JI1";

const LOGO_SRC = "/logo-isadora-caetano.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/dra-isadora-caetano.jpg";
const FOTO_EQUIPE_WALK = "/equipe-walking.jpg";
const FOTO_EQUIPE_SOFA = "/equipe-sofa.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Isadora Caetano! Gostaria de uma consultoria jurídica com seu escritório.";
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
  category: "Direito de Família · Sucessões · Imobiliário · Cível";
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-de-familia",
    title: "Direito de Família & Proteção Parental",
    category: "Direito de Família · Sucessões · Imobiliário · Cível",
    icon: HeartHandshake,
    tag: "Divórcio · Guarda · Pensão Alimentícia · Partilha de Bens · União Estável",
    summary:
      "Condução humanizada, estratégica e segura para momentos delicados de transição familiar, preservando o patrimônio e os laços afetivos.",
    details:
      "Questões de família exigem sensibilidade, discrição absoluta e firmeza jurídica. O escritório Isadora Caetano atua tanto na mediação e divórcios consensuais ágeis em cartório quanto no contencioso judicial com partilhas complexas, garantia de guarda dos filhos e pensão alimentícia justa, evitando desgastes emocionais desnecessários.",
    topics: [
      "Divórcio consensual em cartório (rápido e sem burocracia) e divórcio judicial contencioso",
      "Fixação, revisão, exoneração e execução de débitos de pensão alimentícia",
      "Guarda compartilhada, convivência familiar equilibrada e autorização de viagens",
      "Partilha equilibrada de bens, empresas familiares e investimentos do casal",
      "Reconhecimento e dissolução de união estável com proteção patrimonial",
      "Pactos antenupciais, consultoria patrimonial pré-matrimonial e alienação parental",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Caetano! Gostaria de orientações sobre uma questão de Direito de Família (Divórcio / Guarda / Pensão / Partilha).",
  },
  {
    id: "sucessoes-e-inventarios",
    title: "Sucessões, Inventários & Partilha de Herança",
    category: "Direito de Família · Sucessões · Imobiliário · Cível",
    icon: Scale,
    tag: "Inventário Extrajudicial em Cartório · Inventário Judicial · ITCMD · Testamentos",
    summary:
      "Resolução célere e estratégica da transmissão hereditária, protegendo o patrimônio familiar e evitando conflitos desgastantes entre herdeiros.",
    details:
      "A perda de um ente querido não deve ser acompanhada pelo bloqueio de bens e disputas familiares. Conduzimos inventários extrajudiciais em cartório de forma rápida e com economia tributária (ITCMD), além de atuarmos com combatividade em inventários judiciais complexos, alvarás e planejamento sucessório patrimonial.",
    topics: [
      "Inventário extrajudicial em cartório: transmissão rápida de bens com consenso entre herdeiros",
      "Inventário judicial para casos com testamento, menores envolvidos ou litígio familiar",
      "Partilha amigável de imóveis, veículos, contas bancárias e cotas empresariais",
      "Planejamento sucessório preventivo: doações em vida com reserva de usufruto e redução de tributos",
      "Elaboração, registro e validação jurídica de testamentos públicos e particulares",
      "Alvarás judiciais para levantamento de valores, FGTS e contas bancárias do falecido",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Caetano! Preciso de assessoria jurídica para dar entrada em um inventário / partilha de herança.",
  },
  {
    id: "regularizacao-de-imoveis",
    title: "Regularização de Imóveis & Direito Imobiliário",
    category: "Direito de Família · Sucessões · Imobiliário · Cível",
    icon: HomeIcon,
    tag: "Usucapião · Escrituras · Contratos · Registro de Imóveis (RGI) · Posse Rural & Urbana",
    summary:
      "Transformamos posses informais e 'contratos de gaveta' em propriedades legalmente registradas, valorizando e protegendo o seu patrimônio.",
    details:
      "Um imóvel sem escritura definitiva não pode ser financiado, sofre desvalorização no mercado e deixa o proprietário em constante insegurança. O escritório Isadora Caetano é especialista em regularização fundiária urbana e rural, usucapião judicial e extrajudicial em cartório, averbações de construções e elaboração de contratos imobiliários blindados.",
    topics: [
      "Ações de usucapião judicial e procedimento de usucapião extrajudicial direto no cartório de registro (RGI)",
      "Regularização de escrituras públicas pendentes, desdobros e retificação de áreas",
      "Regularização de imóveis herdados sem escritura ou que ficaram fora do inventário",
      "Elaboração e revisão minuciosa de contratos de compra, venda, locação e permuta",
      "Defesa possessória: reintegração de posse, manutenção e interdito proibitório para áreas rurais e urbanas",
      "Assessoria jurídica completa para transações imobiliárias seguras e sem risco de golpe",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Caetano! Tenho um imóvel para regularizar (usucapião / escritura / contrato) e gostaria de uma avaliação.",
  },
  {
    id: "civel-e-clientes-exterior",
    title: "Advocacia Cível Estratégica & Atendimento no Exterior",
    category: "Direito de Família · Sucessões · Imobiliário · Cível",
    icon: Globe2,
    tag: "Contratos · Indenizações · Cobranças · Atendimento a Brasileiros nos EUA",
    summary:
      "Soluções patrimoniais e contratuais com suporte 100% digital e seguro para clientes locais e brasileiros residentes no exterior (EUA e outros países).",
    details:
      "Atendemos com grande destaque brasileiros que vivem no exterior (como comprovado pelas avaliações de clientes nos EUA) e precisam resolver divórcios, inventários, venda e regularização de bens no Brasil sem precisar viajar. Oferecemos também advocacia cível e contratual preventiva e contenciosa de alto padrão.",
    topics: [
      "Atendimento exclusivo e seguro para brasileiros residentes nos Estados Unidos e Europa",
      "Inventários, divórcios e regularização de patrimônio no Brasil realizados de forma 100% digital",
      "Consultoria contratual personalizada e representação perante cartórios e órgãos públicos",
      "Ações de cobrança, recuperação de créditos e rescisões contratuais",
      "Ações indenizatórias por danos morais, materiais e prejuízos patrimoniais",
      "Acompanhamento processual transparente com reuniões virtuais em horários flexíveis",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Caetano! Gostaria de consultar sobre atendimento cível / assessoria jurídica para brasileiros no exterior.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  content: string;
  reply?: string;
  highlight?: string;
}

const clientReviews: Review[] = [
  {
    name: "Claudia Levina Aquino",
    badge: "Avaliação Verificada no Google · 4 avaliações",
    date: "um ano atrás",
    highlight: "Resolvido em menos de 16 meses o que estava há 3 anos travado",
    content:
      "A melhor possível! Estava desesperançada com uma causa (que estava em outro escritório há mais de três anos) e essa competente empresa desenrolou e resolveu minha causa em menos de 16 meses! Só agradecer!!!",
    reply:
      "Obrigada pela avaliação! Será sempre um prazer atendê-la da melhor forma possível! Além de cliente, se tornou uma grande amiga! Abraços.",
  },
  {
    name: "Gilziane Philemond",
    badge: "Cliente nos Estados Unidos · 5 avaliações",
    date: "5 anos atrás",
    highlight: "Atendimento de excelência mesmo à distância nos EUA",
    content:
      "Estou nos Estados Unidos e mesmo de longe o doutor Samuel e a equipe trabalharam para meu esposo e eu, um atendimento excelente, sempre que tínhamos perguntas eles estavam sempre prontos a responder! Recomendo o trabalho deles sempre, ótimos advogados.",
    reply:
      "Ficamos imensamente felizes em poder representar vocês com excelência e segurança, encurtando distâncias!",
  },
  {
    name: "Josi de Freitas",
    badge: "Avaliação Verificada no Google · 1 avaliação",
    date: "um ano atrás",
    highlight: "Clareza, paciência e segurança em cada etapa",
    content:
      "A Dra. Isadora Caetano é uma profissional de excelência! Seu atendimento é marcado por clareza, paciência e dedicação, sempre transmitindo segurança em cada orientação. Explica o processo de forma simples e acessível, o que traz muita tranquilidade.",
    reply:
      "Josi, muitíssimo obrigada! Estarei sempre pronta para atendê-la! Agradeço de coração todos os elogios.",
  },
  {
    name: "Sandra Nunes",
    badge: "Avaliação Verificada no Google · 2 avaliações",
    date: "5 meses atrás",
    highlight: "Companheirismo e acolhimento humano",
    content:
      "São pessoas confiáveis e profissionais que sempre atendem minhas necessidades com companheirismo e profissionalismo. Obrigada por atender sempre com esse carinho e acolhimento. Eu recomendo: se precisar de uma advogada experiente procure Doutora Isadora Caetano.",
    reply:
      "Obrigada pela avaliação, Sandra! Estamos sempre prontos para atender com todo o nosso cuidado!",
  },
  {
    name: "Isa Medeiros",
    badge: "Avaliação Verificada no Google · 2 avaliações",
    date: "10 meses atrás",
    highlight: "Equipe prestativa e acompanhamento constante",
    content:
      "Excelente atendimento! A advogada que me acompanha é sempre atenciosa, clara nas orientações e muito comprometida. A equipe é prestativa e transmite segurança em cada etapa. Sinto que estou bem representada e cuidada. Recomendo! 👏🏻",
    reply:
      "Muito obrigada pela avaliação, Isa! Ficamos muito gratos pelo reconhecimento e estamos sempre dando nosso melhor para você.",
  },
  {
    name: "dieny teixeira",
    badge: "Avaliação Verificada no Google · 2 avaliações",
    date: "5 meses atrás",
    highlight: "Caso resolvido super rápido",
    content:
      "Excelente profissional, resolveu meu caso super rápido, super indico!",
    reply:
      "Obrigada pela avaliação, Dieny! Estamos sempre à sua total disposição.",
  },
  {
    name: "Walmir Carreiro",
    badge: "Avaliação Verificada no Google · 1 avaliação",
    date: "um ano atrás",
    highlight: "Agilidade e clareza nas informações",
    content:
      "Sou cliente e estou muito satisfeito com os atendimentos, agilidade e clareza nas informações. Recomendo a todos que estiverem à procura de ótimos profissionais.",
    reply:
      "Obrigada, Walmir, pela avaliação! De cliente para um amigo de confiança. Conte sempre conosco!",
  },
  {
    name: "Franciely Rosa",
    badge: "Avaliação Verificada no Google · 4 avaliações",
    date: "um ano atrás",
    highlight: "Apoio no momento mais difícil e vitória alcançada",
    content:
      "A melhor do mundo, me ajudaram no momento mais difícil da minha vida, e conseguimos a vitória! Gratidão a toda a equipe! 🙏❤️",
    reply:
      "Obrigada, Franciely! A sua vitória será sempre lembrada e celebrada por nós com muito carinho.",
  },
  {
    name: "SPR Conselheiro Pena (Sindicato)",
    badge: "Parceria Institucional · Conselheiro Pena",
    date: "um ano atrás",
    highlight: "Agilidade e resposta rápida para causas coletivas",
    content:
      "O Sindicato só tem a agradecer o serviço prestado a nossa entidade. Somos muito bem atendidos por todos da equipe. Isto sem falar na agilidade e resposta para nossas causas. Obrigado pelo atendimento.",
    reply:
      "Obrigada pela avaliação! Nossa parceria com o Sindicato é construída com respeito mútuo e trabalho sério.",
  },
  {
    name: "Maciel Alves",
    badge: "Avaliação Verificada no Google · 1 avaliação",
    date: "3 anos atrás",
    highlight: "Total segurança nas mãos da Isadora e equipe",
    content:
      "Me sinto totalmente segura nas mãos da Isadora e equipe. Profissionais super comprometidos e responsáveis. Experiência incrível que estou tendo.",
    reply:
      "Muito obrigada pela confiança depositada em nossa equipe, Maciel!",
  },
  {
    name: "Izabela Venancio",
    badge: "Avaliação Verificada no Google · 7 avaliações",
    date: "9 meses atrás",
    highlight: "Respeito e profissionalismo desde o primeiro contato",
    content:
      "Excelente atendimento!! Senti respeito e profissionalismo desde o primeiro contato, tive uma ótima experiência, super recomendo o escritório. Estou muito grata pela ajuda e pelo suporte!",
    reply:
      "Obrigada pela avaliação, Izabela! Estamos sempre à disposição para apoiar da melhor forma.",
  },
  {
    name: "Bárbara Protásio",
    badge: "Avaliação Verificada no Google · 1 avaliação",
    date: "5 meses atrás",
    highlight: "Uma profissional maravilhosa e de respeito",
    content:
      "Ótimo atendimento! Uma profissional maravilhosa e de respeito!",
    reply:
      "Obrigada pela avaliação! Estamos sempre prontos para atender com toda dedicação.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  dark = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={dark ? "eyebrow-dark mb-3.5" : "eyebrow mb-3.5"}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl leading-[1.12] tracking-[-0.02em] font-bold sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-[#14100e]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#c2b5aa]" : "text-[#5c524c]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen bg-[#0c0a09] text-[#ede5dc]">
        {/* Top Notification Strip */}
        <div className="relative z-50 border-b border-[#ba7852]/25 bg-[#14100e] px-4 py-2.5 text-xs text-[#d6cbc2]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#df9f77] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#ba7852]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f3cca8] font-semibold">
                Isadora Caetano · Advocacia & Consultoria · 4,9 ★ no Google (166+ avaliações)
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={getWhatsAppUrl("Olá, Dra. Isadora Caetano! Gostaria de falar com o escritório.")}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#df9f77] transition-colors hover:text-white"
              >
                WhatsApp: {PHONE_DISPLAY}
              </a>
              <span className="hidden text-[#4a4039] sm:inline">|</span>
              <span className="hidden text-[#c2b5aa] sm:inline">
                Conselheiro Pena - MG · Atendimento Presencial & Online Global
              </span>
            </div>
          </div>
        </div>

        {/* Header / Navbar */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled
              ? "border-b border-[#ba7852]/20 bg-[#0c0a09]/95 backdrop-blur-md shadow-lg shadow-black/60"
              : "border-b border-[#241e1b] bg-[#0c0a09]/90 backdrop-blur-xs"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8 lg:px-12">
            {/* Logo (Aumentado em 25% com margem fixa à direita garantindo espaço de respiro) */}
            <a
              href="#inicio"
              aria-label="Isadora Caetano Advocacia e Consultoria"
              className="group flex shrink-0 items-center mr-6 lg:mr-10 xl:mr-14 transition-transform hover:scale-[1.02]"
            >
              <Image
                src={LOGO_SRC}
                alt="Isadora Caetano - Advocacia e Consultoria"
                width={475}
                height={120}
                priority
                className="h-[45px] w-auto object-contain drop-shadow-[0_2px_10px_rgba(186,120,82,0.18)] sm:h-[50px] lg:h-[55px] xl:h-[60px]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-4 xl:gap-6 lg:flex shrink-0 text-[11px] xl:text-xs"
            >
              <a className="nav-link-dark" href="#inicio">
                Início
              </a>
              <a className="nav-link-dark" href="#sobre">
                O Escritório & Equipe
              </a>
              <a className="nav-link-dark" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link-dark" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link-dark" href="#avaliacoes">
                Avaliações (4,9 ★)
              </a>
              <a className="nav-link-dark" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Header CTA & Mobile Button */}
            <div className="flex items-center gap-3 shrink-0 ml-4 lg:ml-6">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Isadora Caetano! Gostaria de consultar sobre o meu caso com o escritório."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="hidden sm:inline-flex"
              >
                <WhatsAppIcon size={15} /> Consulta no WhatsApp
              </GlowingButton>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="grid size-10 place-items-center rounded-lg border border-[#ba7852]/30 bg-[#1a1614] text-[#f3cca8] transition-colors hover:border-[#df9f77] hover:text-white lg:hidden cursor-pointer"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-b border-[#ba7852]/20 bg-[#14100e] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="border-b border-[#ba7852]/20 pb-3">
                    <Image
                      src={LOGO_SRC}
                      alt="Isadora Caetano Advocacia e Consultoria"
                      width={280}
                      height={70}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório & Equipe", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold tracking-wide text-[#d6cbc2] transition-colors hover:text-[#df9f77]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="pt-3">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Isadora Caetano! Gostaria de consultar sobre meu caso no escritório."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} /> Falar com a Dra. Isadora
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate overflow-hidden border-b border-[#ba7852]/20 bg-gradient-to-b from-[#0c0a09] via-[#14100e] to-[#1c1613] py-16 sm:py-24 lg:py-28"
        >
          {/* Ambient Lighting & Metallic Bronze Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 -z-10 size-[38rem] rounded-full bg-[#ba7852]/12 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 size-[32rem] rounded-full bg-[#874828]/10 blur-[90px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl"
            >
              {/* Authority Badge */}
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ba7852]/40 bg-[#1c1613]/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3cca8] shadow-xs backdrop-blur-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#df9f77] shadow-[0_0_8px_#df9f77]" />
                <span>ISADORA CAETANO · ADVOCACIA E CONSULTORIA · OAB/MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.35rem]"
              >
                Segurança jurídica e sensibilidade para defender{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#df9f77] via-[#f3cca8] to-[#ba7852]">
                  sua família, seu patrimônio
                </span>{" "}
                e os seus direitos.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#c2b5aa] sm:text-base sm:leading-8"
              >
                ⚖️ Especialistas em <strong className="text-white">Direito de Família</strong>, <strong className="text-white">Inventários & Sucessões</strong> e <strong className="text-white">Regularização de Imóveis</strong>. Unimos combatividade técnica, velocidade na solução de causas e um acolhimento próximo e transparente para clientes no Brasil e no exterior.
              </motion.p>

              {/* Fast Trust Indicators */}
              <motion.div
                variants={reveal}
                className="mt-7 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold text-[#d6cbc2]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#ba7852]/30 bg-[#1a1614]/90 px-3.5 py-1.5 shadow-xs text-[#f3cca8] hover:border-[#df9f77] hover:text-white transition-colors"
                >
                  <Star size={13} className="fill-[#df9f77] text-[#df9f77]" />
                  Nota 4,9 ★ no Google (166 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#ba7852]/30 bg-[#1a1614]/90 px-3.5 py-1.5 shadow-xs text-[#f3cca8]">
                  <Scale size={13} className="text-[#df9f77]" />
                  Família · Inventários · Imóveis
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#ba7852]/30 bg-[#1a1614]/90 px-3.5 py-1.5 shadow-xs text-[#f3cca8]">
                  <MapPin size={13} className="text-[#df9f77]" />
                  Conselheiro Pena - MG & Online Global
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Isadora Caetano! Gostaria de agendar uma consulta com seu escritório."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar com a Dra. Isadora
                </GlowingButton>

                <GlowingButton
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  size="lg"
                  variant="outline"
                  className="rounded-lg"
                >
                  <Phone size={16} /> Ligar: {PHONE_DISPLAY}
                </GlowingButton>
              </motion.div>

              <motion.p
                variants={reveal}
                className="mt-4 text-xs text-[#9c8e82]"
              >
                Atendimento presencial no Centro de Conselheiro Pena - MG ou suporte jurídico digital seguro para todo o Brasil e clientes no exterior (EUA).
              </motion.p>
            </motion.div>

            {/* Right Column / Hero Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              {/* Outer Bronze Halo Frame */}
              <div className="relative aspect-[3/3.85] overflow-hidden rounded-2xl border-2 border-[#ba7852]/50 bg-[#1c1613] shadow-2xl shadow-black/80">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Isadora Caetano — Escritório de Advocacia"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/60 to-transparent" />
              </div>

              {/* Authority Floating Card */}
              <div className="absolute -bottom-6 -left-3 max-w-[320px] rounded-xl border border-[#ba7852]/50 bg-[#14100e]/95 p-4 shadow-2xl backdrop-blur-md sm:-left-6 sm:p-5">
                <div className="flex items-center gap-1 text-[#df9f77]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#df9f77] text-[#df9f77]"
                    />
                  ))}
                  <span className="ml-1 text-xs font-bold text-white">4,9 ★</span>
                </div>
                <p className="mt-1 font-serif text-sm font-bold text-white">
                  Dra. Isadora Caetano
                </p>
                <p className="text-[11px] font-medium text-[#f3cca8]">
                  Advocacia e Consultoria Jurídica
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#c2b5aa]">
                  &ldquo;A Dra. Isadora Caetano é uma profissional de excelência! Clareza, paciência e dedicação em cada orientação.&rdquo;
                </p>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -right-3 top-6 rounded-lg border border-[#ba7852]/40 bg-[#14100e]/95 px-3 py-2 text-right shadow-xl backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-1.5 text-[#df9f77]">
                  <Sparkles size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    166+ Avaliações Reais
                  </span>
                </div>
                <p className="text-[10px] text-[#9c8e82]">Google 4,9 Estrelas</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Pillars Strip (Barra de Destaques) */}
        <section className="border-b border-[#ba7852]/20 bg-[#14100e] px-5 py-8 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#ba7852]/30 bg-[#1c1613] text-[#df9f77]">
                <Star size={18} className="fill-[#df9f77]" />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Nota 4,9 no Google</p>
                <p className="text-[11px] text-[#c2b5aa]">166 avaliações verificadas</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#ba7852]/30 bg-[#1c1613] text-[#df9f77]">
                <HeartHandshake size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Família & Sucessões</p>
                <p className="text-[11px] text-[#c2b5aa]">Divórcios, Partilhas & Herança</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#ba7852]/30 bg-[#1c1613] text-[#df9f77]">
                <HomeIcon size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Imóveis & Usucapião</p>
                <p className="text-[11px] text-[#c2b5aa]">Escrituras, Posse e Registro RGI</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#ba7852]/30 bg-[#1c1613] text-[#df9f77]">
                <Globe2 size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Conselheiro Pena & EUA</p>
                <p className="text-[11px] text-[#c2b5aa]">Presencial e Suporte no Exterior</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Escritório & Equipe */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#e8ded3] bg-[#faf7f2] py-20 text-[#171311] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Team Portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#ba7852]/40 bg-[#f3ece3] shadow-xl">
                <Image
                  src={FOTO_EQUIPE_WALK}
                  alt="Equipe Isadora Caetano Advocacia e Consultoria"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#14100e]/75 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#ba7852]/50 bg-white p-5 shadow-xl sm:-right-6">
                <div className="flex items-center gap-2 text-[#ba7852]">
                  <Award size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#874828]">
                    Corpo Jurídico Especializado
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg font-bold leading-snug text-[#14100e]">
                  Dra. Isadora Caetano & Equipe
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#ba7852]">
                  Advogados atuantes em Família, Sucessões e Regularização de Imóveis
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5c524c]">
                  Conselheiro Pena - MG · Atendimento Presencial e Digital Global
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#ba7852]/50 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#ba7852]/40 bg-[#fbf5ee] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#874828] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#ba7852]" />
                <span>CONHEÇA O ESCRITÓRIO ISADORA CAETANO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-[#14100e] sm:text-4xl lg:text-[2.85rem]"
              >
                Atendimento humanizado, agilidade comprovada e dedicação incansável para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#874828] via-[#ba7852] to-[#df9f77]">
                  proteger o que é seu por direito.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#5c524c]"
              >
                O escritório <strong className="font-bold text-[#14100e]">Isadora Caetano — Advocacia e Consultoria</strong> nasceu com o propósito de transformar a advocacia em um ambiente de acolhimento, transparência e segurança inabalável. Liderado pela <strong className="font-bold text-[#14100e]">Dra. Isadora Caetano</strong> e integrado por profissionais como o <strong className="font-bold text-[#14100e]">Dr. Bernardo Haussmann</strong>, o escritório combina rigor técnico apurado com uma comunicação clara, descomplicada e empática.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#5c524c]"
              >
                Seja para realizar um divórcio ou partilha com serenidade, agilizar a transmissão de um inventário em cartório, regularizar a posse e escritura de um imóvel ou representar clientes residentes no exterior (como nos EUA), nossa prioridade é oferecer respostas rápidas e conduzir cada processo com dedicação de quem cuida de amigos da família.
              </motion.p>

              {/* 3 Value Pillars */}
              <motion.div
                variants={reveal}
                className="mt-8 grid gap-4 sm:grid-cols-3"
              >
                <div className="rounded-xl border border-[#e8ded3] bg-white p-4 shadow-xs">
                  <span className="text-[#ba7852]">
                    <HeartHandshake size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#14100e]">
                    Acolhimento Real
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5c524c]">
                    Escuta atenta e paciente para compreender as necessidades reais da sua família sem complicação.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-4 shadow-xs">
                  <span className="text-[#ba7852]">
                    <Clock size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#14100e]">
                    Agilidade Comprovada
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5c524c]">
                    Resolução rápida e diligente de causas travadas há anos, como atestado por centenas de clientes.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-4 shadow-xs">
                  <span className="text-[#ba7852]">
                    <Shield size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#14100e]">
                    Blindagem Patrimonial
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5c524c]">
                    Segurança total para inventários, imóveis, empresas familiares e contratos patrimoniais.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Isadora Caetano! Gostaria de conversar com a senhora sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-sm"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Isadora
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação & Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#ba7852]/20 bg-[#14100e] py-20 sm:py-28 lg:py-32"
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
                dark
                eyebrow="ÁREAS DE ATUAÇÃO & ESPECIALIDADES"
                description="Expertise jurídica multidisciplinar com foco absoluto na proteção da família, agilização de inventários e segurança de imóveis urbanos e rurais."
              >
                Soluções especializadas em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#df9f77] via-[#f3cca8] to-[#ba7852]">
                  Família, Sucessões e Imóveis.
                </span>
              </Heading>
              <p className="max-w-[280px] pb-1 text-xs leading-6 text-[#c2b5aa]">
                Clique em um dos serviços abaixo para conferir as demandas atendidas e iniciar seu atendimento direto pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-6 md:grid-cols-2"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[340px] flex-col rounded-2xl border border-[#ba7852]/25 bg-[#1a1614] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#df9f77] hover:shadow-2xl hover:shadow-[#ba7852]/15 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-[#ba7852]/30 bg-[#241e1b] text-[#df9f77] shadow-xs transition-colors group-hover:border-[#df9f77] group-hover:bg-[#ba7852] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#ba7852]/40 transition-colors group-hover:text-[#df9f77]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-block rounded-md border border-[#ba7852]/30 bg-[#241e1b] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f3cca8]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.28rem] font-bold leading-snug text-white">
                        {area.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-6 text-[#c2b5aa]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#df9f77] hover:text-white cursor-pointer"
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

        {/* Por Que Escolher o Escritório Isadora Caetano - 4 Diferenciais Reais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#e8ded3] bg-white py-20 text-[#171311] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="REPUTAÇÃO MÁXIMA 4,9 ★ NO GOOGLE (166 AVALIAÇÕES)"
                description="Clareza nas orientações, respeito inegociável, atendimento ágil e segurança para o seu patrimônio em Conselheiro Pena e no mundo."
              >
                Por que confiar a sua causa ao{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#874828] via-[#ba7852] to-[#df9f77]">
                  Escritório Isadora Caetano?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Isadora Caetano! Gostaria de consultar sobre a minha situação jurídica."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Consultar no WhatsApp
              </GlowingButton>
            </div>

            {/* Grid 4 Pilares baseados nas avaliações reais */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pilar 1 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#ba7852] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#ba7852]/30 bg-white text-[#ba7852] shadow-xs">
                  <Clock size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14100e]">
                  Agilidade Comprovada
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5c524c]">
                  Resolução rápida e desburocratizada. Destravamos causas que estavam paradas há anos com ações céleres e diligência direta.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#874828]">
                  &ldquo;Resolveu em menos de 16 meses o que estava há 3 anos travado&rdquo;
                </span>
              </div>

              {/* Pilar 2 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#ba7852] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#ba7852]/30 bg-white text-[#ba7852] shadow-xs">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14100e]">
                  Clareza & Paciência
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5c524c]">
                  Explicamos cada fase do processo em linguagem simples e acessível, trazendo paz, previsibilidade e confiança para sua decisão.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#874828]">
                  &ldquo;Atendimento com clareza, paciência e dedicação&rdquo;
                </span>
              </div>

              {/* Pilar 3 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#ba7852] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#ba7852]/30 bg-white text-[#ba7852] shadow-xs">
                  <Globe2 size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14100e]">
                  Sem Distâncias (EUA & Brasil)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5c524c]">
                  Tecnologia e atendimento próximo para brasileiros no exterior e em todo o país resolverem imóveis e inventários sem deslocamento.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#874828]">
                  &ldquo;Estou nos EUA e mesmo de longe o atendimento foi excelente&rdquo;
                </span>
              </div>

              {/* Pilar 4 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#ba7852] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#ba7852]/30 bg-white text-[#ba7852] shadow-xs">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14100e]">
                  Confiança & Companheirismo
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5c524c]">
                  Mais de 166 avaliações 5 estrelas no Google refletem nosso compromisso ético e o carinho com que tratamos cada cliente e sua história.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#874828]">
                  &ldquo;Pessoas confiáveis que atendem com companheirismo&rdquo;
                </span>
              </div>
            </div>

            {/* Como Funciona o Atendimento */}
            <div className="mt-16 rounded-2xl border border-[#e8ded3] bg-[#f3ece3] p-8 sm:p-12">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#874828]">
                  PASSO A PASSO TRANSPARENTE & RESOLUTIVO
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#14100e] sm:text-3xl">
                  Como funciona o nosso atendimento
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5c524c]">
                  Sem burocracias confusas. Orientamos você com clareza desde o primeiro contato até a conclusão do seu processo.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-[#e8ded3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#ba7852]">
                    01
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#14100e]">
                    Contato Inicial no WhatsApp
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5c524c]">
                    Você envia uma mensagem contando sua situação, seja um inventário, divórcio ou regularização de imóvel. Nossa equipe responde prontamente.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#ba7852]">
                    02
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#14100e]">
                    Diagnóstico Jurídico & Estratégia
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5c524c]">
                    A Dra. Isadora e equipe avaliam escrituras, certidões ou históricos familiares para desenhar o caminho mais rápido, seguro e econômico.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#ba7852]">
                    03
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#14100e]">
                    Ação Ágil & Acompanhamento Próximo
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5c524c]">
                    Condução imediata perante cartórios e juizados, com atualizações periódicas para você acompanhar cada vitória com tranquilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 4,9 ★ · 166 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-[#ba7852]/20 bg-[#14100e] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="PROVA SOCIAL & DEPOIMENTOS NO GOOGLE"
                description="Nota 4,9 ★ no Google Meu Negócio em Conselheiro Pena · MG, com mais de 166 avaliações reais de clientes atendidos no Brasil e no exterior."
              >
                O que dizem os clientes do{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#df9f77] via-[#f3cca8] to-[#ba7852]">
                  Escritório Isadora Caetano
                </span>
              </Heading>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#ba7852]/30 bg-[#1c1613] px-5 py-3 text-xs font-bold text-white shadow-xs transition-all hover:border-[#df9f77] hover:bg-[#241e1b]"
              >
                <GoogleIcon size={18} />
                <span>Ver 166 avaliações no Google</span>
                <ArrowUpRight size={15} className="text-[#df9f77]" />
              </a>
            </div>

            {/* Grid of Real Reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-2xl border border-[#ba7852]/20 bg-[#1a1614] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#df9f77] hover:shadow-2xl hover:shadow-[#ba7852]/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#df9f77]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#df9f77] text-[#df9f77]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#ba7852]/25 bg-[#241e1b] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f3cca8]">
                        {review.badge}
                      </span>
                    </div>

                    {review.highlight && (
                      <p className="mt-3 text-xs font-bold text-[#df9f77]">
                        {review.highlight}
                      </p>
                    )}

                    <p className="mt-3 text-xs leading-6 text-[#ede5dc]">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-4 rounded-xl border border-[#ba7852]/20 bg-[#211a17] p-3 text-[11px] leading-5 text-[#c2b5aa]">
                        <span className="font-bold text-[#df9f77]">
                          Resposta do Escritório:{" "}
                        </span>
                        {review.reply}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 border-t border-[#2b221e] pt-4">
                    <p className="font-serif text-sm font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#9c8e82]">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Conselheiro Pena - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#e8ded3] bg-white py-20 text-[#171311] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO JURÍDICO"
                description="Converse diretamente com a equipe do Escritório Isadora Caetano. Oferecemos atendimento presencial acolhedor no Centro de Conselheiro Pena e suporte online em todo o Brasil e no exterior."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#874828] via-[#ba7852] to-[#df9f77]">
                  orientar você e proteger o seu patrimônio.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Isadora Caetano! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-xs text-[#5c524c]">
                  WhatsApp oficial:{" "}
                  <strong className="text-[#14100e]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#5c524c]">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-[#ba7852]" />
                  <div>
                    <p className="font-bold text-[#14100e]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#3d342f]">
                      Segunda a Sexta-feira · Abre às 08:00
                    </p>
                    <p className="text-[11px] font-semibold text-[#874828]">
                      Atendimento Presencial & Atendimento Digital Global
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#ba7852]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-bold text-[#14100e] transition-colors hover:text-[#ba7852]"
                  >
                    {PHONE_DISPLAY} (WhatsApp e Ligações)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#ba7852]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#3d342f] transition-colors hover:text-[#ba7852]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#ba7852]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="font-medium text-[#3d342f] transition-colors hover:text-[#ba7852]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#ba7852]" />
                  <span className="font-medium text-[#3d342f]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#ba7852]/35 bg-[#faf7f2] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#ba7852] to-[#df9f77]" />

              <div className="flex items-center gap-4">
                <Image
                  src={LOGO_SRC}
                  alt="Isadora Caetano Advocacia e Consultoria"
                  width={380}
                  height={95}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div>

              <address className="mt-7 max-w-md text-sm not-italic leading-7 text-[#5c524c]">
                <strong className="font-bold text-[#14100e]">
                  Isadora Caetano — Escritório de Advocacia e Consultoria
                </strong>
                <br />
                Dra. Isadora Caetano · OAB/MG
                <br />
                Dr. Bernardo Haussmann & Equipe Jurídica
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-[#e8ded3] bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#874828]">
                  Disponibilidade & Modalidades
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-[#5c524c]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-bold text-[#14100e]">
                    Abre às 08:00 (Seg a Sex)
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right font-bold text-[#ba7852]">
                    Brasil & Exterior via WhatsApp
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-[#14100e]">Conselheiro Pena - MG</span>
                  <span>Áreas de Foco</span>
                  <span className="text-right text-[#14100e]">Família, Sucessões & Imóveis</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8ded3]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#756961]">
                  Atendimento ético, confidencial e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Isadora Caetano! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ba7852]/50 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#874828] transition-colors hover:border-[#ba7852] hover:bg-[#fbf5ee] hover:text-[#14100e]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Dra. Isadora <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Espresso & Bronze Metallic Banner */}
        <section className="border-t border-[#ba7852]/30 bg-gradient-to-r from-[#0c0a09] via-[#1c1613] to-[#0c0a09] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3cca8]">
                <Sparkles size={13} /> ISADORA CAETANO · ADVOCACIA E CONSULTORIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
                Precisa de segurança jurídica para sua família, herança ou regularização de imóvel?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Isadora Caetano! Gostaria de conversar sobre uma demanda jurídica com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#a8643c] via-[#c9875f] to-[#a8643c] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#241e1b] bg-[#080706] px-5 py-14 text-[#c2b5aa] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Isadora Caetano Advocacia e Consultoria"
                className="inline-flex items-center transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Isadora Caetano Advocacia e Consultoria"
                  width={320}
                  height={80}
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#c2b5aa]">
                ⚖️ Advocacia de alto padrão pautada no rigor técnico, acolhimento humano e agilidade. Atuação especializada em Direito de Família, Sucessões (Inventários e Herança) e Regularização de Imóveis. Nota 4,9 ★ no Google com mais de 166 avaliações em Conselheiro Pena - MG.
              </p>
              <p className="mt-3 text-[11px] font-bold text-[#df9f77]">
                Dra. Isadora Caetano · OAB/MG · Conselheiro Pena - MG
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#df9f77]">
                Navegação
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#c2b5aa]">
                <a className="footer-link font-medium hover:text-[#df9f77]" href="#inicio">
                  Início
                </a>
                <a className="footer-link font-medium hover:text-[#df9f77]" href="#sobre">
                  O Escritório & Equipe
                </a>
                <a className="footer-link font-medium hover:text-[#df9f77]" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link font-medium hover:text-[#df9f77]" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link font-medium hover:text-[#df9f77]" href="#avaliacoes">
                  Avaliações no Google (4,9 ★)
                </a>
                <a className="footer-link font-medium hover:text-[#df9f77]" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#df9f77]">
                Contato & Atendimento
              </h3>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#c2b5aa]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Isadora Caetano! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-bold text-[#df9f77]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Phone size={15} className="shrink-0 text-[#df9f77]" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <InstagramIcon size={15} className="shrink-0 text-[#df9f77]" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Mail size={15} className="shrink-0 text-[#df9f77]" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2 font-medium">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#df9f77]" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] font-bold text-[#df9f77]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · Abre às 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#241e1b] pt-6 text-[10px] text-[#756961] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} ISADORA CAETANO — ESCRITÓRIO DE ADVOCACIA E CONSULTORIA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo de caráter exclusivamente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dra. Isadora Caetano! Gostaria de consultar sobre meus direitos com o escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Isadora Caetano"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#14100e] border border-[#ba7852]/40 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Isadora Caetano
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#ba7852]/40 bg-[#14100e] p-7 text-[#ede5dc] shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#ba7852]/30 bg-[#1c1613] text-[#f3cca8] transition-colors hover:border-[#df9f77] hover:bg-[#ba7852] hover:text-white cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-dark">{activeArea.category.toUpperCase()}</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#c2b5aa]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#241e1b] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#df9f77]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-xs leading-5 text-[#ede5dc]"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#ba7852]" />
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
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-bold text-[#9c8e82] transition-colors hover:text-white cursor-pointer"
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
