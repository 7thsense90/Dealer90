import { useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthOptional, type FeatureKey } from './auth';

/**
 * Sidebar lock state for dealer screens. With a signed-in dealer it follows the access the admin
 * granted; rendered standalone (design review / visual tests) it shows exactly what the board shows.
 */
export const DesignModeCtx = createContext(false);

export function useDealerLock() {
  const navigate = useNavigate();
  const designMode = useContext(DesignModeCtx) || !!(window as unknown as { __D90_DESIGN_MODE__?: boolean }).__D90_DESIGN_MODE__;
  const features: Record<FeatureKey, boolean> | null = useAuthOptional()?.me?.dealer?.features ?? null;
  const isLocked = (f: string, designLocked: boolean) =>
    designMode || !features ? designLocked : !features[f as FeatureKey];

  const lockable = (f: string, route: string | null, designLocked: boolean, baseClass: string) => {
    const locked = isLocked(f, designLocked);
    return {
      className: locked ? `${baseClass} locked` : baseClass,
      'data-nav': locked ? undefined : '1',
      onClick: locked || !route ? undefined : () => navigate(route),
      'aria-disabled': locked || undefined,
    };
  };

  const lockExtras = (f: string, designLocked: boolean) =>
    isLocked(f, designLocked) ? (
      <>
        {' '}
        <span className="lock-ic">{'🔒'}</span>
        {' '}
        <div className="tooltip">{"This feature isn't enabled for your account. Please contact Admin to enable this feature."}</div>
      </>
    ) : null;

  return { lockable, lockExtras };
}
