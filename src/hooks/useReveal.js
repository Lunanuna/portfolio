import { useEffect, useRef, useState } from 'react';

/**
 * 요소가 화면에 들어오면 shown 을 true 로 바꿔주는 훅.
 * 한 번 나타난 뒤에는 다시 숨기지 않음 (스크롤 올릴 때 깜빡이지 않게).
 *
 * 사용:
 *   const [ref, shown] = useReveal();
 *   <div ref={ref} className={shown ? styles.visible : ''}>
 *
 * 기본값을 바꾸고 싶을 때:
 *   useReveal({ threshold: 0.3 })
 */
export function useReveal({
  threshold = 0.15,                  // 15% 정도 보이면 시작
  rootMargin = '0px 0px -60px 0px',  // 화면 아래쪽 60px 은 아직 '안 보인 것'으로 취급
} = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver 미지원 브라우저에서는 그냥 보이게
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, shown];
}