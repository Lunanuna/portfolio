import { useState, useRef, useEffect } from 'react';
import styles from './Footer.module.css';

// 아이콘 — 저장한 경로에 맞춰 수정해줘
import copyIcon from '../assets/icons/copy.svg';
import checkIcon from '../assets/icons/check.svg';

const EMAIL = 'hanga93@gmail.com';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

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
    <footer className={styles.footer}>
      <h2 className={styles.heading}>Let’s Chat!</h2>

      <div className={styles.info}>
        <p className={styles.role}>
          <span>Gayoung Han</span>
          <span className={styles.divider} aria-hidden="true">·</span>
          <span>UX/UI Designer</span>
        </p>
         <p className={styles.name}>Copenhagen NV</p>
      </div>

      <ul className={styles.contact}>
        <li><a
          
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
    <img
      src={copied ? checkIcon : copyIcon}
      alt=""
      className={styles.copyIcon}
    />
  </button>

  {/* 스크린리더용 안내 — 화면에는 안 보임 */}
  <span className={styles.srOnly} role="status" aria-live="polite">
    {copied ? 'Email copied' : ''}
  </span>
</li>
      </ul>
    </footer>
  );
}

// import styles from './Footer.module.css';

// export default function Footer() {
//     return (
//         <footer className={styles.footer}>
//             <h2 className={styles.heading}>Let’s Chat!</h2>
//                 <div className={styles.info}>
//                     <p className={styles.name}>Gayoung Han</p>
//                     <p className={styles.role}>
//                      <span>UX/UI Designer</span>
//                      <span className={styles.divider} aria-hidden="true">|</span>
//                      <span>Copenhagen NV</span>
//                     </p>
//                 </div>  
//             <ul className={styles.contact}>
//             <li>
//                     <a href="/resume-gayoung.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={styles.resumeButton} // 기존 버튼 클래스명 그대로 사용
//                     >
//                     Resume
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="https://www.linkedin.com/in/gayoung-han93/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         LinkedIn
//                     </a>
                        
//                 </li>
//                 <li>
//                     <a href="mailto:hanga93@gmail.com">hanga93@gmail.com</a>
//                 </li>
                
            
//             </ul>
//         </footer>
//     )
// }