import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';

import classes from './Navigation.module.css';

import LogoFull from '../Logo/LogoFull/LogoFull';
import LogoMin from '../Logo/LogoMin/LogoMin';
import Hamburger from '../Navigation/MenuOverlap/Hamburger/Hamburger';

const Navigation = props => {
	return (
		<Aux>
			<nav className={classes.Nav}>
				<div className={classes.LogoMin}>
					<LogoMin />
				</div>
				<LogoFull />
				<div className={classes.MenuIcon}>
					<Hamburger showMenu={props.showMenu} menuActive={props.menuActive} />
				</div>
			</nav>
		</Aux>
	);
};

export default Navigation;
