import styles from './Main.module.css';
import profile from '../assets/images/profile/about.jpeg';

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.topSection}>
        <div className={styles.heading}>
          <div className={styles.name}>My name is Gayoung</div>
          <div className={styles.role}>
            <span>&</span> I am a UX/UI designer
          </div>
        </div>
        <div className={styles.contact}>hanga93@gmail.com</div>
      </section>

      <section className={styles.bottomSection}>
        <img className={styles.profileImage} src={profile} alt="profile" />
        <div className={styles.introduction}>
         I am a multimedia design student, specializing in UX/UI Design. </div>
      </section>
    </main>
  );
}