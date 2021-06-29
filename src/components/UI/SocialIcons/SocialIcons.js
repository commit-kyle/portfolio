import React from 'react';
import Aux from '../../../Auxiliary/Auxiliary'

import LinkedIn from '../../../Assets/Images/SocialIcons/linkedin.png';
import Twitter from '../../../Assets/Images/SocialIcons/twitter.png';
import Github from '../../../Assets/Images/SocialIcons/github.png';

import Link from './SocialLink/SocialLink';

const SocialIcons = props => {
	return (
		<Aux>
			<Link
				BrandColor={'#0E76A8'}
				PosTop={'20rem'}
				imgSrc={LinkedIn}
				imgAlt={'Linkedin account of Kyle Buttress'}
				socialUrl={'https://www.linkedin.com/in/kyle-buttress-0246b91b8/'}
				socialBrand={'LinkedIn'}
			/>
			<Link
				BrandColor={'#00ACEE'}
				PosTop={'23.1rem'}
				imgSrc={Twitter}
				imgAlt={'Twitter account of Kyle Buttress'}
				socialUrl={'https://twitter.com/sirCodeal0t'}
				socialBrand={'Twitter'}
			/>
			<Link
				BrandColor={'#211F1F'}
				PosTop={'26.2rem'}
				imgSrc={Github}
				imgAlt={'Github account of Kyle Buttress'}
				socialUrl={'https://github.com/commit-kyle'}
				socialBrand={'Github'}
			/>
		</Aux>
	);
};

export default SocialIcons;
