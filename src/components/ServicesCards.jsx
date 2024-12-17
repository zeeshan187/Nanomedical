import React from "react";

const services = [
  {
    id: 1,
    imgSrc: "/images/img4.jpg", // Update with actual image path
    title: "Medical Equipment Supply",
    description:
      "We supply cutting-edge medical machinery to meet all your equipment needs, including MRI scanners, MER Systems, Binocular Magnifying Loops, Intraoperative Ultrasound Systems, Fiber Optic Bronchoscopes, Blood Warmers, Automated Axioscopes, Automated Subglottic Aspiration Systems, and more.",
    buttonText: "Let's Talk",
  },
  {
    id: 2,
    imgSrc: "/images/img7.jpg", // Update with actual image path
    title: "Maintenance & Repairs",
    description:
      "Our expert team offers fast and reliable maintenance and repair services for medical equipment, reducing downtime and ensuring smooth, efficient operations. We also provide specialized training for in-house engineers to enhance their ability to manage equipment independently.",
    buttonText: "Let's Talk",
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
        At Nano Medical International, we specialize in delivering a wide range of healthcare solutions tailored to the needs of modern medical facilities. Our offerings include imaging systems for radiology and diagnostics, surgical equipment for operating theaters, critical care solutions for ICUs, and laboratory instruments for pathology and research departments. We also provide hospital infrastructure solutions, including advanced electric operating tables, ICU beds, and patient monitoring systems. Through our expert electro-medical team, we offer reliable maintenance and repair services to ensure optimal equipment performance. Additionally, we conduct specialized training programs to equip in-house biomedical engineers with the skills to perform basic repairs and troubleshooting, ensuring seamless operations and minimizing downtime. A detailed client list can be provided upon request.
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
                <a href="/#contact">
                <button className="bg-[#163879] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                  {service.buttonText}
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
