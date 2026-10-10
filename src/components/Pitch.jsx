
import styles from './Pitch.module.css';
import { useReveal } from '../hooks/useReveal';

import pitchPortrait from '../assets/images/profile/pitch-portrait.png';
import checkIcon from '../assets/icons/check-mark.svg';

const packageList = [
  {
    eyebrow: 'Fixed',
    title: 'Mandatory',
    subtitle: '10 weeks mandatory internship',
    items: [
      'Available from 4th January to 12th March 2027',
    ],
  },
  {
    eyebrow: 'Extended',
    title: 'Stay Longer',
    subtitle: 'Internship + Flexible Collaboration',
    items: [
      'Available beyond the 10 weeks while working on my thesis project.',
      'Happy to keep supporting the team and keep learning 😊',
    ],
  },
  {
    eyebrow: 'Long-term',
    title: 'Keep Me Around',
    subtitle: 'Internship + Student Job',
    items: [
      'Available for a student job alongside my studies',
      'Happy to keep contributing and growing with the team 😄',
    ],
  },
];


/* ============================================================
   PACKAGE CARD
   ============================================================ */

function PackageCard({ pkg, index }) {
  const [ref, shown] = useReveal();

  return (
    <article
      ref={ref}
      style={{ '--i': index }}
      className={`${styles.packageCard} ${styles.reveal} ${
        shown ? styles.visible : ''
      }`}
    >
      <span className={styles.eyebrow}>
        {pkg.eyebrow}
      </span>

      <h3 className={styles.packageTitle}>
        {pkg.title}
      </h3>

      <p className={styles.packageSubtitle}>
        {pkg.subtitle}
      </p>

      <div className={styles.divider} />

      <ul className={styles.packageList}>
        {pkg.items.map((item) => (
          <li key={item}>
            <img
              src={checkIcon}
              alt=""
              aria-hidden="true"
              className={styles.checkIcon}
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}


export default function Pitch() {
  /* Intro section */
  const [introRef, introShown] = useReveal();

  /* Chat section */
  const [chatRef, chatShown] = useReveal();

  /* Package heading */
  const [packageHeadRef, packageHeadShown] = useReveal();

  return (
    <section className={styles.pitch}>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <div
        ref={introRef}
        className={`${styles.intro} ${
          introShown ? styles.visible : ''
        }`}
      >
        <div
          className={`${styles.portraitWrapper} ${styles.reveal}`}
          style={{ '--i': 0 }}
        >
          <img
            src={pitchPortrait}
            alt="Gayoung Han"
            className={styles.portrait}
          />
        </div>

        <div className={styles.introContent}>
          <p
            className={`${styles.availability} ${styles.reveal}`}
            style={{ '--i': 0 }}
          >
            Available January 4 – March 12, 2027
          </p>

          <h2
            className={`${styles.mainTitle} ${styles.reveal}`}
            style={{ '--i': 1 }}
          >
            Try me for 10 weeks!
          </h2>

          <p
            className={`${styles.introText} ${styles.reveal}`}
            style={{ '--i': 2 }}
          >
            Hi, I am probably your future intern who is always looking to learn
            something new and put it into practice.
          </p>

          <div
            className={`${styles.expect} ${styles.reveal}`}
            style={{ '--i': 3 }}
          >
            <p>During those 10 weeks, you can expect:</p>

            <ul>
              <li>UX/UI design, user research, and prototyping</li>
              <li>
                Design systems, usability testing, and a bit of front-end
              </li>
              <li>
                clear communication and a collaborative mindset
              </li>
              <li>
                complimentary good vibes and the occasional questionable joke
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* ======================================================
          CHAT — ANIMATED
      ====================================================== */}

      <div
        ref={chatRef}
        className={`${styles.chat} ${
          chatShown ? styles.visible : ''
        }`}
      >
        <div className={styles.chatRight}>
          <div
            className={`${styles.bubble} ${styles.blueBubble} ${styles.chatMessage} ${styles.chatMessageOne}`}
          >
            Okay Gayoung,
            <br />
            10 weeks sounds good!
          </div>

          <div
            className={`${styles.bubble} ${styles.blueBubble} ${styles.chatMessage} ${styles.chatMessageTwo}`}
          >
            But what if we need more?
          </div>
        </div>

        <div className={styles.chatLeft}>
          <div
            className={`${styles.bubble} ${styles.greyBubble} ${styles.chatMessage} ${styles.chatMessageReply}`}
          >
            Good question!
            <br />
            I came prepared. 😊
          </div>

          <div className={styles.typingIndicator} aria-hidden="true">
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
          </div>
        </div>
      </div>


      {/* ======================================================
          PACKAGE HEADER
      ====================================================== */}

      <div
        ref={packageHeadRef}
        className={`${styles.packageIntro} ${
          packageHeadShown ? styles.visible : ''
        }`}
      >
        <h2
          className={`${styles.packageHeading} ${styles.reveal}`}
          style={{ '--i': 0 }}
        >
          10 Weeks, or Maybe More?
        </h2>

        <p
          className={`${styles.packageLead} ${styles.reveal}`}
          style={{ '--i': 1 }}
        >
          Start with the 10 weeks, with the option to continue if it makes sense
          for both sides.
        </p>
      </div>


      {/* ======================================================
          PACKAGE CARDS
      ====================================================== */}

      <div className={styles.packageGrid}>
        {packageList.map((pkg, index) => (
          <PackageCard
            key={pkg.title}
            pkg={pkg}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}
