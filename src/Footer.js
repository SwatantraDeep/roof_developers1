// Footer component for site-wide footer content
import React from 'react';

function Footer() {
  // TODO: Replace static text with dynamic content from config or backend
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Roof Developers — Creating Roof for All Your Needs</p>
      </div>
    </footer>
  );
}

export default Footer;
