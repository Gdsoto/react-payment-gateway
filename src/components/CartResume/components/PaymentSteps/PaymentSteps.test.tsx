import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PaymentSteps from './PaymentSteps';
import StoreProvider from '@/app/storeProvider';

describe('PaymentSteps', () => {
  let store: any;

  it('renders PaymentSteps component correctly', () => {
    const { getByText } = render(
      <StoreProvider>
        <PaymentSteps handleCloseModal={() => {}} defaultValues={{}} />
      </StoreProvider>
    );

    const titleElement = getByText('Credit card payment');
    const nextStepButton = getByText('Next Step');
    const cancelButton = getByText('Cancel');

    expect(titleElement).toBeInTheDocument();
    expect(nextStepButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('handles cancel process correctly', () => {
    const handleCloseModal = jest.fn();
    const { getByText } = render(
      <StoreProvider>
        <PaymentSteps handleCloseModal={handleCloseModal} defaultValues={{}} />
      </StoreProvider>
    );

    const cancelButton = getByText('Cancel');

    fireEvent.click(cancelButton);

    expect(handleCloseModal).toHaveBeenCalled();
  });
});
