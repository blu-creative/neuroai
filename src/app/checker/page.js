'use client'

import React, { useEffect, useState } from 'react';

const CheckerPage = ({ searchParams }) => {
  const [checkerURL, setCheckerURL] = useState('/accessibility/674e119ba88b00d47df94ab6_code_EN.html');
  const { locale } = searchParams;
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://acsbace.com/embedders/config/674e119ba88b00d47df94ab6';
  //   script.async = true;
  //   script.onload = () => {
  //     // Hide upper part of the page after the script is loaded
  //     const upperSections = document.getElementsByClassName('start674e119ba88b00d47df94ab6');
  //     for (const section of upperSections) {
  //       section.style.display = 'none';
  //     }
  //   };
  //   document.body.appendChild(script);
  // }, []);

  useEffect(() => {
    setCheckerURL(`/accessibility/674e119ba88b00d47df94ab6_code_${locale ==="fr" ? "FR" : "EN"}.html`);
  }, [locale]);

  return (
    // <main>
    //   <div id="p674e119ba88b00d47df94ab6" className="pt-6"></div>
    // </main>
    
    <iframe
      className="mt-20"
        src={checkerURL}
        width="100%"
        height="850"
        title="Accessiblity Checker"
      />
  );
};


export default CheckerPage;

