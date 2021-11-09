import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';

import LogoMin from '../Logo/LogoMin/LogoMin';
import Hamburger from '../Navigation/MenuOverlap/Hamburger/Hamburger';

import classes from './Navigation.module.css';

const Navigation = props => {
	return (
		<Aux>
			<nav className={classes.Nav}>
				<div className={classes.LogoMin}>
					<LogoMin />
				</div>
				<div className={classes.MenuIcon}>
					<Hamburger showMenu={props.showMenu} menuActive={props.menuActive} />
				</div>
			</nav>
		</Aux>
	);
};

export default Navigation;
