import React, { useContext } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import classes from './Hamburger.module.css';

const Hamburger = props => {
	const theme = useContext(ThemeContext);

	let menuClasses = [classes.Menu];
	let LineClasses = [classes.Line, classes.Light]
	
	if (props.menuActive) {
		menuClasses = [classes.Menu, classes.Opened];
	}

	if (theme.isDarkModeActive) {
		LineClasses = [classes.Line, classes.Dark]
	}

	return (
		<button
			className={menuClasses.join(' ')}
			onClick={props.showMenu}
			aria-label="Main Menu"
		>
			<svg
				className={classes.Svg}
				width="100"
				height="100"
				viewBox="0 0 100 100"
			>
				<path
					className={`${LineClasses.join(' ')} ${classes.Line1}`}
					d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
				/>
				<path className={`${LineClasses.join(' ')} ${classes.Line2}`} d="M 20,50 H 80" />
				<path
					className={`${LineClasses.join(' ')} ${classes.Line3}`}
					d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
				/>
			</svg>
		</button>
	);
};

export default Hamburger;
