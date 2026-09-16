import parqueLogo from "../assets/parque_logo.jpg";
import './navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
        
        <div className="logo">
            <a className="parque-logo" href="/" aria-label="Parque Cafe home">
                <img src={parqueLogo} alt="Parque Logo" />
            </a>
            <span className="nav-brand-text">PARQUE CAFE</span>
        </div>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/our-story">Our Story</a></li>
            <div className="contact-bg">
                <li><a href="/contact">Contact</a></li>
            </div>
            </ul>
        </nav>
    )
}

export default Navbar;