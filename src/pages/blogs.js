import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/evolution_of_software_development.jpg";
import article2 from "../../public/images/articles/free-web-hosting-platforms.jpg";
import article3 from "../../public/images/articles/nextjs_framework.jpg";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/pagination component in reactjs.jpg";
import article6 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import { easeInOut, motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { DownArrowIcon } from "@/components/Icons";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      className="hover:underline underline-offset-3 decoration-wavy decoration-[#e64c4c]"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold line-clamp-1">{title}</h2>
      <FramerImage
        ref={imgRef}
        style={{ x: x, y: y }}
        intial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
    
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      intial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: easeInOut } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <a
          href={link}
          className="text-md text-gray dark:text-primaryDark hover:underline underline-offset-3 decoration-wavy decoration-[#e64c4c]"
        >
          Read More
        </a>
        <span className="text-[#444444] dark:text-white text-xs text-center sm:pl-0">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-3 decoration-wavy decoration-[#e64c4c] xs:text-lg line-clamp-2">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 line-clamp-2 ellipsis">{summary}</p>

      <div className="flex justify-between items-center text-center">
        <a
          href={link}
          className="text-md text-gray dark:text-primaryDark hover:underline underline-offset-3 decoration-wavy decoration-[#e64c4c]"
        >
          Read More
        </a>

        <span className="text-primary font-semibold dark:text-primaryDark ml-4 items-center text-center">
          {time}
        </span>
      </div>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Hamza Zaidi | Blogs</title>
        <meta
          name="description"
          content="This is my blogs page for my portfolio website."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light mt-16">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            <FeaturedArticle
              img={article1}
              title="The Evolution of Software Development: Challenges, Lessons, and Advice"
              time="5 min read"
              summary="An article about the Software Development Life Cycle challenges lessons and advice on overcoming these challenges to make SDLC effective and lead towards software solutions."
              link="https://shjz.hashnode.dev/software-development-evolution-overcoming-challenges-and-gaining-insights"
            />
            <FeaturedArticle
              img={article2}
              title="Free Web Hosting Platforms to Launch Your Next Project for Free 💻🌐"
              time="5 min read"
              summary="Free of cost Web Hosting Platforms to help you launch your demo prototype projects without any payment and deploy your projects to showcase to anyone."
              link="https://shjz.hashnode.dev/free-hosting-platforms"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Blogs
          </h2>
          <ul>
            <Article
              img={article3}
              title="Introduction to Next.js: The Ultimate React Framework for Production"
              date="May 31, 2024"
              link="https://shjz.hashnode.dev/introduction-to-nextjs-the-ultimate-react-framework-for-production"
            />
            <Article
              img={article4}
              title="Form Validation In React JS: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="August 19, 2023"
              link="https://shjz.hashnode.dev/"
            />
            <Article
              img={article5}
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="Septemeber 17, 2023"
              link="https://shjz.hashnode.dev/"
            />
            <Article
              img={article6}
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="Septemeber 11, 2023"
              link="https://shjz.hashnode.dev/"
            />
            <Article
              img={article7}
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="Septemeber 6, 2023"
              link="https://shjz.hashnode.dev/"
            />
          </ul>
          <div className="flex items-center self-start justify-center text-center flex-nowrap md:flex-nowrap md:gap-2 md:justify-center lg:self-center">
            <Link
              href="https://shjz.hashnode.dev/"
              target={"_blank"}
              style={{}}
              className="flex flex-nowrap text-center justify-center items-center self-start bg-dark text-light mt-5 md:flex-nowrap md:gap-2 md:justify-center lg:self-center ml-4 text-lg font-semibold capitalize  hover:bg-light hover:text-dark border-2 p-2.5 rounded-lg border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base"
            >
              Read More Blogs
              <DownArrowIcon className="ml-1 text-white w-7 hover:text-dark" />
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default articles;
