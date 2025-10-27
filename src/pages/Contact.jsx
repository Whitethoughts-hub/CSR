import React from "react";
import ContactComponent from "../components/Contact/Contact";
import Header from "../components/Navbar/Navbar";
const Contact = () => {
  return (
    <>
      <Header />
      <section className="w-full flex flex-col items-center justify-center">
        <ContactComponent />
      </section>
    </>
  );
};

export default Contact;
