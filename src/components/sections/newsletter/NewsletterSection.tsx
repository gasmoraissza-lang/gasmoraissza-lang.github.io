'use client';

import { useState } from 'react';
import { Card, CardContent, Heading, Text, Input, Button } from '@/components/ui';

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
  
  .newsletter-card {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  .newsletter-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent);
  }
  
  .newsletter-card::after {
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

interface NewsletterSectionProps {
  locale: string;
}

export default function NewsletterSection({ locale }: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !permissionGranted) {
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubscribed(true);
      setEmail('');
      setPermissionGranted(false);
    } catch (error) {
      console.error('Erro ao inscrever na newsletter:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #0f0f0f 75%, #000000 100%)' }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}></div>
          
          <div className="absolute top-10 left-10 w-60 h-60 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 30%, transparent 70%)' }}></div>
          <div className="absolute top-20 right-20 w-48 h-48 rounded-full blur-2xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 60%)', animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.015) 0%, transparent 70%)', animationDelay: '4s' }}></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-800/20 via-gray-700/10 to-gray-800/20 rounded-3xl blur-xl animate-float"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-900/30 to-transparent rounded-3xl blur-lg"></div>
                
                <div className="relative newsletter-card premium-shadow rounded-3xl p-10 sm:p-12 hover-lift animate-fadeInUp animate-glow">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-800/90 to-gray-900/80 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
                    <span className="text-white text-3xl font-bold">✓</span>
                  </div>
                  
                  <Heading level={2} size="xl" className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white animate-textReveal">
                    Inscrição realizada com sucesso!
                  </Heading>
                  
                  <div className="animate-textReveal" style={{ animationDelay: '300ms' }}>
                    <Text className="text-lg leading-relaxed text-gray-300">
                      Obrigado por se inscrever em nossa newsletter. Você receberá nossas atualizações em breve.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
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
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <Heading level={2} className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight animate-textReveal text-white">
              Inscreva-se
            </Heading>
            
            <div className="animate-textReveal" style={{ animationDelay: '300ms' }}>
              <Text size="lg" className="max-w-2xl mx-auto leading-relaxed text-lg text-gray-300">
                Assine nossa newsletter e receba atualizações sobre direito, jurisprudência e novidades do escritório.
              </Text>
            </div>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-zinc-800/20 via-zinc-700/10 to-zinc-800/20 rounded-3xl blur-xl animate-float"></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-zinc-900/30 to-transparent rounded-3xl blur-lg"></div>
            
            <div className="relative bg-zinc-900/95 border border-zinc-700/60 rounded-3xl p-10 sm:p-12 hover-lift animate-fadeInUp shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="animate-slideIn" style={{ animationDelay: '200ms' }}>
                  <label className="block text-sm font-semibold text-gray-300 mb-4 tracking-wide">
                    Seu e-mail *
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="w-full px-6 py-4 text-center text-white bg-zinc-800 border border-zinc-600 rounded-2xl 
                               focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/20 
                               transition-all duration-300
                               placeholder:text-zinc-400"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="animate-slideIn" style={{ animationDelay: '400ms' }}>
                  <label className="flex items-start space-x-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={permissionGranted}
                        onChange={(e) => setPermissionGranted(e.target.checked)}
                        className="h-5 w-5 text-zinc-600 focus:ring-zinc-500 border-zinc-600 rounded-lg bg-zinc-800 
                                 transition-all duration-300 hover:scale-110"
                        required
                      />
                      {permissionGranted && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-zinc-600/30 to-zinc-500/30 animate-pulse"></div>
                      )}
                    </div>
                    <span className="text-sm text-gray-300 leading-relaxed">
                      Ao enviar suas informações, você está nos concedendo permissão para enviar emails. Você pode cancelar a inscrição a qualquer momento.
                    </span>
                  </label>
                </div>

                <div className="animate-slideIn" style={{ animationDelay: '600ms' }}>
                  <div className="relative">
                    <Button 
                      type="submit" 
                      size="lg" 
                      fullWidth
                      disabled={isLoading || !email.trim() || !permissionGranted}
                      className="group relative bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 
                               text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-500 
                               text-lg hover:scale-105 hover:shadow-2xl hover:shadow-zinc-900/40
                               border-2 border-zinc-600/50 hover:border-zinc-500/70
                               backdrop-blur-sm overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed
                               disabled:hover:scale-100 disabled:hover:shadow-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-300"></div>
                      
                      <span className="relative flex items-center justify-center space-x-3">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                            <span>Inscrevendo...</span>
                          </>
                        ) : (
                          <>
                            <span>Inscreva-se</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}