// src/components/Gallery.js
import React from 'react';

// Define the Gallery component
const Gallery = () => {
  return (
    // Create a section with id "gallery" and some padding
    <section id="gallery" className="py-12">
      { /* Container for centering content and adding horizontal padding */} 
      <div className="container mx-auto px-4">
     { /* Gallery title */}
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        {/* Grid layout for gallery items */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for gallery images */}
          {/* Each div represents an image placeholder */}
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          {/* You can add more image placeholders here */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
