import React from 'react';

// Styles
import styles from './Loader.module.scss';

const Loader = () => {
	return (
		<section className={styles.loaderContainer}>
			<span className={styles.loader}></span>
		</section>
	);
};

export default Loader;
