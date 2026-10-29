import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';
import Materials from './pages/Materials';
import MaterialDetail from './pages/MaterialDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import FloorPlans from './pages/FloorPlans';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/materials/:id" element={<MaterialDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:id" element={<IndustryDetail />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/8615690180200?text=Hi%2C%20I%27m%20interested%20in%20your%20prefab%20houses."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta"
      >
        <span className="floating-icon">💬</span>
        WhatsApp Us
      </a>
    </div>
  );
}
