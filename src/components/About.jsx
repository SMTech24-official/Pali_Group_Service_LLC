import React from "react";

const About = () => {
  return (
    <div
      className="max-w-[1440px] mx-auto bg-[#EBEBEB] mb-[120px] py-20 px-5 sm:px-10 lg:px-[97px]"
      id="about"
    >
      {/* Section 1: About Us */}
      <div className="text-center">
        <p className="text-sm font-semibold text-gray border border-gray rounded-[30px] inline-block px-4 py-2">
          About Us
        </p>
        <h2 className="text-xl md:text-3xl lg:text-[40px] font-bold text-default my-3 md:leading-[48px] leading-[20px] md:w-[576px] mx-auto w-full">
          Dedicated to Excellence In the Inspection Process
        </h2>
        <p className="text-gray text-sm md:text-base">
          Pali Group Services offers comprehensive Inspector of Record (IOR)
          services for HCAi projects, overseeing every phase from inception to
          completion. We collaborate closely with owners, designers &
          contractors throughout all stages of construction, ensuring that
          inspections are conducted thoroughly and that the project progresses
          on schedule, meeting all required standards for timely and successful
          completion.
        </p>
      </div>

      {/* Section 2: Our Mission */}
      <div className="pt-[60px] pb-20 text-center">
        <h2 className="text-default text-[20px] md:text-[24px] font-bold">
          Our mission
        </h2>
        <p className="text-gray text-sm md:text-base px-2 md:px-10">
          We are committed to providing high-quality inspection and
          documentation services for any size construction and renovation
          project. We take pride in helping you ensure that your project is
          compliant and on track.
        </p>
      </div>

      {/* Section 3: Founder Info */}
      <div className="flex flex-col items-center justify-center text-center">
        <img src="/images/aboutimage2.png" alt="about image" className="" />
        <h3 className="text-[20px] md:text-[24px] font-bold text-default py-5 md:py-10">
          Founder of Pali Group Services
        </h3>
        <p className="text-gray text-sm md:text-base px-4 sm:px-10">
          Christina Pali brings over 30 years of experience in construction
          management to her role as founder of Pali Group Services, established
          in 2008. She holds a Bachelor of Science with an emphasis in
          Biochemistry from the University of California, Davis, and completed
          advanced Master’s studies in Civil Engineering at California State
          University, Sacramento. As a Women Business Enterprise (WBE),
          Christina is committed to promoting diversity in the industry.
        </p>
        <p className="text-gray py-5 text-sm md:text-base px-4 sm:px-10">
          Christina’s professional qualifications include certifications as an A
          License OSHPD/HCAi Inspector of Record, NITC 6020 Medical Gas
          Inspector, and Asbestos Hazard Emergency Response Act (AHERA)
          Certificate. She is also certified as a 40-hour HAZWOPER professional
          and a DHS Lead Inspector/Assessor.
        </p>
        <p className="text-gray py-5 text-sm md:text-base px-4 sm:px-10">
          An active member of multiple professional organizations, Christina is
          affiliated with the International Federation of Professional and
          Technical Engineers and the Soil Science Society of America, further
          demonstrating her commitment to ongoing professional development and
          industry leadership.
        </p>
        <p className="text-gray text-sm md:text-base px-4 sm:px-10">
          Outside of her professional life, Christina is a dedicated mother who
          enjoys sailing, hiking, and exploring various outdoor activities.
          Passionate about healthy cooking, she values quality time spent with
          family and friends.
        </p>
      </div>

      {/* Section 4: Quality Assurance Specialist */}
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/images/aboutimage1.png"
          className="pt-10 md:pt-20 pb-5 md:pb-10"
          alt="about image"
        />
        <h3 className="text-[20px] md:text-[24px] font-bold text-default pb-5 md:pb-10">
          Quality Assurance and Control Specialist of Pali Group Services
        </h3>
        <p className="text-gray pb-5 text-center text-sm md:text-base px-4 sm:px-10">
          Miceal Moran brings over 30 years of experience in construction and
          design to the team. A graduate of California Polytechnic State
          University, San Luis Obispo with a background in architecture and
          drafting, Miceal is a seasoned professional with deep industry
          knowledge. As a Quality Assurance and Control Specialist, he ensures
          that projects are executed efficiently, in full compliance with
          regulations, and to the highest standards of quality.
        </p>
        <p className="text-gray pb-5 text-center text-sm md:text-base px-4 sm:px-10">
          Beyond his professional accomplishments, Miceal is a dedicated father
          of four. He is passionate about coaching and mentoring youth in
          sports, and enjoys drawing, painting, and creating stylized portrait
          art. An avid snow skier and musician, Miceal has a broad range of
          personal interests that reflect his commitment to both creativity and
          an active lifestyle.
        </p>
      </div>
    </div>
  );
};

export default About;
