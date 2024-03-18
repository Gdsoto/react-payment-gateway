import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import { useForm, FormProvider } from 'react-hook-form';
import { DEFAULT_VALUES } from '@/utils/constants/defaultValues';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('PaymentForm', () => {
  it('renders payment form correctly', () => {
    const { getByLabelText } = render(
      <Wrapper>
        <PaymentForm />
      </Wrapper>
    );

    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Address')).toBeInTheDocument();
    expect(getByLabelText('Phone')).toBeInTheDocument();
    expect(getByLabelText('Card number')).toBeInTheDocument();
    expect(getByLabelText('Card Name')).toBeInTheDocument();
    expect(getByLabelText('Expiration date')).toBeInTheDocument();
    expect(getByLabelText('CVV')).toBeInTheDocument();
  });
});
