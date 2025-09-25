'use client';

import { useTranslation } from '@/utils/translations';
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px) rotate(-1deg);
    }
    to {
      opacity: 1;
      transform: translateX(0) rotate(0deg);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px) rotate(1deg);
    }
    to {
      opacity: 1;
      transform: translateX(0) rotate(0deg);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-8px) rotate(1deg);
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
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    opacity: 0;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
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
  
  .hover-lift {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .hover-lift:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 
      0 35px 70px -12px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
`;

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const { t } = useTranslation(locale);

  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <footer className="relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #000000 100%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)' }}></div>
        
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, #333333 0%, transparent 70%)' }}></div>
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-2xl animate-float" style={{ background: 'radial-gradient(circle, #666666 0%, transparent 70%)', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, #4a4a4a 0%, transparent 70%)', animationDelay: '4s' }}></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle at 25% 25%, #ffffff 0%, transparent 50%)' }}></div>
          <div className="absolute bottom-0 right-0 w-full h-full" style={{ background: 'radial-gradient(circle at 75% 75%, #cccccc 0%, transparent 50%)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-lg font-medium mb-8" style={{ color: '#ffffff' }}>
                Links Rápidos
              </h4>
              
              <nav className="space-y-3">
                {[
                  { id: 'areas', label: t('header.nav.areas') },
                  { id: 'about', label: t('header.nav.about') },
                  { id: 'articles', label: t('header.nav.articles') },
                  { id: 'faq', label: t('header.nav.faq') },
                  { id: 'contact', label: t('header.nav.contact') }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-left transition-colors duration-300 hover:opacity-80"
                    style={{ color: '#cccccc' }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-8" style={{ color: '#ffffff' }}>
                Contato
              </h4>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: '#ffffff' }}>
                    Email
                  </div>
                  <div className="text-sm" style={{ color: '#cccccc' }}>
                    atendimento@marinacabo.adv.br
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: '#ffffff' }}>
                    Telefone
                  </div>
                  <div className="text-sm" style={{ color: '#cccccc' }}>
                    11 99858-6727
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: '#ffffff' }}>
                    Endereço
                  </div>
                  <div className="text-sm" style={{ color: '#cccccc' }}>
                    Edifício Vitrine Iguatemy<br />
                    Av. Brig Faria Lima, 1811 - ESC 1119<br />
                    São Paulo 01452-001, BR
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="text-sm font-medium mb-3" style={{ color: '#ffffff' }}>
                    Redes Sociais
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:opacity-80"
                      style={{ color: '#cccccc' }}
                    >
                      Facebook
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:opacity-80"
                      style={{ color: '#cccccc' }}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#333333' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm" style={{ color: '#999999' }}>
              © {currentYear} {t('footer.copyright')}
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#cccccc' }}>
                Política de Privacidade
              </button>
              <div className="w-px h-4" style={{ backgroundColor: '#333333' }}></div>
              <button className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: '#cccccc' }}>
                Termos de Uso
              </button>
              <div className="w-px h-4" style={{ backgroundColor: '#333333' }}></div>
              <div className="text-sm" style={{ color: '#999999' }}>
                {t('footer.oab')}
              </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
