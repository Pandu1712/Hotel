import React from "react";
import { Handshake, Gem, Leaf, Clock, MapPin, ShieldCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white text-[#143447] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-gradient-to-r from-[#fdfcfb] via-[#f8de71]/10 to-[#fdfcfb]">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1762333819/WhatsApp_Image_2025-11-04_at_17.06.50_f1618e12_b65hsv.jpg"
            alt="Hotel Grand Vadhuvar"
            className="rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px] hover:scale-[1.03] transition-transform duration-700"
            loading="lazy"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-[#143447] mb-4 leading-snug">
            Hotel <span className="text-[#f8de71]">Grand VadhuVar</span>
          </h2>
          <p className="text-gray-600 italic mb-5 text-lg">
            Experience comfort amidst luxury
          </p>
          <div className="h-[3px] w-24 bg-[#f8de71] mx-auto md:mx-0 mb-6 rounded-full"></div>

          <p className="text-gray-700 mb-5 leading-relaxed text-lg">
            Nestled in the heart of{" "}
            <span className="font-semibold text-[#143447]">Jaggayyapeta</span>,{" "}
            <strong>Hotel Grand VadhuVar</strong> redefines hospitality with a
            perfect blend of elegance, comfort, and world-class service. Each
            room is thoughtfully designed with modern amenities, ensuring a
            relaxing and memorable stay.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you’re here for a family celebration, a business trip, or a
            peaceful getaway, <strong>Hotel Grand VadhuVar</strong> provides a
            warm ambiance and personalized care to make you feel at home.
          </p>

          <div className="mt-8 bg-[#143447]/5 p-5 rounded-xl border-l-4 border-[#f8de71]">
            <p className="text-gray-700">
              <span className="font-semibold text-[#143447]">📍 Address:</span>{" "}
              S.No - 300/3, 3rd Floor, Tumuluri’s Plaza, Sathya Electronics Building,
              Jaggayyapeta, NTR District, Andhra Pradesh –{" "}
              <strong>521175</strong>
            </p>
            <p>
              <span className="font-semibold text-[#143447]">📞 Phone:</span>{" "}
              +91 94920 47799
            </p>
            <p>
              <span className="font-semibold text-[#143447]">✉️ Email:</span>{" "}
              hotelgrandvadhuvar@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-[#143447] mb-10 relative inline-block">
            Our <span className="text-[#f8de71]">Story</span>
            <span className="absolute -bottom-2 left-1/2 md:left-0 w-20 h-1 bg-[#f8de71] rounded-full transform -translate-x-1/2 md:translate-x-0"></span>
          </h2>

          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border-t-4 border-[#f8de71] hover:scale-[1.02] transition-transform duration-700">
            <p className="text-gray-700 text-xl mb-4">
              <span className="font-semibold text-[#143447]">
                Welcome to Hotel Grand Vadhuvar
              </span>
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Founded in{" "}
              <span className="font-semibold text-[#f8de71]">2025</span>,
              Hotel Grand Vadhuvar was built with one dream — to create a place
              where every guest feels at home, no matter how far they’ve
              traveled.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Nestled in the heart of the city, the hotel combines modern
              comfort with traditional elegance. Every detail is crafted with
              care to ensure your stay is relaxing and memorable.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Whether you’re here for a{" "}
              <span className="font-medium text-[#143447]">family vacation</span>, a{" "}
              <span className="font-medium text-[#143447]">romantic getaway</span>,
              or a{" "}
              <span className="font-medium text-[#143447]">business trip</span>,
              Grand Vadhuvar offers the perfect blend of luxury, warmth, and
              hospitality.
            </p>
            <p className="text-gray-700 italic text-lg">
              Our team believes that true comfort comes not just from fine
              rooms, but from genuine smiles and heartfelt service. At Hotel
              Grand Vadhuvar, every stay becomes a story worth remembering.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-20 bg-[#1a3e52] text-center text-white">
        <h2 className="text-4xl font-extrabold text-[#f8de71] mb-12 tracking-wide">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "24/7 Service",
              desc: "Round-the-clock assistance for all your needs.",
              icon: <Clock className="mx-auto mb-4 text-[#f8de71]" size={48} />,
            },
            {
              title: "Prime Location",
              desc: "Easily accessible from the Bus station and the National Highway.",
              icon: <MapPin className="mx-auto mb-4 text-[#f8de71]" size={48} />,
            },
            {
              title: "Security",
              desc: "Our security ensures you have a peaceful stay.",
              icon: (
                <ShieldCheck className="mx-auto mb-4 text-[#f8de71]" size={48} />
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-[#214d66] rounded-3xl hover:scale-105 transition-transform duration-500 shadow-xl"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-3 text-[#f8de71]">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 md:px-20 bg-[#1a3e52] text-center">
        <h2 className="text-4xl font-extrabold text-[#f8de71] mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Hospitality",
              desc: "We welcome you with warmth and care.",
              icon: <Handshake className="mx-auto mb-4 text-[#f8de71]" size={48} />,
            },
            {
              title: "Luxury",
              desc: "Premium services for premium guests.",
              icon: <Gem className="mx-auto mb-4 text-[#f8de71]" size={48} />,
            },
            {
              title: "Sustainability",
              desc: "Committed to an eco-friendly future.",
              icon: <Leaf className="mx-auto mb-4 text-[#f8de71]" size={48} />,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-8 bg-[#214d66] rounded-3xl hover:scale-105 transition-transform duration-500 shadow-xl"
            >
              {value.icon}
              <h3 className="text-2xl font-semibold mb-3 text-[#f8de71]">
                {value.title}
              </h3>
              <p className="text-gray-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-5xl font-extrabold text-[#143447] mb-14">
          Meet Our <span className="text-[#f8de71]">Team</span>
        </h2>
        <div className="flex justify-center">
          {[
            {
              name: "Nikhil Tumuluri",
              role: "Chairman",
              img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-2xl p-10 w-full sm:w-96 hover:-translate-y-3 transition-all duration-700 hover:shadow-3xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full border-4 border-[#f8de71] object-cover shadow-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-[#143447]">
                {member.name}
              </h3>
              <p className="text-gray-600 text-lg mt-2">{member.role}</p>
              <div className="mt-5 flex justify-center gap-6 text-xl">
                <a
                  href="#"
                  className="hover:text-[#f8de71] transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/hotelgrandvadhuvar?igsh=Y2ZhbGF1YzFtNDA3&utm_source=qr"
                  className="hover:text-[#f8de71] transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-[#f8de71] transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-20 bg-[#1a3e52] text-center">
        <h2 className="text-4xl font-extrabold text-[#f8de71] mb-12">
          What Guests Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              quote:
                "Amazing stay! The staff were genuinely welcoming and helpful throughout, the room was spotless and comfortable, and everything ran smoothly from check-in to checkout. Would happily stay again!",
              name: "Pabbati Dinesh",
            },
            {
              quote:
                "Had a great experience — friendly staff, neat rooms, highly recommend!",
              name: "Mallikârjun ReDdy",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-[#214d66] p-8 rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
            >
              <p className="italic text-gray-300 mb-4 text-lg leading-relaxed">
                “{review.quote}”
              </p>
              <h4 className="text-[#f8de71] font-semibold text-xl">
                — {review.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
