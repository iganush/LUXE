import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LUXE</h2>
          <p className="text-sm text-gray-400">Luxury redefined. Discover the finest fashion & lifestyle picks with us.</p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
            <li>Watches</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">Email: support@luxe.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-facebook-f hover:text-gray-400 cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-gray-400 cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-gray-400 cursor-pointer"></i>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} LUXE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
