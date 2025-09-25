
export interface Translations {
  [key: string]: string | Translations;
}

const translations: { [locale: string]: Translations } = {
  pt: {
    header: {
      title: "Marina Cabo",
      subtitle: "Advocacia Especializada",
      nav: {
        areas: "Áreas de Atuação",
        about: "Sobre",
        articles: "Artigos",
        faq: "Perguntas e Respostas",
        contact: "Contato"
      }
    },
    hero: {
      title: "Nossos profissionais estão em constante atualização, para oferecer soluções baseadas na análise completa de cada uma das demandas e atuando de forma completa e integral na resolução, focando no esclarecimento das circunstâncias e estudo de caso para encontrar na lei uma medida satisfatória.",
      titleHighlight: "Para você",
      description: "Confiança e seriedade no acompanhamento de cada processo. Atendemos todo o Brasil. Atendimento em português, inglês e espanhol, personalizado para cada caso. Profissionais experientes a disposição para atendimento online. Inovação e tecnologia para acompanhar prazos e processos, informando em tempo real cada passo da demanda.",
      cta: {
        consultation: "Agende uma Consulta",
        services: "Nossos Serviços"
      }
    },
    areas: {
      title: "Nossas Áreas de Atuação",
      subtitle: "Especialidades jurídicas para atender suas necessidades",
      civil: {
        title: "Direito Civil",
        description: "Contratos, responsabilidade civil, direito de família e sucessões."
      },
      labor: {
        title: "Direito Trabalhista",
        description: "Defesa dos direitos trabalhistas, rescisões e acordos coletivos."
      },
      corporate: {
        title: "Direito Empresarial",
        description: "Constituição de empresas, contratos comerciais e consultoria jurídica."
      }
    },
    articles: {
      title: "Artigos e Publicações",
      subtitle: "Conteúdo jurídico atualizado para informar e esclarecer",
      readMore: "Leia mais",
      publishedOn: "Publicado em"
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Tire suas dúvidas sobre questões jurídicas comuns",
      question: "Pergunta",
      answer: "Resposta"
    },
    about: {
      title: "Sobre Marina Cabo",
      description1: "Nossos profissionais estão em constante atualização, para oferecer soluções baseadas na análise completa de cada uma das demandas e atuando de forma completa e integral na resolução, focando no esclarecimento das circunstâncias e estudo de caso para encontrar na lei uma medida satisfatória.",
      description2: "Confiança e seriedade no acompanhamento de cada processo. Atendemos todo o Brasil. Atendimento em português, inglês e espanhol, personalizado para cada caso. Profissionais experientes a disposição para atendimento online. Inovação e tecnologia para acompanhar prazos e processos, informando em tempo real cada passo da demanda."
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Agende sua consulta e tire suas dúvidas jurídicas",
      info: {
        title: "Informações de Contato",
        email: "marina@marinacabo.adv.br",
        phone: "(11) 9999-9999",
        location: "São Paulo - SP"
      },
      hours: {
        title: "Horário de Atendimento",
        weekdays: "Segunda a Sexta: 8h às 18h",
        saturday: "Sábado: 8h às 12h",
        sunday: "Domingo: Fechado"
      }
    },
    footer: {
      copyright: "Marina Cabo Advogados - Conhecimento & Estratégia. Todos os direitos reservados.",
      oab: "OAB/SP 123.456"
    }
  },
  en: {
    header: {
      title: "Marina Cabo",
      subtitle: "Specialized Law Firm",
      nav: {
        areas: "Practice Areas",
        about: "About",
        articles: "Articles",
        faq: "FAQ",
        contact: "Contact"
      }
    },
    hero: {
      title: "Defending your rights with",
      titleHighlight: "excellence",
      description: "Law firm specialized in civil, labor and corporate law. We offer personalized legal solutions to protect your interests.",
      cta: {
        consultation: "Schedule a Consultation",
        services: "Our Services"
      }
    },
    areas: {
      title: "Our Areas of Practice",
      subtitle: "Legal specialties to meet your needs",
      civil: {
        title: "Civil Law",
        description: "Contracts, civil liability, family law and inheritance."
      },
      labor: {
        title: "Labor Law",
        description: "Defense of labor rights, terminations and collective agreements."
      },
      corporate: {
        title: "Corporate Law",
        description: "Company incorporation, commercial contracts and legal consulting."
      }
    },
    articles: {
      title: "Articles and Publications",
      subtitle: "Updated legal content to inform and clarify",
      readMore: "Read more",
      publishedOn: "Published on"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Clear your doubts about common legal issues",
      question: "Question",
      answer: "Answer"
    },
    about: {
      title: "About Marina Cabo",
      description1: "Lawyer with over 10 years of experience, specialized in civil, labor and corporate law. Graduate from Federal University, with postgraduate studies in Corporate Law.",
      description2: "Committed to offering effective and personalized legal solutions, always prioritizing the interests and needs of our clients."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Schedule your consultation and clear your legal doubts",
      info: {
        title: "Contact Information",
        email: "marina@marinacabo.adv.br",
        phone: "(11) 9999-9999",
        location: "São Paulo - SP"
      },
      hours: {
        title: "Business Hours",
        weekdays: "Monday to Friday: 8am to 6pm",
        saturday: "Saturday: 8am to 12pm",
        sunday: "Sunday: Closed"
      }
    },
    footer: {
      copyright: "Marina Cabo Advogados - Knowledge & Strategy. All rights reserved.",
      oab: "OAB/SP 123.456"
    }
  }
};

export function getTranslation(locale: string, key: string): string {
  const keys = key.split('.');
  let translation: any = translations[locale] || translations['pt'];
  
  for (const k of keys) {
    if (translation && typeof translation === 'object' && k in translation) {
      translation = translation[k];
    } else {
      return key;
    }
  }
  
  return typeof translation === 'string' ? translation : key;
}

export function useTranslation(locale: string) {
  const t = (key: string) => getTranslation(locale, key);
  return { t };
}
