"use client"
// components/Menu.tsx
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
<>
<nav className="md:flex gap-6 justify-center p-2 border-b mb-2 flex-col md:flex-row bg-red-600 hidden mt-4 ">
    

    <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    New Arrival
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    Deals
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    Loaded Fries
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    Flatbreads
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
   Burgers
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    Combo Meals
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    Family Deals
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
  Southern Fried Chicken
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
   Chicken Fingers & Nuggets
   </a>
   <a
     href="#"
     className="hover:text-white cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
  Beverages
   </a>

</nav> 

    <nav className="flex flex-col md:flex-row bg-red-600 p-2 border-b mb-2  md:hidden mt-4">
      <div className="flex items-center justify-between">
        <div>
          <img src="/logo.png" alt="Logo" className="h-8 w-auto cursor-pointer" />
        </div>
        <div className="md:hidden">
          <IoMenu className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
      {showMenu && (
        <div className="md:flex flex-col flex  md:flex-row md:justify-center">
          <a href="#" className="nav-link border-b-2 border-gray-300 ">New Arrival</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Deals</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Loaded Fries</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Flatbreads</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Burgers</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Combo Meals</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Family Deals</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Southern Fried Chicken</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Chicken Fingers & Nuggets</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">Beverages</a>
        </div>
      )}
    </nav>
</>
   
  );
};

export default Menu;
