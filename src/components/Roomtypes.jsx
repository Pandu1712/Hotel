// RoomTypes.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Bed,Star, MapPin, Monitor, Snowflake, BedDouble, BedSingle, Refrigerator,PhoneCall } from "lucide-react";


const roomTypes = [
  {
    name: "Premium Room",
    RoomNumber: "301",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2900,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
    image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg",loading: "lazy",
  },
  {
    name: "Premium Room",
    RoomNumber: "302",
    description: "A comfortable and stylish room designed for two guests.",
    features:  ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2900,
    tag: "Popular",
    location: "Jaggayyapeta",
    rating: 4.3,
    image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg",loading: "lazy",
  },
  {
    name: "Premium Room",
    RoomNumber: "303",
    description: "A cozy and well-furnished room designed for a comfortable stay.",
    features:  ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2900,
    tag: "Budget Friendly",
    location: "Jaggayyapeta",
    rating: 4.0,
    image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg",loading: "lazy",
  },
  {
    name: "Premium Room",
    RoomNumber: "314",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2900,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg",loading: "lazy",
  },
  {
    name: "Premium Room",
    RoomNumber: "315",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2900,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg",loading: "lazy",
  },
  {
    name: "Premium Room",
    RoomNumber: "316",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2900,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg",loading: "lazy",
  },
   {
    name: "Twin Share Room",
    RoomNumber: "304",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Intercom"],
    price: 2500,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/twinshare1_lvbllg.jpg",loading: "lazy",
  },
  {
    name: "Twin Share Room",
    RoomNumber: "305",
    description: "A comfortable and stylish room designed for two guests.",
    features:  ["Bed", "TV", "Air Conditioning","Intercom"],
    price: 2500,
    tag: "Popular",
    location: "Jaggayyapeta",
    rating: 4.3,
    image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/twinshare1_lvbllg.jpg",loading: "lazy",
  },
  {
    name: "TwinShare Room",
    RoomNumber: "312",
    description: "A cozy and well-furnished room designed for a comfortable stay.",
    features: ["Bed", "TV", "Air Conditioning","Intercom"],
    price: 2500,
    tag: "Budget Friendly",
    location: "Jaggayyapeta",
    rating: 4.0,
    image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/twinshare1_lvbllg.jpg",loading: "lazy",
  },
  {
    name: "Twin ShareRoom",
    RoomNumber: "313",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Intercom"],
    price: 2500,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/twinshare1_lvbllg.jpg",loading: "lazy",
  },
  {
    name: "Standrad Room",
    RoomNumber: "306",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2500,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761833369/hotelbed_feytbk.jpg",loading: "lazy",
  },
  {
    name: "Standrad Room",
    RoomNumber: "307",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2500,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761833369/hotelbed_feytbk.jpg",loading: "lazy",
  },
   {
    name: "Standrad Room",
    RoomNumber: "308",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2500,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761833369/hotelbed_feytbk.jpg",loading: "lazy",
  },
  {
    name: "Standrad Room",
    RoomNumber: "309",
    description: "A comfortable and stylish room designed for two guests.",
    features:  ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2500,
    tag: "Popular",
    location: "Jaggayyapeta",
    rating: 4.3,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761833369/hotelbed_feytbk.jpg",loading: "lazy",
  },
  {
    name: "Standrad Room",
    RoomNumber: "310",
    description: "A cozy and well-furnished room designed for a comfortable stay.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2500,
    tag: "Budget Friendly",
    location: "Jaggayyapeta",
    rating: 4.0,
     image: 
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761833369/hotelbed_feytbk.jpg",loading: "lazy",
  },
  {
    name: "Standrad Room",
    RoomNumber: "311",
    description: "Ideal for solo travelers. Compact, comfortable and efficient.",
    features: ["Bed", "TV", "Air Conditioning","Extra Bed – Additional Charges Apply","Intercom"],
    price: 2500,
    tag: "Best Seller",
    location: "Jaggayyapeta",
    rating: 4.5,
     image:"https://res.cloudinary.com/dd4oiwnep/image/upload/v1761833369/hotelbed_feytbk.jpg",loading: "lazy",
  },
];

const featureIcons = {
  Bed: <Bed className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "Intercom": <PhoneCall className="w-4 h-4 inline-block text-gray-600 mr-1" />,
  "TV": <Monitor className="w-4 h-4 inline-block text-gray-600 mr-1" />,
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
              <h3 className="text-lg font-semibold text-[#143447] flex items-center gap-2">
  <span>{room.name}</span>
  <span className="text-gray-400">|</span>
  <span>{room.RoomNumber}</span>
</h3>

             

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
                <Link
  to={`/room/${room.RoomNumber}`}
  className="bg-[#143447] text-white text-sm px-4 py-1 rounded hover:bg-[#0f2c3a]"
>
  View Details
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomTypes;
