import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../apis/productsApi';
import paymentDataSlice from './slices/paymentData.slice';
import { payApi } from '../apis/payApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      paymentDataReducer: paymentDataSlice,
      [productsApi.reducerPath]: productsApi.reducer,
      [payApi.reducerPath]: payApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware, payApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
