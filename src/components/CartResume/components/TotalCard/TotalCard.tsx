import React from 'react';
import { ProductI } from '../../models';

// Utils
import { getPriceValues } from './TotalCard.util';

// Styles
import styles from './TotalCard.module.scss';
import Button from '@/components/shared/Button/Button';

const TotalCard = ({ products }: { products: ProductI[] }) => {
  const priceValues = getPriceValues(products);

  return (
    <div className={styles.totalCardContainer}>
      <h2 className={styles.totalTitle}>Cart Total</h2>
      {priceValues.map((price) => (
        <div key={price.title} className={styles.totalInfo}>
          <p>{price.title}</p>
          <p className={styles.totalPrices}>${price.price}</p>
        </div>
      ))}
      <Button text='Pay With Credit card' btnType='stroke' size='large' fluid />
    </div>
  );
};

export default TotalCard;
