import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';

import classes from './Header.module.css';
import CTA from '../UI/Buttons/CTA/CTA';
import Navigation from '../Navigation/Navigation';

const Header = props => {
	return (
		<Aux>
			<main id="Home" className={classes.Container}>
				<Navigation showMenu={props.showMenu} menuActive={props.menuActive} />
				<div className={classes.HeaderContent}>
					<h2 className={classes.Title}>Front End Developer</h2>
					<p className={classes.Desc}>
						Making the web a better place, one expression at a time
					</p>
					<CTA click={() => console.log('Clicked')} />
				</div>
			</main>
		</Aux>
	);
};

export default Header;
