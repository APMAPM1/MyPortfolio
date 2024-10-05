"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "VPN Digital Services",
    date: "August 2024 – Present",
    responsibilities: [
      "Led the redesign and development of a responsive, user-friendly company website using React, Tailwind CSS, and Next.js.",
      "Currently advancing skills in React Native for mobile app development.",
    ],
  },

  {
    id: 2,
    title: "Creator Intern",
    company: "Internshala (Design Club)",
    date: "Dec 2023 – Feb 2024",
    responsibilities: [
      "Increased social media engagement by 10% by creating and publishing 40+ engaging posts.",
      "Provided guidance on UI/UX design to improve usability and aesthetic appeal.",
    ],
  },
  {
    id: 3,
    title: "Network Penetration Testing Intern",
    company: "Hexadefend",
    date: "Sep 2023",
    responsibilities: [
      "Gained hands-on experience in penetration testing methodologies.",
      "Demonstrated proficiency in Linux commands and network scanning.",
    ],
  },
];

export default function Experience() {
  const [hoveredExperience, setHoveredExperience] = useState(null);

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center text-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <div
                className="relative p-6 bg-white bg-opacity-20 backdrop-blur-md border border-gray-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-30"
                onMouseEnter={() => setHoveredExperience(exp.id)} // Set hovered experience on mouse enter
                onMouseLeave={() => setHoveredExperience(null)} // Reset hovered experience on mouse leave
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                    <p className="text-gray-200">{exp.company}</p>
                    <p className="text-gray-300">{exp.date}</p> {/* Displaying the date */}
                  </div>
                </div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: hoveredExperience === exp.id ? "auto" : 0 }} // Expand/collapse based on hover state
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="list-disc list-inside space-y-2 pt-4 text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
