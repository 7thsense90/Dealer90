import { useCallback, useRef } from 'react';

/**
 * Fits a board to the browser window without changing its design:
 *  - window at least as wide as the board: the board stretches to the full width (no side gaps);
 *  - narrower window: the whole board is scaled down to fit, so nothing is cut off at the edges.
 * The board's own width (1440px, or 1200px for sign-in screens) is read from its root element.
 */
export function useFit() {
  const cleanup = useRef<(() => void) | null>(null);
  return useCallback((wrapper: HTMLDivElement | null) => {
    cleanup.current?.();
    cleanup.current = null;
    if (!wrapper) return;
    const board = wrapper.firstElementChild as HTMLElement | null;
    if (!board) return;
    const designWidth = Number(board.dataset.boardWidth ?? parseFloat(board.style.width)) || 1440;
    board.dataset.boardWidth = String(designWidth);
    const apply = () => {
      const available = document.documentElement.clientWidth;
      const scale = Math.min(1, available / designWidth);
      board.style.width = '100%';
      wrapper.style.width = scale < 1 ? `${designWidth}px` : '100%';
      wrapper.style.setProperty('zoom', scale < 1 ? String(scale) : '');
      // keep the board's background reaching the bottom of the window when scaled down
      wrapper.style.minHeight = scale < 1 ? `${100 / scale}vh` : '';
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(document.documentElement);
    window.addEventListener('resize', apply);
    cleanup.current = () => { ro.disconnect(); window.removeEventListener('resize', apply); };
  }, []);
}
