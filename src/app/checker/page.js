'use client'

import React, { useEffect } from 'react';

const CheckerPage = ({ searchParams }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://acsbace.com/embedders/config/674e119ba88b00d47df94ab6';
    script.async = true;
    document.body.appendChild(script);

    //hide upper part of the page
    const UpperSection = document.getElementsByClassName('start674e119ba88b00d47df94ab6');
    UpperSection.style.display = 'none';
  }, []);

  return (
    <main>
      <div id="p674e119ba88b00d47df94ab6" className="pt-6"></div>
    </main>
  );
};


export default CheckerPage;