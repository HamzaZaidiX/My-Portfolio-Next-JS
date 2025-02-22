import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useState } from "react";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import HireMe from "@/components/HireMe";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        error = !/^\S+@\S+\.\S+$/.test(value) ? "Please enter a valid email address" : "";
        break;
      case "message":
        error = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every((error) => error === "");
    if (isValid) {
      console.log("Form submitted:", formData);
      alert("Yeah! Form Submitted");
    } else {
      console.log("Form has errors, please correct them");
      alert("Alas! Form has errors, please correct them");
    }
  };

  return (
    <>
      <Head>
        <title>Hamza Zaidi | Contact</title>
        <meta
          name="description"
          content="This is the contact page for the Hamza Zaidi Portfolio website"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center w-full min-h-screen mt-12 mb-2 px-4">
        <Layout>
          {/* Centered Heading */}
          <div className="text-center my-6">
            <AnimatedText
              text="Your Message, Our Priority!"
              className="text-4xl lg:!text-7xl sm:!text-6xl xs:!text-4xl text-gray-900"
            />
          </div>

          {/* Contact Form & Map Layout */}
          <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">

            {/* Contact Form Section */}
            <div className="bg-white dark:bg-[#3c3c3c] p-8 shadow-lg rounded-lg w-full">
              <h2 className="text-2xl md:text-center font-bold text-gray-900 mb-4 dark:text-light">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} action="https://formsubmit.co/hamzajaffar953@gmail.com" method="POST">
                
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-bold md:text-center text-gray-700 dark:text-light">
                    Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={errors.name ? "true" : "false"}
                      required
                    />
                  </div>
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-bold md:text-center text-gray-700 dark:text-light">
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? "true" : "false"}
                      required
                    />
                  </div>
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg md:text-center font-bold text-gray-700 dark:text-light">
                    Message
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-start pointer-events-none">
                      <FiMessageSquare className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? "true" : "false"}
                      required
                    ></textarea>
                  </div>
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-black dark:text-light dark:bg-indigo-700 font-bold rounded-md transition duration-150 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
 {/* Divider Line */}
 <div className="hidden lg:w-full border-b-2 border-gray-300 rounded-full my-6"></div>

            {/* Google Map Section */}
            <div className="w-full">
              <h2 className="text-2xl md:text-center font-bold text-gray-900 mb-4 dark:text-white">Find me Here</h2>
              <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Block 4D 12/5 Nazimabad no. 4&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen="false"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                ></iframe>
              </div>
            </div>

          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default Contact;
