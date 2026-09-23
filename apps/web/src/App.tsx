import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { screens } from './screens';
import ScreenIndex from './components/ScreenIndex';

function ScrollAndTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const s = screens.find((x) => x.route === pathname);
    if (s) document.title = s.title;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollAndTitle />
      <Suspense fallback={null}>
        <Routes>
          {screens.map(({ id, route, Component }) => (
            <Route key={id} path={route} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      {import.meta.env.VITE_SCREEN_INDEX === '1' && <ScreenIndex />}
    </>
  );
}
