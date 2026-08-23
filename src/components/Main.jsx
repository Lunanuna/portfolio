import styles from './Main.module.css';
import profile from '../assets/images/profile/about.jpeg';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.topSection}>
        <div className={styles.heading}>
          <div className={styles.role}>
            UX/UI Designer
          </div>
           <div className={styles.name}>Gayoung Han</div>
        </div>
      </section>

      <section className={styles.bottomSection}>
        <img className={styles.profileImage} src={profile} alt="profile" />
        <div className={styles.introduction}>
         <div className={styles.introText}>
          <p>Hejsa!</p>
          <p>My name is Gayoung and I am studying Multimedia Design specializing in UI/UX.</p>
          <p> I'm a detail-oriented and curious designer who likes to dig deeper into the things I notice.</p>
          <p>I’m currently looking for <span className={styles.highlight}>an internship opportunity for Spring 2027 based in Copenhagen</span>, where I can learn, contribute, and grow as a designer.</p>
          
         </div>
         <nav>
          <Link className={styles.navLink} to="/#Projects" >Explore My Projects</Link>
         </nav>
          </div>
      </section>
    </main>
  );
}