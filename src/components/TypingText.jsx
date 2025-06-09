import { useEffect, useState } from 'react';

function TypingText({ text = '', speed = 100, className }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return; // 防止 null / undefined

    let currentIndex = 0;
    const timer = setInterval(() => {
      // 🧠 多加一層防呆，避免 undefined 被串進來
      setDisplayedText((prevText) =>
        prevText + (text[currentIndex] || '')
      );
      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <p className={className}>{displayedText}</p>;
}

export default TypingText;
