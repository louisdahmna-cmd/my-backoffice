'use client';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Profil </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"> Déconnexion </button>
            </div>
        </header>
    );
};

export default Header;