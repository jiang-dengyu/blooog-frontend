/*src\components\Header.jsx*/
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" className="logo">Blooog!</Link>
      </div>
      <div className="header-right">
        {/* <button className="lang-switch">🌐</button> */}
        <Link to="/posts" className="nav-link">Note</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </div>
    </header>
  );
}

export default Header;