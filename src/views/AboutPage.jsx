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
    caption: 'In my free time',
    images: [
      { src: freetime1, alt: '뜨개질하는 모습' },
      { src: freetime2, alt: '친구들과 함께 요리한 날' },
      { src: freetime3, alt: '직접 만든 반찬' },
    ],
  },
  {
    caption: 'God, I love grocery shopping in a big supermarket!',
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

      {/* ── 상단 ── */}
      <section className={styles.topAbout}>
        <div className={styles.textBox}>
          <h1 className={styles.heading}>About Gayoung</h1>

          <p>
            I like to listen, look closer, and figure things out. I came to
            design after four years in customer service at Booking.com, where I
            spent every day listening to customers, solving problems, and
            seeing the product from their side of the screen.
          </p>
          <p>
            That experience shaped how I approach design. I'm interested in the
            moments when what we expect users to do doesn't quite match what
            they actually do.
          </p>
          <p>
            That gap is what motivates me to dig deeper, look for solutions, and
            try different ways to make the experience work better.
          </p>

          
           <a href="/resume-gayoung.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            View my resume
          </a>
        </div>

        <img src={portrait} alt="한가영" className={styles.portrait} />
      </section>
      <section className={styles.middleAbout}>
        <div className={styles.middleInner}>
              <h2 className={styles.middleHeader}>
            I think...
        </h2>
        <div className={styles.middleFlex}>
            <img src={tivoli} className={styles.middleImg} alt="tivoli"/>
            <p 
            ref={paraRef}
            className={`${styles.middlePara} ${paraInView ? styles.visible : ''}`}
            >
            👀 There’s always another perspective worth looking from.
            </p>
        </div>
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