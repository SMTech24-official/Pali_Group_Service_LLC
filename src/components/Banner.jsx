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
              Founded in 2008, Pali Group Services, LLC (PGS) has established
              itself as a trusted leader in providing Inspector of Record (IOR)
              services to both the construction and healthcare sectors. With
              over 16 years of specialized experience, we are committed to
              ensuring strict compliance with regulatory requirements, managing
              comprehensive project inspections, and consistently delivering
              high-quality outcomes for our clients.
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

        <div className="bg-white shadow-md rounded-lg p-[30px] md:mt-[60px] mt-[25px]">
          <p className="text-gray mb-3">
            Our portfolio includes the successful completion of hundreds of
            projects across diverse industries, showcasing our proficiency in
            overseeing complex initiatives from inception to completion. In
            addition to our extensive work in general construction, we have
            significant expertise in remodels, skilled nursing facilities and
            rebuild projects, having contributed to several multi-million-dollar
            rebuild that demanded precision, strategic foresight, and expert
            execution.
          </p>
          <p className="text-gray">
            At PGS, we are driven by a core set of values: integrity,
            reliability, and an unwavering commitment to excellence. Our
            collaborative approach involves working closely with project owners,
            contractors, and architects to ensure that every project complies
            with HCAi standards and other regulatory requirements, while
            exceeding client expectations.-
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
