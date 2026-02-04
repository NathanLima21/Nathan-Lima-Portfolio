import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Nathan Lima. Todos os direitos reservados.</p>
        
        <div className="footer-socials">
           <a href="https://github.com/NathanLima21" target="_blank" rel="noreferrer" title="GitHub">
             <FaGithub /> GitHub
           </a>
           <a href="https://www.linkedin.com/in/nathan-alves-de-lima-696210352/" target="_blank" rel="noreferrer" title="LinkedIn">
             <FaLinkedin /> LinkedIn
           </a>
           <a href="https://wa.me/5511970643717" target="_blank" rel="noreferrer" title="WhatsApp" className="footer-whatsapp">
             <FaWhatsapp /> WhatsApp
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;