import './Knowledge.css';

export default function Knowledge() {
  return (
    <div className="knowledge-page">
      {/* ===== HERO ===== */}
      <section className="knowledge-hero grid-bg">
        <div className="container">
          <span className="hero-badge">Knowledge &amp; Resources</span>
          <h1>Specs, guides and resources for your project</h1>
          <p className="hero-sub">
            The references our engineers use every day — product specifications,
            loading guides, installation manuals, and design resources.
            Free to use, no sign-up.
          </p>
        </div>
      </section>

      {/* ===== TOOLS / CALCULATORS ===== */}
      <section className="section-white">
        <div className="container">
          <span className="eyebrow">Tools &amp; Resources</span>
          <h2 className="section-title">Everything you need, in one place</h2>
          <div className="title-accent" />

          <div className="featured-card">
            <div className="featured-icon">📋</div>
            <div>
              <h3>Request a Free Quote</h3>
              <p>
                Tell us your requirements — size, quantity, destination — and get
                a detailed quote with shipping within 48 hours.
              </p>
              <a href="https://wa.me/8615690180200?text=Hi%2C%20I%27m%20interested%20in%20your%20prefab%20houses." target="_blank" rel="noopener noreferrer" className="featured-link">Chat on WhatsApp →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SPEC SHEETS ===== */}
      <section className="section-soft">
        <div className="container">
          <span className="eyebrow">Product Specs</span>
          <h2 className="section-title">Every product, fully specified</h2>
          <div className="title-accent" />

          <div className="spec-grid">
            <a href="/products/foldable-container" className="spec-item">Foldable Container House <span>→</span></a>
            <a href="/products/flat-pack-container" className="spec-item">Flat Pack Container <span>→</span></a>
            <a href="/products/expandable-container" className="spec-item">Expandable Container <span>→</span></a>
            <a href="/products/light-steel-villa" className="spec-item">Light Steel Villa <span>→</span></a>
            <a href="/products/container-office" className="spec-item">Container Office <span>→</span></a>
            <a href="/products/tiny-house" className="spec-item">Luxury Tiny House <span>→</span></a>
            <a href="/products" className="spec-item">Custom / Modular <span>→</span></a>
            <a href="/products" className="spec-item">Bathroom / Kitchen Units <span>→</span></a>
          </div>
        </div>
      </section>

      {/* ===== GUIDES ===== */}
      <section className="section-white">
        <div className="container">
          <span className="eyebrow">Guides &amp; Reference</span>
          <h2 className="section-title">Design and installation resources</h2>
          <div className="title-accent" />

          <div className="guides-grid">
            <div className="guide">
              <h3>Loading &amp; Shipping Guide</h3>
              <p>How many units fit in a 40HQ container for each product type, loading diagrams, and shipping terms explained.</p>
              <a href="/contact" className="guide-link">View →</a>
            </div>
            <div className="guide">
              <h3>Foundation &amp; Installation</h3>
              <p>Foundation requirements, assembly steps, and site preparation guide for container houses and villas.</p>
              <a href="/contact" className="guide-link">View →</a>
            </div>
            <div className="guide">
              <h3>Climate &amp; Insulation</h3>
              <p>Which wall and roof insulation options work for desert, tropical, or cold climates — R-values and recommendations.</p>
              <a href="/contact" className="guide-link">View →</a>
            </div>
            <div className="guide">
              <h3>Electrical &amp; Plumbing</h3>
              <p>Standard electrical layouts, pre-wired options, bathroom and kitchen plumbing packages available.</p>
              <a href="/contact" className="guide-link">View →</a>
            </div>
            <div className="guide">
              <h3>Custom Design Service</h3>
              <p>How our free design service works — from floor plan to 3D render to production drawings.</p>
              <a href="/contact" className="guide-link">View →</a>
            </div>
            <div className="guide">
              <h3>FAQ</h3>
              <p>Answers to common questions about lead times, payment, shipping, installation, and after-sales support.</p>
              <a href="/contact" className="guide-link">View →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
