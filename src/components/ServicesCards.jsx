import React from "react";

const services = [
  {
    id: 1,
    imgSrc: "/images/img2.jpeg", // Update with actual image path
    title: "Medical Equipment Supply",
    description:
      "We supply state-of-the-art imaging systems, surgical tools, critical care solutions, laboratory equipment, hospital solutions, and other advanced machinery to meet all your medical equipment needs, and more.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    imgSrc: "/images/img2.jpeg", // Update with actual image path
    title: "Maintenance & Repairs",
    description:
      "Our expert team offers swift maintenance and repair services for medical equipment to minimize downtime. We also provide training for in-house engineers to enhance operational independence.",
    buttonText: "Learn More",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#163879]">
          Services We Offer
        </h2>
        <p className="text-gray-700 text-lg text-center mb-12">
          At Nano Medical International, We specialize in delivering a wide range of healthcare solutions tailored to meet the demands of modern medical facilities. Our offerings include the supply of advanced medical equipment, such as MRI scanners, CT scanners, surgical tools, patient monitors, laboratory instruments, and hospital solutions like electric operating tables and ICU beds with advanced features. Additionally, we provide top-notch maintenance and repair services through our expert electro-medical team, ensuring that your equipment operates at peak efficiency. We also conduct training programs to empower in-house engineers with the skills to perform basic troubleshooting and repairs, reducing dependency and ensuring uninterrupted care delivery.




        </p>
        {/* Flexbox Container to Center Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 lg:w-96"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#163879] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="bg-[#163879] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
