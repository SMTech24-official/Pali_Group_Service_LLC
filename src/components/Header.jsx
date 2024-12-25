import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle navigation or scrolling
  const scrollToSection = (id) => {
    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveSection("home");
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      }
    } else if (id === "about") {
      navigate("/aboutUs");
      setActiveSection("about");
    } else if (id === "blog") {
      navigate("/blog");
      setActiveSection("blog");
    } else if (["why-us", "services", "faq", "contact"].includes(id)) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id);
        }
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
    setIsDrawerOpen(false);
  };

  // Detect scrolling and active section
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    } else if (location.pathname === "/aboutUs") {
      setActiveSection("about");
    } else if (location.pathname === "/blog") {
      setActiveSection("blog");
    }

    const handleScroll = () => {
      if (location.pathname === "/") {
        const sections = ["home", "why-us", "services", "faq", "contact"];
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
            }
          }
        });
      }
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md bg-[#FFFFFF]" : "bg-[#FFFFFF]"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto py-6 px-5 md:px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setActiveSection("home");
              }}
            >
              <img
                className="md:w-[160px] w-auto"
                src="/images/Logo-header.svg"
                alt="Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "about", label: "About Us" },
                { id: "why-us", label: "Why Choose Us" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? "text-default font-bold"
                      : "text-gray font-semibold hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                type="button"
                className="text-default focus:outline-none"
              >
                {isDrawerOpen ? "" : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Drawer Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-[80%] bg-primary transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col h-full text-white">
            <div className="pt-4 pl-4 flex items-center justify-between">
              <img
                className="w-[150px]"
                src="/images/Logo-header.svg"
                alt="Logo"
              />
              <button onClick={toggleDrawer} className="mr-4">
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow pl-7 space-y-4 mt-7">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "about", label: "About Us" },
                { id: "why-us", label: "Why Choose Us" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block font-medium ${
                    activeSection === item.id
                      ? "text-[#4F95DF]"
                      : "hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {isDrawerOpen && (
          <div
            onClick={toggleDrawer}
            className="fixed inset-0 bg-default bg-opacity-50 z-40"
          ></div>
        )}
      </header>

      {/* Spacer for Fixed Header */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Header;
