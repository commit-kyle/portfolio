import React, { useContext } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import classes from './CTA.module.css';

const CTA = props => {

	const theme = useContext(ThemeContext);

	let CTAClasses = [classes.CTA, classes.Light];

	if (theme.isDarkModeActive) {
		CTAClasses = [classes.CTA, classes.Dark];
	}

	return (
		<button onClick={props.click} className={CTAClasses.join(' ')}>
			Get in touch
		</button>
	);
};

export default CTA;
