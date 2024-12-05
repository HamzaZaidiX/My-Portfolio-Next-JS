import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  WhatsappIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] bg-indigo-500 inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const MobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] bg-indigo-500 inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-10 flex items-center justify-between w-full px-32 py-8 font-medium text-light dark:text-dark bg-dark dark:bg-light lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-light transition-all duration-300 ease-out dark:bg-dark block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light transition-all duration-300 ease-out dark:bg-dark block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light transition-all duration-300 ease-out dark:bg-dark block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="flex items-center justify-between w-full lg:hidden select-none">
        <nav>
          <CustomLink href="/" title="Home" className="mx-2" />
          <CustomLink href="/about" title="About" className="mx-2" />
          <CustomLink href="/projects" title="Projects" className="mx-2" />
          <CustomLink href="/services" title="Services" className="mx-2" />
          <CustomLink href="/blogs" title="Blogs" className="mx-2" />
          <CustomLink href="/contact" title="Contact" className="mx-2" />
        </nav>
        <nav className="flex flex-wrap items-center justify-center ">
        
          <motion.a
            href="https://twitter.com/hamzajzaidi/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-2"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/HamzaZaidiX/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shjz/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://api.whatsapp.com/send?phone=923352851947&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFfi9gBHUhVHIUy2pIkHelXuOqxRbDCgRi-MgHY7s7Ca9QM4aTeZvJRiN2J9FbU5Q"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <WhatsappIcon />
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <nav className="flex flex-col items-center justify-center">
            <MobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <MobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <MobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <MobileLink
              href="/services"
              title="Services"
              className=""
              toggle={handleClick}
            />
            <MobileLink
              href="/blogs"
              title="Blogs"
              className=""
              toggle={handleClick}
            />
            <MobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex flex-wrap items-center justify-center mt-2">
            <motion.a
              href="https://twitter.com/hamzajzaidi/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
              toggle={handleClick}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/HamzaZaidiX"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 rounded-full sm:mx-1"
              toggle={handleClick}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shjz/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
              toggle={handleClick}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
            href="https://api.whatsapp.com/send?phone=923352851947&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFfi9gBHUhVHIUy2pIkHelXuOqxRbDCgRi-MgHY7s7Ca9QM4aTeZvJRiN2J9FbU5Q"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
            toggle={handleClick}
          >
            <WhatsappIcon />
          </motion.a>

            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark text-yellow" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
