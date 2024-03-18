import React, { FC, useEffect, useRef } from 'react';

// Styles
import style from './PaymentResult.module.scss';

// Libs
import { useSelector } from 'react-redux';
import Image from 'next/image';

// Assets
import SuccessImage from '@/assets/img/success.svg';

// Models
import {
  FormDefaultValuesI,
  ProductDataI,
} from '@/context/store/slices/models';

const PaymentResult: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { paymentData, productData } = useSelector(
    (state: {
      paymentDataReducer: {
        paymentData: FormDefaultValuesI;
        productData: ProductDataI;
      };
    }) => state.paymentDataReducer
  );

  useEffect(() => {
    const scrollToElement = () => {
      if (titleRef.current) {
        titleRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToElement();
  }, []);

  return (
    <>
      <h2 className={style.resultTitle} ref={titleRef}>
        Transaction Result
      </h2>
      <div className={style.resultContainer}>
        <picture className={style.resultPicture}>
          <Image src={SuccessImage} alt='Transaction successful' width={200} />
        </picture>
        <p className={style.resultItem}>Transaction successful</p>
        <div>
          <p className={style.resultItem}>Date</p>
          <p className={style.resultItemValue}>
            {new Date().toLocaleDateString()}
          </p>
          <p className={style.resultItem}>Order Number</p>
          <p className={style.resultItemValue}>
            {Math.floor(Math.random() * 1000000)}
          </p>
        </div>
        <div>
          <p className={style.resultItem}>Name</p>
          <p className={style.resultItemValue}>{paymentData?.name}</p>
          <p className={style.resultItem}>Email</p>
          <p className={style.resultItemValue}>{paymentData?.email}</p>
        </div>
        <div>
          <p className={style.resultItem}>Address</p>
          <p className={style.resultItemValue}>{paymentData?.address}</p>
          <p className={style.resultItem}>Phone</p>
          <p className={style.resultItemValue}>{paymentData?.phone}</p>
        </div>
        <div>
          <p className={style.resultItem}>Final Price</p>
          <p className={style.resultItemValue}>${productData?.finalPrice}</p>
        </div>
      </div>
    </>
  );
};

export default PaymentResult;
