import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <section className={`${styles.about} reveal`} id="sobre" ref={sectionRef}>
      <div>
        <span className={styles.sectionTag}>Sobre Nós</span>
        <h2 className={styles.title}>Especialistas em transformar negócios digitalmente</h2>
        <p className={styles.bodyText}>
          A KodanTech nasceu com um propósito claro: criar sites que não são apenas bonitos, mas que
          convertem visitantes em clientes reais. Trabalhamos com lojas, prestadores de serviços e
          empresas de todos os tamanhos.
        </p>
        <p className={styles.bodyText}>
          Cada projeto é desenvolvido do zero, com atenção a cada detalhe — desde o design até a
          performance e o SEO. Seu negócio merece um site que trabalha por você 24h por dia.
        </p>
        <a href="#contato" className={styles.btnPrimary}>Conheça Nosso Trabalho ↗</a>
      </div>

      <div className={`${styles.imageWrap} reveal`} ref={imageRef}>
        <div className={styles.imgPlaceholder}>
          <svg width="80%" viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="30" width="240" height="160" rx="10" fill="#1a1f2b" stroke="rgba(0,229,200,0.3)" strokeWidth="1.5" />
            <rect x="40" y="30" width="240" height="24" rx="10" fill="#22293a" />
            <circle cx="58" cy="42" r="4" fill="#ff5f57" />
            <circle cx="72" cy="42" r="4" fill="#febc2e" />
            <circle cx="86" cy="42" r="4" fill="#28c840" />
            <rect x="56" y="66" width="80" height="7" rx="3" fill="rgba(0,229,200,0.6)" />
            <rect x="56" y="80" width="140" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
            <rect x="56" y="93" width="110" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
            <rect x="56" y="106" width="60" height="6" rx="3" fill="rgba(0,229,200,0.3)" />
            <rect x="56" y="119" width="130" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="56" y="132" width="90" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
            <rect x="56" y="145" width="150" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="56" y="158" width="70" height="6" rx="3" fill="rgba(0,229,200,0.2)" />
            <rect x="200" y="100" width="160" height="120" rx="8" fill="#131820" stroke="rgba(0,229,200,0.2)" strokeWidth="1.5" />
            <rect x="200" y="100" width="160" height="20" rx="8" fill="#1e2535" />
            <circle cx="214" cy="110" r="3" fill="#ff5f57" />
            <circle cx="224" cy="110" r="3" fill="#febc2e" />
            <circle cx="234" cy="110" r="3" fill="#28c840" />
            <rect x="212" y="130" width="50" height="6" rx="3" fill="rgba(0,229,200,0.5)" />
            <rect x="212" y="143" width="100" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
            <rect x="212" y="154" width="80" height="5" rx="2" fill="rgba(255,255,255,0.07)" />
            <rect x="212" y="165" width="90" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
            <rect x="212" y="178" width="40" height="14" rx="4" fill="rgba(0,229,200,0.25)" />
            <ellipse cx="150" cy="130" rx="80" ry="60" fill="rgba(0,229,200,0.04)" />
          </svg>
        </div>

        <div className={styles.floatingStat}>
          <div className={styles.floatingStatNum}>+25</div>
          <div className={styles.floatingStatLabel}>Projetos entregues</div>
        </div>

        <div className={styles.codeSnippet}>
          <span className={styles.kw}>const</span> site = <span className={styles.fn}>kodantech</span>(<br />
          &nbsp;&nbsp;<span className={styles.str}>&quot;seu-negocio&quot;</span><br />
          );<br />
          <span className={styles.kw}>→</span> <span className={styles.success}>✓ online &amp; convertendo</span>
        </div>
      </div>
    </section>
  );
}
