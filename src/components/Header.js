// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    // Animated header component using framer-motion
    <motion.header
      className="bg-gray-800 text-white py-4"
      // Animation properties
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Container for header content */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Website title */}
        <h1 className="text-xl font-bold">Hairstyling Boutique</h1>
        
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            {/* Navigation links */}
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
