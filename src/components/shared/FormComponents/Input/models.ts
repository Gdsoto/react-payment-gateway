import { ReactNode } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

export interface InputI {
  label?: string;
  nameValue: string;
  control?: Control;
  errors: FieldErrors<any>;
  type?: 'text' | 'tel' | 'number';
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  adornment?: {
    endAdornment?: ReactNode;
    startAdornment?: ReactNode;
    inputComponent?: any;
  };
  multiline?: boolean;
  inputProps?: any;
}
