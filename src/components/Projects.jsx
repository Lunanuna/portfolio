
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const projectList = [
  { path: 'blaa-sol', title: 'Blå Sol', description: 'We redesigned the festival app' },
  { path: 'spil-cafeen', title: 'Spil Cafeen' },
  { path: 'cph-fw', title: 'CPH FW' },
];

export default function Projects() {
  return (
    <section>
      <h2 className={styles.title}>Projects</h2>
      {projectList.map((project, i) => (
        <div key={project.path}>
          <Link to={`/projects/${project.path}`}>
             {project.title}
          </Link>
          <div>{project.description}</div>
        </div>
      ))}
    </section>
  );
}