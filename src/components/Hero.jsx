'use client';

import { useEffect, useState } from 'react';
import heroData from '@/data/Hero.json';

// ─── Hero section component with animated rotating text
export default function Hero() {
  // ─── State management for animated word rotation
  const [activeIndex, setActiveIndex] = useState(0);

  // ─── Cycle through hero animated words on a timed interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= heroData.animatedWords.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ─── Render animated letters with staggered animation delay
  const renderAnimatedText = (text, isActive) => {
    return text.split('').map((char, index) => {
      const delay = `${index * 0.05}s`;

      return (
        <span
          key={index}
          style={{ animationDelay: delay }}
          className={char === ' ' ? `${isActive ? 'in' : 'out'} space` : isActive ? 'in' : 'out'}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className="section hero" id={heroData.sectionId} aria-label="home">
      <div className="container">
        {/* ─── Hero main banner image */}
        <img
          src={heroData.bannerImage.src}
          width={heroData.bannerImage.width}
          height={heroData.bannerImage.height}
          alt={heroData.bannerImage.alt}
          className="hero-banner"
        />

        {/* ─── Hero text content */}
        <div className="hero-content">
          <h1 className="h1 hero-title">{heroData.title}</h1>

          {/* ─── Rotating animated headline words */}
          <div className="wrapper h2">
            {heroData.animatedWords.map((word, index) => (
              <strong key={index} className={`strong ${index === activeIndex ? 'active' : ''}`} data-letter-effect>
                {renderAnimatedText(word, index === activeIndex)}
              </strong>
            ))}
          </div>

          <p className="hero-text">{heroData.subtitle}</p>
        </div>
      </div>

      {/* ─── Decorative hero shape element */}
      <img
        src={heroData.shapeImage.src}
        width={heroData.shapeImage.width}
        height={heroData.shapeImage.height}
        alt={heroData.shapeImage.alt}
        className="shape"
      />
    </section>
  );
}
