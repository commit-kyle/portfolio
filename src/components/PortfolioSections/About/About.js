import React, { useContext } from 'react';

import ThemeContext from '../../store/theme-context/theme-context';

import classes from './About.module.css';

import Info from '../About/AboutInfo/AboutInfo';
import AboutImage from './AboutImage/AboutImage';

const About = props => {
	const aboutData = {
		first: {
			header: 'Where it all started',
			subHeader: 'The trick is growing up without growing old',
			text: "Born and raised in the city of Cape Town, South Africa. I ",
		},

		second: {
			header: 'work hard',
			subHeader:
				"To work hard means to push yourself further and that's what you need to swim across the atlantic",
			text: "I've been working hard all my life and I've even been doing so in school and when I come across a sucker I lick it so that it doesn't drip into the land of the thirsty and I don't know what I'm writing but I hope it all makes sense to the dogs who lie in the lounge when they dream about donkeys",
		},

		third: {
			header: 'work hard',
			subHeader:
				"To work hard means to push yourself further and that's what you need to swim across the atlantic",
			text: "I've been working hard all my life and I've even been doing so in school and when I come across a sucker I lick it so that it doesn't drip into the land of the thirsty and I don't know what I'm writing but I hope it all makes sense to the dogs who lie in the lounge when they dream about donkeys",
		},
	};

	const theme = useContext(ThemeContext);

	let parentClasses = [classes.Parent, classes.ParentLight];
	let headingClasses = [classes.Heading, classes.HeadingLight];

	if (theme.isDarkModeActive) {
		parentClasses = [classes.Parent, classes.ParentDark];
		headingClasses = [classes.Heading, classes.HeadingDark];
	}

	return (
		<section id="About" className={classes.Child}>
			<div className={classes.AboutContainer}>
				<div className={classes.HeaderContainer}>
					<h2 className={headingClasses.join(' ')}>A little about me</h2>
					<AboutImage />
				</div>
				<div className={classes.InfoContainer}>
					<div className={parentClasses.join(' ')}>
						<Info
							number={'1'}
							header={aboutData.first.header}
							subHeader={aboutData.first.subHeader}
							text={aboutData.first.text}
						/>
						<Info
							number={'2'}
							header={aboutData.first.header}
							subHeader={aboutData.first.subHeader}
							text={aboutData.first.text}
						/>
						<Info
							number={'3'}
							header={aboutData.first.header}
							subHeader={aboutData.first.subHeader}
							text={aboutData.first.text}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
