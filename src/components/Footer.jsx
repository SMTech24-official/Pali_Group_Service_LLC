import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Scroll to section on navigation (e.g., Home or Services)
  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-primary">
      <motion.footer
        className=" py-12 px-6 md:px-12 lg:px-0 pt-[60px] md:pt-[120px] max-w-[1440px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <div className="max-w-[1170px] mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-[#E6E8EC]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {/* Left Section - Logo and Description */}
            <motion.div
              className="flex flex-col items-start text-left md:border-r-2 border-[#E6E8EC] pr-[64px]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <img
                src="/images/logo-w.svg"
                alt="Hospital construction in San Francisco Bay Area"
                className="w-[160px] mb-4"
              />
              <p className="text-[#FFFFFF] text-lg leading-relaxed">
                Simplify Healthcare Construction Inspections and Build a Safer,
                Happier Future.
              </p>
            </motion.div>

            {/* Center Section - Navigation Links */}
            <motion.div
              className="flex flex-col md:border-r-2 border-[#E6E8EC]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <ul className="text-[#FFFFFF] font-semibold space-y-8">
                <li>
                  <a
                    // href="#home"
                    onClick={() => scrollToSection("home")}
                    className="cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    // href="#services"
                    onClick={() => scrollToSection("services")}
                    className="cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <Link to="/aboutUs" className="cursor-pointer">
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    // href="#why-us"
                    onClick={() => scrollToSection("why-us")}
                    className="cursor-pointer"
                  >
                    Why Choose Us
                  </a>
                </li>

                <li>
                  <Link to="/blog" className="">
                    Blog
                  </Link>
                </li>

                <li className="pb-6">
                  <a
                    // href="#contact"
                    onClick={() => scrollToSection("contact")}
                    className="cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Right Section - Social Media */}
            <motion.div
              className="flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <p className="text-[#FFFFFF] font-medium mb-8 text-start">
                Follow us on
              </p>
              <div className="flex space-x-4 pb-7 md:pb-0">
                <a
                  href="https://www.facebook.com/people/Pali-Group-Services-LLC/61571270249881/?mibextid=wwXIfr"
                  target="_blank"
                  className="w-8 h-8 rounded-[8px] bg-primary flex justify-center items-center border border-[#FFFFFF80]"
                >
                  <FaFacebookF className="text-white w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/paligroupservicesllc/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
                  target="_blank"
                  className="w-8 h-8 border-primary rounded-[8px] flex items-center justify-center border border-[#FFFFFF80]"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section - Copyright */}
          <motion.div
            className="text-center mt-10 text-[#FFFFFF]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            © 2008 Pali Group Services, LLC. All rights reserved.
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
