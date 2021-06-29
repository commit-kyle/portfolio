import React from 'react';

import classes from './NavigationItem.module.css';

const NavItem = props => {
	return (
		<li className={classes.ListItem}>
			<a className={classes.ItemLink} href={props.link} onClick={props.sectionLink}>
				{props.name}
			</a>
			<span className={classes.ItemBorder}></span>
		</li>
	);
};

export default NavItem;
