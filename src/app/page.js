import styles from './page.module.css';
import HomeLayout from './home/layout';
import HomePage from './home/page';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomePage />
        <HomeLayout />
      </main>
    </>
  );
}
