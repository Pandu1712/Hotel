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
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);

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
                    {[{ img: hotel1, label: 'Premium Rooms' },
                    { img: hotel2, label: 'Twin Share' },
                    { img: hotel3, label: 'Standrad Rooms' }]
                        .map(({ img, label }, i) => (
                            <div className="relative" key={i}>
                                <img
                                    src={img}
                                    alt={label}
                                    className="w-full h-[30vh] sm:h-[70vh] md:h-[85vh] lg:h-[70vh] object-cover"
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
                    Welcome to Hotel Grand VadhuVar
                </h1>
                <p className="text-lg text-center text-gray-700 mb-8">
                    Experience luxury and comfort in the heart of the city. Book your stay with us today!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-[#143447]">Premium Rooms</h2>
                        <p className="text-gray-600 mb-4">
                            "Enjoy a spacious, elegantly designed room with modern interiors and warm lighting. Step onto your private balcony for fresh air and beautiful views. Perfect for comfort, style, and a touch of open-air luxury."
                        </p>
                       {/*  <a href="/accommodation" className="text-[#b69d3a] hover:underline">Explore Rooms</a> */}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-[#143447]">Twin Share</h2>
                        <p className="text-gray-600 mb-4">
                            "Twin Share Room – A comfortable and stylish room designed for two guests. Features modern interiors, cozy twin beds, and a relaxing ambiance. Perfect for friends or colleagues seeking comfort and convenience."
                        </p>
                        {/* <a href="/dining" className="text-[#b69d3a] hover:underline">View Menu</a> */}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-[#143447]">Standrad Room</h2>
                        <p className="text-gray-600 mb-4">
                            "A cozy and well-furnished room designed for a comfortable stay. Features essential amenities and modern interiors for a pleasant experience. Perfect for budget-friendly travelers who value simplicity and comfort."
                        </p>
                      {/*   <a href="/events" className="text-[#b69d3a] hover:underline">Book Event Space</a> */}
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
                        Hotel Grand VadhuVar
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

            <RoomTypes />
            <ReviewCarousel />\
            {/* Location */}
            <div className="max-w-6xl mx-auto px-4 py-8 mt-[-50px]"  >
                <h2 className="text-4xl font-semibold text-center text-[#143447] mb-12">Meet Here</h2>
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.603690206045!2d80.0982708!3d16.895488099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a900419edd85%3A0xbd1626cce20b8bc3!2sHotel%20Grand%20VadhuVar!5e0!3m2!1sen!2sin!4v1761828779315!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

            </div>


        </>

    );
};




export default Home;
