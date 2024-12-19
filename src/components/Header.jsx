import React, { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-primary shadow-md">
      <nav className="max-w-7xl mx-auto  py-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="md:w-[145px] w-auto"
              src="/images/Logo-pali.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Why Us
            </a>
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white font-medium hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Casestudies
            </a>
            <a href="#" className="text-white font-medium hover:text-gray-300">
              FAQ
            </a>
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Blog
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDrawer}
              type="button"
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isDrawerOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-primary transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full text-white">
        <div className="pt-4 pl-4">
            <img
              className="w-[100px]"
              src="/images/Logo-pali.png"
              alt="Logo"
            />
          </div>
          <div className="flex-grow p-4 space-y-4">
            <a href="#" className="block font-medium hover:text-gray-300">
              Home
            </a>
            <a href="#" className="block font-medium hover:text-gray-300">
              Why Us
            </a>
            <a href="#" className="block font-medium hover:text-gray-300">
              Services
            </a>
            <a href="#" className="block font-medium hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="block font-medium hover:text-gray-300">
              Casestudies
            </a>
            <a href="#" className="block font-medium hover:text-gray-300">
              FAQ
            </a>
            <a href="#" className="block font-medium hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="block font-medium hover:text-gray-300">
              Blog
            </a>
          </div>

          
        </div>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </header>
  );
};

export default Header;
