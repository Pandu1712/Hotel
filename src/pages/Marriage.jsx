import React from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560332218-4d266ab9793a?q=80&w=2067&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1733754205920-b31e1bc5491e?q=80&w=2070&auto=format&fit=crop',
];

const MarriageFunction = () => {
  return (
    <div className="bg-white text-[#143447]">
      
      {/* Hero Section */}
      <section className="bg-[#fef4e8] py-28 text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">Your Dream Wedding Starts Here</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Celebrate your love in elegance at our exquisite venue, where luxury, tradition, and hospitality create memories to last a lifetime.
        </p>
      </section>

      {/* About Venue */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About the Venue</h2>
        <p className="text-lg leading-relaxed mb-8">
          Our centrally-located wedding venue combines modern aesthetics with a touch of tradition. Whether you're planning a grand celebration or a private gathering, we offer customizable options tailored to your needs. With elegant banquet halls, lush floral decor, and exceptional service, we ensure your big day feels effortless and magical.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            'Capacity for 500+ guests',
            'Luxury air-conditioned banquet halls',
            'Bridal & Groom suites',
            'Ample Parking with Valet',
            'Custom Decor Themes',
            'Full Catering & Staff Support'
          ].map((item, i) => (
            <div key={i} className="bg-[#fff9f2] rounded-xl p-6 shadow text-base font-medium">
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">
            <div>
              <h3 className="font-semibold text-xl mb-2">🍽️ Custom Catering</h3>
              <p>From traditional feasts to gourmet buffets, our chefs deliver unforgettable culinary experiences tailored to your taste.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🌸 Elegant Decor</h3>
              <p>Choose from classic, floral, royal, rustic, or themed decor packages — all professionally crafted for your unique style.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">📸 Photography & Videography</h3>
              <p>Capture every moment with professional candid, cinematic, and drone coverage options by our partnered studios.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🤝 Complete Guest Care</h3>
              <p>Dedicated concierge, VIP welcome, room coordination, and 24/7 support to make sure your guests feel at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-[#fef4e8] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">How to Book</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Step 1: Consultation',
                desc: 'Schedule a free consultation with our wedding planner to explore dates, services, and packages.'
              },
              {
                title: 'Step 2: Customization',
                desc: 'We personalize your wedding decor, menu, seating and schedule based on your needs.'
              },
              {
                title: 'Step 3: Confirmation',
                desc: 'Once finalized, you’ll receive a detailed itinerary and on-site coordinator until event closure.'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Venue Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-56 object-cover hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#fff3e7] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Couples Say</h2>
          <div className="space-y-8">
            <blockquote className="italic text-gray-700">"Our wedding was like a fairytale. The staff, decor, and food exceeded all expectations!" <br /> <span className="font-bold text-[#143447]">— Aishwarya & Karthik</span></blockquote>
            <blockquote className="italic text-gray-700">"From start to finish, it was flawless. We didn’t have to worry about a thing." <br /> <span className="font-bold text-[#143447]">— Neha & Rohan</span></blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#143447] text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Let’s Begin Your Forever</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Contact us today and let our team help you design the perfect wedding celebration from start to finish.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#f8de71] text-[#143447] font-bold px-10 py-4 rounded-full shadow-md hover:bg-yellow-300 transition-all">
          Contact Us & Book Now
        </Link>
      </section>
    </div>
  );
};

export default MarriageFunction;
