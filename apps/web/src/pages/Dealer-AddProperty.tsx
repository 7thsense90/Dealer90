import { useState, type ChangeEvent } from 'react';
import AddPropertyScreen from '../screens/Dealer-AddProperty';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { fmtDate, grouped, pkrShort } from '../lib/format';

type Form = {
  title: string; type: 'residential' | 'commercial' | 'plot' | 'rental'; publicVisibility: boolean; showNocPublicly: boolean;
  location: string; sizeLabel: string; description: string; corridor: string;
  riskTier: 'conservative' | 'balanced' | 'aggressive'; rentalYield: 'low' | 'medium' | 'high';
  price: string; downPayment: string; projected1y: string; projected3y: string;
  estimateBasis: 'comparable_sales' | 'area_market_trend' | 'personal_estimate'; estimatesConfirmed: boolean;
  planMonths: string; planFrequency: 'monthly' | 'quarterly';
};

const CORRIDORS = ['DHA Phase 9–10 Expansion (Lahore)', 'Ring Road Southern Loop Corridor', 'Raiwind Road Corridor', 'Established / Near-Possession Scheme', 'Not yet tagged — pending admin review'];
const EMPTY: Form = {
  title: '', type: 'residential', publicVisibility: true, showNocPublicly: true, location: '', sizeLabel: '', description: '',
  corridor: CORRIDORS[0], riskTier: 'conservative', rentalYield: 'medium', price: '', downPayment: '', projected1y: '', projected3y: '',
  estimateBasis: 'comparable_sales', estimatesConfirmed: false, planMonths: '12', planFrequency: 'monthly',
};
/** The board's own example values - used as input hints, and to render the board exactly in visual tests. */
const SAMPLE: Form = {
  ...EMPTY, title: '5 Marla Corner Villa — DHA Phase 6', location: 'DHA Phase 6, Lahore', sizeLabel: '5 Marla',
  description: 'Corner villa with 4 bed, modern finishes, near community park. Ready for possession.',
  price: '28,500,000', downPayment: '5,000,000', projected1y: '31,500,000', projected3y: '38,200,000', estimatesConfirmed: true,
};
const TYPE_LABEL = { residential: 'Residential', commercial: 'Commercial', plot: 'Plot', rental: 'Rental' } as const;

const digits = (s: string) => Number(s.replace(/[^\d]/g, '')) || 0;
const money = (s: string) => (s.replace(/[^\d]/g, '') ? grouped(digits(s)) : '');

/** Instalments: the balance after down payment, split evenly; first due the 5th of next month. */
export function schedule(price: number, down: number, months: number, freq: 'monthly' | 'quarterly', from = new Date()) {
  const step = freq === 'quarterly' ? 3 : 1;
  const count = Math.max(1, Math.floor(months / step));
  const amount = Math.max(0, price - down) / count;
  return Array.from({ length: count }, (_, i) => ({
    n: i + 1, amount, due: new Date(from.getFullYear(), from.getMonth() + 1 + i * step, 5),
  }));
}

export default function AddPropertyPage() {
  const { me } = useAuth();
  const designFill = (window as unknown as { __D90_DESIGN_FILL__?: boolean }).__D90_DESIGN_FILL__;
  const [f, setF] = useState<Form>(designFill ? SAMPLE : EMPTY);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null);
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((x) => ({ ...x, [k]: v }));
  const dealerName = me?.dealer?.businessName ?? 'Al-Noor Builders';

  const field = (k: 'title' | 'location' | 'sizeLabel' | 'description' | 'planMonths', id: string) => ({
    id, name: k, value: f[k], placeholder: k === 'planMonths' ? '12' : SAMPLE[k],
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(k, k === 'planMonths' ? e.target.value.replace(/[^\d]/g, '') : e.target.value),
  });
  const moneyField = (k: 'price' | 'downPayment' | 'projected1y' | 'projected3y') => ({
    id: `property-${k}`, name: k, inputMode: 'numeric', value: f[k], placeholder: SAMPLE[k],
    onChange: (e: ChangeEvent<HTMLInputElement>) => set(k, money(e.target.value)),
  });
  const chip = <K extends keyof Form>(k: K, v: Form[K]) => ({ className: f[k] === v ? 'chip active' : 'chip', onClick: () => set(k, v), 'data-nav': '1' });

  const price = digits(f.price), down = digits(f.downPayment), months = Math.max(1, digits(f.planMonths) || 12);
  const rows = schedule(price, down, months, f.planFrequency);
  const perInstalment = rows[0]?.amount ?? 0;

  const submit = async (publish: boolean) => {
    if (busy) return;
    setBusy(true);
    setStatus(null);
    try {
      const body = {
        ...f, price, downPayment: down, planMonths: months,
        projected1y: f.projected1y ? digits(f.projected1y) : undefined, projected3y: f.projected3y ? digits(f.projected3y) : undefined,
        publish,
      };
      const r = await api<{ property: { status: string } }>('/dealer/properties', { body });
      const text = r.property.status === 'published' ? 'Published — it is now live on the Properties page.'
        : r.property.status === 'pricing_review' ? 'Submitted — your projection is well above the area average, so Dealer90.com will review it before it goes live.'
          : 'Draft saved.';
      setStatus({ tone: 'ok', text });
      if (publish) setF(EMPTY);
    } catch (e) {
      setStatus({ tone: 'error', text: (e as Error).message });
    } finally {
      setBusy(false);
    }
  };

  const shortTitle = f.title.split(' — ')[0] || 'Your property title';
  const preview = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {' '}
      <div className="card" style={{ padding: '16px' }}>
        {' '}
        <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--ink-soft)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '.03em' }}>{'Public Portal Preview'}</div>
        {' '}
        <div style={{ border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          {' '}
          <div style={{ height: '150px', background: 'linear-gradient(135deg,#D9CFB8,#C7BC9E)' }}></div>
          {' '}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {' '}
            <span className="tag" style={{ background: '#EFE9DA', color: 'var(--navy)', alignSelf: 'flex-start' }}>{TYPE_LABEL[f.type]}</span>
            {' '}
            <div style={{ fontSize: '16px', fontWeight: '600' }}>{shortTitle}</div>
            {' '}
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)' }}>{price ? pkrShort(price) : 'PKR —'}</div>
            {' '}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {' '}
              {f.projected1y && <span className="tag" style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>{`1yr: ${pkrShort(digits(f.projected1y))}`}</span>}
              {' '}
              {f.projected3y && <span className="tag" style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>{`3yr: ${pkrShort(digits(f.projected3y))}`}</span>}
              {' '}
            </div>
            {' '}
            <div style={{ fontSize: '11px', color: 'var(--ink-soft)' }}>{`Projected by ${dealerName} · not verified by Dealer90.com`}</div>
            {' '}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '10px', borderTop: '1px solid var(--line)', marginTop: '4px' }}>
              {' '}
              <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'var(--gold-light)' }}></div>
              {' '}
              <span style={{ fontSize: '12px', color: 'var(--ink-soft)' }}>{dealerName}</span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </div>
      {' '}
      <div className="card" style={{ padding: '20px' }}>
        {' '}
        <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--ink-soft)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '.03em' }}>{'Generated Installment Schedule'}</div>
        {' '}
        <table>
          <tbody>
            <tr><th>{'#'}</th><th>{'Due Date'}</th><th>{'Amount'}</th></tr>
            {rows.slice(0, 3).map((r) => (
              <tr key={r.n}><td>{r.n}</td><td>{fmtDate(r.due)}</td><td>{price ? `PKR ${grouped(r.amount)}` : 'PKR —'}</td></tr>
            ))}
            {rows.length > 3 && (
              <tr><td colSpan={3} style={{ textAlign: 'center', color: 'var(--ink-soft)', borderBottom: 'none' }}>{`⋯ ${rows.length - 3} more installments`}</td></tr>
            )}
          </tbody>
        </table>
        {' '}
      </div>
      {' '}
    </div>
  );

  return (
    <AddPropertyScreen
      slots={{ preview }}
      content={status ? {
        status: <span role="status" style={{ color: status.tone === 'error' ? 'var(--red, #B03A2E)' : 'var(--green, #2F6F4E)', fontWeight: 600 }}>{`Properties / Add New · ${status.text}`}</span>,
      } : {}}
      bind={{
        saveDraft: { onClick: () => void submit(false), disabled: busy },
        publish: { onClick: () => void submit(true), disabled: busy },
        title: field('title', 'property-title'),
        type_residential: chip('type', 'residential'), type_commercial: chip('type', 'commercial'),
        type_plot: chip('type', 'plot'), type_rental: chip('type', 'rental'),
        vis_internal: chip('publicVisibility', false), vis_public: chip('publicVisibility', true),
        noc_yes: chip('showNocPublicly', true), noc_no: chip('showNocPublicly', false),
        location: field('location', 'property-location'),
        size: field('sizeLabel', 'property-size'),
        description: field('description', 'property-description'),
        corridor: { id: 'property-corridor', value: f.corridor, onChange: (e: ChangeEvent<HTMLSelectElement>) => set('corridor', e.target.value) },
        risk_conservative: chip('riskTier', 'conservative'), risk_balanced: chip('riskTier', 'balanced'), risk_aggressive: chip('riskTier', 'aggressive'),
        yield_low: chip('rentalYield', 'low'), yield_medium: chip('rentalYield', 'medium'), yield_high: chip('rentalYield', 'high'),
        price: moneyField('price'), downPayment: moneyField('downPayment'),
        projected1y: moneyField('projected1y'), projected3y: moneyField('projected3y'),
        basis_comparable: chip('estimateBasis', 'comparable_sales'), basis_trend: chip('estimateBasis', 'area_market_trend'),
        basis_personal: chip('estimateBasis', 'personal_estimate'),
        confirm: { onClick: () => set('estimatesConfirmed', !f.estimatesConfirmed), role: 'checkbox', 'aria-checked': f.estimatesConfirmed, 'data-nav': '1' },
        confirmBox: f.estimatesConfirmed ? {} : { style: { width: '20px', height: '20px', borderRadius: '5px', border: '1.5px solid var(--navy)', background: '#fff', flexShrink: '0', marginTop: '1px', color: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700' } },
        planMonths: field('planMonths', 'property-months'),
        frequency: { id: 'property-frequency', value: f.planFrequency === 'monthly' ? 'Monthly' : 'Quarterly', onChange: (e: ChangeEvent<HTMLSelectElement>) => set('planFrequency', e.target.value === 'Quarterly' ? 'quarterly' : 'monthly') },
        installment: { value: price ? grouped(perInstalment) : '', placeholder: '1,958,333' },
      }}
    />
  );
}
