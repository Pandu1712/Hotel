import React, { useState } from "react";
import BookingPages from "./BookingPage";
import { useNavigate } from "react-router-dom";
import {
    FaWifi,
    FaUtensils,
    FaConciergeBell,
    FaStar,
} from "react-icons/fa";

// Hotel Data
const hotels = [
    {
        name: "The Grand Resort",
        location: "Visakhapatnam, Andhra Pradesh, India",
        price: 1000,
        type: "Penthouse Suite",
        image: "/hotel1.jpg",
    },
    {
        name: "The Regal Palace",
        location: "Visakhapatnam, Andhra Pradesh, India",
        price: 150,
        type: "Presidential Suite",
        image: "/hotel2.jpg",
    },
    {
        name: "Velvet Nights Inn",
        location: "Visakhapatnam, Andhra Pradesh, India",
        price: 120,
        type: "Villa Or Cottage",
        image: "/hotel3.jpg",
    },
    {
        name: "Crystal Waters Resort",
        location: "Visakhapatnam, Andhra Pradesh, India",
        price: 200,
        type: "Cabana",
        image: "/hotel4.jpg",
    },
    // Add more hotels as needed
];

// Filters
const roomTypes = [
    "Penthouse Suite",
    "Presidential Suite",
    "Villa Or Cottage",
    "Cabana"
    
];

const priceRanges = [
    { label: "₹0 - ₹120", min: 0, max: 120 },
    { label: "₹121 - ₹160", min: 121, max: 160 },
    { label: "₹161 - ₹220", min: 161, max: 220 },
];

const HotelListingLuxury = () => {
    const navigate = useNavigate();
    const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [visibleCount, setVisibleCount] = useState(2); // initially show 2 hotels

    const handleRoomTypeChange = (type) => {
        setSelectedRoomTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const handlePriceChange = (range) => {
        setSelectedPrices((prev) =>
            prev.includes(range)
                ? prev.filter((r) => r !== range)
                : [...prev, range]
        );
    };

    const clearFilters = () => {
        setSelectedRoomTypes([]);
        setSelectedPrices([]);
        setSortOrder("");
    };

    // Filter logic
    let filteredHotels = hotels.filter((hotel) => {
        const matchesRoomType =
            selectedRoomTypes.length === 0 || selectedRoomTypes.includes(hotel.type);
        const matchesPrice =
            selectedPrices.length === 0 ||
            selectedPrices.some(
                (range) => hotel.price >= range.min && hotel.price <= range.max
            );
        return matchesRoomType && matchesPrice;
    });

    // Sort logic
    if (sortOrder === "lowToHigh") {
        filteredHotels.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
        filteredHotels.sort((a, b) => b.price - a.price);
    }

    const displayedHotels = filteredHotels.slice(0, visibleCount);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-10 bg-white p-6 rounded-2xl shadow-md">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
    <h1 className="text-3xl font-semibold text-gray-800">Luxury Rooms</h1>
    <p className="text-gray-600 sm:max-w-xl">
      Luxury Rooms offer comfortable, no-frills accommodation with essential amenities like a bed, private bathroom, TV, and Wi-Fi. They are ideal for budget-conscious travelers seeking a clean and convenient stay. Available in various types such as single, double, or twin configurations.
    </p>
  </div>
</div>


            <div className="flex flex-col lg:flex-row gap-8">
                {/* Listings */}
                <div className="flex-1 space-y-6">
                    {displayedHotels.map((hotel, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden shadow-md">
                            <div className="flex flex-col md:flex-row">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-full md:w-1/3 h-60 object-cover"
                                />
                                <div className="p-4 space-y-2 flex-1">
                                    <div className="text-sm text-gray-500">{hotel.location}</div>
                                    <h2 className="text-xl font-semibold">{hotel.type}</h2>
                                    <div className="text-orange-500 flex items-center gap-1">
                                        <FaStar />
                                        <span className="text-sm">200+ reviews</span>
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-sm text-gray-700 mt-2">
                                        <span className="flex items-center gap-1">
                                            <FaWifi /> Free Wifi
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaUtensils /> Free Breakfast
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaConciergeBell /> Room Service
                                        </span>
                                    </div>
                                    <div className="text-lg font-semibold mt-2 text-[#143447]">
                                        ₹{hotel.price}{" "}
                                        <span className="text-sm text-gray-500">/day</span>
                                    </div>

                                    {/* ✅ Book Now Button */}
                                      <button
            onClick={() => navigate(`/book/${encodeURIComponent(hotel.name)}`)}
            className="mt-3 px-4 py-2 bg-[#143447] text-white rounded hover:bg-[#2b6b91] transition duration-200"
          >
            Book Now
          </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {visibleCount < filteredHotels.length && (
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 2)}
                            className="mt-4 px-4 py-2 bg-[#143447] text-white rounded hover:bg-[#2b6b91]"
                        >
                            View More
                        </button>
                    )}
                </div>


                {/* Filters */}
                <div className="w-full lg:w-64 border rounded-lg p-4 shadow-md h-fit">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">Filters</h3>
                        <button onClick={clearFilters} className="text-sm text-blue-500">
                            Clear
                        </button>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Room Types</h4>
                            <ul className="space-y-1">
                                {roomTypes.map((type, idx) => (
                                    <li key={idx}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={selectedRoomTypes.includes(type)}
                                                onChange={() => handleRoomTypeChange(type)}
                                            />
                                            {type}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Price Range</h4>
                            <ul className="space-y-1">
                                {priceRanges.map((range, idx) => (
                                    <li key={idx}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={selectedPrices.includes(range)}
                                                onChange={() => handlePriceChange(range)}
                                            />
                                            {range.label}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Sort By</h4>
                            <ul className="space-y-1">
                                <li>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sort"
                                            className="mr-2"
                                            checked={sortOrder === "lowToHigh"}
                                            onChange={() => setSortOrder("lowToHigh")}
                                        />
                                        Price Low to High
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sort"
                                            className="mr-2"
                                            checked={sortOrder === "highToLow"}
                                            onChange={() => setSortOrder("highToLow")}
                                        />
                                        Price High to Low
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelListingLuxury;
