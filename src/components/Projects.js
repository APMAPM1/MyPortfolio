// Projects.jsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing external link icon

// Import images from the assets folder
import misatoImage from '../assets/misato.png'; // Adjust the path as necessary
import helplineImage from '../assets/blank.png'; // Adjust the path as necessary
import janSuvidhaImage from '../assets/blank.png'; // Adjust the path as necessary

// Project data
const projects = [
  {
    id: 1,
    title: "Misato: AI Companion",
    technologies: "Tailwind CSS, Next.js, TypeScript",
    description: [
      "Developed a dashboard using Tailwind CSS, Next.js, and TypeScript for efficient management and visualization of data.", 
      "Utilized Canva to create visually appealing presentations (PPT) for project demonstrations and pitches.",
    ],
    image: misatoImage,
    link: "https://devfolio.co/projects/misato-ai-companion-e5bb",
  },
  {
    id: 2,
    title: "1930 Helpline Number",
    technologies: "Python, Pandas, Xgboost",
    description: [
      "Developed a machine learning model using techniques like XGBoost and classification algorithms.", 
      "Achieved 87% accuracy in identifying legitimate victim descriptions, enhancing helpline service efficiency.",
    ],
    image: helplineImage,
    link: "https://github.com/Kathan0920/RJPOLICE_HACK_1202_CyberCrew_9",
  },
  {
    id: 3,
    title: "Jan Suvidha Portal",
    technologies: "Tailwind CSS, React.js, Figma",
    description: [
      "Utilized Tailwind CSS and React.js to design web pages for the Jan Suvidha Portal.", 
      "Employed Figma for prototyping, ensuring efficient design iterations and collaboration.",
    ],    
    image: janSuvidhaImage,
    link: "https://github.com/APMAPM1/SSIP_2023_Jan-Suvidha-Portal",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null); // State for tracking hovered project

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading with animation */}
        <motion.h2
          className="text-3xl font-bold mb-10 text-center text-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        {/* Project cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white bg-opacity-20 backdrop-blur-md border border-gray-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-30"
              onMouseEnter={() => setHoveredProject(project.id)} // Set hovered project on mouse enter
              onMouseLeave={() => setHoveredProject(null)} // Reset hovered project on mouse leave
            >
              {/* Project Image First */}
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 0.9 }}
                animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }} // Scale image on hover
                transition={{ duration: 0.3 }}
                className="w-full h-40 mb-4 rounded-lg object-cover"
              />
              {/* Project Details */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-gray-300 hover:text-blue-400 transition-colors duration-300" />
                </a>
              </div>
              <p className="text-gray-200">{project.technologies}</p>
              {/* Expanding description with animation */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: hoveredProject === project.id ? "auto" : 0 }} // Expand/collapse based on hover state
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="text-gray-300 pt-4 list-disc pl-5">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="pb-1">{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
