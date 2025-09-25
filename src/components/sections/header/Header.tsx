'use client';

import { useState } from 'react';
import { useTranslation } from '@/utils/translations';
import { Button } from '@/components/ui';

const styles = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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
  
  .animate-fadeInDown {
    animation: fadeInDown 0.6s ease-out forwards;
    opacity: 0;
  }
  
  .animate-slideIn {
    animation: slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    opacity: 0;
  }
  
  .glass-effect {
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .glass-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent);
    animation: shimmer 4s infinite;
  }
  
  .nav-link {
    position: relative;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .nav-link::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ffffff, #cccccc);
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::before {
    width: 100%;
  }
  
  .nav-link:hover {
    color: #ffffff !important;
    transform: translateY(-2px);
  }
  
  .mobile-menu {
    background: rgba(0, 0, 0, 0.98);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const { t } = useTranslation(locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 animate-fadeInDown">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Marina Cabo Advogados
                </h1>
                <p className="text-xs sm:text-sm font-medium text-gray-300">
                  Conhecimento & Estratégia
                </p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('areas')}
                className="nav-link font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                {t('header.nav.areas')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                {t('header.nav.about')}
              </button>
              <a
                href={`/${locale}/blog`}
                className="nav-link font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                Blog
              </a>
              <button
                onClick={() => scrollToSection('faq')}
                className="nav-link font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                {t('header.nav.faq')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-link font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                {t('header.nav.contact')}
              </button>
            </nav>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 mobile-menu">
                <button
                  onClick={() => scrollToSection('areas')}
                  className="block px-3 py-2 font-medium text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 nav-link"
                >
                  {t('header.nav.areas')}
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 font-medium text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 nav-link"
                >
                  {t('header.nav.about')}
                </button>
                <a
                  href={`/${locale}/blog`}
                  className="block px-3 py-2 font-medium text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 nav-link"
                >
                  Blog
                </a>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block px-3 py-2 font-medium text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 nav-link"
                >
                  {t('header.nav.faq')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 py-2 font-medium text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 nav-link"
                >
                  {t('header.nav.contact')}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}