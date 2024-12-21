import React from "react";

const Awards = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[120px] px-4">
      {/* Header Section */}
      <div>
        <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-default text-center mb-10">
          Awards & Certifications
        </h1>
      </div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
        {/* Award 1 */}
        <div className="w-full max-w-[250px] text-center">
          <img
            src="/images/award1.png"
            alt="Award 1"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            OSHPD Inspector of Records
          </h2>
          <p className="text-[18px] sm:text-[20px] font-bold mt-3">2008</p>
        </div>

        {/* Award 2 */}
        <div className="w-full max-w-[250px] text-center">
          <img
            src="/images/award2.png"
            alt="Award 2"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            Medical Gas Inspector, NITC
          </h2>
          <p className="text-[18px] sm:text-[20px] font-bold mt-3">2008</p>
        </div>

        {/* Award 3 */}
        <div className="w-full max-w-[250px] text-center">
          <img
            src="/images/award3.png"
            alt="Award 3"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            International Firestop Council Premier
          </h2>
          <p className="text-[18px] sm:text-[20px] font-bold mt-3">2024</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
