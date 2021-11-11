import React, { Fragment } from 'react';

import Projects from '../../components/PortfolioSections/Portfolio/Projects/Projects';

import classes from './Projects.module.css';

const Project = props => (
	<div className={classes.Container}>
		<Projects showMenu={props.showMenu} menuActive={props.menuActive} />
	</div>
);

export default Project;
