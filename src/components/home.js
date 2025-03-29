import React from "react";
import Image from "../assets/user.png";
import { 
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";
import { 
  useTypewriter, 
  Cursor 
} from "react-simple-typewriter";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder", "Frontend-Web Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <div className="h-full w-full mt-20 mb-20">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center h-full px-8 gap-8">
        <div className="flex flex-col justify-center h-full w-3/4">
          <motion.h1
            className="text-5xl font-bold mt-4 text-gray-800"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm{" "}
            <span className="text-purple-500 font-spaceGrotesk">
              Ayushi Gupta
            </span>
          </motion.h1>
          <motion.h2
            className="text-3xl mt-2 font-spaceGrotesk text-gray-800"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </motion.h2>
          <motion.p
            className="mt-4 font-spaceGrotesk text-gray-800"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
             A passionate frontend web developer focused on creating intuitive and responsive web experiences using modern technologies. Always eager to learn and tackle new challenges.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mt-8 text-gray-800"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="/Ayushi_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-14 px-4 py-3 font-spaceGrotesk items-center rounded-md cursor-pointer border-2 hover:shadow-lg hover:shadow-purple-500/50 border-purple-900 hover:text-purple-500 duration-300"
              whileHover={{
                scale: 0.7,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
            >
              Download Resume
            </a>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/ayushig05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border border-purple-500 text-xl inline-flex items-center justify-center rounded-md hover:shadow-lg hover:shadow-purple-500/50 hover:text-purple-500 cursor-pointer duration-300"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 0.7,
                  rotate: 20,
                  transition: { duration: 0.3 },
                }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ayushi-gupta-213466289/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border border-purple-500 text-xl inline-flex items-center justify-center rounded-md hover:shadow-lg hover:shadow-purple-500/50 hover:text-purple-500 cursor-pointer duration-300"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 0.7,
                  rotate: 20,
                  transition: { duration: 0.3 },
                }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://twitter.com/ayushigupta_04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border border-purple-500 text-xl inline-flex items-center justify-center rounded-md hover:shadow-lg hover:shadow-purple-500/50 hover:text-purple-500 cursor-pointer duration-300"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 0.7,
                  rotate: 20,
                  transition: { duration: 0.3 },
                }}
              >
                <FaXTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div
          className="relative w-96 h-auto flex justify-center items-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <img
            src={Image}
            alt="Profile"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
