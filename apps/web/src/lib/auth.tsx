import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { api } from './api';

export type Role = 'customer' | 'dealer' | 'provider' | 'admin';
export type FeatureKey = 'buyer_requests' | 'transfer_requests' | 'properties' | 'customers_plans' | 'payments_reminders' | 'marketing' | 'branding';
export type Me = {
  user: { id: string; role: Role; name: string; dealerId: string | null } | null;
  dealer: { id: string; businessName: string; features: Record<FeatureKey, boolean>; status: string } | null;
  home?: string;
};

type AuthState = { me: Me | null; loading: boolean; refresh: () => Promise<Me>; logout: () => Promise<void> };
const Ctx = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(true);
  const refresh = useCallback(async () => {
    try {
      const m = await api<Me>('/auth/me');
      setMe(m);
      return m;
    } catch {
      const anon = { user: null, dealer: null };
      setMe(anon);
      return anon;
    } finally {
      setLoading(false);
    }
  }, []);
  const logout = useCallback(async () => {
    await api('/auth/logout', { method: 'POST', body: {} }).catch(() => {});
    setMe({ user: null, dealer: null });
  }, []);
  useEffect(() => { void refresh(); }, [refresh]);
  return <Ctx.Provider value={{ me, loading, refresh, logout }}>{children}</Ctx.Provider>;
}

/** Like useAuth, but returns null outside the provider (screens rendered standalone). */
export const useAuthOptional = () => useContext(Ctx);

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAuth outside AuthProvider');
  return v;
}

/** Which dealer route needs which admin-controlled feature. */
export const DEALER_ROUTE_FEATURE: [string, FeatureKey][] = [
  ['/dealer/buyer-requests', 'buyer_requests'],
  ['/dealer/transfer-requests', 'transfer_requests'],
  ['/dealer/properties', 'properties'],
  ['/dealer/customers', 'customers_plans'],
  ['/dealer/installment-plans', 'customers_plans'],
  ['/dealer/reminders', 'payments_reminders'],
  ['/dealer/marketing', 'marketing'],
];

/** Portal routes need a signed-in user with the right role (and, for dealers, the tab enabled). */
export function RequireRole({ role, children }: { role: Role; children: ReactNode }) {
  const { me, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading || !me) return null;
  if (!me.user) return <Navigate to={`/login?next=${encodeURIComponent(pathname)}`} replace />;
  if (me.user.role !== role) return <Navigate to={me.home ?? '/'} replace />;
  if (role === 'dealer' && me.dealer) {
    const need = DEALER_ROUTE_FEATURE.find(([prefix]) => pathname.startsWith(prefix))?.[1];
    if (need && !me.dealer.features[need]) return <Navigate to="/dealer" replace />;
  }
  return <>{children}</>;
}
