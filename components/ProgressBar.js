'use client';

import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    setWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] bg-black z-[9999]">
      <div 
        className="h-full bg-gradient-to-r from-[#EF3DF2] via-[#7F1B8C] via-[#350C40] via-[#1F1426] to-[#2745F2]" 
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}