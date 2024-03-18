import React from 'react';

// Components
import { InputAdornment } from '@mui/material';
import Input from '@/components/shared/FormComponents/Input/Input';
import ExpirationDateFormat from '@/components/shared/ExpirationDateFormat/ExpirationDateFormat';
import CreditCardFormat from '@/components/shared/CreditCardFormat/CreditCardFormat';
import CvvFormat from '@/components/shared/CvvFormat/CvvFormat';

// Libs
import { useFormContext } from 'react-hook-form';

// Styles
import styles from './PaymentForm.module.scss';

// Assets
import Visa from '@/assets/img/visa.png';
import Mastercard from '@/assets/img/mastercard.png';
import Image from 'next/image';

const PaymentForm = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  const cardNumber = watch('cardNumber');

  const getAdornment = () => {
    if (cardNumber.startsWith('4')) {
      return <Image src={Visa} alt='Visa' width={40} />;
    } else if (cardNumber.startsWith('5')) {
      return <Image src={Mastercard} alt='Visa' width={40} />;
    } else {
      return '';
    }
  };

  return (
    <>
      <div className={styles.BasicDataContainer}>
        <Input
          label='Name'
          nameValue='name'
          errors={errors}
          control={control}
        />
        <Input
          label='Email'
          nameValue='email'
          errors={errors}
          control={control}
        />
        <Input
          label='Address'
          nameValue='address'
          errors={errors}
          control={control}
        />
        <Input
          label='Phone'
          nameValue='phone'
          errors={errors}
          control={control}
          type='number'
        />
      </div>
      <div></div>
      <div className={styles.CardDataContainer}>
        <Input
          label='Card number'
          nameValue='cardNumber'
          errors={errors}
          control={control}
          adornment={{
            endAdornment: (
              <InputAdornment position='start'>{getAdornment()}</InputAdornment>
            ),
            inputComponent: CreditCardFormat as any,
          }}
          placeholder='XXXX XXXX XXXX XXXX'
        />
        <Input
          label='Card Name'
          nameValue='cardName'
          errors={errors}
          control={control}
          placeholder='Example: JUAN PEREZ'
        />
        <div className={styles.cardCvv}>
          <Input
            label='Expiration date'
            nameValue='expirationDate'
            errors={errors}
            control={control}
            adornment={{
              inputComponent: ExpirationDateFormat as any,
            }}
            placeholder='MM / YY'
          />
          <Input
            label='CVV'
            nameValue='cvv'
            placeholder='XXX'
            errors={errors}
            control={control}
            adornment={{
              inputComponent: CvvFormat as any,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
