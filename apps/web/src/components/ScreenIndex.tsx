import { useState, type CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { screens } from '../screens';

/**
 * Preview-only tester aid (VITE_SCREEN_INDEX=1). Not part of the product UI and never
 * shipped in the production build - it only lets reviewers jump to any screen.
 */
const GROUPS: Record<string, string> = {
  public: 'Public portal', advisor: 'Property Advisor', estimator: 'Build estimator & advisor',
  customer: 'Customer portal', dealer: 'Dealer portal', provider: 'Service provider', admin: 'Super admin',
};

export default function ScreenIndex() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const box: CSSProperties = {
    position: 'fixed', right: 16, bottom: 16, zIndex: 9999, fontFamily: 'system-ui, sans-serif',
  };
  return (
    <div style={box}>
      {open && (
        <div style={{ width: 300, maxHeight: '70vh', overflow: 'auto', background: '#fff', color: '#1C2430',
          border: '1px solid #ccc', borderRadius: 10, boxShadow: '0 12px 32px rgba(0,0,0,.25)', padding: 12, marginBottom: 8, fontSize: 13 }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>All screens ({screens.length}) — preview only</div>
          {Object.entries(GROUPS).map(([g, label]) => (
            <div key={g} style={{ marginTop: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#777', letterSpacing: '.05em' }}>{label}</div>
              {screens.filter((s) => s.group === g).map((s) => (
                <Link key={s.id} to={s.route} onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '4px 6px', borderRadius: 5, color: 'inherit', textDecoration: 'none',
                    background: pathname === s.route ? '#EFE9DA' : 'transparent' }}>
                  {s.title.replace(/^Dealer90\.com — /, '')}
                  <span style={{ color: '#999', marginLeft: 6, fontSize: 11 }}>{s.route}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ float: 'right', padding: '9px 14px', borderRadius: 999, border: 0,
        background: '#1C2430', color: '#fff', fontWeight: 600, cursor: 'pointer', boxShadow: '0 6px 18px rgba(0,0,0,.3)' }}>
        {open ? 'Close' : `Screens · ${screens.length}`}
      </button>
    </div>
  );
}
