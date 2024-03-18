import * as Yup from 'yup';

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  phone: Yup.string()
    .matches(/^3\d{9}$/, 'Phone number must be starting with 3')
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .required('Phone number is required'),
  cardNumber: Yup.string()
    .min(16, 'Card number must contain 16 digits')
    .max(16, 'Card number must contain 16 digits')
    .test('is-visa-or-mastercard', 'Invalid card number', function (value) {
      if (!value) return true;
      return value.startsWith('4') || value.startsWith('5');
    })
    .required('Card number is required'),
  cardName: Yup.string().required('Card name is required'),
  expirationDate: Yup.string()
    .min(4, 'Expiration date must contain 4 digits')
    .required('Expiration date is required')
    .test('is-valid-expiration', 'Invalid expiration date', function (value) {
      if (!value) return true;
      const month = parseInt(value.slice(0, 2), 10);
      return month <= 12;
    }),
  cvv: Yup.string()
    .min(3, 'CVV must contain 3 digits')
    .max(3, 'CVV must contain 3 digits')
    .matches(/^\d+$/, 'CVV must contain only digits')
    .required('CVV is required'),
});

export const stepStyle = {
  '& .MuiStepLabel-root .Mui-completed': {
    color: '#10454f',
  },
  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
    color: '#506266',
  },
  '& .MuiStepLabel-root .Mui-active': {
    color: '#10454f',
  },
};
