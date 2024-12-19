import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";

const Faq = () => {
  const faqs = [
    {
      question: "What is an IOR Services?",
      answer:
        "IOR Services stand for Inspection Observation Report Services, which document and ensure compliance during construction.",
    },
    {
      question: "How do I schedule an inspection?",
      answer:
        "To schedule a construction healthcare inspection, contact us via phone, email, or our website form. Provide project details, preferred date, and receive confirmation promptly.",
    },
    {
      question: "What is the cost of inspection services for small projects?",
      answer:
        "The cost varies based on project size and requirements. Contact us for a detailed quote tailored to your needs.",
    },
    {
      question: "How long does an inspection usually take?",
      answer:
        "The duration depends on the project's complexity, but most inspections are completed within a few hours.",
    },
    {
      question: "What types of reports do you provide?",
      answer:
        "We provide detailed reports, including compliance checklists, risk assessments, and actionable recommendations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <div className="bg-secondary">
     <div className="py-20  max-w-7xl mx-auto flex flex-col md:flex-row justify-between ">
      {/* Header Section */}
      <div className="flex flex-col text-left w-[412px]">
        <p className="text-[40px] leading-[40px] font-bold inline-block text-default mb-4">
          Answers to Your Most Common Questions
        </p>
        <p className="text-gray">
          Quick answers to help you start learning with confidence today
        </p>
      </div>

      {/* FAQ Section */}
      <ul className="basis-1/2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-[#E6E8EC] md:text-lg border-base-content/10"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-base-content">{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="w-5 h-5 text-primary" />
              ) : (
                <FiPlus className="w-5 h-5 text-primary" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
   </div>
  );
};

export default Faq;
