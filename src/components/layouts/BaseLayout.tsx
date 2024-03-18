import React from 'react';

// Styles
import styles from './BaseLayout.module.scss';
import StoreProvider from '@/app/storeProvider';
import NavBar from '../NavBar/NavBar';

// Libs
import { Toaster } from 'react-hot-toast';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <main className={styles.baseContainer}>
        <NavBar />
        {children}
      </main>
    </StoreProvider>
  );
};

export default BaseLayout;
