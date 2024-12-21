import React from "react";
import { motion } from "framer-motion";

const Choose = () => {
  const features = [
    {
      title: "Expertise",
      description: "25 Years of industry experience & a team of qualified professionals.",
      icon: "/images/expertise.png",
      bgColor: "bg-white",
      CardBgColor: "bg-[#131232]", // Dark background for the first card
    },
    {
      title: "Thoroughness",
      description: "We leave no stone unturned in our inspections and reports.",
      icon: "/images/through.png",
      bgColor: "bg-[#FF5FA7]",
      CardBgColor: "bg-white",
    },
    {
      title: "Clarity",
      description:
        "Our inspections and summaries are presented in clear, actionable terms, making it easy to understand & implement.",
      icon: "/images/Lectern.png",
      bgColor: "bg-[#F66742]",
      CardBgColor: "bg-white",
    },
    {
      title: "Customer-Focused",
      description:
        "We prioritize your needs and offer tailored solutions for your specific requirements to keep projects on track.",
      icon: "/images/expertise.png",
      bgColor: "bg-[#67C99E]",
      CardBgColor: "bg-white",
    },
    {
      title: "Reliability",
      description:
        "Timely, accurate reports and dependable advice when to build trust.",
      icon: "/images/through.png",
      bgColor: "bg-[#BC7DFF]",
      CardBgColor: "bg-white",
    },
    {
      title: "Client Testimonials",
      description: "Showcase positive feedback from past clients to build trust.",
      icon: "/images/Lectern.png",
      bgColor: "bg-[#40B1EA]",
      CardBgColor: "bg-white",
    },
  ];

  return (
    <div className="bg-[#EBEBEB]" id="why-us">
      <motion.section
        className="py-[80px] lg:py-[120px] px-4 sm:px-8 bg-gray-50 max-w-[1440px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Header Section */}
          <motion.p
            className="text-gray-700 border border-gray-300 rounded-[32px] mx-auto mb-5 py-2 px-4 inline-block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.p>
          <motion.h1
            className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-gray-800 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            Best Factors to Choose Pali <br /> Construction Service
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-10 mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            With Pali Group Service, your project is in expert hands.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`rounded-[20px] shadow-sm p-6 md:p-8 md:w-[320px] w-full border border-[#ADADAD] ${feature.CardBgColor}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2, // Stagger animation for each card
                }}
              >
                {/* Icon Section */}
                <div
                  className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-6 ${feature.bgColor}`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-[28px] h-[28px]"
                  />
                </div>
                {/* Title and Description */}
                <h3
                  className={`text-lg sm:text-xl font-bold mt-6 mb-4 ${
                    feature.CardBgColor === "bg-[#131232]"
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    feature.CardBgColor === "bg-[#131232]"
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Choose;
