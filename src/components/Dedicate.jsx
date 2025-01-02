import React from "react";

const Dedicate = () => {
  return (
    <div className="bg-primary mb-[60px] md:mb-[120px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:justify-between py-10 px-5 md:px-0 md:py-20  w-full">
        {/* Text Section */}
        <div className="md:w-1/2 w-full md:text-left">
          <h1 className="text-white text-center md:text-start text-[25px] md:text-[40px] font-bold leading-[40px] md:leading-[48px] mb-8">
            Our Services
          </h1>
          <p className="text-white text-sm md:text-[18px] leading-relaxed mb-8 text-center md:text-start">
            We provide comprehensive IOR services, including firestopping
            inspections, specialty systems assessments, and regulatory
            compliance evaluations. Our expert team ensures projects meet all
            applicable standards, with a focus on efficiency and
            cost-effectiveness.
          </p>
          <h1 className="text-[24px] font-semibold text-white mb-3 text-center md:text-start">
            Specialized Firestopping Expertise
          </h1>
          <p className="text-white text-sm md:text-[18px] leading-relaxed mb-8 text-center md:text-start">
            Christina Pali holds the Premier Certification from the
            International Firestop Council (IFC), recognized by HCAi. This
            allows us to integrate firestopping inspections into our IOR
            services, streamlining the process and ensuring full compliance with
            California regulations.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-[522px] w-full mb-8 md:mb-0">
          <img
            src="/images/aboutpic.png"
            alt="Inspection Process"
            className="rounded-[20px] w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Dedicate;
