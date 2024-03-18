import Image from 'next/image';
import React from 'react';

// Assets
import ErrorIMage from '@/assets/img/error.svg';

// Styles
import styles from './ErrorComponent.module.scss';

const ErrorComponent = () => {
  return (
    <section className={styles.errorContainer}>
      <Image src={ErrorIMage} alt='Error' width={200} height={200} />
      <p>Oops! Something went wrong</p>
    </section>
  );
};

export default ErrorComponent;
