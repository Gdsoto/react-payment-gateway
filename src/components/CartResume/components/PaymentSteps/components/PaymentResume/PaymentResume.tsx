import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

// Styles
import style from './PaymentResume.module.scss';
import { FormDefaultValuesI } from '@/context/store/slices/models';

const PaymentResume: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { paymentData } = useSelector(
    (state: {
      paymentDataReducer: {
        paymentData: FormDefaultValuesI;
      };
    }) => state.paymentDataReducer
  );

  const dataOnArray = () => {
    return Object.entries(paymentData).map(([label, value]) => ({
      label,
      value,
    }));
  };

  const formatValues = (label: string, value: string | number) => {
    switch (label) {
      case 'cardNumber':
        return `**** **** **** ${value.toString().slice(-4)}`;
      case 'expirationDate':
        return `** / ${value.toString().slice(-2)}`;
      case 'cvv':
        return `**${value.toString().slice(-1)}`;
      default:
        return value;
    }
  };

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
      <h2 className={style.resumeTitle} ref={titleRef}>
        Resume
      </h2>
      <div className={style.resumeContainer}>
        {dataOnArray().map((item) => (
          <div key={item.label}>
            <p className={style.resumeItem}>{item.label}</p>
            <p className={style.resumeItemValue}>
              {formatValues(item.label, item.value)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentResume;
