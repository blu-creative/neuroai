'use client'

import React, { useEffect } from 'react';

const CheckerPage = ({ searchParams }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://acsbace.com/embedders/config/674e119ba88b00d47df94ab6';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <h1>Checker Page</h1>
      <div id="p674e119ba88b00d47df94ab6"></div>
    </main>
  );
};


export default CheckerPage;