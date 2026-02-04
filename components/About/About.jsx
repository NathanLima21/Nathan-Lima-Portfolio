import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
  <div className="container">
    <h2 className="section-title">Sobre <span>Mim</span></h2>
    
    <div className="about-content">
      <div className="about-text">
        <p className="lead">
         Desenvolvedor front-end em formação, estudante de Ciência da Computação, focado em criar interfaces eficientes, escaláveis e bem estruturadas.
        </p>
        <p>
          Como estudante de Ciência da Computação, venho desenvolvendo projetos que unem design funcional e boas práticas de desenvolvimento. Acredito que a tecnologia deve ser simples, eficiente e focada em resolver problemas reais.
        </p> <br />
      </div>

      <div className="about-cards">
        <div className="specialty-card">
          <div className="icon-wrapper">🚀</div>
          <h4>Foco Principal</h4>
          <p>Desenvolvimento Front-End</p>
        </div>
        
        <div className="specialty-card">
          <div className="icon-wrapper">💡</div>
          <h4>Área de Atuação</h4>
          <p>Desenvolvimento Web,Criação de Interfaces Responsivas (UI) & Transformação Digital</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;