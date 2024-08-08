// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form>
            {/* Name input field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded-lg" required />
            </div>
            {/* Email input field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded-lg" required />
            </div>
            {/* Message textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full p-2 border rounded-lg" required></textarea>
            </div>
            {/* Submit button */}
            <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
