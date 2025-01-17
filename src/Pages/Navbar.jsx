import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">Your Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className={({ isActive }) => 
                  isActive ? "bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                  "text-white hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                }>
                  Home
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => 
                  isActive ? "bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                  "text-white hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                }>
                  Login
                </NavLink>
                <NavLink to="/signup" className={({ isActive }) => 
                  isActive ? "bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                  "text-white hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                }>
                  Register
                </NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }>
              Home
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => 
              isActive ? "bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }>
              Login
            </NavLink>
            <NavLink to="/signup" className={({ isActive }) => 
              isActive ? "bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }>
              Register
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};