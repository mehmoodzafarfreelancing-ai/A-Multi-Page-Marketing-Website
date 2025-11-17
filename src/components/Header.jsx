import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <h1>My Digital Agency</h1>
      <nav>
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/services" className="nav-button">Services</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </nav>
    </header>
  );
}


export default Header;