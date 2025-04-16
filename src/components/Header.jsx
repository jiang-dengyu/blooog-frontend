import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" className="logo">Jiang Blooog</Link>
      </div>
      <div className="header-right">
        <button className="lang-switch">🌐</button>
        <Link to="/#experience" className="nav-link">Experiences</Link>
        <Link to="/#project" className="nav-link">Project</Link>
        <Link to="/#about" className="nav-link">About</Link>
        <Link to="/posts" className="nav-link">Note</Link>
      </div>
    </header>
  );
}

export default Header;