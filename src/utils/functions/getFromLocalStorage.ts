import { DEFAULT_VALUES } from '../constants/defaultValues';

export const getInfoFormLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const localStorageData = localStorage.getItem('paymentData');
    return localStorageData && JSON.parse(localStorageData);
  }
  return DEFAULT_VALUES;
};

export const getStepFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const localStorageData = localStorage.getItem('step');
    return localStorageData && JSON.parse(localStorageData);
  }
  return 0;
};
