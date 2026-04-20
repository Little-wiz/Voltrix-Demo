import React, { useState } from 'react';
import './Contact.css';
import { useReveal } from '../hooks/useReveal';

// Some text ads by claude
const services = [
  'Residential Wiring',
  'Commercial Electrical',
  'Panel Upgrade',
  'Emergency Repair',
  'EV Charger Installation',
  'Safety Inspection',
  'Other',
];

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', service: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container contact_inner">

        {/* Left: info */}
        <div className="contact_info reveal">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title contact_title">Book a Service or Request a Quote</h2>
          <p className="section-sub" style={{ marginBottom: '40px' }}>
            Fill in the form and we'll get back to you within a few hours. For urgent electrical issues, call us directly — we're available 24/7.
          </p>

          <div className="contact_details">
            <a href="tel:+2348077308787" className="contact_detail">
              <div className="contact_detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 2h3l1.5 4-2 1.2A11 11 0 0 0 11.8 13L13 11l4 1.5V16a1 1 0 0 1-1 1C6.16 17 1 11.84 1 5.5a1.5 1.5 0 0 1 1.5-1.5H3V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact_detail-label">Phone Line 1</span>
                <span className="contact_detail-value">+234 807 730 8787, +234 813 063 5398</span>
              </div>
            </a>

            {/* <a href="tel:+2348130635398" className="contact_detail">
              <div className="contact_detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 2h3l1.5 4-2 1.2A11 11 0 0 0 11.8 13L13 11l4 1.5V16a1 1 0 0 1-1 1C6.16 17 1 11.84 1 5.5a1.5 1.5 0 0 1 1.5-1.5H3V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact_detail-label">Phone Line 2</span>
                <span className="contact_detail-value">+234 813 063 5398</span>
              </div>
            </a>

            <a href="tel:+2348188907896" className="contact_detail">
              <div className="contact_detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 2h3l1.5 4-2 1.2A11 11 0 0 0 11.8 13L13 11l4 1.5V16a1 1 0 0 1-1 1C6.16 17 1 11.84 1 5.5a1.5 1.5 0 0 1 1.5-1.5H3V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact_detail-label">Phone Line 3</span>
                <span className="contact_detail-value">+234 818 890 7896</span>
              </div>
            </a> */}

            <div className="contact_detail">
              <div className="contact_detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C6.24 1 4 3.24 4 6c0 4.5 5 11 5 11s5-6.5 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="9" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              </div>
              <div>
                <span className="contact_detail-label">Address</span>
                <span className="contact_detail-value">47, Modupe Street, Folagoro, Shomolu, Lagos, Nigeria</span>
              </div>
            </div>

            <div className="contact_detail">
              <div className="contact_detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="4" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 6l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact_detail-label">Service Area</span>
                <span className="contact_detail-value">Lagos · Abuja · Port Harcourt & Nationwide</span>
              </div>
            </div>

            <div className="contact_detail">
              <div className="contact_detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="contact_detail-label">Working Hours</span>
                <span className="contact_detail-value">Mon – Sat: 7am – 8pm · 24/7 Emergencies</span>
              </div>
            </div>

            <div className="contact_rc">
              <span>Registered Company</span>
              <strong>RC: 8171988</strong>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact_form-wrap reveal reveal-delay-2">
          {submitted ? (
            <div className="contact_success">
              <div className="contact_success-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Request Received!</h3>
              <p>We'll be in touch shortly. For urgent jobs, call us directly on <strong>+234 800 000 0000</strong>.</p>
              <button className="btn btn--ghost contact_reset" onClick={() => setSubmitted(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact_form" onSubmit={handleSubmit} noValidate>
              <div className="contact_row">
                <div className="contact_field">
                  <label className="contact_label" htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" className="contact_input" placeholder="Chukwuemeka Obi" value={form.name} onChange={handleChange} required />
                </div>
                <div className="contact_field">
                  <label className="contact_label" htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" className="contact_input" placeholder="+234 800 000 0000" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="contact_field">
                <label className="contact_label" htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" className="contact_input" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="contact_row">
                <div className="contact_field">
                  <label className="contact_label" htmlFor="service">Service Required</label>
                  <select id="service" name="service" className="contact_input contact_select" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="contact_field">
                  <label className="contact_label" htmlFor="date">Preferred Date</label>
                  <input id="date" name="date" type="date" className="contact_input" value={form.date} onChange={handleChange} />
                </div>
              </div>
              <div className="contact_field">
                <label className="contact_label" htmlFor="message">Message (optional)</label>
                <textarea id="message" name="message" className="contact_input contact_textarea" placeholder="Tell us a bit more about the job — location, scope, any existing setup…" rows={4} value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn--primary contact_submit">
                Send Request
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
