import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CreditCardFormat from './CreditCardFormat';

describe('CreditCardFormat', () => {
  it('renders CreditCardFormat component correctly', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <CreditCardFormat name='creditCard' onChange={onChangeMock} />
    );

    const inputElement = getByTestId('creditCardInput');

    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange function with correct value when input changes', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <CreditCardFormat name='creditCard' onChange={onChangeMock} />
    );

    const inputElement = getByTestId('creditCardInput');
    fireEvent.change(inputElement, { target: { value: '1234567890123456' } });

    expect(onChangeMock).toHaveBeenCalledWith({
      target: {
        name: 'creditCard',
        value: '1234567890123456',
      },
    });
  });
});
