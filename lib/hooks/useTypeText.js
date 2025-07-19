import { useState, useEffect } from 'react';

export const useTypeText = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); 
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]); 

  return displayedText;
};