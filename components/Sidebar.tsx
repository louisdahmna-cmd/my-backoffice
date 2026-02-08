'use client';
import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={`bg-gray-900 text-white h-screen transition-all ${isOpen ? 'w-64' : 'w-20'}`}> 
            <div className="p-4 flex justify-between items-center">
                <h1 className={`font-bold text-xl ${!isOpen && 'hidden'}`}>Backoffice</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">☰</button>
            </div>
            <nav className="mt-8">
                <ul className="space-y-4 px-4">
                    <li className="hover:bg-gray-800 p-3 rounded cursor-pointer">{isOpen ? '📊 Dashboard' : '📊'}</li>
                    <li className="hover:bg-gray-800 p-3 rounded cursor-pointer">{isOpen ? '👥 Utilisateurs' : '👥'}</li>
                    <li className="hover:bg-gray-800 p-3 rounded cursor-pointer">{isOpen ? '📄 Contenu' : '📄'}</li>
                    <li className="hover:bg-gray-800 p-3 rounded cursor-pointer">{isOpen ? '⚙️ Paramètres' : '⚙️'}</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;