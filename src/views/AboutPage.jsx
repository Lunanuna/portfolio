import styles from './AboutPage.module.css';
import { useReveal } from '../hooks/useReveal';
import { useScrolled } from '../hooks/useScrolled'; 

// images
import portrait from '../assets/images/About/portrait.png';
import film1 from '../assets/images/About/film1.png';
import film2 from '../assets/images/About/film2.png';
import film3 from '../assets/images/About/film3.png';
import film4 from '../assets/images/About/film4.png';
import film5 from '../assets/images/About/film5.png';
import film6 from '../assets/images/About/film6.png';
import freetime1 from '../assets/images/About/freetime1.png';
import freetime2 from '../assets/images/About/freetime2.png';
import freetime3 from '../assets/images/About/freetime3.png';
import freetime4 from '../assets/images/About/freetime4.png';
import karaoke1 from '../assets/images/About/karaoke1.png';
import karaoke2 from '../assets/images/About/karaoke2.png';
import test from '../assets/images/About/test.png';
import testMobile from '../assets/images/About/testMobile.png';

// --i : 진입 애니메이션 등장 순서
const rise = (i) => ({ '--i': i });

/* 갤러리 데이터 — 사진 추가/변경은 여기서만 하면 됨
   id 추가: caption 이 JSX 인 경우가 있어서 key 로 쓸 수 없음 */
const GALLERIES = [
  {
    id: 'freetime',
    caption: 'Part-time chef 🧑🏻‍🍳, part-time knitter 🧶',
    images: [
      { src: freetime1, alt: 'cooking volunteer' },
      { src: freetime2, alt: 'Ramsløg kimchi' },
      { src: freetime3, alt: 'first sweater I knitted' },
      { src: freetime4, alt: 'binge watching and knitting' },
    ],
  },
  {
    id: 'karaoke',
    caption: (
      <>
        And also a professional karaoke singer 😊🎤{' '}
        <span className={styles.SpanColor}>(when the time is right)</span>
      </>
    ),
    images: [
      { src: karaoke1, alt: 'karaoke 1' },
      { src: karaoke2, alt: 'karaoke 2' },
    ],
  },
  {
    id: 'film',
    caption: 'Last but not least, very much a movie person 🎬',
    images: [
      { src: film1, alt: 'Parasite' },
      { src: film2, alt: 'Being John Malkovich' },
      { src: film3, alt: 'Chungking Express' },
      { src: film4, alt: 'Burning' },
      { src: film5, alt: 'Another Round' },
      { src: film6, alt: 'Kamome Diner' },
    ],
  },
];

/* 갤러리 한 블록 — 각자 자기 위치에서 리빌되도록 컴포넌트로 분리 */
function GalleryBlock({ gallery }) {
  const [ref, shown] = useReveal();

  return (
    <div
      ref={ref}
      className={`${styles.gallery} ${styles.reveal} ${shown ? styles.visible : ''}`}
    >
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
  );
}

export default function AboutPage() {
  const btnShown = useScrolled();       // view resume 버튼
  const [midRef, midShown] = useReveal();       // 중간 이미지
  const [subRef, subShown] = useReveal();       // A little more about me

  return (
    <main className={styles.mainAbout}>
      {/* ── 제목 ── */}
      <section className={styles.headingSection}>
        <div className={styles.headingInner}>
          {/* 순서는 제일 먼저(0), 대신 더 멀리서 더 느긋하게 — CSS 에서 처리 */}
          <h1 className={`${styles.heading} ${styles.rise}`} style={rise(0)}>
            About Gayoung
          </h1>
        </div>
      </section>

      {/* ── 상단 ── */}
      <section className={styles.topAbout}>
        <div className={styles.topInner}>
          <img
            src={portrait}
            alt="한가영"
            className={`${styles.portrait} ${styles.rise}`}
            style={rise(1)}
          />

          <div className={styles.textBox}>
            <h3 className={styles.rise} style={rise(2)}>
              I'm curious to see things from another perspective.
            </h3>
            <p className={styles.rise} style={rise(3)}>
              I've always enjoyed drawing and making little things of my own. I used to sketch my teachers or turn little moments with friends into comics, and I still enjoy noticing those little things and turning them into something of my own.
            </p>
            <p className={styles.rise} style={rise(4)}>
              I came to design after four years in customer service at Booking.com, where I listened to people from different backgrounds and helped them navigate the website. When something that seemed obvious to me wasn't obvious to them, I learned to step back and see it from their side.
            </p>
            <p className={styles.rise} style={rise(5)}>
              When I design, I often think about how something might be understood by someone seeing it for the first time, and whether what I intended actually comes across. I like keeping things simple and considered, with a subtle touch of humor when it feels right, while paying attention to both the bigger picture and the small details.
            </p>

            {/* 버튼만 스크롤 리빌 — 큰 화면에서 이미 보이면 즉시 나타남 */}
            <a
              href="/resume-gayoung.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.buttonReveal} ${btnShown ? styles.visible : ''}`}
            >
              view resume
            </a>
          </div>
        </div>
      </section>

      {/* ── 중간 ── */}
      <section className={styles.middleAbout}>
        <div
          ref={midRef}
          className={`${styles.middleInner} ${styles.reveal} ${midShown ? styles.visible : ''}`}
        >
          <img src={test} alt="" className={`${styles.testImg} ${styles.onlyDesktop}`} />
          <img src={testMobile} alt="..." className={`${styles.testImg} ${styles.onlyMobile}`} />
        </div>
      </section>

      {/* ── 하단 ── */}
      <section className={styles.bottomAbout}>
        <div className={styles.bottomInner}>
          <h2
            ref={subRef}
            className={`${styles.subHeading} ${styles.reveal} ${subShown ? styles.visible : ''}`}
          >
            <span role="img" aria-label="여성">💁🏻‍♀️</span> A little more about me
          </h2>

          {GALLERIES.map((gallery) => (
            <GalleryBlock key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </section>
    </main>
  );
}