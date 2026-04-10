'use client';

import { useEffect, useState } from 'react';
import footerData from '@/data/Footer.json';
import { ArrowUpRight } from 'lucide-react';

// ─── Footer section component with scroll progress back-to-top button
export default function Footer() {
  // ─── State management for scroll progress and back-to-top visibility
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // ─── Track scroll progress percentage and toggle back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollEndPos = bodyHeight - windowHeight;

      const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

      setScrollPercent(totalScrollPercent);
      setShowButton(totalScrollPercent > 5);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        {/* ─── Footer top call-to-action section */}
        <div className="footer-top section" id={footerData.sectionId}>
          <div className="container">
            <p className="section-subtitle" data-reveal>
              {footerData.subtitle}
            </p>

            <h2 className="h2 section-title" data-reveal>
              {footerData.title}
            </h2>

            {/* ─── Footer main CTA button */}
            <a href={footerData.buttonLink} className="btn-icon" data-reveal aria-label="Get in touch">
              <ArrowUpRight size={26} />
            </a>

            {/* ─── Decorative footer images */}
            {footerData.topImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                width={img.width}
                height={img.height}
                loading="lazy"
                alt={img.alt}
                className={img.className}
                data-reveal
              />
            ))}

            {/* ─── Footer decorative shape element */}
            <img
              src={footerData.shapeImage.src}
              width={footerData.shapeImage.width}
              height={footerData.shapeImage.height}
              loading="lazy"
              alt={footerData.shapeImage.alt}
              className="shape"
            />
          </div>
        </div>

        {/* ─── Footer bottom branding and social links */}
        <div className="footer-bottom">
          <div className="container">
            <a href={footerData.logo.href} className="logo">
              <img
                src={footerData.logo.src}
                width={footerData.logo.width}
                height={footerData.logo.height}
                loading="lazy"
                alt={footerData.logo.alt}
              />
            </a>

            {/* ─── Social media links */}
            <ul className="social-list">
              {footerData.socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.href} className="social-link">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ─── Footer copyright notice */}
            <p className="copyright">
              {footerData.copyrightText} <strong>{footerData.copyrightOwner}</strong> {footerData.copyrightEndText}
            </p>
          </div>
        </div>

        {/* ─── Footer background image layer */}
        <div className="footer-bg has-before">
          <img
            src={footerData.footerBackground.src}
            width={footerData.footerBackground.width}
            height={footerData.footerBackground.height}
            loading="lazy"
            alt={footerData.footerBackground.alt}
            className="img-cover"
          />
        </div>
      </footer>

      {/* ─── Scroll progress back-to-top button */}
      <a
        href={footerData.backToTop.href}
        aria-label={footerData.backToTop.ariaLabel}
        className={`back-top-btn ${showButton ? 'show' : ''}`}
        data-back-top-btn
      >
        {scrollPercent.toFixed(0)}%
      </a>
    </>
  );
}
