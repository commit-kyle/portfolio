import React, { useState, useContext, useEffect, useMemo } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import classes from './ThemeBtn.module.css';

const ThemeBtn = props => {
	const theme = useContext(ThemeContext);

	const [mode, setMode] = useState(false);

	const iconDark = useMemo(() => <FontAwesomeIcon icon={faMoon} size="2x" />, []);
	const iconLight = useMemo(() => <FontAwesomeIcon icon={faSun} size="2x" spin />, [])

	let BtnClasses = [classes.Btn, classes.Light];

	useEffect(() => {
		if (theme.isDarkModeActive) {
			setMode(iconLight);
		} else {
			setMode(iconDark);
		}
	}, [theme.isDarkModeActive, iconDark, iconLight]);

  if (theme.isDarkModeActive) {
    BtnClasses = [classes.Btn, classes.Dark];
  }

	return (
		<button className={BtnClasses.join(' ')} onClick={props.onClick}>
			{mode}
		</button>
	);
};

export default ThemeBtn;
