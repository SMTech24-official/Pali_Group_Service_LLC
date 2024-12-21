import React from "react";

const Banner = () => {
  return (
    <div className="relative  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner-bg.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="text-center mb-8 lg:mb-0 lg:w-[935px] mx-auto w-full">
            <div className="text-sm text-black bg-white rounded-full py-2 lg:w-[435px] w-full mx-auto font-semibold mb-4">
              Your One-Stop Shop for Inspection & Reporting Service
            </div>
            <h1 className="text-[28px] lg:text-[56px] font-bold text-default leading-[28px] lg:leading-[62px] mb-4">
              Comprehensive IOR Solutions <br /> for Any Size Project
            </h1>
            <p className="text-[#666782] mb-8 mt-4">
              Pali Group Services was founded in 2008 by Christina Pali. Christina
              is a UC Davis graduate with a background in geotechnical sciences
              and civil engineering. (Still working on this)
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-[40px] hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          
          
        </div>
        <div className="lg:w-1/2 flex justify-center md:top-20 md:left-[700px] relative pb-20">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
              <h3 className="text-xl font-bold text-default mb-4">What We Do</h3>
              <p className="text-[#666782]">
                We offer comprehensive inspection services, detailed observations,
                thorough reporting, and expert consultation. Our team ensures the
                highest standards in evaluating systems, structures, or processes,
                providing clear, actionable insights for our clients.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;
