import React from "react";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hero-container"
    >
        {/* Add your hero content here */} 
        <div className="container mx-auto px-4 text-center">

      <h1>Welcome to our Hairstyling Boutique</h1>
      <p>Discover the latest trends and styles in hairstyling.</p>
      <button type="button" className="text-white   bg-blue-800  hover:decoration-blue-600 focus:ring-inherit  px-2.5 me2.5 mb-2 dark:bg-blue-300 dark:hover:border-e-orange-950 focus:outline-none dark:ring-blue-200"             >Book an Appointment</button>
    </div>
    </motion.div>
  );
};

export default Hero;