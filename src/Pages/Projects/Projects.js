import React, { Fragment } from 'react';

import Projects from '../../components/PortfolioSections/Portfolio/Projects/Projects';

const Project = props => (
	<Fragment>
		<Projects showMenu={props.showMenu} menuActive={props.menuActive} />
	</Fragment>
);

export default Project;
