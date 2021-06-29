import React, { useState } from 'react';
import Aux from '../../Auxiliary/Auxiliary';

import Header from '../Header/Header';
import MenuOverlap from '../Navigation/MenuOverlap/MenuOverlap/MenuOverlap';

const Main = props => {
	const [active, setActive] = useState(false);

	const toggleMenu = () => {
		setActive(!active);
	};

	let menuOverlap = null;

	active
		? (menuOverlap = (
				<MenuOverlap
					menuActive={active}
					hideBackdrop={toggleMenu}
					showMenu={toggleMenu}
					sectionLink={toggleMenu}
				/>
		  ))
		: (menuOverlap = null);

	return (
		<Aux>
			<Header showMenu={toggleMenu} menuActive={active} />
			{menuOverlap}
		</Aux>
	);
};

export default Main;
