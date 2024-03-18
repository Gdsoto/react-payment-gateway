import React, { FC, useEffect, useState } from 'react';

// Libs
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { Step, StepLabel, Stepper } from '@mui/material';

// Styles
import styles from './PaymentSteps.module.scss';

// Components
import Button from '@/components/shared/Button/Button';
import PaymentForm from './components/PaymentForm/PaymentForm';

// Utils
import { DEFAULT_VALUES } from '@/utils/constants/defaultValues';
import { VALIDATION_SCHEMA, stepStyle } from './PaymentSteps.util';

// Models
import { PaymentStepsI } from './models';
import {
  resetState,
  setPaymentData,
} from '@/context/store/slices/paymentData.slice';
import toast from 'react-hot-toast';
import PaymentResume from './components/PaymentResume/PaymentResume';
import PaymentResult from './components/PaymentResult/PaymentResult';
import { getStepFromLocalStorage } from '@/utils/functions/getFromLocalStorage';
import { usePostPaymentMutation } from '@/context/apis/payApi';

const PaymentSteps: FC<PaymentStepsI> = ({
  handleCloseModal,
  defaultValues,
}: PaymentStepsI) => {
  const defaultData =
    defaultValues && Object.keys(defaultValues).length > 0
      ? defaultValues
      : DEFAULT_VALUES;

  const dispatch = useDispatch();
  const methods = useForm({
    mode: 'onChange',
    defaultValues: defaultData,
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

  const [postPayment, { isLoading }] = usePostPaymentMutation();
  const [step, setStep] = useState(getStepFromLocalStorage() || 0);
  const steps = ['Payment Data', 'Resume', 'Result'];

  const setStorageData = () => {
    const values = methods.getValues();
    dispatch(setPaymentData(values));
    localStorage.setItem('paymentData', JSON.stringify(values));
  };

  const handleChangeStep = (newStep: number) => {
    setStep(newStep);
    localStorage.setItem('step', JSON.stringify(newStep));
  };

  const onSubmit = () => {
    setStorageData();
    handleChangeStep(step + 1);
  };

  const onError = () => {
    toast.error('Error in the form, validate the fields ');
  };

  const handlePayProducts = async () => {
    try {
      await postPayment(methods.getValues()).unwrap();
      toast.success('Payment successful!');
      handleChangeStep(step + 1);
    } catch (error) {
      toast.error('Error in the payment, try again later.');
    }
  };

  const handleCancelProcess = () => {
    setStorageData();
    handleCloseModal();
  };

  const handleExitProcess = () => {
    localStorage.setItem('paymentData', JSON.stringify({}));
    localStorage.setItem('step', JSON.stringify(0));
    dispatch(resetState());
    handleCloseModal();
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      setStorageData();
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    dispatch(setPaymentData(defaultData));

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className={styles.paymentStepsContainer}>
      <FormProvider {...methods}>
        <h2 className={styles.stepTitle}>Credit card payment</h2>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label: string) => (
            <Step key={label} sx={stepStyle}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <section>
          {step === 0 && (
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
              <PaymentForm />
              <div className={styles.buttonContainer}>
                <Button
                  text='Next Step'
                  type='submit'
                  btnType='outlined'
                  size='large'
                  fluid
                />
                <Button
                  text='Cancel'
                  onClick={handleCancelProcess}
                  btnType='stroke'
                  size='large'
                  fluid
                />
              </div>
            </form>
          )}
          {step === 1 && (
            <>
              <PaymentResume />
              <div className={styles.buttonContainer}>
                <Button
                  text='Pay'
                  onClick={handlePayProducts}
                  btnType='outlined'
                  size='large'
                  fluid
                  loading={isLoading}
                />
                <Button
                  text='Back'
                  onClick={() => handleChangeStep(step - 1)}
                  btnType='stroke'
                  size='large'
                  fluid
                  disabled={isLoading}
                />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <PaymentResult />
              <div className={styles.buttonContainer}>
                <Button
                  text='Finish'
                  onClick={handleExitProcess}
                  btnType='outlined'
                  size='large'
                  fluid
                />
              </div>
            </>
          )}
        </section>
      </FormProvider>
    </div>
  );
};

export default PaymentSteps;
