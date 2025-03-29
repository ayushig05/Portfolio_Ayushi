import React from "react";
import { useState } from "react";
import { 
  FaBars, 
  FaTimes 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      reload: true,
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "achievements",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const handleNavClick = (link, reload = false) => {
    if (reload) {
      window.location.href = "/";
    } else {
      setNav(false);
    }
  };

  const navVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-16 px-4 flex justify-between items-center z-50 bg-white"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h1 className="text-5xl font-greatVibes ml-2 text-black">Ayushi</h1>
      </div>

      {!nav && (
        <motion.ul className="hidden md:flex">
          {links.map(({ id, link, reload }) => (
            <motion.li
              key={id}
              className="px-4 cursor-pointer capitalize font-spaceGrotesk font-medium text-gray-800 hover:scale-105 duration-200"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 0.9,
                transition: { duration: 0.3 },
              }}
            >
              {reload ? (
                <span onClick={() => handleNavClick(link, true)}>{link}</span>
              ) : (
                <Link to={`/${link}`} onClick={() => handleNavClick(link)}>
                  {link}
                </Link>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}

      <motion.div
        onClick={() => setNav(!nav)}
        className="cursor-pointer font-spaceGrotesk pr-4 z-10 text-gray-50 md:hidden"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.3 },
        }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </motion.div>

      {nav && (
        <motion.ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen font-spaceGrotesk bg-gradient-to-b from-black to-gray-800 text-gray-500"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map(({ id, link, reload }) => (
            <motion.li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 0.9,
                transition: { duration: 0.3 },
              }}
            >
              {reload ? (
                <span onClick={() => handleNavClick(link, true)}>{link}</span>
              ) : (
                <Link to={`/${link}`} onClick={() => handleNavClick(link)}>
                  {link}
                </Link>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}

      {nav && (
        <div
          onClick={() => setNav(false)}
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"
        ></div>
      )}
    </motion.div>
  );
};

export default Navbar;
