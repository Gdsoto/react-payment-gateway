'use client';
import React, { useState } from 'react';

// Components
import Loader from '../shared/Loader/Loader';
import ModalUi from '../shared/Modal/Modal';
import TotalCard from './components/TotalCard/TotalCard';
import ProductCard from './components/ProductCard/ProductCard';
import ErrorComponent from '../shared/ErrorComponent/ErrorComponent';

// Styles
import styles from './CartResume.module.scss';

// Redux
import { useGetProductsQuery } from '@/context/apis/productsApi';

// Models
import { ProductI } from './models';
import PaymentSteps from './components/PaymentSteps/PaymentSteps';
import { getInfoFormLocalStorage } from '@/utils/functions/getFromLocalStorage';

const CartResume = () => {
  const parsedData = getInfoFormLocalStorage();

  const { data, isLoading, isError } = useGetProductsQuery(3);
  const [modalState, setModalState] = useState(false);
  const totalProducts = data?.length;

  const handleCloseModal = () => {
    setModalState(false);
  };

  const handlePayAction = () => {
    setModalState(true);
  };

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
            <TotalCard products={data} onPayAction={handlePayAction} />
          </section>
          <ModalUi isOpen={modalState}>
            <PaymentSteps
              handleCloseModal={handleCloseModal}
              defaultValues={parsedData}
            />
          </ModalUi>
        </article>
      )}
    </>
  );
};

export default CartResume;
