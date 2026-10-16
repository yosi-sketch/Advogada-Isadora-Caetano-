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
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531988199907";
const PHONE_DISPLAY = "(31) 98819-9907";
const EMAIL_CONTACT = "contato@advpatriciaferreira.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/advpatriciaferreira/";
const INSTAGRAM_HANDLE = "@advpatriciaferreira";

const ADDRESS_TEXT =
  "Ribeirão das Neves - MG e Região Metropolitana de BH · Atendimento Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Patr%C3%ADcia+Ferreira+Advogados+Ribeir%C3%A3o+das+Neves+%C2%B7+MG";

const LOGO_SEAL_SRC = "/logo-seal.png";
const LOGO_SHIELD_SRC = "/logo-shield.png";
const LOGO_WHITE_SRC = "/logo-white.png";
const FOTO_HERO_SRC = "/patricia-ferreira-hero.png";
const FOTO_SOBRE_SRC = "/patricia-ferreira-apresentacao.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Patrícia Ferreira! Gostaria de consultar sobre meus direitos e agendar um atendimento.";
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
    id: "direito-de-familia-criancas",
    title: "Direito de Família & Proteção dos Filhos",
    icon: Users,
    tag: "Guarda · Pensão · Convivência · Direitos da Criança",
    summary:
      "Defesa intransigente do melhor interesse das crianças, fixação justa de pensão alimentícia, regulamentação de convivência e proteção contra negligência.",
    details:
      "A Dra. Patrícia Ferreira é referência em Ribeirão das Neves e RMBH por sua dedicação inabalável aos direitos das crianças e adolescentes. Atuamos com acolhimento humanizado e firmeza processual em pedidos de guarda unilateral ou compartilhada, revisões e execuções de pensão alimentícia com pedido de prisão civil do devedor, busca e apreensão de menores e garantia da convivência familiar saudável.",
    topics: [
      "Fixação, revisão e execução de pensão alimentícia com pedido de bloqueio de contas e prisão do devedor",
      "Ações de Guarda Compartilhada e Unilateral com foco na proteção integral e bem-estar da criança",
      "Regulamentação de visitas e convivência paterna e materna sem desgastes emocionais",
      "Defesa técnica de urgência para crianças em situação de vulnerabilidade ou conflito familiar",
      "Investigação e reconhecimento de paternidade com exames de DNA e alimentos gravídicos",
      "Medidas liminares urgentes de busca e apreensão de menores e retorno seguro ao lar",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Ferreira! Preciso de orientação jurídica sobre Guarda e Pensão dos meus filhos.",
  },
  {
    id: "divorcio-partilha-de-bens",
    title: "Divórcio Estratégico & Partilha de Bens",
    icon: Scale,
    tag: "Divórcio Consensual & Litigioso · Partilha · União Estável",
    summary:
      "Dissolução de casamento e união estável com blindagem do seu patrimônio, agilidade extrajudicial e proteção rigorosa dos seus direitos financeiros.",
    details:
      "Decisões jurídicas em divórcios exigem estratégia, não impulso. Conduzimos divórcios consensuais em cartório com rapidez e menor custo, bem como disputas litigiosas complexas na Justiça, assegurando apuração minuciosa de bens ocultados, bloqueio de patrimônio, alimentos compensatórios e dissolução respeitosa de união estável.",
    topics: [
      "Divórcio extrajudicial em cartório rápido, econômico e sem burocracias",
      "Divórcio litigioso com apuração patrimonial rigorosa e combate à sonegação de bens",
      "Reconhecimento e dissolução de união estável com partilha justa de bens comuns",
      "Fixação de pensão alimentícia entre cônjuges (alimentos transitórios ou compensatórios)",
      "Bloqueio cautelar de contas bancárias, veículos e empresas para evitar dilapidação patrimonial",
      "Alteração de regime de bens, pactos antenupciais e acordos preventivos de convivência",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Ferreira! Gostaria de consultar sobre Divórcio e Partilha de Bens.",
  },
  {
    id: "alienacao-parental-urgencia",
    title: "Alienação Parental & Proteção de Urgência",
    icon: ShieldCheck,
    tag: "Alienação Parental · Falsas Acusações · Urgência Familiar",
    summary:
      "Atuação enérgica e imediata para cessar manipulações psicológicas de filhos, reverter alienação parental e restabelecer laços afetivos destruídos.",
    details:
      "Quando a convivência familiar é sabotada ou acusações infundadas são forjadas para afastar pais ou mães de seus filhos, cada dia de inércia agrava o trauma infantil. Atuamos com requerimentos judiciais imediatos, perícias psicossociais céleres, inversão de guarda e aplicação de multas severas para combater qualquer ato de alienação parental.",
    topics: [
      "Ação declaratória de Alienação Parental com pedido de liminar e perícia psicossocial célere",
      "Reversão imediata de guarda em casos graves de alienação e sabotagem de contato",
      "Defesa técnica contundente contra falsas acusações em litígios familiares",
      "Aplicação de multas diárias (astreintes) por descumprimento do regime de convivência",
      "Acompanhamento assistido de visitas com apoio de equipe multidisciplinar",
      "Medidas cautelares protetivas para resguardar a integridade emocional das crianças",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Ferreira! Estou enfrentando Alienação Parental e preciso de intervenção urgente.",
  },
  {
    id: "inventario-heranca-sucessoes",
    title: "Inventário, Herança & Sucessões Familiares",
    icon: FileCheck2,
    tag: "Inventário Extrajudicial & Judicial · Testamentos · Herança",
    summary:
      "Regularização ágil de patrimônio herdado, inventários em cartório sem conflitos e planejamento sucessório para preservar a harmonia da família.",
    details:
      "A perda de um familiar exige respeito, empatia e eficiência para resolver a transferência de bens sem desgastes entre herdeiros. Assessoramos na realização de inventários em cartório (com conclusão rápida quando há consenso) ou judiciais, combate a fraudes na partilha, doações em vida e planejamento sucessório inteligente.",
    topics: [
      "Inventário extrajudicial em cartório com agilidade e máxima economia tributária",
      "Inventário judicial litigioso com defesa dos direitos de herdeiros prejudicados",
      "Colação de bens e anulação de doações ou transferências patrimoniais fraudulentas",
      "Elaboração e cumprimento de testamentos públicos e disposições de última vontade",
      "Regularização e desembaraço de imóveis e veículos deixados por herança",
      "Planejamento sucessório familiar para evitar litígios futuros entre parentes",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Ferreira! Gostaria de orientações sobre Inventário e Partilha de Herança.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Indenizações & Contratos",
    icon: Gavel,
    tag: "Danos Morais · Contratos · Consumidor · Responsabilidade Civil",
    summary:
      "Reparação justa por danos morais e materiais, blindagem contratual em negócios e combate incisivo a abusos financeiros e bancários.",
    details:
      "No âmbito cível, defendemos cidadãos e famílias contra prejuízos patrimoniais e violações de sua dignidade. Atuamos em ações de indenização por negativações indevidas, fraudes bancárias, litígios contratuais, rescisões e problemas imobiliários, com estratégia preventiva e contenciosa afiada.",
    topics: [
      "Indenização por danos morais e materiais por negativação indevida e cobranças abusivas",
      "Ações contra golpes bancários, fraudes em empréstimos consignados e cartões clonados",
      "Elaboração, análise e rescisão de contratos civis, comerciais e de locação",
      "Ações de despejo, cobrança de aluguéis em atraso e renegociações contratuais",
      "Ações possessórias, usucapião e regularização jurídica de propriedades",
      "Defesa vigorosa do consumidor perante seguradoras, construtoras e grandes fornecedores",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Ferreira! Preciso de assessoria jurídica na área Cível / Contratos / Indenizações.",
  },
  {
    id: "direito-criminal-plantao-24h",
    title: "Direito Criminal & Plantão Emergencial 24h",
    icon: Shield,
    tag: "Plantão 24h · Delegacia · Audiência de Custódia · Maria da Penha",
    summary:
      "Atendimento emergencial 24 horas em delegacias, audiências de custódia imediatas, pedidos de liberdade provisória, habeas corpus e defesa criminal estratégica.",
    details:
      "Momentos de prisão ou acusação criminal exigem pronta intervenção técnica. A Dra. Patrícia Ferreira presta plantão 24 horas com deslocamento a delegacias e presídios em toda a RMBH, assegurando o respeito estrito aos direitos constitucionais, acompanhamento em audiências de custódia, revogação de prisões preventivas e atuação sensível e firme na Lei Maria da Penha.",
    topics: [
      "Plantão criminal 24 horas para prisões em flagrante e assistência imediata em delegacias",
      "Audiência de Custódia célere com requerimento de liberdade provisória sem fiança",
      "Impetração ágil de Habeas Corpus perante o TJMG, STJ e Tribunais Superiores",
      "Atuação técnica e humanizada na Lei Maria da Penha (medidas protetivas urgentes e revogações)",
      "Defesa estratégica em Inquéritos Policiais e Ações Penais em todas as fases processuais",
      "Execução Penal: progressão de regime prisional, livramento condicional e remição de pena",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Ferreira! Preciso de atendimento criminal de emergência (Plantão 24h).",
  },
];

const clientReviews = [
  {
    name: "Lana Rocha",
    reviewsCount: "9 avaliações · 1 foto no Google",
    date: "Google Meu Negócio",
    badge: "direito das crianças",
    content:
      "Desde o início a Dra. Patrícia me falou 'defendo o direito das crianças' e cumpriu, até o fim, entendeu e não desistiu dos direitos da minha filha. Teve MUITA PACIÊNCIA nos meus momentos de desespero, quando eu achei que ia dar tudo errado, que estava demorando demais... Me ouviu, acolheu e acreditou na minha história. Muito inteligente! Conseguimos um resultado positivo, COM VERDADE. Só tenho a agradecer. Indico demais.",
  },
  {
    name: "Thais Cristina",
    reviewsCount: "Local Guide · 13 avaliações · 27 fotos",
    date: "Google Meu Negócio",
    badge: "cuidado genuíno",
    content:
      "Profissional exemplar! Demonstra conhecimento, responsabilidade e um cuidado genuíno com seus clientes. Sempre disponível para esclarecer dúvidas e conduzir tudo com muita seriedade e empatia. Gratidão pelo excelente trabalho.",
  },
  {
    name: "Julia A M Marinho (Ju)",
    reviewsCount: "Local Guide · 29 avaliações · 6 fotos",
    date: "Google Meu Negócio",
    badge: "luta até o fim",
    content:
      "Uma pessoa incrível e uma advogada incrivelmente maravilhosa! Indico para todos que me pedem indicação, porque é uma pessoa muito boa, e como advogada, além de ser muito sensata, luta pela nossa causa até o fim.",
  },
  {
    name: "Aline Duarte",
    reviewsCount: "Local Guide · 262 avaliações · 109 fotos",
    date: "Google Meu Negócio",
    badge: "defensora da verdade",
    content:
      "Profissional e pessoa excepcional! Humana, defensora da verdade. Advogada de boa conduta e postura. Coerente em suas atitudes e possui uma empatia enorme. Defensora da verdade e honrada. Super recomendo. Conheço há anos...",
  },
  {
    name: "Walesca Cordeiro de Paula",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "honestidade comprovada",
    content:
      "Foi ótima, tive todas as minhas dúvidas esclarecidas, meus problemas resolvidos com atenção e muito profissionalismo. Com a satisfação de saber que a honestidade é sua principal característica. Indico sempre e sem medo.",
  },
  {
    name: "Lucas Lor",
    reviewsCount: "3 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "experiente e capacitada",
    content:
      "Excelente profissional. Experiente e altamente capacitada. Fiquei muito feliz e grato com o trabalho da Doutora Patrícia. Recomendo a todos!",
  },
  {
    name: "Natalia Claudia",
    reviewsCount: "8 avaliações · 1 foto no Google",
    date: "Google Meu Negócio",
    badge: "domínio do caso",
    content:
      "Ótima advogada! Extremamente profissional e qualificada. Sempre atenciosa, mostrou total domínio do caso e forneceu orientações claras e precisas.",
  },
  {
    name: "Vanessa Costa",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "trabalho impecável",
    content:
      "A Patrícia é impecável no seu trabalho. Íntegra, profissional e muito eficiente. Indico de olhos fechados. Obrigada por tudo!",
  },
  {
    name: "Rebeca Luisa",
    reviewsCount: "3 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "briga pelos direitos",
    content:
      "Ótima advogada, briga mesmo pelos nossos direitos!",
  },
  {
    name: "Iluiza",
    reviewsCount: "4 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "resolução rápida",
    content:
      "Resolveu meu problema mais rápido do que eu pensava. Muito competente!",
  },
  {
    name: "Gabriella Teixeira",
    reviewsCount: "Local Guide · 15 avaliações · 1 foto",
    date: "Google Meu Negócio",
    badge: "excelente profissional",
    content:
      "Excelente profissional, super indico 👏🏾",
  },
  {
    name: "Jéssica Rommanel",
    reviewsCount: "Local Guide · 9 avaliações · 24 fotos",
    date: "Google Meu Negócio",
    badge: "qualificação máxima",
    content:
      "Ótima profissional, super indico. Competência e muito bem qualificada no que faz. 👏🏻👏🏻👏🏻👏🏻👏🏻",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#07101e] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#3e4d64]"
              : "mt-4 text-[15px] leading-7 text-[#c7d5e8]"
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
      <main className="overflow-hidden bg-[#040914] text-[#fcfaf7] selection:bg-[#cb902b] selection:text-[#040914]">
        {/* Navigation Bar - Refined Prussian Navy & Imperial Gold */}
        <header className="sticky top-0 z-40 border-b border-[#cb902b]/25 bg-[#040914]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[116px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Patrícia Ferreira Advocacia & Consultoria"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-95"
            >
              <div className="relative size-[60px] shrink-0 sm:size-[72px]">
                <Image
                  src={LOGO_SHIELD_SRC}
                  alt="Escudo Patrícia Ferreira Advocacia"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-wider text-white sm:text-2xl">
                  PATRÍCIA P. FERREIRA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#e5c368] sm:text-xs">
                  ADVOCACIA & CONSULTORIA
                </span>
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
                Dra. Patrícia
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (4,9 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Plantão 24h
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Patrícia Ferreira"
                className="grid size-10 place-items-center rounded-lg border border-[#cb902b]/30 bg-[#07101e] text-[#f6e5be] transition-all hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE} (7.100+ seguidores)`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Patrícia Ferreira Advogados"
                className="grid size-10 place-items-center rounded-lg border border-[#cb902b]/30 bg-[#07101e] text-[#f6e5be] transition-all hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Patrícia Ferreira"
                className="grid size-10 place-items-center rounded-lg border border-[#cb902b]/30 bg-[#07101e] text-[#f6e5be] transition-all hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Patrícia Ferreira! Gostaria de agendar uma consulta com seu escritório."
                )}
                target="_blank"
                size="sm"
                variant="gold"
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
              className="grid size-11 place-items-center rounded-lg border border-[#cb902b]/30 bg-[#07101e] text-[#f6e5be] lg:hidden"
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
                className="overflow-hidden border-t border-[#cb902b]/20 bg-[#040914] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Patrícia Ferreira", "#sobre"],
                    ["Áreas de Atuação (Família · Cível · Criminal)", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Plantão 24h", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#e5c368]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#a67520] via-[#cb902b] to-[#a67520] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#040914] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Patrícia Ferreira! Gostaria de consultar sobre o meu caso."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cb902b]/30 bg-[#07101e] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#f6e5be] transition-all hover:border-[#e5c368]"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> Instagram: {INSTAGRAM_HANDLE} (7.1k)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - High Prestige Navy & Radiant Gold Tone */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#cb902b]/25 bg-gradient-to-b from-[#040914] via-[#07101e] to-[#0c182e]"
        >
          {/* Subtle imperial gold and navy ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-[#cb902b]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-[#0e2a56]/25 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#cb902b]/35 bg-[#07101e] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f6e5be] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#e5c368]" />
                <span>PATRÍCIA FERREIRA ADVOCACIA · RIBEIRÃO DAS NEVES & RMBH</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Proteção jurídica para mulheres e homens em{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8ee] via-[#f6e5be] to-[#cb902b]">
                  momentos críticos.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#c7d5e8] sm:text-base sm:leading-8"
              >
                ⚖️ <strong className="font-semibold text-white">Decisões jurídicas exigem estratégia, não impulso.</strong> Defendemos sua família, seus filhos, seu patrimônio e sua liberdade com rigor técnico, acolhimento humanizado e combate firme nas áreas de <span className="text-[#f6e5be] font-medium">Família, Cível e Criminal</span>.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Ferreira! Gostaria de consultar sobre meus direitos e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Patrícia
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#cb902b]/35 bg-[#07101e] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f6e5be] transition-all hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white"
                >
                  Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#cb902b]/20 pt-6 text-xs text-[#c7d5e8]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#e5c368] text-[#e5c368]" />{" "}
                  4,9 estrelas no Google (33 avaliações autênticas e verificadas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-[#cb902b]" /> Atendimento 24 Horas & Plantão Jurídico
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#cb902b]" /> Ribeirão das Neves, RMBH & Online em Todo o Brasil
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Patrícia Pinto Ferreira */}
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
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border border-[#cb902b]/40 bg-[#07101e] shadow-2xl ring-1 ring-[#cb902b]/25">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Patrícia Pinto Ferreira — Advogada Especialista em Ribeirão das Neves"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#040914] via-[#040914]/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Patrícia Pinto Ferreira
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#e5c368]">
                      Patrícia Ferreira Advocacia · OAB/MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#cb902b]/40 bg-[#040914]/85 text-[#f6e5be] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#cb902b]/40 bg-[#07101e]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#f6e5be] shadow-card backdrop-blur-md sm:-left-5">
                RIBEIRÃO DAS NEVES · ATENDIMENTO 24H
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#cb902b]/35 bg-[#07101e]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#e5c368] text-[#e5c368]" />
                    <span className="font-serif text-base font-bold text-white">
                      4,9 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#c7d5e8]">
                  33 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#cb902b]/20 bg-[#07101e]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,9 ★",
                "nota de excelência no Google com 33 avaliações autênticas",
              ],
              [
                "Família & Crianças",
                "defesa combativa dos direitos dos filhos, guarda e pensão justa",
              ],
              [
                "Plantão 24 Horas",
                "assistência imediata em delegacias, flagrantes e medidas urgentes",
              ],
              [
                "+7.100 Seguidores",
                "autoridade e acolhimento com mais de 870 posts no Instagram",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#cb902b]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#e5c368] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#c7d5e8]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Patrícia Pinto Ferreira - Editorial Warm Alabaster Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#cb902b]/30 bg-[#faf8f3] py-20 text-[#07101e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Patrícia presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#0c182e] bg-[#07101e] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Patrícia Pinto Ferreira — Advogada Fundadora"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#040914]/90 via-[#040914]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Navy Gold Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#cb902b]/40 bg-[#07101e] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#e5c368]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5c368]">
                    Advocacia Humanizada & Combate Firme
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Patrícia Pinto Ferreira
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#cb902b]">
                  Patrícia Ferreira Advocacia & Consultoria
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#c7d5e8]">
                  Ribeirão das Neves - MG e RMBH · Aberto 24 Horas
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#cb902b]/50 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#7e5611]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7e5611] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#cb902b]" />
                <span>CONHEÇA A DRA. PATRÍCIA FERREIRA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#07101e] sm:text-4xl lg:text-[3.25rem]"
              >
                Muito além do processo: uma{" "}
                <span className="italic text-[#7e5611]">
                  defensora leal, humana e incansável ao seu lado.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#3e4d64]"
              >
                Com atuação de destaque em{" "}
                <strong className="font-bold text-[#07101e]">
                  Ribeirão das Neves, Belo Horizonte e toda a RMBH
                </strong>
                , a Dra. Patrícia Pinto Ferreira construiu uma advocacia respeitada pela combinação única de sensibilidade humana, postura ética e combatividade processual.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#3e4d64]"
              >
                Especialista em Direito de Família, Cível e Criminal, a Dra. Patrícia compreende que momentos de crise — como a disputa pela guarda dos filhos, um divórcio doloroso ou uma urgência penal — geram aflição e insegurança. Por isso, aplica o princípio de que <strong className="font-bold text-[#07101e]">decisões jurídicas exigem estratégia, não impulso</strong>, garantindo acolhimento empático com firmeza técnica absoluta.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#eadfc7] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#14233c]">
                  &ldquo;Desde o início a Dra. Patrícia me falou &lsquo;defendo o direito das crianças&rsquo; e cumpriu, até o fim, entendeu e não desistiu dos direitos da minha filha. Teve MUITA PACIÊNCIA nos meus momentos de desespero... Me ouviu, acolheu e acreditou na minha história. Muito inteligente! Conseguimos um resultado positivo, COM VERDADE. Só tenho a agradecer.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#7e5611]">
                  — Lana Rocha · Avaliação Verificada no Google Meu Negócio
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#14233c] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#cb902b]" />
                  <span>Defesa intransigente dos direitos e do bem-estar dos filhos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#cb902b]" />
                  <span>Plantão Jurídico 24 Horas para urgências criminais e cíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#cb902b]" />
                  <span>Escuta ativa, empatia e paciência em momentos de desespero</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#cb902b]" />
                  <span>Nota máxima 4,9 ★ no Google com 33 avaliações autênticas</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Ferreira! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Patrícia
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07101e] transition-colors hover:text-[#7e5611]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Patrícia Ferreira Advocacia */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#cb902b]/20 bg-[#07101e] py-20 sm:py-28 lg:py-32"
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
                description="Especialização técnica, sensibilidade humana e combatividade firme para resguardar sua família, seu patrimônio e sua liberdade."
              >
                Atuação jurídica especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8ee] via-[#f6e5be] to-[#cb902b]">
                  Família, Cível e Criminal.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#c7d5e8]">
                Selecione uma especialidade abaixo para conferir as demandas atendidas e iniciar sua consulta diretamente pelo WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#cb902b]/20 bg-[#0c182e] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cb902b]/60 hover:bg-[#11223f] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#cb902b]/30 bg-[#07101e] text-[#e5c368] shadow-sm transition-colors group-hover:border-[#f6e5be] group-hover:bg-[#162c52] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#cb902b]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#cb902b]/25 bg-[#07101e] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f6e5be] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#c7d5e8]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5c368] hover:text-white"
                    >
                      Ver detalhes e demandas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher Patrícia Ferreira Advocacia - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#cb902b]/20 bg-[#040914] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento sincero, atenção aos mínimos detalhes e uma postura jurídica firme para transformar direitos em conquistas reais."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8ee] via-[#f6e5be] to-[#cb902b]">
                  Dra. Patrícia Ferreira?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Patrícia Ferreira! Gostaria de consultar sobre a minha situação jurídica."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Acolhimento Humanizado & Paciência */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#cb902b]/25 bg-[#07101e] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#cb902b]/50 hover:bg-[#0c182e] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#cb902b]/30 bg-[#040914] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f6e5be]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#e5c368]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Paciência, Escuta Ativa & Verdade Acima de Tudo
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#c7d5e8]">
                    Sabemos que momentos de crise familiar, separação ou problemas criminais trazem desespero e noites sem sono. Na Patrícia Ferreira Advocacia, você é ouvido com empatia profunda, respeito e paciência. Aqui, a verdade é defendida com lealdade e transparência absoluta.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5c368]" />
                      <span>Contato direto pelo WhatsApp e acompanhamento próximo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5c368]" />
                      <span>Prioridade absoluta aos direitos e à integridade dos filhos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5c368]" />
                      <span>Explicações claras em cada etapa, sem juridiquês indecifrável</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#cb902b]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Patrícia Ferreira! Gostaria de conversar diretamente com você sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#cb902b]/30 bg-[#040914] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f6e5be] transition-all hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white"
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
                className="group flex flex-col justify-between rounded-xl border border-[#cb902b]/25 bg-[#07101e] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#cb902b]/50 hover:bg-[#0c182e] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#cb902b]/30 bg-[#040914] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f6e5be]">
                      <Scale size={14} /> Estratégia & Combate
                    </span>
                    <span className="text-xs font-semibold text-[#e5c368]">
                      Postura Firme
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Decisões Jurídicas Exigem Estratégia, Não Impulso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#c7d5e8]">
                    Agir por impulso pode custar a guarda de um filho, a perda do patrimônio conquistado ou anos de liberdade. Elaboramos estratégias jurídicas sólidas, reunindo provas documentais, periciais e testemunhais com rigor técnico para lutar pela sua causa até a vitória final.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5c368]" />
                      <span>Plantão Jurídico 24 Horas para prisões, custódia e urgências</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5c368]" />
                      <span>Postura combativa em audiências e tribunais superiores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5c368]" />
                      <span>Proteção patrimonial preventiva e apuração de bens sonegados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#cb902b]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Patrícia Ferreira! Preciso de ajuda jurídica para analisar meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#cb902b]/30 bg-[#040914] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f6e5be] transition-all hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white"
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

        {/* Nosso Compromisso com Você */}
        <section className="relative overflow-hidden bg-[#040914] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#cb902b]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#0e2a56]/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A expressiva nota de 4,9 ★ no Google com 33 avaliações autênticas reflete a lealdade inegociável em defender cada cliente com rigor, transparência e respeito."
              >
                Cuidamos da sua causa com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8ee] via-[#f6e5be] to-[#cb902b]">
                  ética, transparência e combatividade total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#cb902b]/25 bg-[#07101e] p-6 font-serif text-base italic leading-7 text-[#f6e5be]">
                &ldquo;Profissional exemplar! Demonstra conhecimento, responsabilidade e um cuidado genuíno com seus clientes. Sempre disponível para esclarecer dúvidas e conduzir tudo com muita seriedade e empatia.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#e5c368]">
                  — Thais Cristina (Local Guide) · Avaliação no Google
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#cb902b]/15"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Empatia",
                  "Você é ouvido com atenção e sensibilidade. Analisamos cada detalhe da sua história familiar ou pessoal para traçar a melhor rota jurídica sem julgamentos.",
                ],
                [
                  "02",
                  "Transparência Absoluta & Comunicação Fácil",
                  "Você nunca fica sem respostas. Mantemos você informado de cada passo do seu processo em linguagem simples, descomplicada e transparente.",
                ],
                [
                  "03",
                  "Combatividade Incisiva & Resultados",
                  "Lutamos incansavelmente pelo melhor resultado possível, exigindo o cumprimento estrito da lei e a preservação da dignidade da sua família.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#e5c368]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#c7d5e8]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais dos Clientes - 4,9 ★ · 33 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#cb902b]/20 bg-[#07101e] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de famílias, mães, pais e cidadãos que confiaram suas causas à Dra. Patrícia Ferreira em Ribeirão das Neves."
              >
                Avaliada com nota de excelência 4,9 ★ pela{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8ee] via-[#f6e5be] to-[#cb902b]">
                  competência, empatia e defesa da verdade.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#cb902b]/25 bg-[#040914] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#cb902b]/25 bg-[#07101e] shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      4,9
                    </span>
                    <div className="flex gap-0.5 text-[#e5c368]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#e5c368] text-[#e5c368]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-200">
                    Patrícia Ferreira Advogados
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#e5c368] transition-colors hover:text-white"
                  >
                    33 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#cb902b]/20 bg-[#040914] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cb902b]/50 hover:bg-[#0c182e] hover:shadow-obsidian sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#e5c368]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#e5c368] text-[#e5c368]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-300">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#cb902b]/20 bg-[#07101e] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#f6e5be] shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-stone-200">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#cb902b]/20 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#cb902b]/25 bg-[#07101e] font-serif text-sm font-semibold text-[#f6e5be] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#cb902b]/20 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogado em Ribeirão das Neves",
                  "Especialista em Direito de Família",
                  "Guarda de Filhos e Pensão Alimentícia",
                  "Divórcio Consensual e Litigioso",
                  "Plantão Criminal 24 Horas",
                  "Nota 4,9 com 33 Avaliações",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#cb902b]/20 bg-[#040914] px-3.5 py-1.5 text-[11px] font-medium text-stone-200 shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#e5c368]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#e5c368] transition-colors hover:text-white"
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

        {/* Contato & Plantão 24h em Ribeirão das Neves */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#cb902b]/20 bg-[#040914] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & PLANTÃO 24 HORAS"
                description="Inicie seu atendimento imediatamente pelo WhatsApp. Prestamos assistência com acolhimento e agilidade para clientes de Ribeirão das Neves, RMBH e assessoria online para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8ee] via-[#f6e5be] to-[#cb902b]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Ferreira! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#c7d5e8]">
                  WhatsApp e Telefone do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#c7d5e8]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#e5c368]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Aberto 24 Horas
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Plantão para urgências jurídicas, medidas protetivas e emergências penais
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#e5c368]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#e5c368]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#e5c368]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#e5c368] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial com +7.100 seguidores)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#e5c368]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#e5c368] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#e5c368]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#cb902b]/25 bg-[#07101e] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#cb902b] to-[#f6e5be]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[68px] shrink-0 sm:size-[76px]">
                  <Image
                    src={LOGO_SHIELD_SRC}
                    alt="Escudo Patrícia Ferreira"
                    fill
                    sizes="76px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e5c368]">
                    Sede & Atendimento
                  </p>
                  <p className="mt-0.5 font-cinzel text-2xl font-bold text-white">
                    Patrícia Ferreira Advocacia
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#c7d5e8]">
                <strong className="font-semibold text-white">
                  Dra. Patrícia Pinto Ferreira
                </strong>
                <br />
                Advogada Especialista em Família, Cível e Criminal
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#cb902b]/20 bg-[#040914] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e5c368]">
                  Atendimento & Disponibilidade
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Disponibilidade</span>
                  <span className="text-right font-semibold text-white">
                    Aberto 24 Horas
                  </span>
                  <span>Plantão Emergencial</span>
                  <span className="text-right text-[#f6e5be]">
                    Delegacias & Urgências
                  </span>
                  <span>Áreas Atendidas</span>
                  <span className="text-right text-stone-200">Ribeirão das Neves & RMBH</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#cb902b]/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Atendimento humanizado, ético e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Ferreira! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#cb902b]/30 bg-[#040914] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f6e5be] transition-colors hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar com a Advogada <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#cb902b]/20 bg-gradient-to-r from-[#040914] via-[#07101e] to-[#040914] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c368]">
                <Sparkles size={13} /> PATRÍCIA FERREIRA ADVOCACIA & CONSULTORIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Decisões jurídicas exigem estratégia, não impulso.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Patrícia Ferreira! Gostaria de consultar sobre meus direitos com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#a67520] via-[#cb902b] to-[#a67520] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#040914] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#cb902b]/20 bg-[#02050b] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Patrícia Ferreira Advocacia & Consultoria"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.01]"
              >
                <div className="relative size-[64px] shrink-0 sm:size-[72px]">
                  <Image
                    src={LOGO_SHIELD_SRC}
                    alt="Escudo Oficial Patrícia Ferreira"
                    fill
                    sizes="72px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-xl font-bold tracking-wider text-white sm:text-2xl">
                    PATRÍCIA P. FERREIRA
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e5c368]">
                    ADVOCACIA & CONSULTORIA
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#c7d5e8]">
                ⚖️ Proteção jurídica para mulheres e homens em momentos críticos. Atuação leal, combativa e com extrema sensibilidade em Ribeirão das Neves, RMBH e online em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#e5c368]">
                Dra. Patrícia Pinto Ferreira · Advogada OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c368]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#c7d5e8]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Patrícia Ferreira
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (4,9 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Plantão 24h
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c368]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#c7d5e8]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Ferreira! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f6e5be]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#e5c368]">
                  <Clock size={14} className="shrink-0" /> Aberto 24 Horas · Plantão Jurídico
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#cb902b]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} PATRÍCIA FERREIRA ADVOCACIA & CONSULTORIA · DRA. PATRÍCIA PINTO FERREIRA. Todos os direitos reservados.
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
              "Olá, Dra. Patrícia Ferreira! Gostaria de consultar sobre meus direitos com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Patrícia Ferreira"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#07101e] border border-[#cb902b]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Patrícia
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/85 p-0 backdrop-blur-md sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#cb902b]/35 bg-[#07101e] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#cb902b]/30 bg-[#040914] text-[#f6e5be] transition-colors hover:border-[#e5c368] hover:text-white"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#c7d5e8]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#cb902b]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5c368]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#cb902b]" />
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
                    className="px-5 py-3 text-xs font-semibold text-stone-400 transition-colors hover:text-white"
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
