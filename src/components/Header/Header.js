import React, { useContext } from 'react';

import ThemeContext from '../store/theme-context/theme-context';

import classes from './Header.module.css';
import CTA from '../UI/Buttons/CTA/CTA';
import Navigation from '../Navigation/Navigation';

const Header = props => {

	const theme = useContext(ThemeContext);

	let headerClasses = [classes.HeaderContent, classes.Light];
	let titleClasses = [classes.Title];

	if (theme.isDarkModeActive) {
		headerClasses = [classes.HeaderContent, classes.Dark];
		titleClasses = [classes.Title, classes.TitleDark]
	}

	return (
		<main id="Home" className={classes.Container}>
			<Navigation showMenu={props.showMenu} menuActive={props.menuActive} />
			<div className={classes.HeaderContainer}>
				<div className={headerClasses.join(' ')}>
					<h2 className={titleClasses.join(' ')}>Front End Developer</h2>
					<p className={classes.Desc}>
						Making the web a better place, one expression at a time
					</p>
					<CTA click={() => console.log('Clicked')} />
				</div>
			</div>
		</main>
	);
};

export default Header;
