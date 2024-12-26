import React from "react";

const Dedicate = () => {
  return (
    <div className="bg-primary mb-[60px] md:mb-[120px]">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between py-10 px-5 md:px-0 md:py-20  w-full">
        {/* Text Section */}
        <div className="md:w-1/2 w-full md:text-left">
          <h1 className="text-white text-center md:text-start text-[25px] md:text-[40px] font-bold leading-[40px] md:leading-[48px] mb-8">
            Dedicated to Excellence In the Inspection Process
          </h1>
          <p className="text-white text-sm md:text-[18px] leading-relaxed">
            Pali Group Services offers comprehensive Inspector of Record (IOR)
            services for HCAi projects, overseeing every phase from inception to
            completion. We collaborate closely with owners, designers &
            contractors throughout all stages of construction, ensuring that
            inspections are conducted thoroughly and that the project progresses
            on schedule, meeting all required standards for timely and
            successful completion.
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
