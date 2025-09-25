import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function useTranslation() {
  const router = useRouter();
  const { locale = 'pt' } = router;

  const t = useMemo(() => {
    return (key: string, options?: any) => {
      return key;
    };
  }, [locale]);

  const changeLanguage = (newLocale: string) => {
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return {
    t,
    locale,
    changeLanguage,
  };
}
