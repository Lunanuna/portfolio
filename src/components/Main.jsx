import styles from './Main.module.css';
import profile from '../assets/images/profile/about.jpg';
import { Link } from 'react-router-dom';

// --i : 등장 순서. 숫자가 클수록 늦게 나타남
const rise = (i) => ({ '--i': i });

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.topSection}>
        <div className={styles.heading}>
          <div className={`${styles.role} ${styles.rise}`} style={rise(0)}>
            UX/UI Designer
          </div>
          <div className={`${styles.name} ${styles.rise}`} style={rise(1)}>
            Gayoung Han
          </div>
        </div>
      </section>

      <section className={styles.bottomSection}>
        <img
          className={`${styles.profileImage} ${styles.rise}`}
          style={rise(2)}
          src={profile}
          alt="profile"
        />
        <div className={styles.introduction}>
          <div className={styles.introText}>
            <p className={styles.rise} style={rise(3)}>
              Hejsa <span className={styles.koreanHello}>안녕하세요!</span>
            </p>
            <p className={styles.rise} style={rise(4)}>
              My name is Gayoung and I am studying Multimedia Design specializing in UI/UX.
            </p>
            <p className={styles.rise} style={rise(5)}>
              I'm a detail-oriented and curious designer who likes to dig deeper into the things I notice.
            </p>
            <p className={styles.rise} style={rise(6)}>
              I'm currently looking for{' '}
              <span className={styles.highlight}>
                an internship opportunity for Spring 2027 based in Copenhagen
              </span>
              , where I can learn, contribute, and grow as a designer.
            </p>
          </div>
          {/* 링크가 아니라 nav 에 애니메이션 — navLink의 hover transition과 겹치지 않게 */}
          <nav className={styles.rise} style={rise(7)}>
            <Link className={styles.navLink} to="/#Projects">
              Explore My Projects
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}