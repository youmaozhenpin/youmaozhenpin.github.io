import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Products.css';

export default function Products() {
  return (
    <div className="products-page">
      {/* ===== HERO ===== */}
      <section className="products-hero grid-bg">
        <div className="container">
          <span className="hero-badge">Our Products</span>
          <h1>Everything you build, from one source</h1>
          <p className="hero-sub">
            Our full range of modular &amp; prefab houses, each custom-built to
            your specification — prototype through production. Choose a product
            line to explore, or send us your project.
          </p>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="section-white">
        <div className="container">
          <div className="products-grid">
            {products.map((p) => (
              <Link to={`/products/${p.id}`} key={p.id} className="product-card">
                <div className="product-img" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                  <span className="product-link">Explore <span className="arrow">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REAL FACTORY PHOTOS ===== */}
      <section className="section-gray">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Real Photos</span>
            <h2 style={{ fontSize: '42px', fontWeight: 800, marginTop: '12px' }}>Our Products in Production</h2>
            <p style={{ color: '#666', maxWidth: '600px', margin: '20px auto 0', fontSize: '18px' }}>
              Every unit is built in our factory and fully inspected before shipping. Here are some recent projects.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <img src="https://aka.doubaocdn.com/s/kts3yUGQ2j" alt="Double Story Container House" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', background: 'white' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Double-Story Container House</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Two-story stackable with external staircase and balcony. Wood grain finish.</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <img src="https://aka.doubaocdn.com/s/00NKkVNspk" alt="Flat Pack House with Porch" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', background: 'white' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Flat Pack House with Porch</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Spacious single-story home with covered porch and deck. Yellow exterior finish.</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <img src="https://aka.doubaocdn.com/s/bPVevj73nk" alt="Apple Cabin Space Capsule" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', background: 'white' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Apple Cabin / Space Capsule</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Luxury glamping pod with floor-to-ceiling glass. Ideal for resorts and scenic spots.</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <img src="https://aka.doubaocdn.com/s/5CwdUkypiw" alt="Seaside Resort Villas" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', background: 'white' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Seaside Resort Villas</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Multiple units arranged as a beachfront resort. Perfect for hospitality projects.</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <img src="https://aka.doubaocdn.com/s/3brsPJak9V" alt="Glass Curtain Wall Container" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', background: 'white' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Glass Curtain Wall Container</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Premium office or retail space with full glass facade. Black aluminum frame.</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <img src="https://aka.doubaocdn.com/s/xkzNdCO8AO" alt="Two-Story Worker Dormitory" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', background: 'white' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Two-Story Site Dormitory</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Large-scale project accommodation. Stackable units with external staircase and balcony.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
