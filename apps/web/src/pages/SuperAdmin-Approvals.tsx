import { useCallback, useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ApprovalsScreen from '../screens/SuperAdmin-Approvals';
import { api } from '../lib/api';
import { fmtDate, pkrShort } from '../lib/format';

type Registration = {
  id: string; businessName: string; ownerName: string; email: string; phone: string | null; city: string;
  submittedAt: string; status: 'pending_review' | 'documents_missing' | 'approved' | 'rejected';
};
type Flagged = { id: string; title: string; price: number; dealerName: string; projectionPct: number; areaPct: number | null };
type Overview = {
  stats: { pending: number; activeDealers: number; totalProperties: number; customers: number };
  registrations: Registration[];
  flagged: Flagged[];
};

// Row actions use the board's exact inline link styles.
const act = (color: string, bold = true, last = false) => ({
  color, fontWeight: bold ? '600' : undefined, marginRight: last ? undefined : '14px', cursor: 'pointer',
});
const STATUS: Record<Registration['status'], { label: string; bg: string; fg: string }> = {
  pending_review: { label: 'Pending Review', bg: 'var(--amber-bg)', fg: 'var(--amber)' },
  documents_missing: { label: 'Documents Missing', bg: 'var(--amber-bg)', fg: 'var(--amber)' },
  approved: { label: 'Approved', bg: 'var(--green-bg)', fg: 'var(--green)' },
  rejected: { label: 'Rejected', bg: 'var(--red-bg)', fg: 'var(--red)' },
};
const pct = (n: number) => `+${Number(n.toFixed(1))}% in 1yr`;

export default function ApprovalsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<Overview | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [confirmReject, setConfirmReject] = useState<string | null>(null);

  const load = useCallback(() => {
    api<Overview>('/admin/overview').then(setData).catch((e) => setError(e.message));
  }, []);
  useEffect(load, [load]);

  const review = async (id: string, action: 'approve' | 'request_revision') => {
    try { await api(`/admin/properties/${id}/pricing-review`, { body: { action } }); load(); } catch (e) { setError((e as Error).message); }
  };
  const reject = async (id: string) => {
    if (confirmReject !== id) { setConfirmReject(id); return; }
    try { await api(`/admin/dealers/${id}/reject`, { body: {} }); setConfirmReject(null); load(); } catch (e) { setError((e as Error).message); }
  };

  const q = query.trim().toLowerCase();
  const regs = (data?.registrations ?? []).filter((r) =>
    !q || [r.businessName, r.ownerName, r.email, r.city].some((v) => v.toLowerCase().includes(q)));

  const flaggedTable = (
    <table>
      <tbody>
        <tr><th>{'Property'}</th><th>{'Dealer'}</th><th>{'Price'}</th><th>{"Dealer's Projection"}</th><th>{'Area Comparable Avg.'}</th><th>{'Flag'}</th><th>{'Actions'}</th></tr>
        {data?.flagged.map((f) => (
          <tr key={f.id}>
            <td style={{ fontWeight: '600' }}>{f.title}</td><td>{f.dealerName}</td><td>{pkrShort(f.price)}</td>
            <td style={{ color: 'var(--red)', fontWeight: '600' }}>{pct(f.projectionPct)}</td><td>{f.areaPct === null ? '—' : pct(f.areaPct)}</td>
            <td><span className="tag" style={{ background: 'var(--red-bg)', color: 'var(--red)' }}>{'Outlier'}</span></td>
            <td>
              <span style={act('var(--green)')} onClick={() => review(f.id, 'approve')}>{'Approve as-is'}</span>
              <span style={act('var(--red)')} onClick={() => review(f.id, 'request_revision')}>{'Request revision'}</span>
              <span style={act('var(--ink-soft)', false, true)}>{'View'}</span>
            </td>
          </tr>
        ))}
        {data && data.flagged.length === 0 && (
          <tr><td colSpan={7} style={{ color: 'var(--ink-soft)' }}>{'No listings are waiting for pricing review.'}</td></tr>
        )}
      </tbody>
    </table>
  );

  const registrationsTable = (
    <table>
      <tbody>
        <tr><th>{'Business Name'}</th><th>{'Owner'}</th><th>{'Email / Phone'}</th><th>{'City'}</th><th>{'Submitted'}</th><th>{'Status'}</th><th>{'Actions'}</th></tr>
        {regs.map((r) => {
          const st = STATUS[r.status];
          return (
            <tr key={r.id}>
              <td style={{ fontWeight: '600' }}>{r.businessName}</td><td>{r.ownerName}</td><td>{r.email || r.phone}</td><td>{r.city}</td><td>{fmtDate(r.submittedAt)}</td>
              <td><span className="tag" style={{ background: st.bg, color: st.fg }}>{st.label}</span></td>
              <td>
                {r.status !== 'approved' && (
                  <>
                    <span style={act('var(--green)')} onClick={() => navigate(`/admin/feature-access?dealer=${r.id}`)}>{'Approve & Set Access'}</span>
                    <span style={act('var(--red)')} onClick={() => reject(r.id)}>{confirmReject === r.id ? 'Confirm reject' : 'Reject'}</span>
                  </>
                )}
                <span style={act('var(--ink-soft)', false, true)} onClick={r.status === 'approved' ? () => navigate(`/admin/feature-access?dealer=${r.id}`) : undefined}>{'View'}</span>
              </td>
            </tr>
          );
        })}
        {data && regs.length === 0 && (
          <tr><td colSpan={7} style={{ color: 'var(--ink-soft)' }}>{q ? 'No dealers match your search.' : 'No dealer registrations yet.'}</td></tr>
        )}
      </tbody>
    </table>
  );

  const n = (v?: number) => (v === undefined ? (error ? '—' : ' ') : v.toLocaleString('en-US'));
  return (
    <ApprovalsScreen
      content={{
        statPending: n(data?.stats.pending), statActive: n(data?.stats.activeDealers),
        statProperties: n(data?.stats.totalProperties), statCustomers: n(data?.stats.customers),
      }}
      slots={{ flaggedTable, registrationsTable }}
      bind={{ search: { id: 'dealer-search', value: query, onChange: (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value) } }}
    />
  );
}
