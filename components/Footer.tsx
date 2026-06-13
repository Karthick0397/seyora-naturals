import styles from './Footer.module.css';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      <div className="wrap">
        <div className={styles.news}>
          <div>
            <p className="eyebrow reveal" style={{ color: 'var(--gold-soft)' }}>The Journal</p>
            <h2 className="h2 reveal d1" style={{ marginTop: 18 }}>Join the ritual.</h2>
          </div>
          <div>
            <p className="lede reveal" style={{ marginBottom: 28 }}>
              Slow wellness notes, early access to new releases, and complimentary samples with your
              first order.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <span className={styles.brand}>Seyora</span>
            <p>
              A modern Indian wellness house, blending ancestral Ayurvedic ritual with the quiet
              precision of contemporary skincare. Made in Tamil Nadu.
            </p>
          </div>
          <div className={styles.footCol}>
            <h4>Shop</h4>
            <a href="#">Face</a>
            <a href="#">Body</a>
            <a href="#">Hair</a>
            <a href="#">Rituals &amp; Sets</a>
            <a href="#">Gifting</a>
          </div>
          <div className={styles.footCol}>
            <h4>House</h4>
            <a href="#">Our Story</a>
            <a href="#">Philosophy</a>
            <a href="#">Sourcing</a>
            <a href="#">Journal</a>
            <a href="#">Stockists</a>
          </div>
          <div className={styles.footCol}>
            <h4>Care</h4>
            <a href="#">Contact</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">WhatsApp</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div className={styles.footBottom}>
          <span>© 2026 Seyora Naturals. All rights reserved.</span>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
