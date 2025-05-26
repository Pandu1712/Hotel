// RoomTypes.jsx
import React from "react";
import { Star, MapPin, Monitor, Wifi, Snowflake, BedDouble, BedSingle, Refrigerator } from "lucide-react";

const roomTypes = [
  {
    name: "Standard Single Room",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["1 Single Bed", "Free Wi-Fi", "TV", "Air Conditioning"],
    price: 1500,
    tag: "Best Seller",
    location: "Hyderabad",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1698945298325-8902550a45dd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Double Room",
    description: "Perfect for couples with all essential amenities.",
    features: ["1 Double Bed", "Free Wi-Fi", "Mini Fridge", "AC", "TV"],
    price: 2500,
    tag: null,
    location: "Vizag",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Twin Room",
    description: "Spacious twin beds for comfortable sharing.",
    features: ["2 Single Beds", "TV", "Wi-Fi", "AC"],
    price: 2400,
    tag: "New",
    location: "Vijayawada",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Triple Room",
    description: "Roomy option for a group of three, with extra comfort.",
    features: ["3 Beds", "Wi-Fi", "TV", "AC", "Mini Fridge"],
    price: 3000,
    tag: "Best Seller",
    location: "Tirupati",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Triple Room",
    description: "Roomy option for a group of three, with extra comfort.",
    features: ["4 Beds", "Wi-Fi", "TV", "AC", "Mini Fridge"],
    price: 3000,
    tag: "Best Seller",
    location: "Tirupati",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Double Room",
    description: "Perfect for couples with all essential amenities.",
    features: ["5 Double Bed", "Free Wi-Fi", "Mini Fridge", "AC", "TV"],
    price: 2500,
    tag: null,
    location: "Vizag",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Triple Room",
    description: "Roomy option for a group of three, with extra comfort.",
    features: ["6 Beds", "Wi-Fi", "TV", "AC", "Mini Fridge"],
    price: 3000,
    tag: "Best Seller",
    location: "Tirupati",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Triple Room",
    description: "Roomy option for a group of three, with extra comfort.",
    features: ["7 Beds", "Wi-Fi", "TV", "AC", "Mini Fridge"],
    price: 3000,
    tag: "Best Seller",
    location: "Tirupati",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Triple Room",
    description: "Roomy option for a group of three, with extra comfort.",
    features: ["8 Beds", "Wi-Fi", "TV", "AC", "Mini Fridge"],
    price: 3000,
    tag: "Best Seller",
    location: "Tirupati",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Standard Triple Room",
    description: "Roomy option for a group of three, with extra comfort.",
    features: ["9 Beds", "Wi-Fi", "TV", "AC", "Mini Fridge"],
    price: 3000,
    tag: "Best Seller",
    location: "Tirupati",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const featureIcons = {
  "TV": <Monitor className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "Free Wi-Fi": <Wifi className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "Wi-Fi": <Wifi className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "Air Conditioning": <Snowflake className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "AC": <Snowflake className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "1 Single Bed": <BedSingle className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "2 Single Beds": <BedSingle className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "1 Double Bed": <BedDouble className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "3 Beds": <BedDouble className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "Mini Fridge": <Refrigerator className="w-4 h-4 inline-block text-gray-600 mr-1" />
};

const RoomTypes = () => {
  return (
    <div className="w-full px-4">
      <h2 className="text-4xl font-semibold text-[#143447] mb-10 text-center">Our Rooms</h2>

      {/* Wrapped layout instead of scroll */}
      <div className="flex flex-wrap gap-6 justify-center">
        {roomTypes.map((room, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] md:w-[320px] bg-white shadow-md rounded-2xl overflow-hidden relative"
          >
            {/* Tag */}
            {room.tag && (
              <span className="absolute top-2 left-2 bg-white text-sm font-semibold text-gray-700 px-3 py-1 rounded-full shadow">
                {room.tag}
              </span>
            )}

            {/* Image */}
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-[#143447]">{room.name}</h3>

              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {room.location}
              </div>

              <div className="flex items-center text-gray-600 text-sm">
                <Star className="w-4 h-4 text-orange-500 mr-1" />
                {room.rating}
              </div>

              <ul className="grid grid-cols-2 gap-1 text-xs text-gray-600 mt-2">
                {room.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {featureIcons[feature] || <span className="mr-1 text-green-500">✓</span>}
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-[#0f2c3a]">₹ {room.price}</span>
                <button className="bg-[#143447] text-white text-sm px-4 py-1 rounded hover:bg-[#0f2c3a]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomTypes;
