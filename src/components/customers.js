"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { src: "/pepsi.svg", alt: "Pepsi", width: 100, height: 80 },
  { src: "/beaconhouse.png", alt: "Beaconhouse", width: 100, height: 100 },
  { src: "/netsol.png", alt: "Netsol", width: 160, height: 80 },
  { src: "/uol.png", alt: "UOL", width: 200, height: 100 },
  { src: "/wapda.svg", alt: "Wapda", width: 150, height: 80 },
  { src: "/nha.png", alt: "NHA", width: 110, height: 90 },
  { src: "/ucp.svg", alt: "UCP", width: 140, height: 80 },
  { src: "/sazgar.png", alt: "Sazgar", width: 160, height: 80 },
];

const CustomerLogos = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="marquee-container overflow-hidden">
          <div className="marquee flex items-center">
            {/* Original Logos */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center mx-4 min-w-[150px]" // Reduced spacing
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate Logos for Seamless Transition */}
            {logos.map((logo, index) => (
              <div
                key={index + logos.length}
                className="flex justify-center items-center mx-4 min-w-[150px]" // Reduced spacing
                aria-hidden="true"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={index + logos.length}
                className="flex justify-center items-center mx-4 min-w-[150px]" // Reduced spacing
                aria-hidden="true"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee-container {
          width: 100%;
        }
        .marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerLogos;
