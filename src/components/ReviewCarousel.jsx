// ReviewCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
    {
        quote: "An unforgettable experience! The service was impeccable and the views were breathtaking.",
        author: "John Doe",
        role: "Travel Blogger",
        avatar: "https://i.pravatar.cc/100?img=3",
        rating: 5,
    },
    {
        quote: "The best hotel I've ever stayed at. Highly recommend the dining experience!",
        author: "Jane Smith",
        role: "Food Critic",
        avatar: "https://i.pravatar.cc/100?img=5",
        rating: 4,
    },
    {
        quote: "Excellent accommodation, friendly staff, and delicious food. Will definitely return!",
        author: "Emily Johnson",
        role: "Vacationer",
        avatar: "https://i.pravatar.cc/100?img=7",
        rating: 5,
    },
    {
        quote: "A truly relaxing and luxurious stay. The rooms were spacious and spotless.",
        author: "Michael Brown",
        role: "Business Traveler",
        avatar: "https://i.pravatar.cc/100?img=10",
        rating: 4,
    },
];

const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
        <svg
            key={i}
            className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
        </svg>
    ));
};

const ReviewCarousel = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-6 py-20 bg-gradient-to-br from-[#f7fafd] to-white">
            <h2 className="text-4xl font-semibold text-center text-[#143447] mb-12">What Our Guests Say</h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white/70 backdrop-blur-lg border border-gray-100 rounded-3xl shadow-lg p-6 h-full flex flex-col transition hover:scale-105 duration-300 ease-in-out">
                            <div className="flex items-center gap-4 mb-4">
                                <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-[#143447]" />
                                <div>
                                    <h4 className="text-[#143447] font-semibold">{review.author}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-800 italic mb-4 flex-grow">“{review.quote}”</p>
                            <div className="flex justify-end">{renderStars(review.rating)}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="text-center mt-10">
                <button
                    className="px-6 py-3 bg-[#143447] hover:bg-[#0f2c3a] text-white rounded-full shadow-lg hover:shadow-xl transition"
                    onClick={() => window.location.href = "/reviews"}
                >
                    View All Reviews
                </button>
            </div>
        </div>
    );
};

export default ReviewCarousel;
