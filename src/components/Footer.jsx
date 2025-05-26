import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#143447] text-white py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Hotel Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#f8de71]">Panda Living</h2>
          <p className="text-sm mb-4">
            Experience luxury and comfort at Panda Living Hotel. Located in the heart of the city, we offer world-class service with a personal touch.
          </p>
          <div className="flex gap-3 mt-2 text-[#f8de71]">
            <FaFacebook className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaTripadvisor className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f8de71]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:text-[#f8de71] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#f8de71] transition">About Us</a></li>
            <li><a href="/accommodation" className="hover:text-[#f8de71] transition">Accommodation</a></li>
            <li><a href="/events" className="hover:text-[#f8de71] transition">Events</a></li>
            <li><a href="/dinning" className="hover:text-[#f8de71] transition">Dining</a></li>
             <li><a href="/contact" className="hover:text-[#f8de71] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f8de71]">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#f8de71]" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#f8de71]" /> info@pandaliving.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#f8de71]" /> 123 Paradise Lane, Goa, India
            </li>
          </ul>
        </div>

        {/* Booking CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f8de71]">Book Now</h3>
          <p className="text-sm mb-3">Ready to book your stay? Click the button below.</p>
          <a href="/booking" className="bg-[#f8de71] text-[#143447] px-5 py-2 rounded-tl-2xl rounded-br-2xl font-bold hover:bg-yellow-300 transition">
            Book a Room
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-sm text-center">
        &copy; {new Date().getFullYear()} Panda Living Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
