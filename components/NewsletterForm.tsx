'use client';
import styles from './Footer.module.css';

export default function NewsletterForm() {
  return (
    <form
      className={`${styles.newsForm} reveal d1`}
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label htmlFor="emailInput" className="sr-only">
        Your email address
      </label>
      <input
        id="emailInput"
        type="email"
        placeholder="Your email address"
        autoComplete="email"
      />
      <button type="submit">Subscribe →</button>
    </form>
  );
}
