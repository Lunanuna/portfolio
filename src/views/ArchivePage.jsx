import styles from './ArchivePage.module.css';

/* ============================================================
   이미지 import
   ------------------------------------------------------------
   저장 경로: src/assets/images/archive/
   아래 파일명 그대로 저장하면 바로 연결돼.
   ============================================================ */

// 코드 프로젝트 썸네일 — 배포된 사이트 스크린샷
// 셋 다 브라우저 창 1440px 폭으로 통일해서 찍기
import weatherThumb from '../assets/images/archive/thumb-weather.png';
import etchThumb from '../assets/images/archive/thumb-etch.png';
import libraryThumb from '../assets/images/archive/thumb-library.png';

// 일러스트 — 가로 1600px, WebP 권장
import veniceImg from '../assets/images/archive/venice.png';
import finnImg from '../assets/images/archive/finn.png';
import lahavImg from '../assets/images/archive/lahav.png';

/* ============================================================
   데이터
   ------------------------------------------------------------
   문구 수정은 여기서만 하면 됨.
   ============================================================ */

const CODE_PROJECTS = [
  {
    title: 'Weather App',
    tags: ['React', 'API'],
    // ↓ 설명은 초안이야. 실제 기능에 맞게 고쳐줘
    description:
      'Search a city and see its current weather, pulled live from an API.',
    thumbnail: weatherThumb,
    demo: 'https://lunanuna.github.io/',
    // ↓ GitHub 주소는 Pages 주소에서 유추한 거야. 실제 저장소명 확인 필요
    github: 'https://github.com/lunanuna/lunanuna.github.io',
  },
  {
    title: 'Etch A Sketch',
    tags: ['JavaScript', 'DOM'],
    description:
      'My first project built purely with DOM manipulation.',
    thumbnail: etchThumb,
    demo: 'https://lunanuna.github.io/Etch-A-Sketch/',
    github: 'https://github.com/lunanuna/Etch-A-Sketch',
  },
  {
    title: 'Library',
    tags: ['JavaScript', 'Objects'],
    description:
      'I built this to get comfortable with JavaScript objects.',
    thumbnail: libraryThumb,
    demo: 'https://lunanuna.github.io/Library-2/',
    github: 'https://github.com/lunanuna/Library-2',
  },
];

const ILLUSTRATIONS = [
  {
    title: 'Venice',
    tool: 'Illustrator', // ← 실제 사용한 도구로 수정
    src: veniceImg,
    // alt = 그림에 무엇이 그려져 있는지 묘사. 제목 복붙 금지
    alt: '베네치아 운하 앞 보도에 서 있는 갈매기와 비둘기',
  },
  {
    title: 'Finn og Mig',
    tool: 'Procreate',
    src: finnImg,
    alt: '야외 테이블에서 담배를 든 젊은 여성과 마주 앉아 글을 쓰는 백발의 노인',
  },
  {
    title: 'Oink Revenge',
    tool: 'Illustrator',
    src: lahavImg,
    alt: '붉은 바닥의 작업장에서 놀란 표정을 짓는 동물 캐릭터 두 명과 금속 선반',
  },
];

export default function ArchivePage() {
  return (
    <main className={styles.page}>
      {/* ========== 1. 헤더 (가운데 정렬) ========== */}
      <header className={styles.header}>
        <h1 className={styles.title}>Early Solo Work</h1>
        <p className={styles.lead}>
          Self-taught JavaScript, React practice, and illustration work from
          before I started studying multimedia design at Erhvervsakademi Aarhus.
          A few things I wanted to keep around.
        </p>
      </header>

      {/* ========== 2. Code Practice ========== */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Code Practice</h2>

        <ul className={styles.codeGrid}>
          {CODE_PROJECTS.map((project) => (
            <li key={project.title} className={styles.codeCard}>
              <div className={styles.thumbWrap}>
                {/* alt는 비워둠 — 바로 아래 제목 링크가 같은 정보를 이미 전달함 */}
                <img
                  src={project.thumbnail}
                  alt=""
                  className={styles.thumb}
                  loading="lazy"
                />
              </div>

              <h3 className={styles.codeTitle}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stretchedLink}
                >
                  {project.title}
                </a>
              </h3>

              <p className={styles.codeDesc}>{project.description}</p>

              <div className={styles.codeFooter}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  Code ↗
                </a> */}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== 3. Illustration ========== */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Illustration</h2>

        <ul className={styles.gallery}>
          {ILLUSTRATIONS.map((item) => (
            <li key={item.title}>
              <figure className={styles.artCard}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.art}
                  loading="lazy"
                />
                <figcaption className={styles.artMeta}>
                  <h3 className={styles.artTitle}>{item.title}</h3>
                  <span className={styles.artTool}>{item.tool}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}