import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import ThemeContext from '../../store/theme-context/theme-context';

import classes from './LogoMin.module.css';

const LogoMin = props => {
	const theme = useContext(ThemeContext);

	let pathClasses = [classes.Path, classes.Light];

	if (theme.isDarkModeActive) {
		pathClasses = [classes.Path, classes.Dark];
	}
	return (
		<div className={classes.Container}>
			<HashLink to="/home#home" smooth onClick={props.sectionLink}>
				<svg
					className={classes.SVG}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 50"
				>
					<path
						className={pathClasses.join(' ')}
						d="M6.14,28.65V46.81a3,3,0,0,1-3,3.17A3.17,3.17,0,0,1,0,46.81V3.24A3.24,3.24,0,0,1,3.14,0a3.12,3.12,0,0,1,3,3.24V19.68L25,.9h-.07A2.64,2.64,0,0,1,27.1,0a3.35,3.35,0,0,1,2.47,5.5Zm25.53,3.61V46.81A3.28,3.28,0,0,1,28.52,50a3.17,3.17,0,0,1-3.14-3.17V32.26a6.14,6.14,0,0,0-2.32-5.2,5.76,5.76,0,0,0-4.19-1.35h-5.4l6.29-6.26a13.39,13.39,0,0,1,7,2.41A12.81,12.81,0,0,1,31.67,32.26Z"
					/>
					<path
						className={pathClasses.join(' ')}
						d="M29.5,49.8a1.35,1.35,0,0,0,.32-.15l.23-.12a2,2,0,0,0,.28-.19.76.76,0,0,0,.11-.08c.17-.13.17-.16.29-.26a4,4,0,0,0,.41-.51l.12-.18a3.93,3.93,0,0,0,.2-.43,2.57,2.57,0,0,0,.21-.9V45.49h0a1.93,1.93,0,0,0,0-.34v-.38c0-.06,0-.7,0-.76v-.19h0a1.08,1.08,0,0,0,0-.18h.09l3.19.06a8.9,8.9,0,0,0,0-17.79,3.37,3.37,0,0,1-3.22-3.24A3.26,3.26,0,0,1,35,19.55a5.83,5.83,0,0,0,5.55-3.08c2.6-5.24-.94-10.12-5.63-10.12H28.72a.6.6,0,0,0,.08-.08l.11-.13L29.07,6c.05,0,.21-.19.25-.24s.22-.2.25-.25a2.38,2.38,0,0,0,.26-.31l.08-.11S30,5,30,4.92a1.11,1.11,0,0,0,.14-.26s.09-.28.11-.33.05-.24.07-.3,0-.26,0-.3a2.18,2.18,0,0,0,0-.28V3.2c0-.13,0-.26,0-.33a3,3,0,0,0-.11-.46S30.06,2,30.06,2c-.07-.17-.13-.22-.16-.33l-.06-.11a1.07,1.07,0,0,0-.19-.28l0,0-.08-.1A.69.69,0,0,0,29.43,1a3.62,3.62,0,0,0-1.8-1h-.07V0h7.33A12.78,12.78,0,0,1,47.6,12.91a12,12,0,0,1-3.89,9.36.08.08,0,0,0,0,.12A15.27,15.27,0,0,1,35,50l-6.31,0,.51-.08"
					/>
				</svg>
			</HashLink>
		</div>
	);
};

export default LogoMin;
