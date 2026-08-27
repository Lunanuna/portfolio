import styles from './AboutPage.module.css';
import useInView from '../hooks/useInView';

// images
import portrait from '../assets/images/About/portrait.png';
import tivoli from '../assets/images/About/tivoli.png';
import film1 from '../assets/images/About/film1.png';
import film2 from '../assets/images/About/film2.png';
import film3 from '../assets/images/About/film3.png';
import film4 from '../assets/images/About/film4.png';
import film5 from '../assets/images/About/film5.png';
import film6 from '../assets/images/About/film6.png';
import freetime1 from '../assets/images/About/freetime1.png';
import freetime2 from '../assets/images/About/freetime2.png';
import freetime3 from '../assets/images/About/freetime3.png';
import inco1 from '../assets/images/About/inco1.png';
import inco2 from '../assets/images/About/inco2.png';
import test from '../assets/images/About/test.png';
import testMobile from '../assets/images/About/testMobile.png'

/* 갤러리 데이터 — 사진 추가/변경은 여기서만 하면 됨 */
const GALLERIES = [
  {
    caption: "Films I've watched more than once",
    images: [
      { src: film1, alt: 'Parasite' },
      { src: film2, alt: 'Being John Malkovich' },
      { src: film3, alt: 'Chungking Express' },
      { src: film4, alt: 'Burning' },
      { src: film5, alt: 'Another Round' },
      { src: film6, alt: 'Kamome Diner' },
    ],
  },
  {
    caption: 'Things I do in my free time 🎵',
    images: [
      { src: freetime1, alt: '뜨개질하는 모습' },
      { src: freetime2, alt: '친구들과 함께 요리한 날' },
      { src: freetime3, alt: '직접 만든 반찬' },
    ],
  },
  {
    caption: 'I love grocery shopping in a big supermarket!',
    images: [
      { src: inco1, alt: 'Inco 매장 외관' },
      { src: inco2, alt: 'Inco에서 장 보는 모습' },
    ],
  },
];

export default function AboutPage() {
  const [paraRef, paraInView] = useInView();

  return (
    <main className={styles.mainAbout}>
      {/* ── 제목 ── */}
      <section className={styles.headingSection}>
        <div className={styles.headingInner}>
          <h1 className={styles.heading}>About Gayoung</h1>
        </div>
      </section>

      {/* ── 상단 ── */}
      <section className={styles.topAbout}>
        <div className={styles.topInner}>
          <img src={portrait} alt="한가영" className={styles.portrait} />

          <div className={styles.textBox}>
            <h3>I’m curious to see things from another perspective.</h3>
            <p>
              I’ve always enjoyed drawing and making little things of my own. I used to sketch my teachers or turn little moments with friends into comics, and I still enjoy noticing those little things and turning them into something of my own.
            </p>
            <p>
              I came to design after four years in customer service at Booking.com, where I listened to people from different backgrounds and helped them navigate the website. When something that seemed obvious to me wasn’t obvious to them, I learned to step back and see it from their side.
            </p>
            <p>
              When I design, I often think about how something might be understood by someone seeing it for the first time, and whether what I intended actually comes across. I like keeping things simple and considered, with a subtle touch of humor when it feels right, while paying attention to both the bigger picture and the small details.
            </p>

            <a
              href="/resume-gayoung.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              work with me
            </a>
          </div>
        </div>
      </section>

      {/* ── 중간 ── */}
      <section className={styles.middleAbout}>
        <div className={styles.middleInner}>
          <img src={test} alt="" className={`${styles.testImg} ${styles.onlyDesktop}`} />
          <img src={testMobile} alt="..." className={`${styles.testImg} ${styles.onlyMobile}`} />

          {/* <h2 className={styles.middleHeader}>I believe...</h2>
          <div className={styles.middleFlex}>
            <img src={tivoli} className={styles.middleImg} alt="tivoli" />
            <p
              ref={paraRef}
              className={`${styles.middlePara} ${paraInView ? styles.visible : ''}`}
            >
              👀 There’s always another perspective worth looking from.
            </p>
          </div> */}
        </div>
      </section>

      {/* ── 하단 ── */}
      <section className={styles.bottomAbout}>
        <div className={styles.bottomInner}>
          <h2 className={styles.subHeading}>
            <span role="img" aria-label="여성">💁🏻‍♀️</span> A little more about me
          </h2>

          {GALLERIES.map((gallery) => (
            <div key={gallery.caption} className={styles.gallery}>
              <p>{gallery.caption}</p>
              <div className={styles.imageArr}>
                {gallery.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={styles.galleryImg}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}