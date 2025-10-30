// src/pages/RoomDetails.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import { roomData } from "../data/roomData";
import { ArrowLeft } from "lucide-react"; // ✅ clean back arrow icon

const WHATSAPP_NUMBER = "916303130025"; // ✅ no '+' symbol

const RoomDetails = () => {
  const { roomNumber } = useParams();
  const navigate = useNavigate(); // ✅ used for go back

  const room = roomData.find((r) => String(r.RoomNumber) === roomNumber);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");

  if (!room) return <p className="text-center mt-10">Room not found</p>;

  // ✅ WhatsApp send function
  const handleSendWhatsApp = () => {
    const bookingDate = date || new Date().toLocaleDateString();
    const message = `
🏨 *Room Booking Request*
---------------------------
👤 *Name:* ${name || "-"}
📞 *Contact:* ${contact || "-"}
🏠 *Room:* ${room.name} (${room.RoomNumber})
📍 *Location:* ${room.location || "Not specified"}
💰 *Price:* ₹${room.price}
📅 *Booking Date:* ${bookingDate}
---------------------------
`;
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  // ✅ Form submit validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      alert("Please fill in your name and contact number");
      return;
    }
    handleSendWhatsApp();
    setShowModal(false);
  };

  // ✅ Today’s date for restricting past selections
  const today = new Date().toISOString().split("T")[0];

  // ✅ Numeric-only 10-digit contact input
  const handleContactChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setContact(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative">
      {/* ✅ Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#143447] font-medium mb-4 hover:text-[#0f2c3a] transition-all duration-200
                   absolute left-4 top-4 sm:static sm:mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Go Back</span>
      </button>

      <h2 className="text-3xl font-semibold text-[#143447] mb-4 mt-10 sm:mt-0 text-center sm:text-left">
        {room.name} - {room.RoomNumber}
      </h2>
      <p className="text-gray-600 mb-4 text-center sm:text-left">{room.description}</p>

      {/* ✅ Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {room.images && room.images.length > 0 ? (
          room.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${room.name} ${index + 1}`}
              className="rounded-xl w-full h-64 object-cover"
            />
          ))
        ) : (
          <p className="text-gray-500">No images available</p>
        )}
      </div>

      <ul className="list-disc pl-5 text-gray-700 mb-4">
        {room.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="flex justify-between items-center flex-wrap gap-3">
        <span className="text-2xl font-bold text-[#0f2c3a]">₹ {room.price}</span>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#143447] text-white px-5 py-2 rounded-lg hover:bg-[#0f2c3a] w-full sm:w-auto"
        >
          Book Now
        </button>
      </div>

      {/* ✅ Booking Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl w-11/12 max-w-md p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#143447]">
              Enter Booking Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={contact}
                  onChange={handleContactChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  placeholder="Enter your 10-digit number"
                  maxLength={10}
                  inputMode="numeric"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Booking Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={today} // ✅ restrict past dates
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#143447] text-white"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
