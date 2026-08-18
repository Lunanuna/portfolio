
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import blaaSolThumb from '../assets/images/project-thumbnail/blaasol-thumbnail.png'

const projectList = [
  {
    path: 'blaa-sol',
    title: 'Blå Sol Festival App',
    description: 'Redesign Project 어쩌고 저쩌고',
    thumbnail: blaaSolThumb,
  },
  {
    path: 'spil-cafeen',
    title: 'Spil Cafeen',
    description: '여기에 한 줄 소개글',
    thumbnail: blaaSolThumb, // 나중에 이미지 추가
  },
  {
    path: 'cph-fw',
    title: 'CPH FW',
    description: '여기에 한 줄 소개글',
    thumbnail: blaaSolThumb,
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className={styles.title}>Projects</h2>
      {projectList.map((project, i) => (
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
            <div className={styles.projectTitle}>
              {project.title}
            </div>
            <div className={styles.description}>{project.description}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}