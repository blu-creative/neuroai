'use client'

import React, { useEffect } from 'react';

const CheckerPage = ({ searchParams }) => {
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

  return (
    // <main>
    //   <div id="p674e119ba88b00d47df94ab6" className="pt-6"></div>
    // </main>
    
    <iframe
      className="mt-6"
        src="/accessibility/674e119ba88b00d47df94ab6_code.html"
        width="100%"
        height="900"
        title="Accessiblity Checker"
      />
  );
};


export default CheckerPage;

