// Header component for site navigation and branding
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side navigation

function Header() {
  // TODO: Replace static text/logo with dynamic content from config or backend
  return (
    <header className="site-header">
      <div className="container">
        {/* Brand/logo section */}
        <div className="brand">
          {/* Logo image for brand identity */}
          <img src="/logo.jpg" alt="Roof Developers Logo" className="logo-img" />
          <div className="titles">
            <h1>Roof Developers</h1>
            <p>Creating Roof for All Your Needs</p>
          </div>
        </div>
        {/* Navigation links */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
