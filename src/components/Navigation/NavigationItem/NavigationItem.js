import React, { useContext } from 'react';

import ThemeContext from '../../store/theme-context/theme-context';

import classes from './NavigationItem.module.css';

const NavItem = props => {
	const theme = useContext(ThemeContext);

	let ItemLinkClasses = [classes.ItemLink, classes.ItemLinkLight];
	// let ItemBorderClasses = [classes.ItemBorder, classes.ItemBorderLight];

	if (theme.isDarkModeActive) {
		ItemLinkClasses = [classes.ItemLink, classes.ItemLinkDark];

		// ItemBorderClasses = [classes.ItemBorder, classes.ItemBorderDark]
	}
	
	return (
		<li className={classes.ListItem}>
			<a
				className={ItemLinkClasses.join(' ')}
				href={props.link}
				onClick={props.sectionLink}
			>
				{props.name}
			</a>
			{/* <span className={ItemBorderClasses.join(' ')}></span> */}
		</li>
	);
};

export default NavItem;
