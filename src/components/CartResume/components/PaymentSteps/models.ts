import { FormDefaultValuesI } from '@/context/store/slices/models';

export interface PaymentStepsI {
  handleCloseModal: () => void;
  defaultValues: FormDefaultValuesI;
}
