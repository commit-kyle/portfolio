import React, { useContext } from 'react';

import ThemeContext from '../../../../components/store/theme-context/theme-context';

import classes from './AboutImage.module.css';

const AboutImage = () => {
  const theme = useContext(ThemeContext);

  let imgClasses = [classes.ImageContainer, classes.Light];

  if (theme.isDarkModeActive) {
    imgClasses = [classes.ImageContainer, classes.Dark];
  }

  return (
    <div className={imgClasses.join(' ')}>
      <div className={classes.ImageGlitch}></div>
      <div className={classes.ImageGlitch}></div>
      <div className={classes.ImageGlitch}></div>
      <div className={classes.ImageGlitch}></div>
      <div className={classes.ImageGlitch}></div>
    </div>
  )
}

export default AboutImage;
