import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div  style={{ fontFamily: 'Playpen Sans, sans-serif' }} className="flex items-center justify-center mt-2 sm:mt-0 select-none center">
      <MotionLink
        href="/"
        className="flex items-center justify-center w-16 h-16 text-3xl font-bold border border-transparent border-solid rounded-full bg-light text-dark dark:bg-dark dark:text-light sm:text-2xl sm:w-15 sm:h-15"
        whileHover={{
          backgroundColor: [
            "rgba(35, 186, 206, 1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(51, 116, 201, 1)",
            "rgba(131,58,180,1)",
            "rgba(38, 218, 134, 1)",
          ],
          transition: { duration: 5, repeat: Infinity},
        }}
      >
        HZ
      </MotionLink>
    </div>
  );
};

export default Logo;