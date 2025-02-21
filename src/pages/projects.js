import AnimatedText from "@/components/AnimatedText";
import { DownArrowIcon, GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/linktree.png";
import project2 from "../../public/images/projects/gemini_ai.png";
import project3 from "../../public/images/projects/cryptoverse.png";
import project4 from "../../public/images/projects/nike_shoes.png";
import project5 from "../../public/images/projects/news_4_u.png";
import project6 from "../../public/images/projects/blog_world.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import ProjectCard from "@/components/ProjectCard";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl rounded-br-2xl border-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-[#3374c9] dark:text-[#3374c9] xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-gray-500 text-dark dark:text-light sm:text-sm">
          {summary}{'...'}
        </p>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Demo
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-[#3374c9] dark:text-[#3374c9] lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-sm font-medium text-gray-500 text-dark dark:text-light lg:text-lg md:text-base">
          {summary}{'...'}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="p-2 px-3 text-lg font-semibold border border-solid rounded-lg cursor-pointer border-dark hover:bg-dark hover:text-light dark:border-light dark:text-light md:text-base"
          >
            Demo
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Hamza Zaidi | Projects </title>
        <meta
          name="description"
          content="This is projects page for my portfolio website. It displays some of my projects highlighting my skills amd tech-stacks"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mt-16 mb-16 select-text dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Innovate, Create, Inspire!"
            className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                type="Featured Project"
                title="Linktree Clone | Social Media Links in One"
                summary="This project is a clone of the popular Linktree platform, built using Next.js, MongoDB and Tailwind CSS. It allows users to create and manage their own personalized linktree pages🌟"
                img={project1}
                link="https://github.com/HamzaZaidiX/Linktree-Clone"
                github="https://github.com/HamzaZaidiX/Linktree-Clone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Gemini Ai Clone | Ai Chatbot"
                summary="Gemini Clone is a project aimed at replicating the functionality of Gemini AI, powered by the Google Gemini API, using React JS + Vite JS and some CSS styling 🤖💻"
                img={project2}
                link="https://gemini-clone-shjz.netlify.app/"
                github="https://github.com/HamzaZaidiX/Gemini-Clone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Cryptoverse | Crypto Currency Marketplace"
                summary="Cryptoverse | Crypto Currencies API provides real-time prices about crypto currencies. The webapp have several pages. This project was made with React JS and Tailwind CSS."
                img={project3}
                link="https://cryptoverse2x.netlify.app/"
                github="https://github.com/HamzaZaidiX/Cryptoverse"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                type="Featured Project"
                title="Nike Shoes | E-Commerce Website"
                summary="Nike Shoes | This is a ReactJS project with Tailwind CSS to make a Nike landing page. It will contain all the features required for an online E-commerce store."
                img={project4}
                link="https://nike-shjz.netlify.app/"
                github="https://github.com/HamzaZaidiX/Nike-Landing-Page"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="News 4 U | News Website"
                summary="News 4 U is the Fastest News Platform which gives to News when you want inspired to build in React JS, Next JS, Typescript and also using NEWS API to get latest news on my website! 📰"
                img={project5}
                link="https://github.com/HamzaZaidiX/News-4-U"
                github="https://github.com/HamzaZaidiX/News-4-U"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Blog World | React JS & Typescript"
                summary="This React JS project, Blog World 🌏, is a notes-taking app where you can write blogs with Markdown, add tags, and search by titles or tags. All entries are saved in local storage and can be edited anytime 🚀"
                img={project6}
                link="https://blogworld123.netlify.app/"
                github="https://github.com/HamzaZaidiX/blog-world"
              />
            </div>
            
          </div>
          
    <div className="col-span-6 sm:col-span-12 justify-center items-center mt-10 w-full border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light shadow-lg p-6 dark:text-white">
      <ProjectCard
        username="HamzaZaidiX"
      />
    </div>
          <div className="flex items-center self-start justify-center text-center flex-nowrap md:flex-nowrap md:gap-2 md:justify-center lg:self-center">
            <Link
              href="https://github.com/HamzaZaidiX?tab=repositories"
              target={"_blank"}
              style={{}}
              className="flex flex-nowrap text-center justify-center items-center self-start bg-dark text-light mt-5 md:flex-nowrap md:gap-2 md:justify-start lg:self-center ml-4 text-lg font-semibold capitalize  hover:bg-light hover:text-dark border-2 p-2.5 rounded-lg border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base"
            >
              See More Projects
              <DownArrowIcon className="ml-1 text-white w-7 hover:text-dark" />
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
