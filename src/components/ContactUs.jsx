import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-blue-50 py-16" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#163879] mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-12">
          We're here to assist you with any questions or inquiries you may have. Reach out to us via the methods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Address Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Address</h3>
            <p className="text-gray-600 text-center">
              28/A, Jhelum Road, Morgah Morr, Near Hunain Hotel, Rawalpindi, 46600, Punjab, Pakistan
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaPhoneAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">051-5451101</p>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaEnvelope className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@nanomedicalinternational.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
