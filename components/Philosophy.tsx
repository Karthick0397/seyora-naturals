import styles from './Philosophy.module.css';

const cells = [
  {
    n: 'I',
    title: 'Ancestral Knowledge',
    body: 'Every formula begins in the Ayurvedic texts and the hands of the women who have practised them for generations across Tamil Nadu.',
  },
  {
    n: 'II',
    title: 'Honest Sourcing',
    body: 'We trace each botanical to its grove. Wild-harvested, fairly traded, and pressed within days of harvest to hold its living potency.',
  },
  {
    n: 'III',
    title: 'Considered Design',
    body: 'Refillable glass, minimal waste, and objects designed to live on your shelf — beautiful enough to never be hidden away.',
  },
];

export default function Philosophy() {
  return (
    <section className={`${styles.philosophy} sec`} id="philosophy" aria-label="Our philosophy">
      <div className={styles.phGlow} aria-hidden="true"></div>
      <div className="wrap">
        <p className="eyebrow reveal">Our Philosophy</p>
        <h2 className="h2 reveal d1">
          Wellness is not a product.
          <br />
          It is a practice, repeated daily.
        </h2>
        <div className={styles.phGrid}>
          {cells.map((cell, i) => (
            <div className={`${styles.phCell} reveal${i > 0 ? ` d${i}` : ''}`} key={cell.n}>
              <span className={styles.pn}>{cell.n}</span>
              <h3>{cell.title}</h3>
              <p>{cell.body}</p>
              <div className={styles.ico} aria-hidden="true">✦</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
