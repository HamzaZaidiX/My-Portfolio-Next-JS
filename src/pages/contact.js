import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useState } from "react";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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
      [name]: error
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every((error) => error === "");
    if (isValid) {
      console.log("Form submitted:", formData);
      alert("Yeah! Form Submitted")
      // Here you would typically send the form data to a server
    } else {
      console.log("Form has errors, please correct them");
      alert("Alas! Form has errors, please correct them")
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
      <main className="items-center w-full min-h-screen mt-24 mb-2 overflow-hidden">
        <Layout className="absolute pt-0 md:pt-16 sm:pt-8">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/7RWtmqh/photo-1555066931-4365d14bab8c-ixlib-rb-4-0.jpg')" }}>
        
          <div className="flex items-center text-center justify-between w-full lg:flex-col">
            <div className="flex flex-col items-center self-center w-full text-center align-center">
              <AnimatedText
                text="Connect with Ease: Your Message, Our Priority!"
                className=" items-center text-center !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl text-white"
              />
              
              <div className="min-w-[50vw] flex flex-col justify-between z-30 items-center rounded-lg mt-2 backdrop-blur-md select-none dark:text-black">
              <form onSubmit={handleSubmit} target="_blank" className="p-8 space-y-6" action="https://formsubmit.co/syedhamzajaffarzaidi@gmail.com" method="POST">
          <div>
            <label htmlFor="name" className="block text-lg font-bold text-[#14bae4]">
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
                className={`form-control block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out`}
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby="name-error"
                required
              />
            </div>
            {errors.name && (
              <p className="mt-2 text-sm text-red-600" id="name-error">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-bold text-[#14bae4]">
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
                className={`form-control block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out`}
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
                required
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-bold text-[#14bae4]">
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
                className={`form-control block w-full pl-10 pr-3 py-2 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out`}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby="message-error"
                required
              ></textarea>
            </div>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
          <div>
          <button
              type="submit" onSubmit={{handleSubmit}}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white font-bold bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out dark:text-black"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
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
