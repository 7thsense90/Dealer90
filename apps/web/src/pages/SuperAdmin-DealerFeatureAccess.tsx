import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FeatureAccessScreen from '../screens/SuperAdmin-DealerFeatureAccess';
import { api } from '../lib/api';
import type { FeatureKey } from '../lib/auth';

type Features = Record<FeatureKey, boolean>;
type DealerRow = { id: string; businessName: string; status: string; features: Features };

/** The seven switchable modules, in the order and wording of the board. */
const MODULES: { key: FeatureKey; name: string; desc: string }[] = [
  { key: 'buyer_requests', name: 'Buyer Requests', desc: 'Inbox of Property Advisor leads routed to this dealer' },
  { key: 'transfer_requests', name: 'Transfer Requests', desc: 'Resale / ownership-transfer approvals from customers' },
  { key: 'properties', name: 'Properties', desc: 'Add, edit and publish property listings' },
  { key: 'customers_plans', name: 'Customers & Installment Plans', desc: 'Create & manage customer records and installment plans' },
  { key: 'payments_reminders', name: 'Payments & Reminders', desc: 'Record payments, send overdue reminders' },
  { key: 'marketing', name: 'Marketing (Email & SMS)', desc: 'Bulk email/SMS campaigns, template editor, contact import' },
  { key: 'branding', name: 'Branding', desc: "Custom logo & colors on the dealer's public listings" },
];
/** Sidebar preview, exactly as the board lists it. */
const PREVIEW: { label: string; key?: FeatureKey }[] = [
  { label: 'Dashboard' }, { label: 'Buyer Requests', key: 'buyer_requests' }, { label: 'Transfer Requests', key: 'transfer_requests' },
  { label: 'Properties', key: 'properties' }, { label: 'Customers', key: 'customers_plans' }, { label: 'Payments', key: 'payments_reminders' },
  { label: 'Marketing', key: 'marketing' }, { label: 'Branding', key: 'branding' },
];
const SHORT: Record<FeatureKey, string> = {
  buyer_requests: 'Buyer Requests', transfer_requests: 'Transfer Requests', properties: 'Properties',
  customers_plans: 'Customers', payments_reminders: 'Payments', marketing: 'Marketing', branding: 'Branding',
};
const ALL_ON = Object.fromEntries(MODULES.map((m) => [m.key, true])) as Features;
/** Standard preset: core selling tools on; Marketing and Branding are add-ons. */
const STANDARD: Features = { ...ALL_ON, marketing: false, branding: false };

const lockedSummary = (f: Features) => {
  const off = MODULES.filter((m) => !f[m.key]).map((m) => SHORT[m.key]);
  return off.length ? `${off.join(', ')} locked` : 'All tabs enabled';
};

export default function FeatureAccessPage() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [dealers, setDealers] = useState<DealerRow[] | null>(null);
  const [features, setFeatures] = useState<Features | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { api<{ dealers: DealerRow[] }>('/admin/dealers').then((r) => setDealers(r.dealers)).catch((e) => setError(e.message)); }, []);
  const current = dealers?.find((d) => d.id === params.get('dealer'))
    ?? dealers?.find((d) => d.status !== 'approved') ?? dealers?.[0];
  useEffect(() => { if (current) setFeatures({ ...current.features }); }, [current?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const save = async () => {
    if (!current || !features || busy) return;
    setBusy(true);
    setError(null);
    try {
      await api(`/admin/dealers/${current.id}/access`, { method: 'PUT', body: { features, approve: true } });
      navigate('/admin/approvals');
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  };

  const f = features ?? current?.features;
  const modules = (
    <div className="card" style={{ gridColumn: 'span 2' }}>
      {' '}
      <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {' '}
        <div>
          {' '}
          <div style={{ fontWeight: '600', fontSize: '15px' }}>{'Module & Tab Access'}</div>
          {' '}
          <div style={{ fontSize: '11.5px', color: error ? 'var(--red)' : 'var(--ink-soft)', marginTop: '2px' }}>
            {error ?? "Dashboard is always available to every dealer and can't be turned off."}
          </div>
          {' '}
        </div>
        {' '}
        <div style={{ display: 'flex', gap: '8px' }}>
          {' '}
          <button className="btn btn-outline" style={{ padding: '7px 12px', fontSize: '12px' }} onClick={() => setFeatures({ ...ALL_ON })}>{'Enable All'}</button>
          {' '}
          <button className="btn btn-outline" style={{ padding: '7px 12px', fontSize: '12px' }} onClick={() => setFeatures({ ...STANDARD })}>{'Standard Preset'}</button>
          {' '}
        </div>
        {' '}
      </div>
      {' '}
      {MODULES.map((m) => {
        const on = !!f?.[m.key];
        return (
          <div key={m.key} className="modrow" style={on ? undefined : { background: 'var(--red-bg)' }}>
            {' '}
            <div className={on ? 'toggle on' : 'toggle'} role="switch" aria-checked={on} aria-label={m.name} tabIndex={0}
              onClick={() => f && setFeatures({ ...f, [m.key]: !on })}
              onKeyDown={(e) => { if ((e.key === ' ' || e.key === 'Enter') && f) { e.preventDefault(); setFeatures({ ...f, [m.key]: !on }); } }}></div>
            {' '}
            <div style={{ flex: '1' }}>
              {' '}
              <div style={{ fontWeight: '600', fontSize: '13.5px' }}>{m.name}</div>
              {' '}
              <div style={{ fontSize: '11.5px', color: 'var(--ink-soft)' }}>{m.desc}</div>
              {' '}
            </div>
            {' '}
            {on
              ? <span className="tag" style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>{'Enabled'}</span>
              : <span className="tag" style={{ background: 'var(--red-bg)', color: 'var(--red)', border: '1px solid #E8B9B1' }}>{'🔒 Locked for this dealer'}</span>}
            {' '}
          </div>
        );
      })}
      {' '}
    </div>
  );

  const preview = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {' '}
      <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '.03em' }}>{"Live Preview — Dealer's Sidebar"}</div>
      {' '}
      <div style={{ background: 'var(--navy)', borderRadius: '14px', padding: '22px 14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {' '}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 8px 18px' }}>
          {' '}
          <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'var(--gold-light)' }}></div>
          {' '}
          <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>{current?.businessName ?? ' '}</div>
          {' '}
        </div>
        {' '}
        {PREVIEW.map((p, i) => {
          const locked = !!p.key && !!f && !f[p.key];
          return (
            <div key={p.label} className={i === 0 ? 'navitem active' : locked ? 'navitem locked' : 'navitem'}>
              {locked ? `${p.label} ` : p.label}
              {locked && (
                <>
                  <span className="lock-ic">{'🔒'}</span>
                  {' '}
                  <div className="tooltip">{"This feature isn't enabled for your account. Please contact Admin to enable this feature."}</div>
                  {' '}
                </>
              )}
            </div>
          );
        })}
        {' '}
      </div>
      {' '}
      <div style={{ fontSize: '11px', color: 'var(--ink-soft)' }}>{'↑ Hover the locked tab to see exactly what the dealer sees.'}</div>
      {' '}
    </div>
  );

  const compare = (
    <div className="card" style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {' '}
      <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)' }}>{'Access Is Set Per Dealer'}</div>
      {' '}
      <div style={{ fontSize: '12px', color: 'var(--ink-soft)' }}>{"Every dealer gets its own configuration — enabling Marketing here has no effect on any other dealer's account."}</div>
      {' '}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {' '}
        {dealers?.map((d) => {
          const feats = d.id === current?.id && f ? f : d.features;
          const summary = lockedSummary(feats);
          const allOn = summary === 'All tabs enabled';
          return (
            <div key={d.id} className={d.id === current?.id ? 'dealer-pill active' : 'dealer-pill'} onClick={() => setParams({ dealer: d.id })}>
              {`${d.businessName} `}
              <span className="tag" style={allOn ? { background: 'var(--green-bg)', color: 'var(--green)' } : { background: 'var(--red-bg)', color: 'var(--red)' }}>{summary}</span>
            </div>
          );
        })}
        {' '}
      </div>
      {' '}
    </div>
  );

  return (
    <FeatureAccessScreen
      content={{ breadcrumb: `Dealer Approvals / ${current?.businessName ?? ''}` }}
      slots={{ modules, preview, compare }}
      bind={{
        cancel: { onClick: () => navigate('/admin/approvals') },
        save: { onClick: () => void save(), disabled: busy || !current, style: busy ? { opacity: 0.7 } : undefined },
      }}
    />
  );
}
