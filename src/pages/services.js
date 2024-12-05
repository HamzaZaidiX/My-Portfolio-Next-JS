import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";
import { MdDesignServices, MdDeveloperMode, MdWeb, MdMobileFriendly, MdSocialDistance, MdWork } from "react-icons/md";

const Services = () => {
  return (
    <>
      <Head>
        <title>Hamza Zaidi | Services</title>
        <meta
          name="description"
          content="This is the services page for the Hamza Zaidi Portfolio website"
        />
      </Head>
      <TransitionEffect />
      <main className="items-center w-full min-h-screen select-text">
        <Layout>
          <div className="flex flex-col items-center justify-center w-full text-center align-center">
            {/* Heading */}
            <AnimatedText text="The Services We Offer!" className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl" />

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
              {[
                { icon: <MdWeb className="text-5xl text-blue-500" />, title: "Front-End Development", description: "Creating responsive and interactive user interfaces using modern web technologies." },
                { icon: <MdDesignServices className="text-5xl text-purple-500" />, title: "UI/UX Design", description: "Designing intuitive and visually appealing user experiences for web and mobile applications." },
                { icon: <MdDeveloperMode className="text-5xl text-green-500" />, title: "Full-Stack Projects", description: "Developing end-to-end web applications with both front-end and back-end functionalities." },
                { icon: <MdMobileFriendly className="text-5xl text-teal-500" />, title: "Mobile App Development", description: "Building user-friendly mobile applications for Android platforms using Flutter and React Native." },
                { icon: <MdSocialDistance className="text-5xl text-yellow-500" />, title: "Social Media Marketing", description: "Promoting and Managing businesses on platforms like Facebook, Instagram, Twitter, and LinkedIn." },
                { icon: <MdWork className="text-5xl text-indigo-500" />, title: "MS Office Services", description: "Expertise in MS Word, Excel, PowerPoint, and Power BI for business productivity solutions." },
                { icon: <MdDesignServices className="text-5xl text-[#d45757]" />, title: "Graphic Designing Services", description: "Delivering innovative designs to elevate your brand and captivate your audience using Adobe softwares, Canva and AI tools." },
                { icon: <MdWeb className="text-5xl text-[#00ccff]" />, title: "Other Miscellaneous Services", description: "Providing tailored solutions and custom services for any unique requirements. You name it, we’ll make it happen!" },
              ].map((service, index) => (
                <div key={index} className="relative flex flex-col items-center justify-center p-6 border rounded-2xl border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-lg hover:shadow-xl transition-shadow duration-300 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <div className="flex justify-center mb-4">
{service.icon}</div>
                  <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default Services;
