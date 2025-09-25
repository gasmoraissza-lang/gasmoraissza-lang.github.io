'use client';

import { useState } from 'react';
import { useTranslation } from '@/utils/translations';
import { Card, CardContent, CardHeader, Heading, Text, Badge, Button } from '@/components/ui';

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
  
  .article-card {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  .article-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent);
  }
  
  .article-card::after {
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

interface ArticlesSectionProps {
  locale: string;
}

export default function ArticlesSection({ locale }: ArticlesSectionProps) {
  const { t } = useTranslation(locale);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const articles = [
    {
      id: 1,
      title: 'Novas Regras do Trabalho Remoto em 2024',
      excerpt: 'Entenda as principais mudanças na legislação trabalhista para o trabalho remoto e híbrido.',
      category: 'Direito Trabalhista',
      date: '2024-01-15',
      readTime: '5 min',
      image: '💼'
    },
    {
      id: 2,
      title: 'Direitos do Consumidor em Compras Online',
      excerpt: 'Saiba como se proteger e exercer seus direitos em compras pela internet.',
      category: 'Direito Civil',
      date: '2024-01-10',
      readTime: '4 min',
      image: '🛒'
    },
    {
      id: 3,
      title: 'Como Constituir uma Empresa no Brasil',
      excerpt: 'Guia completo sobre os tipos societários e processo de abertura de empresas.',
      category: 'Direito Empresarial',
      date: '2024-01-05',
      readTime: '7 min',
      image: '🏢'
    },
    {
      id: 4,
      title: 'Divórcio Consensual: Passo a Passo',
      excerpt: 'Entenda o processo de divórcio consensual e os documentos necessários.',
      category: 'Direito de Família',
      date: '2024-01-01',
      readTime: '6 min',
      image: '💔'
    }
  ];

  const categories = ['Todos', 'Direito Trabalhista', 'Direito Civil', 'Direito Empresarial', 'Direito de Família'];

  const filteredArticles = selectedCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="articles" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
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
            <Heading level={2} className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight animate-textReveal text-white">
              {t('articles.title')}
            </Heading>
            
            <div className="animate-textReveal" style={{ animationDelay: '300ms' }}>
              <Text size="lg" className="max-w-4xl mx-auto leading-relaxed text-lg text-gray-300">
                {t('articles.subtitle')}
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
                               ? 'bg-gradient-to-r from-zinc-800/90 to-zinc-900/90 text-white shadow-2xl shadow-zinc-900/30 border-zinc-600/50 transform scale-105 animate-glow'
                               : 'bg-white/10 text-gray-300 hover:bg-white/20 shadow-lg shadow-zinc-900/10 border-zinc-600/50'
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
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full border-2 border-white"></div>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.map((article, index) => (
              <div
                key={article.id}
                className="group relative article-card premium-shadow rounded-3xl overflow-hidden
                         hover-lift animate-fadeInUp animate-morphing"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-zinc-800/20"></div>
                  <span className="text-6xl relative z-10 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                    {article.image}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="relative bg-gradient-to-r from-zinc-800/90 to-zinc-900/90 
                                   px-4 py-2 rounded-2xl 
                                   text-xs font-semibold text-white
                                   transition-all duration-300 backdrop-blur-sm border border-zinc-600/50">
                      <span className="relative z-10">{article.category}</span>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {article.readTime}
                    </span>
                  </div>

                  <Heading level={3} size="lg" className="mb-4 leading-tight text-white
                                                       group-hover:text-gray-100
                                                       transition-colors duration-300 font-medium text-lg">
                    {article.title}
                  </Heading>

                  <Text className="mb-6 text-sm leading-relaxed text-gray-300 line-clamp-3">
                    {article.excerpt}
                  </Text>

                  <div className="flex items-center justify-between">
                    <Text size="sm" className="text-gray-400">
                      {t('articles.publishedOn')} {new Date(article.date).toLocaleDateString('pt-BR')}
                    </Text>
                    <button className="group/btn relative bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 
                                     text-white font-semibold py-2 px-4 rounded-xl transition-all duration-500 
                                     text-sm hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/40
                                     border border-zinc-600/50 hover:border-zinc-500/70
                                     backdrop-blur-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 animate-shimmer transition-opacity duration-300"></div>
                      <span className="relative flex items-center space-x-2">
                        <span>{t('articles.readMore')}</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
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