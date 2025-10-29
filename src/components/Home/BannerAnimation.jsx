import React, { useEffect, useState } from "react";
import Image from "../../assets/home/cover.jpg";

const BannerAnimation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSubText, setShowSubText] = useState(false);
  const [hideLine, setHideLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !isExpanded) {
        setIsExpanded(true);

        // Show subtext after zoom starts
        setTimeout(() => setShowSubText(true), 2000);

        // Hide underline after subtext appears
        setTimeout(() => setHideLine(true), 3500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  return (
    <div className="relative min-h-[100vh] bg-white flex items-center justify-center overflow-hidden">
      {/* Shrinking + Expanding Container */}
      <div
        className={`relative transition-all duration-[2500ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
          isExpanded ? "w-full h-screen" : "w-[60%] h-[60vh]"
        }`}
      >
        {/* Background Image */}
        <img
          src={Image}
          alt="Banner Image"
          className={`w-full h-full object-cover transition-transform duration-[2500ms] ${
            isExpanded ? "scale-110" : "scale-100"
          }`}
        />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center">
          {/* HEADING */}
          <div className="overflow-hidden flex items-center justify-center">
            <h1
              className={`md:hidden text-white font-weight-400 uppercase tracking-[0.16em] text-center whitespace-nowrap transition-all duration-[2500ms] ease-in-out m-0 ${
                isExpanded ? "opacity-100" : "opacity-80"
              }`}
              style={{
                fontSize: "38px",
                lineHeight: "1",
                marginBottom: "0.6rem",
              }}
            >
              BUILDING <br /> ECOSYSTEMS
            </h1>
            <h1
              className={`hidden md:block text-white font-weight-400 uppercase tracking-[0.16em] text-center whitespace-nowrap transition-all duration-[2500ms] ease-in-out m-0 ${
                isExpanded ? "opacity-100" : "opacity-80"
              }`}
              style={{
                fontSize: "7vw",
                lineHeight: "1",
                marginBottom: "0.6rem",
              }}
            >
              BUILDING ECOSYSTEMS
            </h1>
          </div>

          {/* UNDERLINE */}
          <div className="w-full flex justify-center">
            <div
              className={`h-[1.5px] bg-white transition-all duration-[1000ms] ease-in-out ${
                hideLine ? "opacity-0" : "opacity-100 w-full"
              }`}
            ></div>
          </div>

          {/* SUBTEXT */}
          <div className=" w-full  max-w-[1300px]z-20">
            <p
              className={`relative text-center md:text-left z-20 text-white font-size-18 mt-[0.8rem] leading-5 transition-all duration-[1800ms] w-full max-w-[1300px] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showSubText
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[200px]"
              } md:pl-[50px] `}
              style={{
                maxWidth: "600px",
                whiteSpace: "pre-line",
              }}
            >
              WHERE PEOPLE CAN GROW, {"\n"} CONNECT & LIVE IN HARMONY
            </p>
          </div>
        </div>

        {/* GRADIENT OVERLAY */}
        <div
          className={`absolute z-10 bottom-0 left-0 w-full h-[50%] transition-all duration-[2000ms] ease-in-out ${
            isExpanded
              ? "opacity-100 translate-y-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
              : "opacity-0 translate-y-10"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default BannerAnimation;
