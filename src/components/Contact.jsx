import React, { useState } from 'react';
import './Contact.css';
import { useReveal } from '../hooks/useReveal';

const RECIPIENT_EMAIL = 'info@ehizmogajielectrical.com';

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
  const [form, setForm] = useState({ name: '', email: '', phone:"", service: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState({});
  

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // Little-wiz updated: Basic validation — name, email, and service are required
  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Please enter your name.';
    if (!form.email.trim())   e.email   = 'Please enter your email address.';
    if (!form.service)        e.service = 'Please select a service.';
    return e;
  };

   const handleSubmit = e => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});

    // Little-wiz updated: Build the email subject line
    const subject = `Service Request: ${form.service || 'General Enquiry'} — ${form.name}`;

    // Little-wiz updated: Build the email body — each field on its own line, clearly labelled
    const body = [
      `Hello,`,
      ``,
      `You have received a new service request from your website.`,
      ``,
      `─────────────────────────────`,
      `  Name:     ${form.name}`,
      `  Phone:    ${form.phone    || 'Not provided'}`,
      `  Email:    ${form.email}`,
      `  Service:  ${form.service  || 'Not specified'}`,
      `  Date:     ${form.date     || 'Not specified'}`,
      `─────────────────────────────`,
      ``,
      `Message:`,
      form.message || '(No additional message provided)',
      ``,
      `─────────────────────────────`,
      `Sent via ehizmogajielectrical.com`,
    ].join('\n');

    // Little-wiz updated: Encode subject and body for use in a mailto URI
    const mailtoLink =
      `mailto:${RECIPIENT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Little-wiz updated: Open mail client
    window.location.href = mailtoLink;

    // Little-wiz updated: Show success state after a short delay
    setTimeout(() => setSubmitted(true), 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    setErrors({});
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
              <h3>Email Client Opened!</h3>
              <p>
                Your message has been prepared and your email app should have
                opened. Just hit <strong>Send</strong> to deliver it to us.
                Can't see it?{' '}
                <a href={`mailto:${RECIPIENT_EMAIL}`} className="contact_success-link">
                  Click here to try again.
                </a>
              </p>
              <button className="btn btn--ghost contact_reset" onClick={handleReset}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact_form" onSubmit={handleSubmit} noValidate>

              {/* Row 1: Name + Phone */}
              <div className="contact_row">
                <div className="contact_field">
                  <label className="contact_label" htmlFor="name">
                    Full Name <span className="contact_required">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text"
                    className={`contact_input${errors.name ? ' contact_input--error' : ''}`}
                    placeholder="Chukwuemeka Obi"
                    value={form.name} onChange={handleChange}
                  />
                  {errors.name && <span className="contact_error">{errors.name}</span>}
                </div>
                <div className="contact_field">
                  <label className="contact_label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel"
                    className="contact_input"
                    placeholder="+234 800 000 0000"
                    value={form.phone} onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="contact_field">
                <label className="contact_label" htmlFor="email">
                  Email Address <span className="contact_required">*</span>
                </label>
                <input
                  id="email" name="email" type="email"
                  className={`contact_input${errors.email ? ' contact_input--error' : ''}`}
                  placeholder="you@example.com"
                  value={form.email} onChange={handleChange}
                />
                {errors.email && <span className="contact_error">{errors.email}</span>}
              </div>

              {/* Row 3: Service + Date */}
              <div className="contact_row">
                <div className="contact_field">
                  <label className="contact_label" htmlFor="service">
                    Service Required <span className="contact_required">*</span>
                  </label>
                  <select
                    id="service" name="service"
                    className={`contact_input contact_select${errors.service ? ' contact_input--error' : ''}`}
                    value={form.service} onChange={handleChange}
                  >
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="contact_error">{errors.service}</span>}
                </div>
                <div className="contact_field">
                  <label className="contact_label" htmlFor="date">Preferred Date</label>
                  <input
                    id="date" name="date" type="date"
                    className="contact_input"
                    value={form.date} onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="contact_field">
                <label className="contact_label" htmlFor="message">
                  Message (optional)
                </label>
                <textarea
                  id="message" name="message"
                  className="contact_input contact_textarea"
                  placeholder="Tell us a bit more about the job — location, scope, any existing setup…"
                  rows={4}
                  value={form.message} onChange={handleChange}
                />
              </div>

              {/* Little-wiz updated: Helper note so users know what clicking Send will do */}
              <p className="contact_mailto-note">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7 6v4M7 4.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Clicking Send will open your email app (Gmail, Outlook, etc.)
                with this form pre-filled. Just hit Send in your email app to submit.
              </p>

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
