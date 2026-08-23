import styles from './BlaaSolProject.module.css';

/* ============================================================
   이미지 import
   ------------------------------------------------------------
   저장 경로: src/assets/images/case-blaasol/
   아래 파일명 그대로 저장하면 바로 연결돼.
   피그마에서 export 할 때 2x(@2x) 정도로 뽑으면 선명해.
   ============================================================ */

import heroMockup from '../assets/images/project-thumbnail/blaasol-thumbnail.png';
// 히어로 우측, 손에 든 폰 목업

import feature01 from '../assets/images/case-blaasol/feature-01.png';
import feature02 from '../assets/images/case-blaasol/feature-02.png';
import feature03 from '../assets/images/case-blaasol/feature-03.png';
import feature04 from '../assets/images/case-blaasol/feature-04.png';
// "Everything you need..." 섹션의 폰 목업 4개 (왼쪽부터 순서대로)

import currentApp01 from '../assets/images/case-blaasol/current-app-01.png';
import currentApp02 from '../assets/images/case-blaasol/current-app-02.png';
import currentApp03 from '../assets/images/case-blaasol/current-app-03.png';
// Discover > Current App 의 기존 앱 스크린샷 3개

import personaFreda from '../assets/images/case-blaasol/persona-freda.png';
// Define > User Persona 통이미지 (페르소나 보드 전체를 하나로 export)

import crazy8 from '../assets/images/case-blaasol/crazy8.png';
// Develop > Crazy 8 손그림 사진

import dsVariables from '../assets/images/case-blaasol/ds-figma-variables.png';
// Design System > Figma Variables & logo/icon 보드

import dsComponents from '../assets/images/case-blaasol/ds-ui-components.png';
// Design System > 재디자인한 UI 컴포넌트 보드

import dsCssCode from '../assets/images/case-blaasol/ds-css-variables.png';
// Design System > index.css 코드 스크린샷

import deliverLanding from '../assets/images/case-blaasol/deliver-landing.png';
import deliverSchedule from '../assets/images/case-blaasol/deliver-schedule.png';
// Deliver > Landing Page / Schedule Page 목업

import deliverDetail from '../assets/images/case-blaasol/deliver-detail.png';
// Deliver > Detail Page 아티스트 카드 5개 나열된 통이미지

// Double Diamond 카드 상단 장식 아이콘 — 단계별로 모양이 전부 다름
import iconDiscover from '../assets/images/case-blaasol/diamond-discover.svg';
import iconDefine from '../assets/images/case-blaasol/diamond-define.svg';
import iconDevelop from '../assets/images/case-blaasol/diamond-develop.svg';
import iconDeliver from '../assets/images/case-blaasol/diamond-deliver.svg';

/* ============================================================
   데이터
   ------------------------------------------------------------
   텍스트는 전부 여기 모아뒀어. 문구 수정은 여기서만 하면 됨.
   ============================================================ */

// 히어로 아래 태그
const HERO_TAGS = ['UI/UX Design', 'Prototyping', 'Design System'];

// 메타 정보 행 (MY ROLE / DELIVERABLE / ...)
// note = 본문 아래 붙는 작은 회색 보조 텍스트 (없으면 생략 가능)
const META_ITEMS = [
  {
    label: 'MY ROLE',
    value: 'UX/ UI Designer',
    note: 'Team:\n1 Developers & 2 Designers',
  },
  {
    label: 'DELIVERABLE',
    value: 'Figma Prototype,\nCoded Prototype',
    note: '(React.js)',
  },
  {
    label: 'TOOLS',
    value: 'Figma, Figjam & React.js',
    note: 'AI: ChatGPT\n(brainstorming, code assistance)',
  },
  { label: 'DATE', value: '2026' },
  { label: 'TYPE', value: 'School Project' },
];

// Double Diamond 카드 4개
// icon: 카드 상단 아이콘 이미지 (위 import 참고)
const PROCESS_STEPS = [
  {
    title: 'Discover',
    icon: iconDiscover,
    items: ['Desk + Field Research', 'Client Meeting', 'User Interviews'],
  },
  {
    title: 'Define',
    icon: iconDefine,
    items: [
      'Affinity Diagramme',
      'Problem Statement',
      'User Persona',
      'Value Proposition',
      'How Might We',
      'User Stories',
      'List of Values',
      'OOUX',
    ],
  },
  {
    title: 'Develop',
    icon: iconDevelop,
    items: [
      'Crazy 8 Sketch',
      'Lo-fi Wireframes',
      'Usability Test',
      'Design System',
      'Style Tile',
      'Hi-fi Wireframes',
      'Desirability Test',
    ],
  },
  {
    title: 'Deliver',
    icon: iconDeliver,
    items: [
      'Interactive\nFigma Prototype',
      '&',
      'Coded Prototype\nwith React.js',
    ],
  },
];

// Deliver 섹션: 목업 + 설명 좌우 배치
const DELIVER_ITEMS = [
  {
    title: 'Landing Page',
    image: deliverLanding,
    text: "To encourage spontaneous action, I placed 'Lige Nu' section on the top landing page. Below the section, Min Plan button is placed in a thumb zone so users can reach the button easily.",
  },
  {
    title: 'Schedule Page',
    image: deliverSchedule,
    text: "Program page has a auto scroll function to the current time zone so the users don't need to scroll all the way down to see whats happening now or next.",
  },
];

export default function BlaaSol() {
  return (
    <article className={styles.page}>

      {/* ========== 1. HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Concept Redesign</p>
          <h1 className={styles.heroTitle}>
            Blå Sol
            <br />
            Festival App
          </h1>

          <ul className={styles.tagList}>
            {HERO_TAGS.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          <p className={styles.heroLead}>
            Blå Sol is the music festival app for Blå Sol Festival in Randers in
            Denmark.
          </p>
          <p className={styles.heroLead}>
            We redesigned it to improve the festival experience for younger
            visitors and give local artists and the community events more
            visibility. Users can easily browse the schedule, save their
            favourite acts, and look up artist information.
          </p>
        </div>

        <div className={styles.heroImageWrap}>
          <img src={heroMockup} alt="Blå Sol 앱 목업" className={styles.heroImage} />
        </div>
      </section>

      {/* ========== 2. 메타 정보 행 ========== */}
      <section className={styles.metaRow}>
        {META_ITEMS.map((item) => (
          <div key={item.label} className={styles.metaItem}>
            <p className={styles.metaLabel}>{item.label}</p>
            <p className={styles.metaValue}>{item.value}</p>
            {item.note && <p className={styles.metaNote}>{item.note}</p>}
          </div>
        ))}
      </section>

      {/* ========== 3. 기능 소개 (연한 파랑 배경, 풀블리드) ========== */}
      <section className={styles.featureSection}>
        <h2 className={styles.featureHeadline}>
          Everything you need at the festival, in one place.
        </h2>
        <div className={styles.featureRow}>
          {[feature01, feature02, feature03, feature04].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`주요 화면 ${i + 1}`}
              className={styles.featureImage}
            />
          ))}
        </div>
      </section>

      {/* ========== 4. Problem / Solution / My Role / Design Process ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Problem</h2>
        <p className={styles.body}>
          How can we design a digital solution that enhances the festival
          experience by encouraging visitors to discover and engage with smaller
          activities and community experiences during the BLÅ SOL festival?
        </p>
      </section>

      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Solution</h2>
        <p className={styles.body}>
          The redesigned Blå Sol app gives festivalgoers a clearer view of
          what's on. The old schedule was text only, which sometimes made it
          hard to engage with, so we added thumbnails and a stronger visual
          hierarchy.
        </p>
        <p className={styles.body}>
          That change wasn't only about visual clarity. Small community events
          and non-headline artists are much easier to notice now, which gives
          Blå Sol more room to promote and strengthen local culture and
          community as a non-profit music festival.
        </p>
        <p className={styles.body}>
          My Plan lets users build their own day and get a reminder before each
          show or event starts. And the highlight feed gives the festival a
          channel for short promo videos of what's about to happen, so people
          already on site can decide to join something spontaneously.
        </p>
      </section>

      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>My Role</h2>
        <p className={styles.body}>
          I was involved across the whole design process, but my main
          contribution was owning the visual design and the system behind it.
        </p>
        <p className={styles.body}>
          Before we started designing, I set up Figma variables for colour,
          typography, and spacing so the team had a shared foundation to work
          from. From there I led the hi-fi design, refining it with the team as
          we went and folding in what came out of usability testing. I also
          built most of the interactive prototype.
        </p>
      </section>

      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Design Process</h2>
        <p className={styles.body}>
          Throughout the project we followed the Double Diamond. It meant
          starting from a problem we found through research rather than one we
          assumed, then using methods like personas, value proposition and How
          Might We to narrow down where to go. From there we developed and
          refined prototypes until we reached the final design.
        </p>
      </section>

      {/* ========== 5. Double Diamond 카드 4개 ========== */}
      <section className={styles.processSection}>
        <div className={styles.processRow}>
          {PROCESS_STEPS.map((step) => (
            <div key={step.title} className={styles.processCard}>
              {/* 카드 상단 아이콘. 크기 조절은 CSS의 .processArrow height 값에서 */}
              <img src={step.icon} alt="" className={styles.processArrow} />
              {/* alt=""  → 장식용 이미지라 스크린리더가 읽지 않도록 비워둠 */}
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

      {/* ========== 6. Discover ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Discover</h2>
        <h3 className={styles.subHeading}>Current App</h3>
        <p className={styles.body}>
          We started with research to find out which functions mattered most for
          improving the digital experience during the festival. Looking at the
          existing app, it was built around artist information and a timetable,
          but the timetable page was hard to take in. Some of the titles were
          cropped and there were no related thumbnails to help users recognise
          what they were looking at. Also the details pages' title cover the
          whole thumbnail so users can't see the artist image properly.
          {/* ↑ 원본 PDF에서 마지막 문장이 잘려 있어서 자연스럽게 이어 붙여둠. 확인하고 수정해줘 */}
        </p>
        <div className={styles.imageRow}>
          <img src={currentApp01} alt="기존 앱 타임테이블" className={styles.phoneImage} />
          <img src={currentApp02} alt="기존 앱 프로그램" className={styles.phoneImage} />
          <img src={currentApp03} alt="기존 앱 상세 페이지" className={styles.phoneImage} />
        </div>
      </section>

      {/* ========== 7. Define — User Persona ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Define</h2>
        <h3 className={styles.subHeading}>User Persona</h3>
        <p className={styles.body}>
          After the desk and field research, we used an affinity diagram to sort
          the data and built our personas from what came out of it, so the
          solution stayed grounded in our target users.
        </p>
      </section>
      <figure className={styles.wideFigure}>
        <img src={personaFreda} alt="User Persona: Freda Kjærgard" className={styles.wideImage} />
      </figure>

      {/* ========== 8. Develop — Crazy 8 ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Develop</h2>
        <h3 className={styles.subHeading}>Crazy 8</h3>
        <p className={styles.body}>
          We kicked off the Develop phase with Crazy 8s, sketching as many
          directions as we could before narrowing anything down.
        </p>
        <figure className={styles.centerFigure}>
          <img src={crazy8} alt="Crazy 8 스케치" className={styles.sketchImage} />
        </figure>

        <h3 className={styles.subHeading}>Design System</h3>
        <p className={styles.body}>
          I set up the design foundation based on Blå Sol's existing design
          assets and helped us collaborate efficiently as a team while
          maintaining a consistent design throughout the project. The system was
          translated into variables and components in Figma, and later
          implemented as CSS variables, allowing smooth integration into the
          final coded solution.
        </p>
      </section>

      {/* ========== 9. Design System (네이비 배경, 풀블리드) ========== */}
      <section className={styles.dsSection}>
        <div className={styles.dsInner}>
          <p className={styles.dsCaption}>
            Figma Variables & logo and Icon Components
          </p>
          <img src={dsVariables} alt="Figma 변수 및 로고/아이콘 컴포넌트" className={styles.dsImage} />

          <p className={styles.dsCaption}>
            Ui Components that we have redesigned based on the design foundation
          </p>
          <img src={dsComponents} alt="재디자인한 UI 컴포넌트" className={styles.dsImage} />

          <p className={styles.dsCaption}>Later to CSS variables</p>
          <img src={dsCssCode} alt="CSS 변수로 구현된 코드" className={styles.dsImage} />
        </div>
      </section>

      {/* ========== 10. Deliver ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Deliver</h2>
      </section>

      {DELIVER_ITEMS.map((item) => (
        <section key={item.title} className={styles.deliverBlock}>
          <h3 className={styles.subHeading}>{item.title}</h3>
          <div className={styles.deliverRow}>
            <img src={item.image} alt={item.title} className={styles.deliverImage} />
            <p className={styles.body}>{item.text}</p>
          </div>
        </section>
      ))}

      <section className={styles.deliverBlock}>
        <h3 className={styles.subHeading}>Detail Page</h3>
        <p className={styles.body}>
          I improved visual content's visibility by placing title on the bottom
          so users can see artists image clearly
        </p>
      </section>
      <figure className={styles.wideFigure}>
        <img src={deliverDetail} alt="아티스트 상세 페이지" className={styles.wideImage} />
      </figure>

      {/* ========== 11. 코드 솔루션 링크 ========== */}
      <section className={styles.textBlock}>
        {/* 실제 배포 주소로 href 교체해줘 */}
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.codedLink}
        >
          See the coded solution →
        </a>
        <p className={styles.linkNote}>
          Coded Solution has a bit different image as I refined the figma
          prototype after the group project.
        </p>
      </section>

      {/* ========== 12. Learnings ========== */}
      <section className={styles.textBlock}>
        <h2 className={styles.sectionHeading}>Learnings and Next Step</h2>
        <p className={styles.body}>
          First of all, the whole double diamond design process allowed me to
          understand and practice how to start design with problem and reach to
          the solution. During this process, I had opportunities to gain deep
          understanding of each UX methods by practicing with my peers.
          Especially, we didn't hesitate to argue whenever we have different
          opinions and insights. That helps us to take a next step in a right
          direction.
        </p>
        <p className={styles.body}>
          {/* ↓ 원본 PDF에서 여기부터 잘려 있었음. 마저 써줘 */}
          Also, I felt that my UI design skill has developed. I think
        </p>
      </section>
    </article>
  );
}