import React from 'react';
import './App.css';
import Card from './Card';

const Service = ()=> {
	const Sdata = [
		{
			title: 'Web Development',
			image: 'https://picsum.photos/id/10/150/150'
		},
		{
			title: 'App Development',
			image: 'https://picsum.photos/id/20/150/150'
		},
		{
			title: 'Blockchain',
			image: 'https://picsum.photos/id/30/150/150'
		},
		{
			title: 'AR/VR',
			image: 'https://picsum.photos/id/40/150/150'
		},
		{
			title: 'Cyber Security',
			image: 'https://picsum.photos/id/50/150/150'
		},
		{
			title: 'Machine Learning',
			image: 'https://picsum.photos/id/60/150/150'
		}
	]
  return (
    <>
	  <div className="my-5">
		  <h1 className="text-center"> Our Services </h1>
	  </div>
	  <div className="container-fluid mb-5">
		  <div className="row">
			  <div className="col-10 mx-auto">
				  <div className="row gy-4">
					 { Sdata.map((val, index)=>{
						  return <Card title={val.title} image={val.image} key={index} />
					  })
						  }
					 
				  </div>
			  </div>
		  </div>
	  </div>
	</>
  );
}

export default Service;
