import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FeatureGrid from '../components/FeatureGrid';
import hotel1 from '../assets/images/hotel1.jpg';
import hotel2 from '../assets/images/hotel2.jpg';
import hotel3 from '../assets/images/hotel3.jpg';
import hotel4 from '../assets/images/hotel4.jpg';
import ReviewCarousel from '../components/ReviewCarousel';
import RoomTypes from '../components/Roomtypes';
const BookingForm = () => {
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [rooms, setRooms] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking from ${arrival} to ${departure} for ${rooms} room(s)`);
        // Replace alert with real booking logic/API call
    };
    const features = [
        {
            title: 'Accommodation',
            desc: 'Experience our luxurious rooms with modern amenities and elegant interiors.',
            image: 'https://source.unsplash.com/600x400/?hotel,room',
        },
        {
            title: 'Events',
            desc: 'Perfect venues for weddings, conferences, and corporate meetings.',
            image: 'https://source.unsplash.com/600x400/?event,conference',
        },
        {
            title: 'Dining',
            desc: 'Savor gourmet dishes crafted by top chefs in our fine dining spaces.',
            image: 'https://source.unsplash.com/600x400/?restaurant,food',
        },
        {
            title: 'Parking',
            desc: 'Secure and spacious parking available 24/7 for all guests.',
            image: 'https://source.unsplash.com/600x400/?parking,garage',
        },
    ];
    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-[#143447] bg-opacity-90 backdrop-blur-md rounded-tr-3xl rounded-bl-3xl p-6 shadow-lg flex flex-col md:flex-row gap-4 items-center -mt-16 relative z-10"
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
                Search
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

            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-[#143447]">
                    Welcome to Panda Living Hotel
                </h1>
                <p className="text-lg text-center text-gray-700 mb-8">
                    Experience luxury and comfort in the heart of the city. Book your stay with us today!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-[#143447]">Luxurious Rooms</h2>
                        <p className="text-gray-600 mb-4">
                            Enjoy our elegantly designed rooms with stunning views and top-notch amenities.
                        </p>
                        <a href="/accommodation" className="text-[#b69d3a] hover:underline">Explore Rooms</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-[#143447]">Dining Experience</h2>
                        <p className="text-gray-600 mb-4">
                            Savor exquisite dishes crafted by our world-class chefs in a serene ambiance.
                        </p>
                        <a href="/dining" className="text-[#b69d3a] hover:underline">View Menu</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-[#143447]">Events & Conferences</h2>
                        <p className="text-gray-600 mb-4">
                            Host your events in our state-of-the-art facilities with personalized service.
                        </p>
                        <a href="/events" className="text-[#b69d3a] hover:underline">Book Event Space</a>
                    </div>
                </div>
            </div>
            {/* Hotel Info Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white">
                <div className="md:w-1/2 w-full">
                    <img src={hotel4} alt="Panda Hotel" className="w-full rounded-tl-full shadow-md" />
                </div>
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-4xl font-semibold text-[#143447] mb-2">
                        Panda Living Hotel
                    </h2>

                    <p className="text-gray-600 italic mb-4">Experience comfort amidst luxury</p>
                    <div className="h-[2px] w-16 bg-gray-300 mx-auto md:mx-0 mb-4"></div>
                    <p className="text-gray-700 mb-4">
                        Spoil yourself in 5-star seafront luxury at Novotel Visakhapatnam Varun Beach hotel.
                        Spare contemporary design makes your room a calm haven, and picture windows offer you
                        dazzling Bay of Bengal views. Rise and shine with a dip in the infinity pool and
                        breakfast with an ocean backdrop at the lavish buffet spread at Novotel.
                    </p>
                    <p className="text-gray-700">
                        The hotel shares a close proximity with the city Railway station, Rushikonda Beach,
                        Vizag Port and the airport. The popular Submarine Museum is just a walk away. The
                        hotel’s city centre location makes it approachable from industrial and business hubs.
                        Novotel Visakhapatnam forms part of a complex consisting of an INOX multiplex, night
                        club and a shopping mall. Novotel Visakhapatnam Varun Beach is among the only hotels in
                        Visakhapatnam that is ocean facing. The hotel offers calming views of the sea from
                        every nook and corner.
                    </p>
                </div>
            </div>

            <FeatureGrid />
            <ReviewCarousel />
            <RoomTypes />

            
        </>
        
    );
};




export default Home;
