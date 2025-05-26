import React from "react";
import { useNavigate } from "react-router-dom";

import AcommoImg from "../assets/images/Acommo.jpg";
import EventImg from "../assets/images/Event.jpg";
import DiningImg from "../assets/images/Dining.jpg";
import ParkingImg from "../assets/images/Parking.jpg";

const features = [
    {
        title: "Accommodation",
        desc: "Experience our luxurious rooms with modern amenities and elegant interiors.",
        image: AcommoImg,
        path: "/accommodation",
        icon: "🏨",
    },
    {
        title: "Events",
        desc: "Perfect venues for weddings, conferences, and corporate meetings.",
        image: EventImg,
        path: "/events",
        icon: "🎉",
    },
    {
        title: "Dining",
        desc: "Savor gourmet dishes crafted by top chefs in our fine dining spaces.",
        image: DiningImg,
        path: "/dining",
        icon: "🍽️",
    },
    {
        title: "Parking",
        desc: "Secure and spacious parking available 24/7 for all guests.",
        image: ParkingImg,
        path: "/parking",
        icon: "🅿️",
    },
];

const FeatureGrid = () => {
    const navigate = useNavigate();

    return (
        <section className="py-16 px-6  mx-auto">
            <h2 className="text-5xl font-semibold text-center text-[#143447] mb-14 tracking-wide">
                Our Facilities
            </h2>
            <div
                className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-10
          "
            >
                {features.map(({ title, desc, image, path, icon }, i) => (
                    <div
                        key={i}
                        className="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-[1.07] hover:shadow-2xl cursor-pointer"
                        onClick={() => navigate(path)}
                    >
                        <div className="relative overflow-hidden h-56  rounded-t-3xl">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div
                                className="
                absolute 
                inset-0 
                bg-gradient-to-t 
                from-black/60 
                to-transparent 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity duration-500
              "
                            />
                            <span
                                className="
                absolute 
                bottom-3 
                left-3 
                text-4xl 
                drop-shadow-lg
                select-none
              "
                            >
                                {icon}
                            </span>
                        </div>
                        <div className="p-6 flex flex-col justify-between min-h-[180px]">
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold text-[#143447] mb-2">{title}</h3>
                                <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
                            </div>
                            <button
                                className="
                  self-start
                  bg-gradient-to-r
                  from-[#143447]
                  to-[#0f2c3a]
                  text-white
                  px-6
                  py-2
                  rounded-full
                  font-medium
                  shadow-md
                  transition
                  duration-300
                  hover:from-[#0f2c3a]
                  hover:to-[#143447]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#143447]/50
                "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(path);
                                }}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureGrid;
