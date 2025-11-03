import React from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaTripadvisor 
} from 'react-icons/fa';
const logo = "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762147889/GvLogo_v13bxr.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#143447] text-white py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        
        {/* 🏨 Hotel Info with Logo */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={logo}
              alt="Hotel Grand VadhuVar Logo"
              className="w-20 h-20 rounded-full border-2 border-[#f8de71] object-cover"
            />
            <h2 className="text-2xl font-bold text-[#f8de71]">
              Hotel Grand VadhuVar
            </h2>
          </div>

          <p className="text-sm mb-4">
            Experience luxury and comfort at Hotel Grand VadhuVar. 
            Located in the heart of the city, we offer world-class service 
            with a personal touch.
          </p>

          <div className="flex gap-3 mt-2 text-[#f8de71]">
            <FaFacebook className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaTripadvisor className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f8de71]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:text-[#f8de71] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#f8de71] transition">About Us</a></li>
            <li><a href="/accommodation" className="hover:text-[#f8de71] transition">Accommodation</a></li>
            <li><a href="/contact" className="hover:text-[#f8de71] transition">Contact</a></li>
          </ul>
        </div>

        {/* ☎️ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f8de71]">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#f8de71]" /> +91 9492047799
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#f8de71]" /> hotelgrandvadhuvar@gmail.com
            </li>
            <li className="flex items-start gap-3 text-gray-200 leading-relaxed">
              <FaMapMarkerAlt className="text-[#f8de71] text-xl mt-1" />
              <div>
                <span className="font-semibold text-white">Address:</span>
                <p className="text-white mt-1">
                  S.No - 300/3, 3rd Floor, Tumuluri’s Plaza,<br />
                  Sathya Electronics Building, Jaggayyapeta,<br />
                  NTR District, Andhra Pradesh - <span className="text-[#f8de71] font-medium">521175</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* 📅 Optional Booking CTA */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f8de71]">Book Now</h3>
          <p className="text-sm mb-3">Ready to book your stay? Click below.</p>
          <a
            href="/"
            className="bg-[#f8de71] text-[#143447] px-5 py-2 rounded-tl-2xl rounded-br-2xl font-bold hover:bg-yellow-300 transition"
          >
            Book a Room
          </a>
        </div> */}
      </div>

      {/* ⚙️ Bottom Note */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-sm text-center">
        &copy; {new Date().getFullYear()} Hotel Grand VadhuVar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
