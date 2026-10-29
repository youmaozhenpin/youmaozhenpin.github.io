import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* ===== HERO ===== */}
      <section className="contact-hero grid-bg">
        <div className="container">
          <span className="hero-badge">Contact Us</span>
          <h1>Let's build your project.</h1>
          <p className="hero-sub">
            Send your requirements or describe the project — a real factory
            engineer will scope design, production, and shipping, usually within
            48 hours.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section-white">
        <div className="container contact-grid">
          {/* Left column */}
          <div className="contact-info">
            <div className="info-block">
              <h4>WhatsApp</h4>
              <p>+86 15690180200</p>
            </div>
            <div className="info-block">
              <h4>Email</h4>
              <p>youmaozhenpin0410@gmail.com</p>
            </div>
            <div className="info-block">
              <h4>Factory</h4>
              <p>Hengshui, Hebei Province, China</p>
            </div>
            <div className="info-block">
              <h4>Hours</h4>
              <p>Mon – Sat, 8:00 AM – 6:00 PM (GMT+8)</p>
            </div>
            <div className="info-block">
              <h4>Certified</h4>
              <p>ISO 9001:2015 &amp; CE CERTIFIED</p>
            </div>

            <div className="quote-tips">
              <h4>What to include for a fast quote</h4>
              <ul>
                <li>Product type (container house, villa, etc.)</li>
                <li>Size, quantity, and number of floors</li>
                <li>Destination country and port</li>
                <li>Timeline and installation requirements</li>
                <li>Special needs — insulation, climate, interior</li>
              </ul>
            </div>
          </div>

          {/* Right column — form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-msg">
                <h3>Thank you!</h3>
                <p>
                  Your inquiry has been received. Our team will get back to you
                  within 48 hours. For urgent requests, message us on WhatsApp directly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <p className="form-intro">
                  Send your project details — a real factory engineer replies,
                  usually within 48 hours.
                </p>

                <div className="form-row">
                  <input type="text" placeholder="NAME *" required />
                  <input type="text" placeholder="COMPANY" />
                </div>

                <div className="form-row">
                  <input type="email" placeholder="EMAIL *" required />
                  <input type="tel" placeholder="WHATSAPP / PHONE" />
                </div>

                <select required defaultValue="">
                  <option value="" disabled>PRODUCT INTEREST *</option>
                  <option>Foldable Container House</option>
                  <option>Flat Pack Container</option>
                  <option>Expandable Container House</option>
                  <option>Light Steel Villa</option>
                  <option>Container Office</option>
                  <option>Tiny House</option>
                  <option>Other / Custom</option>
                </select>

                <div className="form-row">
                  <input type="text" placeholder="QUANTITY" />
                  <input type="text" placeholder="DESTINATION COUNTRY" />
                </div>

                <textarea
                  rows="5"
                  placeholder="TELL US ABOUT YOUR PROJECT — SIZE, LAYOUT, TIMELINE, SPECIAL REQUIREMENTS..."
                />

                <button type="submit" className="btn btn-primary send-btn">
                  Send <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
