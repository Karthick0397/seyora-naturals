import styles from './Showcase.module.css';

export default function Showcase() {
  return (
    <section className={`${styles.showcase} sec`} id="shop" aria-label="Featured products">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow gold reveal">The Collection</p>
            <h2 className="h2 reveal d1">
              Objects of daily ritual,
              <br />
              made to be reached for.
            </h2>
          </div>
          <a href="#shop" className="link-underline reveal d2" style={{ marginBottom: 10 }}>
            Shop all <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.editRow}>
          <div className={`${styles.editMedia} zoom reveal`} aria-hidden="true">
            <div className={styles.badge}>Bestseller</div>
            <div className="photo t-gold">
              <span className="cap">amber glass facial oil on linen</span>
            </div>
          </div>
          <div className={styles.editText}>
            <span className={`${styles.num} reveal`}>01 — Face</span>
            <h3 className="h3 reveal d1">Moringa Radiance Facial Oil</h3>
            <p className="lede reveal d2">
              A weightless, fast-absorbing elixir of cold-pressed moringa and Kashmiri saffron that
              restores luminosity overnight.
            </p>
            <div className={`${styles.priceline} reveal d3`}>
              <span className={styles.price}>₹2,480</span>
              <div className={styles.notes} aria-label="Key ingredients">
                <span className={styles.noteChip}>Saffron</span>
                <span className={styles.noteChip}>Moringa</span>
                <span className={styles.noteChip}>Vetiver</span>
              </div>
            </div>
            <div className="reveal d3">
              <a href="#" className="btn magnetic">
                <span className="dot" aria-hidden="true"></span>Add to Ritual
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.editRow} ${styles.flip}`}>
          <div className={`${styles.editMedia} zoom reveal`} aria-hidden="true">
            <div className="photo t-sage">
              <span className="cap">ceramic jar, neem &amp; clay texture</span>
            </div>
          </div>
          <div className={styles.editText}>
            <span className={`${styles.num} reveal`}>02 — Body</span>
            <h3 className="h3 reveal d1">Neem &amp; Wild Honey Body Balm</h3>
            <p className="lede reveal d2">
              A deeply nourishing balm of purifying neem and Nilgiri honey that melts into skin,
              leaving a soft, resinous warmth.
            </p>
            <div className={`${styles.priceline} reveal d3`}>
              <span className={styles.price}>₹1,950</span>
              <div className={styles.notes} aria-label="Key ingredients">
                <span className={styles.noteChip}>Neem</span>
                <span className={styles.noteChip}>Wild Honey</span>
                <span className={styles.noteChip}>Shea</span>
              </div>
            </div>
            <div className="reveal d3">
              <a href="#" className="btn magnetic">
                <span className="dot" aria-hidden="true"></span>Add to Ritual
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
