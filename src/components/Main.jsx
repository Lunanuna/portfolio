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
         <div>Multimedia design student with a focus on UX/UI</div>
         <div>
          I always digging into the small details that make an interface feel right.
         </div>
         <div>
          Also I am currently looking for an intership in the field!
         </div>
         
          </div>
      </section>
    </main>
  );
}