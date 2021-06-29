import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';

import classes from './Navigation.module.css';

import LogoFull from '../Logo/LogoFull/LogoFull';
import LogoMin from '../Logo/LogoMin/LogoMin';
import Hamburger from '../Navigation/MenuOverlap/Hamburger/Hamburger';

const Navigation = props => {
	return (
		<Aux>
			<LogoMin position={{ left: '4rem', top: '1.7rem' }} />
			<nav className={classes.Nav}>
				<LogoFull />
				<Hamburger
					showMenu={props.showMenu}
					menuActive={props.menuActive}
					position={{ right: '5rem' }}
				/>
			</nav>
		</Aux>
	);
};

export default Navigation;
