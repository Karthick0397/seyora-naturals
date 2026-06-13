'use client';
import { useEffect, useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    q: "The oil arrived wrapped like a gift I'd give someone I love. Three weeks in, my skin has a calm it has never had. It feels like a small daily ceremony.",
    n: 'Ananya R.',
    r: 'Bengaluru · Verified',
  },
  {
    q: "Finally a brand that treats Indian botanicals with the reverence they deserve. The texture, the scent, the ritual of it — utterly considered.",
    n: 'Meera D.',
    r: 'Mumbai · Verified',
  },
  {
    q: "I keep the balm on my desk just to look at it. It's the rare wellness object that earns its place on the shelf and in the routine.",
    n: 'Karthik V.',
    r: 'Chennai · Verified',
  },
  {
    q: "Slow, honest, beautiful. Seyora has become the most grounding ten minutes of my morning. Nothing else comes close.",
    n: 'Leïla S.',
    r: 'Pondicherry · Verified',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (i: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, 360);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo((index + 1) % testimonials.length), 6500);
    return () => clearInterval(timer);
  });

  const t = testimonials[index];

  return (
    <section className={`${styles.testi} sec`} aria-label="Customer testimonials">
      <div className="wrap">
        <p className="eyebrow gold reveal" style={{ textAlign: 'center', marginBottom: 50 }}>
          Words from our community
        </p>
        <div className={styles.testiQuote}>
          <span className={styles.mark} aria-hidden="true">&ldquo;</span>
          <blockquote>
            <q
              style={{ opacity: visible ? 1 : 0, transition: 'opacity .4s ease' }}
            >
              {t.q}
            </q>
            <div className={styles.who}>
              <b style={{ opacity: visible ? 1 : 0, transition: 'opacity .4s ease' }}>{t.n}</b>
              <small style={{ opacity: visible ? 1 : 0, transition: 'opacity .4s ease' }}>
                {t.r}
              </small>
            </div>
          </blockquote>
        </div>
        <div className={styles.testiDots} role="tablist" aria-label="Select testimonial">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={i === index ? styles.on : ''}
              role="tab"
              aria-label={`Testimonial ${i + 1}`}
              aria-selected={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
