import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import styles from './styles.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
