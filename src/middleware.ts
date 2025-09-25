import { NextRequest, NextResponse } from 'next/server';

const locales = ['pt', 'en'];
const defaultLocale = 'pt';

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocaleFromRequest(request);
    return locale;
  }

  return defaultLocale;
}

function getLocaleFromRequest(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();
    
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocaleFromRequest(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)',
  ],
};
