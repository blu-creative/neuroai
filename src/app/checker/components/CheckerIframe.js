'use client'

import React, { useEffect, useState } from 'react';

const CheckerIframe = ({ locale }) => {

  const [checkerURL, setCheckerURL] = useState('/accessibility/674e119ba88b00d47df94ab6_code_EN.html');

    useEffect(() => {
      console.log("Locale: ", locale); 
      setCheckerURL(`/accessibility/674e119ba88b00d47df94ab6_code_${locale ==="fr" ? "FR" : "EN"}.html`);
    }, [locale]);

  return (
    <iframe
        key={checkerURL} 
        className="mt-20"
        src={checkerURL}
        width="100%"
        height={locale ==="fr" ? "920px" : "850px"}
        title="Accessiblity Checker"
      />
  );
};

export default CheckerIframe;