import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">YM</span>
              <div>
                <strong>YOUMAO ZHENPIN</strong>
                <small>优贸臻品 · PREFAB & MODULAR HOMES</small>
              </div>
            </div>
            <p className="footer-tagline">
              Hebei Youmao Zhenpin Trading Co., Ltd. — Premium modular &amp; prefab housing solutions, factory-direct to 50+ countries worldwide.
            </p>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <Link to="/products">Foldable Container House</Link>
            <Link to="/products">Flat Pack Container</Link>
            <Link to="/products">Expandable Container</Link>
            <Link to="/products">Light Steel Villa</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/about">Factory</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://wa.me/8615690180200?text=Hi%2C%20I%27m%20interested%20in%20your%20prefab%20houses." target="_blank" rel="noopener noreferrer">Get a Quote</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="https://wa.me/8615690180200" target="_blank" rel="noopener noreferrer">WhatsApp: +86 15690180200</a>
            <a href="mailto:youmaozhenpin0410@gmail.com">Email: youmaozhenpin0410@gmail.com</a>
            <p>Hengshui, Hebei, China</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Youmao Zhenpin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
