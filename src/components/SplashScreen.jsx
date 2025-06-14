/*src/components/SplashScreen.jsx*/
import '../styles/components/SplashScreen.css';
import { useEffect, useState } from 'react';

function SplashScreen({ onFinish }) {
  const [startReveal, setStartReveal] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (startReveal) {
      const timer = setTimeout(() => {
        setFinish(true);
        onFinish();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [startReveal, onFinish]);

  return (
    <div
      className={`splash-screen ${startReveal ? 'reveal' : ''}`}
      onClick={() => !startReveal && setStartReveal(true)}
    >
      <h1 className="logo-animation">
        Bl<span className="center-o">o</span>oog<span className="cursor">_</span>
      </h1>
    </div>
  );
}

export default SplashScreen;
