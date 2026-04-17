import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote: "Absolutely brilliant service. Called at 8pm on a Friday with a complete power outage and they had someone out within the hour. Professional, tidy, and reasonably priced. Won't use anyone else.",
    name: 'Sarah Mitchell',
    role: 'Homeowner, London',
    initials: 'SM',
  },
  {
    quote: "We hired them to rewire our entire office building. Project was completed ahead of schedule, zero disruption to our team, and the standard of work was impeccable. Highly recommended.",
    name: 'James Okafor',
    role: 'Director, Okafor & Partners',
    initials: 'JO',
  },
  {
    quote: "Had a full consumer unit upgrade done. The engineer was punctual, explained everything clearly, and left the place spotless. Certification was issued same day. Very impressed.",
    name: 'Priya Nair',
    role: 'Property Manager',
    initials: 'PN',
  },
  {
    quote: "They installed three EV charging points at our warehouse. Competitive quote, no fuss, great workmanship. Our staff have been using them daily without issue for six months now.",
    name: 'Tom Bradley',
    role: 'Operations Manager',
    initials: 'TB',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const ref = useReveal();

  const go = useCallback((dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 280);
  }, [animating]);

  // Auto advance
  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
        </div>

        <div className="testimonials_stage reveal">
          <div className={`testimonials_card${animating ? ' fade-out' : ''}`}>
            <div className="testimonials_quote-icon" aria-hidden="true">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                <path d="M0 28V16.8C0 7.84 5.04 2.24 15.12 0l1.68 2.8C10.36 4.48 7.28 8.12 6.72 13.44H12V28H0zm20 0V16.8C20 7.84 25.04 2.24 35.12 0l1.68 2.8c-6.44 1.68-9.52 5.32-10.08 10.64H32V28H20z" fill="currentColor"/>
              </svg>
            </div>
            <p className="testimonials_quote">{t.quote}</p>
            <div className="testimonials_author">
              <div className="testimonials_avatar">{t.initials}</div>
              <div>
                <p className="testimonials_name">{t.name}</p>
                <p className="testimonials_role">{t.role}</p>
              </div>
              <div className="testimonials_stars" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <polygon points="7,1 8.8,5.2 13.5,5.6 10.1,8.5 11.3,13.1 7,10.5 2.7,13.1 3.9,8.5 0.5,5.6 5.2,5.2"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="testimonials_controls">
            <div className="testimonials_dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials_dot${i === current ? ' active' : ''}`}
                  onClick={() => { if (!animating) { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 280); } }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="testimonials_arrows">
              <button className="testimonials_arrow" onClick={() => go(-1)} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="testimonials_arrow" onClick={() => go(1)} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
