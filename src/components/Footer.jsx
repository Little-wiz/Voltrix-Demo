import React from 'react';
import './Footer.css';
import logo from '../assets/logo1.png';


const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Solar Panel Installation', 'Inverter Installation', 'Battery Storage',
  'Residential Wiring', 'Commercial Electrical', 'Maintenance & Repairs',
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M15 1H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v-6H7V8h2V6.5C9 4.57 10.07 3.5 12 3.5h2V6h-1.5C11.67 6 11.5 6.17 11.5 7v1H14l-.5 3H11.5v6H15a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="13" cy="5" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 7v6M5 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 13v-3.5A1.5 1.5 0 0 1 11.5 9v0A1.5 1.5 0 0 1 13 10.5V13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M8 9v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer_inner">

        {/* Brand */}
        <div className="footer_brand">
          <a href="#hero" className="footer_logo">
            <img src={logo} alt="Ehiz Mogaji Electrical" />
            <div className="footer_logo-text">
              <span className="footer_logo-name">EHIZ MOGAJI</span>
              <span className="footer_logo-sub">Electrical</span>
            </div>
          </a>
          <p className="footer_tagline">
            Licensed electrical and green energy solutions for homes and businesses across Nigeria. Solar, inverters, wiring — done right.
          </p>
          <p className="footer_rc">RC: 8171988</p>
          <div className="footer_socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="footer_social" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer_col">
          <h4 className="footer_col-title">Navigation</h4>
          <ul className="footer_nav">
            {navLinks.map(l => (
              <li key={l.href}><a href={l.href} className="footer_nav-link">{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer_col">
          <h4 className="footer_col-title">Services</h4>
          <ul className="footer_nav">
            {serviceLinks.map(s => (
              <li key={s}><a href="#services" className="footer_nav-link">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer_col">
          <h4 className="footer_col-title">Contact</h4>
          <ul className="footer_contact-list">
            <li>
              <span className="footer_contact-label">Emergency Line</span>
              <a href="tel:+2348000000000" className="footer_contact-value footer_contact-link">+234 800 000 0000</a>
            </li>
            <li>
              <span className="footer_contact-label">Email</span>
              <a href="mailto:info@ehizmogajielectrical.com" className="footer_contact-value footer_contact-link">info@ehizmogajielectrical.com</a>
            </li>
            <li>
              <span className="footer_contact-label">Locations</span>
              <span className="footer_contact-value">Lagos · Abuja · Port Harcourt</span>
            </li>
            <li>
              <span className="footer_contact-label">Hours</span>
              <span className="footer_contact-value">Mon – Sat: 7am – 8pm<br/>24/7 Emergencies</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer_bottom">
        <div className="container footer_bottom-inner">
          <p className="footer_copy">© {new Date().getFullYear()} Ehiz Mogaji Electrical. All rights reserved. · RC: 8171988</p>
          <div className="footer_badges">
            <span className="footer_badge">Licensed & Insured</span>
            <span className="footer_badge">Solar Certified</span>
            <span className="footer_badge">24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
