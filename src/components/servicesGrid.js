import React from "react";
import {
  FaNetworkWired,
  FaIndustry,
  FaShoppingCart,
  FaStore,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    title: "Local & Nationwide Dealers Network",
    description:
      "We connect with dealers across the nation, ensuring a reliable network for distribution.",
    icon: <FaNetworkWired className="text-black mx-auto" size={48} />,
  },
  {
    title: "Manufacturers & Exporters",
    description:
      "Specializing in manufacturing and exporting high-quality auto-related products globally.",
    icon: <FaIndustry className="text-black mx-auto" size={48} />,
  },
  {
    title: "Importers",
    description:
      "We import top-tier products from trusted markets worldwide, ensuring quality for our customers.",
    icon: <FaShoppingCart className="text-black mx-auto" size={48} />,
  },
  {
    title: "Retail Stores",
    description:
      "Our retail stores offer direct access to our premium range of tyres and auto parts.",
    icon: <FaStore className="text-black mx-auto" size={48} />,
  },
  {
    title: "Wholesale Services",
    description:
      "Providing wholesale services to ensure our products reach every corner of the market.",
    icon: <FaWarehouse className="text-black mx-auto" size={48} />,
  },
  {
    title: "Miscellaneous Info",
    description:
      "Also dealing in investments in real estate, properties, stock, and other promising projects.",
    icon: <FaBuilding className="text-black mx-auto" size={48} />,
  },
];

export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-6 text-center shadow-sm"
        >
          <div>{service.icon}</div>
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};
