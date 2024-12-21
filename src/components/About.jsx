import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
      className="max-w-[1440px] mx-auto pb-[60px] md:pb-[120px] lg:pb-[120px] px-4"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} 
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col-reverse lg:flex-row gap-[60px] items-center lg:items-start"
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-auto flex justify-center"
          variants={itemVariants} 
        >
          <img
            className="w-full max-w-[585px]"
            src="/images/about.png"
            alt="about image"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full lg:w-[525px] text-center md:text-start lg:text-start"
          variants={itemVariants} 
        >
          <p className="text-[#131232] border border-gray px-4 py-1 inline-block rounded-[30px] mb-4">
            About Us
          </p>
          <h2 className="text-3xl leading-[35px] md:text-[40px] font-bold mb-4 md:leading-[48px] text-center lg:text-left">
            Dedicated to Excellence in Inspection Oversight
          </h2>
          <p className="text-gray mb-8 text-center lg:text-left">
            Pali Group Service provides inspector of record services for HCAi
            projects, from project beginning to end. Collaborate with the owner,
            designer and contractors during all the stages of construction to
            facilitate proper inspections and timely completion of the job.
          </p>
          <h2 className="text-[24px] text-default font-bold mb-3 text-center lg:text-left">
            Our Mission:
          </h2>
          <p className="text-gray text-center lg:text-left">
            We are committed to providing high-quality inspection and reporting
            services for smaller construction and renovation projects. We take
            pride in helping you ensure that your project is safe, compliant,
            and on track.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
