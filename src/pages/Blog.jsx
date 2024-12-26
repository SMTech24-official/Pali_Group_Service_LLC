import React from "react";

const Blog = () => {
  return (
    <div
      className="max-w-[1440px] mx-auto pt-20 px-4 sm:px-8 lg:px-16"
      id="blog"
    >
      {/* Blog Header */}
      <div>
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Ensuring Regulatory Compliance
        </h1>
        <img
          src="/images/blog111.png"
          alt="blog image"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Healthcare facilities are subject to a wide range of regulations to
            safeguard patient well-being, staff safety, and overall public
            health. The California Building Standards Code (CBC), OSHPD
            regulations, and HCAi guidelines outline specific requirements for
            healthcare construction, covering areas such as fire and life
            safety, structural integrity, accessibility, electrical and plumbing
            systems, and specialized healthcare systems.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Regular inspections conducted throughout the construction process
            help ensure that these standards are consistently met. The Inspector
            of Record (IOR) monitors the implementation of these codes, verifies
            compliance at each phase, and facilitates any necessary corrections
            before they impact the project's completion.
          </p>
        </div>
      </div>

      {/* Additional Blogs */}
      {/* Blog 2 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Promoting Safety and Quality
        </h1>
        <img
          src="/images/blog222.png"
          alt="blog image"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Healthcare facilities must be built to withstand rigorous demands,
            including the safety Of patients, staff, and visitors, especially in
            the case of natural disasters, emergencies, and health-related
            crises. This makes regular inspections a vital part Of ensuring that
            safety features—such as fire protection systems, emergency exits,
            structural reinforcements, and infection control systems—are
            effectively integrated into the design and construction.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            By conducting periodic and continuous inspections, an Inspector of
            Record can identify potential safety hazards, design flaws, or
            non-compliant elements before they lead to costly delays or safety
            risks. These inspections help to confirm that the construction is
            progressing in alignment with approved designs, specifications, and
            regulatory requirements, while maintaining the highest standards of
            quality.
          </p>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Structural Integrity in Healthcare Projects
        </h1>
        <img
          src="/images/blog333.png"
          alt="blog image"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Structural integrity is a cornerstone of healthcare construction.
            Healthcare facilities must withstand natural disasters, heavy
            equipment loads, and daily operational demands. Properly designed
            and constructed facilities ensure the safety and longevity of
            buildings.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Inspections throughout the construction process ensure adherence to
            design specifications, building codes, and engineering standards.
            This oversight helps identify and address issues early, avoiding
            costly delays.
          </p>
        </div>
      </div>

      {/* Blog 4 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Accessibility Standards in Healthcare
        </h1>
        <img
          src="/images/blog444.png"
          alt="blog image"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Accessibility is a critical aspect of healthcare construction.
            Ensuring that facilities are accessible to all patients, including
            those with disabilities, reflects a commitment to equitable
            healthcare services. This includes ramps, elevators, and
            appropriately designed patient rooms.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Regular inspections verify compliance with accessibility
            requirements, ensuring healthcare facilities are welcoming and
            usable for all.
          </p>
        </div>
      </div>

      {/* Blog 5 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Specialized Healthcare Systems
        </h1>
        <img
          src="/images/blog555.png"
          alt="blog image"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Healthcare facilities rely on specialized systems such as HVAC,
            electrical, plumbing, and medical gas systems to ensure safe and
            effective operations. These systems require precise design and
            installation to meet stringent healthcare standards.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Inspectors monitor the installation and operation of these systems,
            verifying that they meet regulatory requirements and function
            seamlessly within the facility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
