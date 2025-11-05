import React from "react";

const features = [
  {
    title: "Accommodation",
    desc: "Relax in our luxurious rooms designed with modern comforts and elegant interiors.",
    image:
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761898926/Acommo_lqowee.jpg",
    icon: "🏨",
  },
  {
    title: "Events",
    desc: "Host weddings, meetings, or celebrations in our stylish and spacious venues.",
    image:
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761898932/Event_om3c7p.jpg",
    icon: "🎉",
  },
  {
    title: "Parking",
    desc: "Enjoy safe, secure, and convenient parking available 24/7 for all our guests.",
    image:
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761898919/Parking_hmmmwm.jpg",
    icon: "🅿️",
  },
];

const FeatureGrid = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#143447] mb-12 tracking-wide">
        Our Facilities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map(({ title, desc, image, icon }, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl"
          >
            <div className="relative h-60 overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-4 left-4 text-4xl drop-shadow-lg select-none">
                {icon}
              </span>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#143447] mb-3">
                {title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
