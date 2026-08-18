import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import blaaSolThumb from '../assets/images/project-thumbnail/blaasol-thumbnail.png'

const projectList = [
  {
    path: 'blaa-sol',
    title: 'Blå Sol Festival App',
    description: 'Redesign Project 어쩌고 저쩌고',
    thumbnail: blaaSolThumb,
    keywords: ['UX Research', 'UI Design', 'Prototyping'],
  },
  {
    path: 'spil-cafeen',
    title: 'Spil Cafeen',
    description: '여기에 한 줄 소개글',
    thumbnail: blaaSolThumb, // 나중에 이미지 추가
    keywords: ['Branding', 'App Design', 'User Testing'],
  },
  {
    path: 'cph-fw',
    title: 'COPENHAGEN FASHION WEEK',
    description: '여기에 한 줄 소개글',
    thumbnail: blaaSolThumb,
    keywords: ['Web Design', 'Interaction', 'Visual Identity'],
  },
];

export default function Projects() {
  return (
    <section>
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