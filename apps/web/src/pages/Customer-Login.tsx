import { useState, type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoginScreen from '../screens/Customer-Login';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';

/** One sign-in screen for every account type; each role lands on its own portal. */
export default function LoginPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { me, refresh } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e?: FormEvent) => {
    e?.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const r = await api<{ redirectTo: string }>('/auth/login', { body: { identifier, password } });
      await refresh();
      const next = params.get('next');
      navigate(next && next.startsWith(r.redirectTo) ? next : r.redirectTo, { replace: true });
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  };

  // Already signed in (e.g. clicked Log In / Dealer Login again): go straight to your own portal.
  if (me?.user && me.home && !busy) return <Navigate to={me.home} replace />;

  const onEnter = (e: KeyboardEvent) => { if (e.key === 'Enter') void submit(); };

  return (
    <LoginScreen
      bind={{
        identifier: { id: 'login-identifier', name: 'identifier', autoComplete: 'username', value: identifier, onChange: (e: ChangeEvent<HTMLInputElement>) => setIdentifier(e.target.value), onKeyDown: onEnter },
        password: { id: 'login-password', name: 'password', autoComplete: 'current-password', value: password, onChange: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), onKeyDown: onEnter },
        submit: { onClick: () => void submit(), disabled: busy, style: { width: '100%', padding: '15px', opacity: busy ? 0.7 : 1 } },
      }}
      content={error ? { note: <span role="alert" style={{ color: '#9C3B2E', fontWeight: 600 }}>{error}</span> } : {}}
    />
  );
}
