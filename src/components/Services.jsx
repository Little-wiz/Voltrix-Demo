import React from 'react';
import './Services.css';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&fit=crop',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L4 9v10l10 6 10-6V9L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14 3v16M4 9l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
    title: 'Electrical Wiring & Rewiring',
    desc: 'Comprehensive electrical wiring and rewiring installation for homes and buildings. Safe, reliable, and professionally done.',
    tag: 'Wiring',
  },
  {
    image: 'https://www.mistersparky.com/img/upload/ms-pleasantville_july-blog.jpg?w=800&q=80&fit=crop',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12h12M8 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    title: 'Electrical Installations & Fittings',
    desc: 'Professional setup of fixtures and electrical components for residential and commercial properties.',
    tag: 'Installation',
  },
  {
    image: 'https://torontowiring.com/wp-content/uploads/2024/09/residential-electrician-6.jpg?w=800&q=80&fit=crop',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 12h18M5 16h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="3" y="8" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="8" cy="14" r="1.5" fill="currentColor"/></svg>),
    title: 'Repairs & Maintenance',
    desc: 'General electrical troubleshooting and repairs. Our certified technicians are available for routine servicing and emergency repairs.',
    tag: 'Repairs',
  },
  {
    image: 'https://feyafy.com/wp-content/uploads/2025/01/Rectangle_9-1.webp?w=800&q=80&fit=crop',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M14 8v6M14 17v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    title: 'Winding & Rewinding',
    desc: 'Specialized electrical motor services including winding and rewinding for industrial and commercial motors.',
    tag: 'Motors',
  },
  {
    image: 'https://beamairflow.com/wp-content/uploads/2024/05/unnamed-15-2.webp?w=800&q=80&fit=crop',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="6" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 9h16M6 14h16M6 19h16" stroke="currentColor" strokeWidth="1.3"/></svg>),
    title: 'Capacitor Services',
    desc: 'Professional placement and replacement of capacitors for electrical systems. Improve power factor and efficiency.',
    tag: 'Capacitor',
  },
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&fit=crop',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L6 9v6l8 5 8-5V9L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14 14l-4-3M14 14l4-3M14 14v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>),
    title: 'Solar Panel Installation',
    desc: 'Complete solar PV system design and installation for homes and businesses. Maximise energy independence and cut electricity bills.',
    tag: 'Solar',
  },
 {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 8V6a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    title: 'Inverter Installation',
    desc: 'Expert inverter setup and configuration. Seamless switchover between grid and backup power — no downtime, no surges.',
    tag: 'Inverter',
  },
  {
    image: 'https://images.unsplash.com/photo-1556948434-66a1c9f52461?w=800&q=80&fit=crop',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="5" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 7V5h10v2M12 14h4M14 12v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>),
    title: 'Battery Storage Solutions',
    desc: 'Store the energy you generate. Our lithium and deep-cycle battery systems keep your power flowing through the night and cloudy days.',
    tag: 'Storage',
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

              {/* Little-wiz updated: Background image layer per card */}
              <div
                className="service-card_bg"
                style={{ backgroundImage: `url(${s.image})` }}
                aria-hidden="true"
              />

              {/* Little-wiz updated: Dark overlay */}
              <div className="service-card_overlay" aria-hidden="true" />

               {/* Little-wiz updated: All card content sits above image */}
              <div className="service-card_content">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Little-wiz was here
