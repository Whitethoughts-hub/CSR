import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#007643] w-[100%] text-white pt-[50px] pb-[20px] flex items-center flex-col justify-center">
      <div className="w-full flex max-w-[1300px] flex-col px-[20px] md:px-[50px]  md:flex-row">
        <div className="h-[170px] w-full md:w-[50%] flex flex-col justify-between">
          <a href="tel:+91 40 2311 8484">
            <h2 className="text-[#D8EDDD] text-[22px]">+91 40 2311 8484 </h2>
          </a>
          <a href="mailto:info@csrestates.com">
            <h2 className="text-[18px] ">info@csrestates.com</h2>
          </a>
          <p className="text-[16px] text-white">CIN: U70102TG1996PLC022903</p>
          <p className="text-[16px] text-white">
            4th floor, CSR Estate, Plot No.8, Sector-1, <br /> HUDA Techno
            Enclave, Madhapur, Hyderabad - 500081
          </p>
        </div>
        <div className="h-[170px] w-full md:w-[50%] flex items-start mt-[20px] md:mt-[0px] md:justify-end ">
          <iframe
            title="Sample Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.137812785736!2d78.40184181505125!3d17.44753288810315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917dbaf8f625%3A0x2c9f80caa24f3a9!2sHUDA%20Techno%20Enclave%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="h-[100%] w-[100%] md:w-[70%]  rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="max-w-[1300px] w-[100%] flex items-center justify-center">
        <div className="h-[0.5px] mx-[20px] md:mx-[50px] w-full  bg-white mt-[20px]  "></div>
      </div>
      <div className="flex px-[20px] ">
        <p className="text-center mt-[20px] text-white">
          {" "}
          © - 2025 Copyright. CSR Estate | All rights reserved |
          <a href=""> Terms & Conditions </a> | <a href="">Privacy Policy</a>
          <br className="none md:block" /> Designed & Developed by{" "}
          <a href="https://whitethoughts.in" target="_blank">
            White Thoughts and Branding
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
