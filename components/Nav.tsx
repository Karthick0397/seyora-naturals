'use client';
import { useEffect, useRef } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle(styles.scrolled, window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={styles.nav} id="nav" ref={navRef} role="banner">
      <a className={styles.brand} href="#top" aria-label="Seyora Naturals home">
        Seyora<sup>®</sup>
      </a>
      <nav className={styles.navLinks} aria-label="Primary navigation">
        <a href="#shop">Shop</a>
        <a href="#philosophy">Philosophy</a>
        <a href="#journal">Journal</a>
        <a href="#about">About</a>
      </nav>
      <div className={styles.navActions}>
        <button aria-label="Search">Search</button>
        <button aria-label="Wishlist">Wishlist</button>
        <button aria-label="Cart, 2 items">
          Cart <span className={styles.cartCount} aria-hidden="true">2</span>
        </button>
      </div>
      <button className={styles.burger} aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
