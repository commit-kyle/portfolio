import React from 'react';
import { Link } from 'react-router-dom';

import Content from '../../../components/PortfolioSections/Portfolio/PortfolioContent/Content';
import CTA from '../../../components/UI/Buttons/CTA/CTA';

import classes from './Portfolio.module.css';

const Portfolio = () => {
	return (
		<section id="portfolio" className={classes.Child}>
			<Content />
			<Link to="/projects">
				<CTA>Projects</CTA>
			</Link>
		</section>
	);
};

export default Portfolio;
