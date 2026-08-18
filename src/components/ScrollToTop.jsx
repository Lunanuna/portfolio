import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 라우트가 바뀔 때마다 스크롤을 맨 위로 올려주는 컴포넌트.
 * React Router는 페이지를 이동해도 스크롤 위치를 유지하기 때문에
 * 이게 없으면 목록에서 스크롤한 위치 그대로 상세페이지가 열림.
 *
 * 화면에 아무것도 그리지 않고 동작만 하는 컴포넌트라 null 반환.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // 부드럽게 올리고 싶으면 위 줄 대신:
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // pathname이 바뀔 때만 실행

  return null;
}