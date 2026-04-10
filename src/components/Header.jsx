'use client';

import { useEffect, useState } from 'react';
import headerData from '@/data/Header.json';
import { User } from 'lucide-react';

// ─── Main site header component
export default function Header() {
  // ─── State management for mobile navigation and scroll header behavior
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  // ─── Toggle mobile navigation open/close
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  // ─── Close mobile navigation on link selection
  const closeNav = () => {
    setIsNavOpen(false);
  };

  // ─── Lock body scroll when navigation is active
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isNavOpen]);

  // ─── Activate sticky header styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        {/* ─── Main site logo */}
        <a href={headerData.logo.href} className="logo">
          <img
            src={headerData.logo.image}
            width={headerData.logo.width}
            height={headerData.logo.height}
            alt={headerData.logo.alt}
          />
        </a>

        {/* ─── Mobile menu toggle button */}
        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
          <img
            src={headerData.menuIcon.image}
            width={headerData.menuIcon.width}
            height={headerData.menuIcon.height}
            alt={headerData.menuIcon.alt}
          />
        </button>

        {/* ─── Primary navigation menu */}
        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          {/* ─── Mobile navigation top section */}
          <div className="navbar-top">
            <a href={headerData.navLogo.href} className="logo">
              <img
                src={headerData.navLogo.image}
                width={headerData.navLogo.width}
                height={headerData.navLogo.height}
                alt={headerData.navLogo.alt}
                className="img"
              />
            </a>

            {/* ─── Mobile navigation close button */}
            <button className="nav-close-btn" aria-label="close menu" onClick={toggleNav}>
              <span className="span one"></span>
              <span className="span two"></span>
            </button>
          </div>

          {/* ─── Navigation links */}
          <ul className="navbar-list">
            {headerData.navLinks.map((link, index) => (
              <li className="navbar-item" key={index}>
                <a href={link.href} className="navbar-link" onClick={closeNav}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ─── User login button */}
          <button className="login-btn">
            <User size={21} />
            <span className="span">{headerData.login.text}</span>
          </button>

          {/* ─── Studio contact and location details */}
          <p className="navbar-title">{headerData.studioLocationTitle}</p>

          <address className="navbar-text">{headerData.studioAddress}</address>

          <p className="navbar-text">
            {headerData.urgentText}{' '}
            <a href={headerData.phone.href} className="contact-link">
              {headerData.phone.label}
            </a>
          </p>
        </nav>

        {/* ─── Background overlay for mobile navigation */}
        <div className={`overlay ${isNavOpen ? 'active' : ''}`} data-overlay onClick={toggleNav}></div>
      </div>
    </header>
  );
}
