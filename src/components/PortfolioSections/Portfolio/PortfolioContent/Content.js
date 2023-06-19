import React, { useContext, useMemo } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import classes from './Content.module.css';

const Content = () => {
	const theme = useContext(ThemeContext);

	const contentClasses = useMemo(() => {
	return theme.isDarkModeActive
		? [classes.Content, classes.Dark]
		: [classes.Content, classes.Light];
	}, [theme.isDarkModeActive]);

	const splitClasses = useMemo(() => {
	return theme.isDarkModeActive
		? [classes.Split, classes.SplitDark]
		: [classes.Split, classes.SplitLight];
	}, [theme.isDarkModeActive]);

	const iconClasses = useMemo(() => {
	return theme.isDarkModeActive
		? [classes.iconBrief, classes.iconBriefDark]
		: [classes.iconBrief, classes.iconBriefLight];
	}, [theme.isDarkModeActive]);

	const iconBrief = useMemo(
	() => (
		<FontAwesomeIcon
		icon={faBriefcase}
		size="2x"
		className={iconClasses.join(' ')}
		/>
	),
	[iconClasses]
	);

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
