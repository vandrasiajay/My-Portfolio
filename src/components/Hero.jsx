import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="row align-items-center">
        {/* Left Side - Text Content */}
        <motion.div
          className="col-md-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Hi, I'm Vandrasi Viswanadh Govind Ajay</h1>
          <p className="hero-description">
          A passionate Computer Science Engineering graduate driven by a deep enthusiasm for software development and coding. I thrive on solving complex problems, continuously expanding my knowledge, and building innovative solutions that make a real impact. With a strong foundation in full-stack development, machine learning, and system design. My curiosity fuels my continuous learning journey, allowing me to adapt to emerging technologies.I embrace challenges as opportunities to grow and innovate.
          </p>

          {/* Social Media Icons */}
          <motion.div
            className="social-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <a href="https://github.com/vandrasiajay" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/ajay-vandrasi-91b851271/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.instagram.com/ajay_aj_033" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image with Animation */}
        <motion.div
          className="col-md-6 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-container">
            <motion.img
              src="/profile_pic2.jpg"
              alt="Profile"
              className="profile-pic"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
