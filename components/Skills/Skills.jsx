import React from 'react';
import './Skills.css';

const Skills = () => {
  const techSkills = ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "C", "SQL & NoSQL", "CSS", "Git & GitHub"];
  const softSkills = ["Comunicação Efetiva", "Resolução de Problemas", "Trabalho em Equipe", "Pensamento Crítico", "Metodologias Ágeis"];

  return (
    <section className="skills-section">
      <h2>Habilidades</h2>
      <div className="skills-container">
        {/* Bloco de Técnicas */}
        <div className="skill-group">
          <h3>Habilidades Técnicas</h3>
          <div className="tags-container">
            {techSkills.map(skill => <span key={skill} className="tag">{skill}</span>)}
          </div>
        </div>

        {/* Bloco de Soft Skills */}
        <div className="skill-group">
          <h3>Soft Skills</h3>
          <div className="tags-container">
            {softSkills.map(skill => <span key={skill} className="tag">{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;