import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [activeDropdownDesktop, setActiveDropdownDesktop] = useState(null);
    const [activeDropdownMobile, setActiveDropdownMobile] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdownDesktop = (index) => {
        setActiveDropdownDesktop(activeDropdownDesktop === index ? null : index);
    };

    const toggleDropdownMobile = (index) => {
        setActiveDropdownMobile(activeDropdownMobile === index ? null : index);
    };

    const navItems = [
        {
            name: 'Home',
            path: '/',

        },
        {
            name: 'About',
            path: '/about',

        },
        {
            name: 'Accommodation',
            path: '/accommodation',
            submenu: [
                { name: 'Standard Room', path: '/accommodation/standardroom' },
                { name: 'Speciality Room', path: '/accommodation/specialroom' },
                { name: 'Bed Configuration Room', path: '/accommodation/bedconfroom' },
                { name: 'Luxury Room', path: '/accommodation/luxuryroom' },
                { name: 'Categories Room', path: '/accommodation/categoriesroom' },


            ]
        },
        {
            name: 'Events',
            path: '/events',
            submenu: [
                { name: 'Marriage', path: '/events/marriage' },
                { name: 'Parties', path: '/events/party' },
                { name: 'Conference', path: '/events/conference' }
            ]
        },
        {
            name: 'Dining',
            path: '/dining',
            submenu: [
                { name: 'The Square', path: '/dining/thesquare' },
                { name: 'Harbour Vue', path: '/dining/harbourvue' },
                { name: 'Zaffiran', path: '/dining/zaffiran' },
                { name: 'Red Bowl', path: '/dining/redbowl' },
                { name: 'Sugarr', path: '/dining/sugarr' },

            ]
        },
        {
            name: 'Contact',
            path: '/contact',
            
        },
        
    ];

    const currentDate = new Date().toLocaleDateString();

    return (
        <header className="bg-[#143447] shadow sticky top-0 z-50 text-white">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo & Name */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src="/logo.png" alt="Logo" className="w-20 h-20 rounded-full object-cover" />
                    <span className="text-xl font-bold">Panda Living</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <a
                                href={item.path}
                                onClick={(e) => {
                                    if (item.submenu) {
                                        e.preventDefault(); // only prevent if there's a submenu
                                        toggleDropdownDesktop(index);
                                    }
                                }}
                                className="relative font-semibold px-4 py-2 text-white transition duration-300 hover:text-[#f8de71] group cursor-pointer"
                            >

                                <span className="absolute inset-0 bg-[#143447] rounded-tl-2xl rounded-br-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-[-1]"></span>

                                <span className="relative z-10">
                                    {item.name}
                                    <span className="block h-0.5 bg-[#f8de71] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1 ml-4 rounded-full"></span>
                                </span>
                            </a>

                            {activeDropdownDesktop === index && item.submenu && (
                                <div className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white text-[#143447] shadow-xl rounded-2xl overflow-hidden z-30 w-44 border border-[#f8de71]">
                                    {item.submenu.map((subItem, i) => (
                                        <a
                                            key={i}
                                            href={subItem.path}
                                            className={`block px-4 py-3 text-center text-sm font-medium transition-all duration-200 hover:bg-[#f8de71] hover:text-[#143447] ${i < item.submenu.length - 1 ? 'border-b border-gray-200' : ''
                                                }`}
                                        >
                                            {subItem.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right: Date & Book Now */}
                <div className="hidden md:flex items-center gap-4">
                    <span className="text-sm text-[#143447] bg-[#f8de71] px-3 py-1 rounded-full font-semibold shadow">
                        {currentDate}
                    </span>

                    <button className="bg-[#f8de71] text-[#143447] font-semibold px-4 py-2 rounded-tl-2xl rounded-br-2xl hover:bg-yellow-300 transition">
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#143447] px-4 pb-4">
                    {navItems.map((item, index) => (
                        <div key={index} className="mb-2">
                            <a
                                href={item.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdownMobile(index);
                                }}
                                className="w-full text-left font-medium py-2 px-3 rounded-md hover:bg-[#f8de71] hover:text-black transition block cursor-pointer"
                            >
                                {item.name}
                            </a>

                            {activeDropdownMobile === index && item.submenu && (
                                <div className="pl-4 mt-1 space-y-1 text-sm text-white">
                                    {item.submenu.map((subItem, i) => (
                                        <a
                                            key={i}
                                            href={subItem.path}
                                            className="block py-1 px-2 rounded hover:bg-[#f8de71] hover:text-black transition"
                                        >
                                            {subItem.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="mt-4 flex flex-col items-start gap-2">
                        <span className="text-sm text-[#143447] bg-[#f8de71] px-3 py-1 rounded-full font-semibold shadow">
                            {currentDate}
                        </span>

                        <button className="bg-[#f8de71] text-[#143447] font-semibold px-4 py-2 rounded-tl-2xl rounded-br-2xl hover:bg-yellow-300 transition">
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
