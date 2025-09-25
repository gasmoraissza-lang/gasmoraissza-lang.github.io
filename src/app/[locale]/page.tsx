import { Header, AreasSection, AboutSection, ArticlesSection, NewsletterSection, FAQSection, ContactSection, Footer } from '@/components/sections';
import HomeClient from './HomeClient';

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' }
  ];
}

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { locale = 'pt' } = await params;
  
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <HomeClient locale={locale} />
      <AreasSection locale={locale} />
      <AboutSection locale={locale} />
      <ArticlesSection locale={locale} />
      <NewsletterSection locale={locale} />
      <FAQSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
