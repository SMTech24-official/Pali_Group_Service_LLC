import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  // Animation variants
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
      className="bg-gray-50 md:pb-[120px] pb-[60px] px-4 md:px-8 max-w-[1440px] mx-auto"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0"
        variants={itemVariants}
      >
        {/* <div className="w-full lg:w-[453px] text-center md:text-start">
          
          <h2 className="text-3xl leading-[30px] md:text-[40px] font-bold mb-2 md:mb-4 md:leading-[48px] text-center lg:text-left">
            Our Inspection Services Provided By Pali Group Services
          </h2>
          <p className="text-gray text-sm md:text-[18px] leading-[28px] w-full lg:w-[573px] text-center lg:text-left">
            We provide inspector of Record (IOR) service for any size projects
            under the jurisdiction of OSHPD/HCAi. Our scope of services includes
            ensuring that a construction project compiles with the approved
            construction drawings, relevant codes, regulations and safety
            standards specific to healthcare facilities.
          </p>
        </div>
        <div className="md:w-[555px] w-full">
          <h2 className="md:text-[24px] text-[20px] leading-[24px]  font-semibold text-[#000000] mb-3 text-center lg:text-left">
            Pali Group Services: Comprehensive IOR Inspections with Firestop
            Expertise
          </h2>
          <p className="text-gray text-sm md:text-[18px] leading-[28px] w-full lg:w-[573px] text-center lg:text-left mb-3">
            In California, specialized training is required for Local/Regional
            Third-Party Firestop Special Inspectors. Christina Pali holds the
            prestigious Premier Certification from the International Firestop
            Council (IFC), a program that is formally recognized by the HCAI
            (Health Care Access and Information, formerly OSHPD) as providing
            sufficient and suitable firestop knowledge.
          </p>
          <p className="text-gray text-sm md:text-[18px] leading-[28px] w-full lg:w-[573px] text-center lg:text-left">
            Pali Group Services offers a one-stop solution for Inspection of
            Record (IOR) inspections, which includes firestopping special
            inspections. This integrated service eliminates the need for hiring
            a separate special inspection company, streamlining your inspection
            process and ensuring compliance with state regulations.
          </p>
        </div> */}
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center"
        variants={containerVariants}
      >
        {/* Service 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <img
            src="images/service1.png"
            alt="Constructability Review"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4 text-default">
              Constructability Review
            </h3>
            <p className="text-gray text-sm md:text-base mb-3">
              Our constructability review ensures that healthcare facility
              construction or renovation adheres to all relevant standards and
              regulations, including the California Building Code (CBC), the
              OSHPD/HCAi-approved Test, Inspection, and Observation (TIO)
              program, and applicable local codes.
            </p>
            <p className="text-gray text-sm md:text-base">
              Our thorough review process helps ensure project drawing are
              address and comprehensive all essential, often overlooked
              requirements, eliminating potential gaps in code compliance or
              design.
            </p>
          </div>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <img
            src="/images/service2.png"
            alt="Site Inspections"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4">Inspections</h3>
            <p className="text-gray text-sm md:text-base">
              In accordance with Chapter 7 of the California Administrative
              Code, we perform all required periodic and ongoing inspections for
              both off-site fabrication and on-site construction activities.
              These inspections ensure that work conforms to approved
              construction drawings, specifications, and regulatory
              requirements. We pride ourselves on fully understanding each phase
              of the construction process, ensuring quality and consistency
              throughout.
            </p>
          </div>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <img
            src="images/service3.png"
            alt="Documentation"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4">Documentation</h3>
            <p className="text-gray text-sm md:text-base">
              Maintaining thorough records of inspections, testing results,
              deviations from approved plans, and any corrective actions taken,
              Proper documentation is crucial for compliance with the permitted
              approved OSHPD/HCAi Plans.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
