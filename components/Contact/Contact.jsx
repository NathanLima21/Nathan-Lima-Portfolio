// components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xgozgnkv", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitMessage('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitMessage('Erro ao enviar.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title fade-in">Entre em <span>Contato</span></h2>
        
        {/* Este container agora gerencia o layout lado a lado */}
        <div className="contact-content">
          
          {/* COLUNA ESQUERDA: TEXTOS */}
          <div className="contact-info fade-in">
            <h3>Vamos conversar!</h3>
            <p>Aberto a projetos, colaborações e oportunidades na área de tecnologia.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Disponibilidade</h4>
                <p><span>Freelancer</span> <span>Contratação</span></p>
              </div>
              <div className="contact-item">
                <h4>Resposta</h4>
                <p>Em até 24 horas</p>
              </div>
            </div>
          </div>
          
          {/* COLUNA DIREITA: FORMULÁRIO */}
          <div className="contact-form-container fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Sua mensagem..." rows="5"></textarea>
              </div>
              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              {submitMessage && <div className="submit-message success">{submitMessage}</div>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;