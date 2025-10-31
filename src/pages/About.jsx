import React from "react";
import { Handshake, Gem, Leaf } from 'lucide-react';
import { Clock, MapPin, Utensils } from "lucide-react";
const AboutUs = () => {
  return (
    <div className="bg-white text-[#143447]">
      {/* Hero Section */}
      <section
        className="relative h-auto md:h-[60vh] flex flex-col items-center justify-center bg-cover bg-center px-4 py-12 md:py-0"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury,hotel')",
        }}
      >
        <div className="absolute bg-"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#143447] mb-6">About Our Hotel</h1>
          <p className="text-base md:text-lg text-[#143447] leading-relaxed">
            Nestled in the heart of the city, Hotel Grand VadhuVar redefines luxury, comfort, and hospitality. Designed for both
            leisure and business travelers, our hotel is a sanctuary where modern elegance meets timeless charm.
            <br /><br />
            From the moment you step inside, you’re greeted by a world of sophistication. Our thoughtfully designed rooms
            and suites offer the perfect balance of style and serenity, equipped with world-class amenities to ensure your
            stay is as comfortable as it is memorable.
            <br /><br />
            Whether you're savoring gourmet dishes in our fine dining restaurant, relaxing in our rooftop lounge with
            panoramic views, or rejuvenating at our spa and wellness center — every experience is curated with precision
            and care.
            <br /><br />
            Our mission is simple: To create unforgettable moments through exceptional service and heartfelt hospitality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1761833369/hotelbed_feytbk.jpg"
          alt="Hotel Lobby"
          className="rounded-tr-full shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold text-[#143447] mb-4">Our Story</h2>
          <p className="text-[#143447] leading-relaxed">
            Founded in 2005, our hotel is a symbol of luxury and modern comfort. Located at the city’s prime, we offer exceptional views, personalized service, and a memorable experience for both leisure and business travelers.
            <br /><br />
            Over the years, we’ve evolved with our guests' expectations—embracing sustainability, advancing technology, and offering curated guest experiences. Our commitment to detail, culture, and hospitality drives everything we do.
          </p>
          <p className="text-[#143447] leading-relaxed">
            Founded in 2005, our hotel is a symbol of luxury and modern comfort. Located at the city’s prime, we offer exceptional views, personalized service, and a memorable experience for both leisure and business travelers.
            <br /><br />
            Over the years, we’ve evolved with our guests' expectations—embracing sustainability, advancing technology, and offering curated guest experiences. Our commitment to detail, culture, and hospitality drives everything we do.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-[#1a3e52]">
      <h2 className="text-3xl font-bold text-[#f8de71] text-center mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "24/7 Service",
            desc: "Round-the-clock assistance for all your needs.",
            icon: <Clock className="mx-auto mb-4 text-[#f8de71]" size={40} />,
          },
          {
            title: "Prime Location",
            desc: "Easily accessible from the airport and city attractions.",
            icon: <MapPin className="mx-auto mb-4 text-[#f8de71]" size={40} />,
          },
          {
            title: "Security",
            desc: "Our Security To Help For Good Sleep.",
            icon: <Utensils className="mx-auto mb-4 text-[#f8de71]" size={40} />,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-[#214d66] rounded-2xl hover:scale-105 transition transform duration-300"
          >
            {feature.icon}
            <h3 className="text-2xl font-semibold mb-2 text-[#f8de71]">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Our Values */}
      <section className="py-16 px-6 md:px-20 bg-[#1a3e52]">
        <h2 className="text-3xl font-bold text-[#f8de71] text-center mb-10">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Hospitality",
              desc: "We welcome you with warmth and care.",
              icon: <Handshake className="mx-auto mb-4 text-[#f8de71]" size={40} />,
            },
            {
              title: "Luxury",
              desc: "Premium services for premium guests.",
              icon: <Gem className="mx-auto mb-4 text-[#f8de71]" size={40} />,
            },
            {
              title: "Sustainability",
              desc: "Committed to an eco-friendly future.",
              icon: <Leaf className="mx-auto mb-4 text-[#f8de71]" size={40} />,
            },
          ].map((value, index) => (
            <div key={index} className="p-6 bg-[#214d66] rounded-2xl hover:scale-105 transition transform duration-300">
              {value.icon}
              <h3 className="text-2xl font-semibold mb-2 text-[#f8de71]">{value.title}</h3>
              <p className="text-gray-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-[#143447] text-center mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              name: "John Doe",
              role: "General Manager",
              img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            },
            {
              name: "Sarah Lee",
              role: "Head of Hospitality",
              img: "https://us.123rf.com/450wm/johnnymix/johnnymix1601/johnnymix160100022/51080434-portrait-with-white-background.jpg?ver=6",
            },
            {
              name: "Michael Chen",
              role: "Executive Chef",
              img: "https://media.istockphoto.com/id/997462238/photo/stressed-frustrated-young-man-plugging-his-ears-with-fingers-and-keeping-eyes-closed-while.jpg?s=612x612&w=0&k=20&c=YUs3__QY90FlPQRlpvOkg8jRISHMfGDpS258YWl0urw=",
            },
          ].map((member, index) => (
            <div key={index} className="bg-[#1a3e52] rounded-2xl p-6 shadow-md">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full mb-4 border-4 border-[#f8de71] object-cover"
              />
              <h3 className="text-xl font-semibold text-[#f8de71]">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-[#1a3e52]">
        <h2 className="text-3xl font-bold text-[#f8de71] text-center mb-10">What Guests Say</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              quote: "Amazing stay! The staff were genuinely welcoming and helpful throughout, the room was spotless and comfortable, and everything ran smoothly from check-in to checkout. Would happily stay again",
              name: "Pabbati dinesh",
            },
            {
              quote: "Had a great experience, friendly staff neat rooms highly recommend.",
              name: "Mallikârjun ReDdy",
            },
          ].map((review, index) => (
            <div key={index} className="bg-[#214d66] p-6 rounded-2xl">
              <p className="italic text-gray-300 mb-4">“{review.quote}”</p>
              <h4 className="text-[#f8de71] font-semibold">— {review.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
