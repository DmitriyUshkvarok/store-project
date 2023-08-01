import styles from './page.module.css';
import HomeLayout from './home/layout';

export default function Home() {
  return (
    <>
      <HomeLayout />
      <main className={styles.main}></main>
    </>
  );
}
