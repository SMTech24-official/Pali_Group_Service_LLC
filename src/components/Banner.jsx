import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:pt-28">
        {/* Left Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }} // Trigger animation on every scroll near this section
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
              Your One-Stop Shop for Inspection & Reporting Service
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
              className="text-[#666782] mb-8 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Pali Group Services was founded in 2008 by Christina Pali. Christina
              is a UC Davis graduate with a background in geotechnical sciences
              and civil engineering. (Still working on this)
            </motion.p>
            <motion.button
              className="bg-primary text-white px-6 py-3 rounded-[40px] hover:bg-blue-700 transition"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 flex justify-center md:top-20 md:left-[700px] relative pb-20"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
            <h3 className="text-xl font-bold text-default mb-4">What We Do</h3>
            <p className="text-[#666782]">
              We offer comprehensive inspection services, detailed observations,
              thorough reporting, and expert consultation. Our team ensures the
              highest standards in evaluating systems, structures, or processes,
              providing clear, actionable insights for our clients.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
