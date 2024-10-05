"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const organisation = [
  {
    id: 1,
    title: "Graphic Designer",
    company: "VGEC Media Core Team",
    date: "Jan 2022 – Present",
    responsibilities: [
      "Crafted 40+ posters for various events and curated caption images for promotional purposes, ensuring visual appeal and effective communication of event details while enhancing social media engagement and brand visibility.",
      "Conceptualized 5 newsletters, blending creativity with information dissemination to captivate readership, and provided guidance and leadership to the newsletter team, ensuring cohesive design and timely delivery.",
    ],
  },
  {
    id: 2,
    title: "Student Volunteer",
    company: "National Service Scheme",
    date: "Nov 2022 – March 2024",
    responsibilities: [
      "Designed posters for various events, enhancing visual communication and promotional efforts.",
      "Organized, conducted, and participated in various social events, contributing to community engagement and service initiatives",
    ],
  },
  
];

export default function Organisation() {
  const [hoveredExperience, setHoveredExperience] = useState(null);

  return (
    <section id="organisation" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center text-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Organisation
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {organisation.map((exp, index) => (
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
