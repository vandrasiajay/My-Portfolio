import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaDatabase,
  FaReact,
} from "react-icons/fa";
import "./AboutMe.css";
import ResumePDF from "../Ajay_Resume.pdf"; // Ensure the resume is placed inside the public or src folder

const AboutMe = () => {
  // Function to handle resume download
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Vandrasi_Viswanadh_Govind_Ajay_Resume.pdf"; // Sets the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-container">
      {/* Left Section: About Me */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          I am <strong>Vandrasi Viswanadh Govind Ajay</strong>, a passionate full-stack developer with experience in web development and UI/UX design.
          I love problem-solving and building scalable applications that create an impact.
        </p>

        <h3>Skills</h3>
        <div className="skills-grid">
          {[
            { icon: <FaPython />, name: "Python" },
            { icon: <FaJava />, name: "Java" },
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaBootstrap />, name: "Bootstrap" },
            { icon: <FaDatabase />, name: "SQL" },
            { icon: <FaReact />, name: "React" },
          ].map((skill, index) => (
            <motion.span
              key={index}
              className="skill-box"
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon} {skill.name}
            </motion.span>
          ))}
        </div>

        
      </motion.div>

      {/* Right Section: Image + Certifications & Hobbies */}
      <motion.div
        className="right-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Certifications & Hobbies */}
        <div className="certifications-hobbies">
          <h3>Certifications</h3>
          <ul>
            <li>Full Stack Development at NareshIT Institute, Hyderabad (Aug 2024 - Feb 2025)</li>
            <li>Python Programming (Udemy)</li>
            <li>Cloud Computing (Coursera)</li>
          </ul>
          <br></br>
          <br></br>
          <h3>Hobbies</h3>
          <ul>
            <li>Writing scripts or stories</li>
            <li>Clicking pictures</li>
            <li>Exploring new technologies</li>
          </ul>
        </div>
        <motion.button
          className="resume-btn"
          onClick={downloadResume}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download Resume
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutMe;
