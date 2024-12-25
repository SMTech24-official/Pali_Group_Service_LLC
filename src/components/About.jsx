import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-[1170px] mx-auto mb-[60px] md:mb-[120px] px-5 md:px-0" id="about">
      <div className="flex gap-8 md:flex-row flex-col">
        <div className="bg-primary md:w-[570px] p-10 rounded-[20px] w-full">
          <p className="text-white border border-gray px-4 py-1 inline-block rounded-[30px] mb-4">
           About Us
          </p>
          <h1 className="text-white text-[40px] font-bold leading-[48px] mb-8">
            Dedicated to Excellence In the Inspection Process
          </h1>
          <img src="/images/aboutpic.png" alt="about image" />
          <p className="text-white mt-8">
            Pali Group Services offers comprehensive Inspector of Record (IOR)
            services for HCAi projects, overseeing every phase from inception to
            completion. We collaborate closely with owners, designers &
            contractors throughout all stages of construction, ensuring that
            inspections are conducted thoroughly and that the project progresses
            on schedule, meeting all required standards for timely and
            successful completion.
          </p>
        </div>
        <div>
          <div className="border border-[#ADADAD] rounded-[20px] md:w-[570px] w-full p-10 mb-8">
            <img
              className="w-[120px]"
              src="/images/aboutimage2.png"
              alt="about img"
            />
            <h2 className="text-default font-bold text-[24px] mt-9 mb-5">
              Founder of Pali Group Services
            </h2>
            <p className="text-gray">
              Christina Pali brings over 30 years of experience in construction
              management to her role as founder of Pali Group Services,
              established in 2008. She holds a Bachelor of Science with an
              emphasis in Biochemistry from the University of California...
              <Link to="/aboutUs" className="text-blue-600 font-bold underline">
                more
              </Link>
            </p>
          </div>
          <div className="border border-[#ADADAD] rounded-[20px] md:w-[570px] w-full p-10">
            <img
              className="w-[120px]"
              src="/images/aboutimage1.png"
              alt="about img"
            />
            <h2 className="text-default font-bold text-[24px] mt-9 mb-5">
              Founder of Pali Group Services
            </h2>
            <p className="text-gray">
              Miceal Moran brings over 30 years of experience in construction
              and design to the team. A graduate of California Polytechnic State
              University, San Luis Obispo with a background in architecture and
              drafting, Miceal is a season professional with deep
              industry...
              <Link to="/aboutUs" className="text-blue-600 font-bold underline">
                more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
