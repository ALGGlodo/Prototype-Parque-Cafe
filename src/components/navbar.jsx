import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import parqueLogo from "../assets/parque_logo.jpg";
import './navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a className="parque-logo" href="/" aria-label="Parque Cafe home">
          <img src={parqueLogo} alt="Parque Logo" />
        </a>
        <span className="nav-brand-text">PARQUE CAFE</span>
      </div>

      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/menu" onClick={() => setIsOpen(false)}>Menu</a></li>
        <li><a href="/our-story" onClick={() => setIsOpen(false)}>Our Story</a></li>
        <div className="contact-bg">
          <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;