import React from 'react';
import { useMemo } from 'react';

type CheckerIframeProps = {
  locale: string;
};

export function CheckerIframe({ locale }: CheckerIframeProps) {
  const normalizedLocale = locale.toLowerCase() === 'fr' ? 'FR' : 'EN';
  const checkerURL = useMemo(
    () => `/accessibility/674e119ba88b00d47df94ab6_code_${normalizedLocale}.html`,
    [normalizedLocale]
  );

  return (
    <iframe
      key={checkerURL}
      src={checkerURL}
      width="100%"
      height={normalizedLocale === 'FR' ? '920px' : '850px'}
      title="Accessibility Checker"
      className="block w-full border-0"
      loading="lazy"
    />
  );
}
