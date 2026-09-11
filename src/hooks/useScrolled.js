import { useEffect, useState } from 'react';

/**
 * 사용자가 스크롤을 시작하면 true 가 되는 훅. 한 번 true 가 되면 유지됨.
 *
 * 안전장치: 내용이 짧아서 스크롤 자체가 불가능한 화면(큰 모니터)에서는
 * 버튼이 영원히 안 보이게 되므로 바로 true 로 만듦.
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const notScrollable = () =>
      document.documentElement.scrollHeight <= window.innerHeight + threshold;

    const check = () => {
      if (window.scrollY > threshold || notScrollable()) {
        setScrolled(true);
        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
      }
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [threshold]);

  return scrolled;
}