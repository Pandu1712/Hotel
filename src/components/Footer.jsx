import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTripadvisor,
} from "react-icons/fa";

const logo =
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762147889/GvLogo_v13bxr.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#102A3C] text-white pt-12 pb-6 px-6 md:px-16">
      {/* 🌐 Main Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-7xl mx-auto">
        
        {/* 🏨 Logo & Description */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <img
              src={logo}
              alt="Hotel Grand VadhuVar Logo"
              className="w-16 h-16 rounded-full border-2 border-[#f8de71] object-cover shadow-md"
            />
            <h2 className="text-2xl font-bold text-[#f8de71] leading-tight">
              Hotel Grand<br />VadhuVar
            </h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed pr-4">
            Discover unmatched comfort and elegance in the heart of Jaggayyapeta.
            Enjoy premium hospitality, luxurious rooms, and exceptional dining.
          </p>

          <div className="flex gap-4 mt-5 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-[#f8de71] transition" />
           <a
  href="https://www.instagram.com/hotelgrandvadhuvar?igsh=Y2ZhbGF1YzFtNDA3&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="cursor-pointer hover:text-[#f8de71] transition" />
</a>

            <FaTwitter className="cursor-pointer hover:text-[#f8de71] transition" />
            <FaTripadvisor className="cursor-pointer hover:text-[#f8de71] transition" />
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#f8de71]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="/home" className="hover:text-[#f8de71] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#f8de71] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/accommodation" className="hover:text-[#f8de71] transition">
                Accommodation
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#f8de71] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ☎️ Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#f8de71]">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#f8de71]" />
              <span>+91 9492047799</span>
              <span>+91 9492057799</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#f8de71]" />
              <span>hotelgrandvadhuvar@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#f8de71] text-xl mt-1" />
              <p className="leading-relaxed">
                S.No - 300/3, 3rd Floor, Tumuluri’s Plaza,<br />
                Sathya Electronics Building, Jaggayyapeta,<br />
                NTR District, Andhra Pradesh -{" "}
                <span className="text-[#f8de71] font-semibold">521175</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* ⚙️ Divider & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hotel Grand VadhuVar — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
