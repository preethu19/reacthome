import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

const App = ()=> {
  return (
    <>
	  <Navbar />
	  <Switch>
	  	<Route exact path='/' component={Home} /> 
		<Route exact path='/contact' component={Contact} /> 
		<Route exact path='/service' component={Service} /> 
		<Route exact path='/about' component={About} /> 
		<Redirect to='/' />
	  </Switch>
	  <Footer />
	</>
  );
}

export default App;
