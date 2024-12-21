import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-[#1a1a42] text-white py-20 px-4 md:px-8"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col justify-center items-center text-center pb-10"
        variants={itemVariants}
      >
        <p className="px-4 py-2 border border-gray-400 rounded-[32px] mb-3">
          Contact Us
        </p>
        <h2 className="text-[28px] md:text-[40px] font-bold leading-snug">
          Let’s Build a Better <br /> Healthcare Future
        </h2>
        <p className="text-[#FFFFFF] text-[16px] md:text-[18px] mt-4">
          Contact Pali Group Service for expert <br /> inspections you can rely on.
        </p>
      </motion.div>

      {/* Form and Contact Info Section */}
      <motion.div
        className="max-w-[915px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {/* Form Section */}
        <motion.div
          className="bg-white text-black p-8 rounded-[20px] shadow-md w-full max-w-[432px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <h2 className="text-center text-[40px] font-bold mb-6 leading-[48px]">
            Be updated <br /> sending request
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray rounded-md"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray rounded-md"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#1a1a42] rounded-[40px] text-white py-[10px] px-[25px] hover:bg-blue-600 transition"
              >
                Submit Request
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="flex flex-col justify-center items-center space-y-6 lg:space-y-4"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-[24px] font-bold mb-4 text-center lg:text-left">
              Direct Contact Information
            </h3>
            <p className="text-[#FFFFFF] text-[16px] lg:text-[18px] mb-8 text-center lg:text-left">
              We always pay attention to our customer words. We don’t miss a
              single word from customers. So you can directly contact us
              through phone, email, or address.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center justify-center lg:justify-start">
                <FaPhoneAlt className="text-blue-400 mr-2" /> (000) 000-0000
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="text-blue-400 mr-2" /> inspections@paligroupservice.com
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaMapMarkerAlt className="text-blue-400 mr-2" /> Place Business
                Location Here
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
