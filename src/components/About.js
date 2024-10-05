import React from 'react';

// Import your photo from the assets folder
import myPhoto from '../assets/aditi.png'; // Adjust the path to your photo

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row py-20 bg-gray-100 lg:h-screen h-auto">
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center p-5">
        <div className="text-left p-5 lg:pl-20 w-full lg:w-auto">
          <h2 className="text-3xl font-bold mb-5">About Me</h2>
          <p className="max-w-2xl mx-auto text-lg mb-5">
            Highly motivated Computer Science student with a passion for innovation and problem-solving. Proficient in coding languages such as Java, Python, and C, with hands-on experience in Web Development, Machine Learning, and Artificial Intelligence. Eager to contribute to cutting-edge technologies and tackle challenging technical problems in a collaborative environment.
          </p>
          <p className="mt-5">Location: Ahmedabad, India</p>
          <p>
            Email:{' '}
            <a href="mailto:aditiajudia@gmail.com" className="text-blue-600">
              aditiajudia@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="text-blue-600">6354340112</span>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-5 mt-10 lg:mt-0">
        <img
          src={myPhoto}
          alt="My Profile"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default About;
