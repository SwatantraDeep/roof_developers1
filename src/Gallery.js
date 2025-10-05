// Gallery page component for displaying project images
// TODO: Connect to backend or config for dynamic images
import React from 'react';

function Gallery() {
  // Placeholder images for gallery
  const images = [
    '/gallery/g1.png',
    '/gallery/g2.png',
    '/gallery/g3.png',
    '/gallery/g4.png',
    '/gallery/g5.png',
    '/gallery/g6.png',
  ];

  return (
    <section className="gallery">
      <h2>Project Gallery</h2>
      <div className="gallery-grid">
        {/* Map through images and display each */}
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Project ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
