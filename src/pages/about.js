import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile-pic-1.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

const stats = [
  
  {
    id: 1,
    value: 55,
    name: "Projects Completed",
  },
];

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Hamza Zaidi | About me</title>
        <meta
          name="description"
          content="This is about me page for my portfolio website."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center mt-16">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
  👋 Hello, I&apos;m Hamza Zaidi, a passionate Certified Web Developer and Computer Science student at Iqra University 🎓. With a solid foundation in software development and project management, I bring a versatile skill set to the table.
</p>
<p className="my-4 font-medium">
  🌟 My journey in tech has been a thrilling ride. Currently, I&apos;m driving Full-Stack development at &quot; up-to-date technical skills. Beyond coding, I&apos;m dedicated to crafting cutting-edge, user-centric websites and web apps that translate ideas into user-friendly, impactful software.
</p>
<p className="my-4 font-medium">
  🚀 Proficient in many programming languages 👨‍💻, I have a knack for delivering top-notch, responsive, and visually stunning websites. I thrive in collaborative, team-driven environments, constantly seeking to broaden my expertise and embrace fresh challenges in the field 🎯.
</p>
<p className="my-4 font-medium">
  🧠 A quick learner and problem-solving enthusiast 🤔, I am eager to tackle novel challenges with a blend of creativity and strategic thinking 💡. Driven by a passion to create impactful websites that elevate businesses and organizations toward their aspirations.
</p>
<p className="font-medium">
  🔍 I&apos;m currently exploring exciting opportunities to contribute my skills and collaborate on dynamic projects. 💼 I&apos;m on the lookout for opportunities as a &quot;Full-Stack Developer&quot; and &quot;Software Engineer.&quot; Let&apos;s Connect and explore how I can add value to your team as a dedicated and adept web developer! 🤝
</p>

            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Hamza Zaidi"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col flex-wrap items-center xl:col-span-8 xl:items-center md:order-3">
              {stats.map(({ id, value, name }) => (
                <div
                  key={id}
                  className="flex flex-col flex-wrap items-center justify-center xl:items-center xl:my-3"
                >
                  <p className="inline-block text-7xl font-bold">
                    <AnimateNumbers value={value} />+
                  </p>
                  <h2 className="text-xl text-center font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {name}
                  </h2>
                </div>
              ))}
              <Link href="/projects" className="flex items-center bg-dark text-light mt-5 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base" >View Projects </Link>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
