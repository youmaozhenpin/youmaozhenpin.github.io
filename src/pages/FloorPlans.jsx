import React from 'react';
import './FloorPlans.css';

const FloorPlans = () => {
  // 20ft: 24 pages
  const ft20 = Array.from({ length: 24 }, (_, i) => i + 1);
  // 30ft: 30 pages
  const ft30 = Array.from({ length: 30 }, (_, i) => i + 1);
  // 40ft: 30 pages
  const ft40 = Array.from({ length: 30 }, (_, i) => i + 1);

  const renderGallery = (prefix, pages, sizeLabel) => (
    <div className="fp-gallery">
      {pages.map((page) => (
        <div className="fp-card" key={`${prefix}-${page}`}>
          <img src={`/floor-plans/${prefix}-page${page}.png`} alt={`${sizeLabel} page ${page}`} />
          <p className="fp-caption">{sizeLabel} — Page {page}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="floorplans-page">
      {/* Hero */}
      <section className="fp-hero">
        <div className="container">
          <span className="eyebrow">Floor Plans & Full Catalog</span>
          <h1 className="fp-title">Complete Drawings Catalog</h1>
          <div className="title-accent" />
          <p className="fp-subtitle">
            All technical drawings, floor plans, layout options, and finish selections —
            browse the full catalog for each size.
          </p>
        </div>
      </section>

      {/* 20ft Series */}
      <section className="fp-section">
        <div className="container">
          <h2 className="fp-section-title">20ft Expandable Series (24 Pages)</h2>
          <p className="fp-section-desc">
            Expands from a 20ft shipping container to ~37m².
            <strong>One 40HQ container holds 2 sets.</strong>
          </p>
          {renderGallery('20ft', ft20, '20ft Series')}
        </div>
      </section>

      {/* 30ft Series */}
      <section className="fp-section fp-section-soft">
        <div className="container">
          <h2 className="fp-section-title">30ft Expandable Series (30 Pages)</h2>
          <p className="fp-section-desc">
            Larger footprint — ~58m² expanded.
            <strong>One 40HQ container holds 1 set.</strong>
          </p>
          {renderGallery('30ft', ft30, '30ft Series')}
        </div>
      </section>

      {/* 40ft Series */}
      <section className="fp-section">
        <div className="container">
          <h2 className="fp-section-title">40ft Expandable Series (30 Pages)</h2>
          <p className="fp-section-desc">
            Maximum space — up to ~95m².
            <strong>Ideal for full family homes or large commercial use.</strong>
          </p>
          {renderGallery('40ft', ft40, '40ft Series')}
        </div>
      </section>

      {/* CTA */}
      <section className="fp-cta">
        <div className="container">
          <h2>Need a custom layout?</h2>
          <p>Send us your requirements and we'll design the perfect floor plan for your project.</p>
          <a href="https://wa.me/8615690180200" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Get a Free Quote on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default FloorPlans;
