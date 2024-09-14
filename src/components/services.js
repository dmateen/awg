import { ServicesGrid } from "./servicesGrid";

const Services = () => {
  return (
    <>
      <div id="services" className="mt-20 md:mt-24">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-center text-gray-900 mb-12">
              Our Services
            </h2>
            <ServicesGrid />
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
