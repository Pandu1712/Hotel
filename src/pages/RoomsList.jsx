import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { roomData } from "../data/roomData";

const RoomsList = ({ category }) => {
  const navigate = useNavigate();

  const normalized = category.toLowerCase();
  const filteredRooms = roomData.filter((room) => {
    const name = room.name.toLowerCase();
    if (normalized === "premium") return name.includes("premium");
    if (normalized === "twin") return name.includes("twin");
    if (normalized === "standrad") return name.includes("standrad");
    return false;
  });

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-[#143447] text-white px-4 py-2 rounded-md hover:bg-[#0f2c3a] flex items-center gap-2 mb-4"
      >
        ← Go Back
      </button>

      <h2 className="text-3xl font-semibold text-[#143447] mb-6 text-center">
        {category} Rooms
      </h2>

      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#143447]">
                  {room.name} - {room.RoomNumber}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{room.description}</p>
                <p className="text-[#0f2c3a] font-bold mt-2">₹ {room.price}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-xs">
                    {room.tag}
                  </span>
                  <Link
                    to={`/room/${room.RoomNumber}`}
                    className="bg-[#143447] text-white px-4 py-1 rounded hover:bg-[#0f2c3a]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No rooms found for this category.
        </p>
      )}
    </div>
  );
};

export default RoomsList;
