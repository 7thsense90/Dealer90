/** Pakistani money formatting as used across the designs. */
const trim = (n: number, digits: number) => String(Number(n.toFixed(digits)));

/** 28_500_000 -> "PKR 2.85 Cr", 4_200_000 -> "PKR 42 Lac", 95_000 -> "PKR 95,000" */
export function pkrShort(v: number) {
  if (v >= 10_000_000) return `PKR ${trim(v / 10_000_000, 2)} Cr`;
  if (v >= 100_000) return `PKR ${trim(v / 100_000, 1)} Lac`;
  return `PKR ${v.toLocaleString('en-US')}`;
}

/** 1958333 -> "1,958,333" */
export const grouped = (v: number) => Math.round(v).toLocaleString('en-US');

/** Parse "28,500,000" / "PKR 2.85 Cr" / "42 lac" into whole rupees; null when unparseable. */
export function parsePkr(input: string): number | null {
  const s = input.toLowerCase().replace(/pkr|rs\.?/g, '').trim();
  const m = s.match(/^([\d,.]+)\s*(cr|crore|lac|lakh|l)?$/);
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, ''));
  if (!Number.isFinite(n)) return null;
  const mult = m[2]?.startsWith('cr') ? 10_000_000 : m[2] ? 100_000 : 1;
  return Math.round(n * mult);
}

export const fmtDate = (d: string | Date) =>
  new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
