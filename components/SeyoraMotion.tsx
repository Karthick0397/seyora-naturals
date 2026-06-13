'use client';
import { useEffect } from 'react';

export default function SeyoraMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- REVEAL ---- */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const bindReveals = () => {
      document.querySelectorAll('.reveal:not(.in), .line-mask:not(.in)').forEach((el) =>
        io.observe(el)
      );
    };
    bindReveals();

    const kickInView = () => {
      document.querySelectorAll('.reveal:not(.in), .line-mask:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.95 && r.bottom > 0) el.classList.add('in');
      });
    };
    requestAnimationFrame(() => requestAnimationFrame(kickInView));
    window.addEventListener('load', kickInView);

    /* ---- PARALLAX ---- */
    let parEls: Element[] = [];
    const collectParallax = () => {
      parEls = Array.from(document.querySelectorAll('[data-parallax]'));
    };
    collectParallax();

    let rafId: number;
    const parallaxLoop = () => {
      if (!reduce) {
        const vh = window.innerHeight;
        parEls.forEach((el) => {
          const inner = (el.querySelector('.photo') as HTMLElement) || (el as HTMLElement);
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const speed = parseFloat((el as HTMLElement).dataset.parallax ?? '0.12');
          const off = (r.top + r.height / 2 - vh / 2) * -speed;
          inner.style.transform = `translateY(${off.toFixed(1)}px)`;
        });
      }
      rafId = requestAnimationFrame(parallaxLoop);
    };
    rafId = requestAnimationFrame(parallaxLoop);

    /* ---- MAGNETIC ---- */
    const bindMagnetic = () => {
      if (reduce) return;
      document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
        if ((el as HTMLElement & { __mag?: boolean }).__mag) return;
        (el as HTMLElement & { __mag?: boolean }).__mag = true;
        const strength = 0.32;
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          el.style.transform = `translate(${x * strength}px,${y * strength}px)`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'translate(0,0)';
        });
      });
    };
    bindMagnetic();

    // Re-bind after dynamic content (BestSellers carousel)
    const mo = new MutationObserver(() => {
      bindReveals();
      bindMagnetic();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(rafId);
      window.removeEventListener('load', kickInView);
    };
  }, []);

  return null;
}
