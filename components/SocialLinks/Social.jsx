import React from 'react';
import './SocialLinks.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-sidebar">
      <a href="https://github.com/NathanLima21" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/nathan-alves-de-lima-696210352/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://wa.me/5511970643717" target="_blank" rel="noreferrer" className="whatsapp" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialLinks;