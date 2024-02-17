// ProductPage.js
import React, { useState } from 'react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Left Section */}
      <div className="mr-8">
        {/* Main Product Image */}
        <div className="rounded-lg overflow-hidden mb-4">
          <img src="/big-product-image.jpg" alt="Big Product Image" className="w-64 h-64 object-cover" />
        </div>
        {/* Small Product Images */}
        <div className="flex">
          <div className="mr-2">
            <img src="/small-product-image-1.jpg" alt="Small Product Image 1" className="w-16 h-16 object-cover rounded-lg cursor-pointer" />
          </div>
          <div>
            <img src="/small-product-image-2.jpg" alt="Small Product Image 2" className="w-16 h-16 object-cover rounded-lg cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Loaded Doner Fries</h1>
        <p className="text-sm font-semibold text-gray-600 mb-4">New</p>
        <p className="text-sm mb-4">Indulge in premium lean meat, our signature garlic mayo, special chili sauce, lettuce and hand-cut fries fusion! Nutritional Content per serving: 814 calories</p>

        {/* Product Options */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Coke</h2>
          <p className="text-sm">Rs. 199.00</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Sprite</h2>
          <p className="text-sm">Rs. 199.00</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Mineral Water</h2>
          <p className="text-sm">Rs. 90.00</p>
        </div>

        {/* Quantity */}
        <div className="flex items-center mb-4">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l" onClick={handleDecreaseQuantity}>-</button>
          <span className="px-4 py-2">{quantity}</span>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r" onClick={handleIncreaseQuantity}>+</button>
        </div>

        {/* More in Loaded Fries Button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded">More in Loaded Fries</button>
      </div>
    </div>
  );
};

export default ProductPage;
