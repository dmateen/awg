import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="about" className="mt-20 md:mt-24">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-center text-gray-900 mb-12">
            About the Company
          </h2>

          {/* Grid layout with alternating text and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Row: Text on the left, Image on the right */}
            <div className="md:border md:border-gray-200 rounded-lg p-6 md:shadow-sm">
              <h3 className="text-xl font-bold mb-4">Company History</h3>
              <p>
                Founded in 1960, Abdul Waheed Group (AWG) is a leading name in
                Pakistan, specializing in the import, wholesale, and retail of
                tyres, auto parts, and more. Originally established as Abdul
                Waheed & Co., the company began as a trader in salt and cement,
                later shifting to tyre trade in 1985. AWG now operates a vast
                dealership network across 100+ cities and has expanded globally
                through Abdul Waheed International, importing tyres and auto
                parts from key markets. With retail outlets gathering direct
                customer feedback, AWG stays ahead of market trends. As a proud
                member of industry associations, AWG continues to drive
                excellence and innovation in the sector.
              </p>
            </div>
            <div className="md:border md:border-gray-200 rounded-lg p-6 md:shadow-sm">
              <Image
                src="/aboutus.jpg"
                alt="Company values"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Second Row: Image on the left, Text on the right */}
            <div className="hidden md:block md:border md:border-gray-200 rounded-lg p-6 md:shadow-sm">
              <Image
                src="/aboutus1.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:border md:border-gray-200 rounded-lg p-6 md:shadow-sm">
              <h3 className="text-xl font-bold mb-4">Mission & Associations</h3>
              <p className="mb-4">
                Abdul Waheed Group strives to become a market leader and one of
                the world’s fastest-growing trading companies, particularly in
                tyres, tubes, and auto-related products. We aim to achieve this
                while upholding Islamic principles and ensuring the well-being
                of our employees and stakeholders.
              </p>
              <p className="font-semibold mb-2">
                We are proud members of esteemed associations, including:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Lahore Chamber of Commerce and Industry</li>
                <li>Pakistan Tire Importers and Dealer’s Association</li>
                <li>Pakistan Tire Traders Foundation</li>
                <li>Punjab Tire Traders Association</li>
                <li>
                  Pakistan Automobile Spare Parts Importers and Dealers
                  Association (PASPIDA)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
