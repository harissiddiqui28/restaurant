import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-500 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-white text-xl mb-4">OPTP</h2>
            <p className="text-white mb-4">Phone: +92111116787</p>
            <p className="text-white mb-4">Address: OPTP Korangi, 8 Shah Muhammad Rd, Allah Wala Town, Korangi, Karachi</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-yellow-500"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-yellow-500"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-yellow-500"><FaLinkedinIn /></a>
              <a href="#" className="text-white hover:text-yellow-500"><FaYoutube /></a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-white text-xl mb-4">Download Our App</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500">Download Android App</a>
              <a href="#" className="text-white hover:text-yellow-500">Download iOS App</a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-white text-xl mb-4">Our Timings</h3>
            <p className="text-white">Monday - Sunday</p>
            <p className="text-white">11:45 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <a href="#" className="text-white mr-4 hover:text-yellow-500">FAQs</a>
            <a href="#" className="text-white mr-4 hover:text-yellow-500">Privacy Policy</a>
            <a href="#" className="text-white hover:text-yellow-500">Contact Us</a>
          </div>
          <div>
            <a href="#" className="text-white mr-4 hover:text-yellow-500">Become a Franchisee</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
