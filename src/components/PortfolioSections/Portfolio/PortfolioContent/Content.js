import React, { useContext, useMemo } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import classes from './Content.module.css';

const Content = () => {
	const theme = useContext(ThemeContext);

	const iconBrief = useMemo(
		() => (
			<FontAwesomeIcon
				icon={faBriefcase}
				size="2x"
				className={classes.iconBrief}
			/>
		),
		[]
	);

	let contentClasses = [classes.Content, classes.Light];
	let splitClasses = [classes.Split, classes.SplitLight];

	if (theme.isDarkModeActive) {
		contentClasses = [classes.Content, classes.Dark];
		splitClasses = [classes.Split, classes.SplitDark];
	}

	return (
		<div className={classes.PortfolioContainer}>
			<div className={contentClasses.join(' ')}>
				<div className={classes.Title}>
					<h1>Portfolio</h1>
					{iconBrief}
				</div>
				<h2>Welcome to the play area</h2>
				<p>Perhaps a peak at my projects will interest you.</p>
			</div>
			<span className={splitClasses.join(' ')}></span>
		</div>
	);
};

export default Content;
