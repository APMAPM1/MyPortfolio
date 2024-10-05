import React, { Component } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', // Text to display in typewriter effect
      isDeleting: false, // Track whether the text is being deleted
      loopNum: 0, // Track the index of words array
      typingSpeed: 150, // Speed of typing/deleting effect
    };
  }

  // Words for the typewriter effect
  words = ["Web Developer", "AI / ML Developer", "UI / UX Designer", "Graphic Designer", "Cybersecurity Enthusiatic"];

  // Lifecycle method to start typing effect when component mounts
  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { text, isDeleting, loopNum, typingSpeed } = this.state;
    const currentIndex = loopNum % this.words.length;
    const fullText = this.words[currentIndex];

    // Update the text state for typing or deleting effect
    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 75 : 150,
    });

    // Check if the word is completely typed out or deleted
    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 1000);
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }

    // Recursive call to handle the typing effect
    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('https://e0.pxfuel.com/wallpapers/846/344/desktop-wallpaper-portfolio-thumbnail.jpg')",
        }}
      >
        <div className="max-w-lg text-center p-5">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Aditi Ajudia</h1>
          
          {/* Display the dynamic typewriter text with "I am" prefix */}
          <p className="text-lg md:text-4xl mb-8">
            I am <span>{this.state.text}</span>
            <span className="border-r-2 border-white ml-1 animate-blink"></span>
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-5">
            <a
              href="https://in.linkedin.com/in/aditi-ajudia-0627b724a?trk=people_directory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://github.com/APMAPM1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/ajudiaaditi_13?igsh=MW0zZTV1MzBqdzZnNQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-blue-300 transition duration-300" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center gap-5">
            <a
              href="https://drive.google.com/file/d/1Y_ZE5wcjdSxmix3Q0RtYd7tT-hTL7jg8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
