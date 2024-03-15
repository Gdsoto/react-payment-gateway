import React from 'react';

// Styles
import styles from './BaseLayout.module.scss';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
	return <main className={styles.baseContainer}>{children}</main>;
};

export default BaseLayout;
