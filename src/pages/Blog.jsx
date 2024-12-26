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
          Importance of Fire and Life Safety
        </h1>
        <img
          src="/images/blog2.png"
          alt="blog image"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Fire and life safety standards ensure the protection of patients,
            staff, and visitors in healthcare facilities. By adhering to
            stringent regulations, healthcare projects prioritize the safety of
            everyone involved. These standards address fire suppression
            systems, evacuation routes, and emergency response systems.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            The Inspector of Record collaborates with project teams to verify
            compliance with these critical requirements, ensuring healthcare
            facilities are equipped to handle emergencies effectively.
          </p>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Structural Integrity in Healthcare Projects
        </h1>
        <img
          src="/images/blog3.png"
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
          src="/images/blog4.png"
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
          src="/images/blog5.png"
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
