import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero grid-bg">
        <div className="container hero-content">
          <span className="hero-badge">CE CERTIFIED · ISO 9001 · FACTORY DIRECT</span>
          <h1>
            Your Modular Home,<br />
            <span className="hero-accent">Built in Weeks.</span>
          </h1>
          <p className="hero-sub">
            20 years of manufacturing prefab &amp; modular houses — engineered to your
            spec, delivered to 50+ countries. From a single container office to a
            full light-steel villa community.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/8615690180200?text=Hi%2C%20I%27m%20interested%20in%20your%20prefab%20houses." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get a Free Quote →</a>
            <Link to="/products" className="btn btn-outline">Explore Products</Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar">
        <div className="container stats-grid">
          <div className="stat">
            <div className="stat-num">20<span className="plus">+</span></div>
            <div className="stat-label">Years Manufacturing</div>
          </div>
          <div className="stat">
            <div className="stat-num">50<span className="plus">+</span></div>
            <div className="stat-label">Countries Exported</div>
          </div>
          <div className="stat">
            <div className="stat-num">1000<span className="plus">+</span></div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat">
            <div className="stat-num">48<span className="plus">h</span></div>
            <div className="stat-label">Quote Response</div>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section-white">
        <div className="container">
          <span className="eyebrow">Why Youmao Zhenpin</span>
          <h2 className="section-title">A real factory, not a trading desk.</h2>
          <div className="title-accent" />
          <p className="section-subtitle">
            We control every step — steel processing, wall panel production, assembly,
            QC, and container loading. When you work with us, you deal directly with
            the people who build your house.
          </p>

          <div className="features-grid">
            <div className="feature">
              <h3>Factory-Direct Pricing</h3>
              <p>No middleman markup. What you see is what the factory charges — fully transparent, no hidden fees.</p>
            </div>
            <div className="feature">
              <h3>Fast Lead Time</h3>
              <p>Standard models ship in 15 days. Custom villas in 35–45 days. We hit your project schedule.</p>
            </div>
            <div className="feature">
              <h3>Global Shipping</h3>
              <p>FOB, CIF, DDP — we handle everything to your port or your door. 40HQ containers worldwide.</p>
            </div>
            <div className="feature">
              <h3>Certified Quality</h3>
              <p>CE, ISO 9001, SGS inspected. Steel, insulation, electrical — all meet international standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="section-soft">
        <div className="container">
          <span className="eyebrow">Our Products</span>
          <h2 className="section-title">Six product lines, one custom standard.</h2>
          <div className="title-accent" />
          <p className="section-subtitle">
            Every home is engineered to your specification — climate, size,
            interior, and branding. Never pulled from stock.
          </p>

          <div className="products-grid">
            {products.map((p) => (
              <Link to={`/products/${p.id}`} key={p.id} className="product-card">
                <div className="product-img" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                  <span className="product-link">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to start your project?</h2>
          <p>Tell us your requirements and get a detailed quote within 48 hours.</p>
          <a href="https://wa.me/8615690180200?text=Hi%2C%20I%27m%20interested%20in%20your%20prefab%20houses." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Request a Quote →</a>
        </div>
      </section>
    </div>
  );
}
