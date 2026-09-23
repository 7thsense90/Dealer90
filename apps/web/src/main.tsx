import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';
import './styles/fonts.css';
import './styles/base.css';
import App from './App';
import { screens } from './screens';

const future = { v7_startTransition: true, v7_relativeSplatPath: true } as const;
const mode = import.meta.env.VITE_ROUTER;

function Router({ children }: { children: React.ReactNode }) {
  if (mode === 'memory') {
    // Shareable preview: routing lives in memory; a bare "#screen-id" in the link opens that screen.
    const token = window.location.hash.replace(/^#/, '').toLowerCase();
    const start = screens.find((s) => s.id.toLowerCase() === token)?.route ?? '/';
    return <MemoryRouter future={future} initialEntries={[start]}>{children}</MemoryRouter>;
  }
  if (mode === 'hash') return <HashRouter future={future}>{children}</HashRouter>;
  return <BrowserRouter future={future}>{children}</BrowserRouter>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
