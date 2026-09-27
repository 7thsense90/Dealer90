import type { ReactNode } from 'react';

/**
 * How a page container plugs data and behaviour into a generated screen (see tools/bindings.py).
 * Anything not provided renders exactly as on the design board.
 */
export type ScreenProps = {
  /** Replace a whole element (e.g. the listing grid). */
  slots?: Record<string, ReactNode>;
  /** Replace an element's children only; its box and styles stay as designed. */
  content?: Record<string, ReactNode>;
  /** Props spread onto an element: value/onChange/onClick/className/disabled… */
  bind?: Record<string, Record<string, unknown> | undefined>;
};
