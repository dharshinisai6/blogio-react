import React from 'react';
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
