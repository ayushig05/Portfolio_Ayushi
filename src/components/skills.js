import React from "react";
import { motion } from "framer-motion";
import FIGMA from "../assets/figma.jpg";
import GIT from "../assets/git.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.webp";
import REACT from "../assets/react.png";
import TAILWINDCSS from "../assets/tailwindcss.png";
import BOOTSTRAP from "../assets/bootstrap.jpeg";
import FIREBASE from "../assets/firebase.png";
import MYSQL from "../assets/mysql.png";
import JAVA from "../assets/java.png";
import C from "../assets/c.png";
import NODE from "../assets/node.png";
import EXPRESS from "../assets/express.png";
import MONGODB from "../assets/mongodb.jpg";
import SUPABASE from "../assets/supabase.png";

const Skills = () => {
  const skillItem = [
    {
      imgSrc: FIGMA,
      label: "Figma",
      description: "Design Tool",
    },
    {
      imgSrc: GIT,
      label: "Git",
      description: "Version Control Tool",
    },
    {
      imgSrc: HTML,
      label: "HTML",
      description: "Web Content Structuring",
    },
    {
      imgSrc: CSS,
      label: "CSS",
      description: "User Interface",
    },
    {
      imgSrc: JS,
      label: "JavaScript",
      description: "Interaction",
    },
    {
      imgSrc: REACT,
      label: "ReactJS",
      description: "Framework",
    },
    {
      imgSrc: NODE,
      label: "NodeJS",
      description: "JS Runtime Environment",
    },
    {
      imgSrc: EXPRESS,
      label: "ExpressJS",
      description: "Framework",
    },
    {
      imgSrc: TAILWINDCSS,
      label: "TailwindCSS",
      description: "User Interface",
    },
    {
      imgSrc: BOOTSTRAP,
      label: "Bootstrap",
      description: "User Interface",
    },
    {
      imgSrc: MONGODB,
      label: "MongoDB",
      description: "Database",
    },
    {
      imgSrc: MYSQL,
      label: "MySQL",
      description: "Database",
    },
    {
      imgSrc: FIREBASE,
      label: "Firebase",
      description: "Cloud Platform",
    },
    {
      imgSrc: SUPABASE,
      label: "Supabase",
      description: "Cloud Platform",
    },
    {
      imgSrc: JAVA,
      label: "Java",
      description: "Problem Solving",
    },
    {
      imgSrc: C,
      label: "C",
      description: "Problem Solving",
    },
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <section className="py-12 mx-4 sm:mx-8 lg:mx-28">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 font-spaceGrotesk text-center text-gray-800">
          Essential Tools I Use
        </h2>
        <p className="text-lg mb-12 text-center text-gray-800 font-spaceGrotesk">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillItem.map((item, index) => (
            <motion.div
              key={index}
              className="border border-purple-500 rounded-lg p-6 flex flex-col md:flex-row md:h-20 items-center text-center duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              variants={skillVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                },
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                <img
                  src={item.imgSrc}
                  alt={`${item.label} logo`}
                  className="w-16 h-12 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col items-center md:items-start">
                <p className="text-lg font-semibold font-spaceGrotesk text-purple-500">
                  {item.label}
                </p>
                <p className="text-sm font-spaceGrotesk text-gray-800">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
