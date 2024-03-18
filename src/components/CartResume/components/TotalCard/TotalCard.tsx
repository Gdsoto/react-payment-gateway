import React, { FC, useEffect } from 'react';

// Utils
import { getPriceValues } from './TotalCard.util';

// Styles
import styles from './TotalCard.module.scss';
import Button from '@/components/shared/Button/Button';

// Models
import { TotalCardI } from './models';
import { useDispatch } from 'react-redux';
import { setProductData } from '@/context/store/slices/paymentData.slice';

const TotalCard: FC<TotalCardI> = ({ products, onPayAction }: TotalCardI) => {
  const dispatch = useDispatch();
  const priceValues = getPriceValues(products);

  useEffect(() => {
    dispatch(
      setProductData({
        finalPrice: priceValues[3].price,
      })
    );
  }, [priceValues]);

  return (
    <div className={styles.totalCardContainer}>
      <h2 className={styles.totalTitle}>Cart Total</h2>
      {priceValues.map((price) => (
        <div key={price.title} className={styles.totalInfo}>
          <p>{price.title}</p>
          <p className={styles.totalPrices}>${price.price}</p>
        </div>
      ))}
      <Button
        onClick={onPayAction}
        text='Pay With Credit card'
        btnType='stroke'
        size='large'
        fluid
      />
    </div>
  );
};

export default TotalCard;
