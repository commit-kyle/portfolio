import React, { useContext } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import classes from './AboutInfo.module.css';

const Info = props => {
	const theme = useContext(ThemeContext);

	let proClasses = [classes.Progress, classes.ProgressLight];
	let proNumClasses = [classes.ProgressNumber, classes.ProgressNumberLight];
	let headerClasses = [classes.Header, classes.HeaderLight];
	let subHeadClasses = [classes.SubHeader, classes.SubHeaderLight];
	let textClasses = [classes.Text];

	if (theme.isDarkModeActive) {
		proClasses = [classes.Progress, classes.ProgressDark];
		proNumClasses = [classes.ProgressNumber, classes.ProgressNumberDark];
		headerClasses = [classes.Header, classes.HeaderDark];
		subHeadClasses = [classes.SubHeader, classes.SubHeaderDark];
		textClasses = [classes.Text, classes.TextDark];
	}

	return (
		<div className={classes.Child}>
			<span className={proClasses.join(' ')}>
				<span className={proNumClasses.join(' ')}>{props.number}</span>
			</span>
			<div className={classes.Content}>
				<h2 id="header" className={headerClasses.join(' ')}>
					{props.header}
				</h2>
				<h3 id="subHeader" className={subHeadClasses.join(' ')}>
					{props.subHeader}
				</h3>
				<p id="text" className={textClasses.join(' ')}>
					{props.text}
				</p>
			</div>
		</div>
	);
};

export default Info;
