import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import ThemeContext from './components/store/theme-context/theme-context';

import MenuOverlap from './components/Navigation/MenuOverlap/MenuOverlap/MenuOverlap';
import SocialIcons from './components/UI/SocialIcons/SocialIcons';
import Main from './Pages/Main/Main';
import Projects from './Pages/Projects/Projects';
import Navigation from './components/Navigation/Navigation';

const App = () => {
	// THEME LOGIC //
	const [isDarkModeActive, setIsDarkModeActive] = useState(false);

	const changeTheme = () => {
		setIsDarkModeActive(!isDarkModeActive);
	};

	// MENU TOGGLE LOGIC //
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
					onClick={changeTheme}
					navItemClick={toggleMenu}
				/>
		  ))
		: (menuOverlap = null);

	return (
		<ThemeContext.Provider value={{ isDarkModeActive: isDarkModeActive }}>
			<Navigation showMenu={toggleMenu} menuActive={active} />
			<SocialIcons />
			{menuOverlap}
			<Switch>
				<Route path="/portfolio" exact>
					<Redirect to="/home" />
				</Route>
				<Route path="/home">
					<Main showMenu={toggleMenu} menuActive={active} />
				</Route>
				<Route path="/projects">
					<Projects showMenu={toggleMenu} menuActive={active} />
				</Route>
			</Switch>
		</ThemeContext.Provider>
	);
};

export default App;
