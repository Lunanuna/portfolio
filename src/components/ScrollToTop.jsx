import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 해시가 없으면 새 페이지를 맨 위에서 시작
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // 새 페이지가 그려진 다음 프레임에 실행 — 안 그러면
    // 아직 DOM에 없는 요소를 찾아서 실패함
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [pathname, hash]);

  return null;   // 화면에 아무것도 안 그림
}