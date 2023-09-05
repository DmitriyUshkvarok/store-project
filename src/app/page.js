import styles from './page.module.css';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('./home/page.jsx'));
const HomeLayout = dynamic(() => import('./home/layout.jsx'));

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
