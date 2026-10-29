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
    </div>
  );
}
