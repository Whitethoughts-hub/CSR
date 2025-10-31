import ContactForm from "./Form";
const Contact = () => {
  return (
    <>
      <section className="w-[100%] max-w-[1300px] flex flex-col items-center justify-center">
        <div className="w-full px-[20px] md:px-[50px] py-[50px] gap-[25px] gap-0 flex flex-col justify-between md:flex-row pt-[50px] ">
          <div className=" w-full md:w-[60%] h-[420px] flex flex-col justify-between gap-[20px] md:gap-[0px]">
            <a href="tel:+91 40 2311 8484" target="_blank">
              <h1 className="text-[27px] text-[#007643]">+91 40 2311 8484</h1>
            </a>
            <a href="mailto:info@csrestates.com" target="_blank">
              <h2 className="text-[18px] text-[#000000]]">
                info@csrestates.com
              </h2>
            </a>
            <iframe
              title="Sample Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.188272612912!2d78.385201!3d17.44549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915fdb812229%3A0x54646b51e61ed53c!2sCSR%20Estate!5e0!3m2!1sen!2sin!4v1757667577672!5m2!1sen!2sin"
              className="border-0 w-[100%] md:w-[80%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>
              4th floor, CSR Estate, Plot No.8, Sector-1,{" "}
              <br className="hidden sm:block" /> HUDA Techno Enclave, Madhapur,
              <br className="sm:block hidden" />
              Hyderabad - 500081
            </p>
            <h3 className="text-[16px] text-[#007643]">
              CIN: U70102TG1996PLC022903
            </h3>
          </div>
          <div className="w-full md:w-[40%] h-[420px] flex justify-end items-end">
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="pb-[20px] pt-[50px] bg-[#007643] w-full px-[20px]">
        <p className="text-center text-white">
          © - 2025 Copyright. CSR Estate | All rights reserved |
          {/* |
           <a href=""> Terms & Conditions </a> | <a href="">Privacy Policy</a> */}
          <br className="hidden md:block" /> Designed & Developed by{" "}
          <a href="https://whitethoughts.in" target="_blank">
            White Thoughts and Branding
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;
