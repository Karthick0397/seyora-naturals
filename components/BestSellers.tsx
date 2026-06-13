'use client';
import { useRef, useState } from 'react';
import styles from './BestSellers.module.css';

const products = [
  { name: 'Saffron Glow Serum',       cat: 'Face · Serum',    price: '₹2,890', tone: 't-gold',   cap: 'amber serum bottle',    stars: '★★★★★' },
  { name: 'Sandalwood Cleansing Oil', cat: 'Face · Cleanse',  price: '₹1,740', tone: 't-clay',   cap: 'frosted glass cleanser', stars: '★★★★★' },
  { name: 'Vetiver Bath Ritual',      cat: 'Body · Soak',     price: '₹2,150', tone: 't-sage',   cap: 'bath salts in ceramic',  stars: '★★★★☆' },
  { name: 'Amla Hair Elixir',         cat: 'Hair · Treatment',price: '₹1,980', tone: 't-forest', cap: 'dark glass hair oil',    stars: '★★★★★' },
  { name: 'Rose & Clay Mask',         cat: 'Face · Mask',     price: '₹1,620', tone: 't-beige',  cap: 'pink clay in jar',       stars: '★★★★★' },
  { name: 'Tulsi Hand Balm',          cat: 'Body · Hands',    price: '₹980',   tone: 't-stone',  cap: 'tin of balm',            stars: '★★★★☆' },
];

function Card({ product }: { product: typeof products[0] }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className={styles.card} role="listitem">
      <div className={`${styles.phWrap} zoom`}>
        <button
          className={`${styles.wish} ${wished ? styles.on : ''}`}
          aria-label={`Add ${product.name} to wishlist`}
          aria-pressed={wished}
          onClick={() => setWished(!wished)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-7.5-4.6-10-9.2C.4 8.3 2 4.8 5.2 4.8c2 0 3.2 1.2 3.8 2.2.6-1 1.8-2.2 3.8-2.2 3.2 0 4.8 3.5 3.2 7C19.5 16.4 12 21 12 21z" />
          </svg>
        </button>
        <div className={`photo ${product.tone}`}>
          <span className="cap">{product.cap}</span>
        </div>
        <button
          className={styles.quick}
          onClick={handleQuickAdd}
          role="button"
        >
          {added ? `Added to Ritual ✓` : `Quick Add — ${product.price}`}
        </button>
      </div>
      <div className={styles.metaRow}>
        <div>
          <h3 className="serif">{product.name}</h3>
          <div className={styles.cat}>{product.cat}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className={styles.price}>{product.price}</div>
          <div className={styles.stars} aria-label="Star rating">{product.stars}</div>
        </div>
      </div>
    </div>
  );
}

export default function BestSellers() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.card}`) as HTMLElement;
    const step = card ? card.offsetWidth + 30 : 360;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className={`${styles.sellers} sec`} id="bestsellers" aria-label="Best sellers">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow gold reveal">Most Loved</p>
            <h2 className="h2 reveal d1">Best sellers</h2>
          </div>
          <div className={`${styles.carNav} reveal d2`} aria-label="Carousel navigation">
            <button onClick={() => scroll(-1)} aria-label="Previous products">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button onClick={() => scroll(1)} aria-label="Next products">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className={styles.carTrack} ref={trackRef} role="list" aria-label="Product carousel">
          {products.map((p) => (
            <Card key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
