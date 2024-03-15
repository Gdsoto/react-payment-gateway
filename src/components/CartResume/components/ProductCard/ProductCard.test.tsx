import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const productExample = {
    id: 1,
    title: 'test-title',
    price: 10.99,
    description: 'Este es un ejemplo de producto.',
    category: 'test-category',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 4.5,
      count: 100,
    },
  };

  it('renders product card correctly', () => {
    const { getByAltText, getByText } = render(
      <ProductCard product={productExample} />
    );

    expect(getByAltText('test-title')).toBeInTheDocument();
    expect(getByText('test-category')).toBeInTheDocument();
    expect(getByText('test-title')).toBeInTheDocument();
    expect(getByText('$10.99')).toBeInTheDocument();
  });
});
