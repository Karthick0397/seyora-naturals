import styles from './Statement.module.css';

export default function Statement() {
  return (
    <section className={`${styles.statement} sec`} aria-label="Brand statement">
      <p className={`${styles.big} reveal`}>
        A sanctuary distilled into a bottle — where{' '}
        <i>moringa, neem and sandalwood</i> meet the precision of modern skincare.
      </p>
      <div className={styles.meta}>
        <div className="reveal d1">
          <b>1947</b>
          <small>Heritage roots</small>
        </div>
        <div className="reveal d2">
          <b>32</b>
          <small>Native botanicals</small>
        </div>
        <div className="reveal d3">
          <b>100%</b>
          <small>Naturally derived</small>
        </div>
      </div>
    </section>
  );
}
