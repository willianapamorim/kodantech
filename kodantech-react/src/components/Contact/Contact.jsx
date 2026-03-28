import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

const CONTACT_DETAILS = [
  { icon: '📱', label: 'WhatsApp', value: '11 96606-8951' },
  { icon: '📧', label: 'E-mail', value: 'kodantech@gmail.com' },
  { icon: '📸', label: 'Instagram', value: '@kodantech' },
];

export default function Contact() {
  const sectionRef = useScrollReveal();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={`${styles.contact} reveal`} id="contato" ref={sectionRef}>
      <div className={styles.contactWrap}>
        <div>
          <span className={styles.sectionTag}>Contate-nos</span>
          <h2 className={styles.title}>Vamos construir algo incrível juntos?</h2>
          <p className={styles.contactInfoText}>
            Tem um projeto em mente? Entre em contato e receba um orçamento gratuito. Respondemos em até 24 horas.
          </p>

          {CONTACT_DETAILS.map((detail) => (
            <div className={styles.contactDetail} key={detail.label}>
              <div className={styles.contactIcon}>{detail.icon}</div>
              <div>
                <strong className={styles.contactDetailStrong}>{detail.label}</strong>
                <span className={styles.contactDetailSpan}>{detail.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className={styles.input}
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="tipo">Tipo de projeto</label>
              <input
                id="tipo"
                name="tipo"
                type="text"
                className={styles.input}
                placeholder="Ex: Landing page para loja de roupas"
                value={formData.tipo}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                className={styles.textarea}
                placeholder="Conte um pouco sobre seu negócio e o que você precisa..."
                value={formData.mensagem}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>Enviar Mensagem →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
