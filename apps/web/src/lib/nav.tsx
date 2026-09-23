import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/** go(route) returns a click handler; go(null) returns undefined (element stays inert). */
export function useGo() {
  const navigate = useNavigate();
  return (to: string | null | undefined) =>
    to ? (e?: MouseEvent) => { e?.preventDefault(); navigate(to); } : undefined;
}

type AProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string; children?: ReactNode };

/** Drop-in replacement for the design's <a href="#">: same element, same styles, real routing. */
export function A({ to, children, ...rest }: AProps) {
  if (to) return <Link to={to} {...rest}>{children}</Link>;
  return (
    <a href="#" onClick={(e) => e.preventDefault()} {...rest}>
      {children}
    </a>
  );
}
