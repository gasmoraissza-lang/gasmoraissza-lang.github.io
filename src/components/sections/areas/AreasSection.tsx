'use client';

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
  
  .area-card {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  .area-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent);
  }
  
  .area-card::after {
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
  
  @media (max-width: 640px) {
    .hover-lift:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;

interface AreasSectionProps {
  locale: string;
}

export default function AreasSection({ locale }: AreasSectionProps) {
  const { t } = useTranslation(locale);

  const areas = [
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Direito de Família',
      description: 'Atuação nas demandas familiares, como acionamento para pensão alimentícia, estabelecimento de guarda, guarda compartilhada, entre outros assuntos nos quais colocamos a disposição nosso conhecimento e experiência e encontramos um equilíbrio nas relações jurídicas.',
      services: [
        'Pensão de Alimentos',
        'Guardas e Regulamentação de convivência',
        'Autorização viagem nacional e internacional',
        'Guarda de filhos e netos',
        'Guarda de animais'
      ],
      color: 'from-blue-500/20 to-blue-600/10',
      accent: 'from-blue-400 to-blue-500'
    },
    {
      icon: '🛒',
      title: 'Direito do Consumidor',
      description: 'Direito do Consumidor, ação judicial e em situações que exigem medidas cautelares ou urgentes.',
      services: [
        'Ação de indenização',
        'Companhias aéreas',
        'Cursos de intercâmbio e pacotes de viagens',
        'Danos e extravios de mala',
        'Medidas cautelares'
      ],
      color: 'from-green-500/20 to-green-600/10',
      accent: 'from-green-400 to-green-500'
    },
    {
      icon: '💼',
      title: 'Direito do Trabalho',
      description: 'Reclamação Trabalhista, Contestações, Pagamento em Consignação e Pedido de reversão de dispensa por justa causa.',
      services: [
        'Reclamação Trabalhista',
        'Contestações',
        'Pagamento em Consignação',
        'Pedido de reversão de dispensa por justa causa',
        'Consultoria trabalhista'
      ],
      color: 'from-orange-500/20 to-orange-600/10',
      accent: 'from-orange-400 to-orange-500'
    },
    {
      icon: '🏛️',
      title: 'Direito Previdenciário',
      description: 'Ações e processos de previdência, como ações de aposentadoria por idade ou invalidez.',
      services: [
        'Aposentadoria por idade',
        'Aposentadoria por invalidez',
        'Processos de previdência',
        'Consultoria previdenciária',
        'Recursos administrativos'
      ],
      color: 'from-purple-500/20 to-purple-600/10',
      accent: 'from-purple-400 to-purple-500'
    },
    {
      icon: '💰',
      title: 'Recuperação de Créditos',
      description: 'Quando é necessário o acionamento extra-judicial ou judicial para o cumprimento de uma dívida ou obrigação.',
      services: [
        'Acionamento extra-judicial',
        'Acionamento judicial',
        'Cumprimento de dívidas',
        'Cumprimento de obrigações',
        'Negociação de débitos'
      ],
      color: 'from-red-500/20 to-red-600/10',
      accent: 'from-red-400 to-red-500'
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="areas" className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #0f0f0f 75%, #000000 100%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}></div>
        
        <div className="absolute top-10 left-4 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 30%, transparent 70%)' }}></div>
        <div className="absolute top-20 right-4 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full blur-2xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 60%)', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.015) 0%, transparent 70%)', animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-2xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, transparent 60%)', animationDelay: '6s' }}></div>
        
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
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Heading level={2} className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-textReveal text-white">
              {t('areas.title')}
            </Heading>
            
            <div className="animate-textReveal" style={{ animationDelay: '300ms' }}>
              <Text size="lg" className="max-w-3xl sm:max-w-4xl mx-auto leading-relaxed text-base sm:text-lg text-gray-300 px-4">
                {t('areas.subtitle')}
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group relative area-card premium-shadow rounded-3xl overflow-hidden
                         hover-lift animate-fadeInUp animate-morphing
                         min-h-[500px] sm:min-h-[520px] lg:min-h-[540px]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${area.accent} 
                                  rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6
                                  group-hover:scale-110 group-hover:rotate-3
                                  transition-all duration-500 shadow-lg
                                  relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="text-2xl sm:text-3xl relative z-10">{area.icon}</span>
                    </div>
                    
                    <div className="text-base sm:text-lg font-medium mb-3 sm:mb-4 leading-tight text-white
                                 group-hover:text-gray-100 transition-colors duration-300">
                      {area.title}
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8 flex-grow">
                    <div className="text-xs sm:text-sm leading-relaxed text-gray-300
                                 group-hover:text-gray-200 transition-colors duration-300">
                      {area.description}
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 flex-shrink-0">
                    <div className="mb-3 sm:mb-4 text-sm sm:text-base font-medium text-white
                                 group-hover:text-gray-100 transition-colors duration-300">
                      Principais Serviços:
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {area.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-start group/item">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0 transition-all duration-300 group-hover/item:scale-125 bg-gradient-to-r ${area.accent}`}></div>
                          <div className="text-xs sm:text-sm leading-relaxed transition-colors duration-300 group-hover/item:text-white text-gray-300">
                            {service}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}