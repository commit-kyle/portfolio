import React, { useContext } from 'react';
import ThemeContext from '../../components/store/theme-context/theme-context';

import Projects from '../../components/PortfolioSections/Portfolio/Projects/Projects';

import classes from './Projects.module.css';

const Project = props => {
	const theme = useContext(ThemeContext);

	let themeClasses = [classes.Container, classes.Light];


	if (theme.isDarkModeActive) {
		themeClasses = [classes.Container, classes.Dark]
	}

	return (
		<div className={themeClasses.join(' ')}>
			<Projects showMenu={props.showMenu} menuActive={props.menuActive} />
		</div>
	);
};

export default Project;
