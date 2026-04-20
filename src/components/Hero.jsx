import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero_img = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=85&fit=crop&crop=center';

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
      {/* Little-wiz updated: Background image */}
      <div
        className="hero_bg"
        style={{ backgroundImage: `url(${Hero_img})` }}
        aria-hidden="true"
      />

      {/* Little-wiz Updated: (dark edges) layer */}
      <div className="hero_vignette" aria-hidden="true" />

      {/* Diagonal accent shape  */}
      <div className="hero_leaves" aria-hidden="true">
        <span className="leaf leaf-1" />
        <span className="leaf leaf-2" />
        <span className="leaf leaf-3" />
      </div>

      <div className="container hero_inner">
        <div className="hero_content">
          <p className="hero_eyebrow">Licensed & Certified · RC: 8171988</p>
          <h1 className="hero_title">
            Clean Power.<br />
            <span className="hero_title-accent">Green</span><br />
            Future.
          </h1>
          <p className="hero_subtitle">
            Professional electrical and renewable energy solutions for homes and businesses across Nigeria. Solar, inverters, wiring — done right.
          </p>
          <div className="hero_actions">
            <a href="#contact" className="btn btn--primary">Get a Free Quote</a>
            <a href="#services" className="btn btn--ghost">Our Services</a>
          </div>
        </div>

        <div className="hero_stats">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
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

      <div className="hero_scroll" aria-hidden="true"><span /></div>
    </section>
  );
}
