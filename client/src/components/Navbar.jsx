import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-green-600 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <img src="./src/assets/logo.png" alt="Carbon Tracker" className="w-32 h-12" />
                <h1 className="text-xl font-bold">Carbon Footprint Report</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
