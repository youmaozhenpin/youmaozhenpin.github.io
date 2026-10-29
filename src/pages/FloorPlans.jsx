import React from 'react';
import './FloorPlans.css';

const FloorPlans = () => {
  return (
    <div className="floorplans-page">
      {/* Hero */}
      <section className="fp-hero">
        <div className="container">
          <span className="eyebrow">Floor Plans & Configurations</span>
          <h1 className="fp-title">Detailed Drawings & Options</h1>
          <div className="title-accent" />
          <p className="fp-subtitle">
            Full technical drawings, floor plans, and finish options for our expandable container houses.
            Choose your size, layout, and finishes — we engineer the rest.
          </p>
        </div>
      </section>

      {/* 20ft Series */}
      <section className="fp-section">
        <div className="container">
          <h2 className="fp-section-title">20ft Expandable Series</h2>
          <p className="fp-section-desc">
            The most popular size — expands from 20ft container to ~37m² of living space.
            One 40HQ container holds 2 sets.
          </p>
          <div className="fp-gallery">
            <div className="fp-card">
              <img src="/floor-plans/20ft-page1.png" alt="20ft expandable house overview" />
              <p className="fp-caption">Overview — 3D Render, Elevations & Dimensions</p>
            </div>
            <div className="fp-card">
              <img src="/floor-plans/20ft-page2.png" alt="1 bedroom 1 living room layout" />
              <p className="fp-caption">1 Bedroom + Living Room Layout</p>
            </div>
            <div className="fp-card">
              <img src="/floor-plans/20ft-page10.png" alt="2 bedroom flat roof layout" />
              <p className="fp-caption">2 Bedrooms + Living Room, Flat-Roof Version</p>
            </div>
          </div>
        </div>
      </section>

      {/* 30ft Series */}
      <section className="fp-section fp-section-soft">
        <div className="container">
          <h2 className="fp-section-title">30ft Expandable Series</h2>
          <p className="fp-section-desc">
            Larger footprint — perfect for families or small offices. Multiple layout options available.
          </p>
          <div className="fp-gallery">
            <div className="fp-card">
              <img src="/floor-plans/30ft-page1.png" alt="30ft expandable house overview" />
              <p className="fp-caption">30ft Series Overview</p>
            </div>
          </div>
        </div>
      </section>

      {/* 40ft Series */}
      <section className="fp-section">
        <div className="container">
          <h2 className="fp-section-title">40ft Expandable Series</h2>
          <p className="fp-section-desc">
            Maximum space — up to ~95m². Ideal for full family homes or large commercial spaces.
          </p>
          <div className="fp-gallery">
            <div className="fp-card">
              <img src="/floor-plans/40ft-page1.png" alt="40ft expandable house overview" />
              <p className="fp-caption">40ft Series Overview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Finish Options */}
      <section className="fp-section fp-section-soft">
        <div className="container">
          <h2 className="fp-section-title">Finish & Upgrade Options</h2>
          <p className="fp-section-desc">
            Standard finishes are included. Premium upgrades available at additional cost.
          </p>
          <div className="fp-gallery">
            <div className="fp-card">
              <img src="/floor-plans/20ft-page15.png" alt="Exterior wall panel options" />
              <p className="fp-caption">Exterior Metal Carved Panels — 28 Colors & Textures</p>
            </div>
            <div className="fp-card">
              <img src="/floor-plans/20ft-page17.png" alt="Door and window options" />
              <p className="fp-caption">Doors & Windows — Steel (Standard) / Aluminum (Upgrade)</p>
            </div>
          </div>
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
