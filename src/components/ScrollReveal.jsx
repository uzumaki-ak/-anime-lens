'use client';

import { useEffect } from 'react';

// ─── Scroll-based reveal animation controller
export default function ScrollReveal() {
  // ─── Track scroll position and toggle reveal classes on elements
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const scrollReveal = () => {
      revealElements.forEach((el) => {
        const elementIsInScreen = el.getBoundingClientRect().top < window.innerHeight / 1.15;

        if (elementIsInScreen) {
          el.classList.add('revealed');
        } else {
          el.classList.remove('revealed');
        }
      });
    };

    window.addEventListener('scroll', scrollReveal);

    // ─── Run once when component loads
    scrollReveal();

    return () => {
      window.removeEventListener('scroll', scrollReveal);
    };
  }, []);

  return null;
}
