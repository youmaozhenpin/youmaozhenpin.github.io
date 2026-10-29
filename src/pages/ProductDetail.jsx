import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="detail-page" style={{ padding: '180px 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Product Not Found</h1>
          <p style={{ margin: '20px 0 40px', color: 'var(--color-text-muted)' }}>
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <section className="detail-hero">
        <div className="container detail-grid">
          <div className="detail-img" style={{ backgroundImage: `url(${product.image})` }} />
          <div className="detail-info">
            <span className="eyebrow">Product</span>
            <h1>{product.name}</h1>
            <p className="detail-tagline">{product.tagline}</p>
            <p className="detail-desc">{product.description}</p>
            <div className="detail-actions">
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
              <Link to="/products" className="btn btn-outline">← All Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container detail-bottom">
          <div className="specs-block">
            <h2>Technical Specifications</h2>
            <table className="spec-table">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="features-block">
            <h2>Key Features</h2>
            <ul className="feature-list">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="best-for">
              <strong>Best For:</strong> {product.bestFor}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
