import React from 'react';

import classes from './CTA.module.css';

const CTA = props => {
	return (
		<button onClick={props.click} className={classes.CTA}>
			Get in touch
		</button>
	);
};

export default CTA;
