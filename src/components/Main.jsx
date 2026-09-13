import { useEffect } from 'react';
import styles from './Main.module.css';
import { useReveal } from '../hooks/useReveal';

import portrait from '../assets/images/profile/portrait.webp';
import sticker2 from '../assets/icons/sticker2.webp';
import sticker3 from '../assets/icons/sticker3.webp';
import sticker4 from '../assets/icons/sticker4.webp';
import sticker8 from '../assets/icons/sticker8.webp';

const rise = (i) => ({ '--i': i });

/* 배경 스티커 (데스크톱).
   위치·크기·속도는 전부 CSS 의 .d1 ~ .d4 에서 조절 — 여기선 이미지만 연결 */
const DOODLES = [
  { cls: 'd1', src: sticker8 },  // 초록 물방울 — 이름 오른쪽
  { cls: 'd2', src: sticker4 },  // 만세 인물 — 왼쪽 중간
  { cls: 'd3', src: sticker2 },  // 분홍 토끼 — 오른쪽 아래
  { cls: 'd4', src: sticker3 },  // 초록 생물 — 왼쪽 아래
];

export default function Main() {
  // 소개 섹션이 화면에 들어오면 안쪽 요소들이 순서대로 올라옴
  const [pitchRef, pitchShown] = useReveal({ threshold: 0.15 });

  // 마우스 반응 — 데스크톱에서만. 스티커마다 depth 만큼 다르게 따라옴
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * -2;
      const ny = (e.clientY / window.innerHeight - 0.5) * -2;
      const root = document.documentElement;
      root.style.setProperty('--mx', `${(nx * 14).toFixed(1)}px`);
      root.style.setProperty('--my', `${(ny * 14).toFixed(1)}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <main className={styles.main}>
      {/* 배경 레이어 — 모든 콘텐츠 뒤, 클릭 통과 */}
      <div className={styles.doodleLayer} aria-hidden="true">
        {DOODLES.map((d) => (
          <span key={d.cls} className={`${styles.drift} ${styles[d.cls]}`}>
            {/* 안쪽을 한 겹 더 두는 이유: 바깥은 마우스, 안쪽은 부유.
                transform 은 한 요소에 하나만 걸려서 나눠야 함 */}
            <span className={styles.bob}>
              <img src={d.src} alt="" loading="lazy" />
            </span>
          </span>
        ))}
      </div>

      {/* ── 히어로 ── */}
      <section className={styles.hero}>
        <h1 className={`${styles.name} ${styles.rise}`} style={rise(0)}>
          <span>GAYOUNG</span> <span>HAN</span>
        </h1>

        <img
          className={`${styles.portrait} ${styles.rise}`}
          style={rise(1)}
          src={portrait}
          alt="Gayoung Han"
        />

        <div className={`${styles.meta} ${styles.rise}`} style={rise(2)}>
          <p>UX/UI<br />Designer</p>
          <p>Based in<br />Copenhagen</p>
        </div>
      </section>

      {/* ── 소개 ── */}
      <section
        ref={pitchRef}
        className={`${styles.pitch} ${pitchShown ? styles.visible : ''}`}
      >
        {/* 모바일 전용 스티커 — 소개 섹션 기준으로 배치.
            페이지 전체 기준(%)으로 잡으면 좁은 화면에서 글자 위로 올라옴 */}
        <span className={`${styles.drift} ${styles.m1}`} aria-hidden="true">
          <span className={styles.bob}>
            <img src={sticker4} alt="" loading="lazy" />
          </span>
        </span>
        <span className={`${styles.drift} ${styles.m2}`} aria-hidden="true">
          <span className={styles.bob}>
            <img src={sticker2} alt="" loading="lazy" />
          </span>
        </span>

        <p className={`${styles.eyebrow} ${styles.pitchItem}`} style={rise(0)}>
          Available January 4 – March 12, 2027
        </p>

        <h2 className={`${styles.pitchTitle} ${styles.pitchItem}`} style={rise(1)}>
          Try me for 10 weeks!
        </h2>

        <p className={`${styles.pitchBody} ${styles.pitchItem}`} style={rise(2)}>
          Hejsa! I'm a Multimedia Design student specializing in UX/UI design, with a bit of
          front-end skills. I work across user research, ideation, prototyping, and
          implementation to create digital solutions. I also care about being someone
          people enjoy working with, whether that means being helpful, keeping a good
          mood, or knowing when a little humor is needed.
        </p>

        <a
          className={`${styles.scrollLink} ${styles.pitchItem}`}
          style={rise(3)}
          href="#Projects"
        >
          <span className={styles.arrow} aria-hidden="true" />
          Scroll to the projects
        </a>

        <p className={`${styles.aside} ${styles.pitchItem}`} style={rise(4)}>
          (actually they are right below)
        </p>
      </section>
    </main>
  );
}