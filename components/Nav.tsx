'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

const links = [
  { href: '#shop',       label: 'Shop' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#journal',    label: 'Journal' },
  { href: '#about',      label: 'About' },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle(styles.scrolled, window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={styles.nav} id="nav" ref={navRef} role="banner">
        <a className={styles.brand} href="#top" aria-label="Seyora Naturals home" onClick={close}>
          Seyora<sup>®</sup>
        </a>
        <nav className={styles.navLinks} aria-label="Primary navigation">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className={styles.navActions}>
          <button aria-label="Search">Search</button>
          <button aria-label="Wishlist">Wishlist</button>
          <button aria-label="Cart, 2 items">
            Cart <span className={styles.cartCount} aria-hidden="true">2</span>
          </button>
        </div>
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.drawerLink} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.drawerActions}>
          <button onClick={close}>Search</button>
          <button onClick={close}>Wishlist</button>
          <button onClick={close}>
            Cart <span className={styles.cartCount} aria-hidden="true">2</span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className={styles.backdrop} onClick={close} aria-hidden="true" />}
    </>
  );
}
