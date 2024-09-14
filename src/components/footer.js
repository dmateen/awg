import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Large Text */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Pioneering Excellence in Every Step
        </h2>

        {/* Email Form */}
        <div className="mt-8">
          <form className="flex flex-col items-center">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Drop your email. Let us contact you! :)"
              className="w-full max-w-md p-3 text-black rounded-full mb-4"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Copyright Line */}
        <p className="text-sm text-gray-400 mt-8">
          Copyright - Abdul Waheed Group. Developed by Muhammad Daniyal Mateen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
