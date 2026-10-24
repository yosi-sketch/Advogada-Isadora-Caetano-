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
  FileCheck2,
  CalendarCheck2,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535984670985";
const PHONE_DISPLAY = "(35) 98467-0985";
const EMAIL_CONTACT = "contato@oliveiraemegda.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/jeisiele.advogada/";
const INSTAGRAM_HANDLE = "@jeisiele.advogada";

const ADDRESS_TEXT =
  "R. Tomé Soares de Oliveira - Campos Gerais, MG, 37160-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Jeisiele+Oliveira+%E2%80%94+Advogada%0ACampos+Gerais+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_SOBRE_SRC = "/about.jpg";
const FOTO_CREDENTIAL_SRC = "/credential-card.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Jeisiele Oliveira! Gostaria de consultar sobre meu benefício / aposentadoria no INSS e tirar algumas dúvidas.";
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
  category: "Direito Previdenciário & Benefícios INSS";
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "beneficio-cessado-negado",
    title: "Benefício Cessado ou Negado pelo INSS",
    category: "Direito Previdenciário & Benefícios INSS",
    icon: ShieldAlert,
    tag: "Urgência · Pente-Fino · Reversão Judicial · Atrasados",
    summary:
      "Atuação rápida e combativa para restabelecer benefícios cortados indevidamente no pente-fino e reverter negativas injustas da perícia do INSS.",
    details:
      "Receber a notícia de que seu benefício foi cessado ou indeferido pelo INSS causa grande desespero, pois é dele que vem o sustento da sua família. A Dra. Jeisiele Oliveira ingressa com ações judiciais urgentes com pedido liminar e formula quesitos médicos detalhados para perícia judicial imparcial, cobrando todos os valores retroativos desde a data em que o benefício foi cortado.",
    topics: [
      "Ação judicial imediata para restabelecimento de auxílio-doença cortado no pente-fino",
      "Reversão de indeferimento de aposentadorias por falta de documentos ou erro do INSS",
      "Mandado de Segurança para destravar pedidos em análise há meses sem resposta",
      "Elaboração de quesitos periciais específicos para comprovar a incapacidade real perante o juiz",
      "Cobrança integral de todos os atrasados e retroativos devidos desde a data do cancelamento",
      "Correção e saneamento de pendências cadastrais no extrato do CNIS",
    ],
    whatsAppText:
      "Olá, Dra. Jeisiele Oliveira! Meu benefício do INSS foi cessado/negado e preciso de ajuda para reverter.",
  },
  {
    id: "beneficios-por-incapacidade",
    title: "Benefícios por Incapacidade (Auxílio & Invalidez)",
    category: "Direito Previdenciário & Benefícios INSS",
    icon: Shield,
    tag: "Auxílio-Doença · Invalidez Permanente · Auxílio-Acidente",
    summary:
      "Defesa dos trabalhadores que não conseguem exercer suas atividades por motivo de doença ou acidente, assegurando renda digna e estabilidade.",
    details:
      "Se você sofre de problemas de saúde físicos ou psicológicos que impedem o seu trabalho, a lei garante o direito a um benefício previdenciário. Conduzimos a análise técnica dos seus laudos, receitas e exames para requerer o Auxílio por Incapacidade Temporária ou a conversão em Aposentadoria por Incapacidade Permanente, além do adicional de 25% para quem precisa de cuidador.",
    topics: [
      "Concessão de Auxílio por Incapacidade Temporária (antigo Auxílio-Doença) para CLT e autônomos",
      "Aposentadoria por Incapacidade Permanente (Invalidez) em casos de incapacidade total e definitiva",
      "Acréscimo de 25% na aposentadoria por invalidez para segurados que necessitam de assistência diária",
      "Auxílio-Acidente: indenização mensal vitalícia para quem teve sequelas sem perder o emprego",
      "Acidentes de trabalho e doenças ocupacionais com garantia de estabilidade provisória",
      "Acompanhamento pericial e contestação técnica de laudos do médico do INSS",
    ],
    whatsAppText:
      "Olá, Dra. Jeisiele Oliveira! Gostaria de consultar sobre um benefício por incapacidade / auxílio-doença no INSS.",
  },
  {
    id: "aposentadorias-inss",
    title: "Aposentadorias do INSS (Idade, Tempo, Especial & Rural)",
    category: "Direito Previdenciário & Benefícios INSS",
    icon: Award,
    tag: "Regras de Transição · Aposentadoria Rural · Insalubridade (PPP)",
    summary:
      "Conquista da aposentadoria vantajosa e justa, computando tempo rural, insalubridade e escolhendo a melhor regra de transição pós-Reforma da Previdência.",
    details:
      "Muitos trabalhadores perdem anos de contribuição ou aceitam um valor mensal menor por desconhecerem as regras de transição e os períodos especiais. Analisamos minuciosamente o histórico de cada segurado para computar trabalho rural na infância/juventude, períodos insalubres com PPP e vínculos sem anotação em carteira para obter o benefício máximo.",
    topics: [
      "Aposentadoria por Idade Urbana e Híbrida (somando tempo rural e urbano)",
      "Aposentadoria por Tempo de Contribuição aplicando os pedágios favoráveis de 50% ou 100%",
      "Aposentadoria Especial para trabalhadores expostos a ruído, químicos ou agentes biológicos (saúde, indústria)",
      "Aposentadoria do Trabalhador Rural e Segurado Especial (agricultores, meeiros e boias-frias)",
      "Reconhecimento de vínculos trabalhistas sem registro em carteira e tempo informal",
      "Averbação de tempo de serviço militar e períodos como aluno-aprendiz",
    ],
    whatsAppText:
      "Olá, Dra. Jeisiele Oliveira! Gostaria de uma análise para planejar e dar entrada na minha aposentadoria.",
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS (Idosos & Pessoas com Deficiência)",
    category: "Direito Previdenciário & Benefícios INSS",
    icon: HeartHandshake,
    tag: "1 Salário Mínimo Mensal · Sem Contribuição · Idosos 65+ · PcD",
    summary:
      "Benefício assistencial de 1 salário mínimo por mês pago a idosos a partir de 65 anos e pessoas com deficiência ou autismo em famílias de baixa renda.",
    details:
      "O BPC/LOAS é um direito garantido por lei que NÃO exige ter pago o INSS. O INSS frequentemente indefere o pedido alegando que a renda familiar ultrapassa o limite da lei. Na Justiça, demonstramos os gastos reais com medicamentos, fraldas, alimentação especial e tratamentos para comprovar a necessidade e garantir a concessão do benefício com retroativos.",
    topics: [
      "Concessão do BPC/LOAS para Idosos a partir de 65 anos de idade sem histórico de contribuição",
      "Concessão do BPC/LOAS para Crianças, Jovens e Adultos com deficiência física, mental ou Autismo (TEA)",
      "Superação da regra de renda per capita de 1/4 do salário mínimo através de dedução de despesas médicas",
      "Reversão de bloqueio ou cancelamento de BPC em revisões cadastrais do CadÚnico",
      "Acompanhamento social e pericial especializado para perícias biomédicas da Justiça Federal",
      "Recebimento de todos os atrasados acumulados desde o protocolo inicial no INSS",
    ],
    whatsAppText:
      "Olá, Dra. Jeisiele Oliveira! Gostaria de consultar sobre o direito ao BPC / LOAS para mim ou um familiar.",
  },
  {
    id: "pensao-por-morte",
    title: "Pensão por Morte & Direitos dos Dependentes",
    category: "Direito Previdenciário & Benefícios INSS",
    icon: Users,
    tag: "Cônjuges · Filhos · União Estável · Salário-Maternidade",
    summary:
      "Proteção financeira imediata para a família após a perda do segurado, garantindo o benefício mesmo na ausência de certidão de casamento formal.",
    details:
      "A perda de um familiar é um momento doloroso que não pode ser agravado pela falta de sustento. A Dra. Jeisiele atua na comprovação judicial de união estável, dependência econômica de pais ou filhos inválidos e na garantia do direito adquirido à pensão, além de auxiliar trabalhadoras no recebimento do Salário-Maternidade urbano e rural.",
    topics: [
      "Pensão por Morte para viúvo(a), companheiro(a) em união estável e filhos menores ou com deficiência",
      "Comprovação judicial de união estável sem certidão formal (fotos, testemunhas e contas conjuntas)",
      "Pensão por Morte quando o falecido não estava contribuindo recentemente (período de graça / direito adquirido)",
      "Salário-Maternidade para trabalhadoras CLT, rurais, MEI e contribuintes individuais (inclusive desempregadas)",
      "Auxílio-Reclusão para os dependentes do segurado de baixa renda recolhido à prisão",
      "Divisão e partilha justa de cotas da pensão entre múltiplos dependentes",
    ],
    whatsAppText:
      "Olá, Dra. Jeisiele Oliveira! Preciso de orientações sobre Pensão por Morte ou Salário-Maternidade.",
  },
  {
    id: "planejamento-e-revisao",
    title: "Planejamento Previdenciário & Revisão de Benefícios",
    category: "Direito Previdenciário & Benefícios INSS",
    icon: CalendarCheck2,
    tag: "Cálculos Precisos · Aumento de Renda · Retificação de CNIS",
    summary:
      "Estudo detalhado de todo o histórico contributivo para antecipar a aposentadoria, investir o valor correto no INSS e aumentar o valor mensal do benefício.",
    details:
      "Aposentar-se sem planejamento pode custar dezenas ou centenas de milhares de reais ao longo da vida. Com o Planejamento Previdenciário, realizamos simulações matemáticas precisas de todas as regras de transição, corrigimos erros no CNIS e identificamos se o INSS calculou o seu benefício a menor, requerendo a revisão dos valores.",
    topics: [
      "Diagnóstico completo do CNIS para identificar períodos faltantes, extemporâneos e recolhimentos abaixo do piso",
      "Simulação de cenários: saber exatamente quando se aposentar e com qual valor de benefício mensal",
      "Cálculo de retorno sobre investimento (ROI): orientar sobre o melhor valor para recolher ao INSS como autônomo/facultativo",
      "Revisão de aposentadorias concedidas com erro no cálculo da média salarial ou períodos ignorados",
      "Descarte estratégico de contribuições menores para elevar o valor da aposentadoria",
      "Entrega de parecer jurídico detalhado com plano de ação passo a passo para a aposentadoria",
    ],
    whatsAppText:
      "Olá, Dra. Jeisiele Oliveira! Gostaria de contratar um Planejamento Previdenciário ou revisar meu benefício.",
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
    name: "Caroline Francieli",
    badge: "Avaliação Verificada · 4 avaliações",
    date: "5 meses atrás",
    content:
      "Excelente profissional, esperava por muito tempo um auxílio acidente e com ela tive o benefício concedido com sucesso",
    reply:
      "Fico imensamente feliz pela sua conquista, Caroline! O auxílio-acidente é um direito fundamental e conseguir essa concessão para você é muito gratificante. Conte sempre comigo!",
  },
  {
    name: "Cristialma Oliveira",
    badge: "Avaliação Verificada no Google",
    date: "5 meses atrás",
    content:
      "Excelente profissional ouve e sabe orientar parabéns Dr jeisiele Deus continue te abençoando 🙏❤️",
    reply:
      "Muito obrigada pelo carinho e pelas bênçãos, Cristialma! Saber ouvir com sensibilidade e orientar com clareza é a nossa maior missão.",
  },
  {
    name: "Francis Soares",
    badge: "Avaliação Verificada · 6 avaliações",
    date: "5 meses atrás",
    content:
      "Experiência e competência sem igual muito obrigado pela acessória",
    reply:
      "Agradeço imensamente pelas palavras e pela confiança em nossa assessoria, Francis. Conte sempre com o escritório Oliveira e Megda!",
  },
  {
    name: "Kassia Evellym",
    badge: "Avaliação Verificada · 2 avaliações",
    date: "5 meses atrás",
    content:
      "Muito atenciosa, inteligente e uma profissional maravilhosa. Recomendo",
    reply:
      "Muito obrigada pelo carinho e pela recomendação, Kassia! É uma alegria poder atender com dedicação e excelência.",
  },
  {
    name: "Sandra Do Carmo Flávio",
    badge: "Avaliação Verificada no Google",
    date: "5 meses atrás",
    content:
      "Excelente, maravilhoso o atendimento e principalmente a assistência e atenção",
    reply:
      "Obrigada de coração, Sandra! Oferecer uma assistência atenta e humana em cada etapa do processo é a nossa prioridade.",
  },
  {
    name: "Antoniel Nunes",
    badge: "Avaliação Verificada no Google",
    date: "5 meses atrás",
    content: "Melhor atendimento que já vi",
    reply:
      "Que honra receber esse feedback, Antoniel! Trabalhamos com muita dedicação para oferecer o melhor suporte jurídico aos nossos clientes.",
  },
  {
    name: "Edu Oliveira",
    badge: "Avaliação Verificada · 7 fotos",
    date: "5 meses atrás",
    content: "A melhor que nós temos 🏆",
    reply:
      "Muito obrigada pelo prestígio e reconhecimento, Edu! Uma grande honra representar nossa comarca com compromisso e seriedade.",
  },
  {
    name: "Antony Oliveira Flávio",
    badge: "Avaliação Verificada · 2 avaliações",
    date: "5 meses atrás",
    content: "Excelente, atendimento de primeira qualidade",
    reply:
      "Agradeço pela confiança e por destacar o nosso padrão de qualidade, Antony!",
  },
  {
    name: "Lais Novais",
    badge: "Avaliação Verificada no Google",
    date: "5 meses atrás",
    content: "Excelente profissional. Recomendo muito",
    reply:
      "Muito obrigada pela confiança no meu trabalho e pela recomendação, Lais!",
  },
  {
    name: "Jady Oliveira",
    badge: "Avaliação Verificada · 3 avaliações",
    date: "5 meses atrás",
    content: "Profissional demais! Recomendo.",
    reply:
      "Fico muito feliz com seu retorno positivo e recomendação, Jady! Um grande abraço.",
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
      <main className="relative min-h-screen bg-[#090a0f] text-[#e1e7f0]">
        {/* Top Notification Strip */}
        <div className="relative z-50 border-b border-[#d09040]/25 bg-[#0d1017] px-4 py-2.5 text-xs text-[#d1d7e2]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f0c070] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#d09040]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#ffe090] font-semibold">
                Advocacia Previdenciária Especializada · Concessão & Restabelecimento de Benefícios
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="font-bold text-[#f0c070] transition-colors hover:text-white"
              >
                WhatsApp: {PHONE_DISPLAY}
              </a>
              <span className="hidden text-[#4b5565] sm:inline">|</span>
              <span className="hidden text-[#a0abbd] sm:inline">
                Campos Gerais - MG & Atendimento Online para Todo o Brasil
              </span>
            </div>
          </div>
        </div>

        {/* Header / Navbar */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled
              ? "border-b border-[#d09040]/20 bg-[#090a0f]/95 backdrop-blur-md shadow-lg shadow-black/50"
              : "border-b border-[#1c2230] bg-[#090a0f]/90 backdrop-blur-xs"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
            {/* Logo */}
            <a
              href="#inicio"
              aria-label="Oliveira e Megda Advocacia Previdenciária - Dra. Jeisiele Oliveira"
              className="group flex shrink-0 items-center transition-transform hover:scale-[1.02]"
            >
              <Image
                src={LOGO_SRC}
                alt="Oliveira e Megda Advocacia e Consultoria Previdenciária"
                width={320}
                height={156}
                priority
                className="h-12 w-auto object-contain sm:h-14 lg:h-16"
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
                Serviços & Benefícios
              </a>
              <a className="nav-link-dark" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link-dark" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link-dark" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Header CTA & Mobile Button */}
            <div className="flex items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Jeisiele Oliveira! Gostaria de consultar sobre meu caso com o INSS."
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
                className="grid size-10 place-items-center rounded-lg border border-[#d09040]/30 bg-[#121622] text-[#ffe090] transition-colors hover:border-[#f0c070] hover:text-white lg:hidden cursor-pointer"
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
                className="overflow-hidden border-b border-[#d09040]/20 bg-[#0e1119] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="border-b border-[#d09040]/20 pb-3">
                    <Image
                      src={LOGO_SRC}
                      alt="Oliveira e Megda Advocacia"
                      width={240}
                      height={116}
                      className="h-11 w-auto object-contain"
                    />
                  </div>
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Serviços & Benefícios", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold tracking-wide text-[#d1d7e2] transition-colors hover:text-[#f0c070]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="pt-3">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Jeisiele Oliveira! Gostaria de consultar sobre meu caso no INSS."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} /> Falar com a Dra. Jeisiele
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
          className="relative isolate overflow-hidden border-b border-[#d09040]/20 bg-gradient-to-b from-[#090a0f] via-[#0d1017] to-[#121622] py-16 sm:py-24 lg:py-28"
        >
          {/* Ambient Lighting & Metallic Gold Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 -z-10 size-[38rem] rounded-full bg-[#d09040]/12 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 size-[32rem] rounded-full bg-[#8c5a1c]/10 blur-[90px]" />

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
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d09040]/40 bg-[#141824]/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffe090] shadow-xs backdrop-blur-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#f0c070] shadow-[0_0_8px_#f0c070]" />
                <span>DRA. JEISIELE OLIVEIRA · ADVOCACIA PREVIDENCIÁRIA · OAB/MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.4rem]"
              >
                O seu benefício foi{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#f0c070] via-[#ffe090] to-[#d09040]">
                  cessado ou negado
                </span>{" "}
                pelo INSS? Conquiste sua aposentadoria{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#f0c070] via-[#ffe090] to-[#d09040]">
                  sem complicação.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#b5c0d0] sm:text-base sm:leading-8"
              >
                ⚖️ Ajudo você a <strong className="text-white">destravar pedidos no INSS</strong>, reverter cortes indevidos em auxílios e aposentadorias, e conquistar o <strong className="text-white">valor máximo do seu benefício</strong>. Atuação técnica, humanizada e combativa na Justiça e na via administrativa.
              </motion.p>

              {/* Fast Trust Indicators */}
              <motion.div
                variants={reveal}
                className="mt-7 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold text-[#d1d7e2]"
              >
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#d09040]/30 bg-[#121622]/90 px-3.5 py-1.5 shadow-xs text-[#ffe090]">
                  <Star size={13} className="fill-[#f0c070] text-[#f0c070]" />
                  Nota 5,0 ★ no Google (11 avaliações)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#d09040]/30 bg-[#121622]/90 px-3.5 py-1.5 shadow-xs text-[#ffe090]">
                  <Scale size={13} className="text-[#f0c070]" />
                  Comissão de Direito Previdenciário OAB/MG
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#d09040]/30 bg-[#121622]/90 px-3.5 py-1.5 shadow-xs text-[#ffe090]">
                  <MapPin size={13} className="text-[#f0c070]" />
                  Campos Gerais - MG & Online para Todo o Brasil
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jeisiele Oliveira! Meu benefício foi negado/cessado no INSS e gostaria de uma orientação."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Restabelecer Meu Benefício
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
                Atendimento presencial no escritório em Campos Gerais - MG ou atendimento digital seguro para todo o Brasil.
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
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#d09040]/50 bg-[#141824] shadow-2xl shadow-black/80">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Jeisiele Oliveira — Advogada Previdenciária em atendimento"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent" />
              </div>

              {/* Authority Floating Card */}
              <div className="absolute -bottom-6 -left-3 max-w-[320px] rounded-xl border border-[#d09040]/50 bg-[#0f131c]/95 p-4 shadow-2xl backdrop-blur-md sm:-left-6 sm:p-5">
                <div className="flex items-center gap-1 text-[#f0c070]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#f0c070] text-[#f0c070]"
                    />
                  ))}
                  <span className="ml-1 text-xs font-bold text-white">5,0 ★</span>
                </div>
                <p className="mt-1 font-serif text-sm font-bold text-white">
                  Dra. Jeisiele Oliveira
                </p>
                <p className="text-[11px] font-medium text-[#ffe090]">
                  Oliveira e Megda Advocacia Previdenciária
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#8a96a8]">
                  &ldquo;Excelente profissional, com ela tive o benefício concedido com sucesso.&rdquo;
                </p>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -right-3 top-6 rounded-lg border border-[#d09040]/40 bg-[#0c0f16]/95 px-3 py-2 text-right shadow-xl backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-1.5 text-[#f0c070]">
                  <AlertCircle size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Benefício Cortado?
                  </span>
                </div>
                <p className="text-[10px] text-[#8a96a8]">Atendimento Prioritário</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Pillars Strip (Barra de Destaques) */}
        <section className="border-b border-[#d09040]/20 bg-[#0d1017] px-5 py-8 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d09040]/30 bg-[#141824] text-[#f0c070]">
                <Star size={18} className="fill-[#f0c070]" />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Nota 5,0 no Google</p>
                <p className="text-[11px] text-[#8a96a8]">11 avaliações 5 estrelas</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d09040]/30 bg-[#141824] text-[#f0c070]">
                <Scale size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Foco Previdenciário</p>
                <p className="text-[11px] text-[#8a96a8]">Especialista em INSS & BPC</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d09040]/30 bg-[#141824] text-[#f0c070]">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Campos Gerais - MG</p>
                <p className="text-[11px] text-[#8a96a8]">Presencial e Online para todo o Brasil</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d09040]/30 bg-[#141824] text-[#f0c070]">
                <CheckCircle2 size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Celeridade & Ética</p>
                <p className="text-[11px] text-[#8a96a8]">Transparência em cada etapa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre a Dra. Jeisiele Oliveira */}
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
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#d09040]/40 bg-[#f4efe6] shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Jeisiele Oliveira — Advogada Previdenciária"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#12151d]/70 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#d09040]/50 bg-white p-5 shadow-xl sm:-right-6">
                <div className="flex items-center gap-2 text-[#d09040]">
                  <Award size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c5a1c]">
                    Advocacia e Consultoria Previdenciária
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg font-bold leading-snug text-[#0e1118]">
                  Dra. Jeisiele Oliveira
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#d09040]">
                  Membro da Comissão de Direito Previdenciário da 21ª Subseção OAB/MG
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5a6475]">
                  Oliveira e Megda Advocacia · Campos Gerais - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#d09040]/50 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#d09040]/40 bg-[#fdf7ea] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c5a1c] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#d09040]" />
                <span>CONHEÇA A DRA. JEISIELE OLIVEIRA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-[#0e1118] sm:text-4xl lg:text-[2.85rem]"
              >
                Dedicação incansável e atendimento humano para garantir o seu{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8c5a1c] via-[#d09040] to-[#f0c070]">
                  direito previdenciário no INSS.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4b5565]"
              >
                A <strong className="font-bold text-[#0e1118]">Dra. Jeisiele Oliveira</strong> é Advogada Associada na <strong className="font-bold text-[#0e1118]">Oliveira e Megda Advocacia e Consultoria Previdenciária</strong> e Membro da Comissão de Direito Previdenciário da 21ª Subseção da OAB/MG. Com uma atuação combativa, ética e profundamente acolhedora, ela é especialista em transformar a complexidade do INSS em conquistas reais e dignidade financeira para cada segurado.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4b5565]"
              >
                Seja para restabelecer um benefício por incapacidade cortado no pente-fino, reverter negativas indevidas de aposentadoria ou conceder o BPC/LOAS para quem mais necessita, o atendimento é pautado pela escuta atenta, transparência total e acompanhamento minucioso de cada prova documental e pericial.
              </motion.p>

              {/* 3 Value Pillars */}
              <motion.div
                variants={reveal}
                className="mt-8 grid gap-4 sm:grid-cols-3"
              >
                <div className="rounded-xl border border-[#e6ded4] bg-white p-4 shadow-xs">
                  <span className="text-[#d09040]">
                    <Shield size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0e1118]">
                    Combatividade Técnica
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5a6475]">
                    Ações judiciais fundamentadas e quesitos periciais detalhados contra os erros do INSS.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-4 shadow-xs">
                  <span className="text-[#d09040]">
                    <HeartHandshake size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0e1118]">
                    Acolhimento Real
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5a6475]">
                    Atendimento humanizado, paciente e sem termos difíceis para tranquilizar você e sua família.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-4 shadow-xs">
                  <span className="text-[#d09040]">
                    <Clock size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0e1118]">
                    Agilidade nos Pedidos
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5a6475]">
                    Respostas rápidas no WhatsApp e celeridade para destravar processos que estavam parados.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jeisiele Oliveira! Gostaria de conversar com a senhora sobre o meu caso com o INSS."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-sm"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Jeisiele
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação & Especialidades Previdenciárias */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#d09040]/20 bg-[#0d1017] py-20 sm:py-28 lg:py-32"
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
                eyebrow="SERVIÇOS & PILARES DE ATUAÇÃO PREVIDENCIÁRIA"
                description="Expertise técnica focada na concessão, restabelecimento e revisão de benefícios do Regime Geral de Previdência Social (INSS)."
              >
                Soluções especializadas em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f0c070] via-[#ffe090] to-[#d09040]">
                  Benefícios do INSS e Aposentadorias.
                </span>
              </Heading>
              <p className="max-w-[280px] pb-1 text-xs leading-6 text-[#8a96a8]">
                Clique em um dos serviços abaixo para conferir as demandas atendidas e iniciar seu atendimento direto pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[360px] flex-col rounded-2xl border border-[#d09040]/25 bg-[#121622] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f0c070] hover:shadow-2xl hover:shadow-[#d09040]/15 sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-[#d09040]/30 bg-[#181e2e] text-[#f0c070] shadow-xs transition-colors group-hover:border-[#f0c070] group-hover:bg-[#d09040] group-hover:text-[#090a0f]">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#d09040]/40 transition-colors group-hover:text-[#f0c070]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-block rounded-md border border-[#d09040]/30 bg-[#161c2b] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ffe090]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.22rem] font-bold leading-snug text-white">
                        {area.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-6 text-[#9ca7b8]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f0c070] hover:text-white cursor-pointer"
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

        {/* Por Que Escolher a Dra. Jeisiele Oliveira - 4 Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#e6ded4] bg-white py-20 text-[#12151d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="REPUTAÇÃO MÁXIMA 5 ESTRELAS NO GOOGLE"
                description="Segurança jurídica, clareza nas orientações, empatia com os segurados e compromisso inegociável em defender os seus direitos contra as negativas do INSS."
              >
                Por que confiar seu benefício à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8c5a1c] via-[#d09040] to-[#f0c070]">
                  Dra. Jeisiele Oliveira?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Jeisiele Oliveira! Gostaria de consultar sobre a minha situação com o INSS."
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
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d09040] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d09040]/30 bg-white text-[#d09040] shadow-xs">
                  <Shield size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Experiência & Competência
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Foco aprofundado na legislação previdenciária, regras de transição da Reforma e jurisprudência dos Tribunais para reverter negativas do INSS.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8c5a1c]">
                  &ldquo;Experiência e competência sem igual&rdquo;
                </span>
              </div>

              {/* Pilar 2 */}
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d09040] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d09040]/30 bg-white text-[#d09040] shadow-xs">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Ouvir & Saber Orientar
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Acolhimento humano de verdade. A Dra. Jeisiele ouve com sensibilidade e paciência para encontrar o melhor caminho para cada segurado.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8c5a1c]">
                  &ldquo;Ouve e sabe orientar com atenção&rdquo;
                </span>
              </div>

              {/* Pilar 3 */}
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d09040] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d09040]/30 bg-white text-[#d09040] shadow-xs">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Benefício Concedido
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Resultados concretos e defesa firme para quem esperava por muito tempo a concessão do auxílio, aposentadoria ou BPC/LOAS.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8c5a1c]">
                  &ldquo;Com ela tive o benefício concedido&rdquo;
                </span>
              </div>

              {/* Pilar 4 */}
              <div className="flex flex-col rounded-2xl border border-[#e6ded4] bg-[#fbf9f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d09040] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d09040]/30 bg-white text-[#d09040] shadow-xs">
                  <Compass size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0e1118]">
                  Atendimento de 1ª Qualidade
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Assistência próxima, transparência e respostas sem demora. Você conversa diretamente com quem cuida do seu processo.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#8c5a1c]">
                  &ldquo;Melhor atendimento que já vi&rdquo;
                </span>
              </div>
            </div>

            {/* Como Funciona o Atendimento */}
            <div className="mt-16 rounded-2xl border border-[#e6ded4] bg-[#f4efe6] p-8 sm:p-12">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c5a1c]">
                  PASSO A PASSO SIMPLES & SEGURO
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#0e1118] sm:text-3xl">
                  Como funciona o nosso atendimento
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#5a6475]">
                  Sem surpresas e sem complicação. Cuidamos de toda a parte burocrática para você ter tranquilidade.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-[#e6ded4] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#d09040]">
                    01
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0e1118]">
                    Contato Inicial no WhatsApp
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5a6475]">
                    Você envia uma mensagem explicando sua situação, se teve benefício cortado ou se deseja se aposentar. Respondemos com agilidade.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#d09040]">
                    02
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0e1118]">
                    Análise do CNIS e Documentos
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5a6475]">
                    A Dra. Jeisiele analisa detalhadamente seu extrato do INSS, laudos médicos ou documentos rurais para identificar a melhor estratégia jurídica.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6ded4] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#d09040]">
                    03
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0e1118]">
                    Ação Firme & Conquista do Benefício
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#5a6475]">
                    Ingresso com o requerimento ou ação judicial competente, acompanhamento das perícias e cobrança de todos os retroativos atrasados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 11 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-[#d09040]/20 bg-[#0d1017] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="DEPOIMENTOS & AVALIAÇÕES NO GOOGLE"
                description="Nota máxima de 5,0 ★ no Google Meu Negócio em Campos Gerais · MG. Conheça a opinião de quem teve seus direitos previdenciários resguardados."
              >
                O que dizem os clientes da{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f0c070] via-[#ffe090] to-[#d09040]">
                  Dra. Jeisiele Oliveira
                </span>
              </Heading>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#d09040]/30 bg-[#121622] px-5 py-3 text-xs font-bold text-white shadow-xs transition-all hover:border-[#f0c070] hover:bg-[#181e2e]"
              >
                <GoogleIcon size={18} />
                <span>Ver avaliações no Google</span>
                <ArrowUpRight size={15} className="text-[#f0c070]" />
              </a>
            </div>

            {/* Grid of Real Reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-2xl border border-[#d09040]/20 bg-[#121622] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c070] hover:shadow-2xl hover:shadow-[#d09040]/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#f0c070]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#f0c070] text-[#f0c070]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#d09040]/25 bg-[#171d2b] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ffe090]">
                        {review.badge}
                      </span>
                    </div>

                    <p className="mt-4 text-xs leading-6 text-[#d1d7e2]">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-4 rounded-xl border border-[#d09040]/20 bg-[#161b28] p-3 text-[11px] leading-5 text-[#a0abbd]">
                        <span className="font-bold text-[#f0c070]">
                          Resposta da Dra. Jeisiele:{" "}
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

        {/* Contato & Localização da Sede em Campos Gerais - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#e6ded4] bg-white py-20 text-[#12151d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO PREVIDENCIÁRIO"
                description="Converse diretamente com a equipe da Dra. Jeisiele Oliveira. Oferecemos atendimento presencial acolhedor em Campos Gerais e suporte online em todo o Sul de Minas e Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8c5a1c] via-[#d09040] to-[#f0c070]">
                  destravar o seu benefício e garantir seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jeisiele Oliveira! Gostaria de agendar um atendimento no escritório em Campos Gerais."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-xs text-[#5a6475]">
                  WhatsApp do escritório:{" "}
                  <strong className="text-[#0e1118]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#5a6475]">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-[#d09040]" />
                  <div>
                    <p className="font-bold text-[#0e1118]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#3a4252]">
                      Segunda a Sexta-feira · a partir das 08:00
                    </p>
                    <p className="text-[11px] font-semibold text-[#8c5a1c]">
                      Atendimento Presencial com hora marcada & Atendimento Digital
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#d09040]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-bold text-[#0e1118] transition-colors hover:text-[#d09040]"
                  >
                    {PHONE_DISPLAY} (WhatsApp e Ligações)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#d09040]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#3a4252] transition-colors hover:text-[#d09040]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#d09040]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="font-medium text-[#3a4252] transition-colors hover:text-[#d09040]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#d09040]" />
                  <span className="font-medium text-[#3a4252]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#d09040]/35 bg-[#fbf9f5] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#d09040] to-[#f0c070]" />

              <div className="flex items-center gap-4">
                <Image
                  src={LOGO_SRC}
                  alt="Oliveira e Megda Advocacia e Consultoria Previdenciária"
                  width={340}
                  height={156}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div>

              <address className="mt-7 max-w-md text-sm not-italic leading-7 text-[#4b5565]">
                <strong className="font-bold text-[#0e1118]">
                  Oliveira e Megda Advocacia e Consultoria Previdenciária
                </strong>
                <br />
                Dra. Jeisiele Oliveira — Advogada Associada · OAB/MG
                <br />
                Membro da Comissão de Direito Previdenciário da 21ª Subseção OAB/MG
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-[#e6ded4] bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8c5a1c]">
                  Disponibilidade & Modalidades
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-[#4b5565]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-bold text-[#0e1118]">
                    Abre às 08:00 (Seg a Sex)
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right font-bold text-[#d09040]">
                    Todo o Brasil via WhatsApp
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-[#0e1118]">Campos Gerais - MG</span>
                  <span>Área de Atuação</span>
                  <span className="text-right text-[#0e1118]">Direito Previdenciário</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e6ded4]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#6a7587]">
                  Atendimento ético, confidencial e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jeisiele Oliveira! Gostaria de agendar um atendimento no escritório em Campos Gerais."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d09040]/50 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8c5a1c] transition-colors hover:border-[#d09040] hover:bg-[#fdf7ea] hover:text-[#0e1118]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Dra. Jeisiele <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Noir & Gold Metallic Banner */}
        <section className="border-t border-[#d09040]/30 bg-gradient-to-r from-[#090a0f] via-[#141824] to-[#090a0f] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffe090]">
                <Sparkles size={13} /> DRA. JEISIELE OLIVEIRA · OLIVEIRA E MEGDA ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
                O INSS negou ou cortou seu benefício? Seus direitos podem ser garantidos na Justiça.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Jeisiele Oliveira! Preciso de ajuda para reverter a negativa do INSS no meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#b88526] via-[#e0a050] to-[#b88526] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#090a0f] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
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
                aria-label="Oliveira e Megda Advocacia - Dra. Jeisiele Oliveira"
                className="inline-flex items-center transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Oliveira e Megda Advocacia Previdenciária"
                  width={300}
                  height={140}
                  className="h-14 w-auto object-contain sm:h-16"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#9ca7b8]">
                ⚖️ Ajudo você a conquistar aposentadorias e benefícios do INSS sem complicação. Atuação especializada em Benefícios Cessados ou Negados, Auxílio-Doença, BPC/LOAS, Pensão por Morte e Planejamento Previdenciário. Nota máxima 5,0 ★ no Google em Campos Gerais - MG.
              </p>
              <p className="mt-3 text-[11px] font-bold text-[#f0c070]">
                Dra. Jeisiele Oliveira · OAB/MG · Campos Gerais - MG
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0c070]">
                Navegação
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#9ca7b8]">
                <a className="footer-link font-medium hover:text-[#f0c070]" href="#inicio">
                  Início
                </a>
                <a className="footer-link font-medium hover:text-[#f0c070]" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link font-medium hover:text-[#f0c070]" href="#atuacao">
                  Serviços Previdenciários
                </a>
                <a className="footer-link font-medium hover:text-[#f0c070]" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link font-medium hover:text-[#f0c070]" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link font-medium hover:text-[#f0c070]" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0c070]">
                Contato & Atendimento
              </h3>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#9ca7b8]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jeisiele Oliveira! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-bold text-[#f0c070]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Phone size={15} className="shrink-0 text-[#f0c070]" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <InstagramIcon size={15} className="shrink-0 text-[#f0c070]" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Mail size={15} className="shrink-0 text-[#f0c070]" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2 font-medium">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#f0c070]" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] font-bold text-[#f0c070]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · Abre às 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#1c2230] pt-6 text-[10px] text-[#6b7688] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} OLIVEIRA E MEGDA ADVOCACIA E CONSULTORIA PREVIDENCIÁRIA · DRA. JEISIELE OLIVEIRA. Todos os direitos reservados.
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
              "Olá, Dra. Jeisiele Oliveira! Gostaria de consultar sobre meus direitos no INSS."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Jeisiele Oliveira"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0e1119] border border-[#d09040]/40 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Jeisiele Oliveira
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#d09040]/40 bg-[#0e1119] p-7 text-[#e1e7f0] shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#d09040]/30 bg-[#161c28] text-[#ffe090] transition-colors hover:border-[#f0c070] hover:bg-[#d09040] hover:text-[#090a0f] cursor-pointer"
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0c070]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-xs leading-5 text-[#d1d7e2]"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#d09040]" />
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
