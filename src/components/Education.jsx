import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const education = [
  {
    id: 1,
    type: "Bachelor's in Computer Science",
    place: "Iqra University, Karachi",
    time: "2020 - 2025",
    info: "A Bachelor's of Science in Computer Science is a specialized undergraduate program that focuses on the design and development of software systems and applications, preparing students for careers in software engineering and programming.",
  },
  {
    id: 2,
    type: "Pre-Engineering ",
    place:
      "Govt. Jinnah Boys College",
    time: "2017 - 2019",
    info: "Intermidiate",

  },
  {
    id: 2,
    type: "Computer Science",
    place:
      "Fatimiyah Boys School",
    time: "2015 - 2017",
    info: "Matriculation",
  },
];

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div>
        <h3
          className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
          intial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[50%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {education.map(({ id, type, time, place, info }) => (
            <Details
              key={id}
              type={type}
              time={time}
              place={place}
              info={info}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;

