import React, { useContext } from 'react';
import ThemeContext from '../../../components/store/theme-context/theme-context';

import LogoFull from '../../../components/Logo/LogoFull/LogoFull';
import CTA from '../../../components/UI/Buttons/CTA/CTA';

import classes from './Header.module.css';

const Header = () => {
	const theme = useContext(ThemeContext);

	let headerClasses = [classes.HeaderContent, classes.Light];
	let titleClasses = [classes.Title];

	if (theme.isDarkModeActive) {
		headerClasses = [classes.HeaderContent, classes.Dark];
		titleClasses = [classes.Title, classes.TitleDark];
	}

	return (
		<main id="home" className={classes.Container}>
			<LogoFull />
			<div className={classes.HeaderContainer}>
				<div className={headerClasses.join(' ')}>
					<h2 className={titleClasses.join(' ')}>Front End Developer</h2>
					<p className={classes.Desc}>
						Making the web a better place, one expression at a time
					</p>
					<CTA click={() => console.log('Clicked')}>Get in Touch</CTA>
				</div>
			</div>
		</main>
	);
};

export default Header;
