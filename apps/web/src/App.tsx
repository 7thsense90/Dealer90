import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { screens } from './screens';
import ScreenIndex from './components/ScreenIndex';
import { AuthProvider, RequireRole, type Role } from './lib/auth';

/** Which signed-in role a route needs (public pages and the sign-in/activation screens need none). */
function roleFor(group: string, route: string): Role | null {
  if (group === 'dealer' || group === 'admin' || group === 'provider') return group;
  if (group === 'customer' && route.startsWith('/customer')) return 'customer';
  return null;
}

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
    <AuthProvider>
      <ScrollAndTitle />
      <Suspense fallback={null}>
        <Routes>
          {screens.map(({ id, route, group, Component }) => {
            const role = roleFor(group, route);
            return (
              <Route key={id} path={route}
                element={role ? <RequireRole role={role}><Component /></RequireRole> : <Component />} />
            );
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      {import.meta.env.VITE_SCREEN_INDEX === '1' && <ScreenIndex />}
    </AuthProvider>
  );
}
