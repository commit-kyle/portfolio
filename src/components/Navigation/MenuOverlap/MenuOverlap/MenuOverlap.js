import React from 'react';

import classes from './MenuOverlap.module.css';

import Backdrop from '../../../UI/Backdrop/Backdrop';
import LogoMin from '../../../Logo/LogoMin/LogoMin';
import NavItem from '../../NavigationItem/NavigationItem';
import Hamburger from '../Hamburger/Hamburger';

const MenuOverlap = props => {
	return (
		<React.Fragment>
			<div className={classes.ContainerPrimary}>
				<Backdrop
					showBackdrop={props.menuActive}
					hideBackdrop={props.hideBackdrop}
				/>
				<div className={classes.MenuContainer}>
					<LogoMin sectionLink={props.sectionLink} />
					<div className={classes.itemsContainer}>
						<NavItem
							link={'#About'}
							name={'About'}
							sectionLink={props.sectionLink}
						/>
						<NavItem
							link={'#'}
							name={'Portfolio'}
							sectionLink={props.sectionLink}
						/>
						<NavItem
							link={'#'}
							name={'Contact'}
							sectionLink={props.sectionLink}
						/>
					</div>
					<div className={classes.MenuIcon}>
						<Hamburger
							menuActive={props.menuActive}
							showMenu={props.showMenu}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default MenuOverlap;
