import React from 'react';
import './About.css';
import { useReveal } from '../hooks/useReveal';

// some text ads by claude
const reasons = [
  { title: 'Fully Certified', desc: 'All work carried out to the latest IEE wiring regulations by qualified engineers.' },
  { title: 'Transparent Pricing', desc: 'No hidden fees. You get a fixed quote before any work begins — always.' },
  { title: 'Clean & Tidy', desc: 'We treat your property with respect. Every job site left exactly as we found it.' },
  { title: 'Guaranteed Work', desc: 'All installations and repairs come with a full workmanship guarantee.' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container about_inner">
        {/* Left: visual block */}
        <div className="about_visual reveal">
          <div className="about_img-wrap">
            <div className="about_img-placeholder">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3">
                <polygon points="32,6 12,20 12,44 32,58 52,44 52,20" stroke="white" strokeWidth="1.5" fill="none"/>
                <polygon points="32,14 22,24 32,42 42,24" fill="white" opacity="0.5"/>
              </svg>
              <span>Client photo here</span>
            </div>
            <div className="about_badge">
              <span className="about_badge-num">30+</span>
              <span className="about_badge-label">Years of experience</span>
            </div>
          </div>
        </div>

        {/* Right  */}
        <div className="about_copy">
          <div className="section-header reveal">
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title">Built on Trust, Wired for Excellence</h2>
            <p className="section-sub">
              We are a dedicated team of certified electricians committed to delivering safe, reliable, and high-quality electrical solutions. From small repairs to full commercial installations — we show up, we deliver, and we stand behind our work.
            </p>
          </div>

          <div className="about_reasons">
            {reasons.map((r, i) => (
              <div key={i} className={`about_reason reveal reveal-delay-${i + 1}`}>
                <div className="about_reason-dot" />
                <div>
                  <h4 className="about_reason-title">{r.title}</h4>
                  <p className="about_reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn--primary reveal" style={{ display: 'inline-flex', marginTop: '16px' }}>
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
