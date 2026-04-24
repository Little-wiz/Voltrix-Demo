// Little-wiz updated: Replaced mailto: approach with EmailJS

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useReveal } from '../hooks/useReveal';

// Little-wiz updated: moved to .env for production
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const services = [
  'Solar Panel Installation',
  'Inverter Installation',
  'Battery Storage Solution',
  'Residential Wiring',
  'Commercial Electrical',
  'Maintenance & Repair',
  'Emergency Callout',
  'Other',
];

export default function Contact() {
  const ref = useReveal();

  const [form, setForm] = useState({
    from_name:    '',
    from_email:   '',
    from_phone:   '',
    service_type: '',
    preferred_date: '',
    message:      '',
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // Little-wiz updated: Validation — name, email, service required
  const validate = () => {
    const e = {};
    if (!form.from_name.trim())  e.from_name    = 'Please enter your name.';
    if (!form.from_email.trim()) e.from_email   = 'Please enter your email address.';
    if (!form.service_type)      e.service_type = 'Please select a service.';
    return e;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:      form.from_name,
          from_email:     form.from_email,
          from_phone:     form.from_phone     || 'Not provided',
          service_type:   form.service_type,
          preferred_date: form.preferred_date || 'Not specified',
          message:        form.message        || 'No additional message.',
          // Little-wiz updated: sent_date auto-generates a readable timestamp on the email
          sent_date: new Date().toLocaleDateString('en-GB', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      // Little-wiz updated: Clear form fields after successful send
      setForm({
        from_name: '', from_email: '', from_phone: '',
        service_type: '', preferred_date: '', message: '',
      });

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrors({});
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container contact__inner">

        {/* ── Left: info ───────────────────────────────────── */}
        <div className="contact__info reveal">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title contact__title">
            Book a Service or Request a Quote
          </h2>
          <p className="section-sub" style={{ marginBottom: '40px' }}>
            Fill in the form and we'll get back to you within a few hours.
            For urgent electrical issues, call us directly — we're available 24/7.
          </p>

          <div className="contact__details">
            <a href="tel:+2348000000000" className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 2h3l1.5 4-2 1.2A11 11 0 0 0 11.8 13L13 11l4 1.5V16a1 1 0 0 1-1 1C6.16 17 1 11.84 1 5.5a1.5 1.5 0 0 1 1.5-1.5H3V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Phone (24/7 Emergency)</span>
                <span className="contact__detail-value">+234 800 000 0000</span>
              </div>
            </a>

            <a href="mailto:info@ehizmogajielectrical.com" className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="4" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 6l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">info@ehizmogajielectrical.com</span>
              </div>
            </a>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C6.24 1 4 3.24 4 6c0 4.5 5 11 5 11s5-6.5 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="9" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Service Area</span>
                <span className="contact__detail-value">Lagos · Abuja · Port Harcourt & Nationwide</span>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Working Hours</span>
                <span className="contact__detail-value">Mon – Sat: 7am – 8pm · 24/7 Emergencies</span>
              </div>
            </div>

            <div className="contact__rc">
              <span>Registered Company</span>
              <strong>RC: 8171988</strong>
            </div>
          </div>
        </div>

        {/* ── Right: form / states ─────────────────────────── */}
        <div className="contact__form-wrap reveal reveal-delay-2">

          {/* ── SUCCESS ── */}
          {status === 'success' && (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Message Sent!</h3>
              <p>
                Your request has been delivered to Ehiz Mogaji Electrical.
                We'll be in touch within a few hours. For urgent jobs, call
                us on <strong>+234 800 000 0000</strong>.
              </p>
              <button className="btn btn--ghost contact__reset" onClick={handleReset}>
                Send Another
              </button>
            </div>
          )}

          {/* ── ERROR ── */}
          {status === 'error' && (
            <div className="contact__success">
              <div className="contact__success-icon contact__error-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M11 11l10 10M21 11l-10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Something went wrong.</h3>
              <p>
                We couldn't send your message right now. Please try again,
                or reach us directly at <strong>+234 800 000 0000</strong>.
              </p>
              <button className="btn btn--ghost contact__reset" onClick={handleReset}>
                Try Again
              </button>
            </div>
          )}

          {/* ── FORM ── */}
          {(status === 'idle' || status === 'sending') && (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>

              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="from_name">
                    Full Name <span className="contact__required">*</span>
                  </label>
                  <input
                    id="from_name" name="from_name" type="text"
                    className={`contact__input${errors.from_name ? ' contact__input--error' : ''}`}
                    placeholder="Chukwuemeka Obi"
                    value={form.from_name} onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                  {errors.from_name && <span className="contact__error">{errors.from_name}</span>}
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="from_phone">Phone Number</label>
                  <input
                    id="from_phone" name="from_phone" type="tel"
                    className="contact__input"
                    placeholder="+234 800 000 0000"
                    value={form.from_phone} onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="from_email">
                  Email Address <span className="contact__required">*</span>
                </label>
                <input
                  id="from_email" name="from_email" type="email"
                  className={`contact__input${errors.from_email ? ' contact__input--error' : ''}`}
                  placeholder="you@example.com"
                  value={form.from_email} onChange={handleChange}
                  disabled={status === 'sending'}
                />
                {errors.from_email && <span className="contact__error">{errors.from_email}</span>}
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="service_type">
                    Service Required <span className="contact__required">*</span>
                  </label>
                  <select
                    id="service_type" name="service_type"
                    className={`contact__input contact__select${errors.service_type ? ' contact__input--error' : ''}`}
                    value={form.service_type} onChange={handleChange}
                    disabled={status === 'sending'}
                  >
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service_type && <span className="contact__error">{errors.service_type}</span>}
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="preferred_date">Preferred Date</label>
                  <input
                    id="preferred_date" name="preferred_date" type="date"
                    className="contact__input"
                    value={form.preferred_date} onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="message">Message (optional)</label>
                <textarea
                  id="message" name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell us about the job — location, scope, any existing setup…"
                  rows={4}
                  value={form.message} onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              {/* Little-wiz updated: Submit button shows spinner while sending */}
              <button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="contact__spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Request
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}

// little-wiz was here
