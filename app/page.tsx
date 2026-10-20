"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, MotionConfig } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
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
  ShieldCheck,
  HeartPulse,
  Activity,
  FileCheck2,
  CalendarCheck,
  Stethoscope,
  Users,
  HelpCircle,
  Gem,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531997878257";
const PHONE_DISPLAY = "(31) 99787-8257";
const EMAIL_CONTACT = "contato@haynhandramartins.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/haymartinsadvocacia/";
const INSTAGRAM_HANDLE = "@haymartinsadvocacia";

const ADDRESS_TEXT =
  "R. Alexandre Nunes, 157 - Centro, Igarapé - MG, 32900-000 · Atendimento Presencial & Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Haynhandra+Martins+Advocacia%0AIgarap%C3%A9+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo-haynhandra.png";
const FOTO_HERO_SRC = "/dra-haynhandra-martins.png";
const FOTO_SOBRE_SRC = "/dra-haynhandra-martins.png";
const FOTO_EDITORIAL_SRC = "/dra-haynhandra-portrait.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Haynhandra Martins! Gostaria de consultar sobre meu caso e agendar um atendimento.";
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
  category: "Previdenciário (INSS)" | "Direito Cível & Família";
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "planejamento-aposentadorias",
    title: "Planejamento Previdenciário & Aposentadorias",
    category: "Previdenciário (INSS)",
    icon: CalendarCheck,
    tag: "Aposentadoria Integral · 13º Salário · Regras de Transição",
    summary:
      "Planejamento do momento exato e da regra mais vantajosa para você receber o maior valor de aposentadoria possível, com direito integral a 13º salário e recuperação de atrasados.",
    details:
      "A Dra. Haynhandra Martins realiza uma auditoria detalhada de todo o seu histórico contributivo (extrato CNIS, carteiras antigas, tempo rural e especial), corrigindo inconsistências do INSS e evitando armadilhas que diminuem o valor mensal do seu benefício. Orientamos de forma transparente e segura sobre as melhores regras de transição pós-Reforma da Previdência.",
    topics: [
      "Planejamento Previdenciário personalizado com simulação de cenários e cálculo de valor futuro",
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos não registrados",
      "Aposentadoria por Tempo de Contribuição com aplicação das melhores regras de transição",
      "Aposentadoria Especial para trabalhadores com exposição a insalubridade ou periculosidade (PPP/LTCAT)",
      "Retificação e averbação de vínculos no CNIS, tempo militar e atividade rural",
      "Cobrança integral de parcelas retroativas desde o primeiro requerimento no INSS",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Gostaria de consultar sobre meu Planejamento Previdenciário e Aposentadoria no INSS.",
  },
  {
    id: "incapacidade-permanente-invalidez",
    title: "Aposentadoria por Incapacidade Permanente (Invalidez)",
    category: "Previdenciário (INSS)",
    icon: HeartPulse,
    tag: "Reversão de Pente-Fino · Laudos Médicos · Adicional de 25%",
    summary:
      "Restabelecimento e concessão judicial de aposentadoria para segurados com enfermidades ou limitações definitivas, inclusive revertendo cortes arbitrários do INSS.",
    details:
      "Muitos trabalhadores aposentados por incapacidade têm seus benefícios cortados injustamente em operações de 'pente-fino' do INSS. A Dra. Haynhandra Martins atua com firmeza na defesa de seus direitos, preparando provas periciais consistentes, elaborando quesitos técnicos direcionados e impugnando laudos médicos desfavoráveis na Justiça.",
    topics: [
      "Ação judicial de concessão e restabelecimento de Aposentadoria por Incapacidade Permanente",
      "Reversão célere de cancelamentos indevidos em revisões e pente-finos do INSS",
      "Elaboração de quesitos periciais estratégicos e impugnação de laudos periciais superficiais",
      "Adicional de 25% para o aposentado que necessita de assistência permanente de cuidadores",
      "Conversão de auxílio-doença em aposentadoria por incapacidade definitiva",
      "Atuação em patologias ortopédicas, cardíacas, psiquiátricas, oncológicas e degenerativas",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Preciso de ajuda para restabelecer ou solicitar minha Aposentadoria por Invalidez no INSS.",
  },
  {
    id: "auxilio-incapacidade-temporaria",
    title: "Auxílio por Incapacidade Temporária (Auxílio-Doença)",
    category: "Previdenciário (INSS)",
    icon: Stethoscope,
    tag: "Perícia Médica · Benefício Negado · Restabelecimento Urgente",
    summary:
      "Garantia rápida do benefício para quem está impossibilitado de trabalhar por motivo de doença, acidente ou cirurgia, combatendo negativas indevidas da perícia médica.",
    details:
      "Se o médico perito do INSS indeferiu o seu pedido sob alegação de 'ausência de incapacidade' ou determinou uma alta precipitada, ingressamos com recurso e ação judicial imediata para restabelecer o seu sustento enquanto você realiza seu tratamento de saúde de forma digna.",
    topics: [
      "Pedido urgente de concessão com requerimento de tutela de urgência (liminar)",
      "Reversão de altas programadas injustas e indeferimentos periciais sumários",
      "Comprovação rigorosa da qualidade de segurado e cômputo correto do período de carência",
      "Análise documental estratégica: atestados conclusivos, relatórios e exames de imagem",
      "Auxílio-doença comum (B31) versus acidentário (B91) com direito a estabilidade provisória",
      "Acompanhamento direto e acolhedor até a efetiva implantação do benefício em conta",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Meu auxílio-doença foi negado pelo INSS e preciso de ajuda para reverter.",
  },
  {
    id: "auxilio-acidente-sequelas",
    title: "Auxílio-Acidente & Indenizações do INSS",
    category: "Previdenciário (INSS)",
    icon: Activity,
    tag: "Sequela Permanente · Acidente de Moto / Trabalho · Benefício Vitalício",
    summary:
      "Benefício mensal indenizatório pago pelo INSS para quem sofreu acidente de qualquer natureza que resultou em sequela permanente, podendo ser acumulado com o salário.",
    details:
      "Muitos segurados desconhecem que têm direito ao Auxílio-Acidente mesmo voltando a trabalhar normalmente de carteira assinada. Esse benefício tem natureza indenizatória, não impede o trabalho formal e é pago mensalmente até a sua aposentadoria para quem teve redução funcional ou limitação motora consolidada.",
    topics: [
      "Concessão do Auxílio-Acidente decorrente de acidentes de moto, trânsito ou domésticos",
      "Auxílio-Acidente decorrente de acidentes de trabalho típicos e doenças ocupacionais",
      "Benefício que não cancela o salário e pode ser recebido conjuntamente com o emprego",
      "Comprovação pericial de sequelas motoras permanentes, fraturas ou limitações articulares",
      "Cobrança de parcelas retroativas acumuladas desde o término do auxílio-doença original",
      "Atuação contra a recusa da perícia administrativa em reconhecer a limitação consolidada",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Gostaria de consultar se tenho direito ao Auxílio-Acidente por sequela.",
  },
  {
    id: "bpc-loas-beneficio-assistencial",
    title: "BPC / LOAS & Benefício Assistencial",
    category: "Previdenciário (INSS)",
    icon: HeartHandshake,
    tag: "Idosos 65+ · Pessoa com Deficiência · Triagem Honesta",
    summary:
      "Concessão de um salário mínimo mensal para idosos a partir de 65 anos e pessoas com deficiência ou enfermidade de longo prazo em situação de vulnerabilidade social.",
    details:
      "O BPC/LOAS é um direito garantido pela Lei Orgânica da Assistência Social. A Dra. Haynhandra Martins realiza uma triagem minuciosa e honesta para verificar se a família se enquadra nos critérios e se não há direito a uma aposentadoria com 13º antes de requerer o benefício assistencial, orientando cada passo com máxima sinceridade.",
    topics: [
      "BPC do Idoso (a partir de 65 anos) sem necessidade de ter contribuído para o INSS",
      "BPC para Pessoa com Deficiência (PcD) física, sensorial, intelectual, mental ou TEA",
      "Enquadramento de enfermidades graves e incapacitantes (câncer, cardiopatias, sequelas)",
      "Avaliação socioeconômica e comprovação da vulnerabilidade com dedução de despesas médicas",
      "Triagem prévia honesta para checar se não é viável aposentadoria integral com 13º salário",
      "Ação judicial rápida após negativa arbitrária ou demora na fila do INSS",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Gostaria de consultar sobre a concessão do BPC / LOAS para minha família.",
  },
  {
    id: "pensao-morte-dependentes",
    title: "Pensão por Morte & Direitos dos Dependentes",
    category: "Previdenciário (INSS)",
    icon: FileCheck2,
    tag: "Sustento da Família · União Estável · Valores Retroativos",
    summary:
      "Proteção e garantia do sustento dos dependentes de segurados falecidos, com comprovação sólida de união estável e destravamento de processos no INSS.",
    details:
      "O falecimento de um familiar provedor é um momento doloroso que não pode ser agravado por negativas burocráticas do INSS. Atuamos com acolhimento e agilidade para comprovar uniões estáveis, dependência econômica e garantir a concessão justa da pensão por morte aos dependentes legítimos.",
    topics: [
      "Concessão célere de Pensão por Morte para cônjuges, companheiros e filhos menores/incapazes",
      "Comprovação consistente de união estável mediante conjunto probatório documental e testemunhal",
      "Garantia de cota-parte proporcional e rateio correto entre dependentes legítimos",
      "Reversão de alegações indevidas de perda da qualidade de segurado do falecido",
      "Cobrança de todos os atrasados devidos desde o óbito ou do primeiro requerimento",
      "Orientação jurídica segura sobre regras de acúmulo de pensão com aposentadoria própria",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Preciso de ajuda para dar entrada ou destravar uma Pensão por Morte.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Contratos & Indenizações",
    category: "Direito Cível & Família",
    icon: Scale,
    tag: "Reparação de Danos · Contratos · Cobranças · Consumidor",
    summary:
      "Assessoria jurídica consultiva e contenciosa em Direito Cível: indenizações por danos morais e materiais, litígios contratuais, cobranças abusivas e defesa de direitos.",
    details:
      "Atuamos com visão estratégica e combativa na defesa dos interesses civis de pessoas físicas e empresas. Desde a elaboração de contratos seguros até ações judiciais indenizatórias por prejuízos morais e materiais, cobranças indevidas de bancos e conflitos possessórios, oferecendo soluções claras e eficazes.",
    topics: [
      "Ações indenizatórias por Danos Morais, Materiais e Lucros Cessantes",
      "Defesa do Consumidor contra fraudes bancárias, juros abusivos e negativações indevidas no SPC/Serasa",
      "Elaboração, análise minuciosa e revisão de contratos civis e comerciais",
      "Cobranças judiciais e extrajudiciais, execuções de títulos e recuperação de crédito",
      "Ações possessórias, usucapião, rescisões de contratos de compra e venda de imóveis",
      "Resolução consensual e mediação para soluções rápidas e econômicas",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Gostaria de consultar uma questão de Direito Cível com seu escritório.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    category: "Direito Cível & Família",
    icon: Users,
    tag: "Inventários Rápidos · Divórcios · Partilha · Pensão",
    summary:
      "Atuação humanizada e firme em momentos delicados da vida familiar: inventários em cartório e judiciais, partilha de bens, divórcios, pensão alimentícia e guarda.",
    details:
      "Conduzimos inventários com o máximo de celeridade para desembaraçar o patrimônio familiar com menor custo tributário e sem desgastes emocionais desnecessários. Oferecemos suporte completo e sensível em divórcios, fixação de pensão alimentícia e planejamento sucessório com ética inegociável.",
    topics: [
      "Inventários Judiciais e Extrajudiciais em Cartório com agilidade e redução de custos",
      "Divórcio Consensual e Litigioso com partilha equilibrada de bens patrimoniais",
      "Ações de Alimentos: fixação, revisão, exoneração e execução de pensão alimentícia",
      "Regulamentação de guarda, visitas e alienação parental com foco no bem-estar dos filhos",
      "Reconhecimento e dissolução de união estável com partilha de bens acumulados",
      "Planejamento Sucessório preventivo para evitar litígios futuros entre herdeiros",
    ],
    whatsAppText:
      "Olá, Dra. Haynhandra Martins! Gostaria de orientação jurídica sobre Inventários e Direito de Família.",
  },
];

const clientReviews = [
  {
    name: "Renata Custodia",
    reviewsCount: "Local Guide · 61 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Acolhimento & Sinceridade Ímpar",
    content:
      "Além da excelente profissional, ela te ouve, se importa com seu caso, é extremamente sincera, a recepcionista é um amor de pessoa também!",
    reply:
      "Muito obrigada pelo seu feedback. Deus lhe abençoe sempre!",
  },
  {
    name: "Jucimara Biju",
    reviewsCount: "7 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Caso de 4 Anos Resolvido em 6 Meses",
    content:
      "Minha experiência foi a das melhores possíveis, pois eu estava com um problema a uns 4 anos e com uns 6 meses resolveu, e outra além da simplicidade, é bem esclarecida, não deixa nenhuma pendência eu super indico, é uma profissional de alta qualidade. Podem confiar!",
    reply:
      "Jucimara, muito obrigada pelo seu feedback! Deus abençoe grandemente!",
  },
  {
    name: "Eduardo Maia",
    reviewsCount: "1 avaliação no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Advogada de Toda a Família",
    content:
      "Profissional excelente, super capacitada, educadíssima e atenciosa. Nos deixa muito à vontade. Amei o atendimento e a forma como ela explica o nosso direito para que possamos entender. Sem dúvida, virou a advogada de nossa família.",
    reply:
      "Gratidão! Deus abençoe!",
  },
  {
    name: "Nivia Alves Ferreira",
    reviewsCount: "6 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Humana, Justa & Altamente Competente",
    content:
      "Dra. Haynhandra é perfeita! Advogada humana, justa e altamente competente! Muito feliz com o novo endereço pois é bem localizado e mais acessível por ser centralizado. Parabéns Dra. Sucesso!",
    reply:
      "Gratidão pela sua avaliação, linda! Deus abençoe!",
  },
  {
    name: "Felipe Cabral",
    reviewsCount: "3 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Resiliência & Cuidado com o Pai",
    content:
      "Estou passando aqui para expressar minha Gratidão a Haynhandra 🙏🏼 Sua resiliência e paciência em querer atender meu pai da melhor forma possível, com muito carinho e competência...",
    reply:
      "Felipe, muito obrigada pelo seu feedback. Fico feliz pelo êxito de seu pai. Deus abençoe vocês!",
  },
  {
    name: "Sueli Quinup Meleiro",
    reviewsCount: "Local Guide · 8 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Conhecimento a Fundo & Solícita",
    content:
      "Profissional atenciosa, muito educada e solícita... conseguiu encaixar um horário de última hora pra me atender. Se mostrou muito segura e conhecedora a fundo do assunto.",
    reply:
      "Gratidão por sua avaliação! Sua opinião é muito importante para nós!",
  },
  {
    name: "Rejane Lima",
    reviewsCount: "3 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Clareza & Atendimento Dedicado",
    content:
      "Fiquei muito satisfeita com a forma clara e atenciosa com que conduziu o atendimento. Muito obrigada pela dedicação, atenção e profissionalismo.",
    reply:
      "Agradecemos imensamente pela confiança depositada no nosso escritório!",
  },
  {
    name: "ferreira ferreira",
    reviewsCount: "Local Guide · 10 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Excelente Assessoria Jurídica",
    content:
      "O Escritório presta uma excelente assessoria jurídica, tem ótimos profissionais e um atendimento dedicado!",
    reply:
      "Muito obrigada pelo seu feedback. Fico lisonjeada com as palavras. Foi um prazer atuar em seu favor! Que Deus lhe abençoe grandemente!",
  },
  {
    name: "gizelle rafaela",
    reviewsCount: "5 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Resolução Rápida & Confiável",
    content:
      "Foi excelente, resolveu meu problema super rápido. Trabalho de qualidade e confiável. Só tenho a agradecer!",
    reply:
      "Obrigada pelo seu feedback! Deus abençoe grandemente!",
  },
  {
    name: "marcos vinicios",
    reviewsCount: "3 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Esclarecimento com Clareza",
    content:
      "Excelente atendimento, tirou todas as minhas dúvidas com muita clareza, sem dúvidas irei dar sequência do meu processo com ela.",
    reply:
      "Obrigada pela sua avaliação! Conte conosco em cada etapa processual.",
  },
  {
    name: "Bell Borges",
    reviewsCount: "Local Guide · 32 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Atendimento Impecável",
    content:
      "Ótimo atendimento, me explicaram super bem as dúvidas que eu tinha. Recomendo muito. Parabéns pelo atendimento.",
    reply:
      "Gratidão pela sua avaliação! Deus abençoe!",
  },
  {
    name: "BRÍGIDA PALHARES",
    reviewsCount: "Local Guide · 53 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Responsabilidade & Prontidão",
    content:
      "Profissional responsável, nos atendeu prontamente no que precisávamos.",
    reply:
      "Obrigada pelo seu retorno e avaliação! Ficamos sempre à disposição.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3.5 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#38080f] sm:text-4xl lg:text-[2.75rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#5c494c]">
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
      <main className="relative min-h-screen overflow-hidden bg-[#fbf9f5] text-[#2b1a1d]">
        {/* Top Header / Announcement Bar - Deep Wine Accent Frame */}
        <header className="sticky top-0 z-40 border-b border-[#eaddd0] bg-white/95 backdrop-blur-md">
          {/* Top Info Bar */}
          <div className="border-b border-[#3b0911] bg-[#4a0d17] px-4 py-2 text-[11px] text-[#f2dcba]">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 sm:px-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                  <Star size={13} className="fill-[#e8c792] text-[#e8c792]" />
                  5,0 ★ no Google (26 avaliações verificadas)
                </span>
                <span className="hidden sm:inline text-[#721b2a]">|</span>
                <span className="hidden sm:inline text-stone-200">
                  Igarapé - MG · R. Alexandre Nunes, 157 - Centro
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="hidden md:inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <Phone size={12} /> {PHONE_DISPLAY}
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#f5dfad] transition-colors hover:text-white"
                >
                  <WhatsAppIcon size={13} /> Plantão WhatsApp com a Dra. Haynhandra
                </a>
              </div>
            </div>
          </div>

          {/* Main Navigation - Pure White Canvas for Crystal Clear Logo */}
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 bg-white">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 transition-transform hover:scale-[1.01]"
              aria-label="Haynhandra Martins Advocacia - Início"
            >
              <div className="relative h-[68px] w-[250px] sm:h-[78px] sm:w-[300px]">
                <Image
                  src={LOGO_SRC}
                  alt="Haynhandra Martins Advocacia - Logo Oficial"
                  fill
                  priority
                  sizes="(max-width: 640px) 250px, 300px"
                  className="object-contain object-left"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-7 lg:flex">
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Haynhandra Martins! Gostaria de consultar sobre meus direitos com seu escritório."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={14} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid size-11 place-items-center rounded-lg border border-[#eaddd0] bg-[#faf6f0] text-[#4a363a] lg:hidden cursor-pointer"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-[#eaddd0] bg-white px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-[#4a363a]">
                  <a onClick={closeMenu} className="hover:text-[#681724]" href="#inicio">
                    Início
                  </a>
                  <a onClick={closeMenu} className="hover:text-[#681724]" href="#sobre">
                    A Advogada
                  </a>
                  <a onClick={closeMenu} className="hover:text-[#681724]" href="#atuacao">
                    Áreas de Atuação (Previdenciário & Cível)
                  </a>
                  <a onClick={closeMenu} className="hover:text-[#681724]" href="#diferenciais">
                    Por Que Escolher
                  </a>
                  <a onClick={closeMenu} className="hover:text-[#681724]" href="#avaliacoes">
                    Avaliações Google (5,0 ★)
                  </a>
                  <a onClick={closeMenu} className="hover:text-[#681724]" href="#contato">
                    Contato & Sede em Igarapé
                  </a>
                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Haynhandra Martins! Gostaria de agendar uma consulta jurídica."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center rounded-lg"
                    >
                      <WhatsAppIcon size={15} /> Falar no WhatsApp
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Luminous Light Mode: Warm Ivory & Champagne Canvas */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e5d8cb] bg-gradient-to-b from-[#fdfbf7] via-[#f8f4ec] to-[#f2ecdf]"
        >
          {/* Subtle Ambient Light Warm Glows */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[42rem] rounded-full bg-[#c59860]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[36rem] rounded-full bg-[#721b2a]/06 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              {/* Authority badge */}
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#d9b882] bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#681724] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c59860] shadow-[0_0_8px_#c59860]" />
                <span>DRA. HAYNHANDRA MARTINS · PREVIDENCIÁRIO (INSS) E CÍVEL · IGARAPÉ - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-[#38080f] sm:text-5xl lg:text-[3.85rem]"
              >
                Assessoria jurídica de excelência, humana e combativa para conquistar o que é{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#681724] via-[#9e733b] to-[#c59860]">
                  seu por direito.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#524144] sm:text-base sm:leading-8 font-medium"
              >
                ⚖️ <strong className="font-bold text-[#38080f]">Nota máxima 5,0 ★ com 26 avaliações verificadas no Google Meu Negócio.</strong> Liderada pela <span className="font-bold text-[#38080f]">Dra. Haynhandra Martins</span>, nossa atuação é reconhecida pelo acolhimento empático, extrema sinceridade e rigor técnico. Defesa firme em <span className="text-[#681724] font-bold">aposentadorias, BPC/LOAS, auxílio-doença, auxílio-acidente, pensão por morte, indenizações cíveis e direito de família/inventários</span>.
              </motion.p>

              {/* Tags destacadas pelo Google */}
              <motion.div
                variants={reveal}
                className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#4a363a]"
              >
                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5d9cc] bg-white px-3 py-1 shadow-xs text-[#541e26]">
                  <HelpCircle size={13} className="text-[#c59860]" /> Esclarecimento de dúvidas sem juridiquês
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5d9cc] bg-white px-3 py-1 shadow-xs text-[#541e26]">
                  <Gem size={13} className="text-[#c59860]" /> Trabalho de alta qualidade
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5d9cc] bg-white px-3 py-1 shadow-xs text-[#541e26]">
                  <ShieldCheck size={13} className="text-[#c59860]" /> Resiliência & dedicação inabalável
                </span>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Haynhandra Martins! Gostaria de consultar sobre meus direitos e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Haynhandra
                </GlowingButton>
                <GlowingButton
                  href="#atuacao"
                  size="lg"
                  variant="wine"
                  className="rounded-lg shadow-xs"
                >
                  Conhecer Nossas Áreas{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </GlowingButton>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#e2d5c6] pt-6 text-xs text-[#5c494c]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[#38080f] transition-colors hover:text-[#681724]"
                >
                  <Star size={15} className="fill-[#c59860] text-[#c59860]" />{" "}
                  5,0 estrelas no Google (26 avaliações verificadas)
                </a>
                <span className="inline-flex items-center gap-2 font-semibold text-[#4a363a]">
                  <Clock size={15} className="text-[#681724]" /> Seg. a Sex. a partir das 09:00
                </span>
                <span className="inline-flex items-center gap-2 font-semibold text-[#4a363a]">
                  <MapPin size={15} className="text-[#681724]" /> R. Alexandre Nunes, 157 - Centro, Igarapé
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Haynhandra Martins */}
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
              <div className="relative aspect-[4/5.2] overflow-hidden rounded-2xl border-2 border-[#d9c4af] bg-white shadow-2xl ring-1 ring-[#c59860]/40">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Haynhandra Martins — Advogada Previdenciária e Cível em Igarapé - MG"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#26070d] via-[#26070d]/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white drop-shadow-sm">
                      Dra. Haynhandra Martins
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f2dcba] font-semibold">
                      Advocacia Previdenciária & Cível
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c59860]/60 bg-[#38080f]/90 text-[#f2dcba] backdrop-blur-sm shadow-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Authority badge */}
              <div className="absolute -left-3 bottom-28 z-10 rounded-lg border border-[#e5d8cb] bg-white/95 backdrop-blur-md px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#38080f] shadow-lg sm:-left-5">
                <span className="text-[#c59860]">●</span> CENTRO DE IGARAPÉ - MG · ATENDIMENTO BRASIL
              </div>

              {/* Floating Google rating badge */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#e5d8cb] bg-white/95 backdrop-blur-md p-3.5 shadow-xl transition-all hover:scale-105 hover:border-[#681724] sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#c59860] text-[#c59860]" />
                    <span className="font-serif text-base font-bold text-[#38080f]">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#614e51]">
                  26 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - High Contrast Warm Champagne Velvet Band */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-y border-[#dbcbbb] bg-[#eae2d3] text-[#38080f]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima de satisfação no Google com 26 avaliações",
              ],
              [
                "100% 5★",
                "reconhecimento por transparência, resiliência e acolhimento",
              ],
              [
                "Previdenciário & Cível",
                "atuação técnica em INSS, Aposentadorias, Família e Contratos",
              ],
              [
                "Igarapé & Brasil",
                "sede no Centro de Igarapé e assessoria online para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#d4c2b0]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-bold text-[#681724] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#59474a] font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Advogada - Executive White & Warm Gold Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#e5d8cb] bg-white py-20 text-[#2b1a1d] sm:py-28 lg:py-32"
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
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#d9c4af] bg-[#faf6f0] shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Haynhandra Martins em seu escritório de Advocacia"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#26070d]/80 via-[#26070d]/20 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#d9b882] bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#681724]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#681724]">
                    Advocacia Especializada & Humana
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#38080f] font-bold">
                  Dra. Haynhandra Martins
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#681724]">
                  Especialista em Direito Previdenciário (INSS) e Cível
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#614e51]">
                  Centro de Igarapé - MG · R. Alexandre Nunes, 157
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c59860]/60 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#d9b882] bg-[#faf6f0] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#681724] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c59860]" />
                <span>CONHEÇA A DRA. HAYNHANDRA MARTINS</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#38080f] sm:text-4xl lg:text-[3.25rem]"
              >
                Mais do que um processo: o{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#681724] via-[#9e733b] to-[#c59860]">
                  cuidado com a sua história, o sustento da sua família e a sua paz.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4e3d40] font-normal"
              >
                Liderado pela <strong className="font-bold text-[#38080f]">Dra. Haynhandra Martins</strong>, o escritório <strong className="font-bold text-[#38080f]">Haynhandra Martins Advocacia</strong> consolidou-se em Igarapé, na Região Metropolitana e em todo o Brasil como uma referência em atendimento ético, acolhedor e combativo na defesa de direitos fundamentais.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4e3d40] font-normal"
              >
                Reconhecida pelos próprios clientes por sua <strong className="font-bold text-[#38080f]">sinceridade ímpar, resiliência para resolver problemas complexos que se arrastavam há anos</strong> e pela capacidade de explicar o direito de forma simples e transparente, a Dra. Haynhandra atua diretamente em cada causa com foco em resultados concretos e respeito absoluto à pessoa humana.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#d9b882]/70 bg-[#faf6f0] p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#382629]">
                  &ldquo;Além da excelente profissional, ela te ouve, se importa com seu caso, é extremamente sincera, a recepcionista é um amor de pessoa também!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-[#681724]">
                  — Renata Custodia · Local Guide no Google (5,0 ★ · 26 Avaliações Verificadas)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#38080f] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                  <span>Nota máxima 5,0 ★ com 26 avaliações no Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                  <span>Especialista em Previdenciário (INSS), Cível e Família</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                  <span>Atendimento atencioso, sincero e sem juridiquês</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                  <span>Sede no Centro de Igarapé - MG & Online para todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Haynhandra! Gostaria de agendar uma consulta jurídica com seu escritório."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Haynhandra
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38080f] transition-colors hover:text-[#681724]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação - Previdenciário (INSS) & Cível */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#e5d8cb] bg-[#f8f4ec] py-20 sm:py-28 lg:py-32"
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
                eyebrow="PILARES DE ATUAÇÃO & ESPECIALIDADES"
                description="Especialização jurídica rigorosa e combatividade incansável para resguardar seus benefícios do INSS, proteger seu patrimônio e resolver conflitos familiares com segurança."
              >
                Atuação especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#681724] via-[#9e733b] to-[#c59860]">
                  Direito Previdenciário (INSS) e Cível.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#5c494c]">
                Clique em uma especialidade abaixo para conferir as principais demandas atendidas e iniciar seu atendimento direto pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[360px] flex-col rounded-xl border border-[#e5d9cc] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c59860] hover:shadow-card-hover sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#e8dacb] bg-[#faf6f0] text-[#681724] shadow-xs transition-colors group-hover:border-[#681724] group-hover:bg-[#681724] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#c59860]/60 transition-colors group-hover:text-[#681724]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-block rounded-md border border-[#e5d9cc] bg-[#faf6f0] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#681724]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.3rem] leading-tight text-[#38080f] font-bold">
                        {area.title}
                      </h3>
                      <p className="mt-2.5 text-[12px] leading-5 text-[#574447]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#681724] hover:text-[#c59860] cursor-pointer"
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

        {/* Por Que Escolher a Haynhandra Martins Advocacia - 4 Pilares de Excelência */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#e5d8cb] bg-white py-20 text-[#2b1a1d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="REPUTAÇÃO 5 ESTRELAS NO GOOGLE"
                description="Os pilares de Resiliência Processual, Acolhimento Humano, Agilidade na Resolução e Extrema Sinceridade comprovados em 26 avaliações 5 estrelas no Google Meu Negócio."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#681724] via-[#9e733b] to-[#c59860]">
                  Haynhandra Martins Advocacia?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Haynhandra! Gostaria de consultar sobre a minha situação jurídica com seu escritório."
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
              {/* Pilar 1: Resiliência em Casos Complexos */}
              <div className="flex flex-col rounded-xl border border-[#e5d9cc] bg-[#faf6f0] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c59860] hover:shadow-card">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#e8dacb] bg-white text-[#681724]">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#38080f]">
                  Resiliência Comprovada
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#574447]">
                  Capacidade de assumir e resolver causas travadas há anos, como casos que se arrastavam há 4 anos destravados em poucos meses com combatividade técnica.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#681724]">
                  &ldquo;Problema de 4 anos resolvido com uns 6 meses&rdquo;
                </span>
              </div>

              {/* Pilar 2: Acolhimento & Escuta Atenta */}
              <div className="flex flex-col rounded-xl border border-[#e5d9cc] bg-[#faf6f0] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c59860] hover:shadow-card">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#e8dacb] bg-white text-[#681724]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#38080f]">
                  Acolhimento Real
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#574447]">
                  Escuta paciente, respeito à história do cliente e carinho no atendimento, acolhendo quem chega desacreditado ou desamparado perante a burocracia.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#681724]">
                  &ldquo;Ela te ouve, se importa com seu caso, nos deixa muito à vontade&rdquo;
                </span>
              </div>

              {/* Pilar 3: Clareza & Sem Juridiquês */}
              <div className="flex flex-col rounded-xl border border-[#e5d9cc] bg-[#faf6f0] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c59860] hover:shadow-card">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#e8dacb] bg-white text-[#681724]">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#38080f]">
                  Clareza nos Processos
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#574447]">
                  Explicação do direito em linguagem humana e acessível, esclarecendo todas as dúvidas e mantendo o cliente seguro em cada etapa processual.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#681724]">
                  &ldquo;Explica nosso direito para que possamos entender&rdquo;
                </span>
              </div>

              {/* Pilar 4: Extrema Sinceridade & Ética */}
              <div className="flex flex-col rounded-xl border border-[#e5d9cc] bg-[#faf6f0] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#c59860] hover:shadow-card">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#e8dacb] bg-white text-[#681724]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#38080f]">
                  Extrema Sinceridade
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#574447]">
                  Transparência total desde o primeiro minuto sobre as reais possibilidades jurídicas do caso, sem falsas promessas e com ética inegociável.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#681724]">
                  &ldquo;Extremamente sincera e sem deixar nenhuma pendência&rdquo;
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
                className="group flex flex-col justify-between rounded-xl border border-[#e5d9cc] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#c59860] hover:shadow-card-hover sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e8dacb] bg-[#faf6f0] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#681724]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-bold text-[#c59860]">
                      Igarapé - MG
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#38080f] sm:text-[1.75rem] font-bold">
                    Paciência, Atenção & Clareza em Cada Detalhe
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#574447]">
                    Sabemos a angústia de enfrentar filas no INSS, ter laudos recusados ou lidar com disputas familiares e contratuais. Na Haynhandra Martins Advocacia, você é tratado com carinho, respeito e orientações claras sobre cada passo do seu direito.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-semibold text-[#38080f]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                      <span>Contato direto pelo WhatsApp e atualizações periódicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                      <span>Prioridade absoluta ao sustento e à dignidade da sua família</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                      <span>Linguagem acessível, explicando seus direitos sem termos complicados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#f0e6dc] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Haynhandra! Gostaria de conversar diretamente sobre meu caso com seu escritório."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#e8dacb] bg-[#faf6f0] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#681724] transition-all hover:border-[#681724] hover:bg-[#f3ebe0] hover:text-[#38080f]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Haynhandra no WhatsApp
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
                className="group flex flex-col justify-between rounded-xl border border-[#e5d9cc] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#c59860] hover:shadow-card-hover sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e8dacb] bg-[#faf6f0] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#681724]">
                      <Scale size={14} /> Estratégia & Resiliência
                    </span>
                    <span className="text-xs font-bold text-[#c59860]">
                      Rigor Técnico
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#38080f] sm:text-[1.75rem] font-bold">
                    Causas Complexas Exigem Estratégia, Não Improviso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#574447]">
                    Um pedido mal formulado pode custar anos de atraso ou a perda irremediável de direitos. A Dra. Haynhandra Martins constrói teses jurídicas robustas com provas periciais e documentais sólidas para buscar a decisão mais vantajosa para você.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-semibold text-[#38080f]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                      <span>Auditoria técnica de vínculos, documentos médicos e contratos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                      <span>Postura firme em impugnações de laudos e perícias judiciais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#681724]" />
                      <span>Histórico de reversão de indeferimentos e destravamento de processos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#f0e6dc] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Haynhandra! Preciso de ajuda jurídica para analisar minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#e8dacb] bg-[#faf6f0] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#681724] transition-all hover:border-[#681724] hover:bg-[#f3ebe0] hover:text-[#38080f]"
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

        {/* Citação em Destaque & Compromisso Real */}
        <section className="relative overflow-hidden border-b border-[#e5d8cb] bg-gradient-to-r from-[#fbf8f2] via-[#f3ecdf] to-[#fbf8f2] py-20 text-[#2b1a1d] sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c59860]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#681724]/06 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota máxima de 5,0 ★ com 26 avaliações no Google reflete a dedicação diária, o acolhimento e o respeito incondicional a cada cliente que confia sua causa à Dra. Haynhandra Martins."
              >
                Cuidamos do seu direito com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#681724] via-[#9e733b] to-[#c59860]">
                  sinceridade, empatia e combatividade total.
                </span>
              </Heading>

              <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#d9b882]/70 bg-white p-6 shadow-card sm:flex-row sm:items-start">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-[#c59860] shadow-sm">
                  <Image
                    src={FOTO_EDITORIAL_SRC}
                    alt="Dra. Haynhandra Martins — Advocacia"
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <blockquote className="font-serif text-base italic leading-7 text-[#38080f]">
                    &ldquo;Minha experiência foi a das melhores possíveis, pois eu estava com um problema a uns 4 anos e com uns 6 meses resolveu, e outra além da simplicidade, é bem esclarecida, não deixa nenhuma pendência eu super indico, é uma profissional de alta qualidade!&rdquo;
                  </blockquote>
                  <footer className="mt-3 font-sans text-[11px] font-bold not-italic uppercase tracking-wider text-[#681724]">
                    — Jucimara Biju · Avaliação Verificada no Google Meu Negócio
                  </footer>
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e2d5c6]"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Empatia",
                  "Você é ouvido com atenção e acolhimento. Entendemos a realidade da sua família, da sua saúde e do seu patrimônio para traçar o caminho jurídico mais seguro e humano.",
                ],
                [
                  "02",
                  "Transparência & Comunicação Clara",
                  "Você nunca fica sem respostas. Mantemos você informado de cada andamento do seu processo no INSS, na Justiça ou no Cartório, explicando tudo sem termos técnicos difíceis.",
                ],
                [
                  "03",
                  "Resiliência & Combate por Resultados",
                  "Lutamos com persistência inabalável, buscando resolver conflitos com rapidez e cobrando cada direito e retroativo que lhe pertence legitimamente.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-bold text-[#681724]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#38080f] font-bold">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#574447]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 26 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#e5d8cb] bg-[#f8f4ec] py-20 text-[#2b1a1d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="DEPOIMENTOS REAIS NO GOOGLE"
                description="Nota máxima de 5,0 ★ com 26 avaliações verificadas. Histórias reais de quem teve seu caso resolvido com agilidade, acolhimento e dedicação."
              >
                O que dizem os clientes da{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#681724] via-[#9e733b] to-[#c59860]">
                  Dra. Haynhandra Martins
                </span>
              </Heading>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#e5d9cc] bg-white px-5 py-3 text-xs font-bold text-[#38080f] shadow-xs transition-all hover:border-[#681724] hover:bg-[#faf6f0]"
              >
                <GoogleIcon size={18} />
                <span>Ver avaliações no Google Meu Negócio</span>
                <ArrowUpRight size={15} className="text-[#681724]" />
              </a>
            </div>

            {/* Grid of Real Reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-xl border border-[#e5d9cc] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#c59860] hover:shadow-card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#d99b42]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d99b42] text-[#d99b42]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#e5d9cc] bg-[#faf6f0] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#681724]">
                        {review.badge}
                      </span>
                    </div>

                    <p className="mt-4 text-[13px] leading-6 text-[#382629]">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-4 rounded-lg border border-[#eadbce] bg-[#faf6f0] p-3 text-[11px] leading-5 text-[#523e42]">
                        <span className="font-bold text-[#681724]">
                          Resposta do Escritório:{" "}
                        </span>
                        {review.reply}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 border-t border-[#f0e6dc] pt-4">
                    <p className="font-serif text-sm font-bold text-[#38080f]">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#6e5a5d]">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede no Centro de Igarapé - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#e5d8cb] bg-white py-20 text-[#2b1a1d] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO JURÍDICO"
                description="Inicie seu atendimento diretamente pelo WhatsApp. Prestamos assistência ágil e resolutiva para clientes de Igarapé, Betim, Brumadinho, São Joaquim de Bicas, Região Metropolitana de BH e consultoria jurídica online para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#681724] via-[#9e733b] to-[#c59860]">
                  escutar sua história e defender seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Haynhandra! Gostaria de agendar um atendimento com a Haynhandra Martins Advocacia."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#5c494c]">
                  WhatsApp e Telefone do escritório:{" "}
                  <strong className="text-[#38080f]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#5c494c]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#681724]"
                  />
                  <div>
                    <p className="font-bold text-[#38080f]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#382629]">
                      Segunda a Sexta-feira · a partir das 09:00 até as 18:00
                    </p>
                    <p className="text-[11px] text-[#6e5a5d]">
                      Atendimento presencial com hora marcada e consultoria online para todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#681724]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-bold text-[#38080f] transition-colors hover:text-[#681724]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#681724]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#681724] text-[#382629] font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#681724]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#681724] text-[#382629] font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#681724]"
                  />
                  <span className="text-[#382629] font-medium">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e5d9cc] bg-[#faf6f0] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#ba8847] to-[#d4a86f]" />

              <div className="flex items-center gap-4">
                <div className="relative h-[88px] w-[280px] shrink-0 sm:h-[100px] sm:w-[330px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Haynhandra Martins Advocacia"
                    fill
                    sizes="(max-width: 640px) 280px, 330px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#574447]">
                <strong className="font-bold text-[#38080f]">
                  Haynhandra Martins Advocacia
                </strong>
                <br />
                Previdenciário (INSS) e Cível
                <br />
                Dra. Haynhandra Martins — Advogada Titular
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#eadbce] bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#681724]">
                  Atendimento & Disponibilidade
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4a383b]">
                  <span>Horário de Funcionamento</span>
                  <span className="text-right font-bold text-[#38080f]">
                    Abre às 09:00 (Seg a Sex)
                  </span>
                  <span>Modalidade</span>
                  <span className="text-right font-bold text-[#681724]">
                    Presencial & Online
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-[#38080f]">Centro, Igarapé - MG</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#38080f]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#eadbce]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#6e5a5d]">
                  Atendimento dedicado, ético e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Haynhandra! Gostaria de agendar um atendimento presencial em Igarapé ou online."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d9c5b2] bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#681724] transition-colors hover:border-[#681724] hover:bg-[#faf6f0] hover:text-[#38080f]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Dra. Haynhandra <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Rich Marsala Accent Banner */}
        <section className="border-t border-[#3b0911] bg-gradient-to-r from-[#420a13] via-[#681724] to-[#420a13] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2dcba]">
                <Sparkles size={13} /> DRA. HAYNHANDRA MARTINS · HAYNHANDRA MARTINS ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Não deixe seus direitos desamparados. Garanta a assessoria certa.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Haynhandra! Gostaria de consultar sobre meus direitos com a Haynhandra Martins Advocacia."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#ba8847] via-[#cfa36b] to-[#ba8847] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#2b1218] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Warm Canvas */}
        <footer className="border-t border-[#dbcbbb] bg-[#eae2d3] px-5 py-14 text-[#4d3d40] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Haynhandra Martins Advocacia"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[285px] sm:h-[88px] sm:w-[320px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Haynhandra Martins Advocacia - Logo Oficial"
                    fill
                    sizes="(max-width: 640px) 285px, 320px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#574447]">
                ⚖️ Advocacia humanizada, ética e combativa. Especializada em Direito Previdenciário (INSS) e Cível. Nota máxima 5,0 ★ no Google com 26 avaliações em Igarapé - MG e assessoria jurídica para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-bold text-[#681724]">
                Haynhandra Martins Advocacia · Previdenciário (INSS) e Cível · OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#681724]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#574447]">
                <a className="footer-link font-medium" href="#inicio">
                  Início
                </a>
                <a className="footer-link font-medium" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link font-medium" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link font-medium" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link font-medium" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link font-medium" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#681724]">
                Contato & Sede
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#574447]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Haynhandra! Gostaria de solicitar um atendimento com a Haynhandra Martins Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-bold text-[#681724]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2 font-medium">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] font-bold text-[#681724]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · Abre às 09:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#d4c2b0] pt-6 text-[10px] text-[#6b5a5d] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} HAYNHANDRA MARTINS ADVOCACIA · PREVIDENCIÁRIO (INSS) E CÍVEL. Todos os direitos reservados.
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
              "Olá, Dra. Haynhandra! Gostaria de consultar sobre meus direitos."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Haynhandra Martins"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-white border border-[#e5d9cc] px-3.5 py-1.5 text-xs font-bold text-[#38080f] shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Haynhandra
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#e5d9cc] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10 text-[#2b1a1d]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e5d9cc] bg-[#faf6f0] text-[#4a363a] transition-colors hover:border-[#681724] hover:bg-[#681724] hover:text-white cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">{activeArea.category.toUpperCase()}</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#38080f] font-bold sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#574447]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#f0e6dc] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#681724]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#2b1a1d]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c59860]" />
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
                    className="px-5 py-3 text-xs font-bold text-[#6e5a5d] transition-colors hover:text-[#38080f] cursor-pointer"
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
