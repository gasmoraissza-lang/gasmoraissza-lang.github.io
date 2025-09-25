import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LanguageSelector from "@/components/LanguageSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector currentLocale={locale} />
        </div>
        {children}
      </body>
    </html>
  );
}
