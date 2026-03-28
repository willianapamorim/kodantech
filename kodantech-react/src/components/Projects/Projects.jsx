import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    thumbClass: 'proj1',
    glowClass: 'projGlow1',
    title: 'Loja de Moda Feminina',
    description: 'E-commerce com catálogo completo e checkout otimizado.',
    tags: ['E-commerce', 'Moda'],
    lines: ['projLineAccent', 'projLineShort', 'projLineMid'],
    miniCards: 2,
  },
  {
    thumbClass: 'proj2',
    glowClass: 'projGlow2',
    title: 'Clínica de Estética',
    description: 'Site institucional com agendamento online integrado.',
    tags: ['Institucional', 'Saúde'],
    lines: ['projLineAccent', 'projLineLong', 'projLineMid'],
    miniCards: 3,
  },
  {
    thumbClass: 'proj3',
    glowClass: 'projGlow3',
    title: 'Restaurante & Delivery',
    description: 'Cardápio digital e landing page de alta conversão.',
    tags: ['Landing Page', 'Food'],
    lines: ['projLineAccent', 'projLineShort', 'projLineLong'],
    miniCards: 2,
  },
];

function ProjectCard({ project }) {
  const ref = useScrollReveal();

  return (
    <div className={`${styles.projectCard} reveal`} ref={ref}>
      <div className={`${styles.projectThumb} ${styles[project.thumbClass]}`}>
        <div className={styles.projInner}>
          <div className={styles.projTopbar}>
            <span className={`${styles.projDot} ${styles.projDotR}`} />
            <span className={`${styles.projDot} ${styles.projDotY}`} />
            <span className={`${styles.projDot} ${styles.projDotG}`} />
          </div>
          <div className={styles.projBody}>
            {project.lines.map((lineClass, i) => (
              <div
                key={i}
                className={`${styles.projLine} ${styles[lineClass]}`}
              />
            ))}
            <div className={styles.projCardsRow}>
              {Array.from({ length: project.miniCards }).map((_, i) => (
                <div className={styles.projMiniCard} key={i}>
                  <div className={styles.projMiniLine} />
                  <div className={styles.projMiniBtn} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.projGlow} ${styles[project.glowClass]}`} />
      </div>

      <div className={styles.projectInfo}>
        <h3 className={styles.projectInfoTitle}>{project.title}</h3>
        <p className={styles.projectInfoText}>{project.description}</p>
        <div>
          {project.tags.map((tag) => (
            <span className={styles.projectTag} key={tag}>{tag}</span>
          ))}
        </div>
        <a href="#" className={styles.visitBtn}>Visitar site ↗</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section className={`${styles.projects} reveal`} id="projetos" ref={sectionRef}>
      <div className={styles.projectsHeader}>
        <span className={styles.sectionTag}>Projetos Desenvolvidos</span>
        <h2 className={styles.title}>Alguns trabalhos que nos orgulhamos</h2>
      </div>

      <div className={styles.projectsGrid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
