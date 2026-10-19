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

const WHATSAPP_NUMBER = "5533988845617";
const PHONE_DISPLAY = "(33) 98884-5617";
const EMAIL_CONTACT = "contato@marquesiniadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/chmarquesini/";
const INSTAGRAM_HANDLE = "@chmarquesini";

const ADDRESS_TEXT =
  "R. Pres. Tancredo Neves, 494 - Centro, Mantena - MG, 35290-065 · Atendimento Presencial & Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Dr.+Chaiane+Marquesini+%E2%80%94+Advogado%0AMantena+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_WHITE_SRC = "/logo.png";
const LOGO_SEAL_SRC = "/logo-seal.png";
const LOGO_MONOGRAM_SRC = "/logo-seal.png";
const FOTO_HERO_SRC = "/dr-chaiane-hero.png";
const FOTO_SOBRE_SRC = "/dr-chaiane-about.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Chaiane Marquesini! Gostaria de consultar sobre a minha situação jurídica e agendar um atendimento com a Marquesini Advocacia.";
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
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Indenizações & Litígios",
    icon: Gavel,
    tag: "Indenizações · Danos Morais · Contratos · Possessórias",
    summary:
      "Reparação por prejuízos materiais e morais, recuperação de processos mal conduzidos ou arquivados, litígios contratuais, possessórios e defesa patrimonial.",
    details:
      "O Dr. Chaiane Marquesini e a Marquesini Advocacia são amplamente reconhecidos em Mantena e região pela combatividade na defesa dos interesses de seus clientes. Atuamos com extrema firmeza em ações indenizatórias, reparações por danos morais, disputas imobiliárias e contratos, além de assumir e reverter causas complexas com estratégias processuais vitoriosas.",
    topics: [
      "Ações indenizatórias por danos morais e materiais decorrentes de condutas lesivas e inscrições indevidas",
      "Assunção estratégica de processos paralisados, arquivados ou mal conduzidos com histórico comprovado de reversão",
      "Elaboração, revisão e rescisão de contratos civis, rurais, comerciais e imobiliários",
      "Ações possessórias, usucapião, reintegração de posse e regularização registral de imóveis",
      "Execuções judiciais de títulos de crédito e recuperação célere de haveres",
      "Defesa processual contenciosa em todas as instâncias judiciais",
    ],
    whatsAppText:
      "Olá, Dr. Chaiane Marquesini! Preciso de assessoria jurídica na área Cível / Indenizações com a Marquesini Advocacia.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família, Divórcio & Sucessões",
    icon: Users,
    tag: "Divórcio · Guarda · Pensão · Inventário · Partilha",
    summary:
      "Divórcios ágeis em cartório e judiciais, proteção do interesse dos filhos, partilha justa de bens e inventários sem burocracias desnecessárias.",
    details:
      "Causas que envolvem relações familiares e herança exigem sensibilidade humana e precisão estratégica. Prestamos assessoria completa em divórcios consensuais e litigiosos, fixação e revisão de alimentos, guarda e regime de convivência, além de inventários extrajudiciais e judiciais para regularização rápida do patrimônio herdado.",
    topics: [
      "Divórcio extrajudicial em cartório rápido e econômico, e divórcio judicial litigioso",
      "Partilha de bens e blindagem patrimonial contra ocultação de ativos",
      "Ações de fixação, revisão, exoneração e execução coercitiva de pensão alimentícia",
      "Regulamentação de guarda unilateral ou compartilhada e convivência familiar",
      "Inventário em cartório e judicial célere com otimização tributária de ITCMD",
      "Reconhecimento e dissolução de união estável com partilha justa de patrimônio",
    ],
    whatsAppText:
      "Olá, Dr. Chaiane Marquesini! Gostaria de consultar sobre Família, Divórcio ou Inventário com a Marquesini Advocacia.",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: Scale,
    tag: "Aposentadorias · Auxílio-Doença · BPC/LOAS · Pensão",
    summary:
      "Concessão e restabelecimento de aposentadorias urbanas e rurais, auxílio por incapacidade temporária, BPC/LOAS e revisões previdenciárias.",
    details:
      "Garantimos que trabalhadores rurais e urbanos tenham seus direitos previdenciários plenamente respeitados frente ao INSS. Atuamos na esfera administrativa e judicial para destravar benefícios negados, com montagem documental minuciosa e celeridade nos pedidos de tutela de urgência.",
    topics: [
      "Aposentadoria por idade e tempo de contribuição (urbana e segurado especial rural)",
      "Aposentadoria especial para atividades insalubres ou perigosas",
      "Auxílio por incapacidade temporária (auxílio-doença) e aposentadoria por incapacidade permanente",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos e pessoas com deficiência",
      "Pensão por morte e auxílio-reclusão para dependentes previdenciários",
      "Ações judiciais para restabelecimento imediato de benefícios indevidamente cessados pelo INSS",
    ],
    whatsAppText:
      "Olá, Dr. Chaiane Marquesini! Gostaria de uma análise sobre meu benefício do INSS / Aposentadoria com a Marquesini Advocacia.",
  },
  {
    id: "direito-trabalhista-trabalhador",
    title: "Direito do Trabalho & Defesa dos Trabalhadores",
    icon: Briefcase,
    tag: "Rescisão Indireta · Verbas · Horas Extras · Insalubridade",
    summary:
      "Defesa combativa de direitos laborais, rescisão indireta por faltas patronais, cobrança de verbas rescisórias integrais e combate a abusos no trabalho.",
    details:
      "Compreendemos o valor do trabalho e a necessidade de receber cada centavo devido pela lei. Representamos trabalhadores em reclamações trabalhistas contundentes para recebimento de verbas não pagas, horas extras habituais, adicionais legais e reparações por acidentes de trabalho.",
    topics: [
      "Cobrança de rescisão integral: saldo de salário, aviso prévio, férias, 13º e multa de 40% do FGTS",
      "Rescisão Indireta do contrato de trabalho decorrente de descumprimentos graves do empregador",
      "Horas extras habituais não quitadas e supressão de intervalos intrajornada",
      "Adicionais de insalubridade e periculosidade devidos e não pagos",
      "Reconhecimento de vínculo empregatício sem carteira assinada e direitos retroativos",
      "Indenizações por acidentes de trabalho, doenças ocupacionais e assédio moral",
    ],
    whatsAppText:
      "Olá, Dr. Chaiane Marquesini! Gostaria de consultar sobre meus Direitos Trabalhistas com a Marquesini Advocacia.",
  },
  {
    id: "direito-do-consumidor-bancario",
    title: "Direito do Consumidor & Defesa contra Bancos",
    icon: ShieldCheck,
    tag: "Fraudes Bancárias · Juros Abusivos · SPC/Serasa · Golpes Pix",
    summary:
      "Defesa enérgica contra instituições bancárias, cancelamento de empréstimos fraudulentos, combate a juros extorsivos e exclusão de cadastros indevidos.",
    details:
      "Abusos bancários e falhas de segurança exigem resposta jurídica imediata. Atuamos com rigor contra descontos indevidos em aposentadorias e folhas de pagamento, contratos com taxas de juros fora do padrão legal, fraudes no Pix e inscrições ilegais no SPC e Serasa com pedido de indenização.",
    topics: [
      "Ações contra empréstimos consignados não contratados e descontos indevidos em benefícios",
      "Recuperação de perdas e responsabilização de instituições financeiras por golpes e fraudes bancárias",
      "Revisão de cláusulas contratuais e repetição de indébito de cobranças abusivas",
      "Exclusão liminar de apontamentos negativos indevidos no SPC, Serasa e órgãos de proteção",
      "Ações indenizatórias por danos morais decorrentes de cobranças vexatórias",
      "Defesa perante concessionárias de serviços públicos, telefonia e seguradoras",
    ],
    whatsAppText:
      "Olá, Dr. Chaiane Marquesini! Preciso de ajuda com cobranças indevidas / problemas bancários com a Marquesini Advocacia.",
  },
  {
    id: "consultoria-preventiva-acordos",
    title: "Consultoria Preventiva, Contratos & Acordos",
    icon: HeartHandshake,
    tag: "Segurança Contratual · Mediação · Pareceres · Negociação",
    summary:
      "Prevenção de litígios desgastantes, assessoria em negociações patrimoniais e formalização de acordos judiciais e extrajudiciais com validade irrestrita.",
    details:
      "Uma consultoria jurídica preventiva estratégica evita prejuízos vultosos e anos de desgastes nos tribunais. Assessoramos pessoas físicas, produtores rurais e famílias em negócios jurídicos seguros, elaboração de minutas contratuais e mediação consensual de disputas.",
    topics: [
      "Assessoria jurídica preventiva para compra e venda segura de imóveis urbanos e propriedades rurais",
      "Elaboração de pactos pré-nupciais, minutas de acordo e contratos patrimoniais",
      "Mediação extrajudicial e homologação rápida de termos de composição em juízo",
      "Análise de riscos contratuais e emissão de pareceres jurídicos conclusivos",
      "Renegociação equilibrada de dívidas com respaldo legal e proteção de bens",
      "Acompanhamento direto e consultoria continuada pelo WhatsApp",
    ],
    whatsAppText:
      "Olá, Dr. Chaiane Marquesini! Gostaria de agendar uma Consultoria Preventiva / Elaboração de Contrato com a Marquesini Advocacia.",
  },
];

const clientReviews = [
  {
    name: "Weverton Moreira",
    reviewsCount: "Local Guide · 6 avaliações · 7 fotos no Google",
    date: "Google Meu Negócio",
    badge: "ganhou o processo",
    content:
      "Melhor advogado que conheço, já passei por outro advogado que me deixou na mão, e o processo foi arquivado, mas com Dr. Chaiane Marquesini foi totalmente diferente, ele assumiu o caso e ainda ganhou o processo, e tantos outros casos que passei pra ele, e ele sempre ganhou, super recomendo, pra mim e pra muitas outras pessoas tenho certeza que é o melhor advogado da Região. Só tenho a agradecer.",
  },
  {
    name: "Silvia Alves Nogueira",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "receptividade & qualidade",
    content:
      "Excelente profissional, amigo, muito bem informado, educado, muito atencioso em prestar o seu melhor atendimento para o cliente. Super recomendo os serviços Marquesini Advocacia!! Receptividade, Qualidade, Profissionalismo, Valor.",
  },
  {
    name: "Fabio Souza",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "altamente recomendado",
    content:
      "Altamente recomendado posso dizer com toda a certeza que Doutor Chaiane é excelente profissional da área da advocacia, ele é extremamente competente e atencioso para com seus clientes e suas causas, digo e afirmo isso por minha própria experiência com seus serviços.",
  },
  {
    name: "Juliana Jv",
    reviewsCount: "Local Guide · 2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "atendeu super bem",
    content:
      "Excelente profissional, atendeu minha mãe super bem, resolveu tudo pra gente! Muito atencioso... Recomendo demais seu trabalho.",
  },
  {
    name: "Jesus Costa",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "eficiência & sucesso",
    content:
      "Foi muito bom o atendimento. Muito eficiente. E tivemos sucesso no serviço. Eu recomendo o Dr. Chaiane Marquesini.",
  },
  {
    name: "Dulcylena Gonçalves",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "amor e dedicação",
    content:
      "Dr Chaiane Ótimo profissional, super recomendo trabalho com confiança amor e dedicação no que faz.",
  },
  {
    name: "Eva Candida",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "competência em 1º lugar",
    content:
      "Muito bom, competência em primeiro lugar por isso. Eu indico todos que eu saber que precisa do seu trabalho.",
  },
  {
    name: "Abgail Rebuli",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "correto e justo",
    content:
      "Ótimo profissional correto e justo ficamos muito satisfeitos com o atendimento e o profissionalismo.",
  },
  {
    name: "Gedivaldo Vaz Sousa",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "pode confiar",
    content:
      "Bom atendimento ótimo preço boa qualidade de trabalho muito prestativo, e o mais importante pode confiar no seu trabalho...",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  dark = true,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#a1a1aa]">
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
      <main className="overflow-hidden bg-[#09090b] text-white selection:bg-[#deb26a] selection:text-[#09090b]">
        {/* Navigation Bar - Pure Obsidian & Gold Executive Aesthetic */}
        <header className="sticky top-0 z-40 border-b border-[#27272e] bg-[#09090b]/95 backdrop-blur-xl transition-colors">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dr. Chaiane Marquesini — Marquesini Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative h-[68px] w-[240px] sm:h-[82px] sm:w-[290px] md:h-[88px] md:w-[310px]">
                <Image
                  src={LOGO_SRC}
                  alt="Dr. Chaiane Marquesini — Marquesini Advocacia - Logo Oficial"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 290px, 310px"
                  className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
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
                O Advogado
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
                aria-label="Instagram do Dr. Chaiane Marquesini"
                className="grid size-10 place-items-center rounded-lg border border-[#27272e] bg-[#18181c] text-[#d4d4d8] shadow-xs transition-all hover:border-[#deb26a] hover:bg-[#202026] hover:text-[#deb26a]"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Marquesini Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#27272e] bg-[#18181c] text-[#d4d4d8] shadow-xs transition-all hover:border-[#deb26a] hover:bg-[#202026] hover:text-[#deb26a]"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Marquesini Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#27272e] bg-[#18181c] text-[#d4d4d8] shadow-xs transition-all hover:border-[#deb26a] hover:bg-[#202026] hover:text-[#deb26a]"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Chaiane! Gostaria de uma consultoria jurídica sobre meus direitos com a Marquesini Advocacia."
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
              className="grid size-11 place-items-center rounded-lg border border-[#27272e] bg-[#18181c] text-white shadow-xs lg:hidden"
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
                className="overflow-hidden border-t border-[#27272e] bg-[#121215] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Advogado", "#sobre"],
                    ["Especialidades Jurídicas", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold text-[#d4d4d8] hover:text-[#deb26a]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#deb26a] via-[#f5dfad] to-[#deb26a] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#09090b] shadow-md transition-all hover:brightness-110"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Chaiane! Gostaria de consultar sobre a minha situação jurídica com a Marquesini Advocacia."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#27272e] bg-[#18181c] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-all hover:border-[#deb26a]"
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

        {/* Hero Section - Executive Carbon & Sovereign Gold Aesthetic */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#27272e] bg-gradient-to-b from-[#09090b] via-[#121215] to-[#09090b]"
        >
          {/* Subtle warm amber & metallic gold glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-[#c69a4c]/8 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-[#deb26a]/8 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              {/* Sovereign Carbon and Gold authority badge */}
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#deb26a]/40 bg-[#18181c] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#deb26a] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#deb26a] shadow-[0_0_8px_#deb26a]" />
                <span>DR. CHAIANE MARQUESINI · MARQUESINI ADVOCACIA · MANTENA - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Defesa jurídica estratégica, firmeza processual e excelência para{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  você e sua causa.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#a1a1aa] sm:text-base sm:leading-8"
              >
                ⚖️ <strong className="font-semibold text-white">Nota máxima 5,0 ★ com 56 avaliações no Google Meu Negócio.</strong> Advocacia combativa e de alto padrão liderada pelo <span className="font-semibold text-white">Dr. Chaiane Marquesini</span>. Atuação resolutiva com foco em vitórias processuais, reversão de causas complexas e proteção integral dos seus direitos em <span className="text-[#deb26a] font-semibold">Cível, Família, Sucessões, Previdenciário (INSS), Consumidor e Trabalhista</span>.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Chaiane Marquesini! Gostaria de consultar sobre meus direitos e agendar um atendimento com a Marquesini Advocacia."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com o Dr. Chaiane
                </GlowingButton>
                <GlowingButton
                  href="#atuacao"
                  size="lg"
                  variant="navy"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#27272e] pt-6 text-xs text-[#a1a1aa]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#deb26a]"
                >
                  <Star size={15} className="fill-[#deb26a] text-[#deb26a]" />{" "}
                  5,0 estrelas no Google (56 avaliações verificadas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-[#deb26a]" /> Seg. a Sex. das 08:00 às 18:00
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#deb26a]" /> Sede no Centro de Mantena - MG & Online para Todo o Brasil
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dr. Chaiane Marquesini */}
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
              <div className="relative aspect-[4/5.2] overflow-hidden rounded-2xl border-2 border-[#27272e] bg-[#121215] shadow-2xl ring-1 ring-[#deb26a]/30">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Chaiane Marquesini — Advogado · Marquesini Advocacia em Mantena - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dr. Chaiane Marquesini
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#deb26a]">
                      Advogado Titular · Marquesini Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#deb26a]/40 bg-[#18181c]/90 text-[#deb26a] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Authority badge */}
              <div className="absolute -left-3 bottom-28 z-10 rounded-lg border border-[#27272e] bg-[#18181c]/95 backdrop-blur-md px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-white shadow-card sm:-left-5">
                <span className="text-[#deb26a]">●</span> MANTENA - MG · ATENDIMENTO NACIONAL
              </div>

              {/* Floating Google rating badge */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#27272e] bg-[#18181c]/95 backdrop-blur-md p-3.5 shadow-card transition-all hover:scale-105 hover:border-[#deb26a] sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#deb26a] text-[#deb26a]" />
                    <span className="font-serif text-base font-bold text-white">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#a1a1aa]">
                  56 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - High Contrast Deep Carbon Authority Band */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-y border-[#27272e] bg-[#121215] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima de excelência no Google com 56 avaliações",
              ],
              [
                "100% 5★",
                "reconhecimento unânime por vitórias e dedicação às causas",
              ],
              [
                "Atuação Ampla",
                "Cível, Família, INSS, Consumidor, Trabalho e Contratos",
              ],
              [
                "Mantena & Online",
                "sede no Centro de Mantena - MG e assessoria em todo o Brasil",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#27272e]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#deb26a] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#a1a1aa]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Advogado - Executive Carbon Studio Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#27272e] bg-[#121215] py-20 text-white sm:py-28 lg:py-32"
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
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#27272e] bg-[#121215] shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dr. Chaiane Marquesini — Advogado Titular da Marquesini Advocacia"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Carbon & Gold Contrast */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#deb26a]/40 bg-[#18181c] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#deb26a]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#deb26a]">
                    Advocacia Combativa & Estratégica
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dr. Chaiane Marquesini
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#deb26a]">
                  Advogado Titular · Marquesini Advocacia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#a1a1aa]">
                  Mantena - MG · R. Pres. Tancredo Neves, 494 - Centro
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#deb26a]/50 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography - Executive Carbon Typography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#deb26a]/30 bg-[#18181c] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#deb26a] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#deb26a]" />
                <span>CONHEÇA O DR. CHAIANE MARQUESINI</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
              >
                Muito além do processo: uma{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  defesa leal, combativa e intransigente ao seu lado.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#a1a1aa]"
              >
                Comandado pelo <strong className="font-bold text-white">Dr. Chaiane Marquesini</strong>, o escritório <strong className="font-bold text-white">Marquesini Advocacia</strong> consolidou-se como referência de credibilidade, dedicação e vitórias processuais em Mantena, em todo o Leste Mineiro, no Noroeste Capixaba e em nível nacional por meio do atendimento jurídico digital.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#a1a1aa]"
              >
                Reconhecido pela capacidade de assumir causas desafiadoras — inclusive processos arquivados ou negligenciados — e conduzi-las com rigor técnico até o êxito, o Dr. Chaiane une <strong className="font-bold text-white">atendimento humanizado, clareza na comunicação e combatividade incansável</strong> na defesa de cada cliente.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#deb26a]/30 bg-[#18181c] p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#f4f4f5]">
                  &ldquo;Melhor advogado que conheço, já passei por outro advogado que me deixou na mão, e o processo foi arquivado, mas com Dr. Chaiane Marquesini foi totalmente diferente, ele assumiu o caso e ainda ganhou o processo... super recomendo, pra mim e pra muitas outras pessoas tenho certeza que é o melhor advogado da Região.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#deb26a]">
                  — Weverton Moreira · Avaliação Verificada no Google (5,0 ★ · 56 Avaliações)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-white sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Nota máxima 5,0 ★ com 56 avaliações no Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Especialista em Cível, Família, INSS, Trabalho e Consumidor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Atendimento próximo, transparente e sem juridiquês</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Sede no Centro de Mantena e atendimento online no Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Chaiane! Gostaria de agendar uma consulta sobre o meu caso com a Marquesini Advocacia."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Chaiane
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#deb26a]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Especialidades Jurídicas Marquesini Advocacia - Deep Obsidian with Executive Carbon Cards */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#27272e] bg-[#09090b] py-20 sm:py-28 lg:py-32"
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
                description="Especialização técnica, rigor processual e postura combativa para resguardar seus direitos, sua família e seu patrimônio."
              >
                Atuação jurídica especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  Cível, Família, INSS, Trabalho e Consumidor.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#a1a1aa]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#27272e] bg-[#18181c] p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#deb26a]/60 hover:shadow-card-hover sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#27272e] bg-[#121215] text-[#deb26a] shadow-xs transition-colors group-hover:border-[#deb26a] group-hover:bg-[#deb26a] group-hover:text-[#09090b]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl font-semibold text-[#deb26a]/40 transition-colors group-hover:text-[#deb26a]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#27272e] bg-[#121215] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#deb26a]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#a1a1aa]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#deb26a] hover:text-white"
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

        {/* Por Que Escolher a Marquesini Advocacia - Os 4 Pilares de Excelência (Carbon Authority Section) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#27272e] bg-[#09090b] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="REPUTAÇÃO COMPROVADA NO GOOGLE"
                description="Os pilares de Vitórias Processuais, Eficiência, Atendimento Dedicado e Confiança reconhecidos em 56 avaliações 5 estrelas no Google."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  Marquesini Advocacia?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Chaiane! Gostaria de consultar sobre a minha situação jurídica com a Marquesini Advocacia."
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
              {/* Pilar 1: Vitórias Processuais */}
              <div className="flex flex-col rounded-xl border border-[#27272e] bg-[#18181c] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#27272e] bg-[#121215] text-[#deb26a]">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Vitórias Processuais
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#a1a1aa]">
                  Histórico comprovado de causas ganhas, assunção de processos arquivados e dedicação intransigente até a decisão favorável.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Assumiu o caso e ainda ganhou o processo&rdquo;
                </span>
              </div>

              {/* Pilar 2: Atendimento Dedicado */}
              <div className="flex flex-col rounded-xl border border-[#27272e] bg-[#18181c] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#27272e] bg-[#121215] text-[#deb26a]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Atendimento Dedicado
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#a1a1aa]">
                  Escuta atenciosa, cordialidade e acompanhamento direto pelo WhatsApp, explicando cada etapa com clareza e sem rodeios.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Atendeu super bem, educado e atencioso&rdquo;
                </span>
              </div>

              {/* Pilar 3: Eficiência & Competência */}
              <div className="flex flex-col rounded-xl border border-[#27272e] bg-[#18181c] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#27272e] bg-[#121215] text-[#deb26a]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Eficiência & Competência
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#a1a1aa]">
                  Respostas rápidas, cumprimento rigoroso de prazos e fundamentação jurídica sólida para a máxima agilidade da sua demanda.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Muito eficiente e sucesso no serviço&rdquo;
                </span>
              </div>

              {/* Pilar 4: Confiança & Justiça */}
              <div className="flex flex-col rounded-xl border border-[#27272e] bg-[#18181c] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#27272e] bg-[#121215] text-[#deb26a]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Confiança & Justiça
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#a1a1aa]">
                  Conduta correta, justa e ética, cobrando honorários justos e trabalhando com verdadeiro amor e dedicação à profissão.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Correto e justo, pode confiar no trabalho&rdquo;
                </span>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Acolhimento & Escuta Atenta */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#27272e] bg-[#18181c] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#deb26a]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#27272e] bg-[#121215] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f5dfad]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#deb26a]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Paciência, Escuta Ativa & Transparência Total
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#a1a1aa]">
                    Sabemos que momentos de litígio cível, divórcio, disputa previdenciária com o INSS ou cobranças indevidas trazem aflição. Na Marquesini Advocacia, você é ouvido com total respeito, atenção e orientações claras sobre cada passo a tomar.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Contato direto pelo WhatsApp e atualizações constantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Prioridade absoluta aos seus direitos e à dignidade da sua família</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Linguagem acessível, explicando seus direitos sem termos complicados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#27272e] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Chaiane! Gostaria de conversar diretamente sobre minha situação com a Marquesini Advocacia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#27272e] bg-[#121215] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5dfad] transition-all hover:border-[#deb26a] hover:bg-[#202026] hover:text-white"
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
                className="group flex flex-col justify-between rounded-xl border border-[#27272e] bg-[#18181c] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#deb26a]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#27272e] bg-[#121215] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f5dfad]">
                      <Scale size={14} /> Estratégia & Combate
                    </span>
                    <span className="text-xs font-semibold text-[#deb26a]">
                      Postura Firme
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Decisões Jurídicas Exigem Estratégia, Não Impulso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#a1a1aa]">
                    Um processo mal conduzido pode resultar em perda de bens ou no arquivamento de direitos legítimos. O Dr. Chaiane constrói estratégias processuais consistentes, unindo provas irrefutáveis e jurisprudência sólida para buscar a vitória.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Especialização técnica profunda e acompanhamento minucioso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Postura combativa, segura e respeitada em audiências e tribunais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Capacidade comprovada de reverter processos complexos e arquivados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#27272e] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Chaiane! Preciso de ajuda jurídica para analisar meu caso com a Marquesini Advocacia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#27272e] bg-[#121215] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5dfad] transition-all hover:border-[#deb26a] hover:bg-[#202026] hover:text-white"
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

        {/* Nosso Compromisso com Você - Executive Carbon Canvas */}
        <section className="relative overflow-hidden border-b border-[#27272e] bg-[#121215] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c69a4c]/8 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#deb26a]/8 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota máxima de 5,0 ★ com 56 avaliações no Google reflete a dedicação diária e o respeito incondicional a cada cliente que confia sua causa ao Dr. Chaiane Marquesini."
              >
                Cuidamos da sua causa com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  ética, combatividade e dedicação total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#27272e] bg-[#18181c] p-6 font-serif text-base italic leading-7 text-white shadow-card">
                &ldquo;Altamente recomendado! Posso dizer com toda a certeza que o Doutor Chaiane é excelente profissional da área da advocacia, ele é extremamente competente e atencioso para com seus clientes e suas causas.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#deb26a]">
                  — Fabio Souza · Avaliação Verificada no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#27272e]"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Empatia",
                  "Você é ouvido com atenção e sem julgamentos. Analisamos cada detalhe da sua história para traçar a melhor rota jurídica.",
                ],
                [
                  "02",
                  "Transparência & Comunicação Clara",
                  "Você nunca fica sem respostas. Mantemos você informado de cada passo do seu processo em linguagem acessível e transparente.",
                ],
                [
                  "03",
                  "Segurança Técnica & Combatividade por Vitórias",
                  "Lutamos incansavelmente pelo melhor resultado possível, resguardando seus direitos, sua tranquilidade e seu patrimônio.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-bold text-[#deb26a]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#a1a1aa]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 56 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#27272e] bg-[#09090b] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações reais de clientes que confiaram suas causas ao Dr. Chaiane Marquesini — Marquesini Advocacia em Mantena e região."
              >
                Avaliada com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  competência, vitórias e dedicação comprovada.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#27272e] bg-[#18181c] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#27272e] bg-[#121215] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#deb26a]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#deb26a] text-[#deb26a]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    Dr. Chaiane Marquesini — Advogado
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#deb26a] transition-colors hover:text-white"
                  >
                    56 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#27272e] bg-[#18181c] p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#deb26a]/60 hover:shadow-card-hover sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#deb26a]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#deb26a] text-[#deb26a]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#a1a1aa]">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#27272e] bg-[#121215] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#deb26a]">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#d4d4d8]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#27272e] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#27272e] bg-[#121215] font-serif text-sm font-semibold text-[#deb26a]">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#a1a1aa]">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#27272e] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advocacia em Mantena - MG",
                  "Especialista em Direito Cível e Litígios",
                  "Direito de Família, Divórcio e Inventário",
                  "Previdenciário e Benefícios do INSS",
                  "Direito Trabalhista e Consumidor",
                  "Nota 5,0 no Google com 56 Avaliações",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#27272e] bg-[#18181c] px-3.5 py-1.5 text-[11px] font-medium text-[#d4d4d8] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#deb26a]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#deb26a] transition-colors hover:text-white"
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

        {/* Contato & Localização da Sede em Mantena (Executive Carbon Section) */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#27272e] bg-[#09090b] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                dark
                eyebrow="CONTATO & ATENDIMENTO"
                description="Inicie seu atendimento diretamente pelo WhatsApp. Prestamos assistência ágil e resolutiva para clientes de Mantena, Barra de São Francisco, Leste de Minas Gerais, Noroeste Capixaba e consultoria jurídica online para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Chaiane! Gostaria de agendar um atendimento com a Marquesini Advocacia."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#a1a1aa]">
                  WhatsApp e Telefone do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#a1a1aa]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#deb26a]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira · das 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial no escritório e consultoria jurídica online
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#deb26a]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#deb26a]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#deb26a]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#deb26a] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#deb26a]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#deb26a] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#deb26a]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#27272e] bg-[#18181c] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#deb26a] to-[#f5dfad]" />

              <div className="flex items-center gap-4">
                <div className="relative h-[88px] w-[280px] shrink-0 sm:h-[100px] sm:w-[330px]">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Dr. Chaiane Marquesini — Marquesini Advocacia"
                    fill
                    sizes="(max-width: 640px) 280px, 330px"
                    className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#a1a1aa]">
                <strong className="font-semibold text-white">
                  Dr. Chaiane Marquesini — Advogado
                </strong>
                <br />
                Marquesini Advocacia
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#27272e] bg-[#121215] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#deb26a]">
                  Atendimento & Disponibilidade
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Horário Comercial</span>
                  <span className="text-right font-semibold text-white">
                    08:00 às 18:00 (Seg a Sex)
                  </span>
                  <span>Modalidade</span>
                  <span className="text-right text-[#f5dfad]">
                    Presencial & Online
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-stone-200">Centro, Mantena - MG</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#27272e]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Atendimento resolutivo, combativo e leal
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Chaiane! Gostaria de agendar um atendimento presencial ou online com a Marquesini Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#27272e] bg-[#121215] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f5dfad] transition-colors hover:border-[#deb26a] hover:bg-[#202026] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar com o Dr. Chaiane <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#27272e] bg-gradient-to-r from-[#09090b] via-[#18181c] to-[#09090b] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#deb26a]">
                <Sparkles size={13} /> DR. CHAIANE MARQUESINI · MARQUESINI ADVOCACIA · MANTENA - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Decisões jurídicas exigem estratégia, combatividade e resultados.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Chaiane! Gostaria de consultar sobre meus direitos com a Marquesini Advocacia."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#c69a4c] via-[#deb26a] to-[#c69a4c] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#09090b] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#27272e] bg-[#09090b] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Dr. Chaiane Marquesini — Marquesini Advocacia"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[275px] sm:h-[88px] sm:w-[310px]">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Dr. Chaiane Marquesini — Marquesini Advocacia - Logo Oficial"
                    fill
                    sizes="(max-width: 640px) 275px, 310px"
                    className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#a1a1aa]">
                ⚖️ Advocacia combativa, estratégica e de excelência. Nota máxima 5,0 ★ no Google com 56 avaliações em Mantena - MG e assessoria jurídica para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#deb26a]">
                Marquesini Advocacia · OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#deb26a]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#a1a1aa]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Advogado
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#deb26a]">
                Contato & Sede
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#a1a1aa]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Chaiane! Gostaria de solicitar um atendimento com a Marquesini Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f5dfad]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#deb26a]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#27272e] pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DR. CHAIANE MARQUESINI · MARQUESINI ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dr. Chaiane! Gostaria de consultar sobre meus direitos com a Marquesini Advocacia."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Chaiane Marquesini"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#18181c] border border-[#27272e] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#27272e] bg-[#18181c] p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#27272e] bg-[#121215] text-[#d4d4d8] transition-colors hover:border-[#deb26a] hover:bg-[#202026] hover:text-[#deb26a]"
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

                <p className="mt-5 text-sm leading-7 text-[#a1a1aa]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#27272e] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#deb26a]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#f4f4f5]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#deb26a]" />
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
                    className="px-5 py-3 text-xs font-semibold text-[#a1a1aa] transition-colors hover:text-white"
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
