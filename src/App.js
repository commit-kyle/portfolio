import React from 'react';
import Aux from './Auxiliary/Auxiliary';

import classes from './App.module.css';

import Main from './components/Main/Main';
import About from './components/PortfolioSections/About/About';
import SocialIcons from './components/UI/SocialIcons/SocialIcons';

const App = () => {
	return (
		<Aux>
			<div className={classes.Parent}>
				<Main />
				<About />
			</div>
			<SocialIcons />
		</Aux>
	);
};

export default App;
