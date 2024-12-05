import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4 select-none md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 md:hidden">
      <div className="relative flex items-center justify-center w-48 h-auto md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:syedhamzajaffarzaidi@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border boder-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:h-12 md:w-12 md:text-[10px]"
        >
          {" "}
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
