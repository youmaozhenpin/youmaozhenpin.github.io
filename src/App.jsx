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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating CTA */}
      <Link to="/contact" className="floating-cta">
        <span className="floating-icon">✉</span>
        Request a Quote
      </Link>
    </div>
  );
}
