import styles from './Hero.module.css';

const STATS = [
  { num: '+25', label: 'Clientes satisfeitos' },
  { num: '100%', label: 'Entregues no prazo' },
  { num: '3x', label: 'Mais conversões' },
];

const MOCK_CARD_WIDTHS = ['70%', '80%', '60%'];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span className={styles.dot} />
          Sites que geram resultados reais
        </div>

        <h1 className={styles.title}>
          Transformamos ideias em sites <span className={styles.accent}>incríveis</span>
        </h1>

        <p className={styles.heroSub}>
          Desenvolvemos sites profissionais para lojas, empresas e empreendedores que querem presença digital de verdade.
        </p>

        <div className={styles.heroActions}>
          <a href="#contato" className={styles.btnPrimary}>Iniciar Projeto ↗</a>
          <a href="#projetos" className={styles.btnGhost}>Ver Projetos →</a>
        </div>
      </div>

      <div className={styles.heroStat}>
        {STATS.map((stat, i) => (
          <div key={stat.num} style={{ display: 'contents' }}>
            {i > 0 && <div className={styles.statDivider} />}
            <div className={styles.statItem}>
              <div className={styles.statNum}>{stat.num}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Browser Mockup */}
      <div className={styles.heroVisual}>
        <div className={styles.browserMockup}>
          <div className={styles.browserBar}>
            <div className={styles.browserDots}>
              <span className={styles.dotR} />
              <span className={styles.dotY} />
              <span className={styles.dotG} />
            </div>
            <div className={styles.browserUrl}>kodantech.com.br/seu-site</div>
          </div>

          <div className={styles.browserContent}>
            <div className={styles.mockHeroBar}>
              <div className={styles.mockLogoDot} />
              <div className={styles.mockNavDots}>
                <span /><span /><span /><span />
              </div>
            </div>
            <div className={styles.mockHeadline} />
            <div className={styles.mockSubline} />

            <div className={styles.mockCards}>
              {MOCK_CARD_WIDTHS.map((width, i) => (
                <div className={styles.mockCard} key={i}>
                  <div className={styles.mockCardLineT} />
                  <div className={styles.mockCardLineB} />
                  <div className={styles.mockCardLineB} style={{ width }} />
                  <div className={styles.mockCardBtn} />
                </div>
              ))}
            </div>
            <div className={styles.mockGlow} />
          </div>
        </div>
      </div>
    </section>
  );
}
