import React, { useContext } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import classes from './Links.module.css';

const Links = props => {

	const theme = useContext(ThemeContext);

	let linkClasses = [classes.Link, classes.Button];
	let btnClasses = [classes.Btn, classes.Button];

	if (theme.isDarkModeActive) {
		linkClasses = [classes.Dark, classes.Button]
		btnClasses = [classes.Dark, classes.Button]
	}

	return props.url ? (
		<a href={props.url} className={linkClasses.join(' ')} target="_blank" rel="noreferrer">
			{props.children}
		</a>
	) : (
		<button className={btnClasses.join(' ')} onClick={props.summary}>
			{props.children}
		</button>
	);
};

export default Links;
