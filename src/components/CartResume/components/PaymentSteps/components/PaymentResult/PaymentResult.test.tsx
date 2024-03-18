import React from 'react';
import { render } from '@testing-library/react';
import PaymentResult from './PaymentResult';
import StoreProvider from '@/app/storeProvider';

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('PaymentResult', () => {
  it('renders payment result correctly', () => {
    const { getByText } = render(
      <StoreProvider>
        <PaymentResult />
      </StoreProvider>
    );

    expect(getByText('Transaction Result')).toBeInTheDocument();
    expect(getByText('Transaction successful')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Order Number')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Address')).toBeInTheDocument();
    expect(getByText('Phone')).toBeInTheDocument();
    expect(getByText('Final Price')).toBeInTheDocument();
  });
});
