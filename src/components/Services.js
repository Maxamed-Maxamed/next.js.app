// src/components/Services.js
import React from 'react';

// Array of service objects, each containing a title and description
const services = [
  { title: 'Hairstyling', description: 'Professional hairstyling services.' },
  { title: 'Makeup', description: 'Flawless makeup application for any occasion.' },
  { title: 'Eyelash Extensions', description: 'Beautiful eyelash extensions to enhance your look.' },
];

// Services component definition
const Services = () => {
  return (
    // Services section with styling classes
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        {/* Grid container for service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through services array to create individual service cards */}
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
