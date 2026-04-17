import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar_inner">
        {/* Logo */}
        <a href="#hero" className="navbar_logo" onClick={handleLink}>
          <span className="navbar_logo-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <polygon points="13,2 5,13 11,13 9,20 17,9 11,9" fill="currentColor"/>
            </svg>
          </span>
          <span className="navbar_logo-text">VOLTIX</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar_links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar_link">{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="navbar_cta">Book a Service</a>

        {/* Hamburger */}
        <button
          className={`navbar_burger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar_drawer${open ? ' open' : ''}`}>
        <nav className="navbar_drawer-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar_drawer-link" onClick={handleLink}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar_drawer-cta" onClick={handleLink}>
            Book a Service
          </a>
        </nav>
      </div>
    </header>
  );
}
