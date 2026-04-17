import React from 'react';
import './Services.css';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 9v10l10 6 10-6V9L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 3v16M4 9l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Residential Wiring',
    desc: 'Full home electrical installations, rewiring, upgrades, and safety inspections for new builds and renovations.',
    tag: 'Residential',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 22v3M19 22v3M6 25h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 12h12M8 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Commercial Electrical',
    desc: 'Office fit-outs, industrial wiring, three-phase power, and full electrical project management for businesses.',
    tag: 'Commercial',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="4" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 4v20M14 9h5M14 13h5M14 17h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7" cy="9" r="1" fill="currentColor"/>
        <circle cx="7" cy="13" r="1" fill="currentColor"/>
        <circle cx="7" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Panel Upgrades',
    desc: 'Consumer unit replacements, circuit breaker upgrades, and capacity expansions to meet modern power demands.',
    tag: 'Upgrades',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,3 16,11 24,11 18,16 20,24 14,19 8,24 10,16 4,11 12,11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Emergency Repairs',
    desc: 'Rapid response 24/7 for power outages, tripped circuits, electrical faults, and any urgent safety concerns.',
    tag: '24/7',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.9 6.9l2.1 2.1M19 19l2.1 2.1M6.9 21.1L9 19M19 9l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'EV Charger Installation',
    desc: 'Home and commercial EV charging point installations. Fast, smart chargers fully certified and compliant.',
    tag: 'EV',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 12h18M5 16h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="3" y="8" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="14" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Safety Inspections',
    desc: 'EICR reports, PAT testing, landlord certificates, and full electrical condition reports for peace of mind.',
    tag: 'Inspection',
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            From a single socket to a full commercial fit-out — every job done right, first time.
          </p>
        </div>

        <div className="services_grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="service-card_top">
                <span className="service-card_tag">{s.tag}</span>
                <div className="service-card_icon">{s.icon}</div>
              </div>
              <h3 className="service-card_title">{s.title}</h3>
              <p className="service-card_desc">{s.desc}</p>
              <a href="#contact" className="service-card_link">
                Enquire
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
