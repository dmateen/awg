import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2
          id="contact"
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900"
        >
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
          {/* Left Column - Map */}
          <div className="w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13624.706131301333!2d74.31453087428373!3d31.59686400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b7b9f9ae2df%3A0x9309427c1ab1d6a7!2sGrain%20Market%20Rd%2C%20Data%20Nagar%20Badami%20Bagh%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694704951555!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Right Column - Contact Info */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg text-lg leading-relaxed text-black">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Get In Touch
            </h3>
            <p className="mb-4">
              <strong>Address:</strong> First Floor, 196,197-Grain Market,
              Badami Bagh, Lahore, PAKISTAN.
            </p>
            <p className="mb-4">
              <strong>Mobile:</strong>{" "}
              <a
                href="tel:+923220190513"
                className="text-black hover:underline"
              >
                +92-322-0190513
              </a>
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+924237729600"
                className="text-black hover:underline"
              >
                +92-42-37729600
              </a>
            </p>
            <p className="mb-4">
              <strong>Whatsapp:</strong>{" "}
              <a
                href="tel:+923220190513"
                className="text-black hover:underline"
              >
                +92-322-0190513
              </a>
            </p>
            <p className="mb-4">
              <strong>Fax:</strong> +92-42-37730116
            </p>
            <p className="mb-4">
              <strong>Website:</strong>{" "}
              <a
                href="http://www.awg.com.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                www.awg.com.pk
              </a>
            </p>
            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:sid@awg.com.pk"
                className="text-black hover:underline"
              >
                sid@awg.com.pk
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
