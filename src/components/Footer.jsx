import { useState, useRef, useEffect } from 'react';
import styles from './Footer.module.css';
import { useReveal } from '../hooks/useReveal';

import sticker1 from '../assets/icons/sticker1.webp';

const EMAIL = 'hanga93@gmail.com';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  // 푸터 전체를 관찰한다.
  // 제목만 관찰하면 모바일에서 제목이 화면 맨 아래 35px 안에 들어가는데,
  // rootMargin 이 아래쪽을 잘라내서 교차 조건을 영원히 못 채움.
  const [footerRef, stickerShown] = useReveal({ threshold: 0.1, rootMargin: '0px' });

  // 컴포넌트가 사라질 때 남아있는 타이머 정리 (메모리 누수 방지)
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timerRef.current); // 연타해도 타이머가 겹치지 않게
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // https가 아니면 clipboard API가 막힘 (로컬 http 환경 등)
      console.error('복사 실패');
    }
  };

  return (
    <footer ref={footerRef} className={styles.footer}>
      <ul className={styles.contact}>
        <li>
          <a
            href="/resume-gayoung.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/gayoung-han93/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li className={styles.emailRow}>
          <button
            type="button"
            onClick={handleCopy}
            className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
            aria-label={copied ? '이메일 주소 복사됨' : `이메일 주소 복사: ${EMAIL}`}
          >
            <span>{EMAIL}</span>
            {/* img 대신 span — 색을 CSS가 칠함 (글자색 자동 추종) */}
            <span
              className={copied ? styles.checkIcon : styles.copyIcon}
              aria-hidden="true"
            />
          </button>

          {/* 스크린리더용 안내 — 화면에는 안 보임 */}
          <span className={styles.srOnly} role="status" aria-live="polite">
            {copied ? 'Email copied' : ''}
          </span>
        </li>
      </ul>

      {/* 스티커 + 제목을 한 덩어리로 묶어야 위치를 잡을 수 있음 */}
      <div className={styles.headingWrap}>
        {/* 3겹인 이유: 위치잡기 / 등장 / 빼꼼 이 각각 transform 을 쓰는데
            한 요소엔 transform 을 하나만 걸 수 있어서 나눠야 함 */}
        <span className={styles.stickerPos}>
          <span className={`${styles.stickerPop} ${stickerShown ? styles.visible : ''}`}>
            <span className={styles.stickerBob}>
              <img src={sticker1} alt="" />
            </span>
          </span>
        </span>

        <h2 className={styles.heading}>Let's Chat</h2>
      </div>
    </footer>
  );
}