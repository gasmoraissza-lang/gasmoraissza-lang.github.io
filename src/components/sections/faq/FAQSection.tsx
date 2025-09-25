'use client';

import { useState } from 'react';
import { useTranslation } from '@/utils/translations';
import { Card, CardContent, Heading, Text } from '@/components/ui';

const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    50% {
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.15), 0 0 60px rgba(0, 0, 0, 0.1);
    }
  }
  
  @keyframes morphing {
    0%, 100% {
      border-radius: 20px;
    }
    50% {
      border-radius: 30px;
    }
  }
  
  @keyframes textReveal {
    from {
      opacity: 0;
      transform: translateY(20px);
      filter: blur(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
  }
  
  .animate-slideIn {
    animation: slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    opacity: 0;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }
  
  .animate-glow {
    animation: glow 4s ease-in-out infinite;
  }
  
  .animate-morphing {
    animation: morphing 8s ease-in-out infinite;
  }
  
  .animate-textReveal {
    animation: textReveal 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .premium-shadow {
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  .faq-card {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  .faq-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent);
  }
  
  .faq-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
    pointer-events: none;
  }
  
  .hover-lift {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .hover-lift:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 
      0 32px 64px -12px rgba(0, 0, 0, 0.4),
      0 16px 32px -16px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }
`;

interface FAQSectionProps {
  locale: string;
}

export default function FAQSection({ locale }: FAQSectionProps) {
  const { t } = useTranslation(locale);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const faqs = [
    {
      id: 1,
      question: 'O que é uma ação de alimentos?',
      answer: 'A ação de alimentos é o processo judicial que tem por objetivo garantir o pagamento de pensão alimentícia a quem dela necessita, geralmente filhos menores ou pessoas incapazes de se sustentar.',
      category: 'Ação de Alimentos'
    },
    {
      id: 2,
      question: 'Quem pode pedir alimentos judicialmente?',
      answer: 'Podem solicitar alimentos: - Filhos menores de idade, representados pela mãe, pai ou responsável; - Ex-cônjuge ou companheiro, em alguns casos; - Parentes próximos, como pais ou avós, quando comprovada a necessidade.',
      category: 'Ação de Alimentos'
    },
    {
      id: 3,
      question: 'Quais documentos são necessários para entrar com uma ação de alimentos?',
      answer: 'É importante reunir: - Certidão de nascimento do(s) filho(s); - Documento de identidade e CPF do requerente maior de idade; - Comprovantes de residência; - Comprovante de renda (se houver); - Informações sobre o endereço e o trabalho da pessoa que deverá pagar os alimentos; - Comprovantes de despesas mensais (alimentação, saúde, escola etc.).',
      category: 'Ação de Alimentos'
    },
    {
      id: 4,
      question: 'Preciso contratar uma advogada para essa ação?',
      answer: 'Sim, é recomendável. Você pode contratar uma advogada particular.',
      category: 'Ação de Alimentos'
    },
    {
      id: 5,
      question: 'Quanto tempo leva para sair uma decisão judicial?',
      answer: 'Depende do caso e da agilidade do Judiciário local, em alguns casos a decisão pode levar 15-30 dias e em outros casos pode levar um pouco mais de tempo. Em situações urgentes, é possível solicitar uma decisão provisória (liminar) para garantir os alimentos rapidamente. Isto se deve à prestação de alimentos ter prioridade.',
      category: 'Ação de Alimentos'
    },
    {
      id: 6,
      question: 'Como é definido o valor da pensão?',
      answer: 'A/o juíza/juiz avalia três principais fatores, que são: - A necessidade de quem pede os alimentos; - A possibilidade financeira de quem deverá pagar. - E a razoabilidade, ou seja, um jogador de futebol que tem vários tipos de fonte de renda, não irá pagar como prestação de alimentos apenas o que a criança necessita mensalmente, mas sim irá direcionar uma parte de sua renda para que a criança tenha acesso ao mesmo padrão de vida que sua família.',
      category: 'Ação de Alimentos'
    },
    {
      id: 7,
      question: 'Quais são os tipos de divórcio?',
      answer: 'Judicial: ocorre quando há filhos menores, desacordo entre as partes ou necessidade de decisão do juiz. Extrajudicial: feito em cartório, quando o casal está de acordo, não tem filhos menores ou incapazes, e tem advogado.',
      category: 'Divórcio'
    },
    {
      id: 8,
      question: 'É obrigatório contratar advogado?',
      answer: 'Sim. Mesmo no divórcio em cartório, é necessário que cada parte tenha um advogado ou que ambos estejam representados por um único profissional.',
      category: 'Divórcio'
    },
    {
      id: 9,
      question: 'Quanto tempo leva um divórcio?',
      answer: 'Extrajudicial: pode ser concluído em poucos dias. Judicial: pode levar meses ou até anos, dependendo da complexidade e do nível de conflito.',
      category: 'Divórcio'
    },
    {
      id: 10,
      question: 'É preciso estar separado judicialmente para pedir o divórcio?',
      answer: 'Não. Desde 2010, com a Emenda Constitucional 66, não é mais necessário passar pela separação judicial antes do divórcio.',
      category: 'Divórcio'
    },
    {
      id: 11,
      question: 'Como fica a guarda dos filhos?',
      answer: 'Pode ser: Compartilhada (preferencial): ambos os pais dividem responsabilidades. Unilateral: um dos pais fica com a guarda, e o outro tem direito a visitas.',
      category: 'Divórcio'
    },
    {
      id: 12,
      question: 'E a pensão alimentícia?',
      answer: 'Pode ser definida para filhos e, em alguns casos, para o ex-cônjuge, dependendo da situação financeira e da dependência econômica.',
      category: 'Divórcio'
    },
    {
      id: 13,
      question: 'Como é feita a partilha de bens?',
      answer: 'Depende do regime de casamento: - Comunhão parcial: divide-se o que foi adquirido durante o casamento. - Comunhão universal: divide-se tudo, inclusive o que foi adquirido antes. - Separação total: cada um fica com o que é seu. - Participação final nos aquestos: divide-se o que foi adquirido em comum, com regras específicas.',
      category: 'Divórcio'
    },
    {
      id: 14,
      question: 'Posso me divorciar mesmo que o outro não queira?',
      answer: 'Sim. O divórcio pode ser unilateral. O juiz pode decretá-lo mesmo sem o consentimento do outro cônjuge.',
      category: 'Divórcio'
    },
    {
      id: 15,
      question: 'Preciso justificar o motivo do divórcio?',
      answer: 'Não. O divórcio é um direito e não exige justificativa legal.',
      category: 'Divórcio'
    },
    {
      id: 16,
      question: 'O que é um inventário?',
      answer: 'É o processo legal que ocorre após o falecimento de uma pessoa para identificar, avaliar e dividir seus bens, direitos e dívidas entre os herdeiros.',
      category: 'Inventário'
    },
    {
      id: 17,
      question: 'Quem pode abrir o inventário?',
      answer: 'Normalmente, um dos herdeiros ou o cônjuge sobrevivente inicia o processo, com o auxílio de um advogado.',
      category: 'Inventário'
    },
    {
      id: 18,
      question: 'Qual o prazo para abrir o inventário?',
      answer: 'O prazo legal é de até 60 dias após o falecimento. Se ultrapassado, pode haver multa sobre o imposto devido.',
      category: 'Inventário'
    },
    {
      id: 19,
      question: 'Preciso contratar uma advogada para essa ação?',
      answer: 'Sim, é recomendável. Você pode contratar uma advogada particular.',
      category: 'Inventário'
    },
    {
      id: 20,
      question: 'Quais são os tipos de inventário?',
      answer: 'Judicial: obrigatório quando há menores envolvidos ou discordância entre herdeiros. Extrajudicial: feito em cartório, quando todos os herdeiros são maiores e estão de acordo.',
      category: 'Inventário'
    },
    {
      id: 21,
      question: 'O que acontece se não fizer o inventário?',
      answer: 'Os bens ficam bloqueados, não podem ser vendidos ou transferidos, e pode haver penalidades fiscais.',
      category: 'Inventário'
    }
  ];

  const categories = ['Todos', 'Ação de Alimentos', 'Divórcio', 'Inventário'];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const filteredFaqs = selectedCategory === 'Todos' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="faq" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #0f0f0f 75%, #000000 100%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}></div>
        
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 30%, transparent 70%)' }}></div>
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full blur-2xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 60%)', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.015) 0%, transparent 70%)', animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full blur-2xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, transparent 60%)', animationDelay: '6s' }}></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)' }}></div>
          <div className="absolute bottom-0 right-0 w-full h-full" style={{ background: 'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)' }}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-full" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 60%)' }}></div>
        </div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 sm:mb-24">
            <Heading level={2} className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-light 
                                         tracking-tight animate-textReveal text-white">
              {t('faq.title')}
            </Heading>
            
            <div className="animate-textReveal" style={{ animationDelay: '300ms' }}>
              <Text size="lg" className="max-w-4xl mx-auto leading-relaxed text-lg text-gray-300">
                {t('faq.subtitle')}
              </Text>
            </div>
          </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          {categories.map((category, index) => (
            <div key={category} className="relative">
              <button
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-8 py-4 rounded-2xl text-sm font-medium transition-all duration-500 
                           backdrop-blur-md border-2 animate-slideIn hover-lift
                           ${
                             selectedCategory === category
                               ? 'bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white shadow-2xl shadow-gray-900/30 border-gray-600/50 transform scale-105 animate-glow'
                               : 'bg-white/10 text-gray-300 hover:bg-white/20 shadow-lg shadow-gray-900/10 border-gray-600/50'
                           }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-2">
                  {selectedCategory === category && (
                    <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full animate-pulse"></div>
                  )}
                  <span className="relative z-10">{category}</span>
                </div>
                
                {selectedCategory === category && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full border-2 border-white"></div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 mb-0">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group relative faq-card premium-shadow rounded-3xl overflow-hidden
                       hover-lift animate-fadeInUp animate-morphing"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-start justify-between relative z-10
                         hover:bg-transparent transition-all duration-300"
              >
                <div className="flex-1 pr-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="relative bg-gradient-to-r from-gray-800/90 to-gray-900/90 
                                   px-4 py-2 rounded-2xl 
                                   text-xs font-semibold text-white
                                   transition-all duration-300 backdrop-blur-sm border border-gray-600/50">
                      <span className="relative z-10">{faq.category}</span>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </span>
                  </div>
                  <Heading level={4} size="sm" className="leading-tight text-white
                                                       group-hover:text-gray-100
                                                       transition-colors duration-300 font-medium text-base">
                    {faq.question}
                  </Heading>
                </div>
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/70 
                               flex items-center justify-center
                               transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                               border border-gray-600/50
                               ${openItem === faq.id ? 'rotate-180 bg-gradient-to-br from-gray-600/90 to-gray-500/90 shadow-lg' : ''}`}>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openItem === faq.id && (
                <div className="px-8 pb-8 border-t border-gray-600/30 relative z-10">
                  <div className="pt-6">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-400 to-gray-500 rounded-full"></div>
                      <div className="ml-4">
                        <Text className="text-sm leading-relaxed text-gray-300">
                          {faq.answer}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      </section>
    </>
  );
}
