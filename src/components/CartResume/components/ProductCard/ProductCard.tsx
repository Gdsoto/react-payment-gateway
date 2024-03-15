import React from 'react';
import { ProductI } from '../../models';

// Components
import Image from 'next/image';

// Styles
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }: { product: ProductI }) => {
  return (
    <div className={styles.cardContainer}>
      <picture className={styles.cardPicture}>
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={120}
        />
      </picture>
      <div>
        <p className={styles.cardCategory}>{product.category}</p>
        <p className={styles.cardTitle}>{product.title}</p>
        <p className={styles.cardPrice}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
