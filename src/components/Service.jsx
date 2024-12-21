import React from "react";

const Service = () => {
  return (
    <div className="bg-gray-50 md:py-[120px] py-[60px] px-4 md:px-8 max-w-[1440px] mx-auto" id="services">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <div className="w-full lg:w-[453px] text-center md:text-start">
          <p className="text-[#131232] border border-gray px-4 py-1 inline-block rounded-[30px] mb-4">
            Our Services
          </p>
          <h2 className="text-3xl leading-[30px] md:text-[40px] font-bold mb-2 md:mb-4 md:leading-[48px] text-center lg:text-left">
            Our Inspection <br /> Services Designed for Pali
          </h2>
        </div>
        <p className="text-gray text-sm md:text-[18px] leading-[28px] w-full lg:w-[573px] text-center lg:text-left">
          An Inspector of Record (IOR) for small projects under the jurisdiction
          of OSHPD/HCAi. Our scope of services includes ensuring that a
          construction project complies with the approved construction drawings,
          relevant codes, regulations, and safety standards specific to
          healthcare facilities.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0">
          <img
            src="images/service1.png"
            alt="Constructability Review"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4 text-default">
              Constructability Review
            </h3>
            <p className="text-gray text-sm md:text-base">
              Verifying that the construction or renovation of healthcare
              facilities adheres to California Building Standards (CBC),
              OSHPD/HCAi permitted TIO, and any local requirements. This
              includes fire, safety, accessibility, and structural integrity
              standards specific to healthcare facilities.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0">
          <img
            src="/images/service2.png"
            alt="Site Inspections"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4">Site Inspections</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Conducting on-site inspections to monitor ongoing construction
              activities, ensuring that they align with approved plans and
              specifications.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0">
          <img
            src="images/service3.png"
            alt="Documentation"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4">Documentation</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Maintaining thorough records of inspections, testing results,
              deviations from approved plans, and any corrective actions taken.
              Proper documentation is crucial for compliance with the permitted
              approved OSHPD/HCAi Plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
