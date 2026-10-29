import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import './Industries.css';

export default function Industries() {
  return (
    <div className="industries-page">
      {/* ===== HERO ===== */}
      <section className="industries-hero grid-bg">
        <div className="container">
          <span className="hero-badge">Industries We Serve</span>
          <h1>Modular housing built for your industry</h1>
          <p className="hero-sub">
            From construction camps to remote mining sites, from disaster relief
            to luxury resorts — we design and build modular homes engineered
            for where they're needed.
          </p>
        </div>
      </section>

      {/* ===== INDUSTRY CARDS ===== */}
      <section className="section-white">
        <div className="container">
          <span className="eyebrow">What We Build</span>
          <h2 className="section-title">Homes we build for every industry</h2>
          <div className="title-accent" />

          <div className="industry-cards">
            {industries.map((ind) => (
              <Link to={`/industries/${ind.id}`} key={ind.id} className="ind-card">
                <h3>{ind.name}</h3>
                <p>{ind.heroDesc}</p>
                <span className="ind-link">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
