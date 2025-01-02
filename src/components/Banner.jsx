import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      className="relative overflow-hidden md:pb-[480px] pb-40"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/Pali-image.svg"
          alt="Background"
          className="w-full h-full lg:h-[990px]  object-cover"
        />
        {/* <div className="absolute inset-0"></div> */}
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:pt-28">
        {/* Left Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8 lg:mb-0 lg:w-[935px] mx-auto w-full">
            <motion.div
              className="text-sm text-black bg-white rounded-full py-2 lg:w-[435px] w-full mx-auto font-semibold mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Your One-Stop Shop for Inspection & Reporting Services
            </motion.div>
            <motion.h1
              className="text-[28px] lg:text-[56px] font-bold text-default leading-[28px] lg:leading-[62px] mb-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Comprehensive IOR Solutions <br /> for Any Size Project
            </motion.h1>
            <motion.p
              className="text-[#262626] mb-8 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Pali Group Services, LLC, established in 2008, is a certified
              Women-Owned Business Enterprise (WBE) specializing in Inspector of
              Record (IOR) services for the construction and healthcare sectors.
              With over 16 years of experience, we ensure regulatory compliance
              and high-quality outcomes across a wide range of projects,
              including general construction, remodels, and skilled nursing
              facilities.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
