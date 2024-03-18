import React, { FC, PropsWithChildren } from 'react';

// Cmponents
import Modal from '@mui/material/Modal';

// Models
import { ModalI } from './models';

// Styles
import styles from './Modal.module.scss';

const ModalUi: FC<PropsWithChildren<ModalI>> = ({
  children,
  isOpen,
}: ModalI) => {
  return (
    <Modal open={isOpen}>
      <section className={styles.modalContainer}>{children}</section>
    </Modal>
  );
};

export default ModalUi;
