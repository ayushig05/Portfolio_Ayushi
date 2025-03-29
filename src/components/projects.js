import React from "react";
import { motion } from "framer-motion";
import FIRETALKS from "../assets/firetalks.png";
import BUDGETBUDDY from "../assets/budgetbuddy.png";
import WORDCRAFT from "../assets/dictionary_web.png";
import TEXTIMAGE from "../assets/text-image.png";
import VAAYU from "../assets/vaayu.png";
import BOOKNEST from "../assets/book.png";

const Projects = () => {
  const PROJECTS = [
    {
      id: 1,
      title: "VAAYU (Vigilant Air Assessment and Yielding Unit)",
      image: VAAYU,
      description:
        "Developed VAAYU, an autonomous UAV-based air quality monitoring system integrating sensors, GCS, and predictive analytics to detect and mitigate pollution effectively",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        // "",
        "https://github.com/ayushig05/Vigilant-Air-Assessment-and-Yielding-Unit",
      ],
    },
    {
      id: 2,
      title: "BookNest",
      image: BOOKNEST,
      description:
        "Developed a feature-rich Book Management System using the MERN stack, enabling seamless book cataloging, user favorites, order management, and real-time status tracking",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        // "",
        "https://github.com/ayushig05/BookNest",
      ],
    },
    {
      id: 3,
      title: "FireTalks",
      image: FIRETALKS,
      description:
        "A real-time chat application that allows users to communicate instantly, featuring user authentication, message history, and notifications",
      technologies: ["React.js", "CSS", "Firebase"],
      links: [
        // "https://fire-talks.vercel.app/",
        "https://github.com/ayushig05/FireTalks",
      ],
    },
    {
      id: 4,
      title: "BudgetBuddy",
      image: BUDGETBUDDY,
      description:
        "An application to help users track their personal finances, manage expenses, and set budgets with visualized charts and reports",
      technologies: ["React.js", "TailwindCSS", "Firebase"],
      links: [
        // "https://budget-buddy-rho-liart.vercel.app/",
        "https://github.com/ayushig05/BudgetBuddy",
      ],
    },
    {
      id: 5,
      title: "WordCraft",
      image: WORDCRAFT,
      description:
        "An interactive web app designed to help users explore the meanings, synonyms, and pronunciations of words, along with an easy-to-use search feature",
      technologies: ["React.js", "CSS", "MaterialUI"],
      links: [
        // "https://dictionary-web-app-pi-eight.vercel.app/",
        "https://github.com/ayushig05/WordCraft",
      ],
    },
    {
      id: 6,
      title: "AI-Image-App",
      image: TEXTIMAGE,
      description:
        "A web application that leverages AI for generating and enhancing images, providing users with a creative platform for artistic expression",
      technologies: ["React.js", "CSS"],
      links: [
        // "https://text-to-ai-image-app.vercel.app/",
        "https://github.com/ayushig05/AI-Image-App",
      ],
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      skewY: 10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        delay: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      rotate: -90,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
        bounce: 0.5,
      },
    },
  };

  const techTagVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.7,
      },
    },
  };

  return (
    <div className="pb-4 w-full">
      <h2 className="my-5 text-center text-4xl font-spaceGrotesk font-bold text-gray-800">
        Projects
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="flex md:ml-52 justify-center items-center flex-wrap gap-8 px-4"
      >
        {PROJECTS.map(
          ({ id, title, image, description, technologies, links }) => (
            <motion.div
              key={id}
              className="mb-8 flex flex-wrap items-center justify-center lg:justify-start"
              variants={cardVariants}
            >
              <a
                href={links[0]}
                className="w-full lg:w-1/4 flex justify-center lg:justify-start"
              >
                <motion.img
                  src={image}
                  width={500}
                  height={500}
                  alt={title}
                  className="mb-6 rounded shadow-lg"
                  variants={imageVariants}
                />
              </a>
              <div className="w-full max-w-xl lg:w-3/4 px-4 lg:px-8">
                <motion.h3
                  className="mb-2 text-2xl font-semibold font-spaceGrotesk text-purple-500"
                  variants={techTagVariants}
                >
                  <a href={links[0]} className="hover:text-purple-500">
                    {title}
                  </a>
                </motion.h3>
                <motion.p
                  className="mb-4 font-spaceGrotesk text-gray-600"
                  variants={techTagVariants}
                >
                  {description}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="inline-block rounded font-spaceGrotesk cursor-pointer bg-gray-800 px-3 py-1 text-sm text-white shadow hover:bg-purple-500 transition"
                      variants={techTagVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-4">
                  {/* <a
                    href={links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline mr-4"
                  >
                    Live Demo
                  </a> */}
                  <a
                    href={links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
