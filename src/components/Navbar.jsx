import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="flex space-x-6">
                <li className="hover:text-gray-400 cursor-pointer">MENS</li>
                <li className="hover:text-gray-400 cursor-pointer">WOMEN</li>
                <li className="hover:text-gray-400 cursor-pointer">KIDS</li>
                <li className="hover:text-gray-400 cursor-pointer">CART</li>
            </ul>
        </nav>
    );
}

export default Navbar;
