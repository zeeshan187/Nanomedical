import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/images/img1.webp')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text */}
      <h1 className="relative text-white text-4xl md:text-6xl xl:text-8xl font-bold text-center">
        Welcome to Our Platform
      </h1>
    </div>
  );
};

export default HeroSection;
