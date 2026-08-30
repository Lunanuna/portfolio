import styles from './HiddenSeoulProject.module.css';

/* ============================================================
   이미지 import
   ------------------------------------------------------------
   저장 경로: src/assets/images/case-hiddenseoul/
   네가 준 파일명 그대로 12개 전부 매칭해뒀어.
   피그마에서 export 할 때 2x(@2x) 정도로 뽑으면 선명해.
   ============================================================ */

import heroMockup from '../assets/images/case-hiddenseoul/hero-mockup.png';
// 히어로 우측 목업

import stepInside from '../assets/images/case-hiddenseoul/step-inside.png';
// "Step Inside / Meet Another World" 풀블리드 밴드
// ※ 밴드 안의 문구·로고까지 포함해서 통이미지 하나로 export 해줘

import persona1 from '../assets/images/case-hiddenseoul/persona1.png';
import persona2 from '../assets/images/case-hiddenseoul/persona2.png';
// User Persona 카드 2개 (좌 / 우)

import wireframeSet1 from '../assets/images/case-hiddenseoul/wireframe-set1.png';
import wireframeSet2 from '../assets/images/case-hiddenseoul/wireframe-set2.png';
// Lo-fi Wireframes 세트 2묶음 (좌 / 우)

import logoDesign1 from '../assets/images/case-hiddenseoul/logo-design1.png';
import logoDesign2 from '../assets/images/case-hiddenseoul/logo-design2.png';
import logoDesign3 from '../assets/images/case-hiddenseoul/logo-design3.png';
import logoDesign4 from '../assets/images/case-hiddenseoul/logo-design4.png';
// Logo Design Iteration 4단계 (왼쪽부터 순서대로)
// 1: 마인드맵/Crazy 8 스케치  2: 스케치 기반 드래프트
// 3: 다듬은 컨셉             4: 최종 로고
// ※ 캡션은 HTML 텍스트로 따로 넣으니까, 이미지에는 로고 그림만 담아서 export 하면 돼

import headerMobile from '../assets/images/case-hiddenseoul/header-mobile.png';
import headerDesktop from '../assets/images/case-hiddenseoul/header-desktop.png';
// Hi-fi Prototype > 헤더 (모바일 / 데스크탑)

import uicardsMobile from '../assets/images/case-hiddenseoul/uicards-mobile.png';
import uicardsDesktop from '../assets/images/case-hiddenseoul/uicards-desktop.png';
// Hi-fi Prototype > UI 카드 (모바일 / 데스크탑)

import githubIcon from '../assets/images/case-hiddenseoul/github.svg';
// Coded Solution 버튼 안 깃허브 아이콘

/* ============================================================
   데이터
   ------------------------------------------------------------
   텍스트는 전부 여기 모아뒀어. 문구 수정은 여기서만 하면 됨.
   ============================================================ */

// 배포된 코드 솔루션 주소
const CODED_SOLUTION_URL = 'https://gayoung-han.github.io/hidden-seoul/index.html';

// 히어로 아래 태그
const HERO_TAGS = ['Responsive Design', 'JavaScript', 'Content Creation'];

// 메타 정보 행
const META_ITEMS = [
  { label: 'MY ROLE', value: 'UX/UI Designer\nFront End Dev' },
  { label: 'DELIVERABLE', value: 'Website' },
  { label: 'TOOLS', value: 'Figma, Figjam\n& JavaScript' },
  { label: 'DATE', value: '2025' },
  { label: 'TYPE', value: 'School Project' },
];

// Logo Design Iteration 4단계
// label 문구 수정은 여기서만 하면 됨
const LOGO_STEPS = [
  {
    label: 'Mindmapping → Crazy 8 → Extra Sketch for Development',
    image: logoDesign1,
  },
  { label: 'Draft of logo design based on the sketches', image: logoDesign2 },
  { label: 'Refined the concept', image: logoDesign3 },
  { label: 'Final logo design', image: logoDesign4 },
];

// Main Focus 항목
const MAIN_FOCUS = [
  'Full Double Diamond Design Process',
  'Mapping Research Findings into User Persona',
  'Figma Prototype',
  'Responsive Coded Solution (HTML, CSS & JavaScript)',
];

// Double Diamond 카드 4개
const PROCESS_STEPS = [
  {
    title: 'Discover',
    items: ['Desk Research', 'Field Research', 'User Interview'],
  },
  {
    title: 'Define',
    items: [
      'Affinity Diagram',
      'User Persona',
      'Value Proposition',
      'OOUX',
      'List of Requirement',
      'How Might We',
      'List of Values',
    ],
  },
  {
    title: 'Develop',
    items: [
      'Crazy 8',
      'Mind Map Sketching',
      'Site Map',
      'Lo-fi Wireframe',
      'Hi-fi Prototype',
      'Usability Test',
    ],
  },
  {
    title: 'Deliver',
    items: ['Coded Solution'],
  },
];

// 어피니티 다이어그램 4칼럼
const AFFINITY_COLUMNS = [
  {
    head: 'Desirable Places',
    items: [
      'Historical charm, authentic and unique places',
      'Conceptual and unique interior',
      'Insanely authentic food that locals only secretly share with each other',
      'Somewhere worth going, a few blocks from popular streets',
    ],
  },
  {
    head: 'Emotions & Actions',
    items: [
      "Don't plan too much and prefer to be spontaneous",
      'I like to pin interesting places on Google Maps for later',
      'I care about reliable recommendations',
      'I get inspired by places with strong visual personality',
    ],
  },
  {
    head: 'Motivation',
    items: [
      'Hidden gems provide me a better experience than typical areas',
      'I want to visit places that make my time and money valuable',
    ],
  },
  {
    head: 'Pain Points',
    items: [
      'Places go viral and lose their own charm and atmosphere — no longer a hidden place',
      "I couldn't read the menu in some authentic restaurants in Japan",
    ],
  },
];

export default function HiddenSeoulProject() {
  return (
    <article className={styles.page}>

      {/* ========== 1. HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Responsive Web Design</p>
          <h1 className={styles.heroTitle}>Hidden Seoul</h1>

          <ul className={styles.tagList}>
            {HERO_TAGS.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          <p className={styles.heroLead}>
            Hidden Seoul is a web platform for foreign visitors who want to
            experience Seoul beyond the usual tourist spots. It curates hidden
            gems and local tips through a web magazine featuring content created
            by local curators from different districts across Seoul.
          </p>
          <p className={styles.heroLead}>
            The platform aims to help spread tourism beyond popular areas and
            encourage visitors to discover a more local side of the city.
          </p>
        </div>

        <div className={styles.heroImageWrap}>
          <img
            src={heroMockup}
            alt="Hidden Seoul 웹사이트 목업"
            className={styles.heroImage}
          />
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

      {/* ========== 3. Step Inside 밴드 (풀블리드) ========== */}
      <div className={styles.band}>
        <img
          src={stepInside}
          alt="Step Inside — Meet Another World"
          className={styles.bandImage}
        />
      </div>

      {/* ========== 4. Project Overview ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Project Overview</h2>
        <p className={styles.body}>
          The Hidden Seoul project was my first solo project, where I practiced
          applying the Double Diamond design process from research to
          prototyping. As a prototype for a virtual service, I focused on a local
          area close to popular tourist spots, making it accessible for visitors
          while offering a different side of Seoul. Through field research, I
          explored the area and developed three conceptual places where visitors
          could experience something beyond typical tourist activities. The final
          concept was delivered as a responsive website, allowing users to access
          it across different devices.
        </p>
      </section>

      {/* ========== 5. Main Focus ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Main Focus</h2>
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
            <div key={step.title}>
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

      {/* ========== 7. Research and User Interview ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Research and User Interview</h2>
        <p className={styles.body}>
          After desk research to identify interesting places to curate, I visited
          selected locations to observe them firsthand. I then conducted 10 user
          interviews to understand what kinds of places people want to visit, how
          they usually discover new places, and how they feel about finding those
          hidden gems. The interview findings were then organised and clustered
          using an affinity diagram.
        </p>
      </section>

      {/* 어피니티 다이어그램 4칼럼 */}
      <div className={styles.affinityRow}>
        {AFFINITY_COLUMNS.map((col) => (
          <div key={col.head} className={styles.affinityCol}>
            <h4 className={styles.affinityHead}>{col.head}</h4>
            <ul className={styles.affinityList}>
              {col.items.map((item) => (
                <li key={item} className={styles.affinityItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ========== 8. User Persona ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>User Persona</h2>
      </section>

      <div className={styles.pairRow}>
        <img src={persona1} alt="User Persona 1" className={styles.pairImage} />
        <img src={persona2} alt="User Persona 2" className={styles.pairImage} />
      </div>

      {/* ========== 9. Lo-fi Wireframes ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Lo-fi Wireframes</h2>
        <p className={styles.body}>
          After completing the Define stage, I started sketching and developed
          wireframes before moving to the hi-fi prototype. This allowed me to
          focus on the structure and user flow before exploring visual details.
        </p>
      </section>

      {/* 검정 배경 밴드 — 와이어프레임 이미지만 감쌈 */}
      <div className={`${styles.imageBand} ${styles.bandDark}`}>
        <div className={styles.pairRow}>
          <img
            src={wireframeSet1}
            alt="Lo-fi 와이어프레임 세트 1"
            className={styles.pairImage}
          />
          <img
            src={wireframeSet2}
            alt="Lo-fi 와이어프레임 세트 2"
            className={styles.pairImage}
          />
        </div>
      </div>

      {/* ========== 10. Logo Design Iteration ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Logo Design Iteration</h2>
        <p className={styles.body}>
          I used a mind map and Crazy 8s to explore different ideas, then
          developed the most promising ones into a logo concept.
        </p>
      </section>

      <div className={styles.logoRow}>
        {LOGO_STEPS.map((step, i) => (
          <figure key={step.label} className={styles.logoItem}>
            
            <img
              src={step.image}
              alt={`로고 디자인 ${i + 1}단계 — ${step.label}`}
              className={styles.logoImage}
            />
            <figcaption className={styles.logoLabel}>{step.label}</figcaption>
          </figure>
        ))}
      </div>

      {/* ========== 11. Hi-fi Prototype ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Hi-fi Prototype</h2>
        <p className={styles.body}>
          Mobile and desktop versions designed as a responsive solution for
          different screen sizes.
        </p>
      </section>

      {/* 연한 배경 밴드 — 헤더 + UI 카드 이미지를 함께 감쌈 */}
      <div className={`${styles.imageBand} ${styles.bandLight}`}>
        {/* 헤더 (모바일 / 데스크탑) */}
        <div className={styles.deviceRow}>
          <img
            src={headerMobile}
            alt="헤더 — 모바일"
            className={styles.deviceImage}
          />
          <img
            src={headerDesktop}
            alt="헤더 — 데스크탑"
            className={styles.deviceImage}
          />
        </div>

        {/* UI 카드 (모바일 / 데스크탑) */}
        <div className={styles.deviceRow}>
          <img
            src={uicardsMobile}
            alt="UI 카드 — 모바일"
            className={styles.deviceImage}
          />
          <img
            src={uicardsDesktop}
            alt="UI 카드 — 데스크탑"
            className={styles.deviceImage}
          />
        </div>
      </div>

      {/* ========== 12. Coded Solution ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Coded Solution</h2>
        <p className={styles.body}>
          After completing the hi-fi prototype in Figma, I translated the design
          into a coded solution. JavaScript was used to add interactive features
          such as the hamburger menu and like button, while media queries were
          used to make the website responsive across different screen sizes.
        </p>

        <a
          href={CODED_SOLUTION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.codedLink}
        >
          <img src={githubIcon} alt="" className={styles.linkIcon} />
          See the Coded Solution →
        </a>
      </section>

      {/* ========== 13. Learnings and Next Steps ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.h2}>Learnings and Next Steps</h2>
        <p className={styles.body}>
          Looking back at this project a year later, I can clearly see areas
          where my design skills have grown, which was rewarding to notice. At
          the time, I learned how to approach design through the UX process and
          use different UX methods to explore solutions from the user's
          perspective. I also spent time improving my CSS skills to create a
          smoother responsive experience.
        </p>
        <p className={styles.body}>
          For my next project, I want to make my prototypes more interactive and
          move from JavaScript to React. I'd also like to explore how React can
          help me build more functional and refined web designs.
        </p>
      </section>
    </article>
  );
}