'use client';

import { useState, useRef } from 'react';
import { useTranslation } from '@/utils/translations';
import { Card, CardContent, Heading, Text, Input, Button, Badge, Select } from '@/components/ui';
import { formatPhoneNumber, formatEmail, formatFullName, validateEmail, validatePhone, validateFullName } from '@/utils/masks';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_CONFIG } from '@/config/recaptcha';


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
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
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
  
  .card-shadow {
    box-shadow: 
      0 20px 40px -12px rgba(0, 0, 0, 0.3),
      0 8px 16px -8px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.12),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1);
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
  
  .contact-card {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  .contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent);
  }
  
  .contact-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
    pointer-events: none;
  }
  
  .form-card {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 36px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(15px);
  }
  
  .form-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent);
  }
  
  .form-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
    pointer-events: none;
  }
`;

interface ContactSectionProps {
  locale: string;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const { t } = useTranslation(locale);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    customSubject: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    customSubject: '',
    phone: '',
    message: '',
    permission: '',
    recaptcha: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    customSubject: false,
    phone: false,
    message: false,
    permission: false,
    recaptcha: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
    } else if (name === 'email') {
      formattedValue = formatEmail(value);
    } else if (name === 'name') {
      formattedValue = formatFullName(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    validateField(name, formattedValue);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Nome completo é obrigatório';
        } else if (!validateFullName(value)) {
          error = 'Nome deve conter apenas letras';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email é obrigatório';
        } else if (!validateEmail(value)) {
          error = 'Email inválido';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Telefone é obrigatório';
        } else if (!validatePhone(value)) {
          error = 'Telefone inválido';
        }
        break;
      case 'subject':
        if (!value.trim()) {
          error = 'Assunto é obrigatório';
        }
        break;
      case 'customSubject':
        if (formData.subject === 'Outros' && !value.trim()) {
          error = 'Por favor, especifique o assunto';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Mensagem é obrigatória';
        } else if (value.trim().length < 10) {
          error = 'Mensagem deve ter pelo menos 10 caracteres';
        }
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handlePermissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setPermissionGranted(checked);
    
    if (!checked) {
      setErrors(prev => ({
        ...prev,
        permission: 'Você deve aceitar receber emails para continuar'
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        permission: ''
      }));
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    
    if (!token) {
      setErrors(prev => ({
        ...prev,
        recaptcha: 'Por favor, complete a verificação anti-robô'
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        recaptcha: ''
      }));
    }
  };

  const validateAllFields = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      customSubject: '',
      phone: '',
      message: '',
      permission: '',
      recaptcha: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    } else if (!validateFullName(formData.name)) {
      newErrors.name = 'Nome deve conter apenas letras';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    if (formData.subject === 'Outros' && !formData.customSubject.trim()) {
      newErrors.customSubject = 'Por favor, especifique o assunto';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    if (!permissionGranted) {
      newErrors.permission = 'Você deve aceitar receber emails para continuar';
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = 'Por favor, complete a verificação anti-robô';
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setTouched({
      name: true,
      email: true,
      subject: true,
      customSubject: true,
      phone: true,
      message: true,
      permission: true,
      recaptcha: true
    });

    const validationErrors = validateAllFields();

    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    if (hasErrors) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        customSubject: '',
        phone: '',
        message: ''
      });
      
      setErrors({
        name: '',
        email: '',
        subject: '',
        customSubject: '',
        phone: '',
        message: '',
        permission: '',
        recaptcha: ''
      });
      
      setTouched({
        name: false,
        email: false,
        subject: false,
        customSubject: false,
        phone: false,
        message: false,
        permission: false,
        recaptcha: false
      });

      setPermissionGranted(false);
      setRecaptchaToken(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'atendimento@marinacabo.adv.br',
      description: 'Respondemos em até 24h'
    },
    {
      icon: '📞',
      title: 'Telefone / WhatsApp',
      value: '11 99858-6727',
      description: 'Atendimento rápido'
    },
    {
      icon: '📍',
      title: 'Endereço',
      value: 'Edifício Vitrine Iguatemy - Av. Brig Faria Lima, 1811 - ESC 1119, São Paulo - SP',
      description: 'Consultas presenciais disponíveis'
    }
  ];

  const subjects = [
    'Direito Civil',
    'Direito Trabalhista',
    'Direito Empresarial',
    'Direito de Família',
    'Outros'
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="contact" className="py-20 relative" style={{ backgroundColor: '#000000' }}>
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
        <div className="text-center mb-16">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight animate-fadeInUp" style={{ color: '#ffffff' }}>
            {t('contact.title')}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div className="animate-slideInLeft">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card card-shadow hover-lift animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl glass-effect animate-float" 
                         style={{ 
                           background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
                           border: '1px solid rgba(255, 255, 255, 0.1)',
                           boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                           animationDelay: `${index * 0.5}s` 
                         }}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-semibold mb-2" style={{ color: '#ffffff' }}>
                        {info.title}
                      </div>
                      <div className="text-sm mb-2 font-medium" style={{ color: '#e0e0e0' }}>
                        {info.value}
                      </div>
                      <div className="text-xs" style={{ color: '#b0b0b0' }}>
                        {info.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slideInRight" style={{ animationDelay: '300ms' }}>
            <div className="form-card premium-shadow hover-lift">
              <div className="mb-8">
                <div className="text-xl font-medium mb-2" style={{ color: '#ffffff' }}>
                  Envie sua Mensagem
                </div>
                <div className="text-sm" style={{ color: '#cccccc' }}>
                  Preencha o formulário abaixo e entraremos em contato em breve
                </div>
              </div>
                
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Seu nome completo"
                      state={touched.name && errors.name ? 'error' : 'default'}
                      required
                    />
                    {touched.name && errors.name && (
                      <Text size="sm" color="error" className="mt-1">
                        {errors.name}
                      </Text>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                      Seu e-mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="seu@email.com"
                      state={touched.email && errors.email ? 'error' : 'default'}
                      required
                    />
                    {touched.email && errors.email && (
                      <Text size="sm" color="error" className="mt-1">
                        {errors.email}
                      </Text>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                      Assunto do e-mail *
                    </label>
                    <Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleSelectChange}
                      onBlur={handleBlur}
                      placeholder="Selecione um assunto"
                      state={touched.subject && errors.subject ? 'error' : 'default'}
                      required
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </Select>
                    {touched.subject && errors.subject && (
                      <Text size="sm" color="error" className="mt-1">
                        {errors.subject}
                      </Text>
                    )}
                  </div>

                  {formData.subject === 'Outros' && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                        Especifique o assunto *
                      </label>
                      <Input
                        type="text"
                        name="customSubject"
                        value={formData.customSubject}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Digite o assunto específico"
                        state={touched.customSubject && errors.customSubject ? 'error' : 'default'}
                        required
                      />
                      {touched.customSubject && errors.customSubject && (
                        <Text size="sm" color="error" className="mt-1">
                          {errors.customSubject}
                        </Text>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                      Seu telefone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="(11) 99999-9999"
                      state={touched.phone && errors.phone ? 'error' : 'default'}
                      required
                    />
                    {touched.phone && errors.phone && (
                      <Text size="sm" color="error" className="mt-1">
                        {errors.phone}
                      </Text>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                      Sua mensagem *
                    </label>
                    <Input
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Descreva sua situação ou dúvida..."
                      state={touched.message && errors.message ? 'error' : 'default'}
                      required
                    />
                    {touched.message && errors.message && (
                      <Text size="sm" color="error" className="mt-1">
                        {errors.message}
                      </Text>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={permissionGranted}
                        onChange={handlePermissionChange}
                        onBlur={handleBlur}
                        className="mt-1 h-4 w-4 text-black focus:ring-gray-500 border-gray-300 rounded"
                      />
                      <span className="text-sm" style={{ color: '#cccccc' }}>
                        Ao marcar esta caixa e enviar suas informações, você está nos concedendo permissão para enviar emails. Você pode cancelar a inscrição a qualquer momento.
                      </span>
                    </label>
                    {touched.permission && errors.permission && (
                      <Text size="sm" color="error" className="mt-1">
                        {errors.permission}
                      </Text>
                    )}
                  </div>

                  <div>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_CONFIG.SITE_KEY}
                      onChange={handleRecaptchaChange}
                      onExpired={() => setRecaptchaToken(null)}
                      onErrored={() => setRecaptchaToken(null)}
                    />
                    {touched.recaptcha && errors.recaptcha && (
                      <Text size="sm" color="error" className="mt-1">
                        {errors.recaptcha}
                      </Text>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    disabled={isLoading}
                    loading={isLoading}
                  >
                    {isLoading ? 'Enviando...' : 'Enviar mensagem'}
                  </Button>
                </form>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
