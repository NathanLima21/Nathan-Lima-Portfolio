// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          {/* O React busca automaticamente na pasta public se o caminho começar com / */}
          <img src="/perfil.jpeg" alt="Nathan Lima" />
        </div>
        <div className="hero-content">
          <h1>Olá, eu sou <span>Nathan Lima</span></h1>
          <p>Sou estudante de Ciência da Computação com foco em desenvolvimento Front-End, apaixonado por transformar ideias em interfaces intuitivas, modernas e funcionais. Ao longo da minha jornada, venho desenvolvendo projetos que unem design centrado no usuário, responsividade e boas práticas de desenvolvimento.</p>
          <a href="#contact" className="btn-cta">Vamos conversar?</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;