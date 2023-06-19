import React, { useContext, useMemo } from 'react';
import ThemeContext from '../../../components/store/theme-context/theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Info from './AboutInfo/AboutInfo';
import AboutImage from './AboutImage/AboutImage';
import aboutData from '../../../Assets/DataStore/About/aboutData.json';

import classes from './About.module.css';

const About = () => {

	const theme = useContext(ThemeContext);

	const parentClasses = useMemo(() => {
		return theme.isDarkModeActive
		? [classes.Parent, classes.ParentDark]
		: [classes.Parent, classes.ParentLight];
	}, [theme.isDarkModeActive]);

	const headingClasses = useMemo(() => {
		return theme.isDarkModeActive
		? [classes.Heading, classes.HeadingDark]
		: [classes.Heading, classes.HeadingLight];
	}, [theme.isDarkModeActive]);

	const iconClasses = useMemo(() => {
		return theme.isDarkModeActive
		? [classes.Icon, classes.IconDark]
		: [classes.Icon, classes.IconLight];
	}, [theme.isDarkModeActive]);

	const iconAbout = useMemo(
		() => <FontAwesomeIcon icon={faAddressBook} size="2x" className={iconClasses.join(' ')} />,
		[iconClasses]
	);

	return (
		<section id="about" className={classes.Child}>
			<div className={classes.AboutContainer}>
				<div className={classes.HeaderContainer}>
					<div className={classes.Title}>
						<h2 className={headingClasses.join(' ')}>A little about me</h2>
						{iconAbout}
					</div>
					<AboutImage />
				</div>
				<div className={classes.InfoContainer}>
					<div className={parentClasses.join(' ')}>
						<Info
							number={aboutData.first.id}
							header={aboutData.first.header}
							subHeader={aboutData.first.subHeader}
							text={aboutData.first.text}
						/>
						<Info
							number={aboutData.second.id}
							header={aboutData.second.header}
							subHeader={aboutData.second.subHeader}
							text={aboutData.second.text}
						/>
						<Info
							number={aboutData.third.id}
							header={aboutData.third.header}
							subHeader={aboutData.third.subHeader}
							text={aboutData.third.text}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
