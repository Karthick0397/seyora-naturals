import styles from './Gallery.module.css';

const photos = [
  { tone: 't-clay',   cap: 'morning ritual',    label: 'Morning ritual',   tall: false },
  { tone: 't-forest', cap: 'flatlay · botanicals', label: 'Botanical flatlay', tall: true  },
  { tone: 't-beige',  cap: 'shelfie',            label: 'Product shelfie',  tall: false },
  { tone: 't-sage',   cap: 'in the bath',        label: 'Bath ritual',      tall: false },
  { tone: 't-gold',   cap: 'texture',            label: 'Product texture',  tall: false },
  { tone: 't-stone',  cap: 'on linen',           label: 'On linen',         tall: false },
  { tone: 't-clay',   cap: 'studio',             label: 'Studio shot',      tall: false },
];

const IgIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Gallery() {
  return (
    <section className={`${styles.gallery} sec`} id="journal" aria-label="Community lifestyle gallery">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow gold reveal">@seyoranaturals</p>
            <h2 className="h2 reveal d1">
              Lifestyle &amp; ritual,
              <br />
              shared by you.
            </h2>
          </div>
          <a href="#" className="link-underline reveal d2" style={{ marginBottom: 10 }}>
            Follow on Instagram <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div className={`${styles.galGrid} reveal`}>
          {photos.map((p, i) => (
            <a
              key={i}
              href="#"
              aria-label={p.label}
              className={p.tall ? styles.tall : undefined}
            >
              <div className={`photo ${p.tone}`}>
                <span className="cap">{p.cap}</span>
              </div>
              <span className={styles.ig} aria-hidden="true">
                <IgIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
