import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

// Import Internship Report & Certificate (Ensure they are inside the assets folder)
import InternshipReport from "../assets/Internship_Report.pdf";
import InternshipCertificate from "../assets/Internship_Certificate.png";

const Education = () => {
  // Function to Open Files in a New Tab (Prevent Download)
  const viewFile = (fileUrl) => {
    window.open(fileUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="education" className="education-container">
      {/* Left Section: Education Details */}
      <motion.div
        className="education-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Education</h2>
        <br></br>

        <div className="education-item">
          <h3>Bachelor of Technology (CSE)</h3>
          <p><strong>GITAM University, Visakhapatnam</strong> | 2020 - 2024</p>
          <p>CGPA: 7.2</p>
        </div>

        <div className="education-item">
          <h3>Intermediate (MPC)</h3>
          <p><strong>Narayana Jr College, Visakhapatnam</strong> | 2018 - 2020</p>
          <p>CGPA: 8.6</p>
        </div>

        <div className="education-item">
          <h3>Secondary Education (CBSE)</h3>
          <p><strong>Visakha Valley School, Visakhapatnam</strong> | 2014 - 2018</p>
          <p>CGPA: 7.6</p>
        </div>
      </motion.div>

      {/* Right Section: Internship & Wipro Training */}
      <motion.div
        className="right-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Internship Experience (Further Reduced Size) */}
        <div className="internship-description">
          <h3>Internship Experience</h3>
          <h4>Data Analyst Intern - Vertocity</h4>
          <p><strong>Hyderabad, India</strong> | May 2023 - Oct 2023</p>
          <p>
            During my internship as a Data Analyst at Vertocity, I played a key role in 
            data collection, cleaning, and analysis of user interaction datasets. I supported 
            senior analysts in managing schedules, identifying patterns, and organizing spreadsheets, 
            improving workflow efficiency. My contributions ensured accurate and reliable data insights, 
            aiding informed decision-making.
          </p>
        </div>

        {/* View Buttons (Side by Side) */}
        <div className="view-buttons">
          <motion.button
            className="view-btn"
            onClick={() => viewFile(InternshipReport)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Report
          </motion.button>

          <motion.button
            className="view-btn"
            onClick={() => viewFile(InternshipCertificate)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certificate
          </motion.button>
        </div>

        {/* Wipro Training Section */}
        <div className="training-description">
          <h3>Wipro Elite Training</h3>
          <p><strong>Full Stack Development - .NET & React</strong></p>
          <p><strong>January 31, 2025 - March 21, 2025</strong></p>
          <p>
            I completed an intensive Full Stack Development training at **Wipro Elite**, focusing 
            on **.NET and React**. The training, conducted online, covered backend and frontend 
            technologies, enhancing my skills in building scalable applications. As part of the 
            program, I successfully developed a **Full Stack Capstone project**, applying my 
            learning to a real-world scenario.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
