import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { useReveal } from '../hooks/useReveal';
import blaaSolThumb from '../assets/images/project-thumbnail/blaasol-thumbnail.png';
import spillCafeenThumb from '../assets/images/project-thumbnail/spillCafeenThumb.png';
import hiddenSeoulThumb from '../assets/images/project-thumbnail/hiddenSeoulThumb.png';

const projectList = [
  {
    path: 'blaa-sol',
    title: 'Blå Sol Festival App',
    description: 'Concept redesign of a local music festival app',
    thumbnail: blaaSolThumb,
    keywords: ['UX/UI Design', 'Prototyping', 'Design System'],
  },
  {
    path: 'spil-cafeen',
    title: 'Spilcaféen',
    description: 'App design for a board game café in Aarhus',
    thumbnail: spillCafeenThumb,
    keywords: ['UX/UI Design', 'Interactive Prototyping'],
  },
  {
    path: 'hidden-seoul',
    title: 'Hidden Seoul',
    description: "A local's guide to Seoul, beyond the usual tourist spots",
    thumbnail: hiddenSeoulThumb,
    keywords: ['Responsive Design', 'JavaScript', 'Content Creation'],
  },
];

/* 카드 1장.
   map 안에서는 훅을 호출할 수 없어서 별도 컴포넌트로 분리했음.
   덕분에 카드마다 자기 위치에서 따로 리빌됨. */
function ProjectCard({ project, index }) {
  const [ref, shown] = useReveal();

  return (
    <Link
      ref={ref}
      to={`/projects/${project.path}`}
      style={{ '--i': index }}
      className={`${styles.projectItem} ${styles.reveal} ${shown ? styles.visible : ''}`}
    >
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.title}
          className={styles.thumbnail}
        />
      )}
      <div className={styles.info}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        {project.keywords && (
          <div className={styles.keywords}>
            {project.keywords.map((keyword) => (
              <span key={keyword} className={styles.keyword}>
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default function Projects() {
  const [titleRef, titleShown] = useReveal();

  return (
    <section id="Projects" className={styles.projects}>
      <h2
        ref={titleRef}
        className={`${styles.title} ${styles.reveal} ${titleShown ? styles.visible : ''}`}
      >
        Projects
      </h2>
      <div className={styles.list}>
        {projectList.map((project, i) => (
          // 2열 그리드라 줄마다 0, 1 반복
          <ProjectCard key={project.path} project={project} index={i % 2} />
        ))}
      </div>
    </section>
  );
}