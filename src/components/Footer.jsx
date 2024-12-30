import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      className="bg-gray-50 py-12 px-6 md:px-12 lg:px-0 mt-[60px] md:mt-[120px] max-w-[1440px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[1170px] mx-auto">
        <motion.div
          className=" grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-[#E6E8EC]"
          variants={containerVariants}
        >
          {/* Left Section - Logo and Description */}
          <motion.div
            className="flex flex-col  items-start  text-left md:border-r-2 border-[#E6E8EC] pr-[64px]"
            variants={itemVariants}
          >
            <img
              src="/images/Logo-header.svg"
              alt="Pali Group Services"
              className="w-[160px] mb-4"
            />
            <p className="text-gray text-lg leading-relaxed">
              Simplify Healthcare Construction Inspections and Build a Safer,
              Happier Future.
            </p>
          </motion.div>

          {/* Center Section - Navigation Links */}
          <motion.div
            className="flex flex-col md:border-r-2 border-[#E6E8EC]"
            variants={itemVariants}
          >
            <ul className="text-gray font-semibold space-y-8">
              <li>
                <a href="#home" className="hover:text-primary">
                  Home
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
                <a href="#why-us" className="hover:text-primary">
                  Why Choose Us
                </a>
              </li>

              <li>
                <a href="#blog" className="hover:text-primary">
                  Blog
                </a>
              </li>

              <li className="pb-6">
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right Section - Social Media */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <p className="text-default font-medium mb-8 text-start">
              Follow us on
            </p>
            <div className="flex space-x-4 pb-7 md:pb-0">
              <a href="https://www.facebook.com/people/Pali-Group-Services-LLC/61571270249881/?mibextid=wwXIfr" target="_blank"  className="w-8 h-8 rounded-[8px] bg-primary flex justify-center items-center">
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/paligroupservicesllc/?igsh=NTc4MTIwNjQ2YQ%3D%3D#" target="_blank" className="w-8 h-8 border-[1.5px] border-primary rounded-[8px] flex items-center justify-center">
              <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-primary">
                <FaTwitter className="w-8 h-8 text-primary" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="text-center mt-10 text-gray"
          variants={itemVariants}
        >
          © 2024 Pali Group Services, LLC. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
