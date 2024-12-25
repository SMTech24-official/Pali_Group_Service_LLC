import React from "react";

const Activity = () => {
  return (
    <div className="max-w-[1440px] mx-auto pb-[120px] px-4">
      <div className="border border-r-default rounded-[20px] flex flex-col md:flex-row items-center gap-10 overflow-hidden">
        {/* Left Section */}
        <div className="bg-primary flex items-center justify-center p-10 sm:p-[56px] rounded-[20px] md:rounded-r-none  md:rounded-l-[20px]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/activity.png"
              alt="Activity Illustration"
              className="object-contain"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="text-center md:text-left px-4 md:px-0">
          <h1 className="text-[20px] md:text-[24px] font-bold text-default mb-3">
            What We Do
          </h1>
          <p className="text-gray text-sm md:text-base leading-relaxed">
            We offer comprehensive inspection services, detailed observations,
            thorough reporting, and expert consultation. Our team ensures the
            highest standards in evaluating systems, structures, or processes,
            providing clear, actionable insights for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
