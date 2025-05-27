import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Projector,
  Coffee,
  Users,
  Headphones,
  Hotel
} from 'lucide-react'
const ConferenceEvents = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className="bg-white text-[#143447] leading-relaxed">
      {/* Hero */}
      <section className="bg-[#eef4f8] py-24 px-6 text-center">
        <h1 className="text-5xl font-serif font-bold mb-6">Professional Spaces for Your Business Events</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Whether it’s a high-level board meeting, tech seminar, or corporate retreat, our state-of-the-art conference facilities are tailored to deliver productivity and prestige.
        </p>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Our Conference Venue</h2>
        <p className="mb-6">
          Our venue provides the perfect setting for all types of professional events—from executive meetings to product launches and networking functions. Featuring modern AV equipment, multiple seating arrangements, and dedicated support, you’ll have everything you need to impress your attendees.
        </p>
       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
  <li className="bg-white p-5 rounded-xl shadow flex items-start gap-3">
    <Briefcase className="text-[#143447] w-6 h-6 mt-1" />
    <span>Smart Board Rooms & Meeting Suites</span>
  </li>
  <li className="bg-white p-5 rounded-xl shadow flex items-start gap-3">
    <Projector className="text-[#143447] w-6 h-6 mt-1" />
    <span>Projectors, Mics, & High-Speed Wi-Fi</span>
  </li>
  <li className="bg-white p-5 rounded-xl shadow flex items-start gap-3">
    <Coffee className="text-[#143447] w-6 h-6 mt-1" />
    <span>Coffee Break Stations & Catering</span>
  </li>
  <li className="bg-white p-5 rounded-xl shadow flex items-start gap-3">
    <Users className="text-[#143447] w-6 h-6 mt-1" />
    <span>Custom Seating for up to 300 Guests</span>
  </li>
  <li className="bg-white p-5 rounded-xl shadow flex items-start gap-3">
    <Headphones className="text-[#143447] w-6 h-6 mt-1" />
    <span>24/7 Tech Support On-Site</span>
  </li>
  <li className="bg-white p-5 rounded-xl shadow flex items-start gap-3">
    <Hotel className="text-[#143447] w-6 h-6 mt-1" />
    <span>Nearby Accommodations for Delegates</span>
  </li>
</ul>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">What’s Included</h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-700">
            <div>
              <h3 className="font-semibold text-xl mb-2">Tech Infrastructure</h3>
              <p>Seamless presentations with high-definition projectors, digital whiteboards, and noise-canceling audio systems.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Hospitality & Dining</h3>
              <p>Conference-style breakfasts, working lunches, and post-meeting cocktail services can be arranged to suit your agenda.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Event Coordination</h3>
              <p>From logistics to on-the-day support, our event managers ensure every detail is executed with precision.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Breakout & Networking Areas</h3>
              <p>Dedicated spaces for informal chats, coffee breaks, or parallel brainstorming sessions to enhance collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Venue Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
                <img src={img} alt={`Conference Image ${idx + 1}`} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h4 className="font-semibold">Can we live-stream the event?</h4>
            <p>Yes, we offer full support for live-streaming, including camera setups and platform integration.</p>
          </div>
          <div>
            <h4 className="font-semibold">Do you provide on-site tech assistance?</h4>
            <p>Yes, our trained tech team is available throughout the event to help with any equipment or connection issues.</p>
          </div>
          <div>
            <h4 className="font-semibold">Is the venue available for multiple-day bookings?</h4>
            <p>Absolutely. We offer competitive packages for multi-day events including discounts on accommodations.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#143447] text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Host Your Conference With Confidence</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">Let us help you deliver a seamless and impactful business event. Reach out for availability and package details.</p>
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

export default ConferenceEvents;
