import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import hotel1 from '../assets/images/hotel1.jpg';
import hotel2 from '../assets/images/hotel2.jpg';
import hotel3 from '../assets/images/hotel3.jpg';

const BookingForm = () => {
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking from ${arrival} to ${departure} for ${rooms} room(s)`);
    // Replace alert with real booking logic/API call
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-[#143447] bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-4 items-center -mt-16 relative z-10"
    >
      {/* Arrival Date */}
      <div className="flex flex-col flex-1">
        <label htmlFor="arrival" className="mb-1 font-semibold text-[#f8de71]">
          Arrival Date
        </label>
        <input
          type="date"
          id="arrival"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Departure Date */}
      <div className="flex flex-col flex-1">
        <label htmlFor="departure" className="mb-1 font-semibold text-[#f8de71]">
          Departure Date
        </label>
        <input
          type="date"
          id="departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Rooms */}
      <div className="flex flex-col flex-1">
        <label htmlFor="rooms" className="mb-1 font-semibold text-[#f8de71]">
          Rooms
        </label>
        <select
          id="rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {[...Array(5).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1} {num + 1 === 1 ? 'Room' : 'Rooms'}
            </option>
          ))}
        </select>
      </div>

      {/* Book Now Button */}
      <button
        type="submit"
        className="bg-[#f8de71] hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-tr-2xl rounded-bl-2xl transition duration-300 md:self-end"
      >
        Book Now
      </button>
    </form>
  );
};

const Home = () => {
  return (
    <>
      <div className="w-full bg-white relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={800}
          className="w-full"
        >
          {[{ img: hotel1, label: 'Luxurious Lobby' },
            { img: hotel2, label: 'Deluxe Rooms' },
            { img: hotel3, label: 'Scenic Pool' }]
            .map(({ img, label }, i) => (
              <div className="relative" key={i}>
                <img
                  src={img}
                  alt={label}
                  className="w-full h-[85vh] md:h-[70vh] sm:h-[50vh] object-cover"
                />
                <p className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded text-sm md:text-base">
                  {label}
                </p>
              </div>
            ))}
        </Carousel>

        {/* Booking Form below the carousel */}
        <BookingForm />
      </div>
    </>
  );
};

export default Home;
