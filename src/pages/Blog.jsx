import React from "react";

const Blog = () => {
  return (
    <div className="max-w-[1440px] mx-auto pt-20 px-4 sm:px-8 lg:px-16">
      <div>
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Ensuring Regulatory Compliance
        </h1>
        <img
          src="/images/blog111.png"
          alt="blog image"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-12 lg:mt-[120px]">
          <h2 className="text-[20px] sm:text-[24px] font-bold text-default">
            About Lucitics
          </h2>
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Healthcare facilities are subject to a variety of regulations
            designed to protect patient well-being, staff safety, and overall
            public health. The California Building Standards Code (CBC), OSHPD
            regulations, and HCAi guidelines establish specific requirements for
            the construction of healthcare facilities, covering areas such as
            fire and life safety, structural integrity, accessibility,
            electrical and plumbing systems, and specialized healthcare systems.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Regular inspections throughout the construction process help ensure
            these standards are consistently met. The Inspector of Record (IOR)
            oversees the implementation of these regulations, verifies
            compliance at each stage, and facilitates any necessary corrections
            before they impact project completion.
          </p>
        </div>
        <div className="mt-12 lg:mt-[80px]">
          <h2 className="text-[20px] sm:text-[24px] font-bold text-default">
            Challenge
          </h2>
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Designing a Sales Analytics Dashboard App presents a myriad of
            challenges, each demanding a unique set of skills and
            considerations. The primary challenge lies in establishing a clear
            information hierarchy, ensuring that the display of comprehensive
            sales data remains informative without overwhelming users. Striking
            a balance between an aesthetically pleasing and functional interface
            is crucial, especially when dealing with complex data
            visualizations.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Security concerns are paramount, given the sensitivity of sales
            data, requiring the implementation of robust measures to protect
            user information. Integrating predictive analytics features to
            anticipate future sales trends demands advanced design thinking and
            effective presentation of insights.
          </p>
        </div>
        <div className="mt-12 lg:mt-20">
          <img
            src="/images/blog22.png"
            alt="blog image"
            className="w-full max-w-[1170px] mx-auto"
          />
          <div className="mt-12 lg:mt-20">
            <h2 className="text-[20px] sm:text-[24px] font-bold text-default">
              Process
            </h2>
            <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
              Beginning with a comprehensive understanding of user requirements,
              the designer collaborates closely with stakeholders to define the
              key metrics and data points crucial for sales analytics. This
              research phase serves as the foundation for subsequent design
              decisions. Moving into the information architecture stage, the
              designer organizes the data in a logical and user-friendly manner.
            </p>
            <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
              Wireframing and prototyping follow, allowing for the creation of
              visual representations and interactive models that help refine the
              app's structure. As the design progresses, the product designer
              delves into the visual aspect, carefully selecting color schemes,
              typography, and graphical elements to create an aesthetically
              pleasing and engaging interface.
            </p>
          </div>
        </div>
        <div className="mt-12 lg:mt-20">
          <img
            src="/images/blog33.png"
            alt="blog image"
            className="w-full max-w-[1170px] mx-auto"
          />
          <div className="mt-12 lg:mt-20">
            <h2 className="text-[20px] sm:text-[24px] font-bold text-default">
              Result
            </h2>
            <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
              Initial research provides a foundation by understanding user needs
              and business requirements. User testing during wireframing and
              prototyping refines the app's structure based on valuable
              feedback, ensuring an optimal user experience.
            </p>
            <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
              The visual design phase brings forth an engaging and cohesive
              aesthetic, while collaboration with developers ensures technical
              feasibility. Iterative testing throughout development generates
              insights for usability and functionality improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
