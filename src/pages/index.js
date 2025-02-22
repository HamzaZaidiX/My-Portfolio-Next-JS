import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from "@/components/TransitionEffect";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <Head>
        <title>Hamza Zaidi | Home</title>
        <meta name="description" content="This is the home page for the Hamza Zaidi Portfolio website" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen pt-16 mt-12 text-dark">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-center w-full lg:flex-col">
            <div className="items-center justify-center w-1/2 mb-4 mr-8 md:m-0 md:w-full">
              <Image
                src={profilePic}
                alt="Hamza Zaidi"
                className="items-center w-full h-auto lg:hidden md:flex md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw object-fit"
              />
            </div>
            <div className="flex flex-col text-center items-center w-1/2 lg:w-full lg:text-center">
             {/* Animated Text with Typewriter Effect */}
             <h1 style={{fontFamily: "Fira Sans, sans-serif"}} className="font-bold text-center justify-center items-center !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl">
                <Typewriter
                  words={[
                    'Turning Vision Into Reality With Code And Design.',
                    'Passionate Frontend Web Developer',
                    'Passionate Software Engineer'
                  ]}
                  loop={0} // 0 = infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              {/* <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/> */}
              <p className="my-4 !text-left self-center text-base font-medium md:text-sm sm:text-xs">
  I&#39;m a passionate front-end web developer, 👨‍💻 blending creativity and technology to craft stunning websites that feel like they&#39;re from another dimension. 🪐 Explore my projects to see how I harness the power of technologies to give better user experiences that are truly out of this world! 🌌 Let&#39;s turn ideas into reality, one pixel at a time! 🚀
</p>
              <div className="flex flex-wrap items-center self-start mt-2 md:flex-col md:gap-2 lg:self-center">
                <Link href="https://drive.google.com/file/d/1TkfKb7YUjZSJoLf5kRwhPm4mDc44TEb9/view?usp=sharing" target={"_blank"}className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base" download={true}>Resume <LinkArrow className="w-6 ml-1" /></Link>
                <Link href="https://linktr.ee/shjz" target={"_blank"} className="ml-4 text-lg font-medium underline capitalize text-dark underline-offset-2 dark:text-light md:text-base md:m-0">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute inline-block w-24 right-8 bottom-8 md:hidden">
          <Image src={lightBulb} alt="Hamza Zaidi" className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
};

export default Home;
