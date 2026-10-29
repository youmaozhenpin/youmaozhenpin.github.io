import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const standardOptions = [
  'Steel entrance door',
  'PVC plastic-steel windows',
  'Aluminum-wood interior doors',
  'PVC vinyl flooring',
  'LED ceiling lighting',
  'Pre-wired electrical outlets',
  'Fully insulated walls & roof',
  'Wholesale — no trader markup',
];

const upgradeOptions = [
  { name: 'Aluminum Alloy Windows', note: 'Better sound & thermal insulation' },
  { name: 'Broken-Bridge Aluminum Doors & Windows', note: 'Premium energy-efficient option' },
  { name: 'Glass Curtain Wall', note: 'Floor-to-ceiling glass facade' },
  { name: 'SPC Stone-Plastic Flooring', note: 'Waterproof, wear-resistant' },
  { name: 'L-Shaped Kitchen Cabinet', note: 'Stainless steel or marble countertop' },
  { name: 'Wet-Dry Separated Bathroom', note: 'Premium comfort upgrade' },
  { name: 'Terrace (1.5m / 2m / 3m)', note: 'Outdoor deck extension' },
  { name: 'Pitched Roof', note: 'Better rain & snow shedding' },
  { name: 'Certified Wiring & Sockets', note: 'CE-certified electrical system' },
];

const floorPlans = [
  { beds: '1 Bedroom + Living Room', size: '20ft', area: '~37 m²' },
  { beds: '2 Bedrooms + Living Room', size: '20–30ft', area: '~45 m²' },
  { beds: '3 Bedrooms + Living Room', size: '30–40ft', area: '~58 m²' },
  { beds: '4 Bedrooms + Living Room', size: '30–40ft', area: '~72 m²' },
  { beds: '6 Bedrooms + Living Room', size: '40ft', area: '~95 m²' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="detail-page" style={{ padding: '180px 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Product Not Found</h1>
          <p style={{ margin: '20px 0 40px', color: 'var(--text-muted)' }}>
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  const isExpandable = product.id === 'expandable-container';

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

      {/* Floor plan options — for expandable houses */}
      {isExpandable && (
        <section className="section-white">
          <div className="container">
            <span className="eyebrow">Floor Plans</span>
            <h2 className="section-title">Choose your layout.</h2>
            <div className="title-accent" />
            <p className="section-subtitle">
              Every expandable house is configurable — from a compact one-bed cabin
              to a six-bedroom family home. Pick a layout and we'll engineer the rest.
            </p>
            <div className="floorplan-grid">
              {floorPlans.map((fp) => (
                <div className="floorplan-card" key={fp.beds}>
                  <div className="fp-size">{fp.size}</div>
                  <div className="fp-beds">{fp.beds}</div>
                  <div className="fp-area">{fp.area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Configurations & upgrades */}
      <section className="section-soft">
        <div className="container">
          <span className="eyebrow">Configurations</span>
          <h2 className="section-title">What's included, what's optional.</h2>
          <div className="title-accent" />
          <p className="section-subtitle">
            Every home ships with the essentials as standard. Premium upgrades are
            available so you only pay for what you actually need.
          </p>

          <div className="config-grid">
            <div className="config-col config-standard">
              <h3>✓ Included Standard</h3>
              <ul>
                {standardOptions.map((opt) => (
                  <li key={opt}>{opt}</li>
                ))}
              </ul>
            </div>
            <div className="config-col config-upgrade">
              <h3>★ Optional Upgrades</h3>
              <ul>
                {upgradeOptions.map((opt) => (
                  <li key={opt.name}>
                    <strong>{opt.name}</strong>
                    <span className="opt-note">{opt.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship advantage */}
          <h2 className="section-title">Built stronger from the bottom up.</h2>
          <div className="title-accent" />
          <div className="craft-grid">
            <div className="craft-item">
              <h3>Vertical steel frame</h3>
              <p>
                All bottom steel is used vertically — delivering N times the
                load-bearing capacity of horizontal steel (which competitors use).
              </p>
            </div>
            <div className="craft-item">
              <h3>Engineered floor system</h3>
              <p>
                High-strength cement flooring in the center + multi-layer plywood
                on the sides — stronger bottom, lighter wings, lower transport risk.
              </p>
            </div>
            <div className="craft-item">
              <h3>Rigorously QC'd</h3>
              <p>
                Every unit passes pre-shipment inspection with photo and video
                documentation before it leaves our factory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
