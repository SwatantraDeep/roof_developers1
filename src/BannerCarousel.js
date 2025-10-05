// BannerCarousel.js - Modern image carousel for homepage hero section
// Uses local images and overlays hero text/button
import React, { useState, useEffect } from 'react';
import './app.css'; // Ensure styles are loaded

// List of banner images and captions (can be customized)
// Add more images from the gallery folder for the animated banner
const banners = [
  {
    src: '/gallery/g1.png',
    caption: 'Delivering Excellence in Architecture'
  },
  {
    src: '/gallery/g2.png',
    caption: 'Innovative Designs for Modern Living'
  },
  {
    src: '/gallery/g3.png',
    caption: 'From Concept to Completion'
  },
  {
    src: '/gallery/g4.png',
    caption: 'Sustainable Solutions for Every Project'
  },
  {
    src: '/gallery/g5.png',
    caption: 'Transforming Spaces, Enhancing Lives'
  },
  {
    src: '/gallery/g6.png',
    caption: 'Expertise Across Residential, Commercial, and More'
  },
  // Provided images
  {
    src: '/gallery/arch1.jpg',
    caption: 'Digital Planning for Modern Construction'
  },
  {
    src: '/gallery/arch2.jpg',
    caption: 'On-site Collaboration for Project Success'
  },
  {
    src: '/gallery/arch3.jpg',
    caption: 'Precision in Architectural Design'
  }
];

function BannerCarousel() {
  // Track current slide index
  const [current, setCurrent] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % banners.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  // Go to specific slide
  const goTo = idx => setCurrent(idx);

  return (
    <div className="banner-carousel">
      {/* Image background with fade animation */}
      {banners.map((banner, idx) => (
        <img
          key={idx}
          src={banner.src}
          alt={banner.caption}
          className={
            'banner-img' + (idx === current ? ' active' : '')
          }
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      ))}
      {/* Overlay content with fade animation */}
      {banners.map((banner, idx) => (
        idx === current ? (
          <div key={idx} className="banner-overlay active">
            <h1 className="banner-title">End-to-End Construction Solutions</h1>
            <p className="banner-caption">{banner.caption}</p>
            <a className="btn banner-btn" href="#contact">Book a Consultation</a>
          </div>
        ) : null
      ))}
      {/* Navigation dots */}
      <div className="banner-dots">
        {banners.map((_, idx) => (
          <span key={idx} className={idx === current ? 'dot active' : 'dot'} onClick={() => goTo(idx)}></span>
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;
