import React from 'react';

// Styles
import styles from './NavBar.module.scss';

// Icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<AcUnitIcon fontSize="large" />
			<ShoppingCartIcon />
		</nav>
	);
};

export default NavBar;
