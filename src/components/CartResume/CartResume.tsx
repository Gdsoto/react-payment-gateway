'use client';
import React from 'react';

// Components
import ErrorComponent from '../shared/ErrorComponent/ErrorComponent';
import Loader from '../shared/Loader/Loader';
import ProductCard from './components/ProductCard/ProductCard';

// Styles
import styles from './CartResume.module.scss';

// Redux
import { useGetProductsQuery } from '@/context/apis/productsApi';

// Models
import { ProductI } from './models';
import TotalCard from './components/TotalCard/TotalCard';

const CartResume = () => {
  const { data, isLoading, isError } = useGetProductsQuery(3);
  const totalProducts = data?.length;

  if (isError) return <ErrorComponent />;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <article className={styles.cartResumeContainer}>
          <h2 className={styles.resumeTitle}>Cart Resume</h2>
          <p className={styles.resumeProducts}>
            <b>{totalProducts} items</b> in your car.
          </p>
          <section className={styles.productList}>
            <ul>
              {data.map((product: ProductI) => (
                <li key={product.id}>
                  <ProductCard key={product.id} product={product} />
                </li>
              ))}
            </ul>
          </section>
          <section>
            <TotalCard products={data} />
          </section>
        </article>
      )}
    </>
  );
};

export default CartResume;
