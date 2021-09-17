import React, { useState } from 'react';

import ThemeContext from '../store/theme-context/theme-context';

import App from '../../App';

const Container = () => {
	const [isDarkModeActive, setIsDarkModeActive] = useState(false);

	const changeTheme = () => {
		setIsDarkModeActive(!isDarkModeActive);
  }

	return (
		<ThemeContext.Provider value={{ isDarkModeActive: isDarkModeActive }}>
			<App onClick={changeTheme} />
		</ThemeContext.Provider>
	);
};

export default Container;
