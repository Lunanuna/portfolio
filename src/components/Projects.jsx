import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import blaaSolThumb from '../assets/images/project-thumbnail/blaasol-thumbnail.png'
import spillCafeenThumb from '../assets/images/project-thumbnail/spillCafeenThumb.png'
import hiddenSeoulThumb from '../assets/images/project-thumbnail/hiddenSeoulThumb.png'
const projectList = [
  {
    path: 'blaa-sol',
    title: 'Blå Sol Festival App',
    description: 'Local Festival App Redesign Project',
    thumbnail: blaaSolThumb,
    keywords: ['UX/UI Design', 'Prototpying', 'Design System'],
  },
  {
    path: 'spil-cafeen',
    title: 'Spilcaféen',
    description: 'Mobile App Design for a board game cafe',
    thumbnail: spillCafeenThumb, 
    keywords: ['App Design', 'User Testing', 'Dark Mode'],
  },
  {
    path: 'hidden-seoul',
    title: 'Hidden Seoul',
    description: 'Web design for hidden Seoul spot guide',
    thumbnail: hiddenSeoulThumb,
    keywords: ['Responsive Design', 'JavaScript', 'Content Creation'],
  },
];

export default function Projects() {
  return (
    <section id="Projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.list}>
        {projectList.map((project) => (
          <Link
            key={project.path}
            to={`/projects/${project.path}`}
            className={styles.projectItem}
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
        ))}
      </div>
    </section>
  );
}