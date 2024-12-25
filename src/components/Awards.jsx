import React from "react";
import { motion } from "framer-motion";

const Awards = () => {
  // Animation Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Animation duration
      },
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto py-[60px] md:py-[120px] px-4">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible" // Animation triggers when in viewport
        viewport={{ once: false, amount: 0.2 }} // Trigger on each scroll near this section
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-default text-center mb-10">
          Awards & Certifications
        </h1>
      </motion.div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
        {/* Award 1 */}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="/images/award2.png"
            alt="Award 2"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            Medical Gas Inspector, NITC
          </h2>
          <p className="text-[18px] sm:text-[20px] font-bold mt-3">2008</p>
        </motion.div>

        {/* Award 2 */}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="/images/award3.png"
            alt="Award 3"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            International Firestop Council Premier
          </h2>
          <p className="text-[18px] sm:text-[20px] font-bold mt-3">2024</p>
        </motion.div>

        {/* Award 3 */}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Animation repeats on every scroll into view
        >
          <img
            src="/images/award1.png"
            alt="Award 1"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            OSHPD Inspector of Records
          </h2>
          <p className="text-[18px] sm:text-[20px] font-bold mt-3">2008</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
