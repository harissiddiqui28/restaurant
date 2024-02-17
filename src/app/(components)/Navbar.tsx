"use client"
import React, { FC, useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdAccountCircle, MdClose } from "react-icons/md";

const Navbar: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopuped = () => {
    setIsOpened(!isOpened);
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful. User data:', data);
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmited = () => {
    setIsOpen(false); // Close the location form after submitting
    // Add logic for handling form submission if needed
  };
  

  return (
    <nav className="bg-white shadow-md flex md:justify-between px-4 py-2 gap-8">
      <div className="flex items-start">
      <Link href="/">
  <div className="mr-4 cursor-pointer">
    <Image src="/logo.png" alt="Logo" width={80} height={40} />
  </div>
</Link>
        <div className="flex items-center gap-2 text-gray-600 cursor-pointer" onClick={togglePopup}>
          <FaLocationDot className="h-12 w-12 bg-red-500  rounded px-2 py-2"/>
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-red-500 text-2xl mb-4">Choose Your Location</h2>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                <input type="text" id="city" name="city" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="zone" className="block text-gray-700 mb-2">Zone</label>
                <input type="text" id="zone" name="zone" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              </div>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={handleSubmited}>Submit</button>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <FaShoppingBag className="text-black cursor-pointer h-12 w-12 bg-red-500  rounded px-2 py-2" />
        {/* Account Icon */}
        <MdAccountCircle
          className="h-12 w-12 bg-red-500 rounded-full p-2 cursor-pointer"
          onClick={togglePopuped}
        />

        {/* Popup */}
        {isOpened && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              {/* Close Icon */}
              <MdClose
                className="top-4 right-4 h-6 w-6 text-gray-500 cursor-pointer"
                onClick={handleSubmited}
              />
              <h2 className="text-red-500 text-2xl mb-4 text-center">{`Login & Register`}</h2>
              <form className="mb-4" onSubmit={handleSubmitLogin}>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                />
                <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md w-full mb-4">
                  Login
                </button>
              </form>
              <div className="flex items-center justify-center mb-4">
                <hr className="border-gray-300 flex-grow" />
                <p className="mx-4 text-gray-500">OR</p>
                <hr className="border-gray-300 flex-grow" />
              </div>
              <Link href="/register" className="block" onClick={handleSubmited}>
                <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full mb-4">
                  Register
                </button>
              </Link>
              <p className="text-center text-red-500 underline cursor-pointer">Forgot Password</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
