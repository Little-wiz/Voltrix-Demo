import React, { useState } from 'react';
import './Portfolio.css';
import { useReveal } from '../hooks/useReveal';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

const projects = [
  { cat: 'Residential', title: 'Full Home Rewire', location: 'London, UK' },
  { cat: 'Commercial', title: 'Office Fit-Out', location: 'Manchester, UK' },
  { cat: 'Industrial', title: 'Factory Panel Install', location: 'Birmingham, UK' },
  { cat: 'Residential', title: 'EV Charger Install', location: 'Bristol, UK' },
  { cat: 'Commercial', title: 'Retail Lighting Upgrade', location: 'Leeds, UK' },
  { cat: 'Industrial', title: 'Three-Phase Power', location: 'Sheffield, UK' },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const ref = useReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-sub">
            A sample of the jobs we've completed — placeholder images to be replaced with client photography.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="portfolio_filters reveal">
          {categories.map(c => (
            <button
              key={c}
              className={`portfolio_filter${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio_grid">
          {filtered.map((p, i) => (
            <div key={`${p.title}-${i}`} className="portfolio_item reveal">
              <div className="portfolio_thumb">
                <div className="portfolio_thumb-placeholder">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.25">
                    <rect x="4" y="4" width="32" height="32" rx="4" stroke="white" strokeWidth="1.2"/>
                    <circle cx="14" cy="14" r="4" stroke="white" strokeWidth="1.2"/>
                    <path d="M4 28l9-9 6 6 5-5 12 12" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="portfolio_overlay">
                  <span className="portfolio_overlay-cat">{p.cat}</span>
                  <h3 className="portfolio_overlay-title">{p.title}</h3>
                  <span className="portfolio_overlay-loc">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.74 3.5 6.5 3.5 6.5s3.5-3.76 3.5-6.5C9.5 2.57 7.93 1 6 1z" stroke="currentColor" strokeWidth="1.2"/>
                      <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    {p.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
