import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import PaymentResume from './PaymentResume';

window.HTMLElement.prototype.scrollIntoView = function () {};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('PaymentResume', () => {
  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockImplementation(
      (
        callback: (arg0: {
          paymentDataReducer: {
            paymentData: {
              cardNumber: string;
              expirationDate: string;
              cvv: string;
            };
          };
        }) => any
      ) =>
        callback({
          paymentDataReducer: {
            paymentData: {
              cardNumber: '1234567890123456',
              expirationDate: '1223',
              cvv: '123',
            },
          },
        })
    );
  });

  afterEach(() => {
    (useSelector as unknown as jest.Mock).mockClear();
  });

  it('renders resume title correctly', () => {
    const { getByText } = render(<PaymentResume />);
    const titleElement = getByText('Resume');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('resumeTitle');
  });

  it('renders resume items correctly', () => {
    const { getByText } = render(<PaymentResume />);
    const cardNumberLabelElement = getByText('cardNumber');
    const cardNumberValueElement = getByText('**** **** **** 3456');
    const expirationDateLabelElement = getByText('expirationDate');
    const expirationDateValueElement = getByText('** / 23');
    const cvvLabelElement = getByText('cvv');
    const cvvValueElement = getByText('**3');

    expect(cardNumberLabelElement).toBeInTheDocument();
    expect(cardNumberValueElement).toBeInTheDocument();
    expect(expirationDateLabelElement).toBeInTheDocument();
    expect(expirationDateValueElement).toBeInTheDocument();
    expect(cvvLabelElement).toBeInTheDocument();
    expect(cvvValueElement).toBeInTheDocument();
  });
});
