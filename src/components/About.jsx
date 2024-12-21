import React from "react";

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto pb-[60px] md:pb-[120px] lg:pb-[120px] px-4" id="about">
      <div className="flex flex-col-reverse lg:flex-row gap-[60px] items-center lg:items-start">
        {/* Image Section */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            className="w-full max-w-[585px]"
            src="/images/about.png"
            alt="about image"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[525px] text-center md:text-start lg:text-start">
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
        </div>
      </div>
    </div>
  );
};

export default About;
