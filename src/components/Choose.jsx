import React from "react";

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
   <div className="bg-[#EBEBEB]">
     <section className="py-[80px] lg:py-[120px] px-4 sm:px-8 bg-gray-50 max-w-[1440px] mx-auto">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <p className="text-gray-700 border border-gray-300 rounded-[32px] mx-auto mb-5 py-2 px-4 inline-block">
          Why Choose Us
        </p>
        <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-gray-800 leading-tight">
          Best Factors to Choose Pali <br /> Construction Service
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-10 mt-3">
          With Pali Group Service, your project is in expert hands.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-[20px] shadow-sm p-6 md:p-8  md:w-[320px] w-full border border-[#ADADAD] ${feature.CardBgColor}`}
            >
              {/* Icon Section */}
              <div
                className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-6 ${feature.bgColor}`}
              >
                <img src={feature.icon} alt={feature.title} className="w-[28px] h-[28px]" />
              </div>
              {/* Title and Description */}
              <h3
                className={`text-lg sm:text-xl font-bold mt-6 mb-4 ${
                  feature.CardBgColor === "bg-[#131232]" ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  feature.CardBgColor === "bg-[#131232]" ? "text-white" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default Choose;
