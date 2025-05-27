import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Building2,
  Heart,
  ParkingCircle,
  Palette,
  Utensils,
} from 'lucide-react';

const galleryImages = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560332218-4d266ab9793a?q=80&w=2067&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1733754205920-b31e1bc5491e?q=80&w=2070&auto=format&fit=crop',
];

const MarriageFunction = () => {
  return (
    <div className="bg-[#fffaf0] text-[#2c3e50] font-sans">
      
      {/* Hero Section */}
      <section className="bg-white py-28 text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 tracking-wide">
          Begin Your Forever With Us
        </h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[#3e4c59]">
          Celebrate your union in timeless elegance. Our venue offers a perfect blend of tradition, luxury, and personalized care to make your day unforgettable.
        </p>
      </section>

      {/* About the Venue */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 border-b-2 border-[#a08b72] pb-2 inline-block">
          About Our Venue
        </h2>
        <p className="text-lg leading-relaxed mb-10 max-w-4xl">
          Located at the heart of the city, our wedding venue boasts spacious, air-conditioned halls with exquisite décor and scenic outdoor gardens. Whether hosting a grand reception or intimate ceremony, we tailor every detail to your vision.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <li className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <Users className="text-[#a08b72] w-7 h-7 mt-1" />
            <span>Capacity for 500+ guests</span>
          </li>
          <li className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <Building2 className="text-[#a08b72] w-7 h-7 mt-1" />
            <span>Luxury air-conditioned banquet halls</span>
          </li>
          <li className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <Heart className="text-[#a08b72] w-7 h-7 mt-1" />
            <span>Bridal & Groom suites</span>
          </li>
          <li className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <ParkingCircle className="text-[#a08b72] w-7 h-7 mt-1" />
            <span>Ample Parking with Valet</span>
          </li>
          <li className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <Palette className="text-[#a08b72] w-7 h-7 mt-1" />
            <span>Custom Decor Themes</span>
          </li>
          <li className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <Utensils className="text-[#a08b72] w-7 h-7 mt-1" />
            <span>Full Catering & Staff Support</span>
          </li>
        </ul>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-20 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div>
              <h3 className="text-2xl font-semibold mb-3 border-b border-[#a08b72] pb-1 inline-block">
                Customized Catering
              </h3>
              <p>
                From traditional delicacies to international gourmet menus, our chefs craft menus tailored to your tastes and preferences.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 border-b border-[#a08b72] pb-1 inline-block">
                Elegant Décor & Themes
              </h3>
              <p>
                Choose from classic floral, royal elegance, rustic charm, or bespoke themes designed by our expert decorators.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 border-b border-[#a08b72] pb-1 inline-block">
                Photography & Videography
              </h3>
              <p>
                Capture every moment beautifully with our partnered professional photographers and videographers offering candid and cinematic coverage.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 border-b border-[#a08b72] pb-1 inline-block">
                Complete Guest Care
              </h3>
              <p>
                VIP guest management, room coordination, and on-site concierge services to ensure your loved ones feel welcomed and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">How to Book Your Date</h2>
          <div className="grid sm:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">
            {[
              {
                title: 'Step 1: Consultation',
                desc: 'Meet with our wedding planner to discuss your vision, dates, and special requirements.',
              },
              {
                title: 'Step 2: Personalization',
                desc: 'We craft your unique wedding experience, including décor, menu, and schedule customization.',
              },
              {
                title: 'Step 3: Confirmation & Support',
                desc: 'Receive your detailed itinerary and dedicated on-site coordinator for the big day.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center">Venue Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`Wedding Gallery ${idx + 1}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#fffaf0] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">What Our Couples Say</h2>
          <div className="space-y-12 text-gray-800 italic font-serif text-lg max-w-3xl mx-auto">
            <blockquote>
              “Our wedding day was magical thanks to the attentive staff and breathtaking venue. Every detail was perfect!”
              <br />
              <span className="font-bold text-[#a08b72]">— Aishwarya & Karthik</span>
            </blockquote>
            <blockquote>
              “The seamless coordination and warm hospitality made us feel truly special. Highly recommend for any couple!”
              <br />
              <span className="font-bold text-[#a08b72]">— Neha & Rohan</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#143447] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
        <p className="mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
          Contact our expert team today to book a consultation and start designing a celebration you'll cherish forever.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#f8de71] text-[#143447] font-semibold px-10 py-4 rounded-full shadow-md hover:bg-[#dfd097] transition-colors"
        >
          Book Your Consultation
        </Link>
      </section>
    </div>
  );
};

export default MarriageFunction;
