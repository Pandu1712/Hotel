import React from 'react';
import { Link } from 'react-router-dom';

const PartyVenue = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1680807869624-07b389d623e8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1683121126477-17ef068309bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1722813815478-7568acefbca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className="bg-white text-[#143447] leading-relaxed">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fef4e8] to-[#fff0d3] py-24 px-6 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Make Every Celebration Unforgettable</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Whether it's a birthday, anniversary, baby shower, or any private party—our venue delivers a fun, vibrant, and elegant space for your celebration.
        </p>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our Party Venue?</h2>
        <p className="mb-6">
          Located in a prime area, our party hall is the perfect place to host lively and stylish gatherings. With beautiful lighting, music-ready acoustics, and themed décor options, your guests will have an unforgettable experience. We handle all the planning and coordination—so you can relax and enjoy the event.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <li className="bg-white p-5 rounded-xl shadow">🎉 Customizable party themes & decor</li>
          <li className="bg-white p-5 rounded-xl shadow">🎤 Stage, sound & dance floor setup</li>
          <li className="bg-white p-5 rounded-xl shadow">🍽️ Buffet or live food counters</li>
          <li className="bg-white p-5 rounded-xl shadow">🎈 Balloons, flowers, LED backdrops</li>
          <li className="bg-white p-5 rounded-xl shadow">🎥 Photography & entertainment add-ons</li>
          <li className="bg-white p-5 rounded-xl shadow">🚗 Hassle-free parking for all guests</li>
        </ul>
      </section>

      {/* Services */}
      <section className="bg-[#fffaf3] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Party Packages Include</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-xl mb-2">Theme Decor Setup</h3>
              <p>From jungle themes for kids to classy evening parties for adults, we bring your vision to life with matching props, stage setup, and table decorations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Custom Food Menus</h3>
              <p>Pick from Indian, Continental, Chinese, or fusion dishes. Whether it’s snacks or a full meal, our catering team ensures delicious flavors and presentation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Live Entertainment</h3>
              <p>Magicians, DJs, live music, dance performers – we can arrange entertainment tailored to your audience, age group, and budget.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Photo Booth & Memories</h3>
              <p>Our selfie zones and custom photo booths add a playful touch and create lasting memories for your guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-[#fef4e8]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Party Vibes Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`Party ${idx + 1}`}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">What type of events can be hosted here?</h4>
            <p>Birthdays, anniversaries, baby showers, corporate parties, bachelor/bachelorette nights and more!</p>
          </div>
          <div>
            <h4 className="font-semibold">Can we bring outside decorators or caterers?</h4>
            <p>Yes, we are flexible. You can bring your own vendors or choose from our in-house services.</p>
          </div>
          <div>
            <h4 className="font-semibold">Is the venue child-friendly?</h4>
            <p>Absolutely! We offer kids’ play zones, entertainers, and activities for younger guests.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#143447] text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Let’s Get the Party Started!</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Contact us today to customize your party plan, check availability, and book a tour of the venue.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#f8de71] text-[#143447] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all"
        >
          Contact Us & Book Now
        </Link>
      </section>
    </div>
  );
};

export default PartyVenue;
