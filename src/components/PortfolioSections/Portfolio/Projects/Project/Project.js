import { useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faLink } from '@fortawesome/free-solid-svg-icons';

import classes from './Project.module.css';

const Project = props => {
	const iconLink = useMemo(
		() => (
			<FontAwesomeIcon icon={faLink} size="2x" className={classes.iconLink} />
		),
		[]
	);

	const iconInfo = useMemo(
		() => (
			<FontAwesomeIcon icon={faInfo} size="2x" className={classes.iconInfo} />
		),
		[]
	);

	return (
		<div className={classes.Container}>
			<div className={classes.FirstContent}>
				<h1>{props.title}</h1>
				<div className={classes.Link}>
					<p>Live Demo</p>
					<a href={props.url} target="_blank" rel="noreferrer">
						{iconLink}
					</a>
				</div>
			</div>
			<div className={classes.SecondContent}>{props.text}</div>
			<span className={classes.Info}>{iconInfo}</span>
		</div>
	);
};

export default Project;
