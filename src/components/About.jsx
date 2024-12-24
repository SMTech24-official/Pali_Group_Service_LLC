import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="max-w-[1440px] mx-auto bg-[#EBEBEB] mb-16 md:mb-[120px] py-20 px-5 sm:px-10 lg:px-[97px]"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Section 1: About Us */}
      <motion.div
        className="text-center"
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          className="text-sm font-semibold text-gray border border-gray rounded-[30px] inline-block px-4 py-2"
          variants={fadeIn}
        >
          About Us
        </motion.p>
        <motion.h2
          className="text-xl md:text-3xl lg:text-[40px] font-bold text-default my-3 md:leading-[48px] leading-[20px] md:w-[576px] mx-auto w-full"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Dedicated to Excellence In the Inspection Process
        </motion.h2>
        <motion.p
          className="text-gray text-sm md:text-base"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          Pali Group Services offers comprehensive Inspector of Record (IOR)
          services for HCAi projects, overseeing every phase from inception to
          completion. We collaborate closely with owners, designers &
          contractors throughout all stages of construction, ensuring that
          inspections are conducted thoroughly and that the project progresses
          on schedule, meeting all required standards for timely and successful
          completion.
        </motion.p>
      </motion.div>

      {/* Section 2: Our Mission */}
      <motion.div
        className="pt-[60px] pb-20 text-center"
        variants={fadeInUp}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-default text-[20px] md:text-[24px] font-bold"
          variants={fadeIn}
        >
          Our mission
        </motion.h2>
        <motion.p
          className="text-gray text-sm md:text-base px-2 md:px-10"
          variants={fadeInUp}
          transition={{ delay: 1 }}
        >
          We are committed to providing high-quality inspection and
          documentation services for any size construction and renovation
          project. We take pride in helping you ensure that your project is
          compliant and on track.
        </motion.p>
      </motion.div>

      {/* Section 3: Founder Info */}
      <motion.div
        className="flex flex-col items-center justify-center text-center"
        variants={fadeInUp}
        transition={{ delay: 1.2 }}
      >
        <motion.img
          src="/images/aboutimage2.png"
          alt="about image"
          className=""
          variants={fadeIn}
        />
        <motion.h3
          className="text-[20px] md:text-[24px] font-bold text-default py-5 md:py-10"
          variants={fadeInUp}
        >
          Founder of Pali Group Services
        </motion.h3>
        <motion.p
          className="text-gray text-sm md:text-base px-4 sm:px-10"
          variants={fadeInUp}
        >
          Christina Pali brings over 30 years of experience in construction
          management to her role as founder of Pali Group Services, established
          in 2008. She holds a Bachelor of Science with an emphasis in
          Biochemistry from the University of California, Davis, and completed
          advanced Master’s studies in Civil Engineering at California State
          University, Sacramento. As a Women Business Enterprise (WBE),
          Christina is committed to promoting diversity in the industry.
        </motion.p>
        <motion.p
          className="text-gray py-5 text-sm md:text-base px-4 sm:px-10"
          variants={fadeInUp}
        >
          Christina’s professional qualifications include certifications as an A
          License OSHPD/HCAi Inspector of Record, NITC 6020 Medical Gas
          Inspector, and Asbestos Hazard Emergency Response Act (AHERA)
          Certificate. She is also certified as a 40-hour HAZWOPER professional
          and a DHS Lead Inspector/Assessor.
        </motion.p>
        <motion.p
          className="text-gray py-5 text-sm md:text-base px-4 sm:px-10"
          variants={fadeInUp}
        >
          An active member of multiple professional organizations, Christina is
          affiliated with the International Federation of Professional and
          Technical Engineers and the Soil Science Society of America, further
          demonstrating her commitment to ongoing professional development and
          industry leadership.
        </motion.p>
        <motion.p
          className="text-gray text-sm md:text-base px-4 sm:px-10"
          variants={fadeInUp}
        >
          Outside of her professional life, Christina is a dedicated mother who
          enjoys sailing, hiking, and exploring various outdoor activities.
          Passionate about healthy cooking, she values quality time spent with
          family and friends.
        </motion.p>
      </motion.div>

      {/* Section 4: Quality Assurance Specialist */}
      <motion.div
        className="flex flex-col items-center justify-center text-center"
        variants={fadeInUp}
        transition={{ delay: 1.4 }}
      >
        <motion.img
          src="/images/aboutimage1.png"
          className="pt-10 md:pt-20 pb-5 md:pb-10"
          alt="about image"
          variants={fadeIn}
        />
        <motion.h3
          className="text-[20px] md:text-[24px] font-bold text-default pb-5 md:pb-10"
          variants={fadeInUp}
        >
          Quality Assurance and Control Specialist of Pali Group Services
        </motion.h3>
        <motion.p
          className="text-gray pb-5 text-center text-sm md:text-base px-4 sm:px-10"
          variants={fadeInUp}
        >
          Miceal Moran brings over 30 years of experience in construction and
          design to the team. A graduate of California Polytechnic State
          University, San Luis Obispo with a background in architecture and
          drafting, Miceal is a seasoned professional with deep industry
          knowledge. As a Quality Assurance and Control Specialist, he ensures
          that projects are executed efficiently, in full compliance with
          regulations, and to the highest standards of quality.
        </motion.p>
        <motion.p
          className="text-gray pb-5 text-center text-sm md:text-base px-4 sm:px-10"
          variants={fadeInUp}
        >
          Beyond his professional accomplishments, Miceal is a dedicated father
          of four. He is passionate about coaching and mentoring youth in
          sports, and enjoys drawing, painting, and creating stylized portrait
          art. An avid snow skier and musician, Miceal has a broad range of
          personal interests that reflect his commitment to both creativity and
          an active lifestyle.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
