import { useParams, Link } from 'react-router-dom';
import { industries } from '../data/industries';
import './IndustryDetail.css';

export default function IndustryDetail() {
  const { id } = useParams();
  const industry = industries.find((i) => i.id === id);

  if (!industry) {
    return (
      <div className="industry-detail-page" style={{ padding: '160px 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Industry Not Found</h1>
          <p style={{ margin: '20px 0 40px', color: 'var(--text-muted)' }}>
            The industry page you're looking for doesn't exist.
          </p>
          <Link to="/industries" className="btn btn-primary">Back to Industries</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="industry-detail-page">
      {/* ===== HERO ===== */}
      <section className="industry-hero grid-bg">
        <div className="container">
          <span className="hero-badge">{industry.heroTag}</span>
          <h1>{industry.heroTitle}</h1>
          <p className="hero-sub">{industry.heroDesc}</p>
        </div>
      </section>

      {/* ===== OVERVIEW + SPECS ===== */}
      <section className="section-white">
        <div className="container detail-grid">
          <div>
            <span className="eyebrow">Overview</span>
            <h2 className="section-title">Built for {industry.name.toLowerCase()}</h2>
            <div className="title-accent" />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '28px' }}>
              {industry.overview}
            </p>

            <div className="tag-section">
              <h4>Standout advantages</h4>
              <div className="tags-row">
                {industry.bestAt.map((t) => (
                  <span key={t} className="tag tag-green">{t}</span>
                ))}
              </div>
            </div>

            <div className="tag-section">
              <h4>Also available</h4>
              <div className="tags-row">
                {industry.alsoGood.map((t) => (
                  <span key={t} className="tag tag-blue">{t}</span>
                ))}
              </div>
            </div>

            <div className="tag-section">
              <h4>Best for</h4>
              <div className="tags-row">
                <span className="tag tag-gray">{industry.bestFor}</span>
              </div>
            </div>
          </div>

          <aside className="spec-card">
            <h4>Key Specs</h4>
            <table className="spec-table">
              <tbody>
                {industry.specs.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td>
                      {s.status === 'excellent' ? (
                        <span className="badge badge-green">{s.value}</span>
                      ) : s.status === 'good' ? (
                        <span className="badge badge-blue">{s.value}</span>
                      ) : (
                        s.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 style={{ marginTop: '24px' }}>Recommended Products</h4>
            <div className="product-tags">
              {industry.products.map((p) => (
                <span key={p} className="tag tag-gray">{p}</span>
              ))}
            </div>

            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>
              Request a Quote →
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
