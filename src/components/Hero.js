// Import React and motion from framer-motion for animations
import React from "react";
import { motion } from "framer-motion";

// Define the Hero component as a functional component
const Hero = () => {
    return (
        // Use motion.div for animated container
        <motion.div
            // Set initial opacity to 0 (invisible)
            initial={{ opacity: 0 }}
            // Animate to full opacity (visible)
            animate={{ opacity: 1 }}
            // Set animation duration to 0.5 seconds
            transition={{ duration: 0.5 }}
            // Apply CSS class for styling
            className="hero-container"
        >
            {/* Main heading */}
            <h1>Welcome to our Hairstyling Boutique</h1>
            {/* Subheading or description */}
            <p>Discover the latest trends and styles in hairstyling.</p>
            {/* Call-to-action button */}
            <button>Book an Appointment</button>
        </motion.div>
    );
};

// Export the Hero component for use in other parts of the application
export default Hero;
