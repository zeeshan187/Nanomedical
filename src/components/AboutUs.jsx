import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/images/img2.jpeg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg "
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#163879]">
            About Us
          </h2>
          <p className="text-gray-700 text-lg">
            Nanomedical International, a subsidiary of Top Biz LLP, is a trusted
            leader in Pakistan's healthcare sector, dedicated to empowering
            medical professionals with state-of-the-art equipment, cutting-edge
            technology, and comprehensive solutions. We collaborate with leading
            national and international manufacturers to supply advanced medical
            machinery, surgical disposables, and innovative tools to some of the
            country’s top-tier hospitals and healthcare facilities. Registered
            with DRAP, FBR, and RCCI, and recognized as an active taxpayer, we
            maintain the highest standards of compliance, transparency, and
            professionalism. Our commitment extends beyond supplying
            equipment—we provide end-to-end maintenance and repair services to
            ensure uninterrupted operations and maximum efficiency. Backed by a
            team of skilled biomedical engineers and modern facilities, we aim
            to transform healthcare delivery and drive better outcomes for
            patients and providers alike.
          </p>
          {/* <button className="px-6 py-3 bg-[#183A7C] text-white rounded-md shadow-md hover:bg-[#183A7C] transition">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
