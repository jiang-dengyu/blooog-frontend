/*src\components\TypingText.jsx*/
import { useEffect, useState } from 'react';

function TypingText({ text, speed = 100, className }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const timer = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[currentIndex]);
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
