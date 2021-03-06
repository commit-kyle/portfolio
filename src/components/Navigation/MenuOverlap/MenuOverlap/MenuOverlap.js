import React, { useContext } from 'react';

import ThemeContext from '../../../store/theme-context/theme-context';

import classes from './MenuOverlap.module.css';

import Backdrop from '../../../UI/Backdrop/Backdrop';
import LogoMin from '../../../Logo/LogoMin/LogoMin';
import NavItem from '../../NavigationItem/NavigationItem';
import Hamburger from '../Hamburger/Hamburger';
import ThemeBtn from '../../../UI/Buttons/ThemeBtn/ThemeBtn';

const MenuOverlap = props => {
	const theme = useContext(ThemeContext);

	let MenuClasses = [classes.MenuContainer, classes.Light];

	if (theme.isDarkModeActive) {
		MenuClasses = [classes.MenuContainer, classes.Dark];
	}

	return (
		<div className={classes.ContainerPrimary}>
			<Backdrop
				showBackdrop={props.menuActive}
				hideBackdrop={props.hideBackdrop}
			/>
			<div className={MenuClasses.join(' ')}>
				<LogoMin sectionLink={props.sectionLink} />
				<ThemeBtn onClick={props.onClick} />
				<div className={classes.itemsContainer}>
					<NavItem
						navItemClick={props.navItemClick}
						link={'/home#about'}
						name={'About'}
					/>
					<NavItem
						navItemClick={props.navItemClick}
						link={'/home#portfolio'}
						name={'Portfolio'}
					/>
					<NavItem
						navItemClick={props.navItemClick}
						link={'/home#contact'}
						name={'Contact'}
					/>
				</div>

				<div className={classes.MenuIcon}>
					<Hamburger menuActive={props.menuActive} showMenu={props.showMenu} />
				</div>
			</div>
		</div>
	);
};

export default MenuOverlap;
