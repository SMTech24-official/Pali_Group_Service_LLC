import React from "react";

const CaseStudy = () => {
  return (
    <div className="max-w-[1440px] mx-auto pb-[120px] px-4">
      {/* Header Section */}
      <div className="w-full lg:w-[610px] mx-auto text-center">
        <p className="text-gray-700 border border-gray-300 rounded-[32px] mx-auto mb-5 py-2 px-4 inline-block">
          Case Studies
        </p>
        <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-gray-800 leading-tight">
          Delivering Excellence in Pali
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-10 mt-3">
          Explore how Pali Group Service overcomes challenges to deliver
          high-quality, compliant, and reliable solutions.
        </p>
      </div>

      {/* Case Study Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-4 lg:px-0">
        {/* Image Section */}
        <div className="relative">
          <div className="w-full h-full overflow-hidden rounded-[20px] flex">
            <img
              src="/images/case1.png"
              alt="Case Study Before"
              className="w-1/2 h-auto object-cover"
            />
            <img
              src="/images/case2.png"
              alt="Case Study After"
              className="w-1/2 h-auto object-cover"
            />
          </div>
          {/* Overlay Button */}
          <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFFCC] w-[100px] h-[100px] rounded-full text-gray-800 font-bold px-6 py-2 text-default border-2 border-[#FFFFFF]">
            Explore
          </button>
        </div>

        {/* Text Content Section */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-[24px] font-bold text-default">
            Hospital Emergency Room Renovation
          </h2>
          <p className="text-gray text-base sm:text-lg mt-3 mb-8">
            Modernized emergency room with improved efficiency, safety
            compliance, and enhanced patient flow, completed ahead of schedule.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium text-base sm:text-lg underline"
          >
            Check Full Casestudies
          </a>
        </div>

        {/* text content */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-[24px] font-bold text-default">
            Outpatient Clinic Expansion
          </h2>
          <p className="text-gray text-base sm:text-lg mt-3 mb-8">
            Successfully expanded outpatient clinic capacity using efficient
            construction methods, ensuring HCAi compliance, zero downtime.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium text-base sm:text-lg underline"
          >
            Check Full Casestudies
          </a>
        </div>
        {/* image */}
        <div className="relative">
          <div className="w-full h-full overflow-hidden rounded-[20px] flex">
            <img
              src="/images/case3.png"
              alt="Case Study Before"
              className="w-1/2 h-auto object-cover"
            />
            <img
              src="/images/case4.png"
              alt="Case Study After"
              className="w-1/2 h-auto object-cover"
            />
          </div>
          {/* Overlay Button */}
          <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFFCC] w-[100px] h-[100px] rounded-full text-gray-800 font-bold px-6 py-2 text-default border-2 border-[#FFFFFF]">
            Explore
          </button>
        </div>

        {/* image */}
        <div className="relative">
          <div className="w-full h-full overflow-hidden rounded-[20px] flex">
            <img
              src="/images/case5.png"
              alt="Case Study Before"
              className="w-1/2 h-auto object-cover"
            />
            <img
              src="/images/case6.png"
              alt="Case Study After"
              className="w-1/2 h-auto object-cover"
            />
          </div>
          {/* Overlay Button */}
          <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFFCC] w-[100px] h-[100px] rounded-full text-gray-800 font-bold px-6 py-2 text-default border-2 border-[#FFFFFF]">
            Explore
          </button>
        </div>
        {/* text content */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-[24px] font-bold text-default">
            Medical Imaging Facility Construction
          </h2>
          <p className="text-gray text-base sm:text-lg mt-3 mb-8">
            Constructed a state-of-the-art medical imaging facility, delivered
            on time, under budget, and fully compliant with HCAi regulations for
            advanced equipment.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium text-base sm:text-lg underline"
          >
            Check Full Casestudies
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
