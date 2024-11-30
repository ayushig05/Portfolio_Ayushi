import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "1st Place - UPITS 2024",
      description:
        "Won the first position at the UP International Trade Show 2024 for the VAAYU project. Awarded by Central Textile Minister Mr. Giriraj Singh and UP MSME Minister Mr. Rakesh Sachan.",
      date: "October 2024",
    },
    {
      title: "GirlScript Summer of Code 2024",
      description:
        "Selected as a participant in the prestigious GirlScript Summer of Code Extended Edition.",
      date: "September 2024",
    },
    {
      title: "Developed VAAYU",
      description:
        "Created a UAV-based ambient air monitoring system during SIH 2024, receiving optimistic feedback and recognition.",
      date: "August 2024",
    },
    {
      title: "Participant - Dexterix 4.0",
      description:
        "Participated in the Dexterix 4.0 competition, gaining valuable experience in innovative tech challenges.",
      date: "2024",
    },
    {
      title: "Tech Member - TechnoJam",
      description:
        "Actively contributed as a Tech Lead in TechnoJam, organizing workshops and mentoring team members.",
      date: "2022-present",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-spaceGrotesk text-center mb-8">
          Achievements
        </h2>
        <p className="text-lg text-gray-400 font-spaceGrotesk text-center mb-12">
          A showcase of my milestones, accomplishments, and experiences that
          have shaped my professional journey.
        </p>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-purple-500"></div>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } items-center mb-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`w-1/2 px-6 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
                style={{
                  marginLeft: index % 2 === 0 ? "0" : "-1.5rem",
                  marginRight: index % 2 === 0 ? "-1.5rem" : "0",
                }}
              >
                <h3 className="text-2xl font-semibold font-spaceGrotesk text-purple-400">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 font-spaceGrotesk mt-2">
                  {achievement.description}
                </p>
                <span className="text-gray-500 font-spaceGrotesk text-sm block mt-2">
                  {achievement.date}
                </span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-lg font-bold shadow-lg border-4 border-gray-900 z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
