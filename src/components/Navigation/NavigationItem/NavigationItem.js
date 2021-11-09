import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';

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
		<li className={classes.ListItem} onClick={props.navItemClick}>
			<HashLink to={props.link} smooth className={ItemLinkClasses.join(' ')}>
				{props.name}
			</HashLink>
			{/* <span className={ItemBorderClasses.join(' ')}></span> */}
		</li>
	);
};

export default NavItem;
