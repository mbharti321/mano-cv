import { useRef, useState, useCallback } from 'react';
import { cl } from '../utils';

export function useHistory(init) {
  const hist = useRef([cl(init)]);
  const idx = useRef(0);
  const [, tick] = useState(0);
  const rerender = () => tick(n => n + 1);
  const current = hist.current[idx.current];
  const push = useCallback(
    s => {
      hist.current = hist.current.slice(0, idx.current + 1);
      hist.current.push(cl(s));
      if (hist.current.length > 80) hist.current.shift();
      idx.current = hist.current.length - 1;
      rerender();
    },
    [],
  );
  const undo = useCallback(() => {
    if (idx.current > 0) {
      idx.current--;
      rerender();
    }
  }, []);
  const redo = useCallback(() => {
    if (idx.current < hist.current.length - 1) {
      idx.current++;
      rerender();
    }
  }, []);
  return { current, push, undo, redo, canUndo: idx.current > 0, canRedo: idx.current < hist.current.length - 1 };
}
