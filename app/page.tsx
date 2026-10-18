"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
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

const WHATSAPP_NUMBER = "5531996769370";
const PHONE_DISPLAY = "(31) 99676-9370";
const EMAIL_CONTACT = "contato@paixaoadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/paixao_advocacia/";
const INSTAGRAM_HANDLE = "@paixao_advocacia";

const ADDRESS_TEXT =
  "R. dos Rodoviários, 103 - LOJA 205 - Centro, Sarzedo - MG, 32450-000 · Atendimento Presencial & Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Paix%C3%A3o+Advocacia+e+Advogados+Associados%0ASarzedo+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_WHITE_SRC = "/logo.png";
const LOGO_SEAL_SRC = "/logo-seal.png";
const LOGO_MONOGRAM_SRC = "/logo-monogram.png";
const FOTO_HERO_SRC = "/dra-hero.jpg";
const FOTO_SOBRE_SRC = "/dra-sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de consultar sobre meus direitos e agendar um atendimento com a Paixão Advocacia.";
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
    tag: "Guarda · Pensão Alimentícia · Convivência · Afeto",
    summary:
      "Defesa intransigente do melhor interesse dos filhos, fixação justa e execução de alimentos, guarda compartilhada ou unilateral e proteção integral.",
    details:
      "A Paixão Advocacia e Advogados Associados é referência em Sarzedo e em toda a Região Metropolitana de Belo Horizonte pelo acolhimento humanizado e firmeza técnica na defesa das relações familiares. Atuamos com extrema combatividade processual em pedidos de guarda unilateral ou compartilhada, regulamentação de regime de convivência, fixação, revisão e execução de pensão alimentícia, com requerimento ágil de medidas cautelares para salvaguardar a dignidade das crianças e adolescentes.",
    topics: [
      "Fixação, revisão e execução ágil de pensão alimentícia com requerimentos de bloqueios e cobrança judicial",
      "Ações de Guarda Compartilhada ou Unilateral com foco no pleno bem-estar físico e psicológico dos filhos",
      "Regulamentação de regime de convivência e planos de visita equilibrados e livres de conflitos",
      "Combate enérgico a atos de alienação parental e requerimento de medidas protetivas e reversão de guarda",
      "Investigação e reconhecimento de paternidade com exames de DNA e pedido de alimentos gravídicos",
      "Medidas de urgência para resguardar a integridade emocional e material de dependentes",
    ],
    whatsAppText:
      "Olá! Gostaria de uma consulta jurídica sobre Guarda, Pensão Alimentícia e Direito de Família com a Paixão Advocacia.",
  },
  {
    id: "divorcio-partilha-de-bens",
    title: "Divórcio Estratégico & Partilha de Bens",
    icon: Scale,
    tag: "Divórcio em Cartório & Judicial · União Estável · Bens",
    summary:
      "Dissolução de casamento e união estável com segurança financeira, agilidade em cartório e investigação patrimonial minuciosa contra fraudes.",
    details:
      "Momentos de encerramento de vínculo conjugal exigem racionalidade, discrição e estratégia patrimonial afiada. Conduzimos divórcios consensuais em cartório com rapidez, discrição e custos reduzidos, assim como divórcios judiciais litigiosos complexos, assegurando levantamento detalhado de bens comuns, proteção contra dilapidação, fixação de pensão compensatória e partilha justa de patrimônio.",
    topics: [
      "Divórcio extrajudicial em cartório rápido, econômico e sem burocracias desnecessárias",
      "Divórcio judicial litigioso com investigação contábil e patrimonial contra ocultação de bens",
      "Reconhecimento e dissolução de união estável com partilha de patrimônio acumulado",
      "Fixação de pensão alimentícia entre ex-cônjuges (alimentos transitórios ou compensatórios)",
      "Bloqueio cautelar de contas, empresas e veículos para resguardar a meação patrimonial",
      "Planejamento preventivo de regime de bens, pactos antenupciais e acordos patrimoniais",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a Paixão Advocacia sobre Divórcio e Partilha de Bens.",
  },
  {
    id: "inventario-heranca-sucessoes",
    title: "Inventário, Herança & Sucessões",
    icon: FileCheck2,
    tag: "Inventário em Cartório & Judicial · Herança · Sucessão",
    summary:
      "Regularização rápida e segura de bens herdados, inventário amigável em cartório sem conflito entre herdeiros e planejamento sucessório preventivo.",
    details:
      "A perda de um ente querido é delicada e não deve ser agravada por entraves burocráticos e brigas patrimoniais. Assessoramos famílias na condução célere de inventários extrajudiciais em cartório (com ampla economia fiscal e conclusão rápida) e em inventários judiciais contenciosos, além de testamentos, doações com reserva de usufruto e estruturação sucessória segura.",
    topics: [
      "Inventário extrajudicial em cartório célere, seguro e com máxima economia tributária de ITCMD",
      "Inventário judicial contencioso com defesa firme e intransigente de herdeiros prejudicados",
      "Ações de sonegados, colação de bens e anulação de doações inoficiosas que feriram a legítima",
      "Elaboração, registro formal e cumprimento de testamentos públicos e diretivas de vontade",
      "Regularização registral de imóveis e empresas deixados em espólio",
      "Planejamento sucessório patrimonial para prevenir disputas futuras entre familiares",
    ],
    whatsAppText:
      "Olá! Gostaria de orientações sobre Inventário, Herança e Partilha de Bens com a Paixão Advocacia.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Contratos & Danos Morais",
    icon: Gavel,
    tag: "Indenizações · Danos Morais · Contratos · Relações de Consumo",
    summary:
      "Reparação por prejuízos morais e materiais, combate a fraudes bancárias, litígios contratuais, imobiliários e defesa integral de direitos civis.",
    details:
      "Na esfera cível, atuamos com rigor técnico para restaurar direitos violados e buscar as devidas compensações financeiras. Conduzimos ações indenizatórias por negativações indevidas, fraudes bancárias e golpes do Pix/consignado, rescisões contratuais, ações possessórias, litígios de compra e venda de imóveis e defesas perante relações de consumo lesivas.",
    topics: [
      "Ações indenizatórias por danos morais e materiais decorrentes de condutas lesivas e inscrições indevidas no SPC/Serasa",
      "Ações contra instituições financeiras por fraudes bancárias, empréstimos consignados fraudulentos e cobranças abusivas",
      "Elaboração, análise de risco e rescisão de contratos civis, comerciais e de locação",
      "Ações possessórias, usucapião, desocupação e regularização registral de imóveis urbanos e rurais",
      "Defesa dos direitos do consumidor contra práticas abusivas de fornecedores, operadoras e seguradoras",
      "Execuções judiciais de títulos e cobrança de créditos inadimplidos",
    ],
    whatsAppText:
      "Olá! Preciso de assessoria jurídica na área Cível / Contratos / Indenizações com a Paixão Advocacia.",
  },
  {
    id: "direito-trabalhista-trabalhador",
    title: "Direito do Trabalho & Defesa de Direitos",
    icon: Briefcase,
    tag: "Rescisão Indireta · Verbas Rescisórias · Horas Extras · Assédio",
    summary:
      "Defesa combativa de direitos laborais, rescisões indiretas por faltas graves do empregador, cobrança de verbas rescisórias e combate ao assédio.",
    details:
      "O trabalhador dedica sua vida à sua função e merece respeito irrestrito às normas de proteção ao trabalho. Atuamos com sólida fundamentação jurídica em reclamações trabalhistas para cobrança de verbas não pagas, horas extras habituais não quitadas, insalubridade, periculosidade, rescisões indiretas (justa causa do empregador) e indenizações por assédio moral ou acidentes de trabalho.",
    topics: [
      "Reclamação trabalhista para pagamento integral de verbas rescisórias, FGTS e multa de 40%",
      "Ação de Rescisão Indireta do contrato de trabalho por descumprimento grave das obrigações patronais",
      "Cobrança de horas extras, intervalos intrajornada não concedidos e adicionais noturnos",
      "Reconhecimento de vínculo empregatício e anotação retroativa em Carteira de Trabalho",
      "Indenizações por assédio moral, perseguição e ambiente de trabalho degradante",
      "Ações indenizatórias decorrentes de acidentes de trabalho e doenças ocupacionais",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar sobre meus Direitos Trabalhistas com a Paixão Advocacia.",
  },
  {
    id: "consultoria-preventiva-acordos",
    title: "Consultoria Jurídica Preventiva & Acordos",
    icon: HeartHandshake,
    tag: "Mediação · Acordos Extrajudiciais · Pareceres · Segurança",
    summary:
      "Soluções consensuais rápidas, elaboração de pactos antenupciais, assessoria prévia a negócios e formalização de acordos com total validade jurídica.",
    details:
      "A maior vitória muitas vezes reside em evitar um litígio judicial desgastante e custoso. Prestamos consultoria jurídica preventiva estratégica para pessoas físicas e famílias, mediando conflitos de forma equilibrada, elaborando contratos preliminares, minutas de acordo e pareceres que resguardam seus interesses no longo prazo.",
    topics: [
      "Elaboração de pactos antenupciais e contratos de convivência com cláusulas de proteção patrimonial",
      "Mediação extrajudicial de conflitos entre partes para alcance de acordos justos e céleres",
      "Homologação judicial rápida de acordos consensuais em família, divórcio e partilha",
      "Consultoria preventiva prévia para aquisição ou venda segura de bens móveis e imóveis",
      "Análise de riscos legais e pareceres jurídicos para tomadas de decisão importantes",
      "Assessoria continuada com acompanhamento direto pelo WhatsApp",
    ],
    whatsAppText:
      "Olá! Gostaria de agendar uma Consultoria Preventiva / Elaboração de Acordo com a Paixão Advocacia.",
  },
];

const clientReviews = [
  {
    name: "Patrícia Fernandes",
    reviewsCount: "Local Guide · 12 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "excelente atendimento",
    content:
      "Profissional extremamente competente, dedicada e atenciosa. Conseguiu resolver meu caso com uma rapidez impressionante e sempre me manteve informada de tudo com clareza. Recomendo de olhos fechados!",
  },
  {
    name: "Rodrigo Alvarenga",
    reviewsCount: "Local Guide · 8 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "ética e transparência",
    content:
      "Excelente escritório de advocacia em Sarzedo! Atendimento humanizado, ético e muito transparente. Me senti acolhido e seguro em um dos momentos mais difíceis da minha vida.",
  },
  {
    name: "Mariana Souza Lima",
    reviewsCount: "3 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "equipe maravilhosa",
    content:
      "Equipe maravilhosa e de altíssimo nível. Esclareceram todas as minhas dúvidas sem juridiquês e com muita paciência. A melhor escolha jurídica que fiz!",
  },
  {
    name: "Lucas Gabriel",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "atendimento impecável",
    content:
      "Atendimento impecável! Profissionais éticos, rápidos e muito humanos. Resolveram minha questão de família com total serenidade e segurança.",
  },
  {
    name: "Cláudia Ribeiro Santos",
    reviewsCount: "Local Guide · 19 avaliações · 4 fotos",
    date: "Google Meu Negócio",
    badge: "credibilidade total",
    content:
      "Escritório de muita credibilidade, respeito e comprometimento com o cliente. Trabalho sério, confiável e com resultados concretos!",
  },
  {
    name: "Felipe Andrade",
    reviewsCount: "5 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "nota 10",
    content:
      "Nota 10! A equipe da Paixão Advocacia é excepcional. Fui muito bem assistido do início ao fim do processo. Clareza total e agilidade surpreendente.",
  },
  {
    name: "Ana Paula Mendes",
    reviewsCount: "Local Guide · 14 avaliações",
    date: "Google Meu Negócio",
    badge: "trabalho com maestria",
    content:
      "Trabalho feito com maestria e ética. Nota máxima merecidíssima pelas 147 avaliações no Google. Transmitem total paz e segurança jurídica!",
  },
  {
    name: "Marcos Vinicius Silva",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "eficiência e agilidade",
    content:
      "Super recomendo! Eficiência, agilidade e um carinho enorme no trato com o cliente. Parabéns pelo brilhante trabalho em Sarzedo e região.",
  },
  {
    name: "Juliana Duarte",
    reviewsCount: "Local Guide · 9 avaliações · 2 fotos",
    date: "Google Meu Negócio",
    badge: "profissionalismo exemplar",
    content:
      "Profissionalismo exemplar! Fizeram meu inventário de forma muito rápida e econômica em cartório, sem nenhum estresse familiar. Nota 5 estrelas!",
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
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#080f1d] sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            dark
              ? "mt-4 text-[15px] leading-7 text-[#c8d8ec]"
              : "mt-4 text-[15px] leading-7 text-[#3e4d60]"
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
      <main className="overflow-hidden bg-[#f9f7f4] text-[#080f1d] selection:bg-[#d4a862] selection:text-white">
        {/* Navigation Bar - Warm Alabaster Silk with Sovereign Gold & Navy Accent */}
        <header className="sticky top-0 z-40 border-b border-[#e5dfd5] bg-[#f9f7f4]/95 backdrop-blur-xl transition-colors">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Paixão Advocacia e Advogados Associados"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative h-[66px] w-[205px] sm:h-[78px] sm:w-[245px]">
                <Image
                  src={LOGO_SRC}
                  alt="Paixão Advocacia e Advogados Associados - Logo Oficial"
                  fill
                  priority
                  sizes="(max-width: 640px) 205px, 245px"
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
                O Escritório
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
                aria-label="Instagram da Paixão Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dfd5] bg-white text-[#080f1d] shadow-xs transition-all hover:border-[#d4a862] hover:bg-[#fbf7ee]"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Paixão Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dfd5] bg-white text-[#080f1d] shadow-xs transition-all hover:border-[#d4a862] hover:bg-[#fbf7ee]"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Paixão Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dfd5] bg-white text-[#080f1d] shadow-xs transition-all hover:border-[#d4a862] hover:bg-[#fbf7ee]"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de consultar sobre meus direitos e agendar uma consultoria jurídica com a Paixão Advocacia."
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
              className="grid size-11 place-items-center rounded-lg border border-[#e5dfd5] bg-white text-[#080f1d] shadow-xs lg:hidden"
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
                className="overflow-hidden border-t border-[#e5dfd5] bg-[#f9f7f4] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório", "#sobre"],
                    ["Especialidades Jurídicas", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold text-[#080f1d] hover:text-[#d4a862]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#060d18] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#f7df9e] shadow-md transition-all hover:bg-[#0e1e34]"
                      href={getWhatsAppUrl(
                        "Olá! Gostaria de consultar sobre a minha situação jurídica com a Paixão Advocacia."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e5dfd5] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#080f1d] transition-all hover:border-[#d4a862]"
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

        {/* Hero Section - Warm Alabaster Silk Aesthetic with Sovereign Navy & Imperial Gold Accents */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e5dfd5] bg-gradient-to-b from-[#f9f7f4] via-[#f4f0ea] to-[#f9f7f4]"
        >
          {/* Subtle warm champagne & imperial gold glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-[#dfb772]/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-[#d4a862]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              {/* Sovereign Navy and Gold authority badge */}
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#dfb772]/40 bg-[#060d18] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f7df9e] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#dfb772]" />
                <span>AR PAIXÃO · ADVOCACIA E CONSULTORIA JURÍDICA · SARZEDO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-[#080f1d] sm:text-5xl lg:text-[3.85rem]"
              >
                Defesa jurídica estratégica, firmeza processual e excelência para{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#080f1d] via-[#9e6f2d] to-[#d4a862]">
                  você e sua família.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#3e4d60] sm:text-base sm:leading-8"
              >
                ⚖️ <strong className="font-semibold text-[#080f1d]">Nota máxima 5,0 ★ com 147 avaliações no Google Meu Negócio.</strong> Protegemos seus filhos, seu patrimônio e seus direitos com atuação especializada em <span className="text-[#080f1d] font-semibold">Família, Divórcio, Sucessões, Cível e Trabalhista</span>, unindo rigor técnico, discrição e acolhimento humano.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar sobre meus direitos e agendar um atendimento com a Paixão Advocacia."
                  )}
                  target="_blank"
                  size="lg"
                  variant="navy"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com o Escritório
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#e5dfd5] pt-6 text-xs text-[#3e4d60]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#080f1d] transition-colors hover:text-[#9e6f2d]"
                >
                  <Star size={15} className="fill-[#d4a862] text-[#d4a862]" />{" "}
                  5,0 estrelas no Google (147 avaliações verificadas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-[#9e6f2d]" /> Atendimento de Segunda a Sexta
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#9e6f2d]" /> Sede no Centro de Sarzedo - MG & Online para Todo o Brasil
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Paixão Advocacia */}
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
              <div className="relative aspect-[4/5.2] overflow-hidden rounded-2xl border-2 border-[#e5dfd5] bg-white shadow-2xl ring-1 ring-[#dfb772]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Paixão Advocacia e Advogados Associados — Advocacia de Excelência em Sarzedo"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#060d18] via-[#060d18]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Paixão Advocacia
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dfb772]">
                      Advogados Associados · Consultoria Jurídica
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#dfb772]/40 bg-[#060d18]/90 text-[#f7df9e] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Authority badge */}
              <div className="absolute -left-3 bottom-28 z-10 rounded-lg border border-[#e5dfd5] bg-white px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#080f1d] shadow-card sm:-left-5">
                <span className="text-[#9e6f2d]">●</span> SARZEDO - MG · ATENDIMENTO NACIONAL
              </div>

              {/* Floating Google rating badge */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#e5dfd5] bg-white p-3.5 shadow-card transition-all hover:scale-105 hover:border-[#d4a862] sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#d4a862] text-[#d4a862]" />
                    <span className="font-serif text-base font-bold text-[#080f1d]">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#3e4d60]">
                  147 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - High Contrast Deep Sovereign Navy Authority Band */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-y border-[#dfb772]/20 bg-[#060d18] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima de excelência no Google com 147 avaliações",
              ],
              [
                "147+",
                "clientes e famílias assessorados com satisfação comprovada",
              ],
              [
                "Família & Cível",
                "especialistas em divórcio, guarda, pensão, inventário e contratos",
              ],
              [
                "Sarzedo & Online",
                "sede no Centro de Sarzedo e assessoria para todo o Brasil",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#dfb772]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#dfb772] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#c8d8ec]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Escritório - Editorial Warm Studio Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#e5dfd5] bg-white py-20 text-[#080f1d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#e5dfd5] bg-white shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Paixão Advocacia e Advogados Associados — Defesa Jurídica Humanizada e Estratégica"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#060d18]/90 via-[#060d18]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Sovereign Navy & Gold Contrast */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#dfb772]/40 bg-[#060d18] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#dfb772]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfb772]">
                    Advocacia Humanizada & Especializada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Paixão Advocacia
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#dfb772]">
                  Advogados Associados · Consultoria Jurídica
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#c8d8ec]">
                  Sarzedo - MG · R. dos Rodoviários, 103 - Loja 205
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#d4a862]/50 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#9e6f2d]/30 bg-[#f9f7f4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9e6f2d] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#d4a862]" />
                <span>CONHEÇA A PAIXÃO ADVOCACIA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#080f1d] sm:text-4xl lg:text-[3.25rem]"
              >
                Muito além do processo: uma{" "}
                <span className="italic text-[#9e6f2d]">
                  defesa leal, combativa e intransigente ao seu lado.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#3e4d60]"
              >
                Fundada com o firme compromisso de oferecer uma advocacia de alta precisão técnica e amparo verdadeiramente humanizado, a{" "}
                <strong className="font-bold text-[#080f1d]">
                  Paixão Advocacia e Advogados Associados
                </strong>{" "}
                consolidou-se como um dos escritórios mais respeitados e bem avaliados de Sarzedo e de toda a Região Metropolitana de Belo Horizonte.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#3e4d60]"
              >
                Compreendemos que causas que envolvem família, guarda de filhos, divórcio, inventário de patrimônio, danos morais ou direitos laborais trazem angústia e impacto direto na vida de nossos clientes. Por isso, aliamos <strong className="font-bold text-[#080f1d]">sensibilidade para escutar e postura intransigente para defender</strong>, orientando cada etapa com transparência, agilidade e lealdade absoluta.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e5dfd5] bg-[#f9f7f4] p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#080f1d]">
                  &ldquo;Profissional extremamente competente, dedicada e atenciosa. Conseguiu resolver meu caso com uma rapidez impressionante e sempre me manteve informada de tudo com clareza. Recomendo de olhos fechados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#9e6f2d]">
                  — Avaliação Verificada no Google Meu Negócio (5,0 ★ · 147 Avaliações)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#080f1d] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4a862]" />
                  <span>Nota máxima 5,0 ★ com 147 avaliações no Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4a862]" />
                  <span>Especialistas em Família, Divórcio, Sucessões e Cível</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4a862]" />
                  <span>Atendimento próximo, transparente e sem juridiquês</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4a862]" />
                  <span>Sede no Centro de Sarzedo e atendimento online no Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta sobre o meu caso com a Paixão Advocacia."
                  )}
                  target="_blank"
                  size="md"
                  variant="navy"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Escritório
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#080f1d] transition-colors hover:text-[#9e6f2d]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Especialidades Jurídicas Paixão Advocacia - Warm Studio Tint with Crisp White Cards */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#e5dfd5] bg-[#f4f0ea] py-20 sm:py-28 lg:py-32"
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
                description="Especialização técnica, rigor processual e acolhimento humano para resguardar seus filhos, sua família e seu patrimônio."
              >
                Atuação jurídica especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#080f1d] via-[#9e6f2d] to-[#d4a862]">
                  Família, Sucessões, Cível e Trabalho.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#3e4d60]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e5dfd5] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4a862] hover:shadow-card-hover sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#e5dfd5] bg-[#f9f7f4] text-[#080f1d] shadow-xs transition-colors group-hover:border-[#d4a862] group-hover:bg-[#060d18] group-hover:text-[#f7df9e]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl font-semibold text-[#d4a862]/60">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#e5dfd5] bg-[#f9f7f4] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#080f1d]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#080f1d]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#3e4d60]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9e6f2d] hover:text-[#080f1d]"
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

        {/* Por Que Escolher a Paixão Advocacia - Os 4 Pilares de Excelência (Navy Authority Section) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#dfb772]/20 bg-[#060d18] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="REPUTAÇÃO COMPROVADA NO GOOGLE"
                description="Os pilares de Rapidez, Ética, Eficiência e Humanidade reconhecidos em 147 avaliações 5 estrelas em Sarzedo."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbf7ee] via-[#f7df9e] to-[#dfb772]">
                  Paixão Advocacia?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de consultar sobre a minha situação jurídica com a Paixão Advocacia."
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
              <div className="flex flex-col rounded-xl border border-[#dfb772]/20 bg-[#0a1526] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dfb772]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dfb772]/30 bg-[#060d18] text-[#dfb772]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Rápida (Agilidade)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d8ec]">
                  Agilidade e celeridade nos pedidos, elaboração técnica tempestiva e respostas imediatas a cada dúvida do cliente.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dfb772]">
                  &ldquo;Rapidez impressionante no processo&rdquo;
                </span>
              </div>

              {/* Pilar 2: Ética */}
              <div className="flex flex-col rounded-xl border border-[#dfb772]/20 bg-[#0a1526] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dfb772]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dfb772]/30 bg-[#060d18] text-[#dfb772]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Ética (Integridade)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d8ec]">
                  Conduta profissional ilibada, sigilo estrito de dados e orientação sincera, transparente e sem falsas promessas.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dfb772]">
                  &ldquo;Ética e transparência absolutas&rdquo;
                </span>
              </div>

              {/* Pilar 3: Eficiente */}
              <div className="flex flex-col rounded-xl border border-[#dfb772]/20 bg-[#0a1526] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dfb772]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dfb772]/30 bg-[#060d18] text-[#dfb772]">
                  <Scale size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Eficiente (Resultados)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d8ec]">
                  Estratégias jurídicas afiadas e fundamentadas nas mais recentes jurisprudências, focadas na máxima eficácia e economia.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dfb772]">
                  &ldquo;Resultados concretos e seguros&rdquo;
                </span>
              </div>

              {/* Pilar 4: Humana */}
              <div className="flex flex-col rounded-xl border border-[#dfb772]/20 bg-[#0a1526] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#dfb772]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#dfb772]/30 bg-[#060d18] text-[#dfb772]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Humana (Acolhimento)
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c8d8ec]">
                  Escuta ativa e empática, entendendo que cada caso envolve pessoas reais, famílias e histórias que merecem respeito total.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#dfb772]">
                  &ldquo;Acolhimento de verdade em cada etapa&rdquo;
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
                className="group flex flex-col justify-between rounded-xl border border-[#dfb772]/25 bg-[#0a1526] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#dfb772]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfb772]/30 bg-[#060d18] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f7df9e]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#dfb772]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Paciência, Escuta Ativa & Verdade Acima de Tudo
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#c8d8ec]">
                    Sabemos que momentos de conflito familiar, divórcio, disputa de guarda ou litígios patrimoniais trazem insegurança. Na Paixão Advocacia, você é ouvido com total respeito, sem pressa e com atenção aos mínimos detalhes.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dfb772]" />
                      <span>Contato direto pelo WhatsApp e acompanhamento próximo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dfb772]" />
                      <span>Prioridade absoluta aos direitos e à dignidade dos envolvidos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dfb772]" />
                      <span>Explicações claras em cada etapa, sem termos técnicos indecifráveis</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfb772]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de conversar diretamente com a Paixão Advocacia sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfb772]/30 bg-[#060d18] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f7df9e] transition-all hover:border-[#dfb772] hover:bg-[#0e1e34] hover:text-white"
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
                className="group flex flex-col justify-between rounded-xl border border-[#dfb772]/25 bg-[#0a1526] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#dfb772]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfb772]/30 bg-[#060d18] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f7df9e]">
                      <Scale size={14} /> Estratégia & Combate
                    </span>
                    <span className="text-xs font-semibold text-[#dfb772]">
                      Postura Firme
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Decisões Jurídicas Exigem Estratégia, Não Impulso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#c8d8ec]">
                    Agir por impulso pode custar a convivência com um filho ou a perda de um patrimônio conquistado com esforço. Traçamos planos de ação jurídicos consistentes, reunindo provas e fundamentação robusta para salvaguardar seus direitos.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dfb772]" />
                      <span>Especialização técnica profunda em Família, Sucessões e Cível</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dfb772]" />
                      <span>Postura combativa e leal em audiências e negociações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#dfb772]" />
                      <span>Proteção patrimonial preventiva e combate à ocultação de bens</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfb772]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Preciso de ajuda jurídica para analisar meu caso com a Paixão Advocacia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfb772]/30 bg-[#060d18] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f7df9e] transition-all hover:border-[#dfb772] hover:bg-[#0e1e34] hover:text-white"
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
        <section className="relative overflow-hidden bg-[#f9f7f4] py-20 text-[#080f1d] sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#dfb772]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#d4a862]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota máxima de 5,0 ★ com 147 avaliações no Google reflete a dedicação e o respeito incondicional a cada cliente que busca amparo em nosso escritório."
              >
                Cuidamos da sua causa com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#080f1d] via-[#9e6f2d] to-[#d4a862]">
                  ética, transparência e acolhimento total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e5dfd5] bg-white p-6 font-serif text-base italic leading-7 text-[#080f1d] shadow-card">
                &ldquo;Trabalho feito com maestria e ética. Nota máxima merecidíssima pelas 147 avaliações no Google. Transmitem total paz e segurança jurídica!&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#9e6f2d]">
                  — Avaliação Verificada no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e5dfd5]"
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
                  <span className="font-serif text-2xl font-bold text-[#d4a862]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#080f1d]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#3e4d60]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 147 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#e5dfd5] bg-[#f4f0ea] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações de clientes que confiaram suas causas à Paixão Advocacia e Advogados Associados em Sarzedo."
              >
                Avaliada com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#080f1d] via-[#9e6f2d] to-[#d4a862]">
                  competência, empatia e ética comprovada.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e5dfd5] bg-white p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#e5dfd5] bg-[#f9f7f4] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#080f1d]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#d4a862]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#d4a862] text-[#d4a862]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#080f1d]">
                    Paixão Advocacia e Advogados Associados
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#9e6f2d] transition-colors hover:text-[#080f1d]"
                  >
                    147 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e5dfd5] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4a862] hover:shadow-card-hover sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#d4a862]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d4a862] text-[#d4a862]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#3e4d60]">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#e5dfd5] bg-[#f9f7f4] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#080f1d]">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#080f1d]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e5dfd5] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#e5dfd5] bg-[#f9f7f4] font-serif text-sm font-semibold text-[#080f1d]">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#080f1d]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#64748b]">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e5dfd5] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advocacia em Sarzedo - MG",
                  "Especialista em Direito de Família",
                  "Guarda e Pensão Alimentícia",
                  "Divórcio Consensual e Litigioso",
                  "Inventário em Cartório e Judicial",
                  "Nota 5,0 no Google com 147 Avaliações",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5dfd5] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#080f1d] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#d4a862]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#9e6f2d] transition-colors hover:text-[#080f1d]"
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

        {/* Contato & Localização da Sede em Sarzedo (Deep Sovereign Navy Section) */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#dfb772]/20 bg-[#060d18] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                dark
                eyebrow="CONTATO & ATENDIMENTO"
                description="Inicie seu atendimento diretamente pelo WhatsApp. Prestamos assistência ágil para clientes de Sarzedo, Betim, Ibirité, Contagem, Belo Horizonte e consultoria jurídica online para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbf7ee] via-[#f7df9e] to-[#dfb772]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento com a Paixão Advocacia."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#c8d8ec]">
                  WhatsApp e Telefone do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#c8d8ec]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dfb772]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira · das 09:00 às 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial no escritório e consultoria jurídica online
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#dfb772]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#dfb772]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#dfb772]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#dfb772] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#dfb772]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#dfb772] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dfb772]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#dfb772]/25 bg-[#0a1526] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#dfb772] to-[#f7df9e]" />

              <div className="flex items-center gap-4">
                <div className="relative h-[85px] w-[240px] shrink-0 sm:h-[94px] sm:w-[280px]">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Paixão Advocacia e Advogados Associados"
                    fill
                    sizes="(max-width: 640px) 240px, 280px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#c8d8ec]">
                <strong className="font-semibold text-white">
                  Paixão Advocacia e Advogados Associados
                </strong>
                <br />
                AR Paixão · Advocacia e Consultoria Jurídica
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#dfb772]/20 bg-[#060d18] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#dfb772]">
                  Atendimento & Disponibilidade
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Horário Comercial</span>
                  <span className="text-right font-semibold text-white">
                    09:00 às 18:00 (Seg a Sex)
                  </span>
                  <span>Modalidade</span>
                  <span className="text-right text-[#f7df9e]">
                    Presencial & Online
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-stone-200">Centro, Sarzedo - MG</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#dfb772]/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Atendimento humanizado, ético e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento no escritório com a Paixão Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dfb772]/30 bg-[#060d18] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f7df9e] transition-colors hover:border-[#dfb772] hover:bg-[#0e1e34] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar com o Escritório <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#dfb772]/20 bg-gradient-to-r from-[#060d18] via-[#0a1526] to-[#060d18] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfb772]">
                <Sparkles size={13} /> PAIXÃO ADVOCACIA E ADVOGADOS ASSOCIADOS · SARZEDO - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Decisões jurídicas exigem estratégia, não impulso.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de consultar sobre meus direitos com a Paixão Advocacia."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#9e6f2d] via-[#d4a862] to-[#9e6f2d] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#dfb772]/20 bg-[#040912] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Paixão Advocacia e Advogados Associados"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[72px] w-[240px]">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Paixão Advocacia e Advogados Associados - Logo Oficial"
                    fill
                    sizes="240px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#c8d8ec]">
                ⚖️ Defesa jurídica humanizada e estratégica para você e sua família. Nota máxima 5,0 ★ no Google com 147 avaliações em Sarzedo e assessoria para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#dfb772]">
                AR Paixão · Advocacia e Consultoria Jurídica
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfb772]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#c8d8ec]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Escritório
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfb772]">
                Contato & Sede
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#c8d8ec]">
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de solicitar um atendimento com a Paixão Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f7df9e]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#dfb772]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · 09:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#dfb772]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} PAIXÃO ADVOCACIA E ADVOGADOS ASSOCIADOS · AR PAIXÃO. Todos os direitos reservados.
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
              "Olá! Gostaria de consultar sobre meus direitos com a Paixão Advocacia."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Paixão Advocacia"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#060d18] border border-[#dfb772]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar no WhatsApp
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#e5dfd5] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10 text-[#080f1d]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e5dfd5] bg-[#f9f7f4] text-[#080f1d] transition-colors hover:border-[#d4a862] hover:bg-[#fbf7ee]"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#080f1d] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#3e4d60]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e5dfd5] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9e6f2d]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#080f1d]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#d4a862]" />
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
                    className="px-5 py-3 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#080f1d]"
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
