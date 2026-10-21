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
  ShieldAlert,
  Gavel,
  Users,
  Compass,
  Lock,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535999836587";
const PHONE_DISPLAY = "(35) 99983-6587";
const EMAIL_CONTACT = "contato@liviatorres.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/liviatorres.adv/";
const INSTAGRAM_HANDLE = "@liviatorres.adv";

const ADDRESS_TEXT =
  "Edifício Paquetá - R. Américo Miari, 27 - Sl 201 - Centro, Três Pontas - MG, 37185-068";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=L%C3%ADvia+Torres+%E2%80%94+Advogada%0ATr%C3%AAs+Pontas+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const FOTO_HERO_SRC = "/dra-livia-torres.jpg";
const FOTO_SOBRE_SRC = "/dra-livia-torres.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Lívia Torres! Gostaria de consultar sobre meu caso e agendar um atendimento.";
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
  category: "Direito Penal & Flagrantes 24h" | "Direito de Família & Sucessões";
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "flagrantes-custodia-24h",
    title: "Flagrantes 24h & Audiências de Custódia",
    category: "Direito Penal & Flagrantes 24h",
    icon: ShieldAlert,
    tag: "Plantão 24h · Delegacia · Custódia · Liberdade Provisória",
    summary:
      "Atuação célere e combativa 24 horas por dia em prisões em flagrante, acompanhamento em delegacias, audiências de custódia e revogação de prisões preventivas.",
    details:
      "Nas primeiras horas após uma prisão, cada minuto é decisivo para preservar a integridade e restabelecer a liberdade. A Dra. Lívia Torres oferece suporte imediato em delegacias de polícia e na audiência de custódia, combatendo ilegalidades, requerendo a liberdade provisória e formulando pedidos urgentes de relaxamento de prisão.",
    topics: [
      "Plantão 24h para assistência imediata em flagrantes delito e ocorrências policiais",
      "Acompanhamento presencial em interrogatórios e depoimentos em delegacias de polícia",
      "Atuação técnica e oral na Audiência de Custódia perante a autoridade judicial",
      "Pedidos de Liberdade Provisória (com ou sem fiança) e Relaxamento de Prisão Ilegal",
      "Revogação de Prisão Preventiva ou Temporária e substituição por cautelares",
      "Impetração urgente de Habeas Corpus perante o Tribunal de Justiça de Minas Gerais (TJMG)",
    ],
    whatsAppText:
      "Olá, Dra. Lívia Torres! Preciso de atendimento urgente para um flagrante / audiência de custódia.",
  },
  {
    id: "defesa-criminal-estrategica",
    title: "Defesa Criminal Estratégica & Tribunal do Júri",
    category: "Direito Penal & Flagrantes 24h",
    icon: Gavel,
    tag: "Processo Penal · Júri · Recursos · Execução Penal",
    summary:
      "Defesa técnica e combativa em inquéritos policiais, ações penais, Tribunal do Júri e recursos nos tribunais superiores (TJMG, STJ e STF).",
    details:
      "Uma defesa criminal séria exige conhecimento técnico aprofundado, análise minuciosa de provas e estratégia jurídica personalizada. A Dra. Lívia Torres defende os direitos e garantias constitucionais do investigado ou réu em crimes contra a pessoa, patrimoniais, Lei de Drogas e crimes de trânsito.",
    topics: [
      "Defesa em Ações Penais: resposta à acusação, audiências de instrução e alegações finais",
      "Atuação combativa e especializada em Plenário do Tribunal do Júri",
      "Defesa em crimes patrimoniais (furto, roubo, estelionato e apropriação indébita)",
      "Atuação técnica na Lei de Drogas (tráfico, associação e porte) com teses de desclassificação",
      "Interposição de recursos (Apelação, Recurso em Sentido Estrito, Embargos e Revisão Criminal)",
      "Execução Penal: progressão de regime (fechado, semiaberto, aberto), remição de pena e livramento condicional",
    ],
    whatsAppText:
      "Olá, Dra. Lívia Torres! Gostaria de consultar sobre uma defesa criminal em processo ou inquérito.",
  },
  {
    id: "direito-de-familia-divorcios",
    title: "Direito de Família, Divórcios & Partilha",
    category: "Direito de Família & Sucessões",
    icon: HeartHandshake,
    tag: "Divórcio Rápido · Cartório & Judicial · Partilha de Bens",
    summary:
      "Soluções jurídicas seguras, ágeis e humanizadas para divórcios consensuais e litigiosos, dissolução de união estável e partilha correta de bens.",
    details:
      "O término de uma relação exige cuidado redobrado para evitar prejuízos patrimoniais e desgaste emocional. Conduzimos divórcios extrajudiciais em cartório de forma célere e harmoniosa, bem como divórcios judiciais litigiosos complexos, assegurando a justa partilha dos bens conquistados.",
    topics: [
      "Divórcio Consensual em Cartório (extrajudicial rápido, seguro e sem burocracia)",
      "Divórcio Litigioso e Dissolução de União Estável na Justiça com proteção patrimonial",
      "Partilha detalhada de bens, imóveis, empresas, dívidas e investimentos do casal",
      "Reconhecimento e dissolução de união estável post mortem ou em vida",
      "Elaboração de pactos antenupciais e contratos de convivência",
      "Mediação extrajudicial com foco na resolução pacífica e proteção dos interesses do cliente",
    ],
    whatsAppText:
      "Olá, Dra. Lívia Torres! Gostaria de orientações sobre Divórcio e Partilha de Bens.",
  },
  {
    id: "guarda-pensao-medidas-protetivas",
    title: "Guarda, Pensão Alimentícia & Medidas Protetivas",
    category: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Filhos · Pensão · Guarda · Lei Maria da Penha · Inventário",
    summary:
      "Proteção integral para os filhos e para a família: fixação e revisão de alimentos, guarda compartilhada, medidas protetivas e inventários sucessórios.",
    details:
      "Priorizamos o bem-estar dos filhos e a segurança de quem está em situação de vulnerabilidade. Atuamos com firmeza e sensibilidade em ações de pensão alimentícia, guarda, regime de convivência, medidas protetivas de urgência da Lei Maria da Penha e inventários.",
    topics: [
      "Ação de Alimentos: fixação, revisão (aumento ou redução), exoneração e execução de pensão",
      "Definição de Guarda Compartilhada ou Unilateral e regulamentação de visitas/convivência",
      "Medidas Protetivas de Urgência (Lei Maria da Penha): pedidos imediatos e defesa especializada",
      "Inventários Judiciais e Extrajudiciais (em cartório), cessão de direitos hereditários e partilha",
      "Investigação de paternidade, reconhecimento voluntário ou judicial e retificação de registro",
      "Autorização para viagens e suprimento judicial de consentimento parental",
    ],
    whatsAppText:
      "Olá, Dra. Lívia Torres! Preciso de assessoria em Guarda, Pensão Alimentícia ou Medidas Protetivas.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  content: string;
  reply?: string;
}

const clientReviews: Review[] = [
  {
    name: "Fabiany Trabalho",
    badge: "Avaliação Verificada no Google",
    date: "Há 3 meses",
    content:
      "Excelente profissional! Muito atenciosa, ética e extremamente competente. Transmite confiança e segurança em todas as orientações. Recomendo de olhos fechados para quem busca uma advogada criminalista comprometida e humana.",
    reply: "São feedbacks assim que me motivam. Obrigada pelo carinho!",
  },
  {
    name: "Carol Torres",
    badge: "Avaliação Verificada no Google",
    date: "Há 3 meses",
    content:
      "Extremamente dedicada, atenciosa e prática. Me senti totalmente segura e acolhida durante todo o atendimento. Recomendo de olhos fechados!",
    reply: "Muito obrigada pelo carinho! Fiquei extremamente feliz com seu feedback.",
  },
  {
    name: "Priscilla Souza",
    badge: "Avaliação Verificada no Google",
    date: "Há 1 mês",
    content:
      "Dra Livia foi uma profissional incrível que me ajudou muito no pior momento da minha vida. Profissional ímpar! Recomendo muito!",
    reply:
      "Muito obrigada pelas suas palavras e, principalmente, pela confiança no meu trabalho. Fico muito satisfeita em saber que pude te ajudar em um momento tão delicado. Conte sempre comigo!",
  },
  {
    name: "Luis Henrique M Pedro",
    badge: "Avaliação Verificada no Google",
    date: "Há 1 mês",
    content:
      "Excelente profissional! Fiquei muito satisfeito com o atendimento da Dra. Lívia. Foi muito atenciosa, profissional e me passou muita segurança durante todo o processo. Me ajudou a resolver uma situação que estava me preocupando bastante.",
    reply:
      "Agradeço imensamente pela confiança. Defender os seus direitos com seriedade e dedicação é a minha maior prioridade!",
  },
  {
    name: "Marianna Luca",
    badge: "Avaliação Verificada no Google",
    date: "Há 1 mês",
    content:
      "Estou sendo muito bem assessorada em questões complexas e delicadas.",
    reply: "É muito gratificante para mim esse seu feedback. Muito obrigada!",
  },
  {
    name: "Adalberto Vitor",
    badge: "Avaliação Verificada no Google",
    date: "Há 1 mês",
    content:
      "Uma excelente profissional, super recomendo, 100% de pura confiança!!",
    reply:
      "Fico muito feliz em saber que pude te transmitir segurança e contribuir para a solução da sua situação. Conte sempre comigo!",
  },
  {
    name: "Davi Sousa",
    badge: "Avaliação Verificada no Google",
    date: "Há 1 mês",
    content: "Excelente profissional, empenhada e muito dedicada.",
    reply:
      "Agradeço imensamente pela confiança e pelas palavras tão carinhosas.",
  },
  {
    name: "Yasmin Gabrielle Souza Pereira",
    badge: "Avaliação Verificada no Google",
    date: "Há 1 mês",
    content: "Super prestativa e paciente.",
    reply:
      "Fico muito feliz com seu carinho e com a sua avaliação. Agradeço pela confiança no meu trabalho!",
  },
  {
    name: "Enzo",
    badge: "Avaliação Verificada no Google",
    date: "Há 3 meses",
    content: "Amei, a melhor advogada na minha opinião!!",
    reply: "Quanta gentileza! Obrigada, Enzo.",
  },
  {
    name: "Roberta Pereira",
    badge: "Avaliação Verificada no Google",
    date: "Há 3 meses",
    content: "Extremamente competente! 🙏",
    reply: "Fico muito satisfeita com o elogio. Obrigada pelo carinho!",
  },
  {
    name: "Bianca Ezequiel Rodrigues",
    badge: "Avaliação Verificada no Google",
    date: "Há 3 meses",
    content: "Excelente profissional!",
    reply: "Obrigada, Bianca!",
  },
  {
    name: "Luciana Ferreira",
    badge: "Avaliação Verificada no Google",
    date: "Há 3 meses",
    content:
      "Atendimento exemplar, atencioso e de extrema dedicação. Recomendo com toda certeza!",
    reply: "Obrigada de coração! 🙏",
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
          dark ? "text-white" : "text-[#0e1118]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#a0abbd]" : "text-[#4b5565]"
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
      <main className="relative min-h-screen bg-[#090b10] text-[#e1e7f0]">
        {/* Top Emergency Strip (Plantão 24h) */}
        <div className="relative z-50 border-b border-[#c6922c]/20 bg-[#0c0f16] px-4 py-2.5 text-xs text-[#d1d7e2]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#e5b650] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#c6922c]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f5de9c] font-semibold">
                Plantão Criminal 24h para Flagrantes & Audiências de Custódia
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="font-bold text-[#e5b650] transition-colors hover:text-white"
              >
                Ligue: {PHONE_DISPLAY}
              </a>
              <span className="hidden text-[#4b5565] sm:inline">|</span>
              <span className="hidden text-[#a0abbd] sm:inline">
                Edifício Paquetá · Três Pontas - MG
              </span>
            </div>
          </div>
        </div>

        {/* Header / Navbar */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled
              ? "border-b border-[#c6922c]/20 bg-[#090b10]/95 backdrop-blur-md shadow-lg shadow-black/40"
              : "border-b border-[#1c2230] bg-[#090b10]/90 backdrop-blur-xs"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
            {/* Logo */}
            <a
              href="#inicio"
              aria-label="Lívia Torres — Advogada"
              className="group flex shrink-0 items-center transition-transform hover:scale-[1.02]"
            >
              <Image
                src={LOGO_SRC}
                alt="Lívia Torres — Advogada"
                width={280}
                height={112}
                priority
                className="h-14 w-auto object-contain sm:h-16 lg:h-20"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link-dark" href="#inicio">
                Início
              </a>
              <a className="nav-link-dark" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link-dark" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link-dark" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link-dark" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link-dark" href="#contato">
                Contato
              </a>
            </nav>

            {/* Header CTA & Mobile Button */}
            <div className="flex items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Lívia Torres! Gostaria de uma consulta sobre meu caso."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="hidden sm:inline-flex"
              >
                <WhatsAppIcon size={15} /> Plantão WhatsApp
              </GlowingButton>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="grid size-10 place-items-center rounded-lg border border-[#c6922c]/30 bg-[#121622] text-[#f5de9c] transition-colors hover:border-[#e5b650] hover:text-white lg:hidden cursor-pointer"
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
                className="overflow-hidden border-b border-[#c6922c]/20 bg-[#0e1118] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="border-b border-[#c6922c]/20 pb-3">
                    <Image
                      src={LOGO_SRC}
                      alt="Lívia Torres — Advogada"
                      width={220}
                      height={88}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold tracking-wide text-[#d1d7e2] transition-colors hover:text-[#e5b650]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="pt-3">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Lívia Torres! Gostaria de consultar sobre meu caso."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} /> Falar com a Dra. Lívia
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Deep Obsidian & Imperial Gold Radiance */}
        <section
          id="inicio"
          className="relative isolate overflow-hidden border-b border-[#c6922c]/20 bg-gradient-to-b from-[#090b10] via-[#0d1017] to-[#121622] py-16 sm:py-24 lg:py-28"
        >
          {/* Ambient Lighting & Metallic Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 -z-10 size-[38rem] rounded-full bg-[#c6922c]/12 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 size-[32rem] rounded-full bg-[#8f641b]/10 blur-[90px]" />

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
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#c6922c]/40 bg-[#141824]/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5de9c] shadow-xs backdrop-blur-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#e5b650] shadow-[0_0_8px_#e5b650]" />
                <span>DRA. LÍVIA TORRES · CRIMINAL & FAMÍLIA · TRÊS PONTAS - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.5rem]"
              >
                Protegendo sua{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e5b650] via-[#f5de9c] to-[#c6922c]">
                  liberdade
                </span>{" "}
                e o futuro da sua{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e5b650] via-[#f5de9c] to-[#c6922c]">
                  família.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#b5c0d0] sm:text-base sm:leading-8"
              >
                ⚖️ Defesa técnica especializada e incansável em <strong className="text-white">Direito Criminal, flagrantes 24h, audiências de custódia</strong> e soluções humanizadas em <strong className="text-white">Direito de Família</strong> (divórcios, guarda, pensão e partilha). Atendimento ético, acolhedor e com sigilo profissional rigoroso.
              </motion.p>

              {/* Fast Trust Indicators */}
              <motion.div
                variants={reveal}
                className="mt-7 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold text-[#d1d7e2]"
              >
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#c6922c]/25 bg-[#121622]/90 px-3.5 py-1.5 shadow-xs text-[#f5de9c]">
                  <Star size={13} className="fill-[#e5b650] text-[#e5b650]" />
                  Nota 5,0 ★ no Google (12 avaliações)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#c6922c]/25 bg-[#121622]/90 px-3.5 py-1.5 shadow-xs text-[#f5de9c]">
                  <Clock size={13} className="text-[#e5b650]" />
                  Plantão de Flagrantes 24h
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#c6922c]/25 bg-[#121622]/90 px-3.5 py-1.5 shadow-xs text-[#f5de9c]">
                  <MapPin size={13} className="text-[#e5b650]" />
                  Edifício Paquetá · Três Pontas
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Lívia Torres! Gostaria de consultar sobre meu caso e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp
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
                className="mt-4 text-xs text-[#8a96a8]"
              >
                Atendimento presencial no Centro de Três Pontas ou online para toda a comarca e região.
              </motion.p>
            </motion.div>

            {/* Right Column / Hero Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              {/* Outer Golden Halo Frame */}
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#c6922c]/50 bg-[#141824] shadow-2xl shadow-black/80">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Lívia Torres — Advogada Criminalista e de Família"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090b10] via-[#090b10]/60 to-transparent" />
              </div>

              {/* Authority Floating Card */}
              <div className="absolute -bottom-6 -left-3 max-w-[310px] rounded-xl border border-[#c6922c]/50 bg-[#0f131c]/95 p-4 shadow-2xl backdrop-blur-md sm:-left-6 sm:p-5">
                <div className="flex items-center gap-1 text-[#e5b650]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#e5b650] text-[#e5b650]"
                    />
                  ))}
                  <span className="ml-1 text-xs font-bold text-white">5,0</span>
                </div>
                <p className="mt-1 font-serif text-sm font-bold text-white">
                  Dra. Lívia Torres
                </p>
                <p className="text-[11px] font-medium text-[#f5de9c]">
                  Advogada Criminal & Família · OAB/MG
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#8a96a8]">
                  &ldquo;Transmite confiança e segurança em todas as orientações.&rdquo;
                </p>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -right-3 top-6 rounded-lg border border-[#c6922c]/40 bg-[#0c0f16]/95 px-3 py-2 text-right shadow-xl backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-1.5 text-[#e5b650]">
                  <ShieldAlert size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Flagrantes 24h
                  </span>
                </div>
                <p className="text-[10px] text-[#8a96a8]">Prontidão Imediata</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Pillars Strip (Barra de Destaques) */}
        <section className="border-b border-[#c6922c]/20 bg-[#0d1017] px-5 py-8 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c6922c]/30 bg-[#141824] text-[#e5b650]">
                <Star size={18} className="fill-[#e5b650]" />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Nota 5,0 no Google</p>
                <p className="text-[11px] text-[#8a96a8]">12 avaliações 5 estrelas</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c6922c]/30 bg-[#141824] text-[#e5b650]">
                <Clock size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Plantão 24 Horas</p>
                <p className="text-[11px] text-[#8a96a8]">Flagrantes e custódia</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c6922c]/30 bg-[#141824] text-[#e5b650]">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Sede em Três Pontas</p>
                <p className="text-[11px] text-[#8a96a8]">Edifício Paquetá - Sl 201</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c6922c]/30 bg-[#141824] text-[#e5b650]">
                <Lock size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Sigilo Profissional</p>
                <p className="text-[11px] text-[#8a96a8]">Atendimento seguro e ético</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre a Dra. Lívia Torres */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#e6ded4] bg-[#fbf9f5] py-20 text-[#12151d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[460px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#d4af37]/40 bg-[#f4efe6] shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Lívia Torres em seu escritório de advocacia"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#12151d]/70 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#d4af37]/50 bg-white p-5 shadow-xl sm:-right-6">
                <div className="flex items-center gap-2 text-[#c6922c]">
                  <Award size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f641b]">
                    Advocacia Especializada & Humana
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg font-bold leading-snug text-[#0e1118]">
                  Dra. Lívia Torres
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#c6922c]">
                  Direito Criminal & Direito de Família
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5a6475]">
                  Edifício Paquetá · R. Américo Miari, 27 - Sl 201 · Três Pontas - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c6922c]/50 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#d4af37]/40 bg-[#fdf7e7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f641b] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c6922c]" />
                <span>CONHEÇA A DRA. LÍVIA TORRES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-[#0e1118] sm:text-4xl lg:text-[2.85rem]"
              >
                Uma defesa combativa e humana nos momentos mais{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f641b] via-[#c6922c] to-[#e5b650]">
                  delicados da sua vida.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4b5565]"
              >
                Quem busca um advogado criminalista ou de família geralmente enfrenta uma das fases mais angustiantes e vulneráveis de sua trajetória. A <strong className="font-bold text-[#0e1118]">Dra. Lívia Torres</strong> une sólido preparo técnico, rapidez nas providências urgentes e um olhar profundamente humano e empático para proteger o que você tem de mais precioso: <strong className="font-bold text-[#0e1118]">sua liberdade e a sua família</strong>.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4b5565]"
              >
                Com sede no <strong className="text-[#0e1118]">Edifício Paquetá, no Centro de Três Pontas - MG</strong>, o escritório atua de forma presencial e digital, oferecendo prontidão imediata para ocorrências policiais e plantões 24h em flagrantes e audiências de custódia em toda a região.
              </motion.p>

              {/* 3 Value Pillars */}
              <motion.div
                variants={reveal}
                className="mt-8 grid gap-4 sm:grid-cols-3"
              >
                <div className="rounded-xl border border-[#e6ded4] bg-white p-4 shadow-xs">
                  <span className="text-[#c6922c]">
                    <Shield size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0e1118]">
                    Combatividade Técnica
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5a6475]">
                    Atuação firme e sem hesitação em todas as instâncias judiciais.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-4 shadow-xs">
                  <span className="text-[#c6922c]">
                    <HeartHandshake size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0e1118]">
                    Acolhimento Real
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5a6475]">
                    Escuta atenta, transparente e sem nenhum julgamento moral.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-4 shadow-xs">
                  <span className="text-[#c6922c]">
                    <Clock size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0e1118]">
                    Plantão 24 Horas
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5a6475]">
                    Prontidão para emergências criminais, custódia e delegacias.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Lívia Torres! Gostaria de conversar com a senhora sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-sm"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Lívia
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação & Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#c6922c]/20 bg-[#0d1017] py-20 sm:py-28 lg:py-32"
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
                eyebrow="PILARES DE ATUAÇÃO & ESPECIALIDADES"
                description="Conhecimento técnico minucioso, rapidez de resposta e dedicação integral na defesa penal e na resolução de conflitos familiares."
              >
                Atuação especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e5b650] via-[#f5de9c] to-[#c6922c]">
                  Direito Criminal e de Família.
                </span>
              </Heading>
              <p className="max-w-[280px] pb-1 text-xs leading-6 text-[#8a96a8]">
                Selecione uma especialidade abaixo para conferir as demandas atendidas e iniciar seu atendimento direto pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[380px] flex-col rounded-2xl border border-[#c6922c]/25 bg-[#121622] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e5b650] hover:shadow-2xl hover:shadow-[#c6922c]/15 sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-[#c6922c]/30 bg-[#181e2e] text-[#e5b650] shadow-xs transition-colors group-hover:border-[#e5b650] group-hover:bg-[#c6922c] group-hover:text-[#090b10]">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#c6922c]/40 transition-colors group-hover:text-[#e5b650]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-block rounded-md border border-[#c6922c]/30 bg-[#161c2b] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f5de9c]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.25rem] font-bold leading-snug text-white">
                        {area.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-6 text-[#9ca7b8]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e5b650] hover:text-white cursor-pointer"
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

        {/* Por Que Escolher a Dra. Lívia Torres - 4 Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#e6ded4] bg-white py-20 text-[#12151d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="REPUTAÇÃO 5 ESTRELAS NO GOOGLE"
                description="Os pilares de combatividade técnica, acolhimento nos momentos mais difíceis, ética inegociável e agilidade comprovados por clientes reais."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f641b] via-[#c6922c] to-[#e5b650]">
                  Dra. Lívia Torres?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Lívia Torres! Gostaria de consultar sobre a minha situação jurídica com seu escritório."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            {/* Grid 4 Pilares baseados nas avaliações reais */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pilar 1 */}
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c6922c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-white text-[#c6922c] shadow-xs">
                  <Shield size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Segurança & Confiança
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Transmissão imediata de tranquilidade e segurança jurídica em todas as orientações, do primeiro atendimento à conclusão da causa.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8f641b]">
                  &ldquo;100% de pura confiança&rdquo;
                </span>
              </div>

              {/* Pilar 2 */}
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c6922c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-white text-[#c6922c] shadow-xs">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Apoio no Momento Difícil
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Acolhimento sensível e dedicado para apoiar você e seus familiares quando mais precisam de socorro e orientação jurídica.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8f641b]">
                  &ldquo;Me ajudou no pior momento da vida&rdquo;
                </span>
              </div>

              {/* Pilar 3 */}
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c6922c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-white text-[#c6922c] shadow-xs">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Competência & Praticidade
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Atuação prática, sem burocracia ou juridiquês excessivo. Estratégias claras e objetivas focadas em resultados rápidos e seguros.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8f641b]">
                  &ldquo;Extremamente dedicada e prática&rdquo;
                </span>
              </div>

              {/* Pilar 4 */}
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c6922c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-white text-[#c6922c] shadow-xs">
                  <Compass size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Paciência & Disponibilidade
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Acompanhamento próximo com respostas pontuais às suas dúvidas. Você sempre saberá exatamente em que pé está o seu processo.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8f641b]">
                  &ldquo;Super prestativa e paciente&rdquo;
                </span>
              </div>
            </div>

            {/* Como Funciona o Atendimento */}
            <div className="mt-16 rounded-2xl border border-[#e6ded4] bg-[#f4efe6] p-8 sm:p-12">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f641b]">
                  PASSO A PASSO TRANSPARENTE
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#0e1118] sm:text-3xl">
                  Como funciona o nosso atendimento
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Sem surpresas e sem complicação. Do primeiro contato até a sentença final, você é acolhido com clareza absoluta.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-[#e6ded4] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#c6922c]">
                    01
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0e1118]">
                    Contato Inicial Ágil
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5a6475]">
                    Você entra em contato direto via WhatsApp ou telefone. Em casos de flagrante ou emergência, o retorno é imediato 24h.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#c6922c]">
                    02
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0e1118]">
                    Análise Estratégica
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5a6475]">
                    A Dra. Lívia examina detalhadamente os documentos, inquérito ou situação familiar para formular a melhor tese jurídica.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#c6922c]">
                    03
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0e1118]">
                    Atuação Firme & Combate
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5a6475]">
                    Defesa incansável com presença em audiências, pedidos urgentes e atualização constante de cada andamento do processo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 12 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-[#c6922c]/20 bg-[#0d1017] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="DEPOIMENTOS REAIS NO GOOGLE"
                description="Nota máxima de 5,0 ★ com 12 avaliações no Google Meu Negócio. Palavras de clientes que encontraram suporte, competência e segurança nos momentos decisivos."
              >
                O que dizem os clientes da{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e5b650] via-[#f5de9c] to-[#c6922c]">
                  Dra. Lívia Torres
                </span>
              </Heading>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#c6922c]/30 bg-[#121622] px-5 py-3 text-xs font-bold text-white shadow-xs transition-all hover:border-[#e5b650] hover:bg-[#181e2e]"
              >
                <GoogleIcon size={18} />
                <span>Ver avaliações no Google Meu Negócio</span>
                <ArrowUpRight size={15} className="text-[#e5b650]" />
              </a>
            </div>

            {/* Grid of Real Reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-2xl border border-[#c6922c]/20 bg-[#121622] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b650] hover:shadow-2xl hover:shadow-[#c6922c]/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#e5b650]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#e5b650] text-[#e5b650]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c6922c]/25 bg-[#171d2b] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f5de9c]">
                        {review.badge}
                      </span>
                    </div>

                    <p className="mt-4 text-xs leading-6 text-[#d1d7e2]">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-4 rounded-xl border border-[#c6922c]/20 bg-[#161b28] p-3 text-[11px] leading-5 text-[#a0abbd]">
                        <span className="font-bold text-[#e5b650]">
                          Resposta da Dra. Lívia:{" "}
                        </span>
                        {review.reply}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 border-t border-[#1c2230] pt-4">
                    <p className="font-serif text-sm font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#8a96a8]">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Três Pontas - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#e6ded4] bg-white py-20 text-[#12151d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO JURÍDICO"
                description="Inicie seu atendimento diretamente com a Dra. Lívia Torres. Prestamos assistência ágil e resolutiva em Três Pontas, Varginha, Santana da Vargem, Boa Esperança, Campos Gerais, Elói Mendes e em todo o Sul de Minas."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f641b] via-[#c6922c] to-[#e5b650]">
                  proteger sua liberdade e resguardar sua família.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Lívia Torres! Gostaria de agendar um atendimento no escritório em Três Pontas."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-xs text-[#5a6475]">
                  Plantão e WhatsApp do escritório:{" "}
                  <strong className="text-[#0e1118]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#5a6475]">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-[#c6922c]" />
                  <div>
                    <p className="font-bold text-[#0e1118]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#3a4252]">
                      Segunda a Sexta-feira · a partir das 08:00
                    </p>
                    <p className="text-[11px] font-semibold text-[#8f641b]">
                      Plantão 24 Horas para Flagrantes e Audiências de Custódia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#c6922c]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-bold text-[#0e1118] transition-colors hover:text-[#c6922c]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp 24h)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#c6922c]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#3a4252] transition-colors hover:text-[#c6922c]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#c6922c]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="font-medium text-[#3a4252] transition-colors hover:text-[#c6922c]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#c6922c]" />
                  <span className="font-medium text-[#3a4252]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/35 bg-[#fbf9f5] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#c6922c] to-[#e5b650]" />

              <div className="flex items-center gap-4">
                <Image
                  src={LOGO_SRC}
                  alt="Lívia Torres — Advogada"
                  width={340}
                  height={136}
                  className="h-20 w-auto object-contain sm:h-24"
                />
              </div>

              <address className="mt-7 max-w-md text-sm not-italic leading-7 text-[#4b5565]">
                <strong className="font-bold text-[#0e1118]">
                  Lívia Torres — Advogada
                </strong>
                <br />
                Criminal & Família · Flagrantes 24h
                <br />
                Dra. Lívia Torres — Advogada Titular · OAB/MG
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-[#e6ded4] bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8f641b]">
                  Disponibilidade & Modalidades
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-[#4b5565]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-bold text-[#0e1118]">
                    Abre às 08:00 (Seg a Sex)
                  </span>
                  <span>Plantão de Flagrantes</span>
                  <span className="text-right font-bold text-[#c6922c]">
                    24 Horas / Todos os dias
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-[#0e1118]">Centro, Três Pontas - MG</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#0e1118]">Três Pontas & Região</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e6ded4]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#6a7587]">
                  Atendimento ético, confidencial e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Lívia Torres! Gostaria de agendar um atendimento na sua sede em Três Pontas."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c6922c]/50 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8f641b] transition-colors hover:border-[#c6922c] hover:bg-[#fdf7e7] hover:text-[#0e1118]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Dra. Lívia <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Obsidian & Gold Metallic Banner */}
        <section className="border-t border-[#c6922c]/30 bg-gradient-to-r from-[#090b10] via-[#141824] to-[#090b10] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5de9c]">
                <Sparkles size={13} /> DRA. LÍVIA TORRES · ADVOGADA CRIMINAL & FAMÍLIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
                Não deixe seus direitos e sua família desamparados. Garanta a defesa certa.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Lívia Torres! Preciso de atendimento para meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#b88526] via-[#dcae42] to-[#b88526] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#090b10] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1c2230] bg-[#07080c] px-5 py-14 text-[#9ca7b8] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Lívia Torres — Advogada"
                className="inline-flex items-center transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Lívia Torres — Advogada"
                  width={300}
                  height={120}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#9ca7b8]">
                ⚖️ Protegendo sua liberdade e sua família com combate técnico e acolhimento humano. Especializada em Direito Criminal (Flagrantes 24h, Custódia, Tribunal do Júri) e Direito de Família (Divórcios, Guarda, Pensão e Inventários). Nota máxima 5,0 ★ no Google em Três Pontas - MG.
              </p>
              <p className="mt-3 text-[11px] font-bold text-[#e5b650]">
                Lívia Torres — Advogada · OAB/MG · Três Pontas - MG
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5b650]">
                Navegação
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#9ca7b8]">
                <a className="footer-link font-medium hover:text-[#e5b650]" href="#inicio">
                  Início
                </a>
                <a className="footer-link font-medium hover:text-[#e5b650]" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link font-medium hover:text-[#e5b650]" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link font-medium hover:text-[#e5b650]" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link font-medium hover:text-[#e5b650]" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link font-medium hover:text-[#e5b650]" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5b650]">
                Contato & Plantão
              </h3>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#9ca7b8]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Lívia Torres! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-bold text-[#e5b650]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Phone size={15} className="shrink-0 text-[#e5b650]" /> Plantão 24h: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <InstagramIcon size={15} className="shrink-0 text-[#e5b650]" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Mail size={15} className="shrink-0 text-[#e5b650]" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2 font-medium">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#e5b650]" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] font-bold text-[#e5b650]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · Abre às 08:00 | Flagrantes 24h
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#1c2230] pt-6 text-[10px] text-[#6b7688] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} LÍVIA TORRES — ADVOGADA. Todos os direitos reservados.
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
              "Olá, Dra. Lívia Torres! Gostaria de consultar sobre meus direitos."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Lívia Torres"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0e1118] border border-[#c6922c]/40 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Lívia Torres
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#c6922c]/40 bg-[#0e1118] p-7 text-[#e1e7f0] shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c6922c]/30 bg-[#161c28] text-[#f5de9c] transition-colors hover:border-[#e5b650] hover:bg-[#c6922c] hover:text-[#090b10] cursor-pointer"
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

                <p className="mt-5 text-sm leading-7 text-[#b5c0d0]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#1c2230] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5b650]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-xs leading-5 text-[#d1d7e2]"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#c6922c]" />
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
                    className="px-5 py-3 text-xs font-bold text-[#8a96a8] transition-colors hover:text-white cursor-pointer"
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
