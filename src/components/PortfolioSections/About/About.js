import React from 'react';

import classes from './About.module.css';

import Info from '../About/AboutInfo/AboutInfo';

const About = props => {
	const aboutData = {
		first: {
			header: 'work hard',
			subHeader:
				"To work hard means to push yourself further and that's what you need to swim across the atlantic",
			text:
				"I've been working hard all my life and I've even been doing so in school and when I come across a sucker I lick it so that it doesn't drip into the land of the thirsty and I don't know what I'm writing but I hope it all makes sense to the dogs who lie in the lounge when they dream about donkeys",
		},

		second: {
			header: 'work hard',
			subHeader:
				"To work hard means to push yourself further and that's what you need to swim across the atlantic",
			text:
				"I've been working hard all my life and I've even been doing so in school and when I come across a sucker I lick it so that it doesn't drip into the land of the thirsty and I don't know what I'm writing but I hope it all makes sense to the dogs who lie in the lounge when they dream about donkeys",
		},

		third: {
			header: 'work hard',
			subHeader:
				"To work hard means to push yourself further and that's what you need to swim across the atlantic",
			text:
				"I've been working hard all my life and I've even been doing so in school and when I come across a sucker I lick it so that it doesn't drip into the land of the thirsty and I don't know what I'm writing but I hope it all makes sense to the dogs who lie in the lounge when they dream about donkeys",
		},
	};

	return (
		<section id="About" className={classes.Child}>
			<div className={classes.Container}>
				<div className={classes.Header}>
					<h2 className={classes.Heading}>A little about me</h2>
				</div>

				<div className={classes.Parent}>
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
		</section>
	);
};

export default About;
