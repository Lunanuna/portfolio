import styles from './SpilCafeenProject.module.css';

/* ============================================================
   이미지 import
   ------------------------------------------------------------
   저장 경로: src/assets/images/case-spilcafeen/
   아래 파일명 그대로 저장하면 바로 연결돼.
   피그마에서 export 할 때 2x(@2x) 정도로 뽑으면 선명해.
   ============================================================ */

import logo from '../assets/images/case-spilcafeen/logo.png';
// 히어로 우측 Spilcaféen 로고

import heroMockup from '../assets/images/case-spilcafeen/hero-mockup.png';
// 히어로 아래 빨간 대각선 목업 밴드 (화면 전체 폭으로 깔리는 통이미지)

import boardCafeView from '../assets/images/case-spilcafeen/board-cafe-view.png';
// Project Overview 아래 카페 실사 사진

import diamondIcon1 from '../assets/images/case-spilcafeen/diamond-icon1.svg';
import diamondIcon2 from '../assets/images/case-spilcafeen/diamond-icon2.svg';
import diamondIcon3 from '../assets/images/case-spilcafeen/diamond-icon3.svg';
import diamondIcon4 from '../assets/images/case-spilcafeen/diamond-icon4.svg';
// Double Diamond 카드 4개 상단 주사위 아이콘 (Discover → Deliver 순서)

import userPersona from '../assets/images/case-spilcafeen/user-persona.png';
// User Persona 보드 통이미지
// ⚠️ 리스트에 'uer-persona.png' 로 적혀있었는데 오타 같아서 user-persona.png 로 맞춰뒀어.
//    파일명 그대로 갈 거면 위 import 경로만 바꿔줘.

import typography from '../assets/images/case-spilcafeen/typography.png';
// UI Design > Typography 의 Text Styles 표

import colorVariables1 from '../assets/images/case-spilcafeen/color-variables1.png';
import colorVariables2 from '../assets/images/case-spilcafeen/color-variables2.png';
import colorVariables3 from '../assets/images/case-spilcafeen/color-variables3.png';
import colorVariables4 from '../assets/images/case-spilcafeen/color-variables4.png';
// Color 섹션 2×2 그리드
// 1: Primary and Secondary Colors / 2: Background Colors
// 3: Text Colors                  / 4: Icon Colors

import uiCardBig1 from '../assets/images/case-spilcafeen/ui-card-big-1.png';
import uiCardBig2 from '../assets/images/case-spilcafeen/ui-card-big-2.png';
import uiCardBig3 from '../assets/images/case-spilcafeen/ui-card-big-3.png';
import uiCardBig4 from '../assets/images/case-spilcafeen/ui-card-big-4.png';
// Card Components > UI Card big (레드 배경 위 4개)

import uiCardSmall1 from '../assets/images/case-spilcafeen/ui-card-small-1.png';
import uiCardSmall2 from '../assets/images/case-spilcafeen/ui-card-small-2.png';
import uiCardSmall3 from '../assets/images/case-spilcafeen/ui-card-small-3.png';
import uiCardSmall4 from '../assets/images/case-spilcafeen/ui-card-small-4.png';
import uiCardSmall5 from '../assets/images/case-spilcafeen/ui-card-small-5.png';
import uiCardSmall6 from '../assets/images/case-spilcafeen/ui-card-small-6.png';
// Card Components > UI Card small (3개씩 2줄)

import banner1 from '../assets/images/case-spilcafeen/banner-1.png';
import banner2 from '../assets/images/case-spilcafeen/banner-2.png';
import banner3 from '../assets/images/case-spilcafeen/banner-3.png';
// import banner4 from '../assets/images/case-spilcafeen/banner-4.png';
// import banner5 from '../assets/images/case-spilcafeen/banner-5.png';
// Card Components > Banner
// ⚠️ 원본 PDF 엔 배너가 5개(3개 + 2개 줄)로 보이던데 리스트엔 3개만 있어서 3개로 짰어.
//    5개면 banner-4, banner-5 import 추가하고 아래 BANNER_CARDS 배열에만 넣으면 돼.

import firstAttempt from '../assets/images/case-spilcafeen/first-attempt.png';
import difficultyIcon from '../assets/images/case-spilcafeen/difficulty-icon.png';
import finalDifficulty from '../assets/images/case-spilcafeen/final.png';
// Preference Test 3단 비교 (First Attempt / Icon Iteration / Final)

import prototypeVideo from '../assets/images/case-spilcafeen/interactive-prototype.mp4';
// Final Screens 인터랙티브 프로토타입 영상
// mp4 는 assets 대신 public/ 에 두고 src="/interactive-prototype.mp4" 로 써도 돼.
// (용량 큰 영상은 public 쪽이 빌드가 가벼움)

/* ============================================================
   데이터
   ------------------------------------------------------------
   텍스트는 전부 여기 모아뒀어. 문구 수정은 여기서만 하면 됨.
   ============================================================ */

// 히어로 아래 태그
const HERO_TAGS = ['UX/UI Design', 'Interactive Prototyping'];

// 메타 정보 행 (MY ROLE / DELIVERABLE / ...)
const META_ITEMS = [
  { label: 'MY ROLE', value: 'UX/ UI Designer' },
  { label: 'DELIVERABLE', value: 'Interactive Prototype' },
  { label: 'TOOLS', value: 'Figma & Figjam' },
  { label: 'DATE', value: '2026' },
  { label: 'TYPE', value: 'School Project' },
];

// My Role > Main Focus 항목
const MAIN_FOCUS = [
  'Mobile First Design',
  'UX Laws & Design Principles',
  'UI Card Design & Layout',
  'Interactive Prototyping',
  'Figma Variables & Design Systems',
];

// Double Diamond 카드 4개
const PROCESS_STEPS = [
  {
    title: 'Discover',
    icon: diamondIcon1,
    items: ['Client Interview', 'Site Visit', 'User Research'],
  },
  {
    title: 'Define',
    icon: diamondIcon2,
    items: ['User Persona', 'User Stories', 'OOUX'],
  },
  {
    title: 'Develop',
    icon: diamondIcon3,
    items: ['Lo-fi Prototype', 'Hi-fi Prototype', 'Preference Test'],
  },
  {
    title: 'Deliver',
    icon: diamondIcon4,
    items: ['Interactive', 'Figma Prototype'],
  },
];

// Color 섹션 2×2 — h4 라벨 + 이미지
const COLOR_ITEMS = [
  { label: 'Primary and Secondary Colors', image: colorVariables1 },
  { label: 'Background Colors', image: colorVariables2 },
  { label: 'Text Colors', image: colorVariables3 },
  { label: 'Icon Colors', image: colorVariables4 },
];

// Card Components (레드 섹션)
const BIG_CARDS = [uiCardBig1, uiCardBig2, uiCardBig3, uiCardBig4];
const SMALL_CARDS = [
  uiCardSmall1,
  uiCardSmall2,
  uiCardSmall3,
  uiCardSmall4,
  uiCardSmall5,
  uiCardSmall6,
];
const BANNER_CARDS = [banner1, banner2, banner3];

// Preference Test 3단 비교
const COMPARE_ITEMS = [
  { label: 'First Attempt', image: firstAttempt },
  { label: 'Difficulty Level Icon Iteration', image: difficultyIcon },
  { label: 'Final', image: finalDifficulty },
];


export default function SpilcafeenProject() {
  return (
    <article className={styles.page}>

      {/* ========== 1. HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>UI Design</p>
          <h1 className={styles.heroTitle}>Spilcaféen</h1>

          <ul className={styles.tagList}>
            {HERO_TAGS.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          <p className={styles.heroLead}>
            Spilcaféen is a design project for a local board game café in Aarhus.
            Through client meetings, field research, and mapping, we explored the
            needs of both the café and its visitors, using our findings to shape
            and prototype a digital application.
          </p>
        </div>

        <div className={styles.heroLogoWrap}>
          <img src={logo} alt="Spilcaféen 로고" className={styles.heroLogo} />
        </div>
      </section>

      {/* ========== 2. 메타 정보 행 ========== */}
      <section className={styles.metaRow}>
        {META_ITEMS.map((item) => (
          <div key={item.label}>
            <p className={styles.metaLabel}>{item.label}</p>
            <p className={styles.metaValue}>{item.value}</p>
          </div>
        ))}
      </section>

      {/* ========== 3. 목업 밴드 (풀블리드) ========== */}
      <div className={styles.mockupBand}>
        <img
          src={heroMockup}
          alt="Spilcaféen 앱 화면 목업"
          className={styles.mockupBandImage}
        />
      </div>

      {/* ========== 4. Project Overview ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Project Overview</h2>
        <p className={styles.body}>
          The Spilcaféen project focused on designing an application prototype
          for a local board game café in Aarhus. We first met with the client to
          understand their business goals and target users, then conducted user
          interviews to explore their needs and behaviours. After mapping our
          findings, we developed an interactive prototype focused on helping
          users easily browse and discover board games they would enjoy.
        </p>
      </section>

      <figure className={styles.wideFigure}>
        <img
          src={boardCafeView}
          alt="Aarhus Brætspilscafé 내부 전경"
          className={styles.wideImage}
        />
        <figcaption className={styles.caption}>
          Photo: Aarhus Brætspilscafé
        </figcaption>
      </figure>

      {/* ========== 5. My Role ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>My Role</h2>
        <p className={styles.body}>
          I was involved throughout the design process, mainly focusing on the
          visual design and how the interface came together as a system. I
          started by setting up Figma variables for color, typography, and
          spacing to create a shared foundation for the team. From there, I
          worked on the hi-fi designs and interactive prototype, continuously
          refining them with the team and incorporating feedback from usability
          testing.
        </p>

        <h3 className={styles.h3}>Main Focus</h3>
        <ul className={styles.focusList}>
          {MAIN_FOCUS.map((item) => (
            <li key={item} className={styles.focusItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ========== 6. Double Diamond 카드 4개 ========== */}
      <section className={styles.processSection}>
        <div className={styles.processRow}>
          {PROCESS_STEPS.map((step) => (
            <div key={step.title} className={styles.processCard}>
              <img
                src={step.icon}
                alt={`${step.title} 아이콘`}
                className={styles.processIcon}
              />
              <h3 className={styles.processTitle}>{step.title}</h3>
              <ul className={styles.processList}>
                {step.items.map((item) => (
                  <li key={item} className={styles.processItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 7. User Persona ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>User Persona</h2>
      </section>
      <figure className={styles.wideFigure}>
        <img
          src={userPersona}
          alt="User Persona 보드"
          className={styles.wideImage}
        />
      </figure>

      {/* ========== 8. UI Design ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>UI Design</h2>

        {/* --- Typography --- */}
        <h3 className={styles.h3}>Typography</h3>
        <figure className={styles.textFigure}>
          <img
            src={typography}
            alt="Text Styles 정의 표"
            className={styles.textImage}
          />
        </figure>

        {/* --- Color --- */}
        <h3 className={styles.h3}>Color</h3>
        <p className={styles.body}>
          I created reusable color variables to maintain consistency and make
          collaboration more efficient. The variables also allowed me to build a
          flexible color system that could easily adapt to both light and dark
          mode.
        </p>

        <div className={styles.colorGrid}>
          {COLOR_ITEMS.map((item) => (
            <div key={item.label} className={styles.colorItem}>
              <h4 className={styles.h4}>{item.label}</h4>
              <img src={item.image} alt={item.label} className={styles.colorImage} />
            </div>
          ))}
        </div>

        {/* --- Spacing & Grid --- */}
        <h3 className={styles.h3}>Spacing &amp; Grid</h3>
        <p className={styles.body}>
          Spacing variables were structured around an 8 point grid system,
          alongside typography and color variables, to maintain consistency and
          create a scalable foundation for the interface.
        </p>

        {/* --- Card Components (설명은 여기, 이미지는 아래 레드 섹션) --- */}
        <h3 className={styles.h3}>Card Components</h3>
        <p className={styles.body}>
          The card UI was created as a reusable component with configurable
          properties, allowing variations to be easily managed while keeping the
          overall design consistent. The layout and spacing were based on an
          8-point grid system to keep the cards consistent across different
          screens.
        </p>
      </section>

      {/* ========== 9. Card Components 이미지 (레드 풀블리드) ========== */}
      <section className={styles.cardSection}>
        <div className={styles.cardInner}>
          <p className={styles.cardLabel}>UI Card big</p>
          <div className={styles.cardRowBig}>
            {BIG_CARDS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`UI 카드 big ${i + 1}`}
                className={styles.cardImage}
              />
            ))}
          </div>

          <p className={styles.cardLabel}>UI Card small</p>
          <div className={styles.cardRowSmall}>
            {SMALL_CARDS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`UI 카드 small ${i + 1}`}
                className={styles.cardImage}
              />
            ))}
          </div>

          <p className={styles.cardLabel}>Banner</p>
          <div className={styles.cardRowBanner}>
            {BANNER_CARDS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`배너 ${i + 1}`}
                className={styles.cardImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. Preference Test ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Preference Test</h2>
        <p className={styles.body}>
          During the preference test, we found that the meaning of the gradient
          bar was not immediately clear to many users. Some users interpreted it
          as an indicator of popularity rather than difficulty. Based on this
          feedback, the final design was revised to communicate the difficulty
          level more clearly.
        </p>
      </section>

      <div className={styles.compareRow}>
        {COMPARE_ITEMS.map((item) => (
          <figure key={item.label} className={styles.compareItem}>
            <img src={item.image} alt={item.label} className={styles.compareImage} />
            <figcaption className={styles.compareLabel}>{item.label}</figcaption>
          </figure>
        ))}
      </div>

      {/* ========== 11. Final Screens (영상) ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Final Screen</h2>
      </section>

      <figure className={styles.videoFigure}>
        <video
          className={styles.video}
          src={prototypeVideo}
          autoPlay      /* 자동재생 — 끄려면 이 줄 삭제 */
          muted         /* autoPlay 는 muted 가 있어야 브라우저가 허용해줌 */
          loop          /* 반복재생 */
          playsInline   /* iOS 에서 전체화면으로 안 튀게 */
          controls      /* 재생바 숨기려면 이 줄 삭제 */
        />
      </figure>

      {/* ========== 12. Learnings and Next Steps ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Learnings and Next Steps</h2>
        <p className={styles.body}>
       I focused on improving my Figma skills by exploring component properties to create variations of UI cards within the same format. I also learned to build more interactive prototypes using Smart Animate and connecting frames to create smoother interactions.
        </p>
        <p className={styles.body}>
            I’d like to explore more advanced Figma features and build on my experience with creating a basic design system. My next step is to develop a more structured and consistent system that can support a wider range of UI components.
        </p>
      </section>
    </article>
  );
}