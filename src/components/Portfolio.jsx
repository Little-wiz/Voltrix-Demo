import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Portfolio.css';
import { useReveal } from '../hooks/useReveal';
const categories = ['All', 'Residential', 'Commercial', 'Solar'];

// Map your assets folder images to each project.
// Add/remove image paths to match what you have in /assets.
const projects = [
  {
    cat: 'Solar',
    title: 'Rooftop Solar Array',
    location: 'Lagos, Nigeria',
    images: [
      '/assets/10.jpeg',  // inverter/solar system on wall
      '/assets/7.jpeg',   // technician wiring panel
      '/assets/1.jpeg',   // circuit breaker (C125A)
    ],
  },
  {
    cat: 'Commercial',
    title: 'Office Complex Wiring',
    location: 'Abuja, Nigeria',
    images: [
      '/assets/2.jpeg',   // technician drilling on building exterior
      '/assets/11.jpeg',  // ceiling conduit rough-in
      '/assets/16.jpeg',  // commercial space rough-in wiring
    ],
  },
  {
    cat: 'Solar',
    title: 'Industrial Inverter Setup',
    location: 'Port Harcourt, Nigeria',
    images: [
      '/assets/7.jpeg',   // technician wiring distribution board
      '/assets/12.jpeg',  // concealed wiring in walls/staircase
      '/assets/1.jpeg',   // C125A breaker close-up
    ],
  },
  {
    cat: 'Residential',
    title: 'Full Home Rewire',
    location: 'Benin City, Nigeria',
    images: [
      '/assets/15.jpeg',  // technician fitting ceiling light
      '/assets/4.jpeg',   // LED strip wall feature, living room
      '/assets/13.jpeg',  // completed apartment interior lighting
    ],
  },
  {
    cat: 'Solar',
    title: 'Solar + Battery System',
    location: 'Lagos, Nigeria',
    images: [
      '/assets/10.jpeg',  // Felicity solar inverter stack installed
      '/assets/7.jpeg',   // wiring the distribution board
      '/assets/1.jpeg',   // breaker hardware
    ],
  },
  {
    cat: 'Commercial',
    title: 'Retail Lighting Upgrade',
    location: 'Ibadan, Nigeria',
    images: [
      '/assets/3.jpeg',   // beauty salon recessed lighting
      '/assets/5.jpeg',   // ring chandelier with festive decor
      '/assets/6.jpeg',   // sputnik globe chandelier
      '/assets/8.jpeg',   // spiral pendant chandelier
      '/assets/9.jpeg',   // linear LED ceiling strips
      '/assets/14.jpeg',  // clean linear LED + recessed layout
      '/assets/19.jpeg',  // blue cove + pendant dining room
      '/assets/20.jpeg',  // multi-colour cove chandelier living room
      '/assets/17.jpeg',  // Manchester Suites bedroom
      '/assets/18.jpeg',  // Oxford Suites bedroom
    ],
  },
];

// How long each slide stays before auto-advancing (ms)
const SLIDE_INTERVAL = 3500;

function ProjectCard({ project, isVisible }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const intervalRef = useRef(null);
  const { images } = project;
  const hasMultiple = images.length > 1;

  const advance = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  }, [images.length]);

  const goTo = (idx) => {
    setCurrentSlide(idx);
    // Reset the timer when user manually navigates
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, SLIDE_INTERVAL);
  };

  // Start / pause auto-advance based on hover
  useEffect(() => {
    if (!hasMultiple) return;
    if (!isHovered) {
      intervalRef.current = setInterval(advance, SLIDE_INTERVAL);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, advance, hasMultiple]);

  // Reset to first slide when the card re-enters after filter change
  useEffect(() => {
    setCurrentSlide(0);
  }, [project.title]);

  const handleImgError = (idx) => {
    setImgErrors(prev => ({ ...prev, [idx]: true }));
  };

  return (
    <div className={`portfolio_item${isVisible ? ' portfolio_item--visible' : ''}`}>
      <div
        className="portfolio_thumb"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slide strip */}
        <div
          className="portfolio_slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="portfolio_slide">
              {imgErrors[idx] ? (
                <Placeholder />
              ) : (
                <img
                  src={src}
                  alt={`${project.title} – photo ${idx + 1}`}
                  className="portfolio_slide-img"
                  onError={() => handleImgError(idx)}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        {/* Dot indicators — only when there are multiple slides */}
        {hasMultiple && (
          <div className="portfolio_dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`portfolio_dot${currentSlide === idx ? ' portfolio_dot--active' : ''}`}
                onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Progress bar — auto resets with slide change */}
        {hasMultiple && !isHovered && (
          <div key={currentSlide} className="portfolio_progress" />
        )}

        {/* Overlay */}
        <div className="portfolio_overlay">
          <span className="portfolio_overlay-cat">{project.cat}</span>
          <h3 className="portfolio_overlay-title">{project.title}</h3>
          <span className="portfolio_overlay-loc">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.74 3.5 6.5 3.5 6.5s3.5-3.76 3.5-6.5C9.5 2.57 7.93 1 6 1z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1" />
            </svg>
            {project.location}
          </span>
        </div>
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="portfolio_thumb-placeholder">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.25">
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="white" strokeWidth="1.2" />
        <circle cx="14" cy="14" r="4" stroke="white" strokeWidth="1.2" />
        <path d="M4 28l9-9 6 6 5-5 12 12" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [visibleCards, setVisibleCards] = useState([]);

  const ref = useReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  useEffect(() => {
    setVisibleCards([]);
    const timers = filtered.map((_, i) =>
      setTimeout(() => {
        setVisibleCards(prev => [...prev, i]);
      }, 80 + i * 80)
    );
    return () => timers.forEach(t => clearTimeout(t));
  }, [active]);

  const handleFilter = (cat) => {
    if (cat === active) return;
    setActive(cat);
  };

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
              onClick={() => handleFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio_grid">
          {filtered.map((p, i) => (
            <ProjectCard
              key={`${p.cat}-${p.title}`}
              project={p}
              isVisible={visibleCards.includes(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
