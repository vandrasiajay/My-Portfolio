import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-content">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        
        <p className="contact-text"><strong>Name:</strong> Vandrasi Viswanadh Govind Ajay</p>
        <p className="contact-text"><strong>Email:</strong> ajayvandrasi92@gmail.com</p>
        <p className="contact-text"><strong>Phone Number:</strong> 9347463207</p>
        <p className="contact-text"><strong>Father's Name:</strong> Vandrasi Babulu</p>
        <p className="contact-text">
          <strong>Location:</strong> 25-55, Nagarampalem, Madhurwada, Visakhapatnam - 530048
        </p>

        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/ajay-vandrasi-91b851271/" className="btn linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href="https://github.com/vandrasiajay" className="btn github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="https://www.instagram.com/ajay_aj_033" className="btn instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" /> Instagram
          </a>
          <a href="https://wa.me/qr/HUD24KZGZOUDD1" className="btn whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
        </div>

        <h3 className="thank-you">Thank You for Visiting!</h3>
        <p className="contact-message">Feel free to reach out anytime. Looking forward to connecting with you!</p>
      </div>
    </div>
  );
};

export default Contact;
