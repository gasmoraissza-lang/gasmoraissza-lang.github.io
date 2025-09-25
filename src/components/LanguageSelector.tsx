'use client';

import { useRouter, usePathname } from 'next/navigation';

interface LanguageSelectorProps {
  currentLocale: string;
}

export default function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLocale === 'pt'
            ? 'bg-black text-white'
            : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLocale === 'en'
            ? 'bg-black text-white'
            : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
