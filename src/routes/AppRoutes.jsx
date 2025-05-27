import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BedConf from '../pages/BedConf';
import StandradRoom from '../pages/StandardRoom';
import SpecialRoom from '../pages/SpecialRoom';
import LuxuryRoom from '../pages/Luxuryroom';
import CategoriesRoom from '../pages/Categoriesroom';
import BookingPage from '../pages/BookingPage';

const AppRoutes = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/accommodation/bedconfroom' element={<BedConf />} />
        <Route path='/accommodation/standardroom' element={<StandradRoom />} />
        <Route path='/accommodation/specialroom' element={<SpecialRoom />} />
        <Route path='/accommodation/luxuryroom' element={<LuxuryRoom />} />
        <Route path='//accommodation/categoriesroom' element={<CategoriesRoom />} />
         <Route path="/book/:hotelName" element={<BookingPage />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRoutes;
