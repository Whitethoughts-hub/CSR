import React from "react";
import bgImage from "../../assets/home/cover.jpg";

const HoverZoomSection = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="group relative w-full h-full cursor-pointer overflow-hidden">
        {/* Background Image */}
        <img
          src={bgImage}
          alt="Zoom Animation"
          className="w-full h-full object-cover transform scale-75 group-hover:scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center overflow-hidden">
          {/* Big title that slides up slightly */}
          <h1
            className="text-[10vw] font-extrabold relative transition-all duration-1000 ease-out translate-y-[60px] group-hover:translate-y-0"
            style={{ lineHeight: "0.9" }}
          >
            Inspiring Vision
            {/* Underline disappears on hover */}
            <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-out"></span>
          </h1>

          {/* Subtitle slides from left */}
          <p className="mt-8 text-xl max-w-2xl opacity-0 translate-x-[-80px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-out">
            Empowering innovation through creativity and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HoverZoomSection;
