import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo1.png';


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

  // locks the body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar_inner">
        <a href="#hero" className="navbar_logo" onClick={handleLink}>
          <img src={logo} alt="Ehiz Mogaji Electrical Logo" />
          <div className="navbar_logo-text">
            <span className="navbar_logo-name">EHIZ MOGAJI</span>
            <span className="navbar_logo-sub">Electrical</span>
          </div>
        </a>

        <nav className="navbar_links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar_link">{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="navbar_cta">Get a Quote</a>

        <button
          className={`navbar_burger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar_drawer${open ? ' open' : ''}`}>
        <nav className="navbar_drawer-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar_drawer-link" onClick={handleLink}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar_drawer-cta" onClick={handleLink}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
