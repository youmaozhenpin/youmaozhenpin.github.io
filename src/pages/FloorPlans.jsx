import React, { useState } from 'react';
import './FloorPlans.css';

const FloorPlans = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const ft20 = Array.from({ length: 24 }, (_, i) => i + 1);
  const ft30 = Array.from({ length: 30 }, (_, i) => i + 1);
  const ft40 = Array.from({ length: 30 }, (_, i) => i + 1);

  const openLightbox = (imgSrc, alt) => {
    setLightboxImg({ src: imgSrc, alt });
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  const renderGallery = (prefix, pages, sizeLabel) => (
    <div className="fp-gallery">
      {pages.map((page) => (
        <div className="fp-card" key={`${prefix}-${page}`}>
          <img
            src={`/floor-plans/${prefix}-page${page}.png`}
            alt={`${sizeLabel} page ${page}`}
            loading="lazy"
            onClick={() => openLightbox(`/floor-plans/${prefix}-page${page}.png`, `${sizeLabel} — Page ${page}`)}
          />
          <p className="fp-caption" onClick={() => openLightbox(`/floor-plans/${prefix}-page${page}.png`, `${sizeLabel} — Page ${page}`)}>
            {sizeLabel} — Page {page}
          </p>
        </div>
      ))}
    </div>
  );

  const options = [
    { img: '/options/craft-comparison.png', title: 'Our Craft vs Others', desc: 'Vertical steel frame + cement & wood floor = stronger, lighter, safer' },
    { img: '/options/terrace-roof.png', title: 'Terrace & Pitched Roof', desc: '1.5M / 2M / 3M terrace options, pitched roof upgrade available' },
    { img: '/options/lights-sockets.png', title: 'Lights & Sockets', desc: 'LED panel lights, ceiling lamps, full electrical wiring included' },
    { img: '/options/kitchen-bathroom.png', title: 'Kitchen & Bathroom', desc: 'L-shaped kitchen cabinets, wet/dry separated bathroom included' },
    { img: '/options/pvc-flooring.png', title: 'PVC Flooring (Standard)', desc: '50+ colors available, no extra charge' },
    { img: '/options/spc-flooring.png', title: 'SPC Stone Plastic Flooring (Upgrade)', desc: 'Premium waterproof flooring, 8 wood grain colors' },
    { img: '/options/curtainwall-doors.png', title: 'Glass Curtain Wall & Inner Doors', desc: 'Full glass curtain wall upgrade, aluminum-wood interior doors' },
    { img: '/options/framework-colors.png', title: 'Steel Frame Colors', desc: 'White / Black / Brown / Gray — no extra charge' },
    { img: '/options/wallpanel-colors.png', title: 'Wall Panel Colors', desc: 'White / Wood grain / Gray — standard colors included' },
    { img: '/options/interior-colors.png', title: 'Interior Wall Finishes', desc: 'White / light wood grain standard, SPC carbon crystal board upgrade' },
  ];

  return (
    <div className="floorplans-page">
      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={lightboxImg.src} alt={lightboxImg.alt} />
            <p className="lightbox-caption">{lightboxImg.alt}</p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="fp-hero">
        <div className="container">
          <span className="eyebrow">Floor Plans & Full Catalog</span>
          <h1 className="fp-title">Drawings, Layouts & Options</h1>
          <div className="title-accent" />
          <p className="fp-subtitle">
            Browse our complete catalog — technical drawings, floor plans, layout options,
            and all available finishes for your custom expandable house.
            <br /><small style={{opacity:0.8}}>Click any image to enlarge.</small>
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
