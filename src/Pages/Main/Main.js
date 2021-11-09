import React, { useContext } from 'react';
import ThemeContext from '../../components/store/theme-context/theme-context';

import About from './About/About';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';

import classes from './Main.module.css';

const Main = () => {
	// THEME LOGIC - MENU
	const theme = useContext(ThemeContext);

	let parentClasses = [classes.Parent, classes.Light];

	if (theme.isDarkModeActive) {
		parentClasses = [classes.Parent, classes.Dark];
	}

	return (
		<div className={parentClasses.join(' ')}>
			<Header />
			<About />
      <Portfolio />
		</div>
	);
};

export default Main;
