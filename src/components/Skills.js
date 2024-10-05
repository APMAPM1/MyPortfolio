import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all'); // State to track the active tab

  // Skill categories
  const skillCategories = {
    all: [
      "Java",
      "Python",
      "C",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "VS Code",
      "IntelliJ",
      "Google Cloud",
      "IBM Cloud",
      "Jupyter",
      "Linux",
      "GitHub",
      "React.js",
      "Numpy",
      "Pandas",
      "Tailwind CSS",
      "Powerpoint",
      "Excel",
      "Figma",
      "Adobe Illustrator",
      "Adobe XD",
      "Canva",
    ],
    languages: [
      "Java",
      "Python",
      "C",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
    ],
    developerTools: [
      "VS Code",
      "IntelliJ",
      "Google Cloud",
      "IBM Cloud",
      "Jupyter",
      "Linux",
      "GitHub",
    ],
    technologiesFrameworks: [
      "React.js",
      "Numpy",
      "Pandas",
      "Tailwind CSS",
    ],
    designingTools: [
      "Figma",
      "Adobe Illustrator",
      "Adobe XD",
      "Canva",
    ],
  };

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold mb-5 text-center">Skills</h2>
      
      {/* Tabs for skill categories */}
      <div className="flex flex-wrap justify-center mb-5 gap-2 md:gap-4">
        {Object.keys(skillCategories).map((tab) => (
          <button
            key={tab}
            className={`mx-2 px-4 py-2 font-semibold rounded-lg ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out transform hover:scale-105`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>

      {/* Display skills based on the active tab */}
      <div className="max-w-4xl mx-auto px-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          {skillCategories[activeTab].map((skill, index) => (
            <li key={index} className="py-2 px-4 bg-blue-50 rounded-lg shadow-sm hover:bg-blue-100 transition duration-300 ease-in-out">
              <span className="font-semibold text-gray-800">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
