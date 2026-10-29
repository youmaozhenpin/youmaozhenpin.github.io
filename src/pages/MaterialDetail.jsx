import { useParams, Link } from 'react-router-dom';
import { materials } from '../data/materials';
import './MaterialDetail.css';

const statusColor = {
  excellent: 'badge-green',
  good: 'badge-blue',
  poor: 'badge-red',
};

export default function MaterialDetail() {
  const { id } = useParams();
  const material = materials.find((m) => m.id === id);

  if (!material) {
    return (
      <div className="material-detail-page" style={{ padding: '160px 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Material Not Found</h1>
          <p style={{ margin: '20px 0 40px', color: 'var(--text-muted)' }}>
            The material you're looking for doesn't exist.
          </p>
          <Link to="/materials" className="btn btn-primary">Back to Materials</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="material-detail-page">
      {/* ===== HERO ===== */}
      <section className="material-hero grid-bg">
        <div className="container">
          <span className="hero-badge">Building Material</span>
          <h1>{material.name}</h1>
          <p className="hero-full">{material.full}</p>
          <p className="hero-desc">{material.description}</p>
          <div className="hero-spec-tag">{material.tag}</div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section-white">
        <div className="container detail-grid">
          <div className="detail-left">
            <span className="eyebrow">Overview</span>
            <h2 className="section-title">What {material.name} is best at</h2>
            <div className="title-accent" />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '28px' }}>
              {material.description}
            </p>

            <div className="tag-section">
              <h4>Standout advantages</h4>
              <div className="tags-row">
                {material.bestAt.map((t) => (
                  <span key={t} className="tag tag-green">{t}</span>
                ))}
              </div>
            </div>

            <div className="tag-section">
              <h4>Also good for</h4>
              <div className="tags-row">
                {material.alsoGood.map((t) => (
                  <span key={t} className="tag tag-blue">{t}</span>
                ))}
              </div>
            </div>

            <div className="tag-section">
              <h4>Best for</h4>
              <div className="tags-row">
                <span className="tag tag-gray">{material.bestFor}</span>
              </div>
            </div>
          </div>

          <aside className="spec-card">
            <h4>Technical Specifications</h4>
            <table className="spec-table">
              <tbody>
                {material.specs.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td>
                      {s.status ? (
                        <span className={`badge ${statusColor[s.status]}`}>{s.value}</span>
                      ) : (
                        s.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>
              Request a Quote →
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
