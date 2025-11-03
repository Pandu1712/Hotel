import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FeatureGrid from '../components/FeatureGrid';
import RoomTypes from '../components/Roomtypes';
const BookingForm = () => {



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
                    {[{ img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899316/hotel5_pllny7.jpg", label: 'Location' },
                    { img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899316/otel4_sel2pq.jpg", label: 'FunctionHall' },
                    { img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel2_mfvrdz.jpg", label: 'Wedding Hall' },
                    { img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg", label: 'Premium Rooms' },
                    { img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/twinshare1_lvbllg.jpg", label: 'Twin Share' },
                    { img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/waiting_quwthc.jpg", label: 'Front Desk' }]
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
                        <h2 className="text-2xl font-semibold mb-4 text-[#143447]">Standard Room</h2>
                        <p className="text-gray-600 mb-4">
                            "A cozy and well-furnished room designed for a comfortable stay. Features essential amenities and modern interiors for a pleasant experience. Perfect for budget-friendly travelers who value simplicity and comfort."
                        </p>
                        {/*   <a href="/events" className="text-[#b69d3a] hover:underline">Book Event Space</a> */}
                    </div>
                </div>
            </div>
            {/* Hotel Info Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white">
  {/* 🖼️ Left Side - Image */}
  <div className="md:w-1/2 w-full">
    <img
      src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel1_ckm1od.jpg"
      alt="Hotel Grand VadhuVar"
      className="w-full rounded-tl-[120px] shadow-lg object-cover"
    />
  </div>

  {/* 🏨 Right Side - Text */}
  <div className="md:w-1/2 w-full text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#143447] mb-2">
      Hotel Grand VadhuVar
    </h2>

    <p className="text-gray-600 italic mb-4">
      Experience comfort amidst luxury
    </p>

    <div className="h-[2px] w-20 bg-[#f8de71] mx-auto md:mx-0 mb-4"></div>

    <p className="text-gray-700 mb-4 leading-relaxed">
      Nestled in the heart of <span className="font-semibold text-[#143447]">Jaggayyapeta</span>, 
      <strong> Hotel Grand VadhuVar </strong> redefines hospitality with a perfect blend of elegance, comfort, 
      and world-class service. Designed for both leisure and business travelers, our hotel offers a serene retreat 
      where luxury meets tradition. Each room is thoughtfully designed with modern amenities, ensuring a relaxing 
      and memorable stay.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Whether you’re here for a family celebration, a business trip, or a peaceful getaway, 
      <strong> Hotel Grand VadhuVar </strong> provides a warm ambiance and personalized care to make you feel at home. 
      Enjoy exquisite dining, sophisticated interiors, and top-tier facilities that reflect the essence of 
      Andhra Pradesh’s hospitality.
    </p>

    <div className="mt-6 text-gray-700 leading-relaxed space-y-2">
      <p>
        <span className="font-semibold text-[#143447]">📍 Address:</span>  
        S.No - 300/3, 3rd Floor, Tumuluri’s Plaza, Sathya Electronics Building,  
        Jaggayyapeta, NTR District, Andhra Pradesh – <strong>521175</strong>
      </p>
      <p>
        <span className="font-semibold text-[#143447]">📞 Phone:</span> +91 94920 47799
      </p>
      <p>
        <span className="font-semibold text-[#143447]">✉️ Email:</span> hotelgrandvadhuvar@gmail.com
      </p>
    </div>
  </div>
</div>


            <FeatureGrid />

            <RoomTypes />

            {/* Location */}
            <div className="max-w-6xl mx-auto px-4 py-8 mt-[30px]"  >
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
