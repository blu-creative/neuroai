import React from 'react';
import CheckerIframe from './components/CheckerIframe';

const CheckerPage = ({ searchParams }) => {
  const { locale } = searchParams;

  return (
    <CheckerIframe locale={locale}/>
  );
};


export default CheckerPage;

