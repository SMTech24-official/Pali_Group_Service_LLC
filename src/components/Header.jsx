import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    }
  };

  return (
    <>
      <header className="bg-primary shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="max-w-[1440px] mx-auto py-6 px-4 md:px-8">
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
              <button
                onClick={() => scrollToSection("home")}
                className="text-white font-medium hover:text-gray-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-white font-medium hover:text-gray-300"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white font-medium hover:text-gray-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white font-medium hover:text-gray-300"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("casestudies")}
                className="text-white font-medium hover:text-gray-300"
              >
                Casestudies
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white font-medium hover:text-gray-300"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-white font-medium hover:text-gray-300"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white font-medium hover:text-gray-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                type="button"
                className="text-white focus:outline-none"
              >
                {isDrawerOpen ? (
                  "" 
                ) : (
                  <FaBars className="h-6 w-6" /> 
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Drawer Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-[80%] bg-primary transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col h-full text-white">
            <div className="pt-4 pl-4 flex items-center justify-between">
              <img
                className="w-[150px]"
                src="/images/Logo-pali.png"
                alt="Logo"
              />
              <button onClick={toggleDrawer} className="mr-4">
              <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow pl-7 space-y-4 mt-7 ">
              <button
                onClick={() => scrollToSection("home")}
                className="block font-medium hover:text-gray-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="block font-medium hover:text-gray-300"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block font-medium hover:text-gray-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block font-medium hover:text-gray-300"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("casestudies")}
                className="block font-medium hover:text-gray-300"
              >
                Casestudies
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block font-medium hover:text-gray-300"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block font-medium hover:text-gray-300"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block font-medium hover:text-gray-300"
              >
                Blog
              </button>
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

      {/* Spacer for Fixed Header */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Header;
