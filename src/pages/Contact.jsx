import { useState } from 'react';
import './Contact.css';

// Web3Forms access key —— 从 web3forms.com 用 youmao0903@gmail.com 领取后替换下面这串。
// 密钥可以公开放在前端，Web3Forms 官方允许。
const ACCESS_KEY = '36ef4048-eaa6-4cce-915f-4c3eb587cfcd';
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

const PRODUCT_OPTIONS = [
  'Foldable Container House',
  'Flat Pack Container House',
  'Expandable Container House',
  'Light Steel Villa',
  'Container Office',
  'Luxury Tiny House',
  'Double-Story Container House',
  'Flat Pack House with Porch',
  'Apple Cabin / Space Capsule',
  'Seaside Resort Villas',
  'Glass Curtain Wall Container',
  'Two-Story Site Dormitory',
  'Other / Custom',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    // 预留字段：未填入真实密钥前保持原展示行为，不破坏线上表单
    if (ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      console.warn('Web3Forms access key not configured yet.');
      setSubmitted(true);
      return;
    }

    data.append('access_key', ACCESS_KEY);
    data.append('subject', 'New Inquiry from Youmao Zhenpin Website');
    data.append('from_name', 'Youmao Zhenpin Website');

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError(
          json.message ||
            'Something went wrong. Please try again, or message us directly on WhatsApp.'
        );
      }
    } catch (err) {
      setError('Network error. Please try again, or message us directly on WhatsApp.');
    } finally {
      setSending(false);
    }
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
              <p>youmao0903@gmail.com</p>
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
                  <input type="text" name="name" placeholder="NAME *" required />
                  <input type="text" name="company" placeholder="COMPANY" />
                </div>

                <div className="form-row">
                  <input type="email" name="email" placeholder="EMAIL *" required />
                  <input type="tel" name="whatsapp" placeholder="WHATSAPP / PHONE" />
                </div>

                <select name="product" required defaultValue="">
                  <option value="" disabled>PRODUCT INTEREST *</option>
                  {PRODUCT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>

                <div className="form-row">
                  <input type="text" name="quantity" placeholder="QUANTITY" />
                  <input type="text" name="country" placeholder="DESTINATION COUNTRY" />
                </div>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="TELL US ABOUT YOUR PROJECT — SIZE, LAYOUT, TIMELINE, SPECIAL REQUIREMENTS..."
                />

                {/* Honeypot spam protection (hidden from humans) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ display: 'none' }}
                />

                {error && <p className="form-error">{error}</p>}

                <button type="submit" className="btn btn-primary send-btn" disabled={sending}>
                  {sending ? 'Sending…' : 'Send'} <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
