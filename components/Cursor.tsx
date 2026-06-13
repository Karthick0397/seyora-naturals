'use client';
import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx.toFixed(1)}px,${ry.toFixed(1)}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onEnter = () => ring.classList.add(styles.hovering);
    const onLeave = () => ring.classList.remove(styles.hovering);

    const bindHovers = () => {
      document.querySelectorAll('a, button, .magnetic').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    bindHovers();

    // re-bind after any DOM changes (for dynamically-rendered cards)
    const observer = new MutationObserver(bindHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={styles.cursorRing} ref={ringRef} aria-hidden="true" />
      <div className={styles.cursorDot} ref={dotRef} aria-hidden="true" />
    </>
  );
}
