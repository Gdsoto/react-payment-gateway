import { DEFAULT_VALUES } from '@/utils/constants/defaultValues';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormDefaultValuesI, ProductDataI } from './models';

interface InitialStateI {
  paymentData: FormDefaultValuesI;
  productData: ProductDataI;
}

const initialState: InitialStateI = {
  paymentData: DEFAULT_VALUES,
  productData: {
    finalPrice: 0,
  },
};

export const PaymentDataSlice = createSlice({
  name: 'paymentDataReducer',
  initialState,
  reducers: {
    setPaymentData: (
      state: InitialStateI,
      action: PayloadAction<FormDefaultValuesI>
    ) => {
      state.paymentData = action.payload;
    },
    setProductData: (
      state: InitialStateI,
      action: PayloadAction<ProductDataI>
    ) => {
      state.productData = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { setPaymentData, resetState, setProductData } =
  PaymentDataSlice.actions;

export default PaymentDataSlice.reducer;
