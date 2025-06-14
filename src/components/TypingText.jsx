import { useEffect, useState, useRef } from 'react';

function TypingText({ text = '', speed = 100, className }) {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  
  useEffect(() => {
    if (!text) return;
    setDisplayedText('');
    indexRef.current = 0;
    
    timerRef.current = setInterval(() => {
      const i = indexRef.current;
    const nextChar = text[i] || '';
    
    setDisplayedText((prev) => prev + nextChar);
    indexRef.current++;

    if (i >= text.length - 1) {
      clearInterval(timerRef.current);
    }
    }, speed);

    return () => clearInterval(timerRef.current);
  }, [text, speed]);

  return <p className={className}>{displayedText}</p>;
}

export default TypingText;
