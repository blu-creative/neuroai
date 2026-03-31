import { useSearchParams } from 'react-router';
import { CheckerIframe } from '../components/Checkeriframe';
import React from 'react';

export function Checker() {
  const [searchParams] = useSearchParams();
  const locale = searchParams.get('locale') ?? 'en';

  return (
    <div className="pt-24 md:pt-36 pb-10 md:pb-14">
      <CheckerIframe locale={locale} />
    </div>
  );
}
