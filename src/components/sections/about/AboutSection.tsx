'use client';

import { useTranslation } from '@/utils/translations';
import { Card, CardContent, Heading, Text, Badge } from '@/components/ui';

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
  
  .about-card {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  .about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent);
  }
  
  .about-card::after {
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

interface AboutSectionProps {
  locale: string;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  const { t } = useTranslation(locale);

  const qualifications = [
    'Especialista em Direito de Família e das Sucessões pela Escola Superior de Advocacia Nacional – ESA Nacional OAB',
    'Especialista em Direito do Trabalho e Previdenciário pela PUC - MG',
    'Advogada OAB-SP n. 461742',
    'Interrrelacionalista pela FMU - Faculdades Metropolitanas Unidas',
    'Especialista em Política e Economia na América do Sul pela PUC - SP',
    'MBA - Master Business Administration em Marketing pela FGV - SP'
  ];

  const achievements = [
    'Escreve artigos nas áreas de Direito do Trabalho, Direito de Família, Falência e Recuperação Judicial, Direitos Autorais e Direito do Consumidor',
    'Artigo selecionado para representar o Brasil no Conic - Congresso Internacional de Iniciação Científica, com o tema da Imigração Boliviana em São Paulo',
    'Participação em Ações de voluntariado nas ONGs: Dah Araujo, Educa Transforma, Teto, Bem Gasto, Amigos do Bem e Mesa Brasil'
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="about" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fadeInUp">
              <div className="mb-8">
                <Heading level={2} className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
                  Marina Cabo
                </Heading>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="animate-textReveal" style={{ animationDelay: '200ms' }}>
                  <Text size="lg" className="text-gray-300 leading-relaxed">
                    Especialista em Direito de Família e das Sucessões pela Escola Superior de Advocacia Nacional – ESA Nacional OAB
                  </Text>
                </div>
                
                <div className="animate-textReveal" style={{ animationDelay: '400ms' }}>
                  <Text size="lg" className="text-gray-300 leading-relaxed">
                    Especialista em Direito do Trabalho e Previdenciário pela PUC - MG
                  </Text>
                </div>
              </div>

              <div className="mb-8">
                <Heading level={3} size="lg" className="mb-6 text-2xl font-light text-white">
                  Qualificações e Certificações
                </Heading>
                <div className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-start animate-slideIn" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-1 h-1 bg-gradient-to-r from-zinc-400 to-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <Text className="text-gray-300 leading-relaxed">{qualification}</Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <Heading level={3} size="lg" className="mb-6 text-2xl font-light text-white">
                  Realizações e Contribuições
                </Heading>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start animate-slideIn" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-1 h-1 bg-gradient-to-r from-zinc-400 to-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <Text className="text-gray-300 leading-relaxed">{achievement}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <div className="relative mb-8">
                <div className="about-card premium-shadow rounded-3xl overflow-hidden hover-lift">
                  <div className="aspect-[4/5] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-9%2F089%2F1080089%2FXz3BlIIa%2Fc1d2ccb0e9ce4da9b2b81ac927f402cf&methods=resize%2C1000%2C5000"
                      alt="Marina Cabo - Advogada"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    OAB-SP 461742
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Especialista
                  </div>
                </div>
              </div>

              <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <div className="text-center">
                  <Heading level={4} size="lg" className="mb-3 text-white">
                    Perfil Jusbrasil
                  </Heading>
                  <Text className="text-gray-300 mb-4">
                    Acesse o perfil completo da Marina Cabo no Jusbrasil para conhecer mais sobre sua atuação e experiência.
                  </Text>
                  <a 
                    href="https://www.jusbrasil.com.br/perfil/marina-cabo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 border-b border-gray-600 hover:border-white"
                  >
                    <span>Ver Perfil</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}