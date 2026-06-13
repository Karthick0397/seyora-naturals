import styles from './Ticker.module.css';

const items = [
  'Cold-pressed botanicals',
  'Ethically wild-sourced',
  'Complimentary samples',
  'Cruelty-free & vegan',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.tickerTrack}>
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
