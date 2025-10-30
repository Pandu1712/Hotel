import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../components/ScrollToTop";

// Main Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";

// Room and Booking Pages
import RoomsList from "../pages/RoomsList";
import RoomDetails from "../pages/Roomdetails";
import RoomTypes from "../components/Roomtypes";
import BookingPage from "../pages/BookingPage";

const AppRoutes = () => (
  <Router>
    <MainLayout>
       <ScrollToTop /> {/* ✅ this ensures scroll resets on route change */}
      <Routes>
        {/* 🌐 Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* 🏨 Accommodation Categories */}
        <Route
          path="/accommodation/premiumrooms"
          element={<RoomsList category="Premium" />}
        />
        <Route
          path="/accommodation/twinshareroom"
          element={<RoomsList category="Twin" />}
        />
        <Route
          path="/accommodation/standradroom"
          element={<RoomsList category="Standrad" />}
        />

        {/* 🏠 Room and Booking Pages */}
        <Route path="/rooms" element={<RoomTypes />} />
        <Route path="/room/:roomNumber" element={<RoomDetails />} />
        <Route path="/book/:hotelName" element={<BookingPage />} />

        {/* 🧭 Optional dynamic fallback for /rooms/:category */}
        <Route path="/rooms/:category" element={<RoomsList />} />

        {/* ❌ Fallback Route */}
        <Route
          path="*"
          element={
            <p className="text-center mt-20 text-gray-600">
              Select a category from the navbar
            </p>
          }
        />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRoutes;
