import React from "react";
import InclusiveEthical from "../../assets/home/values/Inclusive&Ethical.svg";
import Innovation from "../../assets/home/values/Innovation.svg";
import Relationship from "../../assets/home/values/Relationship.svg";
import Sustainability from "../../assets/home/values/Sustainability.svg";
const ValuesProgressProjects = () => {
  return (
    <>
      <section className="max-w-[1300px] px-[20px] md:px-[50px] ">
        <div>
          <h2 className="text-[45px] text-[#A0AB9B] text-center py-[50px] font-weight-300">
            VALUES
          </h2>
          <div className="w-full flex md:gap-[50px] flex-col md:flex-row">
            <div className="flex">
              <img src={Sustainability} alt="sustainability" />
              <div>
                <h2>SUSTAINABILITY</h2>
                <p>
                  Driving responsible practices that balance growth, societal
                  harmony, and reducing environmental impact.
                </p>
              </div>
            </div>
            <div className="flex">
              <img src={Sustainability} alt="sustainability" />
              <div>
                <h2>SUSTAINABILITY</h2>
                <p>
                  Driving responsible practices that balance growth, societal
                  harmony, and reducing environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValuesProgressProjects;
