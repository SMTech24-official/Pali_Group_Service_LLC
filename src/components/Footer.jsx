import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 sm:px-12 mt-[120px]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-[#E6E8EC]">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-r-2 border-[#E6E8EC] pr-[64px]">
          <img
            src="/images/footerLogo.png"
            alt="Pali Group Services"
            className="w-[150px] mb-4"
          />
          <p className="text-gray text-lg leading-relaxed">
            Simplify Healthcare Construction Inspections and Build a Safer,
            Happier Future.
          </p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex flex-col  border-r-2 border-[#E6E8EC]">
          <ul className="text-gray font-semibold space-y-8">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-primary">
                Why Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#case-studies" className="hover:text-primary">
                Casestudies
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-primary mb-6">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex flex-col">
          <p className="text-default font-medium mb-8 text-start">Follow us on</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-primary">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-800 hover:text-primary">
              <FaInstagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-800 hover:text-primary">
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-10 text-gray">
        © 2024 Pali Group Services, LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
