import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2>Hello Dev</h2>
        <p>
          Get started by editing &nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a href="https://qeola.com" target="_blank" rel="noopener noreferrer">
            By Qeola
          </a>
        </div>
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
