import React from 'react';
import Common from './Common';
import './App.css';
import img from './about.svg';

const About = () => {
	return(
		<>
			<Common name='Welcome to About page' button='Contact Us' link='/contact'image={img} />
        </>
		)
}

export default About;