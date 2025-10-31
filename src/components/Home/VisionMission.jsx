import React, { useEffect, useRef, useState } from "react";
import bgImage from "../../assets/home/cover.jpg";

const VisionMission = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation when 30% of section enters viewport
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setAnimate(true);
          } else if (entry.intersectionRatio < 0.1) {
            // Optional: reset animation when it leaves viewport
            setAnimate(false);
          }
        });
      },
      {
        threshold: [0, 0.5, 1], // Observe 0%, 30%, 100% visibility
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[50px] md:py-[80px] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          animate ? "scale-110" : "scale-100"
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/70 transform transition-all duration-[1300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          animate ? "scale-100 opacity-70" : "scale-30 opacity-100 rounded-lg"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] gap-[80px] md:gap-[0px] flex flex-col px-[20px] md:px-[50px]">
        {/* Vision */}
        <div
          className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] w-full md:w-[35%] ${
            animate
              ? "translate-x-0 opacity-100"
              : "-translate-x-[200px] opacity-0"
          }`}
        >
          <h2 className="tracking-[2px] text-[45px] text-[#B7C2A2] font-weight-200">
            VISION
          </h2>
          <p className="leading-relaxed text-white">
            To be a globally recognized and trusted entity known for driving
            innovation, fostering growth, and delivering exceptional value
            across diverse industries. We envision a future where our commitment
            to ethical practices, forward-thinking solutions, and enduring
            relationships helps shape a world of sustainable progress,
            prosperity, and positive impact.
          </p>
        </div>

        {/* Mission */}
        <div
          className={`ml-auto transition-all duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] w-full md:w-[35%] text-right ${
            animate
              ? "translate-x-0 opacity-100"
              : "translate-x-[200px] opacity-0"
          }`}
        >
          <h2 className="tracking-[2px] text-[45px] text-[#B7C2A2] font-weight-200">
            MISSION
          </h2>
          <p className="leading-relaxed text-white">
            By fostering a culture of continuous innovation, operational
            excellence, and ethical collaboration, we deliver solutions that
            exceed expectations across industries. We empower our teams to drive
            growth, embrace forward-thinking technologies, and build enduring
            relationships, ensuring our work creates lasting value and a
            positive impact on society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
