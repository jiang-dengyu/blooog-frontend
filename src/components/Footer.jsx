import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Blooog! All rights reserved.</p>
        <p className="footer-note">Made with 💻 by Jiang</p>
      </div>
    </footer>
  );
}

export default Footer;
