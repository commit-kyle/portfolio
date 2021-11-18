import { useContext } from 'react';
import ThemeContext from '../../../../store/theme-context/theme-context';

import classes from './Project.module.css';
import Links from '../../../../UI/Buttons/Links/Links';

const Project = props => {
	// props.title
	// props.url
	// props.responsive

	const theme = useContext(ThemeContext);

	let titleClasses = [classes.Title, classes.TitleLight];
	let imgClasses = [classes.ImgContainer, classes.ImgContainerLight];

	if (theme.isDarkModeActive) {
		titleClasses = [classes.Title, classes.TitleDark];
		imgClasses = [classes.ImgContainer, classes.ImgContainerDark];
	}

	return (
		<div className={classes.Container}>
			<div className={classes.Content}>
				<div className={imgClasses.join(' ')}>
					<img className={classes.Img} src={props.src} alt={props.alt} />
				</div>
			</div>
			<div className={classes.Links}>
				<div className={titleClasses.join(' ')}>
					<h1>{props.title}</h1>
				</div>
				<Links url={props.url}>Demo</Links>
				<Links summary={props.summary} onClick={props.onClick}>
					Summary
				</Links>
			</div>
		</div>
	);
};

export default Project;
