import React from 'react';
import Aux from './Auxiliary/Auxiliary';

import classes from './App.module.css';

import Portfolio from './components/Main/Main';
import About from './components/PortfolioSections/About/About';
import SocialIcons from './components/UI/SocialIcons/SocialIcons';

const App = () => {
	return (
		<Aux>
			<div className={classes.Parent}>
				<Portfolio />
				<About />
			</div>
			<SocialIcons />
		</Aux>
	);
};

export default App;
