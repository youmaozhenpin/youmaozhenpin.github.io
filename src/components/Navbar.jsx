import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="https://wa.me/8615690180200" target="_blank" rel="noopener noreferrer">WhatsApp: +86 15690180200</a>
            <span className="dot">·</span>
            <a href="mailto:youmaozhenpin0410@gmail.com">youmaozhenpin0410@gmail.com</a>
          </div>
          <div className="topbar-right">
            <span className="topbar-yellow">ISO 9001:2015</span>
            <span className="topbar-yellow">·</span>
            <span className="topbar-yellow">CE CERTIFIED</span>
            <span className="dot">·</span>
            <span>Hengshui, Hebei, China</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="logo">
            <span className="logo-mark">YM</span>
            <span className="logo-text">
              <strong>YOUMAO ZHENPIN</strong>
              <small>优贸臻品 · PREFAB HOMES</small>
            </span>
          </Link>

          <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
            <Link to="/products" className={location.pathname.startsWith('/products') ? 'active' : ''}>Products</Link>
            <Link to="/floor-plans" className={location.pathname === '/floor-plans' ? 'active' : ''}>Floor Plans</Link>
            <Link to="/materials" className={location.pathname === '/materials' ? 'active' : ''}>Materials</Link>
            <Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''}>Industries</Link>
            <Link to="/knowledge" className={location.pathname === '/knowledge' ? 'active' : ''}>Knowledge</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            <Link to="/contact" className="btn btn-primary nav-cta">Get Quote →</Link>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  );
}
