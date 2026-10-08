import { useEffect } from 'react';
import styles from './Main.module.css';

import sticker2 from '../assets/icons/sticker2.webp';
import sticker3 from '../assets/icons/sticker3.webp';
import sticker4 from '../assets/icons/sticker4.webp';
import sticker8 from '../assets/icons/sticker8.webp';

const rise = (i) => ({ '--i': i });

const DOODLES = [
  { cls: 'd1', src: sticker4 }, // 만세 인물 — 왼쪽 위
  { cls: 'd2', src: sticker8 }, // 초록 물방울 — 오른쪽 위
  { cls: 'd3', src: sticker3 }, // 초록 생물 — 왼쪽 아래
  { cls: 'd4', src: sticker2 }, // 분홍 토끼 — 오른쪽 아래
];

export default function Main() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * -2;
      const ny = (e.clientY / window.innerHeight - 0.5) * -2;

      const root = document.documentElement;

      root.style.setProperty('--mx', `${(nx * 12).toFixed(1)}px`);
      root.style.setProperty('--my', `${(ny * 12).toFixed(1)}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {/* floating stickers */}
        <div className={styles.doodleLayer} aria-hidden="true">
          {DOODLES.map((d) => (
            <span
              key={d.cls}
              className={`${styles.drift} ${styles[d.cls]}`}
            >
              <span className={styles.bob}>
                <img src={d.src} alt="" />
              </span>
            </span>
          ))}
        </div>

        {/* main text */}
        <div className={styles.heroContent}>
          <h1
            className={`${styles.name} ${styles.rise}`}
            style={rise(0)}
          >
            GAYOUNG HAN
          </h1>

          <p
            className={`${styles.intro} ${styles.rise}`}
            style={rise(1)}
          >
            Multimedia Design student focused on{' '}
            <span className={styles.highlight}>UX/UI design. </span>
            <br className={styles.desktopBreak} />
            Also into user research and front-end development.
          </p>
        </div>
      </section>
    </main>
  );
}