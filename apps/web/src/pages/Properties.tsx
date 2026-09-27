import { useEffect, useState, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertiesScreen from '../screens/Properties';
import { api } from '../lib/api';
import { pkrShort } from '../lib/format';

type Listing = {
  id: string; title: string; area: string; city: string; price: number; planMonths: number;
  delivery: 'ready' | 'under_construction'; roiPct: number | null; gradient: string | null;
  dealerName: string; dealerScore: number | null;
};
type Result = { items: Listing[]; total: number; dealerCount: number };
type City = 'Lahore' | 'Karachi' | 'Islamabad' | undefined;
type Roi = '8-10' | '10-15' | '15+' | undefined;
type Delivery = 'ready' | 'under_construction' | undefined;

const PAGE = 6;
// ROI tag colours exactly as on the board: under 10% clay, 10–15% gold, 15%+ moss.
const roiColor = (r: number) => (r >= 15 ? 'var(--moss)' : r >= 10 ? 'var(--gold)' : 'var(--clay)');

/** One listing card — the board's card markup, with live values. */
function Card({ p, onOpen }: { p: Listing; onOpen: () => void }) {
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      {' '}
      <div style={{ height: '172px', background: p.gradient ?? 'linear-gradient(135deg,#2C4463,#10213A)', position: 'relative' }}>
        {' '}
        {p.roiPct !== null && (
          <span className="tag" style={{ position: 'absolute', top: '12px', left: '12px', background: roiColor(p.roiPct), color: '#fff' }}>
            {`${p.roiPct}% ROI`}
          </span>
        )}
        {' '}
        <span className="tag" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,.92)', color: 'var(--navy)' }}>
          {p.delivery === 'ready' ? 'Ready' : 'Under Construction'}
        </span>
        {' '}
      </div>
      {' '}
      <div style={{ padding: '18px' }}>
        {' '}
        <div style={{ fontSize: '15px', fontWeight: '600' }}>{p.title}</div>
        {' '}
        <div style={{ fontSize: '12.5px', color: 'var(--ink-soft)', marginTop: '3px' }}>{`${p.area}, ${p.city}`}</div>
        {' '}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>
          {' '}
          <div className="num" style={{ fontFamily: "'D90 Fraunces 400-500-600-700',serif", fontSize: '19px', fontWeight: '600', color: 'var(--navy)' }}>{pkrShort(p.price)}</div>
          {' '}
          <div style={{ fontSize: '11px', color: 'var(--ink-soft)' }}>{`${p.planMonths} mo. plan`}</div>
          {' '}
        </div>
        {' '}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          {' '}
          <span className="tag" style={{ background: 'var(--moss-bg)', color: 'var(--moss)' }}>
            {`✓ ${p.dealerName}${p.dealerScore !== null ? ` · ${p.dealerScore}/10` : ''}`}
          </span>
          {' '}
        </div>
        {' '}
        <a href="#" className="btn btn-navy" style={{ width: '100%', marginTop: '14px' }} onClick={(e) => { e.preventDefault(); onOpen(); }}>
          {'See Offer →'}
        </a>
        {' '}
      </div>
      {' '}
    </div>
  );
}

export default function PropertiesPage() {
  const navigate = useNavigate();
  const [city, setCity] = useState<City>();
  const [roi, setRoi] = useState<Roi>();
  const [delivery, setDelivery] = useState<Delivery>();
  const [data, setData] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const params = (offset: number) => {
    const q = new URLSearchParams({ limit: String(PAGE), offset: String(offset), sort: 'roi_desc' });
    if (city) q.set('city', city);
    if (roi) q.set('roi', roi);
    if (delivery) q.set('delivery', delivery);
    return q.toString();
  };

  useEffect(() => {
    let live = true;
    setError(null);
    api<Result>(`/public/properties?${params(0)}`)
      .then((r) => live && setData(r))
      .catch((e) => live && setError(e.message));
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, roi, delivery]);

  const loadMore = async () => {
    if (!data || loadingMore) return;
    setLoadingMore(true);
    try {
      const r = await api<Result>(`/public/properties?${params(data.items.length)}`);
      setData({ ...r, items: [...data.items, ...r.items] });
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoadingMore(false);
    }
  };

  const chip = (active: boolean, onClick: () => void) => ({ className: active ? 'chip chip-active' : 'chip', onClick, 'data-nav': '1' });
  const toggle = <T,>(cur: T | undefined, v: T, set: (x: T | undefined) => void) => () => set(cur === v ? undefined : v);
  const hasMore = !!data && data.items.length < data.total;

  const bind = {
    city_all: chip(!city, () => setCity(undefined)),
    city_lahore: chip(city === 'Lahore', () => setCity('Lahore')),
    city_karachi: chip(city === 'Karachi', () => setCity('Karachi')),
    city_islamabad: chip(city === 'Islamabad', () => setCity('Islamabad')),
    roi_8_10: chip(roi === '8-10', toggle(roi, '8-10', setRoi)),
    roi_10_15: chip(roi === '10-15', toggle(roi, '10-15', setRoi)),
    roi_15: chip(roi === '15+', toggle(roi, '15+', setRoi)),
    delivery_ready: chip(delivery === 'ready', toggle(delivery, 'ready', setDelivery)),
    delivery_uc: chip(delivery === 'under_construction', toggle(delivery, 'under_construction', setDelivery)),
    load_more: {
      onClick: (e: MouseEvent) => { e.preventDefault(); void loadMore(); },
      style: { padding: '13px 32px', visibility: hasMore ? 'visible' : 'hidden', opacity: loadingMore ? 0.6 : 1 },
    },
  };

  const countText = (
    <div style={{ padding: '24px 64px 0', fontSize: '13.5px', color: 'var(--ink-soft)' }}>
      {error ? error : data ? (
        <>
          {'Showing '}<span style={{ color: 'var(--ink)', fontWeight: '600' }}>{data.total.toLocaleString('en-US')}</span>
          {data.total === 1 ? ' listing from ' : ' listings from '}
          <span style={{ color: 'var(--ink)', fontWeight: '600' }}>{data.dealerCount}</span>
          {data.dealerCount === 1 ? ' verified dealer' : ' verified dealers'}
        </>
      ) : ' '}
    </div>
  );

  const grid = (
    <div style={{ padding: '20px 64px 64px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', minHeight: data ? undefined : '400px' }}>
      {data?.items.map((p) => <Card key={p.id} p={p} onOpen={() => navigate('/advisor')} />)}
      {data && data.items.length === 0 && (
        <div style={{ gridColumn: '1 / -1', fontSize: '14px', color: 'var(--ink-soft)' }}>
          {'No listings match these filters yet. Try another city or ROI range.'}
        </div>
      )}
    </div>
  );

  return <PropertiesScreen bind={bind} slots={{ resultsCount: countText, listingGrid: grid }} />;
}
