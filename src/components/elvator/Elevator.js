import React from 'react';
import './elevator.css';
const Elevator = ({ position }) => {
	return <div style={{ bottom: `${position * 120}px` }} className='elevator'></div>;
};

export default Elevator;
