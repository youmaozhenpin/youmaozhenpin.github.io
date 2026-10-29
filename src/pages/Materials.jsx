import { Link } from 'react-router-dom';
import { materials } from '../data/materials';
import './Materials.css';

export default function Materials() {
  return (
    <div className="materials-page">
      {/* ===== HERO ===== */}
      <section className="materials-hero grid-bg">
        <div className="container">
          <span className="hero-badge">Materials &amp; Finishes</span>
          <h1>Any material your project demands</h1>
          <p className="hero-sub">
            Every home is built to your specification — wall panels, insulation,
            steel frames, windows, flooring, and interiors. Pick a material to see
            specs and best-use cases, or tell us your climate and budget —
            we'll recommend the right combination.
          </p>
        </div>
      </section>

      {/* ===== MATERIALS GRID ===== */}
      <section className="section-white">
        <div className="container">
          <div className="materials-grid">
            {materials.map((m) => (
              <Link to={`/materials/${m.id}`} key={m.id} className="material-card">
                <div className="material-head">
                  <h3>{m.name}</h3>
                  <span className="material-tag">{m.tag}</span>
                </div>
                <div className="material-full">{m.full}</div>
                <p className="material-desc">{m.shortDesc}</p>
                <span className="material-link">View material <span>→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
