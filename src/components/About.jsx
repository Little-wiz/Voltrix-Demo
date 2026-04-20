import React from 'react';
import './About.css';
import { useReveal } from '../hooks/useReveal';

const reasons = [
  { title: 'Fully Licensed & Certified', desc: 'RC: 8171988. All work carried out by qualified engineers to the highest safety standards.' },
  { title: 'Green Energy Specialists', desc: 'We design and install solar and renewable systems tailored to Nigeria\'s unique energy landscape.' },
  { title: 'Transparent, Fixed Pricing', desc: 'No hidden fees. You receive a clear quote before any work begins — always.' },
  { title: 'End-to-End Service', desc: 'From energy audit and system design to installation, monitoring, and after-sales support.' },
];

export default function About() {
  const ref = useReveal();
  return (
    <section className="about" id="about" ref={ref}>
      <div className="container about_inner">
        <div className="about_visual reveal">
          <div className="about_img-wrap">
            <div className="about_img-placeholder">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" opacity="0.2">
                <circle cx="36" cy="36" r="28" stroke="white" strokeWidth="1.2"/>
                <path d="M36 10v8M36 54v8M10 36h8M54 36h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="36" cy="36" r="12" stroke="white" strokeWidth="1.2"/>
                <path d="M20 20l6 6M46 46l6 6M20 52l6-6M46 26l6-6" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span>Meet The CEO: coming soon</span>
            </div>
            <div className="about_badge">
              <span className="about_badge-num">RC</span>
              <span className="about_badge-label">8171988</span>
            </div>
          </div>
        </div>

        <div className="about_copy">
          <div className="section-header reveal">
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title">Powering Nigeria with Clean, Reliable Energy</h2>
            <p className="section-sub">
              Ehiz Mogaji Electrical is a licensed electrical and green energy company committed to delivering safe, efficient, and sustainable power solutions across Nigeria. Whether it's a home rewire or a full commercial solar installation — we show up, we deliver, and we stand behind our work.
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
