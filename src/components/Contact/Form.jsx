import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    apartment: [],
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z.\s]*$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[6-9][0-9]{9}$/;
  const urlRegex = /(https?:\/\/[^\s]+)/gi;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const newApartments = checked
          ? [...prev.apartment, value]
          : prev.apartment.filter((v) => v !== value);
        return { ...prev, apartment: newApartments };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name || !nameRegex.test(formData.name))
      newErrors.name = "Please enter a valid name.";

    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email.";

    if (!formData.mobile || !phoneRegex.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit number starting with 6-9.";

    if (formData.apartment.length === 0)
      newErrors.apartment = "Select at least one apartment.";

    if (
      !formData.message ||
      formData.message.length > 150 ||
      urlRegex.test(formData.message)
    )
      newErrors.message = "Invalid message (no URLs, max 150 chars).";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
      apartment: [],
    });
    setErrors({});
  };

  return (
    <div className="bg-[#FAFAFA] h-full w-full px-6 md:px-12 py-6 md:py-10 rounded flex flex-col items-center justify-center">
      <h2 className="text-[#007643] text-[27px] text-center pb-[10px]">
        Get In Touch With Us
      </h2>

      {/* Fixed 400px width */}
      <div className="w-full max-w-[420px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-1"
        >
          <style>
            {`
              .form-input {
                width: 100%;
                border: none;
                border-bottom: 1px solid #ccc;
                padding: 4px 2px;
                outline: none;
                text-align: center;
                background-color: transparent;
                transition: border-color 0.3s ease;
                font-size: 16px;
              }
              .form-input:focus {
                border-color: #007643;
                outline: none;
                box-shadow: none;
              }
              .error-container {
                height: 10px; /* Reserve space */
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .error-text {
                color: #FF0000 !important;
                font-size: 10px;
                text-align: center;
                visibility: visible;
              }
              .error-hidden {
                visibility: hidden; /* Keeps height but hides text */
              }
            `}
          </style>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Full Name*"
          />
          <div className="error-container">
            <p
              className={errors.name ? "error-text" : "error-text error-hidden"}
            >
              {errors.name || "placeholder"}
            </p>
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Email Address*"
          />
          <div className="error-container">
            <p
              className={
                errors.email ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.email || "placeholder"}
            </p>
          </div>

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="form-input"
            placeholder="Phone Number*"
            maxLength="10"
          />
          <div className="error-container">
            <p
              className={
                errors.mobile ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.mobile || "placeholder"}
            </p>
          </div>

          {/* Apartment */}
          <p className="text-center mt-2 text-[#737174] w-full">
            Preferred Apartment Size:
            <label className="ml-2">
              <input
                type="checkbox"
                name="apartment"
                value="3 BHK"
                onChange={handleChange}
                checked={formData.apartment.includes("3 BHK")}
              />
              3 BHK
            </label>
            <label className="ml-4">
              <input
                type="checkbox"
                name="apartment"
                value="4 BHK"
                onChange={handleChange}
                checked={formData.apartment.includes("4 BHK")}
              />
              4 BHK
            </label>
          </p>
          <div className="error-container">
            <p
              className={
                errors.apartment ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.apartment || "placeholder"}
            </p>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            placeholder="Message / Query*"
            rows="2"
          ></textarea>
          <div className="error-container">
            <p
              className={
                errors.message ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.message || "placeholder"}
            </p>
          </div>

          {/* Submit */}
          <button
            className="mt-4 px-8 rounded-3xl py-1 bg-white border border-[#506C64] hover:bg-[#006732] hover:text-white transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
