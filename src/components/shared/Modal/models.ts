import { ReactElement } from 'react';

export interface ModalI {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactElement;
}
