import React from 'react';

import classes from './SocialLink.module.css';

const SocialLink = props => {
	return (
		<div
			className={classes.Main}
			style={{
				borderRight: `6px solid ${props.BrandColor}`,
				top: `${props.PosTop}`,
			}}
		>
			<div className={classes.Container}>
				<div className={classes.SocialBrandName}>
					<a
						href={props.socialUrl}
						style={{ color: `${props.BrandColor}` }}
						target="_blank"
						rel="noreferrer"
					>
						{props.socialBrand}
					</a>
				</div>
				<div className={classes.SocialImageContainer}>
					<img
						className={classes.SocialImage}
						src={props.imgSrc}
						alt={props.imgAlt}
					/>
				</div>
			</div>
		</div>
	);
};

export default SocialLink;
