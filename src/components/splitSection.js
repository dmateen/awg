import React from "react";

const SplitSection = () => {
  return (
    <>
      {/* First Section: Text on the Left, Image on the Right */}
      <div className="flex flex-col md:flex-row h-auto md:mt-24">
        {/* Left Side - Text */}
        <div className="bg-black text-white w-full md:w-1/2 flex items-center p-8 md:p-12">
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Why <br />
              we are <br />
              Different?
            </h2>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="bg-black md:bg-gray-100 text-white md:text-gray-900 w-full md:w-1/2 p-8 md:p-12 ">
          <div>
            <h3 className="hidden md:block text-2xl font-bold mb-4">
              What Sets Us Apart
            </h3>
            <p className="text-lg mb-4 ">
              At Abdul Waheed Group, we believe in a blend of tradition and
              innovation. Our core values of integrity, dedication, and
              customer-first approach drive us to deliver top-tier products and
              services.
            </p>
            <p className="text-lg">
              We constantly evolve with the market trends, ensuring we stay
              ahead while maintaining a deep connection with our roots. Our
              extensive dealership network, expert team, and commitment to
              quality are what make us stand out in the industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplitSection;
