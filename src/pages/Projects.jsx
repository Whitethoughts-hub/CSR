import React from "react";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import bgImage from "../assets/ProjectComingSoon.jpg";
const Projects = () => {
  return (
    <>
      <Header />

      <section
        className="h-[100vh] w-[100%] bg-cover bg-center flex items-center justify-center px-[20px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-[45px] text-[#007643] text-center py-[30px] font-weight-200">
          PROJECT COMING SOON…
        </h1>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
