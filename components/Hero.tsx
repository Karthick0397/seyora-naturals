import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero-cinematic" aria-label="Hero">
      <div className={styles.heroBg} data-parallax="0.18" aria-hidden="true">
        <div className="photo t-forest">
          <span className="cap">hero · linen, ceramic vessel &amp; moringa in morning light</span>
        </div>
      </div>
      <div className={styles.scrim} aria-hidden="true"></div>

      {/* editorial product feature */}
      <aside className={`${styles.heroFeature} reveal d3`} aria-label="Featured product">
        <div className={styles.hfStack}>
          <div className={styles.hfSeal} aria-hidden="true">
            <svg viewBox="0 0 120 120" role="img" aria-label="Seyora Naturals seal">
              <defs>
                <path id="sealArc" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"></path>
              </defs>
              <text>
                <textPath href="#sealArc" startOffset="0">
                  SEYORA NATURALS · ROOTED IN TRADITION · EST. 1947 ·{' '}
                </textPath>
              </text>
            </svg>
            <span className={styles.hfSealMark} aria-hidden="true">✦</span>
          </div>
          <div className={`${styles.hfFrame} zoom`} data-parallax="0.06">
            <div className="photo t-gold">
              <span className="cap">moringa radiance oil · amber glass on linen</span>
            </div>
          </div>
          <div className={styles.hfCard}>
            <div className={styles.hfCardRow}>
              <span className={styles.hfNum}>01 / 04</span>
              <span className={styles.hfTag}>Bestseller</span>
            </div>
            <h3>
              Moringa Radiance
              <br />
              Facial Oil
            </h3>
            <div className={styles.hfMeta}>
              <span className={styles.price}>₹2,480</span>
              <a href="#shop" className={styles.hfLink}>
                Shop the hero <span className={styles.arrow} aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <div className={styles.heroInner}>
        <p className="eyebrow reveal" style={{ color: 'var(--gold-soft)' }}>
          Ayurvedic Wellness · Crafted in Tamil Nadu
        </p>
        <h1 className="display">
          <span className="line-mask reveal d1">
            <span>Rooted in Tradition.</span>
          </span>
          <span className="line-mask reveal d2">
            <span>
              <em>Made for Today.</em>
            </span>
          </span>
        </h1>
        <p className="lede reveal d3">
          Skincare and rituals drawn from generations of Indian botanical wisdom — distilled into
          objects of quiet, everyday luxury.
        </p>
        <div className={`${styles.heroCta} reveal d4`}>
          <a href="#shop" className="btn magnetic light">
            <span className="dot" aria-hidden="true"></span>Explore the Collection
          </a>
          <a href="#philosophy" className="link-underline">
            Our Philosophy <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        <span>Scroll</span>
        <span className={styles.bar}></span>
      </div>
    </section>
  );
}
