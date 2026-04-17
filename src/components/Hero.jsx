import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('loaded'), 100);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Background grid pattern */}
      <div className="hero_grid" aria-hidden="true" />

      {/* Diagonal accent shape */}
      <div className="hero_accent" aria-hidden="true" />

      <div className="container hero_inner">
        <div className="hero_content">
          <p className="hero_eyebrow">Licensed & Certified Electricians</p>
          <h1 className="hero_title">
            Power Your<br />
            <span className="hero_title-accent">World</span><br />
            Safely.
          </h1>
          <p className="hero_subtitle">
            Professional electrical services for residential and commercial
            properties. Available 24/7 for emergencies.
          </p>
          <div className="hero_actions">
            <a href="#contact" className="btn btn--primary">Book a Service</a>
            <a href="#services" className="btn btn--ghost">Our Services</a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero_stats">
          {[
            { value: '30+', label: 'Years Experience' },
            { value: '4,938', label: 'Clients Served' },
            { value: '24/7', label: 'Emergency Support' },
            { value: '100%', label: 'Certified Work' },
          ].map((s, i) => (
            <div key={i} className="hero_stat">
              <span className="hero_stat-value">{s.value}</span>
              <span className="hero_stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero_scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
