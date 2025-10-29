import InclusiveEthical from "../../assets/home/values/Inclusive&Ethical.svg";
import Innovation from "../../assets/home/values/Innovation.svg";
import Relationship from "../../assets/home/values/Relationship.svg";
import Sustainability from "../../assets/home/values/Sustainability.svg";
import LogoImage from "../../assets/main_logo.svg";
import DesktopTimelineImage from "../../assets/home/desktopTimeline.png";
import MobileTimelineImage from "../../assets/home/mobileTimeline.png";
const ValuesProgressProjects = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center ">
        {/* Values Start */}
        <div className="max-w-[1300px] px-[20px] md:px-[50px] py-[80px]">
          <h2 className="text-[45px] text-[#A0AB9B] text-left md:text-center pb-[25px]  font-weight-200">
            VALUES
          </h2>
          <div className="w-full flex gap-[20px] md:gap-[50px] flex-col md:flex-row items-center justify-between">
            <div className="flex w-[100%] md:w-[45%] gap-[10px] items-start">
              <img
                src={Sustainability}
                alt="sustainability"
                className="h-[30px] w-[30px]"
              />
              <div>
                <h2 className="text-[20px] text-[#63A37B]">SUSTAINABILITY</h2>
                <p>
                  Driving responsible practices that balance growth, societal
                  harmony, and reducing environmental impact.
                </p>
              </div>
            </div>
            <div className="flex w-[100%] md:w-[45%] gap-[10px] items-start">
              <img
                src={InclusiveEthical}
                alt="Inclusive&Ethical"
                className="h-[30px] w-[30px]"
              />
              <div>
                <h2 className="text-[20px] text-[#63A37B]">
                  INCLUSIVE & ETHICAL
                </h2>
                <p>
                  Upholding fairness and integrity in all actions while
                  fostering an inclusive environment that welcomes diverse
                  perspectives and contributions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-[20px] md:gap-[50px] flex-col md:flex-row items-center justify-between pt-[20px] md:pt-[50px]">
            <div className="flex w-[100%] md:w-[45%] gap-[10px] items-start">
              <img
                src={Relationship}
                alt="Relationship"
                className="h-[30px] w-[30px]"
              />
              <div>
                <h2 className="text-[20px] text-[#63A37B]">RELATIONSHIP</h2>
                <p>
                  Building lasting, trust-based relationships with customers,
                  partners, and stakeholders, ensuring mutual growth and
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="flex w-[100%] md:w-[45%] gap-[10px] items-start">
              <img
                src={Innovation}
                alt="Innovation"
                className="h-[30px] w-[30px]"
              />
              <div>
                <h2 className="text-[20px] text-[#63A37B]">INNOVATION</h2>
                <p>
                  Pioneering forward-thinking solutions that adapt to changing
                  needs and inspire progress.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Values End */}
        {/* Progess Start */}
        <div className="w-full bg-[#F4F7F4] flex items-center justify-center">
          <div className="w-full max-w-[1300px] px-[20px] md:px-[50px] py-[80px] flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-[30%] h-full pb-[50px] md:pb-[0px]">
              <img src={LogoImage} alt="Logo" className="h-[100px] w-full" />
            </div>
            <div className="w-full md:w-[60%] h-[100%]">
              <h2 className="text-[45px] text-[#A0AB9B] font-weight-200 m-0 p-0 leading-11">
                PROGRESSIVELY <br /> FORWARD
              </h2>
              <p className="pt-[10px]">
                Our logo embodies the essence of movement, sustainable momentum,
                and progress. A design that is future-focused yet dynamically
                bold and solid, it symbolises our progressively forward
                philosophy and is a visual representation of innovation, trust,
                and growth. It is a signal of direction, evoking ideas of
                acceleration, sustainability, and breaking conventional
                boundaries. The graphic element in the logo acts as a visual
                anchor, pointing the way forward, hinting at a continuous
                momentum or even a path that leads to newer possibilities. The
                textual description as elements featuring the company name as
                part of the logo provides the solidity, the base, the
                foundation, and the lasting relationships that we have built
                over the years. The green colour in our logo, inspired by
                nature, symbolises sustainability, well bring, harmony, and
                progress. Basically, life itself! The black colour in our logo
                represents solidity, stability, strength, and maturity. Lending
                a sense of balance.
              </p>
            </div>
          </div>
        </div>
        {/* Progress End */}
        {/* Projects Start */}
        <div className="max-w-[1300px] 2xl:px-[50px]">
          <h2 className="text-[45px] text-[#A0AB9B] font-weight-200 text-center pt-[80px] pb-[50px] leading-0">
            PROJECTS
          </h2>
          <img
            src={DesktopTimelineImage}
            alt="ProjectsDesktopTimellineImage"
            className="h-full w-full hidden md:block"
          />
          <img
            src={MobileTimelineImage}
            alt="ProjectsMobileTimelineImage"
            className="h-full w-full block md:hidden"
          />
        </div>
        {/* Projects End */}
      </section>
    </>
  );
};

export default ValuesProgressProjects;
