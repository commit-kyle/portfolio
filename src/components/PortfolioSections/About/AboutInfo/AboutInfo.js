import React from 'react';

import classes from './AboutInfo.module.css';

const Info = props => {

	return (
		<div className={classes.Child}>
			<span className={classes.Progress}>
				<span className={classes.ProgressNumber}>{props.number}</span>
			</span>
			<div className={classes.Content}>
				<h2 id="header" className={classes.Header}>{props.header}</h2>
				<p id="subHeader" className={classes.SubHeader}>{props.subHeader}</p>
				<p id="text" className={classes.Text}>{props.text}</p>
			</div>
		</div>
	);
};

export default Info;
