import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* ===== HERO ===== */}
      <section className="about-hero grid-bg">
        <div className="container">
          <span className="hero-badge">MODULAR HOUSING MANUFACTURING</span>
          <h1>
            Homes engineered to<br />your specification
          </h1>
          <p className="hero-sub">
            We design, fabricate, and ship modular &amp; prefab houses to your
            print — not from a catalog — for clients where quality, lead time,
            and durability aren't optional.
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="section-white">
        <div className="container who-grid">
          <div className="who-text">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">
              The prefab house partner exporters call first
            </h2>
            <div className="title-accent" />
            <p>
              Youmao Zhenpin (优贸臻品 / Hebei Youmao Zhenpin Trading Co., Ltd.)
              is a custom-to-spec manufacturer of modular container houses,
              flat-pack buildings, expandable homes, and light steel villas.
              For 15+ years we've built projects from the application backward —
              clients bring us a site, a climate, a budget, or a floor plan that
              isn't working — and we take it from material selection through
              validated production. Nothing ships from a shelf; every home is
              built to a customer requirement.
            </p>
            <p>
              Our advantage is depth in the two disciplines that decide whether a
              prefab home performs: steel frame engineering and envelope
              fabrication. With our own production lines for steel structure,
              sandwich panels, and assembly, we control the process most suppliers
              have to outsource — and that's what lets us hit demanding wind,
              thermal, and structural specs, repeatably.
            </p>
          </div>

          <aside className="who-card">
            <div className="card-stat">
              <div className="card-num">20<span>+</span></div>
              <div className="card-label">Years manufacturing prefab homes</div>
            </div>
            <div className="card-stat">
              <div className="card-num">50<span>+</span></div>
              <div className="card-label">Countries we export to</div>
            </div>
            <div className="card-stat">
              <div className="card-num">1000<span>+</span></div>
              <div className="card-label">Projects delivered worldwide</div>
            </div>
            <div className="card-divider" />
            <div className="card-cert">
              <div className="cert-badge">ISO</div>
              <div>
                <strong>ISO 9001:2015 &amp; CE CERTIFIED</strong>
                <div className="cert-sub">Certified modular building manufacturer</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="section-soft">
        <div className="container">
          <span className="eyebrow">How We Work</span>
          <h2 className="section-title">One team, from inquiry to delivery</h2>
          <div className="title-accent" />
          <p className="section-subtitle">
            One team owns your project from first drawing to final container loading
            — no handoffs to outside traders or subcontracted factories.
          </p>

          <div className="steps-grid">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Requirements &amp; site analysis</h3>
              <p>
                We start from your use case — climate, wind load, occupancy,
                foundation, and local codes — and translate them into a
                specification and design target.
              </p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Design &amp; engineering</h3>
              <p>
                We produce layout drawings, 3D renders, and structural
                calculations. Free architectural design service for custom
                villas and multi-unit projects.
              </p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Fabrication &amp; QC</h3>
              <p>
                Steel frame, wall panels, electrical, and plumbing are built
                in-house. Every unit passes pre-shipment inspection with photo
                and video documentation.
              </p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h3>Loading &amp; shipping</h3>
              <p>
                Optimized container loading — foldable units, flat packs, or
                knocked-down panels. FOB, CIF, or DDP to your port or jobsite.
              </p>
            </div>
            <div className="step">
              <div className="step-num">05</div>
              <h3>On-site support &amp; after-sales</h3>
              <p>
                Assembly manuals, video guidance, and spare parts support.
                We stand behind every unit long after the container leaves
                our yard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="section-white">
        <div className="container">
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="section-title">Where a substandard house isn't an option</h2>
          <div className="title-accent" />
          <p className="section-subtitle">
            Our homes go into projects where failure means downtime, lost revenue,
            or safety risk — so validation, traceability, and durability are
            built in, not added on.
          </p>

          <div className="industries-grid">
            <div className="industry">
              <h3>Construction &amp; industrial</h3>
              <ul>
                <li>Construction site camps</li>
                <li>Mining &amp; oilfield camps</li>
                <li>Temporary worker housing</li>
              </ul>
            </div>
            <div className="industry">
              <h3>Residential &amp; commercial</h3>
              <ul>
                <li>Luxury villas &amp; homes</li>
                <li>Hotels &amp; Airbnb stays</li>
                <li>Offices &amp; classrooms</li>
              </ul>
            </div>
            <div className="industry">
              <h3>Emergency &amp; remote use</h3>
              <ul>
                <li>Disaster relief housing</li>
                <li>Military &amp; field camps</li>
                <li>Remote site facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
