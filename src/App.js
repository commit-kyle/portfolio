import React, { useContext } from 'react';

import ThemeContext from './components/store/theme-context/theme-context';

import classes from './App.module.css';

import Main from './components/Main/Main';
import About from './components/PortfolioSections/About/About';
import SocialIcons from './components/UI/SocialIcons/SocialIcons';

const App = props => {
	const theme = useContext(ThemeContext);

	let parentClasses = [classes.Parent, classes.Light];

	if (theme.isDarkModeActive) {
		parentClasses = [classes.Parent, classes.Dark]
	}

	return (
		<React.Fragment>
			<div className={parentClasses.join(' ')}>
				<Main onClick={props.onClick} />
				<About />
			</div>
			<SocialIcons />
		</React.Fragment>
	);
};

export default App;
