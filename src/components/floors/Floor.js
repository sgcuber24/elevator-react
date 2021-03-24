import React from 'react';
import './floor.css';
const Floor = ({ f, positionChangeHandler }) => {
	const clickHandler = () => {
		positionChangeHandler(f);
	};
	return (
		<div className='floor'>
			<button onClick={clickHandler}>Floor {f}</button>
		</div>
	);
};

export default Floor;
