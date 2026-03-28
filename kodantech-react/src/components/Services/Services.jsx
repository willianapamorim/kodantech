import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Services.module.css';

const SERVICES = [
  {
    icon: '🚀',
    title: 'Landing Page',
    description: 'Ideal para campanhas e conversões rápidas. Uma página focada em transformar visitantes em leads ou clientes em minutos.',
  },
  {
    icon: '🏢',
    title: 'Site Institucional',
    description: 'Presença digital completa para sua empresa. Apresente seus serviços, equipe e diferenciais com profissionalismo.',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Loja online completa e pronta para vender. Integração com pagamentos, controle de estoque e muito mais.',
  },
  {
    icon: '🔗',
    title: 'Link Bio',
    description: 'Centralize todos os seus links importantes em uma única página personalizada e profissional para redes sociais.',
  },
  {
    icon: '⚡',
    title: 'Otimização (SEO)',
    description: 'Apareça no topo do Google. Otimizamos seu site para que seus clientes te encontrem antes da concorrência.',
  },
  {
    icon: '🎨',
    title: 'Redesign de Sites',
    description: 'Seu site já existe mas está desatualizado? Modernizamos e otimizamos para melhorar conversões e usabilidade.',
  },
];

function ServiceCard({ icon, title, description, delay }) {
  const ref = useScrollReveal();

  return (
    <div
      className={`${styles.serviceCard} reveal`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.cardGlow} />
      <div className={styles.serviceIcon}>{icon}</div>
      <h3 className={styles.serviceCardTitle}>{title}</h3>
      <p className={styles.serviceCardText}>{description}</p>
      <a href="#contato" className={styles.serviceLink}>Saiba mais →</a>
    </div>
  );
}

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section className={`${styles.services} reveal`} id="servicos" ref={sectionRef}>
      <div className={styles.servicesHeader}>
        <span className={styles.sectionTag}>Nossos Serviços</span>
        <h2 className={styles.title}>O que desenvolvemos para você</h2>
      </div>

      <div className={styles.servicesGrid}>
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} {...service} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
