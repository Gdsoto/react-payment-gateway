import React from 'react';

// Styles
import styles from './BaseLayout.module.scss';
import StoreProvider from '@/app/storeProvider';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<StoreProvider>
			<main className={styles.baseContainer}>{children}</main>
		</StoreProvider>
	);
};

export default BaseLayout;
