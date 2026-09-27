import { useNavigate } from 'react-router-dom';
import { useAuthOptional } from './auth';

const designMode = () => !!(window as unknown as { __D90_DESIGN_MODE__?: boolean }).__D90_DESIGN_MODE__;

/**
 * The account block at the bottom of every portal sidebar: shows who is signed in and offers
 * Log out. Rendered standalone (design review / visual tests) it shows the board's own text.
 */
export function useAccountBlock() {
  const auth = useAuthOptional();
  const navigate = useNavigate();
  const me = auth?.me;
  const live = !!me?.user && !designMode();

  const accountName = (kind: 'person' | 'business', designText: string) => {
    if (!live) return designText;
    if (kind === 'business' && me?.dealer) return me.dealer.businessName;
    return me!.user!.name;
  };

  // Not part of the approved boards (no sign-out control was designed) — kept small and in the
  // sidebar's own secondary text colour so it reads as part of the account block.
  const accountExtras = () =>
    live ? (
      <a
        href="/login"
        onClick={async (e) => { e.preventDefault(); await auth?.logout(); navigate('/login', { replace: true }); }}
        style={{ marginLeft: 'auto', color: '#8A97AD', fontSize: '12px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', alignSelf: 'center' }}
      >
        {'Log out'}
      </a>
    ) : null;

  return { accountName, accountExtras };
}
