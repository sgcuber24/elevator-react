import React from 'react';
import Floor from './Floor';

const Floors = ({ positionChangeHandler }) => {
	const floors = [4, 3, 2, 1, 0];
	return (
		<div>
			{floors.map(f => (
				<Floor key={f} f={f} positionChangeHandler={positionChangeHandler} />
			))}
		</div>
	);
};

export default Floors;
