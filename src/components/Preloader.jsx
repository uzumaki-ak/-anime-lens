'use client';

import { useEffect, useState } from 'react';
import preloaderData from '@/data/Preloader.json';

// ─── Page preloader component
export default function Preloader() {
  // ─── State management for preloader visibility
  const [isLoaded, setIsLoaded] = useState(false);

  // ─── Detect full page load and remove preloader state
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.classList.remove('active');
    };

    // ─── Handle cases where the page is already fully loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`loading ${isLoaded ? 'loaded' : ''}`} data-loading>
      {/* ─── Main loading icon */}
      <img src={preloaderData.loadingImage} width="55" height="55" alt={preloaderData.loadingAltText} className="img" />

      {/* ─── Animated loading circle */}
      <img src={preloaderData.loadingCircleImage} width="70" height="70" alt="" className="circle" />
    </div>
  );
}
