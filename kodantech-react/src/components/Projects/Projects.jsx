import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    thumbClass: 'proj1',
    glowClass: 'projGlow1',
    title: 'Nest',
    description: 'Landing page de alta conversão especializada no mercado pet.',
    tags: ['Landing Page', 'Pet'],
    lines: ['projLineAccent', 'projLineShort', 'projLineMid'],
    miniCards: 2,
    link: 'https://nest-studio-vercel.vercel.app/',
  },
  {
    thumbClass: 'proj2',
    glowClass: 'projGlow2',
    title: 'VLTG Store',
    description: 'E-commerce completo de moda streetwear com checkout otimizado.',
    tags: ['E-commerce', 'Streetwear'],
    lines: ['projLineAccent', 'projLineLong', 'projLineMid'],
    miniCards: 3,
    link: 'https://vltg-stores.vercel.app/',
  },
  {
    thumbClass: 'proj3',
    glowClass: 'projGlow3',
    title: 'SuperCake',
    description: 'Landing page moderna e elegante para doceria artesanal.',
    tags: ['Landing Page', 'Confeitaria'],
    lines: ['projLineAccent', 'projLineShort', 'projLineLong'],
    miniCards: 2,
    link: 'https://ssupercakes.vercel.app/',
  },
  {
    thumbClass: 'proj4',
    glowClass: 'projGlow1',
    title: 'SuperCake Link Bio',
    description: 'Link bio customizado para centralizar todos os canais da doceria.',
    tags: ['Link Bio', 'Social'],
    lines: ['projLineAccent', 'projLineMid', 'projLineShort'],
    miniCards: 2,
    link: 'https://supercake-linkbio.vercel.app/',
  },
  {
    thumbClass: 'proj5',
    glowClass: 'projGlow2',
    title: 'DentalCare',
    description: 'Landing page estratégica para captação de pacientes odontológicos.',
    tags: ['Landing Page', 'Saúde'],
    lines: ['projLineAccent', 'projLineShort', 'projLineMid'],
    miniCards: 3,
    link: 'https://odonto-landing-five.vercel.app/',
  },
  {
    thumbClass: 'proj6',
    glowClass: 'projGlow3',
    title: 'Advocacia Premium',
    description: 'Site institucional de alto padrão para escritório de advocacia.',
    tags: ['Landing Page', 'Jurídico'],
    lines: ['projLineAccent', 'projLineLong', 'projLineMid'],
    miniCards: 2,
    link: 'https://landing-advocacia-pi.vercel.app/',
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
        <a href={project.link} className={styles.visitBtn} target="_blank" rel="noopener noreferrer">Visitar site ↗</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useScrollReveal();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);
  const hasMore = PROJECTS.length > 6;

  return (
    <section className={`${styles.projects} reveal`} id="projetos" ref={sectionRef}>
      <div className={styles.projectsHeader}>
        <span className={styles.sectionTag}>Projetos Desenvolvidos</span>
        <h2 className={styles.title}>Alguns trabalhos que nos orgulhamos</h2>
      </div>

      <div className={styles.projectsGrid}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {hasMore && !showAll && (
        <div className={styles.loadMoreContainer}>
          <button 
            className={styles.loadMoreBtn} 
            onClick={() => setShowAll(true)}
          >
            Ver mais projetos
          </button>
        </div>
      )}
    </section>
  );
}
