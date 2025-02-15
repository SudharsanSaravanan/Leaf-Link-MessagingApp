import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);  // Match the total animation duration

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div className="splash-screen">
      <img 
        src="https://cdn4.iconfinder.com/data/icons/mails-1/48/expand-color-emails-01-512.png" 
        alt="Leaf-Link Logo" 
        className="splash-logo"
      />
      <h1 className="splash-title">Leaf-Link🍃</h1>
    </div>
  );
}

export default SplashScreen;