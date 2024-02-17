import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nuggut:FC = () => {


  return (
<>
{/* header */}
<div className='flex justify-between p-6'>
    <h1 className='text-4xl font-extrabold text-black '>Chicken Fingers & Nuggets</h1>
</div>
{/* banner */}
<div className="flex items-center justify-center">
  <Image src="/nuggut.webp" alt="Logo" width={1300} height={400} objectFit="fill" className=" hero" />
</div>
{/* cards row 1*/}

{/* First Card */}
<div className="flex justify-around gap-4 p-4 flex-col md:flex-row">
<div className="bg-white rounded border shadow-md pr-2 flex">
    <div className="flex justify-center items-center">
      <img src="deal.webp" alt="Small Image" className="w-24 h-24 object-contain" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold text-start">Chicken Fillet Sandwich</h2>
      <p className="text-sm text-gray-600 mt-2 text-start">Indulge in premium lean meat,<br /> our signature garlic mayo.</p>
      <p className="text-sm font-bold mt-2 text-start">
        <span className="bg-red-500 text-white rounded px-2 py-1">Special Offer</span>
      </p>
      <p className="text-sm font-bold mt-4 text-start mb-4">
        <span className="bg-yellow-500 text-white rounded px-2 py-2  cursor-pointer">add to cart </span>
      </p>    </div>
  </div>

  {/* <!-- Second Card --> */}
  <div className="bg-white rounded border shadow-md pr-2 flex">
    <div className="flex justify-center items-center">
      <img src="deal.webp" alt="Small Image" className="w-24 h-24 object-contain" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold text-start">Chicken Fillet Sandwich</h2>
      <p className="text-sm text-gray-600 mt-2 text-start">Indulge in premium lean meat,<br /> our signature garlic mayo.</p>
      <p className="text-sm font-bold mt-2 text-start">
        <span className="bg-red-500 text-white rounded px-2 py-1">Special Offer</span>
      </p>
      <p className="text-sm font-bold mt-4 text-start mb-4">
        <span className="bg-yellow-500 text-white rounded px-2 py-2  cursor-pointer">add to cart </span>
      </p>    </div>
  </div>
   {/* <!-- Third Card --> */}
   <div className="bg-white rounded border shadow-md pr-2 flex">
    <div className="flex justify-center items-center">
      <img src="deal.webp" alt="Small Image" className="w-24 h-24 object-contain" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold text-start">Chicken Fillet Sandwich</h2>
      <p className="text-sm text-gray-600 mt-2 text-start">Indulge in premium lean meat,<br /> our signature garlic mayo.</p>
      <p className="text-sm font-bold mt-2 text-start">
        <span className="bg-red-500 text-white rounded px-2 py-1">Special Offer</span>
      </p>
      <p className="text-sm font-bold mt-4 text-start mb-4">
        <span className="bg-yellow-500 text-white rounded px-2 py-2  cursor-pointer">add to cart </span>
      </p>    </div>
  </div>
   
</div>

{/* SEcond Card */}
<div className="flex justify-around gap-4 p-4 flex-col md:flex-row">
<div className="bg-white rounded border shadow-md pr-2 flex">
    <div className="flex justify-center items-center">
      <img src="deal.webp" alt="Small Image" className="w-24 h-24 object-contain" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold text-start">Chicken Fillet Sandwich</h2>
      <p className="text-sm text-gray-600 mt-2 text-start">Indulge in premium lean meat,<br /> our signature garlic mayo.</p>
      <p className="text-sm font-bold mt-2 text-start">
        <span className="bg-red-500 text-white rounded px-2 py-1">Special Offer</span>
      </p>
      <p className="text-sm font-bold mt-4 text-start mb-4">
        <span className="bg-yellow-500 text-white rounded px-2 py-2  cursor-pointer">add to cart </span>
      </p>    </div>
  </div>

  {/* <!-- Second Card --> */}
  <div className="bg-white rounded border shadow-md pr-2 flex">
    <div className="flex justify-center items-center">
      <img src="deal.webp" alt="Small Image" className="w-24 h-24 object-contain" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold text-start">Chicken Fillet Sandwich</h2>
      <p className="text-sm text-gray-600 mt-2 text-start">Indulge in premium lean meat,<br /> our signature garlic mayo.</p>
      <p className="text-sm font-bold mt-2 text-start">
        <span className="bg-red-500 text-white rounded px-2 py-1">Special Offer</span>
      </p>
      <p className="text-sm font-bold mt-4 text-start mb-4">
        <span className="bg-yellow-500 text-white rounded px-2 py-2  cursor-pointer">add to cart </span>
      </p>    </div>
  </div>
   {/* <!-- Third Card --> */}
   <div className="bg-white rounded border shadow-md pr-2 flex">
    <div className="flex justify-center items-center">
      <img src="deal.webp" alt="Small Image" className="w-24 h-24 object-contain" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold text-start">Chicken Fillet Sandwich</h2>
      <p className="text-sm text-gray-600 mt-2 text-start">Indulge in premium lean meat,<br /> our signature garlic mayo.</p>
      <p className="text-sm font-bold mt-2 text-start">
        <span className="bg-red-500 text-white rounded px-2 py-1">Special Offer</span>
      </p>
      <p className="text-sm font-bold mt-4 text-start mb-4">
        <span className="bg-yellow-500 text-white rounded px-2 py-2  cursor-pointer">add to cart </span>
      </p>    </div>
  </div>
   
</div>


</>
  
  );
};

export default Nuggut;
