import React from 'react';
import Common from './Common';
import './App.css';
import img from './home.svg';

const Home = () => {
	return(
		<>
			<Common name='Grow your bussiness with' button='Get Started' link='/service' image={img} />
        </>
		)
}

export default Home;