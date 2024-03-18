import React from 'react';
import { render } from '@testing-library/react';
import TotalCard from './TotalCard';

describe('TotalCard', () => {
  const productsExample = [
    {
      id: 1,
      title: 'test-title-1',
      price: 10.99,
      description: 'Este es un ejemplo de producto 1.',
      category: 'test-category-1',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 4.5,
        count: 100,
      },
    },
    {
      id: 2,
      title: 'test-title-2',
      price: 20.99,
      description: 'Este es un ejemplo de producto 2.',
      category: 'test-category-2',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 4.5,
        count: 100,
      },
    },
  ];

  it('renders total card correctly', () => {
    const { getByText } = render(<TotalCard products={productsExample} />);

    expect(getByText('Cart Total')).toBeInTheDocument();
    expect(getByText('$10.99')).toBeInTheDocument();
    expect(getByText('$20.99')).toBeInTheDocument();
    expect(getByText('Pay With Credit card')).toBeInTheDocument();
  });
});